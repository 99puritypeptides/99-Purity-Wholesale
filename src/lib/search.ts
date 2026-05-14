import Fuse from 'fuse.js';

export interface ProductSearchItem {
  name: string;
  slug: string;
  category: string;
  description: string;
}

// Comprehensive alias mapping for research compounds
// These help the search engine find products based on common research/trade names
export const PRODUCT_ALIASES: Record<string, string[]> = {
  "semaglutide": ["Sema", "Ozempic", "Wegovy", "Rybelsus", "GLP-1", "GLP1", "Weight loss research"],
  "tirzepatide": ["Tirz", "Mounjaro", "Zepbound", "GLP-1/GIP", "Dual Agonist", "Metabolic"],
  "bpc-157": ["BPC157", "Body Protective Compound", "Healing Peptide", "Gut repair", "Injury recovery"],
  "tb-500": ["TB500", "Thymosin Beta 4", "TB4", "Recovery Peptide", "Repair"],
  "ghk-cu": ["GHK copper", "GHKCu", "Copper Peptide", "Skin Remodeling", "Collagen"],
  "retatrutide": ["Reta", "Triple Agonist", "GLP-1/GIP/GCGR", "LY3437943"],
  "cjc-1295-no-dac": ["CJC1295", "CJC no DAC", "Mod GRF", "Growth Hormone"],
  "cjc-1295-dac": ["CJC DAC", "Long acting growth hormone"],
  "ipamorelin": ["Ipam", "GHRP", "Growth Hormone Releasing Peptide"],
  "tesamorelin": ["Tesa", "Egrifta", "Abdominal fat research"],
  "pt-141": ["PT141", "Bremelanotide", "Vyleesi", "Libido", "Melanocortin"],
  "melanotan-ii": ["MT2", "Melanotan 2", "Tanning Peptide"],
  "epithalon": ["Epitalon", "Telomere", "Anti-aging", "Longevity"],
  "nad": ["NAD+", "NAD Plus", "Nicotinamide Adenine Dinucleotide"],
  "mots-c": ["MOTC", "Mitochondrial Peptide", "Exercise mimetic"],
  "hgh-fragment-176-191": ["Frag", "HGH Frag", "Fat Loss Frag", "Fragment"],
  "cagrilintide": ["Cagri", "Amylin analog"],
  "tesofensine": ["Teso", "Cognitive research"],
  "5-amino-1mq": ["5-Amino", "1MQ", "Metabolic activator"]
};

export function getSearchEngine(products: ProductSearchItem[]) {
  const productsWithAliases = products.map(p => ({
    ...p,
    searchAliases: PRODUCT_ALIASES[p.slug] || []
  }));

  const options = {
    keys: [
      { name: 'name', weight: 1.0 },
      { name: 'searchAliases', weight: 0.8 },
      { name: 'category', weight: 0.5 },
      { name: 'description', weight: 0.3 }
    ],
    threshold: 0.35, // Balanced between strict and fuzzy
    distance: 100,
    ignoreLocation: true,
    minMatchCharLength: 2,
  };

  return new Fuse(productsWithAliases, options);
}
