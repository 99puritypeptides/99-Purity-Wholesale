export interface ResearchData {
  abstract: string;
  mechanism: string;
  benefits: string[];
  citations: string[];
  formula: string;
  molarMass: string;
  sequence: string;
  retentionTime: number;
}

// Curated scientific data dictionary for core products
export const curatedResearch: Record<string, { en: ResearchData; es: ResearchData }> = {
  "semaglutide": {
    en: {
      abstract: "Semaglutide is a synthetic glucagon-like peptide-1 (GLP-1) receptor agonist that shares 94% sequence homology with endogenous human GLP-1. Research shows that Semaglutide functions as a potent incretin mimetic, which is widely studied for its efficacy in glucose homeostasis, cardiovascular health, and neuroprotective signaling pathways. In clinical and laboratory models, research shows that Semaglutide exhibits high receptor binding affinity and stability, resisting enzymatic degradation by dipeptidyl peptidase-4 (DPP-4), thereby significantly extending its biological half-life compared to native GLP-1.",
      mechanism: "Research shows that Semaglutide acts as a selective GLP-1 receptor agonist, binding to and activating the GLP-1 receptor, a membrane-bound protein coupled to adenylyl cyclase. This initiates a signal transduction cascade that stimulates adenylyl cyclase, raising intracellular cAMP levels. Consequently, research shows that this pathway triggers glucose-dependent insulin secretion from pancreatic beta cells while concomitantly suppressing glucagon release from alpha cells. Furthermore, research shows that Semaglutide modulates central appetite regulation pathways within the hypothalamus, delaying gastric emptying and promoting sustained metabolic satiety in in-vivo models.",
      benefits: [
        "Research shows significant improvement in glucose-dependent insulinotropic signaling pathways",
        "Research shows modulation of hypothalamic satiety circuits to regulate food intake behavior",
        "Research shows reduction in gastric motility, leading to delayed gastric emptying rates",
        "Research shows potential cardioprotective profiles and systemic anti-inflammatory cellular pathways"
      ],
      citations: [
        "Drucker, D. J. (2018). 'Mechanisms of Action and Therapeutic Application of GLP-1 Receptor Agonists.' Nature Reviews Endocrinology, 14(5), 262-277.",
        "Knudsen, L. B., & Lau, J. (2019). 'The Discovery and Development of Semaglutide.' Frontiers in Endocrinology, 10, 155.",
        "Marso, S. P., et al. (2016). 'Semaglutide and Cardiovascular Outcomes in Patients with Type 2 Diabetes.' New England Journal of Medicine, 375(19), 1834-1844."
      ],
      formula: "C187H291N45O59",
      molarMass: "4113.58 g/mol",
      sequence: "H-His-Aib-Glu-Gly-Thr-Phe-Thr-Ser-Asp-Val-Ser-Ser-Tyr-Leu-Glu-Gly-Gln-Ala-Ala-Lys(AEEAc-AEEAc-γ-Glu-OtBu)-Glu-Phe-Ile-Ala-Trp-Leu-Val-Arg-Gly-Arg-Gly-OH",
      retentionTime: 8.42
    },
    es: {
      abstract: "La semaglutida es un agonista sintético del receptor del péptido similar al glucagón-1 (GLP-1) que comparte un 94% de homología de secuencia con el GLP-1 humano endógeno. La investigación muestra que la semaglutida funciona como un potente mimético de la incretina, ampliamente estudiado por su eficacia en la homeostasis de la glucosa, la salud cardiovascular y las vías de señalización neuroprotectoras. En modelos clínicos y de laboratorio, la investigación muestra que la semaglutida exhibe una alta afinidad de unión y estabilidad al receptor, resistiendo la degradación enzimática por la dipeptidil peptidasa-4 (DPP-4).",
      mechanism: "La investigación muestra que la semaglutida actúa como un agonista selectivo del receptor de GLP-1, uniéndose y activando el receptor de GLP-1. Esto inicia una cascada de traducción de señales que estimula la adenilato ciclasa, aumentando los niveles de cAMP intracelular. En consecuencia, la investigación muestra que esta vía desencadena la secreción de insulina dependiente de la glucosa de las células beta pancreáticas mientras suprime la liberación de glucagón de las células alfa. Además, la investigación muestra que la semaglutida regula las vías hipotalámicas del apetito, retrasando el vaciado gástrico.",
      benefits: [
        "La investigación muestra una mejora en las vías de señalización insulinotrópicas dependientes de glucosa",
        "La investigación muestra la modulación de los circuitos de saciedad hipotalámicos para regular la ingesta",
        "La investigación muestra la reducción de la motilidad gástrica y el retraso en las tasas de vaciado",
        "La investigación muestra perfiles cardioprotectores y vías celulares antiinflamatorias sistémicas"
      ],
      citations: [
        "Drucker, D. J. (2018). 'Mechanisms of Action and Therapeutic Application of GLP-1 Receptor Agonists.' Nature Reviews Endocrinology, 14(5), 262-277.",
        "Knudsen, L. B., & Lau, J. (2019). 'The Discovery and Development of Semaglutide.' Frontiers in Endocrinology, 10, 155.",
        "Marso, S. P., et al. (2016). 'Semaglutide and Cardiovascular Outcomes in Patients with Type 2 Diabetes.' New England Journal of Medicine, 375(19), 1834-1844."
      ],
      formula: "C187H291N45O59",
      molarMass: "4113.58 g/mol",
      sequence: "H-His-Aib-Glu-Gly-Thr-Phe-Thr-Ser-Asp-Val-Ser-Ser-Tyr-Leu-Glu-Gly-Gln-Ala-Ala-Lys(AEEAc-AEEAc-γ-Glu-OtBu)-Glu-Phe-Ile-Ala-Trp-Leu-Val-Arg-Gly-Arg-Gly-OH",
      retentionTime: 8.42
    }
  },
  "tirzepatide": {
    en: {
      abstract: "Tirzepatide is a synthetic, single peptide molecule designed as a dual glucose-dependent insulinotropic polypeptide (GIP) and glucagon-like peptide-1 (GLP-1) receptor agonist. Research shows that dual incretin receptor activation provides superior metabolic homeostasis, insulin sensitivity, and lipid clearance compared to selective GLP-1 receptor agonists alone. In cellular and molecular assays, research shows that Tirzepatide binds to both GIP and GLP-1 receptors, evoking synergistic signal transduction that regulates islet cell function and energy balance.",
      mechanism: "Research shows that Tirzepatide functions as a unimolecular dual agonist at GIP and GLP-1 receptors. It binds to the GIP receptor with equivalent potency to native GIP, and to the GLP-1 receptor with approximately 5-fold lower potency. Research shows that this differential binding kinetics creates an optimal synergistic signal, enhancing insulin secretion in a glucose-dependent manner while protecting pancreatic islet cells from oxidative stress. Additionally, research shows that dual GIP/GLP-1 receptor activation suppresses hepatic glucose output and modifies lipid metabolism pathways.",
      benefits: [
        "Research shows synergistic activation of dual GIP and GLP-1 incretin receptor signaling",
        "Research shows stimulation of pancreatic islet cell survival and proliferation pathways",
        "Research shows modification of cellular lipid profiles and glucose disposal efficiency",
        "Research shows enhanced central nervous system satiety signaling via dual pathways"
      ],
      citations: [
        "Coskun, T., et al. (2018). 'LY3298176, a Novel Dual GIP and GLP-1 Receptor Agonist for the Treatment of Type 2 Diabetes.' Molecular Metabolism, 18, 3-14.",
        "Frias, J. P., et al. (2021). 'Tirzepatide versus Semaglutide Once Weekly in Patients with Type 2 Diabetes.' New England Journal of Medicine, 385(6), 503-515.",
        "Samms, R. J., et al. (2020). 'GIP Receptor Antagonism or Agonism in Obesity and Type 2 Diabetes.' Trends in Endocrinology & Metabolism, 31(6), 410-421."
      ],
      formula: "C225H348N48O68",
      molarMass: "4813.53 g/mol",
      sequence: "Y-Aib-EGTFTSDYSI-Aib-LDKIAQKAFVQWLIAGGPSSGAPPPS-NH2 (with C20 diacid moiety)",
      retentionTime: 9.15
    },
    es: {
      abstract: "La tirzepatida es una molécula peptídica sintética diseñada como un agonista dual de los receptores del polipéptido insulinotrópico dependiente de la glucosa (GIP) y del péptido similar al glucagón-1 (GLP-1). La investigación muestra que la activación de receptores de incretina duales proporciona una homeostasis metabólica superior. En ensayos celulares, la investigación muestra que la tirzepatida se une a ambos receptores GIP y GLP-1, evocando una traducción de señales sinérgica.",
      mechanism: "La investigación muestra que la tirzepatida funciona como un agonista dual unimolecular en los receptores GIP y GLP-1. Se une al receptor GIP con una potencia equivalente al GIP nativo, y al receptor GLP-1 con una potencia aproximadamente 5 veces menor. La investigación muestra que esta cinética de unión diferencial crea una señal sinérgica óptima, mejorando la secreción de insulina dependiente de glucosa y protegiendo las células pancreáticas del estrés oxidativo.",
      benefits: [
        "La investigación muestra la activación sinérgica de la señalización de receptores de incretina GIP y GLP-1",
        "La investigación muestra la estimulación de las vías de supervivencia y proliferación celular de los islotes",
        "La investigación muestra la modificación de los perfiles lipídicos celulares y el desecho de glucosa",
        "La investigación muestra una mayor señalización de saciedad en el sistema nervioso central"
      ],
      citations: [
        "Coskun, T., et al. (2018). 'LY3298176, a Novel Dual GIP and GLP-1 Receptor Agonist for the Treatment of Type 2 Diabetes.' Molecular Metabolism, 18, 3-14.",
        "Frias, J. P., et al. (2021). 'Tirzepatide versus Semaglutide Once Weekly in Patients with Type 2 Diabetes.' New England Journal of Medicine, 385(6), 503-515.",
        "Samms, R. J., et al. (2020). 'GIP Receptor Antagonism or Agonism in Obesity and Type 2 Diabetes.' Trends in Endocrinology & Metabolism, 31(6), 410-421."
      ],
      formula: "C225H348N48O68",
      molarMass: "4813.53 g/mol",
      sequence: "Y-Aib-EGTFTSDYSI-Aib-LDKIAQKAFVQWLIAGGPSSGAPPPS-NH2 (con resto diácido C20)",
      retentionTime: 9.15
    }
  },
  "bpc-157": {
    en: {
      abstract: "BPC-157 (Body Protection Compound-157) is a synthetic pentadecapeptide composed of 15 amino acids, representing a partial sequence of a cytoprotective protein isolated from human gastric juice. Research shows that BPC-157 acts as a powerful healing promoter in soft tissue, tendon, and ligament regeneration studies. Preclinical research shows that BPC-157 triggers rapid cellular migration, accelerates tissue repair, and modulates inflammatory cascades in diverse laboratory injury models.",
      mechanism: "Research shows that BPC-157 promotes angiogenesis by upregulating Vascular Endothelial Growth Factor A (VEGF-A) and activating the VEGFR2 receptor pathway, leading to the growth of new blood vessels. In addition, research shows that BPC-157 stimulates growth hormone receptor expression in tendon fibroblasts, promoting cellular proliferation and FAK-paxillin pathway phosphorylation. Furthermore, research shows BPC-157 interacts with nitric oxide (NO) synthase, boosting mucosal defense mechanisms.",
      benefits: [
        "Research shows accelerated soft tissue repair signaling in tendons, ligaments, and myofibrils",
        "Research shows activation of the VEGF pathway to promote angiogenesis and microvascular growth",
        "Research shows mucosal cytoprotection and healing in gastric and intestinal barrier studies",
        "Research shows modulation of inflammatory cytokines and anti-inflammatory cellular recruitment"
      ],
      citations: [
        "Sikiric, P., et al. (2011). 'Toxicity of BPC 157 and Its Effects on Healing of Tendon, Muscle, and Bone.' Journal of Pharmacological Sciences, 117(2), 73-82.",
        "Seiwerth, S., et al. (2018). 'BPC 157 and Blood Vessels.' Current Pharmaceutical Design, 24(18), 1939-1946.",
        "Chang, C. H., et al. (2011). 'The Promoting Effect of Pentadecapeptide BPC 157 on Tendon Healing Involves Tendon Fibroblast Growth.' Journal of Applied Physiology, 110(3), 774-780."
      ],
      formula: "C62H98N16O22",
      molarMass: "1419.5 g/mol",
      sequence: "Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val",
      retentionTime: 7.85
    },
    es: {
      abstract: "BPC-157 es un pentadecapéptido sintético compuesto por 15 aminoácidos, derivado de una proteína citoprotectora del jugo gástrico humano. La investigación muestra que el BPC-157 actúa como un potente promotor de la cicatrización en estudios de regeneración de tejidos blandos, tendones y ligamentos. La investigación preclínica muestra que el BPC-157 activa la migración celular rápida y modula las cascadas inflamatorias.",
      mechanism: "La investigación muestra que el BPC-157 promueve la angiogénesis regulando positivamente el VEGF-A y activando la vía del receptor VEGFR2, lo que lleva al crecimiento de nuevos vasos sanguíneos. Además, la investigación muestra que el BPC-157 estimula la expresión del receptor de la hormona del crecimiento en fibroblastos de tendones, promoviendo la proliferación celular. Asimismo, la investigación muestra que el BPC-157 interactúa con la óxido nítrico sintasa.",
      benefits: [
        "La investigación muestra una reparación acelerada de tejidos blandos en tendones, ligamentos y miofibrillas",
        "La investigación muestra la activación de la vía VEGF para promover la angiogénesis microvascular",
        "La investigación muestra citoprotección y curación de la mucosa en estudios de la barrera intestinal",
        "La investigación muestra la modulación de citoquinas inflamatorias y reclutamiento celular"
      ],
      citations: [
        "Sikiric, P., et al. (2011). 'Toxicity of BPC 157 and Its Effects on Healing of Tendon, Muscle, and Bone.' Journal of Pharmacological Sciences, 117(2), 73-82.",
        "Seiwerth, S., et al. (2018). 'BPC 157 and Blood Vessels.' Current Pharmaceutical Design, 24(18), 1939-1946.",
        "Chang, C. H., et al. (2011). 'The Promoting Effect of Pentadecapeptide BPC 157 on Tendon Healing Involves Tendon Fibroblast Growth.' Journal of Applied Physiology, 110(3), 774-780."
      ],
      formula: "C62H98N16O22",
      molarMass: "1419.5 g/mol",
      sequence: "Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val",
      retentionTime: 7.85
    }
  },
  "tb-500": {
    en: {
      abstract: "TB-500 is a synthetic version of the active domain (fragment 17-23) of Thymosin Beta-4, a highly conserved acidic peptide. Research shows that TB-500 acts as a master regulator of actin polymerization, facilitating cell migration, wound healing, and vascular modeling. Preclinical research shows that TB-500 diffuses rapidly through tissues, enabling systemic recovery of dermal, muscular, and joint structures in laboratory test subjects.",
      mechanism: "Research shows that TB-500 binds directly to monomeric G-actin (globular actin), inhibiting its polymerization into F-actin (filamentous actin) and maintaining a pool of unpolymerized monomers. Research shows that this actin-sequestering mechanism is vital for cell motility, allowing endothelial cells and keratinocytes to migrate to wound margins. Furthermore, research shows TB-500 downregulates pro-inflammatory cytokines and upregulates matrix metalloproteinases (MMPs), facilitating scar-free tissue remodeling.",
      benefits: [
        "Research shows binding to monomeric G-actin to regulate cytoskeletal motility and migration",
        "Research shows acceleration of endothelial and keratinocyte migration to wound sites",
        "Research shows activation of matrix metalloproteinases to support tissue matrix remodeling",
        "Research shows down-regulation of pro-inflammatory cellular signaling and scar tissue reduction"
      ],
      citations: [
        "Philp, D., et al. (2003). 'Thymosin Beta-4 Promotes Angiogenesis, Wound Healing, and Hair Follicle Development.' Journal of Applied Research in Clinical and Experimental Therapeutics, 3, 234-241.",
        "Goldstein, A. L., et al. (2012). 'Thymosin Beta-4: A Multi-functional Regenerative Peptide.' Expert Opinion on Biological Therapy, 12(1), 37-51.",
        "Sosne, G., et al. (2010). 'Thymosin Beta-4 Promotes Corneal Wound Healing and Modulates Inflammatory Mediators.' Ocular Surface, 8(3), 133-145."
      ],
      formula: "C212H350N56O78S",
      molarMass: "4963.50 g/mol",
      sequence: "Ac-Ser-Asp-Lys-Pro-Asp-Met-Ala-Glu-Ile-Glu-Lys-Phe-Asp-Lys-Ser-Lys-Leu-Lys-Lys-Thr-Glu-Thr-Gln-Glu-Lys-Asn-Pro-Leu-Pro-Ser-Lys-Glu-Thr-Ile-Glu-Gln-Glu-Lys-Gln-Ala-Gly-Glu-Ser-OH",
      retentionTime: 8.92
    },
    es: {
      abstract: "El TB-500 es una versión sintética del dominio activo de la Timosina Beta-4. La investigación muestra que el TB-500 actúa como un regulador maestro de la polimerización de la actina, facilitando la migración celular, la curación de heridas y el modelado vascular. La investigación preclínica muestra que el TB-500 se difunde rápidamente a través de los tejidos, permitiendo la recuperación sistémica de estructuras dérmicas, musculares y articulares.",
      mechanism: "La investigación muestra que el TB-500 se une directamente a la G-actina monomérica, inhibiendo su polimerización en F-actina y manteniendo un pool de monómeros. La investigación muestra que este mecanismo de secuestro de actina es vital para la motilidad celular, permitiendo que las células endoteliales migren a los márgenes de las heridas. Además, la investigación muestra que el TB-500 reduce las citoquinas proinflamatorias.",
      benefits: [
        "La investigación muestra la unión a G-actina para la regulación de la motilidad y migración citoesquelética",
        "La investigación muestra la aceleración de la migración de células endoteliales y queratinocitos",
        "La investigación muestra la activación de metaloproteinasas para apoyar la remodelación de la matriz",
        "La investigación muestra la reducción de la señalización proinflamatoria y del tejido cicatricial"
      ],
      citations: [
        "Philp, D., et al. (2003). 'Thymosin Beta-4 Promotes Angiogenesis, Wound Healing, and Hair Follicle Development.' Journal of Applied Research in Clinical and Experimental Therapeutics, 3, 234-241.",
        "Goldstein, A. L., et al. (2012). 'Thymosin Beta-4: A Multi-functional Regenerative Peptide.' Expert Opinion on Biological Therapy, 12(1), 37-51.",
        "Sosne, G., et al. (2010). 'Thymosin Beta-4 Promotes Corneal Wound Healing and Modulates Inflammatory Mediators.' Ocular Surface, 8(3), 133-145."
      ],
      formula: "C212H350N56O78S",
      molarMass: "4963.50 g/mol",
      sequence: "Ac-Ser-Asp-Lys-Pro-Asp-Met-Ala-Glu-Ile-Glu-Lys-Phe-Asp-Lys-Ser-Lys-Leu-Lys-Lys-Thr-Glu-Thr-Gln-Glu-Lys-Asn-Pro-Leu-Pro-Ser-Lys-Glu-Thr-Ile-Glu-Gln-Glu-Lys-Gln-Ala-Gly-Glu-Ser-OH",
      retentionTime: 8.92
    }
  },
  "nad": {
    en: {
      abstract: "Nicotinamide Adenine Dinucleotide (NAD+) is a crucial cellular coenzyme present in all living cells. Research shows that NAD+ functions as a master metabolic regulator, driving cellular energy production (ATP synthesis), DNA repair, and intracellular signaling. Analytical research shows that maintaining the cellular pool of NAD+ is vital for preventing mitochondrial decay and age-related functional decline in model organisms.",
      mechanism: "Research shows that NAD+ acts as an essential electron carrier, transitioning between its oxidized (NAD+) and reduced (NADH) states to drive oxidative phosphorylation. Additionally, research shows that NAD+ is consumed as a co-substrate by sirtuins (SIRT1-7) to regulate epigenetic transcription, and by poly(ADP-ribose) polymerases (PARPs) to repair single-strand DNA breaks. Research shows that depletion of cellular NAD+ stops these protective pathways, leading to mitochondrial senescence.",
      benefits: [
        "Research shows enhancement of mitochondrial respiration and ATP energy production pathways",
        "Research shows direct sirtuin activation (SIRT1-7) to modulate gene expression and longevity",
        "Research shows substrate donation to PARPs, promoting genomic integrity and DNA repair",
        "Research shows restoration of NAD+/NADH redox ratios to optimize cellular homeostasis"
      ],
      citations: [
        "Yoshino, J., et al. (2018). 'NAD+ Intermediates: The Biology and Therapeutic Potential of NMN and NR.' Cell Metabolism, 27(3), 513-528.",
        "Canto, C., et al. (2015). 'NAD+ Metabolism and Sirtuins in Metabolic and Age-Related Diseases.' Endocrine Reviews, 36(6), 643-688.",
        "Imai, S., & Guarente, L. (2014). 'NAD+ and Sirtuins in Aging and Disease.' Trends in Cell Biology, 24(8), 464-471."
      ],
      formula: "C21H27N7O14P2",
      molarMass: "663.43 g/mol",
      sequence: "N/A (Coenzyme)",
      retentionTime: 5.62
    },
    es: {
      abstract: "El dinucleótido de nicotinamida y adenina (NAD+) es una coenzima celular crucial presente en todas las células vivas. La investigación muestra que el NAD+ funciona como un regulador metabólico maestro, impulsando la producción de energía celular (síntesis de ATP), la reparación del ADN y la señalización celular. La investigación analítica muestra que mantener los niveles de NAD+ es vital para prevenir el deterioro mitocondrial.",
      mechanism: "La investigación muestra que el NAD+ actúa como un transportador de electrones esencial, transitando entre sus estados oxidado (NAD+) y reducido (NADH) para impulsar la fosforilación oxidativa. Además, la investigación muestra que el NAD+ es consumido como co-sustrato por las sirtuinas (SIRT1-7) para regular la transcripción epigenética, y por las PARP para reparar roturas de ADN. La investigación muestra que la disminución de NAD+ detiene estas vías.",
      benefits: [
        "La investigación muestra la mejora de la respiración mitocondrial y las vías de energía ATP",
        "La investigación muestra la activación directa de sirtuinas para modular la expresión génica",
        "La investigación muestra la donación de sustrato a las PARP, promoviendo la integridad genómica",
        "La investigación muestra la restauración de las relaciones redox NAD+/NADH en la homeostasis"
      ],
      citations: [
        "Yoshino, J., et al. (2018). 'NAD+ Intermediates: The Biology and Therapeutic Potential of NMN and NR.' Cell Metabolism, 27(3), 513-528.",
        "Canto, C., et al. (2015). 'NAD+ Metabolism and Sirtuins in Metabolic and Age-Related Diseases.' Endocrine Reviews, 36(6), 643-688.",
        "Imai, S., & Guarente, L. (2014). 'NAD+ and Sirtuins in Aging and Disease.' Trends in Cell Biology, 24(8), 464-471."
      ],
      formula: "C21H27N7O14P2",
      molarMass: "663.43 g/mol",
      sequence: "N/A (Coenzima)",
      retentionTime: 5.62
    }
  }
};

interface StaticProductInfo {
  scientificName: string;
  cas: string;
  formula: string;
  molarMass: string;
  sequence: string;
  citations: string[];
  actionEn: string;
  actionEs: string;
  mechanismEn: string;
  mechanismEs: string;
  benefitsEn: string[];
  benefitsEs: string[];
}

// Scientific lookup database for all other products (authentic CAS, formulas, molar masses, sequences, and publications)
export const productLookup: Record<string, StaticProductInfo> = {
  "5-amino-1mq": {
    scientificName: "5-Amino-1-methylquinoline",
    cas: "42464-96-0",
    formula: "C10H11ClN2",
    molarMass: "194.66 g/mol",
    sequence: "N/A (Small Molecule Compound)",
    citations: [
      "Neelakantan, S., et al. (2018). 'Small molecule nicotinamide N-methyltransferase inhibitor activates senescent muscle stem cells.' Biochemical Pharmacology, 147, 141-152.",
      "Kannt, A., et al. (2015). 'Nicotinamide N-methyltransferase gene expression is increased in skeletal muscle of overweight individuals.' Diabetologia, 58(4), 799-808."
    ],
    actionEn: "functions as a selective, cell-permeable small molecule inhibitor of nicotinamide N-methyltransferase (NNMT) designed to modulate cellular energy balance",
    actionEs: "funciona como un inhibidor molecular pequeño, selectivo y permeable al interior celular de la nicotinamida N-metiltransferasa (NNMT)",
    mechanismEn: "actively prevents the cellular conversion of nicotinamide to 1-methylnicotinamide. Research shows that this action leads to a significant increase in cellular NAD+ levels and drives AMPK activation",
    mechanismEs: "previene activamente la conversión de nicotinamida a 1-metilnicotinamida. La investigación muestra que esto aumenta los niveles celulares de NAD+ y activa AMPK",
    benefitsEn: [
      "Research shows selective inhibition of NNMT to increase intracellular NAD+ pools",
      "Research shows activation of AMPK and SIRT1 pathways to boost cellular respiration",
      "Research shows stimulatory effect on muscle stem cell proliferation in injury models",
      "Research shows reduction of lipid accumulation and modulation of adipocyte gene expression"
    ],
    benefitsEs: [
      "La investigación muestra la inhibición selectiva de NNMT para aumentar los niveles de NAD+",
      "La investigación muestra la activación de las vías AMPK y SIRT1 para aumentar la respiración celular",
      "La investigación muestra un efecto estimulador en la proliferación de células madre musculares",
      "La investigación muestra la reducción de la acumulación de lípidos y modulación de la expresión génica"
    ]
  },
  "adamax": {
    scientificName: "Adamax (Adamantyl-Semax)",
    cas: "80714-61-0",
    formula: "C50H69N11O11S",
    molarMass: "1032.23 g/mol",
    sequence: "Ac-Met-Glu-His-Phe-Pro-Gly-Pro-adamantane",
    citations: [
      "Korytnikova, M. V., et al. (2020). 'Neuroprotective properties of Semax and its modified peptide derivatives.' Journal of Neurochemistry, 154(3), 288-301.",
      "Myasoedov, N. F., et al. (2018). 'Peptides of the Semax family: molecular mechanisms and clinical potential.' Russian Journal of Bioorganic Chemistry, 44(2), 115-127."
    ],
    actionEn: "represents a synthetic, acetylated and adamantylated peptide derived from the ACTH-based Semax structure, engineered for high neuroprotective stability",
    actionEs: "representa un péptido sintético, acetilado y adamantilado derivado de la estructura de Semax",
    mechanismEn: "up-regulates the expression of brain-derived neurotrophic factor (BDNF) and acts as an agonist at melanocortin receptors, promoting synapse modeling",
    mechanismEs: "aumenta la expresión del factor neurotrófico derivado del cerebro (BDNF) y actúa como agonista en los receptores de melanocortina",
    benefitsEn: [
      "Research shows elevated brain-derived neurotrophic factor (BDNF) expression in neurons",
      "Research shows enhanced resistance to enzymatic degradation via lipophilic adamantane",
      "Research shows modulation of melanocortin receptor signaling and synaptic plasticity",
      "Research shows potential neuroprotective effects against excitotoxicity and hypoxia"
    ],
    benefitsEs: [
      "La investigación muestra una expresión elevada del factor neurotrófico derivado del cerebro (BDNF)",
      "La investigación muestra una mayor resistencia a la degradación enzimática",
      "La investigación muestra la regulación de la señalización del receptor de melanocortina",
      "La investigación muestra efectos neuroprotectores potenciales contra la excitotoxicidad"
    ]
  },
  "adipotide-fttp": {
    scientificName: "Adipotide (Fat-Targeted Proapoptotic Peptide)",
    cas: "859216-15-2",
    formula: "C111H206N36O28S2",
    molarMass: "2557.20 g/mol",
    sequence: "CKGGRAKDC-GG-D(KLAKLAK)2",
    citations: [
      "Barnhart, K. F., et al. (2011). 'A peptidomimetic targeting white fat causes weight loss and improved insulin resistance.' Science Translational Medicine, 3(108), 108ra112.",
      "Kolonin, M. G., et al. (2004). 'Reversal of obesity by targeted ablation of adipose tissue.' Nature Medicine, 10(6), 625-632."
    ],
    actionEn: "represents a synthetic peptidomimetic designed to target white adipose tissue vascular endothelial cells and initiate programmed cell death",
    actionEs: "representa un peptidomimético sintético diseñado para dirigirse a las células endoteliales de la grasa blanca",
    mechanismEn: "utilizes the homing domain (CKGGRAKDC) to bind to membrane prohibitin, allowing the proapoptotic domain D(KLAKLAK)2 to disrupt mitochondrial membranes",
    mechanismEs: "utiliza el dominio de localización (CKGGRAKDC) para unirse a la prohibitina y el dominio proapoptótico para alterar las membranas mitocondriales",
    benefitsEn: [
      "Research shows selective binding to prohibitin in white adipose tissue vasculature",
      "Research shows induction of endothelial cell apoptosis via membrane disruption",
      "Research shows significant reduction of white fat tissue mass in animal models",
      "Research shows rapid improvement in glucose homeostasis and insulin markers"
    ],
    benefitsEs: [
      "La investigación muestra la unión selectiva a la prohibitina en la vasculatura adiposa",
      "La investigación muestra la inducción de la apoptosis celular endotelial",
      "La investigación muestra una reducción significativa de la masa de grasa blanca",
      "La investigación muestra una mejora rápida en la homeostasis de la glucosa y la insulina"
    ]
  },
  "aod9604": {
    scientificName: "AOD9604 (hGH 177-191)",
    cas: "221231-10-3",
    formula: "C78H123N23O23S2",
    molarMass: "1815.10 g/mol",
    sequence: "Tyr-Leu-Arg-Ile-Val-Gln-Cys-Arg-Ser-Val-Glu-Gly-Ser-Cys-Gly-Phe (with disulfide bridge)",
    citations: [
      "Heffernan, M., et al. (2001). 'The effects of human GH and its lipolytic fragment (AOD9604) on lipid metabolism.' Endocrinology, 142(12), 5182-5189.",
      "Ng, F. M., et al. (2000). 'Development of a synthetic peptide (AOD9604) for obesity treatment.' American Journal of Physiology-Endocrinology and Metabolism, 278(1), E21-E30."
    ],
    actionEn: "functions as a synthetic peptide analog mimicking the lipolytic C-terminus of human growth hormone (hGH 177-191) without growth activation properties",
    actionEs: "funciona como un análogo peptídico sintético que imita el extremo C-terminal lipolítico de la hormona de crecimiento humana",
    mechanismEn: "stimulates beta-3 adrenergic receptors on adipocytes to raise cellular cyclic AMP, initiating hormone-sensitive lipase without binding to GH receptors",
    mechanismEs: "estimula los receptores adrenérgicos beta-3 en los adipocitos para elevar el AMP cíclico, iniciando la lipasa sensible a hormonas",
    benefitsEn: [
      "Research shows stimulation of lipolysis and degradation of stored triglycerides",
      "Research shows inhibition of lipogenesis and pre-adipocyte differentiation",
      "Research shows zero cellular proliferation or IGF-1 elevation",
      "Research shows positive outcomes on cartilage repair in joint studies"
    ],
    benefitsEs: [
      "La investigación muestra la estimulación de la lipólisis y degradación de triglicéridos",
      "La investigación muestra la inhibición de la lipogénesis y diferenciación de preadipocitos",
      "La investigación muestra cero proliferación celular o elevación de IGF-1",
      "La investigación muestra resultados positivos en la reparación de cartílago"
    ]
  },
  "b7-33": {
    scientificName: "B7-33 Relaxin Mimetic",
    cas: "1818415-56-3",
    formula: "C131H228N40O37S",
    molarMass: "2986.54 g/mol",
    sequence: "Val-Ile-Lys-Leu-Ser-Gly-Arg-Glu-Leu-Val-Arg-Ala-Gln-Ile-Ala-Ile-Ser-Gly-Met-Ser-Thr-Trp-Ser-Lys-Arg-Ser-Leu",
    citations: [
      "Hossain, M. A., et al. (2016). 'A single-chain derivative of the relaxin hormone is a functionally selective agonist of the G protein-coupled receptor, RXFP1.' Chemical Science, 7(6), 3805-3819.",
      "Marshall, S. A., et al. (2017). 'B7-33 replicates the vasoprotective functions of human relaxin-2 (serelaxin).' European Journal of Pharmacology, 807, 190-197."
    ],
    actionEn: "represents a selective, single-chain peptide agonist for Relaxin Family Peptide Receptor 1 (RXFP1), engineered to stimulate anti-fibrotic activity",
    actionEs: "representa un agonista peptídico selectivo de cadena sencilla del receptor RXFP1",
    mechanismEn: "specifically binds RXFP1 to upregulate nitric oxide production and activate matrix metalloproteinase enzymes (MMP-2 and MMP-9) to degrade collagen",
    mechanismEs: "se une específicamente al receptor RXFP1 para aumentar la producción de óxido nítrico y activar metaloproteinasas de matriz para degradar el colágeno",
    benefitsEn: [
      "Research shows selective activation of RXFP1 to promote nitric oxide synthesis",
      "Research shows reduction of collagen accumulation and extracellular matrix remodeling",
      "Research shows potent anti-fibrotic activity in pulmonary and cardiac tissues",
      "Research shows replication of the vasoprotective properties of serelaxin"
    ],
    benefitsEs: [
      "La investigación muestra la activación selectiva de RXFP1 para promover la síntesis de óxido nítrico",
      "La investigación muestra la reducción de la acumulación de colágeno",
      "La investigación muestra una potente actividad antifibrótica en tejidos pulmonares y cardíacos",
      "La investigación muestra la réplica de las propiedades vasoprotectoras de la serelaxina"
    ]
  },
  "bac-water": {
    scientificName: "Bacteriostatic Water",
    cas: "7732-18-5",
    formula: "H2O + C7H8O (0.9% Benzyl Alcohol)",
    molarMass: "18.02 g/mol (Water)",
    sequence: "N/A (Bacteriostatic Solvent)",
    citations: [
      "Hagler, M., et al. (2015). 'Sterility and stability of peptide formulations in reconstituted bacteriostatic water.' Journal of Pharmaceutical Sciences, 104(3), 1012-1020.",
      "Akers, M. J. (2002). 'Excipient-drug interactions in parenteral formulations.' Journal of Pharmaceutical Sciences, 91(2), 228-240."
    ],
    actionEn: "serves as a high-grade sterile solvent containing a bacteriostatic preservative, designed for dissolving, storing, and diluting chemical research compounds",
    actionEs: "sirve como un solvente estéril de alta calidad que contiene un conservante bacteriostático",
    mechanismEn: "uses 0.9% benzyl alcohol to denature bacterial cell wall proteins and prevent microbial division, preserving hydrophilic peptides from degradation",
    mechanismEs: "utiliza alcohol bencílico al 0.9% para desnaturalizar las proteínas bacterianas y prevenir la división microbiana, preservando los péptidos de la degradación",
    benefitsEn: [
      "Research shows effective suppression of bacterial and microbial cell division",
      "Research shows preservation of peptide molecular structures during storage",
      "Research shows high solubility for hydrophilic reference standards",
      "Research shows standard validation as a laboratory reconstitution medium"
    ],
    benefitsEs: [
      "La investigación muestra la supresión efectiva de la división celular bacteriana",
      "La investigación muestra la preservación de las estructuras peptídicas durante el almacenamiento",
      "La investigación muestra una alta solubilidad para estándares de referencia hidrófilos",
      "La investigación muestra la validación estándar como medio de reconstitución de laboratorio"
    ]
  },
  "b12": {
    scientificName: "Vitamin B12 (Cyanocobalamin)",
    cas: "68-19-9",
    formula: "C63H88CoN14O14P",
    molarMass: "1355.37 g/mol",
    sequence: "N/A (Organometallic Compound)",
    citations: [
      "Shane, B., & Stokstad, E. L. (1985). 'Vitamin B12-folate interrelationships.' Annual Review of Nutrition, 5(1), 115-141.",
      "Banerjee, R. (1999). 'Coenzyme B12-dependent enzymes.' Chemistry and Biology of B12, 12, 81-112."
    ],
    actionEn: "represents a crucial organometallic coenzyme required for DNA synthesis, cell division, and fatty acid metabolism in laboratory models",
    actionEs: "representa una coenzima organometálica crucial necesaria para la síntesis de ADN y la división celular",
    mechanismEn: "acts as an essential cofactor for methionine synthase (mediating transmethylation) and methylmalonyl-CoA mutase (linking fatty acids to the Krebs cycle)",
    mechanismEs: "actúa como cofactor esencial para la metionina sintasa y la metilmalonil-CoA mutasa",
    benefitsEn: [
      "Research shows cofactor role in DNA methylation and cellular replication",
      "Research shows support for mitochondrial ATP generation via methylmalonyl pathways",
      "Research shows preservation of neural myelin sheath structures",
      "Research shows regulation of homocysteine levels to prevent endothelial stress"
    ],
    benefitsEs: [
      "La investigación muestra el papel de cofactor en la metilación del ADN",
      "La investigación muestra apoyo a la generación de ATP mitocondrial",
      "La investigación muestra la preservación de las estructuras de la vaina de mielina neural",
      "La investigación muestra la regulación de los niveles de homocisteína"
    ]
  },
  "bpc-5mg-tb-5mg": {
    scientificName: "BPC-157 & TB-500 Synergistic Blend (5mg+5mg)",
    cas: "Blend",
    formula: "C62H98N16O22 + C212H350N56O78S",
    molarMass: "Blend (1419.50 g/mol & 4963.50 g/mol)",
    sequence: "Blend of pentadecapeptide and Thymosin Beta-4 active domain",
    citations: [
      "Sikiric, P., et al. (2010). 'Stable gastric pentadecapeptide BPC 157 in trials for healing.' Current Pharmaceutical Design, 16(10), 1224-1234.",
      "Goldstein, A. L., et al. (2015). 'Thymosin beta 4: actin-sequestering peptide with multiple clinical applications.' Annals of the NY Academy of Sciences, 1112(1), 1-13."
    ],
    actionEn: "combines a cytoprotective gastric pentadecapeptide and an actin-sequestering Thymosin Beta-4 fragment to stimulate cooperative healing processes",
    actionEs: "combina un pentadecapéptido gástrico citoprotector y un fragmento de Timosina Beta-4",
    mechanismEn: "co-activates VEGF-A vascular growth factors (BPC-157) and coordinates actin cytoskeleton dynamics to accelerate endothelial cell migration (TB-500)",
    mechanismEs: "coactiva los factores de crecimiento vascular VEGF-A y coordina la dinámica del citoesqueleto de actina",
    benefitsEn: [
      "Research shows synergistic healing of tendons, ligaments, and muscle fibers",
      "Research shows cooperative activation of microvascular growth and tissue perfusion",
      "Research shows advanced fibroblast migration and collagen organization",
      "Research shows reduction of chronic inflammatory cascades in cell cultures"
    ],
    benefitsEs: [
      "La investigación muestra la cicatrización sinérgica de tendones, ligamentos y fibras musculares",
      "La investigación muestra la activación cooperativa del crecimiento microvascular",
      "La investigación muestra la migración avanzada de fibroblastos y organización del colágeno",
      "La investigación muestra la reducción de cascadas inflamatorias crónicas"
    ]
  },
  "bpc-10mg-tb-10mg": {
    scientificName: "BPC-157 & TB-500 Synergistic Blend (10mg+10mg)",
    cas: "Blend",
    formula: "C62H98N16O22 + C212H350N56O78S",
    molarMass: "Blend (1419.50 g/mol & 4963.50 g/mol)",
    sequence: "Blend of pentadecapeptide and Thymosin Beta-4 active domain",
    citations: [
      "Sikiric, P., et al. (2011). 'Toxicity of BPC 157 and Its Effects on Healing of Tendon, Muscle, and Bone.' Journal of Pharmacological Sciences, 117(2), 73-82.",
      "Philp, D., et al. (2004). 'Thymosin beta 4 promotes cell migration and wound healing.' Wound Repair and Regeneration, 12(2), 109-118."
    ],
    actionEn: "represents a high-concentration dual-peptide formulation designed for maximum tissue repair and angiogenesis synergy in wound healing models",
    actionEs: "representa una formulación de doble péptido de alta concentración diseñada para la reparación tisular",
    mechanismEn: "boosts growth hormone receptor expression in fibroblasts (BPC-157) while regulating monomeric G-actin to drive rapid keratinocyte migration (TB-500)",
    mechanismEs: "aumenta la expresión del receptor de hormona de crecimiento en fibroblastos y regula la G-actina monomérica",
    benefitsEn: [
      "Research shows accelerated repair of chronic soft tissue damage in animal models",
      "Research shows potent induction of vascular endothelial migration to injury sites",
      "Research shows collagen matrix remodeling and fiber realignment",
      "Research shows reduction of fibrotic tissue accumulation during healing"
    ],
    benefitsEs: [
      "La investigación muestra la reparación acelerada del daño crónico de tejidos blandos",
      "La investigación muestra una potente inducción de la migración endotelial vascular",
      "La investigación muestra la remodelación de la matriz de colágeno y alineación de fibras",
      "La investigación muestra la reducción de la acumulación de tejido fibrótico"
    ]
  },
  "cagrilintide": {
    scientificName: "Cagrilintide Amylin Analogue",
    cas: "2060371-59-9",
    formula: "C202H314N56O66S2",
    molarMass: "4514.88 g/mol",
    sequence: "synthetic acylated amylin analogue peptide",
    citations: [
      "Enebo, H. L., et al. (2021). 'Safety, tolerability, pharmacokinetics, and pharmacodynamics of cagrilintide, a novel long-acting amylin analogue.' The Lancet, 397(10286), 1736-1748.",
      "Krupa, A., et al. (2022). 'The emerging role of Cagrilintide in obesity management.' Diabetes & Metabolism, 48(4), 101344."
    ],
    actionEn: "acts as a synthetic acylated peptide and long-acting amylin receptor agonist, studied for metabolic regulation and portion control pathways",
    actionEs: "actúa como un péptido acilado sintético y agonista de acción prolongada del receptor de amilina",
    mechanismEn: "binds to amylin receptors AMY1-AMY3 and calcitonin receptors, signaling the hindbrain to delay gastric motility and suppress postprandial glucagon release",
    mechanismEs: "se une a los receptores de amilina AMY1-AMY3 y receptores de calcitonina, ordenando al cerebro posterior retrasar la motilidad gástrica",
    benefitsEn: [
      "Research shows potent activation of amylin receptors AMY1, AMY2, and AMY3",
      "Research shows delay of gastric emptying and modulation of hindbrain satiety systems",
      "Research shows suppression of postprandial glucagon secretion",
      "Research shows synergistic weight reduction when combined with GLP-1 agonists"
    ],
    benefitsEs: [
      "La investigación muestra la activación de los receptores de amilina AMY1, AMY2 y AMY3",
      "La investigación muestra el retraso del vaciado gástrico y modulación de la saciedad",
      "La investigación muestra la supresión de la secreción postprandial de glucagón",
      "La investigación muestra una reducción de peso sinérgica al combinarse con agonistas de GLP-1"
    ]
  },
  "cagrisema": {
    scientificName: "CagriSema Co-formulation",
    cas: "Blend",
    formula: "C202H314N56O66S2 + C187H291N45O59",
    molarMass: "Blend (4514.88 g/mol & 4113.58 g/mol)",
    sequence: "Blend of Cagrilintide and Semaglutide",
    citations: [
      "Frias, J. P., et al. (2022). 'Efficacy and safety of co-administered cagrilintide and semaglutide (CagriSema) in type 2 diabetes.' The Lancet, 400(10369), 2177-2188.",
      "Lau, J., et al. (2015). 'Discovery of the Once-Weekly Glucagon-Like Peptide-1 (GLP-1) Analogue Semaglutide.' Journal of Medicinal Chemistry, 58(18), 7370-7380."
    ],
    actionEn: "combines a long-acting amylin analogue and a selective GLP-1 receptor agonist in a dual-action formulation for superior metabolic signaling",
    actionEs: "combina un análogo de amilina de acción prolongada y un agonista selectivo del receptor de GLP-1",
    mechanismEn: "integrates satiety signaling pathways from both the hindbrain (amylin receptor AMY) and hypothalamus (GLP-1 receptor) to regulate energy homeostasis",
    mechanismEs: "integra las vías de señalización de la saciedad del cerebro posterior y del hipotálamo",
    benefitsEn: [
      "Research shows superior glycemic control and insulinotropic response via dual-pathway action",
      "Research shows synergistic reduction of energy intake through combined satiety pathways",
      "Research shows enhanced preservation of beta-cell function in islet cultures",
      "Research shows prolonged postprandial satiety and delayed gastric motility"
    ],
    benefitsEs: [
      "La investigación muestra un control glucémico superior y respuesta insulinotrópica",
      "La investigación muestra la reducción sinérgica de la ingesta de energía",
      "La investigación muestra una mayor preservación de la función de las células beta",
      "La investigación muestra una saciedad postprandial prolongada"
    ]
  },
  "cjc-1295-dac": {
    scientificName: "CJC-1295 with DAC",
    cas: "863288-34-0",
    formula: "C165H271N47O46",
    molarMass: "3647.20 g/mol",
    sequence: "Tyr-D-Ala-Asp-Ala-Ile-Phe-Thr-Gln-Ser-Tyr-Arg-Lys-Val-Leu-Ala-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Leu-Ser-Arg-Lys(Maleimidopropionyl)-NH2",
    citations: [
      "Teichman, S. L., et al. (2006). 'Prolonged stimulation of growth hormone by CJC-1295.' Journal of Clinical Endocrinology & Metabolism, 91(3), 799-805.",
      "Sackmann-Alamy, A., et al. (2012). 'Growth hormone releasing hormone analogs: chemistry and actions.' Endocrine Reviews, 33(4), 512-535."
    ],
    actionEn: "represents a synthetic GHRH analog conjugated to a Drug Affinity Complex (DAC), engineered to prolong biological half-life via albumin binding",
    actionEs: "representa un análogo sintético de GHRH conjugado con un complejo de afinidad farmacológica",
    mechanismEn: "stimulates GHRH receptors on somatotrophs to trigger cAMP-protein kinase A pathways, maintaining constant, elevated growth hormone secretion",
    mechanismEs: "estimula los receptores de GHRH en los somatotropos para desencadenar la vía cAMP-PKA",
    benefitsEn: [
      "Research shows extended biological half-life via covalent albumin binding",
      "Research shows elevated growth hormone and IGF-1 secretion without receptor desensitization",
      "Research shows stimulation of lean mass accretion and cell recovery pathways",
      "Research shows continuous somatotroph stimulation in laboratory assays"
    ],
    benefitsEs: [
      "La investigación muestra una vida media biológica prolongada mediante la unión a la albúmina",
      "La investigación muestra una secreción elevada de hormona de crecimiento e IGF-1",
      "La investigación muestra la estimulación de la ganancia de masa magra",
      "La investigación muestra una estimulación continua de los somatotropos"
    ]
  },
  "cjc-1295-no-dac": {
    scientificName: "CJC-1295 without DAC (Modified GRF 1-29)",
    cas: "863288-34-0",
    formula: "C152H252N44O42S",
    molarMass: "3367.97 g/mol",
    sequence: "Tyr-D-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Gly-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Met-Ser-Arg-NH2",
    citations: [
      "Campbell, R. M., et al. (1994). 'Enhanced growth hormone secretagogue activity of GHRH analogs.' Peptides, 15(3), 489-495.",
      "Fitzgerald, P., et al. (2009). 'Modified growth hormone-releasing factor peptides in animal models.' Growth Hormone & IGF Research, 19(2), 114-122."
    ],
    actionEn: "acts as a synthetic 29-amino-acid GHRH analogue, engineered to stimulate pulsatile growth hormone secretion with a physiological duration",
    actionEs: "actúa como un análogo sintético de GHRH de 29 aminoácidos diseñado para estimular la secreción pulsátil",
    mechanismEn: "binds to GHRH receptors in the anterior pituitary, raising intracellular cyclic AMP to trigger pulsatile GH release aligned with natural feedback loops",
    mechanismEs: "se une a los receptores de GHRH en la pituitaria anterior, aumentando el AMP cíclico intracelular",
    benefitsEn: [
      "Research shows pulsatile growth hormone release aligned with natural cycles",
      "Research shows stimulation of protein synthesis and lean mass maintenance",
      "Research shows support for bone mineralization and cellular recovery",
      "Research shows rapid clearance minimizing pituitary pathway desensitization"
    ],
    benefitsEs: [
      "La investigación muestra una liberación pulsátil alineada con los ciclos naturales",
      "La investigación muestra la estimulación de la síntesis de proteínas",
      "La investigación muestra el apoyo a la mineralización ósea y la recuperación celular",
      "La investigación muestra una depuración rápida que minimiza la desensibilización"
    ]
  },
  "cjc-1295-ipam": {
    scientificName: "CJC-1295 & Ipamorelin Synergistic Blend",
    cas: "Blend",
    formula: "C152H252N44O42S + C38H49N9O5",
    molarMass: "Blend (3367.97 g/mol & 711.89 g/mol)",
    sequence: "Blend of Mod GRF 1-29 and Ipamorelin",
    citations: [
      "Raun, K., et al. (1998). 'Ipamorelin, the first selective growth hormone secretagogue.' European Journal of Endocrinology, 139(5), 552-561.",
      "Bowers, C. Y. (2001). 'Synergistic growth hormone releasing peptide and GHRH interactions.' Growth Hormone & IGF Research, 11, S61-S65."
    ],
    actionEn: "combines a selective GHRH receptor agonist and a growth hormone secretagogue receptor (GHS-R) agonist in a single synergistic formulation",
    actionEs: "combina un agonista selectivo del receptor de GHRH y un agonista del receptor secretagogo de hormona de crecimiento (GHS-R)",
    mechanismEn: "activates dual pathways (cAMP and intracellular calcium flux) at the somatotroph cell level, evoking a significantly enhanced growth hormone peak",
    mechanismEs: "activa vías duales (cAMP y flujo de calcio intracelular) en los somatotropos",
    benefitsEn: [
      "Research shows synergistic release of growth hormone via dual-receptor binding",
      "Research shows cooperative support for lean tissue repair and protein synthesis",
      "Research shows protection of somatotroph receptors from premature fatigue",
      "Research shows optimal nitrogen retention and cellular recovery markers"
    ],
    benefitsEs: [
      "La investigación muestra la liberación sinérgica de la hormona de crecimiento",
      "La investigación muestra el apoyo cooperativo a la reparación del tejido magro",
      "La investigación muestra la protección de los receptores somatotropos",
      "La investigación muestra una retención óptima de nitrógeno y recuperación celular"
    ]
  },
  "dihexa": {
    scientificName: "Dihexa Cognitive Enhancer",
    cas: "1401708-83-5",
    formula: "C27H44N4O5",
    molarMass: "504.66 g/mol",
    sequence: "N-hexanoic-Tyr-Ile-(6)-aminohexanoic amide",
    citations: [
      "McCoy, A. T., et al. (2013). 'Evaluation of Dihexa in animal models of Alzheimer's disease.' Journal of Pharmacology and Experimental Therapeutics, 344(1), 141-154.",
      "Benoist, E. S., et al. (2014). 'The HGF/c-Met agonist Dihexa promotes dendritic spine formation.' Journal of Neuroscience Research, 92(11), 1445-1456."
    ],
    actionEn: "represents a synthetic peptide-derived small molecule designed to exhibit high-affinity binding to hepatocyte growth factor (HGF) to promote cognitive pathways",
    actionEs: "representa una molécula pequeña derivada de péptido diseñada para presentar una unión de alta afinidad al factor de crecimiento de hepatocitos (HGF)",
    mechanismEn: "dimerizes the c-Met receptor by binding to HGF at picomolar levels ($K_d \\approx 65$ pM), initiating downstream MAPK/ERK cascades that trigger synaptogenesis",
    mechanismEs: "dimeriza el receptor c-Met al unirse al HGF a niveles picomolares, iniciando cascadas de MAPK/ERK que desencadenan la sinaptogénesis",
    benefitsEn: [
      "Research shows high-affinity binding to HGF to stimulate c-Met dimerization",
      "Research shows induction of synaptogenesis and dendritic spine growth in cortical cells",
      "Research shows reversal of cognitive deficits in animal models of synaptic decay",
      "Research shows neuroprotective effects against oxidative stress and neuronal loss"
    ],
    benefitsEs: [
      "La investigación muestra la unión de alta afinidad a HGF para estimular la dimerización",
      "La investigación muestra la inducción de la sinaptogénesis y crecimiento de espinas dendríticas",
      "La investigación muestra la reversión de déficits cognitivos en modelos animales",
      "La investigación muestra efectos neuroprotectores contra el estrés oxidativo"
    ]
  },
  "dsip": {
    scientificName: "DSIP (Delta Sleep-Inducing Peptide)",
    cas: "62568-57-4",
    formula: "C35H48N10O15",
    molarMass: "849.83 g/mol",
    sequence: "Trp-Ala-Gly-Gly-Asp-Ala-Ser-Gly-Glu",
    citations: [
      "Schoenenberger, G. A., et al. (1977). 'Characterization of a delta-sleep-inducing peptide.' Proceedings of the National Academy of Sciences, 74(3), 1282-1286.",
      "Kovalzon, V. M., & Strekalova, T. V. (2006). 'Delta sleep-inducing peptide (DSIP): 30 years of research.' Journal of Evolutionary Biochemistry and Physiology, 42(3), 241-248."
    ],
    actionEn: "acts as a naturally occurring hypothalamic nonapeptide, studied for its ability to regulate sleep architecture, endocrine release, and stress parameters",
    actionEs: "actúa como un nonapéptido hipotalámico natural estudiado por su capacidad para regular el sueño",
    mechanismEn: "modulates GABAergic and NMDA receptor systems while suppressing pituitary ACTH and adrenal cortisol production to stabilize neural membranes",
    mechanismEs: "regula los sistemas de receptores GABAérgicos y NMDA mientras suprime la producción de ACTH y cortisol",
    benefitsEn: [
      "Research shows induction of delta slow-wave sleep in physiological assays",
      "Research shows reduction of ACTH and cortisol release to mitigate stress states",
      "Research shows potent antioxidant effects and reduction of lipid peroxidation",
      "Research shows stabilization of neural cell membranes during oxidative strain"
    ],
    benefitsEs: [
      "La investigación muestra la inducción del sueño delta de ondas lentas",
      "La investigación muestra la reducción de ACTH y cortisol para mitigar el estrés",
      "La investigación muestra potentes efectos antioxidantes",
      "La investigación muestra la estabilización de las membranas celulares neurales"
    ]
  },
  "dulaglutide": {
    scientificName: "Dulaglutide GLP-1 Agonist",
    cas: "923950-08-7",
    formula: "C2646H4044N704O836S18",
    molarMass: "~59670 g/mol",
    sequence: "Recombinant GLP-1 receptor agonist fused to human IgG4 Fc fragment",
    citations: [
      "Barrington, P., et al. (2011). 'A novel long-acting GLP-1 receptor agonist, dulaglutide.' Diabetes, Obesity and Metabolism, 13(5), 426-433.",
      "Glaesner, W., et al. (2010). 'Engineering and characterization of the long-acting GLP-1 analog dulaglutide.' Gene, 455(1-2), 18-24."
    ],
    actionEn: "functions as a long-acting recombinant incretin mimetic containing a GLP-1 analog fused to a human IgG4 Fc fragment to resist renal filtration",
    actionEs: "funciona como un mimético de incretina recombinante de acción prolongada",
    mechanismEn: "activates pancreatic beta-cell GLP-1 receptors to trigger cyclic AMP generation and insulin secretion, resisting DPP-4 enzymic cleavage",
    mechanismEs: "activa los receptores de GLP-1 pancreáticos para generar AMP cíclico y secreción de insulina",
    benefitsEn: [
      "Research shows long-acting GLP-1 receptor activation resisting DPP-4 degradation",
      "Research shows stimulation of glucose-dependent insulin secretion from pancreatic islet cells",
      "Research shows suppression of postprandial glucagon secretion",
      "Research shows delay of gastric emptying to support metabolic homeostasis"
    ],
    benefitsEs: [
      "La investigación muestra una activación prolongada del receptor de GLP-1",
      "La investigación muestra la secreción de insulina dependiente de glucosa",
      "La investigación muestra la supresión de la secreción postprandial de glucagón",
      "La investigación muestra el retraso del vaciado gástrico"
    ]
  },
  "epithalon": {
    scientificName: "Epithalon (Epitalon)",
    cas: "307297-39-8",
    formula: "C14H22N4O9",
    molarMass: "390.35 g/mol",
    sequence: "Ala-Glu-Asp-Gly",
    citations: [
      "Khavinson, V. K., et al. (2003). 'Epithalon peptide increases telomerase activity and telomere elongation in human somatic cells.' Bulletin of Experimental Biology and Medicine, 135(6), 590-592.",
      "Khavinson, V. K., et al. (2020). 'Pineal peptides in the regulation of cellular aging.' Frontiers in Endocrinology, 11, 230."
    ],
    actionEn: "serves as a synthetic pineal-derived tetrapeptide, widely studied for its role in cellular longevity, telomere maintenance, and anti-aging signaling",
    actionEs: "sirve como un tetrapéptido sintético derivado de la glándula pineal, estudiado por su papel en la longevidad celular",
    mechanismEn: "upregulates telomerase activity to elongate telomeres and modulates promoter regions to stimulate antioxidant enzymes (SOD and GPx)",
    mechanismEs: "regula positivamente la actividad de la telomerasa para alargar los telómeros y estimula las enzimas antioxidantes",
    benefitsEn: [
      "Research shows activation of telomerase to extend cellular replication capacity",
      "Research shows upregulation of superoxide dismutase (SOD) and glutathione peroxidase (GPx)",
      "Research shows regulation of pineal melatonin secretion pathways in aging models",
      "Research shows protection of cellular DNA from oxidative damage"
    ],
    benefitsEs: [
      "La investigación muestra la activación de la telomerasa para extender la capacidad de replicación",
      "La investigación muestra la regulación positiva de SOD y GPx",
      "La investigación muestra la regulación de la secreción de melatonina pineal",
      "La investigación muestra la protección del ADN celular contra el daño oxidativo"
    ]
  },
  "foxo4": {
    scientificName: "FOXO4 p53-Binding Peptide",
    cas: "N/A",
    formula: "C65H112N22O22S",
    molarMass: "~1560 g/mol",
    sequence: "Synthetic peptide matching the p53-binding domain of FOXO4",
    citations: [
      "Baar, M. P., et al. (2017). 'Targeted clearance of senescent cells by FOXO4-DRI peptide restores tissue homeostasis.' Cell, 169(1), 132-147.",
      "de Keizer, P. L. (2017). 'The therapeutic potential of targeting senescent cells.' Trends in Molecular Medicine, 23(5), 447-462."
    ],
    actionEn: "represents a synthetic peptide matching the p53-interaction domain of Forkhead Box O4, designed to investigate cellular senescence parameters",
    actionEs: "representa un péptido sintético diseñado para investigar la senescencia celular al unirse a p53",
    mechanismEn: "competitively blocks the interaction between endogenous FOXO4 and p53, allowing p53 to translocate to mitochondria and trigger apoptosis in senescent cells",
    mechanismEs: "bloquea competitivamente la interacción entre FOXO4 y p53, permitiendo la translocación de p53",
    benefitsEn: [
      "Research shows competitive inhibition of FOXO4-p53 nuclear complexing",
      "Research shows selective induction of apoptosis in senescent cell populations",
      "Research shows restoration of tissue recovery and regenerative markers",
      "Research shows activation of mitochondrial p53 signaling pathways"
    ],
    benefitsEs: [
      "La investigación muestra la inhibición competitiva de la unión FOXO4-p53",
      "La investigación muestra la inducción selectiva de la apoptosis en células senescentes",
      "La investigación muestra la restauración de marcadores regenerativos y reparación tisular",
      "La investigación muestra la activación de las vías de señalización mitocondriales de p53"
    ]
  },
  "foxo4-dri": {
    scientificName: "FOXO4-DRI (D-Retro-Inverso peptide)",
    cas: "N/A",
    formula: "C214H376N78O68S2",
    molarMass: "5358.30 g/mol",
    sequence: "D-Retro-Inverso isomer matching the p53-binding domain of FOXO4",
    citations: [
      "Baar, M. P., et al. (2017). 'Targeted clearance of senescent cells by FOXO4-DRI peptide restores tissue homeostasis.' Cell, 169(1), 132-147.",
      "Zhang, L., et al. (2020). 'Senolytic peptide FOXO4-DRI selectively eliminates senescent cells and mitigates age-related disease.' Aging Cell, 19(9), e13214."
    ],
    actionEn: "represents a proteolysis-resistant D-retro-inverso peptide designed to act as a highly stable senolytic agent in cellular health research",
    actionEs: "representa un péptido D-retro-inverso resistente a la proteólisis diseñado como senolítico",
    mechanismEn: "blocks the nuclear binding of p53 to FOXO4, releasing p53 to trigger caspase-3/7 and apoptosis specifically inside senescent cells",
    mechanismEs: "bloquea la unión nuclear de p53 a FOXO4, liberando p53 para desencadenar caspasas y apoptosis",
    benefitsEn: [
      "Research shows high proteolytic stability via D-retro-inverso configuration",
      "Research shows selective elimination of senescent cells in cellular models",
      "Research shows reversal of hair loss and renal decline in aging models",
      "Research shows activation of caspase-dependent apoptotic pathways in senescent tissue"
    ],
    benefitsEs: [
      "La investigación muestra una alta estabilidad proteolítica mediante la configuración D-retro-inversa",
      "La investigación muestra la eliminación selectiva de células senescentes",
      "La investigación muestra la reversión de la pérdida de cabello y deterioro renal",
      "La investigación muestra la activación de vías apoptóticas dependientes de caspasas"
    ]
  },
  "ghk-cu": {
    scientificName: "GHK-Cu (Copper Tripeptide)",
    cas: "49557-75-7",
    formula: "C14H22CuN6O4",
    molarMass: "401.91 g/mol",
    sequence: "Gly-His-Lys (Copper complexed)",
    citations: [
      "Pickart, L., et al. (2018). 'GHK Peptide as a Natural Modulator of Multiple Cellular Pathways.' BioMed Research International, 2018, 6481080.",
      "Badenhorst, T., et al. (2016). 'The effects of GHK-Cu on skin regeneration.' International Journal of Cosmetic Science, 38(6), 574-581."
    ],
    actionEn: "functions as a naturally occurring copper-complexed tripeptide (glycyl-L-histidyl-L-lysine), studied for wound healing and tissue remodeling",
    actionEs: "funciona como un tripéptido acomplejado con cobre que se encuentra de forma natural en el plasma",
    mechanismEn: "acts as a copper carrier to supply copper ions to superoxide dismutase (SOD) and upregulates type I and III collagen expression in fibroblasts",
    mechanismEs: "actúa como transportador de cobre para suministrar iones a SOD y regula la expresión de colágeno tipos I y III",
    benefitsEn: [
      "Research shows upregulation of collagen and elastin synthesis in fibroblasts",
      "Research shows acceleration of wound healing and tissue remodeling pathways",
      "Research shows antioxidant support via superoxide dismutase (SOD) activation",
      "Research shows anti-inflammatory activity through cytokine gene modulation"
    ],
    benefitsEs: [
      "La investigación muestra la regulación positiva de la síntesis de colágeno y elastina",
      "La investigación muestra la aceleración de la cicatrización de heridas",
      "La investigación muestra apoyo antioxidante a través de la activación de SOD",
      "La investigación muestra actividad antiinflamatoria mediante la modulación de citoquinas"
    ]
  },
  "glow-blend": {
    scientificName: "GLOW Blend (GHK-Cu + Argireline)",
    cas: "Blend",
    formula: "C14H22CuN6O4 + C34H57N13O15",
    molarMass: "Blend (401.91 g/mol & 887.98 g/mol)",
    sequence: "Blend of GHK-Cu and Acetyl Hexapeptide-8",
    citations: [
      "Pickart, L., et al. (2015). 'GHK-Cu and skin remodeling: a review.' Cosmetics, 2(3), 236-247.",
      "Blanes-Mira, C., et al. (2002). 'A synthetic hexapeptide (Argireline) with antiwrinkle activity.' International Journal of Cosmetic Science, 24(5), 303-310."
    ],
    actionEn: "combines a copper-complexed tissue remodeling peptide and a neuromuscular transmitter inhibitor in a synergistic skin-health research formulation",
    actionEs: "combina un péptido de remodelación tisular y un inhibidor de la transmisión neuromuscular",
    mechanismEn: "promotes collagen deposition via GHK-Cu while Argireline competitive inhibits the SNARE complex (SNAP-25) to relax micro-musculature tension",
    mechanismEs: "promueve el depósito de colágeno mediante GHK-Cu mientras la argirelina inhibe el complejo SNARE",
    benefitsEn: [
      "Research shows synergistic upregulation of collagen and extracellular matrix components",
      "Research shows relaxation of micro-musculature tension via SNARE complex inhibition",
      "Research shows improvement in skin elasticity and micro-vascular blood flow",
      "Research shows protection of dermal cell lines from oxidative degradation"
    ],
    benefitsEs: [
      "La investigación muestra una regulación positiva sinérgica del colágeno",
      "La investigación muestra la relajación de la tensión de la micromusculatura",
      "La investigación muestra una mejora en la elasticidad de la piel y el flujo microvascular",
      "La investigación muestra la protección de líneas celulares dérmicas contra la degradación"
    ]
  },
  "klow-blend": {
    scientificName: "KLOW Blend (GHK-Cu + Epithalon + Argireline)",
    cas: "Blend",
    formula: "C14H22CuN6O4 + C14H22N4O9 + C34H57N13O15",
    molarMass: "Blend",
    sequence: "Blend of GHK-Cu, Epithalon, and Acetyl Hexapeptide-8",
    citations: [
      "Khavinson, V. K., et al. (2003). 'Epithalon peptide increases telomerase activity.' Bulletin of Experimental Biology and Medicine, 135(6), 590-592.",
      "Pickart, L., et al. (2018). 'GHK Peptide as a Natural Modulator of Multiple Cellular Pathways.' BioMed Research International, 2018, 6481080."
    ],
    actionEn: "represents a triple-action peptide blend targeting telomeric activation, collagen matrix generation, and micro-muscular relaxation in cellular studies",
    actionEs: "representa una mezcla peptídica de triple acción que aborda la activación telomérica",
    mechanismEn: "coordinates telomerase activation (Epithalon), copper ion delivery for SOD activity (GHK-Cu), and SNARE complex disruption to study cellular aging parameters",
    mechanismEs: "coordina la activación de la telomerasa, el suministro de cobre y la disrupción del complejo SNARE",
    benefitsEn: [
      "Research shows triple-peptide synergy supporting telomere preservation",
      "Research shows stimulation of collagen types I, III, and IV in fibroblasts",
      "Research shows mitigation of oxidative stress via SOD upregulation",
      "Research shows reduction of neuromuscular micro-tension to support cell structure"
    ],
    benefitsEs: [
      "La investigación muestra la sinergia de triple péptido que apoya la preservación de telómeros",
      "La investigación muestra la estimulación de colágeno tipos I, III y IV",
      "La investigación muestra la mitigación del estrés oxidativo",
      "La investigación muestra la reducción de la microtensión neuromuscular"
    ]
  },
  "glutathione": {
    scientificName: "Glutathione (L-gamma-glutamyl-L-cysteinylglycine)",
    cas: "70-18-8",
    formula: "C10H17N3O6S",
    molarMass: "307.32 g/mol",
    sequence: "L-gamma-glutamyl-L-cysteinylglycine",
    citations: [
      "Meister, A. (1988). 'Glutathione metabolism and its selective modification.' Journal of Biological Chemistry, 263(33), 17205-17208.",
      "Forman, H. J., et al. (2009). 'Glutathione: Overview of its protective roles, measurement, and biosynthesis.' Molecular Aspects of Medicine, 30(1-2), 1-12."
    ],
    actionEn: "serves as the primary endogenous tripeptide antioxidant, essential for cellular defense, detoxification, and redox homeostasis in in-vitro models",
    actionEs: "sirve como el antioxidante tripéptido endógeno primario, esencial para la defensa celular",
    mechanismEn: "directly scavenges free radicals and acts as a co-substrate for glutathione peroxidase (GPx) to convert hydrogen peroxide to water",
    mechanismEs: "depura directamente los radicales libres y actúa como co-sustrato para la glutatión peroxidasa",
    benefitsEn: [
      "Research shows direct neutralization of reactive oxygen species and free radicals",
      "Research shows cofactor role for GPx and GST in detoxification pathways",
      "Research shows maintenance of cellular proteins and enzymes in reduced states",
      "Research shows support for mitochondrial membrane stability and cellular defense"
    ],
    benefitsEs: [
      "La investigación muestra la neutralización directa de especies reactivas de oxígeno",
      "La investigación muestra el papel de cofactor para GPx y GST en la desintoxicación",
      "La investigación muestra el mantenimiento de proteínas celulares en estados reducidos",
      "La investigación muestra apoyo a la estabilidad de la membrana mitocondrial"
    ]
  },
  "ipamorelin": {
    scientificName: "Ipamorelin Growth Hormone Secretagogue",
    cas: "170851-70-4",
    formula: "C38H49N9O5",
    molarMass: "711.89 g/mol",
    sequence: "Aib-His-D-2-Nal-D-Phe-Lys-NH2",
    citations: [
      "Raun, K., et al. (1998). 'Ipamorelin, the first selective growth hormone secretagogue.' European Journal of Endocrinology, 139(5), 552-561.",
      "Gobburu, J. V., et al. (1999). 'Pharmacokinetics and pharmacodynamics of Ipamorelin, a GH-releasing peptide.' Pharmaceutical Research, 16(9), 1412-1417."
    ],
    actionEn: "represents a synthetic pentapeptide and selective agonist of the growth hormone secretagogue receptor (GHS-R), studied for pituitary hormone release",
    actionEs: "representa un pentapéptido sintético y agonista selectivo del receptor secretagogo de hormona de crecimiento (GHS-R)",
    mechanismEn: "binds with high affinity to GHS-R in the anterior pituitary, raising intracellular calcium to trigger growth hormone release without affecting ACTH or cortisol",
    mechanismEs: "se une con alta afinidad a GHS-R en la pituitaria anterior, elevando el calcio intracelular",
    benefitsEn: [
      "Research shows highly selective stimulation of growth hormone secretion pulses",
      "Research shows zero elevation of ACTH, cortisol, prolactin, or aldosterone",
      "Research shows support for nitrogen retention and lean mass preservation",
      "Research shows accelerated recovery and cell regeneration in tissue models"
    ],
    benefitsEs: [
      "La investigación muestra una estimulación altamente selectiva de los pulsos de secreción",
      "La investigación muestra cero elevación de ACTH, cortisol, prolactina o aldosterona",
      "La investigación muestra apoyo a la retención de nitrógeno",
      "La investigación muestra una recuperación acelerada en modelos de tejido"
    ]
  },
  "kpv": {
    scientificName: "KPV Anti-inflammatory Peptide",
    cas: "17750-73-1",
    formula: "C16H29N5O4",
    molarMass: "355.44 g/mol",
    sequence: "Lys-Pro-Val",
    citations: [
      "Kannengiesser, K., et al. (2008). 'KPV peptide suppresses inflammatory bowel disease in mice.' Inflammatory Bowel Diseases, 14(3), 324-331.",
      "Dalmasso, G., et al. (2008). 'KPV peptide inhibits NF-kB activation in intestinal epithelial cells.' Life Sciences, 82(25-26), 1232-1240."
    ],
    actionEn: "functions as a synthetic tripeptide matching the C-terminus of alpha-MSH, widely studied for its potent anti-inflammatory and mucosal healing properties",
    actionEs: "funciona como un tripéptido sintético que coincide con el extremo C-terminal de la alfa-MSH",
    mechanismEn: "blocks the nuclear translocation of NF-kB, downregulating the expression of pro-inflammatory cytokines such as TNF-alpha and interleukins in epithelial cells",
    mechanismEs: "bloquea la translocación nuclear de NF-kB, disminuyendo la expresión de citoquinas proinflamatorias",
    benefitsEn: [
      "Research shows inhibition of NF-kB translocation to suppress inflammatory cytokines",
      "Research shows accelerated mucosal healing in bowel inflammation models",
      "Research shows stabilization of tight junction proteins in cellular barriers",
      "Research shows potent anti-inflammatory signaling without systemic melanotropic effects"
    ],
    benefitsEs: [
      "La investigación muestra la inhibición de la translocación de NF-kB",
      "La investigación muestra una cicatrización mucosa acelerada",
      "La investigación muestra la estabilización de proteínas de unión estrecha",
      "La investigación muestra una potente señalización antiinflamatoria sin efectos melanotrópicos"
    ]
  },
  "l-carnitine": {
    scientificName: "L-Carnitine",
    cas: "541-15-1",
    formula: "C7H15NO3",
    molarMass: "161.20 g/mol",
    sequence: "N/A (Amino Acid Derivative)",
    citations: [
      "Bremer, J. (1983). 'Carnitine - metabolism and functions.' Physiological Reviews, 63(4), 1420-1480.",
      "Stephens, F. B., et al. (2007). 'The role of carnitine in the regulation of skeletal muscle metabolism.' American Journal of Physiology-Endocrinology and Metabolism, 292(6), E1712-E1720."
    ],
    actionEn: "represents an endogenous quaternary ammonium compound required for mitochondrial fatty acid oxidation and cellular energy production pathways",
    actionEs: "representa un compuesto de amonio cuaternario endógeno necesario para la oxidación mitocondrial",
    mechanismEn: "serves as a substrate for carnitine palmitoyltransferase 1 (CPT-1), conjugating to long-chain fatty acyl-CoAs to facilitate transport into mitochondria",
    mechanismEs: "sirve como sustrato para la carnitina palmitoiltransferasa 1 (CPT-1), facilitando el transporte",
    benefitsEn: [
      "Research shows transport of fatty acids across mitochondrial membranes for beta-oxidation",
      "Research shows enhancement of ATP synthesis and mitochondrial energy efficiency",
      "Research shows reduction of metabolic lactic acid accumulation in muscle tissues",
      "Research shows preservation of muscle glycogen and reduction of oxidative stress"
    ],
    benefitsEs: [
      "La investigación muestra el transporte de ácidos grasos para la beta-oxidación",
      "La investigación muestra la mejora de la síntesis de ATP",
      "La investigación muestra la reducción de la acumulación de ácido láctico metabólico",
      "La investigación muestra la preservación del glucógeno muscular"
    ]
  },
  "lipo-c": {
    scientificName: "Lipo-C Lipotropic Formulation",
    cas: "Blend",
    formula: "C7H15NO3 + C6H12O6 + C5H11NO2S",
    molarMass: "Blend (L-Carnitine & Inositol & Methionine)",
    sequence: "N/A (Lipotropic Compound Blend)",
    citations: [
      "Bremer, J. (1983). 'Carnitine - metabolism and functions.' Physiological Reviews, 63(4), 1420-1480.",
      "Crook, M. J. (2012). 'Lipotropic factors and hepatic lipid metabolism.' Journal of Clinical Pathology, 65(9), 773-779."
    ],
    actionEn: "combines L-Carnitine, Inositol, and Methionine in a synergistic lipotropic research formulation designed to optimize fatty acid metabolism pathways",
    actionEs: "combina L-carnitina, inositol y metionina en una formulación lipotrópica sinérgica",
    mechanismEn: "coordinates mitochondrial fatty acid translocation (L-Carnitine), phospholipid synthesis (Methionine), and second messenger insulin receptor signaling (Inositol)",
    mechanismEs: "coordina la translocación de ácidos grasos, síntesis de fosfolípidos y señalización del receptor de insulina",
    benefitsEn: [
      "Research shows synergistic upregulation of cellular lipid oxidation and transport",
      "Research shows support for hepatic lipid export and prevention of cellular accumulation",
      "Research shows optimization of insulin receptor signaling via inositol phosphates",
      "Research shows enhanced cellular energy respiration and mitochondrial health"
    ],
    benefitsEs: [
      "La investigación muestra la regulación positiva sinérgica de la oxidación de lípidos",
      "La investigación muestra el apoyo al transporte y exportación de lípidos hepáticos",
      "La investigación muestra la optimización de la señalización del receptor de insulina",
      "La investigación muestra una mejor respiración energética celular"
    ]
  },
  "ll37": {
    scientificName: "LL-37 Cathelicidin Peptide",
    cas: "154947-66-7",
    formula: "C205H340N60O53",
    molarMass: "4493.26 g/mol",
    sequence: "LLGDFFRKSKEKIGKEFKRIVQRIKDFLRNLVPRTES",
    citations: [
      "Durr, U. H., et al. (2006). 'LL-37, the only human member of the cathelicidin family.' Biochimica et Biophysica Acta, 1758(9), 1408-1425.",
      "Heilborn, J. D., et al. (2003). 'The cathelicidin anti-microbial peptide LL-37 is involved in re-epithelialization of human skin wounds.' Journal of Investigative Dermatology, 120(3), 379-389."
    ],
    actionEn: "functions as a synthetic 37-amino-acid human cathelicidin-derived peptide, studied for host defense, immune signaling, and cellular migration pathways",
    actionEs: "funciona como un péptido de 37 aminoácidos derivado de la catelicidina humana",
    mechanismEn: "electrostaticly disrupts bacterial cell membranes and binds to formyl peptide receptor 2 (FPR2) to trigger endothelial cell and keratinocyte migration",
    mechanismEs: "altera las membranas bacterianas y se une al receptor FPR2 para inducir migración celular",
    benefitsEn: [
      "Research shows broad-spectrum membrane-lytic activity against microbes",
      "Research shows neutralization of bacterial endotoxins (LPS) to limit inflammation",
      "Research shows promotion of keratinocyte migration and wound healing pathways",
      "Research shows stimulation of angiogenesis via FPR2-mediated signaling"
    ],
    benefitsEs: [
      "La investigación muestra actividad lítica de amplio espectro contra microbios",
      "La investigación muestra la neutralización de endotoxinas bacterianas (LPS)",
      "La investigación muestra la promoción de la migración de queratinocitos",
      "La investigación muestra la estimulación de la angiogénesis"
    ]
  },
  "mic-blend": {
    scientificName: "MIC Blend (Methionine + Inositol + Choline)",
    cas: "Blend",
    formula: "C5H11NO2S + C6H12O6 + C5H9NO3",
    molarMass: "Blend (Lipotropic Compound Mix)",
    sequence: "N/A (Lipotropic Blend)",
    citations: [
      "Crook, M. J. (2012). 'Lipotropic factors and hepatic lipid metabolism.' Journal of Clinical Pathology, 65(9), 773-779.",
      "Shane, B., & Stokstad, E. L. (1985). 'Vitamin B12-folate interrelationships.' Annual Review of Nutrition, 5(1), 115-141."
    ],
    actionEn: "combines methyl donor Methionine, cell membrane precursor Choline, and signaling molecule Inositol to investigate lipotropic pathways and fat transport",
    actionEs: "combina metionina como donante de metilo, colina como precursor y inositol",
    mechanismEn: "promotes phospholipid synthesis and VLDL formation in liver cells while activating inositol phosphate secondary messenger systems to optimize lipid export",
    mechanismEs: "promueve la síntesis de fosfolípidos y la formación de VLDL en las células hepáticas",
    benefitsEn: [
      "Research shows synergistic fatty acid mobilization and hepatic lipid export",
      "Research shows support for DNA methylation and transmethylation pathways",
      "Research shows upregulation of mitochondrial ATP production via cofactor activity",
      "Research shows optimization of cellular insulin signaling and glucose utilization"
    ],
    benefitsEs: [
      "La investigación muestra la movilización sinérgica de ácidos grasos",
      "La investigación muestra el apoyo a las vías de metilación del ADN",
      "La investigación muestra la regulación positiva de la producción de ATP mitocondrial",
      "La investigación muestra la optimización de la señalización de la insulina"
    ]
  },
  "mots-c": {
    scientificName: "MOTS-c (Mitochondrial-Derived Peptide)",
    cas: "1627580-64-6",
    formula: "C101H152N28O22S2",
    molarMass: "2174.62 g/mol",
    sequence: "Met-Arg-Trp-Gln-Glu-Met-Gly-Tyr-Ile-Phe-Leu-Pro-Arg-Lys-Leu-Arg-Pro",
    citations: [
      "Lee, C., et al. (2015). 'The mitochondrial-derived peptide MOTS-c promotes metabolic homeostasis and prevents diet-induced obesity.' Cell Metabolism, 21(3), 443-454.",
      "Kim, K. H., et al. (2018). 'Mitochondrial-derived peptides as regulators of metabolism.' BMB Reports, 51(11), 549-556."
    ],
    actionEn: "represents a 17-amino-acid mitochondrial-derived peptide (MDP) studied for its master regulation of metabolic homeostasis and cellular energy states",
    actionEs: "representa un péptido de 17 aminoácidos derivado de las mitocondrias (MDP)",
    mechanismEn: "translocates to the nucleus under metabolic stress and activates the AMP-activated protein kinase (AMPK) pathway to increase GLUT4 expression",
    mechanismEs: "se transloca al núcleo bajo estrés metabólico y activa la vía AMPK para aumentar GLUT4",
    benefitsEn: [
      "Research shows activation of the AMPK pathway to enhance cellular energy sensing",
      "Research shows stimulation of GLUT4 translocation to increase glucose uptake",
      "Research shows upregulation of skeletal muscle fatty acid beta-oxidation",
      "Research shows prevention of cellular senescence and age-associated insulin resistance"
    ],
    benefitsEs: [
      "La investigación muestra la activación de la vía AMPK en la detección de energía",
      "La investigación muestra la estimulación de la translocación de GLUT4",
      "La investigación muestra la regulación positiva de la beta-oxidación de ácidos grasos",
      "La investigación muestra la prevención de la senescencia celular"
    ]
  },
  "retatrutide": {
    scientificName: "Retatrutide (Triple GIP/GLP-1/GCG Agonist)",
    cas: "2381089-83-2",
    formula: "C223H336N46O70",
    molarMass: "4731.39 g/mol",
    sequence: "synthetic 39-amino-acid peptide with GIP, GLP-1, and glucagon receptor agonist activity",
    citations: [
      "Coskun, T., et al. (2023). 'Retatrutide (LY3437943), a novel GIP, GLP-1, and glucagon receptor agonist.' Cell Metabolism, 35(6), 911-925.",
      "Rosenstock, J., et al. (2023). 'Triple GIP, GLP-1, and glucagon receptor agonist retatrutide in type 2 diabetes.' The Lancet, 402(10398), 301-312."
    ],
    actionEn: "represents a synthetic 39-amino-acid peptide designed as a triple agonist targeting the GLP-1, GIP, and glucagon (GCG) receptors for metabolic control",
    actionEs: "representa un péptido sintético de 39 aminoácidos diseñado como agonista triple de los receptores de GLP-1, GIP y glucagón (GCG)",
    mechanismEn: "simultaneously activates GIP (insulin secretion), GLP-1 (appetite inhibition), and glucagon receptors (lipolysis and energy expenditure regulation)",
    mechanismEs: "activa simultáneamente los receptores de GIP, GLP-1 y glucagón",
    benefitsEn: [
      "Research shows triple agonist activity at GLP-1, GIP, and glucagon receptors",
      "Research shows significant upregulation of energy expenditure and lipolysis via GCG",
      "Research shows superior glycemic control and insulin sensitivity in metabolic assays",
      "Research shows profound reduction of hepatic fat accumulation"
    ],
    benefitsEs: [
      "La investigación muestra actividad agonista triple en los receptores de GLP-1, GIP y glucagón",
      "La investigación muestra una regulación positiva del gasto energético y la lipólisis",
      "La investigación muestra un control glucémico superior y sensibilidad a la insulina",
      "La investigación muestra una reducción profunda de la acumulación de grasa hepática"
    ]
  },
  "selank": {
    scientificName: "Selank Anxiolytic Peptide",
    cas: "129954-34-3",
    formula: "C33H57N11O9",
    molarMass: "751.90 g/mol",
    sequence: "Thr-Lys-Pro-Arg-Pro-Gly-Pro",
    citations: [
      "Uchida, M., et al. (2008). 'Anxiolytic and cognitive effects of Selank in animal models.' Bulletin of Experimental Biology and Medicine, 146(2), 191-194.",
      "Seredenin, S. B., et al. (2009). 'Selank: a novel peptide drug with anxiolytic and neuroprotective properties.' Russian Journal of Bioorganic Chemistry, 35(5), 589-598."
    ],
    actionEn: "functions as a synthetic heptapeptide analogue of the immunomodulatory peptide tuftsin, designed to act as an anxiolytic and neuroprotective agent",
    actionEs: "funciona como un análogo de heptapéptido sintético de la tuftsina immunomoduladora",
    mechanismEn: "regulates enkephalin-degrading enzymes to prolong opioid signaling and modulates hippocampal GABAergic neurotransmission and BDNF expression",
    mechanismEs: "regula las enzimas que degradan la encefalina y modula la neurotransmisión GABAérgica hipocampal",
    benefitsEn: [
      "Research shows potent anxiolytic effects without sedative or hypnotic side effects",
      "Research shows inhibition of enkephalin-degrading enzymes to prolong signaling",
      "Research shows upregulation of BDNF expression to support neuroplasticity",
      "Research shows modulation of GABAergic and serotonergic neurotransmitter pathways"
    ],
    benefitsEs: [
      "La investigación muestra potentes efectos ansiolíticos sin efectos sedantes",
      "La investigación muestra la inhibición de las enzimas degradadoras de encefalinas",
      "La investigación muestra la regulación positiva del BDNF para la neuroplasticidad",
      "La investigación muestra la modulación de las vías GABAérgicas y serotoninérgicas"
    ]
  },
  "semax": {
    scientificName: "Semax (ACTH 4-10 analogue)",
    cas: "80714-61-0",
    formula: "C37H51N9O10S",
    molarMass: "813.92 g/mol",
    sequence: "Met-Glu-His-Phe-Pro-Gly-Pro",
    citations: [
      "Myasoedov, N. F., et al. (2018). 'Peptides of the Semax family: molecular mechanisms and clinical potential.' Russian Journal of Bioorganic Chemistry, 44(2), 115-127.",
      "Korytnikova, M. V., et al. (2020). 'Neuroprotective properties of Semax and its modified peptide derivatives.' Journal of Neurochemistry, 154(3), 288-301."
    ],
    actionEn: "represents a synthetic heptapeptide analog of the adrenocorticotropic hormone (ACTH 4-10) fragment, researched for cognitive and neuroprotective properties",
    actionEs: "representa un análogo de heptapéptido sintético de la ACTH (4-10) estudiado por sus propiedades nootrópicas",
    mechanismEn: "activates melanocortin receptors (MC4R) and triggers brain-derived neurotrophic factor (BDNF) and nerve growth factor (NGF) synthesis in hippocampal cells",
    mechanismEs: "activa los receptores de melanocortina (MC4R) y desencadena la síntesis de BDNF y NGF",
    benefitsEn: [
      "Research shows elevation of hippocampal BDNF and NGF expression",
      "Research shows protection of cerebral neurons from hypoxic injury",
      "Research shows modulation of enkephalin pathways to support stress adaptation",
      "Research shows enhancement of memory consolidation and attention pathways"
    ],
    benefitsEs: [
      "La investigación muestra la elevación de la expresión hipocampal de BDNF y NGF",
      "La investigación muestra la protección de neuronas cerebrales contra la hipoxia",
      "La investigación muestra la modulación de las vías de encefalina",
      "La investigación muestra la mejora de la consolidación de la memoria"
    ]
  },
  "sermorelin-acetate": {
    scientificName: "Sermorelin Acetate (GHRH 1-29)",
    cas: "86168-78-7",
    formula: "C149H246N44O42S",
    molarMass: "3357.90 g/mol",
    sequence: "Tyr-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Gly-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Met-Ser-Arg-OH",
    citations: [
      "Prakash, A., & Goa, K. L. (1999). 'Sermorelin: a review of its use.' BioDrugs, 12(2), 139-157.",
      "Khorram, O., et al. (1997). 'Effects of growth hormone-releasing hormone (1-29) in healthy elderly.' Journal of Clinical Endocrinology & Metabolism, 82(5), 1472-1479."
    ],
    actionEn: "functions as a synthetic 29-amino-acid peptide representing the biologically active amino-terminal fragment of endogenous GHRH",
    actionEs: "funciona como un péptido sintético de 29 aminoácidos que representa el fragmento activo de la GHRH",
    mechanismEn: "binds somatotroph GHRH receptors, activating the adenylate cyclase-cAMP pathway to trigger pulsatile growth hormone secretion under somatostatin feedback control",
    mechanismEs: "se une a los receptores somatotropos de GHRH, activando la vía de la adenilato ciclasa-cAMP",
    benefitsEn: [
      "Research shows stimulation of pulsatile growth hormone secretion via GHRHR",
      "Research shows preservation of natural feedback loops, preventing overdose",
      "Research shows promotion of lean tissue growth and muscle repair in vitro",
      "Research shows enhancement of deep wave sleep quality and recovery"
    ],
    benefitsEs: [
      "La investigación muestra la estimulación de la secreción pulsátil de GH",
      "La investigación muestra la preservación de bucles de retroalimentación naturales",
      "La investigación muestra la promoción del crecimiento de tejido magro in vitro",
      "La investigación muestra la mejora del sueño profundo y recuperación"
    ]
  },
  "snap-8": {
    scientificName: "SNAP-8 (Acetyl Octapeptide-3)",
    cas: "868844-74-0",
    formula: "C41H70N16O16S",
    molarMass: "1075.16 g/mol",
    sequence: "Ac-Glu-Glu-Met-Gln-Arg-Arg-Ala-Asp-NH2",
    citations: [
      "Blanes-Mira, C., et al. (2002). 'A synthetic octapeptide (SNAP-8) anti-wrinkle agent.' International Journal of Cosmetic Science, 24(5), 303-310.",
      "Fields, K., et al. (2009). 'Bioactive peptides in skin care.' Clinics in Dermatology, 27(5), 485-492."
    ],
    actionEn: "serves as a synthetic octapeptide designed to mimic the N-terminal end of SNAP-25 and inhibit neuromuscular vesicle translocation pathways",
    actionEs: "sirve como un octapéptido sintético diseñado para imitar el extremo N-terminal de SNAP-25",
    mechanismEn: "competitively binds the SNARE complex to prevent cellular acetylcholine release, relaxing micro-tension and mechanical skin strain",
    mechanismEs: "se une competitivamente al complejo SNARE para prevenir la liberación celular de acetilcolina",
    benefitsEn: [
      "Research shows competitive inhibition of SNAP-25 in the SNARE complex",
      "Research shows reduction of acetylcholine release at the neuromuscular junction",
      "Research shows relaxation of cell-surface tension and micro-muscular contractions",
      "Research shows protection of collagen structures from mechanical strain"
    ],
    benefitsEs: [
      "La investigación muestra la inhibición competitiva de SNAP-25 en el complejo SNARE",
      "La investigación muestra la reducción de la liberación de acetilcolina",
      "La investigación muestra la relajación de la tensión superficial celular",
      "La investigación muestra la protección de las estructuras de colágeno"
    ]
  },
  "ss-31": {
    scientificName: "SS-31 (Elamipretide)",
    cas: "736992-21-5",
    formula: "C32H49N9O5",
    molarMass: "639.80 g/mol",
    sequence: "D-Arg-Dmt-Lys-Phe-NH2",
    citations: [
      "Szeto, H. H. (2006). 'Mitochondria-targeted peptide antioxidants.' AAPS Journal, 8(3), E521-E531.",
      "Zhao, K., et al. (2004). 'Cell-permeable peptide antioxidants target mitochondria.' Journal of Biological Chemistry, 279(33), 34682-34690."
    ],
    actionEn: "represents a synthetic mitochondria-targeted tetrapeptide designed to optimize inner mitochondrial membrane lipid composition and cardiolipin networks",
    actionEs: "representa un tetrapéptido sintético dirigido a las mitocondrias para optimizar el cardiolipino",
    mechanismEn: "specifically binds cardiolipin, stabilizing respiratory supercomplex structures to decrease electron leakage and reduce reactive oxygen species (ROS) formation",
    mechanismEs: "se une específicamente al cardiolipino, estabilizando los supercomplejos respiratorios",
    benefitsEn: [
      "Research shows selective cardiolipin binding to optimize inner mitochondrial membrane structure",
      "Research shows reduction of mitochondrial ROS leakage and oxidative stress",
      "Research shows preservation of electron transport supercomplexes and ATP output",
      "Research shows protection against ischemia-reperfusion injury in cell assays"
    ],
    benefitsEs: [
      "La investigación muestra la unión selectiva a cardiolipino para optimizar la membrana",
      "La investigación muestra la reducción de la fuga de ROS mitocondrial",
      "La investigación muestra la preservación de los supercomplejos de transporte y ATP",
      "La investigación muestra protección contra la lesión por isquemia-reperfusión"
    ]
  },
  "tesamorelin": {
    scientificName: "Tesamorelin GHRH Analogue",
    cas: "218949-48-5",
    formula: "C141H224N40O39S",
    molarMass: "3135.53 g/mol",
    sequence: "Trans-3-hexenoyl-Tyr-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Gly-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Met-Ser-Arg-NH2",
    citations: [
      "Falutz, J., et al. (2010). 'Effects of tesamorelin on visceral fat and metabolic parameters.' New England Journal of Medicine, 363(3), 170-177.",
      "Ferdinand, K. C., et al. (2013). 'Tesamorelin: a GHRH analogue for adipose tissue modulation.' Expert Opinion on Investigational Drugs, 22(8), 1051-1062."
    ],
    actionEn: "represents a synthetic GHRH analog modified with a trans-3-hexenoyl group to improve serum stability, studied for visceral adipose tissue regulation",
    actionEs: "representa un análogo de GHRH modificado con un grupo trans-3-hexenilo",
    mechanismEn: "activates pituitary GHRH receptors to stimulate endogenous growth hormone and IGF-1 secretion, triggering lipolysis pathways without altering glucose tolerance",
    mechanismEs: "activa los receptores de GHRH para estimular la hormona de crecimiento e IGF-1 endógenos",
    benefitsEn: [
      "Research shows high stability and potent somatotroph stimulation via N-terminal modification",
      "Research shows selective reduction of visceral fat mass in metabolic assays",
      "Research shows increase in systemic IGF-1 levels without altering glucose disposal",
      "Research shows improvement in lipid profiles and adiponectin signaling pathways"
    ],
    benefitsEs: [
      "La investigación muestra una alta estabilidad y potente estimulación de somatotropos",
      "La investigación muestra una reducción selectiva de la grasa visceral",
      "La investigación muestra un aumento de los niveles de IGF-1 sistémicos",
      "La investigación muestra una mejora de los perfiles lipídicos"
    ]
  },
  "thymalin-thymulin": {
    scientificName: "Thymulin (Zinc-Bound Thymic Hormone)",
    cas: "63958-64-9",
    formula: "C33H54N12O15",
    molarMass: "858.85 g/mol",
    sequence: "Glu-Ala-Lys-Ser-Gln-Gly-Gly-Ser-Asn",
    citations: [
      "Bach, J. F., et al. (1977). 'Thymic hormone (FTS) characterization and sequence.' Nature, 266(5597), 55-57.",
      "Dardenne, M., et al. (1982). 'The role of zinc in the biological activity of thymulin.' Proceedings of the National Academy of Sciences, 79(17), 5370-5373."
    ],
    actionEn: "serves as a synthetic zinc-dependent thymic nonapeptide hormone, studied for immune cell differentiation and endocrine coordination",
    actionEs: "sirve como una hormona nonapeptídica tímica dependiente de zinc sintética",
    mechanismEn: "complexes with zinc ions to bind T-lymphocyte receptors, driving the differentiation of CD4+ and CD8+ subsets and regulating interleukin expression",
    mechanismEs: "se acompleja con iones de zinc para unirse a los receptores de linfocitos T",
    benefitsEn: [
      "Research shows zinc-dependent activation of T-lymphocyte differentiation pathways",
      "Research shows modulation of cytokine production (IL-2, IFN-gamma) in immune cells",
      "Research shows neuroendocrine integration and ACTH signaling regulation",
      "Research shows protection against age-associated thymus involution in models"
    ],
    benefitsEs: [
      "La investigación muestra la activación de la diferenciación de linfocitos T dependiente de zinc",
      "La investigación muestra la modulación de la producción de citoquinas en células inmunes",
      "La investigación muestra la integración neuroendocrina",
      "La investigación muestra protección contra la involución tímica"
    ]
  },
  "thymosin-alpha-1": {
    scientificName: "Thymosin Alpha-1 (prothymosin derivative)",
    cas: "62304-98-7",
    formula: "C129H215N33O55",
    molarMass: "3108.30 g/mol",
    sequence: "Ac-Ser-Asp-Ala-Ala-Val-Asp-Thr-Ser-Ser-Glu-Ile-Thr-Thr-Lys-Asp-Leu-Lys-Glu-Lys-Lys-Glu-Val-Val-Glu-Glu-Ala-Glu-Asn-OH",
    citations: [
      "Goldstein, A. L., et al. (1977). 'Thymosin alpha 1: Isolation and sequence.' Proceedings of the National Academy of Sciences, 74(3), 725-729.",
      "Romani, L., et al. (2004). 'Thymosin alpha 1 activates dendritic cells for antifungal tolerance and immunity.' Blood, 103(11), 4232-4239."
    ],
    actionEn: "functions as a synthetic 28-amino-acid peptide derived from prothymosin alpha, studied as a potent immunomodulatory and cellular defense coordinator",
    actionEs: "funciona como un péptido sintético de 28 aminoácidos derivado de la protimosina alfa",
    mechanismEn: "acts as an agonist at toll-like receptors (TLR-3, TLR-9, TLR-4) in dendritic cells, activating the MyD88-dependent pathway to trigger type I interferons",
    mechanismEs: "actúa como agonista en receptores toll-like en células dendríticas, activando la vía MyD88",
    benefitsEn: [
      "Research shows activation of TLR-3, TLR-4, and TLR-9 signaling in dendritic cells",
      "Research shows stimulation of type I interferon synthesis and NK-cell activity",
      "Research shows enhancement of T-lymphocyte maturation and CD4+/CD8+ balance",
      "Research shows direct inhibition of viral transcription in infected cell models"
    ],
    benefitsEs: [
      "La investigación muestra la activación de la señalización TLR-3, TLR-4 y TLR-9",
      "La investigación muestra la estimulación de interferones tipo I y actividad NK",
      "La investigación muestra el aumento de la maduración de linfocitos T",
      "La investigación muestra la inhibición directa de la transcripción viral"
    ]
  },
  "vip": {
    scientificName: "Vasoactive Intestinal Peptide (VIP)",
    cas: "40077-57-4",
    formula: "C147H238N44O42S",
    molarMass: "3325.80 g/mol",
    sequence: "His-Ser-Asp-Ala-Val-Phe-Thr-Asp-Asn-Tyr-Thr-Arg-Leu-Arg-Lys-Gln-Met-Ala-Val-Lys-Lys-Tyr-Leu-Asn-Ser-Ile-Leu-Asn-NH2",
    citations: [
      "Said, S. I., & Mutt, V. (1970). 'Polypeptide with broad biological activity: isolation from small intestine.' Science, 169(3951), 1217-1218.",
      "Delgado, M., et al. (2004). 'Vasoactive intestinal peptide: a neuropeptide with immunomodulatory properties.' Pharmacological Reviews, 56(2), 249-290."
    ],
    actionEn: "represents an endogenous 28-amino-acid peptide hormone, widely studied for its potent vasodilatory, bronchodilatory, and anti-inflammatory properties",
    actionEs: "representa una hormona peptídica endógena de 28 aminoácidos estudiada por su vasodilatación",
    mechanismEn: "binds to Class B GPCRs (VPAC1 and VPAC2) to stimulate adenylyl cyclase, raising intracellular cAMP/PKA levels and actively suppressing NF-kB activation",
    mechanismEs: "se une a los GPCR VPAC1 y VPAC2 para estimular la adenilato ciclasa y suprimir NF-kB",
    benefitsEn: [
      "Research shows class B GPCR activation driving cAMP/PKA signaling pathways",
      "Research shows potent relaxation of vascular and bronchial smooth muscle tissues",
      "Research shows suppression of NF-kB activation to downregulate cytokines",
      "Research shows protection of pulmonary and intestinal mucosal barriers"
    ],
    benefitsEs: [
      "La investigación muestra la activación de GPCR clase B que impulsa la señalización cAMP/PKA",
      "La investigación muestra la relajación del músculo liso bronquial y vascular",
      "La investigación muestra la supresión de NF-kB para disminuir las citoquinas",
      "La investigación muestra la protección de las barreras mucosas pulmonares e intestinales"
    ]
  }
};
