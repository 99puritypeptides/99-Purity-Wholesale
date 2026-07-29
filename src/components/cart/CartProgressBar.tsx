"use client";

import React, { useEffect, useRef, useState } from "react";
import { Truck, Percent, Sparkles } from "lucide-react";
import { CartItem } from "@/types/cart";
import { useTranslations } from "next-intl";

interface CartProgressBarProps {
  items: CartItem[];
}

export default function CartProgressBar({ items }: CartProgressBarProps) {
  const t = useTranslations("Layout.cart.progressBar");
  const [mounted, setMounted] = useState(false);
  const [hoveredMilestone, setHoveredMilestone] = useState<string | null>(null);

  // 1. Calculate values
  const totalKits = items.reduce((sum, item) => sum + item.quantity, 0);

  const shippingUnlocked = totalKits >= 8;
  const tier1Unlocked = totalKits >= 10;
  const tier2Unlocked = totalKits >= 20;
  const tier3Unlocked = totalKits >= 40;

  // 2. Confetti Particle System
  const triggerConfetti = () => {
    if (typeof window === "undefined") return;
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.left = "0";
    canvas.style.top = "0";
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "99999";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = (canvas.width = window.innerWidth);
      height = (canvas.height = window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    const colors = ["#13a7b7", "#00e5ff", "#FFFFFF", "#38bdf8", "#0ea5e9"];

    // Spawn from the bottom right (over the Cart Drawer footer area)
    const startX = width - 250;
    const startY = height - 150;

    const particles = Array.from({ length: 60 }).map(() => ({
      x: startX,
      y: startY,
      size: Math.random() * 6 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedX: (Math.random() - 0.55) * 12 - 2, // Lean left into the drawer area
      speedY: -(Math.random() * 12 + 8),
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 6 - 3,
      opacity: 1,
    }));

    let animationFrameId: number;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      let anyActive = false;

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.speedY += 0.28; // Gravity
        p.speedX *= 0.98; // Air drag
        p.rotation += p.rotationSpeed;
        p.opacity -= 0.008; // Fade out

        if (p.y < height && p.opacity > 0) {
          anyActive = true;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.opacity;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
        }
      });

      if (anyActive) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        window.removeEventListener("resize", handleResize);
        canvas.remove();
      }
    };

    render();
  };

  // 3. Track Milestone Unlocks to trigger Confetti
  const prevUnlockedRef = useRef({
    shipping: false,
    tier1: false,
    tier2: false,
    tier3: false,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const prev = prevUnlockedRef.current;

    const shippingJustUnlocked = !prev.shipping && shippingUnlocked;
    const tier1JustUnlocked = !prev.tier1 && tier1Unlocked;
    const tier2JustUnlocked = !prev.tier2 && tier2Unlocked;
    const tier3JustUnlocked = !prev.tier3 && tier3Unlocked;

    if (shippingJustUnlocked || tier1JustUnlocked || tier2JustUnlocked || tier3JustUnlocked) {
      triggerConfetti();
    }

    prevUnlockedRef.current = {
      shipping: shippingUnlocked,
      tier1: tier1Unlocked,
      tier2: tier2Unlocked,
      tier3: tier3Unlocked,
    };
  }, [shippingUnlocked, tier1Unlocked, tier2Unlocked, tier3Unlocked, mounted]);

  if (!mounted) return null;

  // 4. Non-linear mapping for visual milestone positions
  // Spaced out at 25%, 50%, 75%, 100% of the bar width
  const getVisualProgress = (kits: number): number => {
    if (kits <= 0) return 0;
    if (kits <= 8) {
      return (kits / 8) * 25;
    }
    if (kits <= 10) {
      return 25 + ((kits - 8) / 2) * 25;
    }
    if (kits <= 20) {
      return 50 + ((kits - 10) / 10) * 25;
    }
    if (kits <= 40) {
      return 75 + ((kits - 20) / 20) * 25;
    }
    return 100;
  };

  const progressPercent = getVisualProgress(totalKits);

  // Goals & Tip Messaging (Strictly counts, no prices)
  let tipMessage = "";
  if (!shippingUnlocked) {
    tipMessage = t("shippingGoal", { count: 8 - totalKits });
  } else if (!tier1Unlocked) {
    tipMessage = t("tier1Goal", { count: 10 - totalKits });
  } else if (!tier2Unlocked) {
    tipMessage = t("tier2Goal", { count: 20 - totalKits });
  } else if (!tier3Unlocked) {
    tipMessage = t("tier3Goal", { count: 40 - totalKits });
  } else {
    tipMessage = t("maxUnlocked");
  }

  const milestones = [
    {
      id: "shipping",
      label: "Free Shipping",
      pct: 25,
      unlocked: shippingUnlocked,
      desc: "Free Temperature-Controlled Shipping (8 kits)",
      icon: Truck,
    },
    {
      id: "tier1",
      label: "Tier 1",
      pct: 50,
      unlocked: tier1Unlocked,
      desc: "Tier-1 Growth Pricing: 10% Off (10-19 kits)",
      icon: Percent,
    },
    {
      id: "tier2",
      label: "Tier 2",
      pct: 75,
      unlocked: tier2Unlocked,
      desc: "Tier-2 Established Pricing: 15% Off (20-39 kits)",
      icon: Percent,
    },
    {
      id: "tier3",
      label: "Tier 3",
      pct: 100,
      unlocked: tier3Unlocked,
      desc: "Tier-3 Enterprise Pricing: 20% Off (40+ kits)",
      icon: Sparkles,
    },
  ];

  return (
    <div className="mb-4 bg-white border border-black/5 rounded-2xl p-4 flex flex-col gap-3.5 relative overflow-visible select-none shadow-sm">
      {/* Top line: Next Goal & Kits Progress */}
      <div className="flex items-center justify-between text-[10px] leading-tight">
        <span className="font-archia font-medium text-black/50 tracking-wide pr-2">
          {tipMessage}
        </span>
        <span className="font-archia font-bold text-[#13a7b7] tracking-wider shrink-0">
          {totalKits} / 40 Kits
        </span>
      </div>

      {/* Progress Track */}
      <div className="relative my-2.5 h-1 w-full bg-black/5 rounded-full">
        {/* Progress Fill */}
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#13a7b7]/60 to-[#13a7b7] rounded-full transition-all duration-700 ease-out shadow-[0_0_8px_rgba(19,167,183,0.3)]"
          style={{ width: `${progressPercent}%` }}
        />

        {/* Milestone Nodes */}
        {milestones.map((ms) => {
          const Icon = ms.icon;
          return (
            <div
              key={ms.id}
              className="absolute top-1/2 -translate-y-1/2 z-30 cursor-pointer"
              style={{ left: `${ms.pct}%`, transform: "translate(-50%, -50%)" }}
              onMouseEnter={() => setHoveredMilestone(ms.id)}
              onMouseLeave={() => setHoveredMilestone(null)}
            >
              {/* Minimalist Bead */}
              <div
                className={`w-3.5 h-3.5 rounded-full border transition-all duration-500 flex items-center justify-center ${
                  ms.unlocked
                    ? "bg-[#13a7b7] border-[#13a7b7] shadow-[0_0_10px_rgba(19,167,183,0.5)]"
                    : "bg-[#F8F8F6] border-black/10"
                }`}
              >
                {/* Active Inner Dot or Glow */}
                {ms.unlocked && (
                  <div className="absolute inset-0 rounded-full bg-[#13a7b7]/30 animate-ping opacity-75 scale-125" />
                )}
              </div>

              {/* Tooltip Popup */}
              <div
                className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-44 bg-white border border-black/5 rounded-xl p-2.5 text-[9px] text-black/80 leading-relaxed shadow-lg transition-all duration-300 pointer-events-none z-50 ${
                  hoveredMilestone === ms.id
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-1 scale-95"
                }`}
              >
                <div className="flex items-center gap-1.5 font-absans font-bold uppercase tracking-wider text-[#13a7b7] mb-0.5">
                  <Icon className="w-3 h-3 shrink-0" />
                  <span>{ms.label}</span>
                </div>
                <div className="font-archia text-black/50">{ms.desc}</div>
                {/* Tooltip Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-1.5 h-1.5 border-r border-b border-black/5 bg-white rotate-45 -translate-y-[3.5px]" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
