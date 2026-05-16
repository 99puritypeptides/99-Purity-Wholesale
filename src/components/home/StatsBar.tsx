import { useTranslations } from 'next-intl';
import { ShieldCheck, Activity, Users, Globe2 } from 'lucide-react';

export default function StatsBar() {
  const t = useTranslations('Index.StatsBar');

  const stats = [
    { key: 'purity', num: '≥99.0%', icon: ShieldCheck },
    { key: 'compounds', num: 'HPLC', icon: Activity },
    { key: 'clients', num: '200+', icon: Users },
    { key: 'coverage', num: 'USA', icon: Globe2 }
  ];

  return (
    <div className="relative z-30 -mt-10 max-w-[1400px] mx-auto px-6 flex justify-center">
      <div className="bg-white rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.12)] border border-black/5 p-10 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
        {stats.map((stat, idx) => (
          <div key={stat.key} className="flex items-center gap-6 group">
            <div className="w-14 h-14 rounded-2xl bg-[#f8f8f8] flex items-center justify-center text-black/20 group-hover:bg-black group-hover:text-white transition-all duration-500">
               <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <div className="text-3xl font-absans font-bold tracking-tighter text-black leading-none mb-1">
                {stat.num}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                {t(`${stat.key}.label`)}
              </div>
            </div>
            {idx !== stats.length - 1 && (
              <div className="hidden lg:block h-12 w-px bg-black/5 ml-10" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
