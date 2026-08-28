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
  "5-amino-1mq": ["5-Amino", "1MQ", "Metabolic activator"],
  "5-amino-1mq-spray": ["5-Amino-1MQ Spray", "5 Amino 1MQ spray", "1MQ spray", "NNMT inhibitor spray", "NAD+ spray", "Metabolic research spray"],
  "tirzepatide-spray": ["Tirzepatide Spray", "Tirz spray", "GIP/GLP-1 spray", "dual agonist spray", "incretin spray", "Mounjaro spray", "Zepbound spray", "metabolic research spray"],
  "semaglutide-spray": ["Semaglutide Spray", "Sema spray", "GLP-1 spray", "GLP-1 agonist spray", "Ozempic spray", "Wegovy spray", "incretin spray", "metabolic research spray"],
  "retatrutide-spray": ["Retatrutide Spray", "Reta spray", "triple agonist spray", "GLP-1/GIP/glucagon spray", "tri-agonist spray", "LY3437943 spray", "metabolic research spray"],
  "thymosin-alpha-1-spray": ["Thymosin Alpha-1 Spray", "TA-1 spray", "Ta1 spray", "thymic peptide spray", "Zadaxin spray", "immune research spray", "Toll-like receptor peptide spray"],
  "tesamorelin-spray": ["Tesamorelin Spray", "Tesa spray", "GHRH analog spray", "TH9507 spray", "Egrifta spray", "growth hormone releasing spray", "somatotroph research spray"],
  "tesamorelin-ipamorelin-spray": ["Tesamorelin Ipamorelin Spray", "Tesa Ipa spray", "GHRH ghrelin blend spray", "growth hormone blend spray", "dual pathway GH spray"],
  "tb-500-spray": ["TB-500 Spray", "TB500 spray", "thymosin beta-4 spray", "Timbetasin spray", "actin sequestering peptide spray", "recovery research spray"],
  "snap-8-spray": ["SNAP-8 Spray", "Snap8 spray", "acetyl octapeptide-3 spray", "SNARE peptide spray", "Argireline analog spray"],
  "sermorelin-spray": ["Sermorelin Spray", "Sermorelin acetate spray", "GHRH 1-29 spray", "GHRH fragment spray", "growth hormone releasing spray"],
  "ss-31-spray": ["SS-31 Spray", "SS31 spray", "elamipretide spray", "cardiolipin peptide spray", "mitochondrial peptide spray", "MTP-131 spray"],
  "mots-c-spray": ["MOTS-c Spray", "MOTSc spray", "mitochondrial derived peptide spray", "AMPK peptide spray", "metabolic research spray"],
  "melanotan-1-spray": ["Melanotan-1 Spray", "MT-1 spray", "afamelanotide spray", "NDP-MSH spray", "melanocortin spray", "alpha-MSH analog spray"],
  "ll-37-spray": ["LL-37 Spray", "LL37 spray", "cathelicidin spray", "antimicrobial peptide spray", "hCAP18 spray"],
  "lipo-c-spray": ["Lipo-C Spray", "LipoC spray", "MIC spray", "methionine inositol choline spray", "lipotropic blend spray"],
  "l-carnitine-spray": ["L-Carnitine Spray", "Carnitine spray", "levocarnitine spray", "fatty acid oxidation spray", "amino research spray"],
  "klow-spray": ["KLOW Spray", "GHK-Cu BPC TB500 KPV blend", "dermal repair blend spray", "cellular health blend spray"],
  "kisspeptin-spray": ["Kisspeptin Spray", "Kisspeptin-10 spray", "KISS1R spray", "GPR54 spray", "metastin spray", "reproductive research spray"],
  "ipamorelin-spray": ["Ipamorelin Spray", "Ipa spray", "selective GH secretagogue spray", "ghrelin receptor spray", "growth factor research spray"],
  "igf-1-lr3-spray": ["IGF-1 LR3 Spray", "IGF1 LR3 spray", "Long R3 IGF-1 spray", "insulin-like growth factor spray", "growth factor research spray"],
  "hcg-spray": ["HCG Spray", "chorionic gonadotropin spray", "hCG spray", "LH receptor spray", "gonadotropin research spray"],
  "h-frag-spray": ["H-Frag Spray", "HGH Fragment 176-191 spray", "HGH frag spray", "lipolytic domain spray", "fat metabolism research spray"],
  "glutathione-spray": ["Glutathione Spray", "GSH spray", "reduced glutathione spray", "antioxidant tripeptide spray", "redox research spray"],
  "glow-spray": ["GLOW Spray", "GHK-Cu BPC TB500 blend", "skin remodeling blend spray", "cellular health blend spray"],
  "ghrp-6-spray": ["GHRP-6 Spray", "GHRP6 spray", "growth hormone releasing hexapeptide spray", "ghrelin receptor spray", "appetite signaling spray"],
  "ghrp-2-spray": ["GHRP-2 Spray", "GHRP2 spray", "pralmorelin spray", "KP-102 spray", "ghrelin receptor spray", "GH secretagogue spray"],
  "dihexa-spray": ["Dihexa Spray", "Dihexa nootropic spray", "angiotensin IV analog spray", "HGF c-Met spray", "cognitive research spray"],
  "cjc-1295-ipamorelin-spray": ["CJC-1295 Ipamorelin Spray", "CJC Ipa spray", "GHRH ghrelin blend spray", "growth hormone blend spray", "dual pathway GH spray"],
  "cjc-1295-dac-spray": ["CJC-1295 DAC Spray", "CJC1295 with DAC spray", "Drug Affinity Complex GHRH", "long acting GHRH analog spray", "albumin binding GHRH spray"],
  "cjc-1295-no-dac-spray": ["CJC-1295 No DAC Spray", "Mod GRF 1-29 spray", "modified GRF spray", "CJC1295 without DAC", "tetrasubstituted GHRH spray"],
  "cagrilintide-spray": ["Cagrilintide Spray", "Cagri spray", "amylin analog spray", "AM833 spray", "calcitonin receptor spray", "metabolic research spray"],
  "bpc-157-tb-500-spray": ["BPC-157 TB-500 Spray", "BPC TB500 blend spray", "pentadecapeptide thymosin blend", "recovery blend spray", "tissue repair blend spray"],
  "ara-290-spray": ["ARA-290 Spray", "ARA290 spray", "cibinetide spray", "innate repair receptor spray", "EPO derived peptide spray", "non-erythropoietic spray"],
  "aod9604-spray": ["AOD9604 Spray", "AOD 9604 spray", "modified HGH fragment spray", "lipolytic domain spray", "fat metabolism research spray"],
  "ahk-cu-spray": ["AHK-Cu Spray", "AHK copper peptide spray", "copper tripeptide-3 spray", "alanyl histidyl lysine copper", "dermal papilla research spray"],
  "bioregulator-core-panel": ["Bioregulator Core Panel", "bioregulator panel", "Khavinson peptide panel", "ultrashort peptide kit", "Pinealon Thymalin Cardiogen", "Chonluten Ovagen Cartalax", "organ system peptide panel", "short peptide bioregulators"],
  "bioregulator-full-master-set": ["Bioregulator Full Master Set", "bioregulator master set", "16 peptide bioregulator kit", "complete Khavinson set", "full bioregulator collection"],
  "bioregulator-cardiovascular": ["Bioregulator Cardiovascular", "Cardiogen Vesugen kit", "cardiac peptide panel", "vascular bioregulator", "KED peptide panel"],
  "bioregulator-hepatic-digestive": ["Bioregulator Hepatic Digestive", "Ovagen Livagen Pancragen", "liver peptide panel", "pancreatic bioregulator", "KEDA peptide kit"],
  "bioregulator-immune-thymic": ["Bioregulator Immune Thymic", "Thymalin Vilon Crystagen", "thymic peptide panel", "immune bioregulator kit", "KE peptide panel"],
  "bioregulator-neuro-pineal": ["Bioregulator Neuro Pineal", "Pinealon Cortagen kit", "pineal peptide panel", "cerebral cortex bioregulator", "EDR peptide panel"],
  "bioregulator-respiratory": ["Bioregulator Respiratory", "Chonluten Bronchogen kit", "bronchial peptide panel", "respiratory bioregulator", "EDG peptide panel"],
  "bioregulator-urogenital": ["Bioregulator Urogenital", "Prostamax Testagen Vesilute", "prostate peptide panel", "urogenital bioregulator", "bladder tissue peptide kit"],
  "advanced-nootropic": ["Advanced Nootropic", "Semax Selank Dihexa P-21 kit", "nootropic peptide bundle", "cognitive research kit", "ACTH derived peptide kit"],
  "advanced-repair-immune": ["Advanced Repair Immune", "BPC TB500 KPV LL-37 kit", "repair immune bundle", "tissue repair peptide kit", "antimicrobial peptide bundle"],
  "body-composition-kit": ["Body Composition Kit", "Tesamorelin Ipamorelin AOD9604", "body composition peptide bundle", "metabolic research kit", "lipolytic peptide kit"],
  "classic-secretagogue": ["Classic Secretagogue", "Sermorelin GHRP-2 kit", "original secretagogue pairing", "legacy GH peptide kit", "first generation secretagogue"],
  "extended-gh-igf": ["Extended GH IGF", "CJC-1295 DAC Ipamorelin IGF-1 LR3", "extended growth hormone kit", "IGF signaling bundle", "DAC secretagogue kit"],
  "gh-secretagogue": ["GH Secretagogue", "CJC-1295 Ipamorelin kit", "growth hormone secretagogue bundle", "GHRH ghrelin pairing", "dual receptor GH kit"],
  "gut-mucosal-panel": ["Gut Mucosal Panel", "BPC-157 KPV Thymosin Alpha-1", "mucosal barrier peptide kit", "gut research bundle", "intestinal peptide panel"],
  "incretin-amylin": ["Incretin Amylin", "Retatrutide Cagrilintide kit", "incretin amylin bundle", "triple agonist amylin pairing", "metabolic combination kit"],
  "longevity-mitochondrial": ["Longevity Mitochondrial", "Epithalon NAD SS-31 5-Amino-1MQ", "longevity peptide bundle", "mitochondrial research kit", "cellular energy panel"],
  "melanocortin-reproductive": ["Melanocortin Reproductive", "Melanotan-II PT-141 Kisspeptin", "melanocortin peptide kit", "reproductive research bundle", "MC receptor panel"],
  "metabolic-activation": ["Metabolic Activation", "Switch It On kit", "SLU-PP-332 5-Amino-1MQ NAD MOTS-c", "ERR agonist research kit", "NNMT inhibitor bundle"],
  "metabolic-support": ["Metabolic Support", "Fuel the Fire kit", "Retatrutide AOD-9604 MOTS-c", "metabolic peptide bundle", "incretin lipolytic kit"],
  "nad-antioxidant": ["NAD Antioxidant", "Turn Back Time kit", "NAD+ Glutathione MOTS-c", "redox research kit", "antioxidant peptide bundle"],
  "neuro-core": ["Neuro Core", "Clear the Fog kit", "Semax Selank kit", "nootropic peptide pair", "Pro-Gly-Pro neuropeptides"],
  "recovery-sleep-stress": ["Recovery Sleep Stress", "Rest Easy kit", "DSIP Selank Oxytocin", "sleep peptide bundle", "neuroendocrine research kit"],
  "repair-trio": ["Repair Trio", "Bounce Back kit", "BPC-157 TB-500 GHK-Cu", "tissue repair bundle", "copper peptide repair kit"],
  "reproductive-hpg-axis": ["Reproductive HPG Axis", "Reignite the Spark kit", "Gonadorelin Kisspeptin-10", "HPG axis research kit", "GnRH KISS1R bundle"],
  "skin-cosmetic": ["Skin Cosmetic", "Glow Getter kit", "GHK-Cu Glutathione SNAP-8", "cosmetic peptide bundle", "dermal research kit"],
  "vascular-immune-protection": ["Vascular Immune Protection", "Shielded and Strong kit", "VIP ARA-290 Thymosin Alpha-1", "vascular immune bundle", "innate repair receptor kit"],
  "senescence-stack": ["Senescence Stack", "Age Undone kit", "FOXO4-DRI Epithalon", "senolytic research kit", "cellular senescence bundle"],
  "pathway-genetic-optimization-test": ["PATHWAY Genetic Optimization Test", "PATHWAY DNA test", "genetic optimization test", "TruLab Dx test kit", "at-home buccal swab DNA kit", "genetic wellness panel"]
};

export function getSearchEngine<T extends ProductSearchItem>(products: T[]) {
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
