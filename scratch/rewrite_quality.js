const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/locations/QualityStandardsSection.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

// Update props
content = content.replace(
  'export default function QualityStandardsSection() {',
  'export default function QualityStandardsSection({ locationSlug }: { locationSlug?: string }) {'
);

// Add isAlabama variable
content = content.replace(
  '  const isEs = locale === \'es\';',
  '  const isEs = locale === \'es\';\n  const isAlabama = locationSlug === \'alabama\';'
);

// We'll create a function to replace paragraphs with ternary operators for isAlabama
function replaceParagraph(original, alabamaVersion) {
  // Escape quotes
  const safeOriginal = original.trim();
  const safeAlabama = alabamaVersion.trim();
  return `{isAlabama ? (\n              <>\n                ${safeAlabama}\n              </>\n            ) : (\n              <>\n                ${safeOriginal}\n              </>\n            )}`;
}

// English replacements
const enSppsP1_orig = `The structural integrity of a research peptide is determined entirely by the precision of its synthesis. At 99 Purity Wholesale, our compounds are manufactured utilizing state-of-the-art Solid-Phase Peptide Synthesis (SPPS) employing FMOC (Fluorenylmethyloxycarbonyl) chemistry. This methodology represents the gold standard in biochemical engineering, allowing for the rapid, highly controlled assembly of long amino acid chains without the risk of unwanted side reactions or structural folding errors.`;
const enSppsP1_al = `The structural integrity of a research peptide relies fundamentally on its synthesis. At 99 Purity Wholesale, our compounds are produced using state-of-the-art Solid-Phase Peptide Synthesis (SPPS) with FMOC (Fluorenylmethyloxycarbonyl) chemistry. This method is the premier standard in biochemical engineering, enabling the rapid and tightly controlled construction of complex amino acid chains without unwanted side reactions or structural folding errors.`;
content = content.replace(enSppsP1_orig, replaceParagraph(enSppsP1_orig, enSppsP1_al));

const enSppsP2_orig = `Unlike outdated liquid-phase synthesis methods, SPPS anchors the C-terminus of the growing peptide chain to an insoluble resin support. As each subsequent amino acid is introduced, the FMOC protecting group is temporarily removed, allowing for a highly specific covalent bond to form. This cycle is repeated with painstaking precision until the desired molecular sequence is achieved. For complex sequences like <Link href="/products/tirzepatide" className="text-[#13a7b7] hover:underline font-semibold">Tirzepatide</Link> (which consists of 39 distinct amino acids), this controlled environment is the only way to guarantee a flawless molecular profile.`;
const enSppsP2_al = `Unlike older liquid-phase synthesis techniques, SPPS secures the C-terminus of the growing peptide chain to an insoluble resin support. With the introduction of each subsequent amino acid, the FMOC protecting group is briefly removed, allowing a highly precise covalent bond to form. This process repeats meticulously until the exact molecular sequence is realized. For sophisticated sequences like <Link href="/products/tirzepatide" className="text-[#13a7b7] hover:underline font-semibold">Tirzepatide</Link>, this structured environment is essential for a flawless molecular profile.`;
content = content.replace(enSppsP2_orig, replaceParagraph(enSppsP2_orig, enSppsP2_al));

const enSppsP3_orig = `Furthermore, stereochemistry plays a crucial role in cellular binding affinity. Biological receptors are highly sensitive to the spatial arrangement of atoms. Our synthesis protocols strictly utilize the biologically active L-isomers (unless a specific D-isomer is required by the sequence), ensuring that the resulting compound perfectly mimics endogenous biological signals. Post-synthesis, the peptide is cleaved from the resin and subjected to rigorous purification to remove incomplete chains, free amino acids, and synthesis byproducts like trifluoroacetic acid (TFA) salts. The result is a sterile, highly pure compound ready for in-vitro experimentation.`;
const enSppsP3_al = `Additionally, stereochemistry is vital for cellular binding affinity. Biological receptors react strongly to the spatial arrangement of atoms. Our protocols strictly apply the biologically active L-isomers (unless a D-isomer is specified), ensuring the final compound accurately mimics endogenous biological signals. Following synthesis, the peptide is cleaved from the resin and undergoes stringent purification to eliminate incomplete chains, free amino acids, and synthesis byproducts. The final result is a sterile, ultra-pure compound prepared for in-vitro research.`;
content = content.replace(enSppsP3_orig, replaceParagraph(enSppsP3_orig, enSppsP3_al));

const enLyoP1_orig = `A peptide&apos;s purity at the point of synthesis is irrelevant if it degrades during transit. Peptides in aqueous solutions are highly susceptible to hydrolysis, oxidation, and rapid enzymatic degradation. To completely arrest these processes, all compounds distributed by 99 Purity Wholesale undergo an exhaustive lyophilization (freeze-drying) process before they ever leave the laboratory.`;
const enLyoP1_al = `A peptide&apos;s initial purity is compromised if it degrades during shipping. Aqueous peptide solutions are highly vulnerable to hydrolysis, oxidation, and rapid enzymatic breakdown. To completely halt these processes, every compound supplied by 99 Purity Wholesale undergoes a thorough lyophilization (freeze-drying) procedure before leaving the lab.`;
content = content.replace(enLyoP1_orig, replaceParagraph(enLyoP1_orig, enLyoP1_al));

const enLyoP2_orig = `Lyophilization is a complex thermodynamic process. The purified peptide solution is first frozen to ultra-low temperatures, converting the water content into solid ice. A deep vacuum is then applied, and the temperature is carefully raised. This allows the ice to sublimate—transitioning directly from a solid to a gas without passing through the liquid phase. The resulting product is a stable, porous, solid &quot;cake&quot; completely devoid of moisture. Because biological degradation requires water as a catalyst, this dehydrated state effectively places the peptide in suspended animation, allowing it to remain highly stable for extended periods, even at room temperature.`;
const enLyoP2_al = `Lyophilization is a specialized thermodynamic process. The purified peptide solution is first frozen at extreme low temperatures, turning the water content into solid ice. A deep vacuum is subsequently applied, and the temperature is gradually increased. This causes the ice to sublimate—transitioning directly from solid to gas without entering the liquid phase. The resulting product is a stable, porous &quot;cake&quot; completely free of moisture. Since biological degradation relies on water, this dehydrated state places the peptide in suspended animation, keeping it highly stable for long durations, even at room temperature.`;
content = content.replace(enLyoP2_orig, replaceParagraph(enLyoP2_orig, enLyoP2_al));

const enLyoP3_orig = `To further protect the fragile molecular structure during the freezing and drying phases, we utilize medical-grade Mannitol as a lyoprotectant and bulking agent. Mannitol forms an amorphous matrix around the peptide, preventing the formation of damaging ice crystals and ensuring rapid, complete dissolution when the researcher eventually reconstitutes the compound with <Link href="/products/bac-water" className="text-[#13a7b7] hover:underline font-semibold">bacteriostatic water</Link>. For particularly fragile compounds or extreme transit routes during peak summer months, our nationwide logistics network automatically upgrades shipments to specialized cold-chain protocols, utilizing insulated packaging and targeted thermal regulation to guarantee that molecular integrity is never compromised.`;
const enLyoP3_al = `To provide extra protection during freezing and drying, we use medical-grade Mannitol as a lyoprotectant and bulking agent. Mannitol creates an amorphous matrix around the peptide, preventing harmful ice crystals and ensuring rapid dissolution when researchers reconstitute the compound with <Link href="/products/bac-water" className="text-[#13a7b7] hover:underline font-semibold">bacteriostatic water</Link>. For especially delicate compounds or during intense summer transit, our logistics network automatically applies specialized cold-chain protocols, utilizing insulated packaging and targeted thermal control to maintain complete molecular integrity.`;
content = content.replace(enLyoP3_orig, replaceParagraph(enLyoP3_orig, enLyoP3_al));

fs.writeFileSync(filePath, content);
console.log('Successfully updated QualityStandardsSection.tsx for Alabama EN content.');
