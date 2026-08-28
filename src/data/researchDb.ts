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
  },
  "5-amino-1mq-spray": {
    en: {
      abstract: "5-Amino-1MQ is a cell-permeable, positively charged quinolinium small molecule identified during structure-activity screening for inhibitors of nicotinamide N-methyltransferase (NNMT), a cytosolic SAM-dependent methyltransferase (UniProt P40261) that terminates nicotinamide salvage by converting it to 1-methylnicotinamide. Interest in the target followed Kraus et al. (2014), who showed that adipose NNMT knockdown protects mice against diet-induced obesity by shifting S-adenosylmethionine and NAD+ availability. Neelakantan et al. (2018) subsequently reported that 5-Amino-1MQ is membrane-permeable and selective, suppressing adipose NNMT activity and reducing fat mass in high-fat-diet C57BL/6 mice without altering lean mass or food intake. A 2019 follow-up found that NNMT inhibition reactivated senescent Pax7+ satellite cells and improved regenerative capacity in aged skeletal muscle. In spray format the compound arrives pre-dissolved, which removes the solvation variability of hygroscopic quinolinium salts. Research Use Only (RUO).",
      mechanism: "5-Amino-1MQ acts as a substrate-competitive inhibitor at the nicotinamide-binding pocket of NNMT (EC 2.1.1.1), the enzyme that transfers a methyl group from S-adenosyl-L-methionine (SAM) to nicotinamide, yielding 1-methylnicotinamide (1-MNA) and S-adenosylhomocysteine (SAH). Blocking that transfer has two coupled consequences. First, free nicotinamide is spared for the salvage pathway, where NAMPT converts it to nicotinamide mononucleotide and NMNAT1/2/3 completes NAD+ resynthesis (KEGG map00760), raising the NAD+/NADH ratio. Second, the SAM/SAH methylation ratio shifts, altering the cellular methyl-donor pool. Elevated NAD+ increases flux through the sirtuin deacetylases SIRT1 and SIRT3 and through the LKB1/AMPK axis, with PGC-1α deacetylation as a common readout in mitochondrial biogenesis studies. This is enzyme-level inhibition, not receptor agonism: unlike NAD+ or NMN, which are supplied as precursors, 5-Amino-1MQ raises NAD+ indirectly by closing the methylation exit route.",
      benefits: [
        "**Adipocyte Metabolism:** Research shows suppression of NNMT enzymatic activity in 3T3-L1 adipocyte differentiation assays, with intracellular 1-methylnicotinamide measured by LC-MS/MS as the primary pharmacodynamic readout.",
        "**NAD+ Salvage Flux:** Research shows elevation of intracellular NAD+ pools and the NAD+/NADH ratio in cultured cells, quantified by enzymatic cycling assay, serving as a pharmacological counterpart to NNMT siRNA knockdown.",
        "**Muscle Stem Cell Senescence:** Laboratory investigations report reactivation of senescent Pax7+ satellite cells and improved regenerative capacity in aged murine skeletal muscle following NNMT inhibition (Neelakantan et al., 2019).",
        "**Sirtuin and AMPK Signaling:** Research shows downstream modulation of SIRT1-dependent PGC-1α deacetylation and AMPK phosphorylation status, assessed by Western blot in hepatocyte and myotube models.",
        "**Methyl-Donor Pool Studies:** Research shows shifts in the cellular SAM/SAH ratio, allowing methylation-capacity questions to be separated from NAD+ questions within the same experimental system."
      ],
      citations: [
        "Neelakantan, H., Vance, V., Wetzel, M. D., et al. (2018). 'Selective and membrane-permeable small molecule inhibitors of nicotinamide N-methyltransferase reverse high fat diet-induced obesity in mice.' Biochemical Pharmacology, 147, 141-152. DOI: 10.1016/j.bcp.2017.11.007 | PMID: 29155147",
        "Neelakantan, H., Brightwell, C. R., Graber, T. G., et al. (2019). 'Small molecule nicotinamide N-methyltransferase inhibitor activates senescent muscle stem cells and improves regenerative capacity of aged skeletal muscle.' Biochemical Pharmacology, 163, 481-492. DOI: 10.1016/j.bcp.2019.02.008 | PMID: 30753815",
        "Kraus, D., Yang, Q., Kong, D., et al. (2014). 'Nicotinamide N-methyltransferase knockdown protects against diet-induced obesity.' Nature, 508(7495), 258-262. DOI: 10.1038/nature13198 | PMID: 24717514"
      ],
      formula: "C10H11N2+ (cation) / C10H11IN2 (iodide salt) — verify salt form with manufacturer COA",
      molarMass: "159.21 g/mol (free cation); 286.11 g/mol as iodide salt — verify with COA",
      sequence: "Small Molecule — quinolinium (5-amino-1-methylquinolinium); no amino acid sequence",
      retentionTime: 4.18
    },
    es: {
      abstract: "5-Amino-1MQ es una molécula pequeña de quinolinio con carga positiva y permeable a la membrana, identificada en estudios de relación estructura-actividad de inhibidores de la nicotinamida N-metiltransferasa (NNMT), una metiltransferasa citosólica dependiente de SAM (UniProt P40261) que termina el rescate de nicotinamida convirtiéndola en 1-metilnicotinamida. El interés por esta diana surgió tras Kraus et al. (2014), quienes demostraron que el silenciamiento de NNMT en tejido adiposo protege a ratones frente a la obesidad inducida por dieta al modificar la disponibilidad de S-adenosilmetionina y NAD+. Neelakantan et al. (2018) reportaron después que 5-Amino-1MQ es permeable y selectivo, suprimiendo la actividad de NNMT adiposa y reduciendo la masa grasa en ratones C57BL/6 con dieta alta en grasa, sin alterar la masa magra ni la ingesta. Un seguimiento de 2019 encontró la reactivación de células satélite senescentes en músculo envejecido. En formato spray el compuesto llega predisuelto, lo que elimina la variabilidad de solvatación de las sales de quinolinio higroscópicas. Uso Exclusivo de Investigación (RUO).",
      mechanism: "5-Amino-1MQ actúa como inhibidor competitivo con el sustrato en el bolsillo de unión a nicotinamida de la NNMT (EC 2.1.1.1), la enzima que transfiere un grupo metilo desde S-adenosil-L-metionina (SAM) a la nicotinamida, generando 1-metilnicotinamida (1-MNA) y S-adenosilhomocisteína (SAH). Bloquear esa transferencia tiene dos consecuencias acopladas. Primero, la nicotinamida libre queda disponible para la vía de rescate, donde NAMPT la convierte en mononucleótido de nicotinamida y NMNAT1/2/3 completa la resíntesis de NAD+ (KEGG map00760), elevando la relación NAD+/NADH. Segundo, cambia la relación SAM/SAH, alterando el fondo celular de donadores de metilo. El aumento de NAD+ incrementa el flujo por las desacetilasas SIRT1 y SIRT3 y por el eje LKB1/AMPK, con la desacetilación de PGC-1α como lectura habitual en estudios de biogénesis mitocondrial. Se trata de inhibición enzimática, no de agonismo de receptor: a diferencia de NAD+ o NMN, que se aportan como precursores, 5-Amino-1MQ eleva el NAD+ de forma indirecta al cerrar la ruta de salida por metilación.",
      benefits: [
        "**Metabolismo del adipocito:** La investigación muestra la supresión de la actividad enzimática de NNMT en ensayos de diferenciación de adipocitos 3T3-L1, con la 1-metilnicotinamida intracelular medida por LC-MS/MS como lectura farmacodinámica principal.",
        "**Flujo de rescate de NAD+:** La investigación muestra la elevación de los niveles intracelulares de NAD+ y de la relación NAD+/NADH en cultivo celular, cuantificada por ensayo de ciclado enzimático, como contraparte farmacológica del silenciamiento de NNMT con siRNA.",
        "**Senescencia de células madre musculares:** Las investigaciones de laboratorio reportan la reactivación de células satélite Pax7+ senescentes y una mejor capacidad regenerativa en músculo esquelético murino envejecido tras la inhibición de NNMT (Neelakantan et al., 2019).",
        "**Señalización de sirtuinas y AMPK:** La investigación muestra la modulación secundaria de la desacetilación de PGC-1α dependiente de SIRT1 y del estado de fosforilación de AMPK, evaluada por Western blot en modelos de hepatocitos y miotubos.",
        "**Estudios del fondo de donadores de metilo:** La investigación muestra cambios en la relación celular SAM/SAH, lo que permite separar las preguntas sobre capacidad de metilación de las preguntas sobre NAD+ dentro del mismo sistema experimental."
      ],
      citations: [
        "Neelakantan, H., Vance, V., Wetzel, M. D., et al. (2018). 'Selective and membrane-permeable small molecule inhibitors of nicotinamide N-methyltransferase reverse high fat diet-induced obesity in mice.' Biochemical Pharmacology, 147, 141-152. DOI: 10.1016/j.bcp.2017.11.007 | PMID: 29155147",
        "Neelakantan, H., Brightwell, C. R., Graber, T. G., et al. (2019). 'Small molecule nicotinamide N-methyltransferase inhibitor activates senescent muscle stem cells and improves regenerative capacity of aged skeletal muscle.' Biochemical Pharmacology, 163, 481-492. DOI: 10.1016/j.bcp.2019.02.008 | PMID: 30753815",
        "Kraus, D., Yang, Q., Kong, D., et al. (2014). 'Nicotinamide N-methyltransferase knockdown protects against diet-induced obesity.' Nature, 508(7495), 258-262. DOI: 10.1038/nature13198 | PMID: 24717514"
      ],
      formula: "C10H11N2+ (cation) / C10H11IN2 (iodide salt) — verify salt form with manufacturer COA",
      molarMass: "159.21 g/mol (free cation); 286.11 g/mol as iodide salt — verify with COA",
      sequence: "Small Molecule — quinolinium (5-amino-1-methylquinolinium); no amino acid sequence",
      retentionTime: 4.18
    }
  },
  "tirzepatide-spray": {
    en: {
      abstract: "Tirzepatide is a synthetic 39-residue peptide engineered at Eli Lilly as a unimolecular dual agonist of the glucose-dependent insulinotropic polypeptide receptor (GIPR, UniProt Q99835) and the glucagon-like peptide-1 receptor (GLP-1R, UniProt P43220), first described by Coskun et al. (2018) under the code LY3298176. Its backbone is built on a GIP scaffold rather than a GLP-1 scaffold, with two α-aminoisobutyric acid (Aib) substitutions at positions 2 and 13 conferring resistance to dipeptidyl peptidase-4 (DPP-4) cleavage. A γ-glutamate-linked C20 fatty diacid conjugated at Lys20 drives reversible albumin binding. Willard et al. (2020) established the finding that most distinguishes the molecule: Tirzepatide is imbalanced and biased, behaving as a full agonist at GIPR but only a partial agonist at GLP-1R, with signaling skewed toward cAMP over β-arrestin recruitment. Supplied here pre-dissolved, removing the redissolution variance of a lipidated lyophilized cake. Research Use Only (RUO).",
      mechanism: "Tirzepatide engages two class B1 G protein-coupled receptors simultaneously. Both GIPR and GLP-1R couple through Gαs to adenylyl cyclase, elevating intracellular cAMP and activating protein kinase A (PKA) and Epac2, which in beta-cell models converges on glucose-dependent insulin exocytosis (KEGG hsa04911). The distinguishing pharmacology is not dual engagement alone but its asymmetry. Research shows Tirzepatide reaches full efficacy at GIPR while acting as a partial agonist at GLP-1R, and at GLP-1R it recruits β-arrestin-1 and -2 far more weakly than cAMP potency would predict. That bias reduces GRK-mediated receptor phosphorylation and clathrin-dependent internalization, so GLP-1R desensitizes more slowly than under a balanced agonist such as Semaglutide. The Lys20 γGlu-2×AEEA-eicosanedioic acid arm contributes no receptor contact; it binds serum albumin, extending circulating residence. Unlike Semaglutide, which is GLP-1R-selective, and unlike Retatrutide, which adds glucagon receptor agonism, Tirzepatide's profile is defined by GIPR-dominant, arrestin-sparing signaling.",
      benefits: [
        "**Dual Incretin Receptor Pharmacology:** Research shows concurrent activation of GIPR and GLP-1R in HEK293 lines stably expressing each human receptor, with cAMP accumulation measured by HTRF or GloSensor to resolve separate concentration-response curves per receptor.",
        "**Biased Agonism Profiling:** Willard et al. (2020) report markedly weaker β-arrestin-1/2 recruitment relative to cAMP potency at GLP-1R, quantified in BRET and enzyme-fragment-complementation assays, making Tirzepatide a reference tool for signaling-bias studies.",
        "**Receptor Internalization Kinetics:** Laboratory investigations use Tirzepatide to test whether arrestin-sparing signaling slows clathrin-mediated GLP-1R endocytosis, assessed by surface-receptor ELISA and confocal colocalization time courses.",
        "**Glucose-Stimulated Insulin Secretion:** Research shows modulation of insulin release in isolated murine and human islets under static incubation and perifusion, comparing 2.8 mM against 16.7 mM glucose to confirm glucose dependence of the response.",
        "**DPP-4 Resistance and Albumin Binding:** Studies indicate the Aib2/Aib13 substitutions block DPP-4 cleavage while the C20 diacid arm confers reversible albumin affinity, both measurable in vitro by DPP-4 enzymatic assay and surface plasmon resonance."
      ],
      citations: [
        "Coskun, T., Sloop, K. W., Loghin, C., et al. (2018). 'LY3298176, a novel dual GIP and GLP-1 receptor agonist for the treatment of type 2 diabetes mellitus: From discovery to clinical proof of concept.' Molecular Metabolism, 18, 3-14. DOI: 10.1016/j.molmet.2018.09.009 | PMID: 30473097",
        "Willard, F. S., Douros, J. D., Gabe, M. B., et al. (2020). 'Tirzepatide is an imbalanced and biased dual GIP and GLP-1 receptor agonist.' JCI Insight, 5(17), e140532. DOI: 10.1172/jci.insight.140532 | PMID: 32730231",
        "Frias, J. P., Davies, M. J., Rosenstock, J., et al. (2021). 'Tirzepatide versus Semaglutide Once Weekly in Patients with Type 2 Diabetes.' New England Journal of Medicine, 385(6), 503-515. DOI: 10.1056/NEJMoa2107519 | PMID: 34170647"
      ],
      formula: "C225H348N48O68",
      molarMass: "4813.45 g/mol (PubChem CID 166567236 lists 4813 g/mol) — confirm salt/acetate content with manufacturer COA",
      sequence: "Tyr-Aib-Glu-Gly-Thr-Phe-Thr-Ser-Asp-Tyr-Ser-Ile-Aib-Leu-Asp-Lys-Ile-Ala-Gln-Lys(γGlu-2×AEEA-C20 diacid)-Ala-Phe-Val-Gln-Trp-Leu-Ile-Ala-Gly-Gly-Pro-Ser-Ser-Gly-Ala-Pro-Pro-Pro-Ser-NH2 (39 residues, C-terminal amide)",
      retentionTime: 12.4
    },
    es: {
      abstract: "La tirzepatida es un péptido sintético de 39 residuos diseñado en Eli Lilly como agonista dual unimolecular del receptor del polipéptido insulinotrópico dependiente de glucosa (GIPR, UniProt Q99835) y del receptor del péptido similar al glucagón-1 (GLP-1R, UniProt P43220), descrito por primera vez por Coskun et al. (2018) bajo el código LY3298176. Su esqueleto se construye sobre un armazón de GIP y no de GLP-1, con dos sustituciones de ácido alfa-aminoisobutírico (Aib) en las posiciones 2 y 13 que confieren resistencia a la escisión por dipeptidil peptidasa-4 (DPP-4). Un diácido graso C20 unido por γ-glutamato en Lys20 impulsa la unión reversible a albúmina. Willard et al. (2020) establecieron el hallazgo que más distingue a la molécula: la tirzepatida es desequilibrada y sesgada, actuando como agonista completo en GIPR pero solo parcial en GLP-1R, con señalización inclinada hacia cAMP frente al reclutamiento de β-arrestina. Se suministra predisuelta, lo que elimina la variabilidad de redisolución de un liofilizado lipidado. Uso Exclusivo de Investigación (RUO).",
      mechanism: "La tirzepatida activa dos receptores acoplados a proteínas G de clase B1 de forma simultánea. Tanto GIPR como GLP-1R se acoplan vía Gαs a la adenilato ciclasa, elevando el cAMP intracelular y activando la proteína quinasa A (PKA) y Epac2, lo que en modelos de célula beta converge en la exocitosis de insulina dependiente de glucosa (KEGG hsa04911). La farmacología distintiva no es el compromiso dual por sí solo, sino su asimetría. La investigación muestra que la tirzepatida alcanza eficacia completa en GIPR mientras actúa como agonista parcial en GLP-1R, y que en GLP-1R recluta β-arrestina-1 y -2 mucho más débilmente de lo que su potencia sobre cAMP predeciría. Ese sesgo reduce la fosforilación del receptor mediada por GRK y la internalización dependiente de clatrina, de modo que GLP-1R se desensibiliza más lentamente que bajo un agonista balanceado como la semaglutida. El brazo γGlu-2×AEEA-ácido eicosanodioico en Lys20 no aporta contacto con el receptor: se une a la albúmina sérica y prolonga la residencia circulante. A diferencia de la semaglutida, selectiva de GLP-1R, y de la retatrutida, que suma agonismo del receptor de glucagón, el perfil de la tirzepatida se define por una señalización dominada por GIPR y ahorradora de arrestina.",
      benefits: [
        "**Farmacología dual de receptores de incretinas:** La investigación muestra la activación concurrente de GIPR y GLP-1R en líneas HEK293 que expresan de forma estable cada receptor humano, con acumulación de cAMP medida por HTRF o GloSensor para resolver curvas concentración-respuesta separadas por receptor.",
        "**Perfilado de agonismo sesgado:** Willard et al. (2020) reportan un reclutamiento de β-arrestina-1/2 notablemente más débil respecto a la potencia sobre cAMP en GLP-1R, cuantificado en ensayos BRET y de complementación de fragmentos enzimáticos, lo que convierte a la tirzepatida en compuesto de referencia para estudios de sesgo de señalización.",
        "**Cinética de internalización del receptor:** Las investigaciones de laboratorio emplean la tirzepatida para comprobar si la señalización ahorradora de arrestina ralentiza la endocitosis de GLP-1R mediada por clatrina, evaluada por ELISA de receptor en superficie y cursos temporales de colocalización confocal.",
        "**Secreción de insulina estimulada por glucosa:** La investigación muestra la modulación de la liberación de insulina en islotes murinos y humanos aislados, en incubación estática y perifusión, comparando 2.8 mM frente a 16.7 mM de glucosa para confirmar la dependencia de glucosa de la respuesta.",
        "**Resistencia a DPP-4 y unión a albúmina:** Los estudios indican que las sustituciones Aib2/Aib13 bloquean la escisión por DPP-4 mientras que el brazo de diácido C20 confiere afinidad reversible por la albúmina, ambos medibles in vitro por ensayo enzimático de DPP-4 y resonancia de plasmón superficial."
      ],
      citations: [
        "Coskun, T., Sloop, K. W., Loghin, C., et al. (2018). 'LY3298176, a novel dual GIP and GLP-1 receptor agonist for the treatment of type 2 diabetes mellitus: From discovery to clinical proof of concept.' Molecular Metabolism, 18, 3-14. DOI: 10.1016/j.molmet.2018.09.009 | PMID: 30473097",
        "Willard, F. S., Douros, J. D., Gabe, M. B., et al. (2020). 'Tirzepatide is an imbalanced and biased dual GIP and GLP-1 receptor agonist.' JCI Insight, 5(17), e140532. DOI: 10.1172/jci.insight.140532 | PMID: 32730231",
        "Frias, J. P., Davies, M. J., Rosenstock, J., et al. (2021). 'Tirzepatide versus Semaglutide Once Weekly in Patients with Type 2 Diabetes.' New England Journal of Medicine, 385(6), 503-515. DOI: 10.1056/NEJMoa2107519 | PMID: 34170647"
      ],
      formula: "C225H348N48O68",
      molarMass: "4813.45 g/mol (PubChem CID 166567236 lists 4813 g/mol) — confirm salt/acetate content with manufacturer COA",
      sequence: "Tyr-Aib-Glu-Gly-Thr-Phe-Thr-Ser-Asp-Tyr-Ser-Ile-Aib-Leu-Asp-Lys-Ile-Ala-Gln-Lys(γGlu-2×AEEA-C20 diacid)-Ala-Phe-Val-Gln-Trp-Leu-Ile-Ala-Gly-Gly-Pro-Ser-Ser-Gly-Ala-Pro-Pro-Pro-Ser-NH2 (39 residuos, amida C-terminal)",
      retentionTime: 12.4
    }
  },
  "semaglutide-spray": {
    en: {
      abstract: "Semaglutide is a synthetic 31-residue analogue of human GLP-1(7-37) developed at Novo Nordisk and first described by Lau et al. (2015), sharing 94% sequence identity with the native incretin. It acts as a selective agonist at the glucagon-like peptide-1 receptor (GLP-1R, UniProt P43220) and engages no other incretin receptor. Three deliberate modifications define it: an α-aminoisobutyric acid (Aib) substitution at position 8 that blocks dipeptidyl peptidase-4 cleavage, a Lys34→Arg swap that confines acylation to a single site, and a γGlu-2×AEEA-linked C18 octadecanedioic diacid at Lys26 that drives high-affinity albumin binding. That C18 diacid is the key departure from Liraglutide's C16 monoacid and extends circulating half-life to roughly 165 hours. Gabery et al. (2020) later mapped GLP-1R engagement across circumventricular organs. Research Use Only (RUO).",
      mechanism: "Semaglutide binds the GLP-1 receptor, a class B1 G protein-coupled receptor, through the two-domain mechanism typical of the secretin family: the peptide C-terminus docks the large extracellular domain while the N-terminal His-Aib segment inserts into the transmembrane core to trigger activation. Receptor activation couples through Gαs to adenylyl cyclase, elevating cAMP and engaging both PKA and Epac2. In beta-cell models that cascade closes ATP-sensitive potassium channels, depolarizes the membrane, opens voltage-gated Ca²⁺ channels, and drives glucose-dependent insulin granule exocytosis (KEGG hsa04911). What distinguishes Semaglutide pharmacologically is selectivity and balance. Research shows it is a full, balanced GLP-1R agonist that recruits β-arrestin robustly alongside cAMP — unlike Tirzepatide, which adds GIPR agonism and is biased away from β-arrestin, and unlike Retatrutide, which further recruits the glucagon receptor. The Lys26 lipid arm contributes no receptor contact; it binds serum albumin.",
      benefits: [
        "**GLP-1 Receptor Pharmacology:** Research shows full, balanced agonism at human GLP-1R in HEK293 lines stably expressing the receptor, with cAMP accumulation quantified by HTRF or GloSensor to generate reference concentration-response curves.",
        "**Balanced-Agonist Reference Standard:** Laboratory investigations use Semaglutide as the unbiased comparator against which biased ligands such as Tirzepatide are scored in parallel β-arrestin BRET and cAMP assays.",
        "**Glucose-Stimulated Insulin Secretion:** Studies indicate modulation of insulin release in isolated murine and human islets under static incubation and perifusion, comparing 2.8 mM against 16.7 mM glucose to confirm glucose dependence.",
        "**Central Circuit Mapping:** Gabery et al. (2020) report GLP-1R engagement in circumventricular organs including the area postrema and subfornical organ, traced by c-Fos activation mapping across hindbrain and hypothalamic networks.",
        "**DPP-4 Resistance and Albumin Affinity:** Research shows the Aib8 substitution blocks DPP-4 cleavage while the C18 diacid confers reversible albumin binding, both measurable by DPP-4 enzymatic assay and surface plasmon resonance."
      ],
      citations: [
        "Lau, J., Bloch, P., Schäffer, L., Pettersson, I., et al. (2015). 'Discovery of the Once-Weekly Glucagon-Like Peptide-1 (GLP-1) Analogue Semaglutide.' Journal of Medicinal Chemistry, 58(18), 7370-7380. DOI: 10.1021/acs.jmedchem.5b00726 | PMID: 26308095",
        "Knudsen, L. B., & Lau, J. (2019). 'The Discovery and Development of Liraglutide and Semaglutide.' Frontiers in Endocrinology, 10, 155. DOI: 10.3389/fendo.2019.00155 | PMID: 31031702",
        "Gabery, S., Salinas, C. G., Paulsen, S. J., et al. (2020). 'Semaglutide lowers body weight in rodents via distributed neural pathways.' JCI Insight, 5(6), e133429. DOI: 10.1172/jci.insight.133429 | PMID: 32213703"
      ],
      formula: "C187H291N45O59",
      molarMass: "4113.58 g/mol (PubChem CID 56843331 lists 4114) — confirm salt/acetate content with manufacturer COA",
      sequence: "His-Aib-Glu-Gly-Thr-Phe-Thr-Ser-Asp-Val-Ser-Ser-Tyr-Leu-Glu-Gly-Gln-Ala-Ala-Lys(γGlu-2×AEEA-C18 diacid)-Glu-Phe-Ile-Ala-Trp-Leu-Val-Arg-Gly-Arg-Gly-OH (31 residues; Aib8, Lys26 acylation and Arg34 in GLP-1(7-37) numbering)",
      retentionTime: 11.8
    },
    es: {
      abstract: "La semaglutida es un análogo sintético de 31 residuos del GLP-1(7-37) humano desarrollado en Novo Nordisk y descrito por primera vez por Lau et al. (2015), con un 94% de identidad de secuencia respecto a la incretina nativa. Actúa como agonista selectivo del receptor del péptido similar al glucagón-1 (GLP-1R, UniProt P43220) y no activa ningún otro receptor de incretinas. Tres modificaciones deliberadas la definen: una sustitución de ácido α-aminoisobutírico (Aib) en la posición 8 que bloquea la escisión por dipeptidil peptidasa-4, un cambio Lys34→Arg que confina la acilación a un único sitio, y un diácido octadecanodioico C18 unido por γGlu-2×AEEA en Lys26 que impulsa una unión de alta afinidad a la albúmina. Ese diácido C18 es la diferencia clave frente al monoácido C16 de la liraglutida y extiende la vida media circulante a unas 165 horas. Gabery et al. (2020) mapearon después la interacción con GLP-1R en órganos circunventriculares. Uso Exclusivo de Investigación (RUO).",
      mechanism: "La semaglutida se une al receptor de GLP-1, un receptor acoplado a proteínas G de clase B1, mediante el mecanismo de dos dominios típico de la familia de la secretina: el extremo C-terminal del péptido se acopla al dominio extracelular grande mientras que el segmento N-terminal His-Aib se inserta en el núcleo transmembrana para desencadenar la activación. La activación del receptor se acopla vía Gαs a la adenilato ciclasa, elevando el cAMP y comprometiendo tanto a PKA como a Epac2. En modelos de célula beta esa cascada cierra los canales de potasio sensibles a ATP, despolariza la membrana, abre los canales de Ca²⁺ dependientes de voltaje e impulsa la exocitosis de gránulos de insulina dependiente de glucosa (KEGG hsa04911). Lo que distingue farmacológicamente a la semaglutida es su selectividad y su equilibrio. La investigación muestra que es un agonista completo y balanceado de GLP-1R que recluta β-arrestina de forma robusta junto al cAMP, a diferencia de la tirzepatida, que suma agonismo de GIPR y se sesga en contra de la β-arrestina, y de la retatrutida, que además recluta el receptor de glucagón. El brazo lipídico en Lys26 no aporta contacto con el receptor: se une a la albúmina sérica.",
      benefits: [
        "**Farmacología del receptor de GLP-1:** La investigación muestra agonismo completo y balanceado sobre GLP-1R humano en líneas HEK293 que expresan de forma estable el receptor, con acumulación de cAMP cuantificada por HTRF o GloSensor para generar curvas concentración-respuesta de referencia.",
        "**Estándar de referencia de agonista balanceado:** Las investigaciones de laboratorio emplean la semaglutida como comparador no sesgado frente al cual se puntúan ligandos sesgados como la tirzepatida en ensayos paralelos de BRET de β-arrestina y de cAMP.",
        "**Secreción de insulina estimulada por glucosa:** Los estudios indican la modulación de la liberación de insulina en islotes murinos y humanos aislados, en incubación estática y perifusión, comparando 2.8 mM frente a 16.7 mM de glucosa para confirmar la dependencia de glucosa.",
        "**Mapeo de circuitos centrales:** Gabery et al. (2020) reportan la interacción con GLP-1R en órganos circunventriculares como el área postrema y el órgano subfornical, trazada por mapeo de activación de c-Fos en redes del tronco encefálico y del hipotálamo.",
        "**Resistencia a DPP-4 y afinidad por albúmina:** La investigación muestra que la sustitución Aib8 bloquea la escisión por DPP-4 mientras que el diácido C18 confiere unión reversible a la albúmina, ambos medibles por ensayo enzimático de DPP-4 y resonancia de plasmón superficial."
      ],
      citations: [
        "Lau, J., Bloch, P., Schäffer, L., Pettersson, I., et al. (2015). 'Discovery of the Once-Weekly Glucagon-Like Peptide-1 (GLP-1) Analogue Semaglutide.' Journal of Medicinal Chemistry, 58(18), 7370-7380. DOI: 10.1021/acs.jmedchem.5b00726 | PMID: 26308095",
        "Knudsen, L. B., & Lau, J. (2019). 'The Discovery and Development of Liraglutide and Semaglutide.' Frontiers in Endocrinology, 10, 155. DOI: 10.3389/fendo.2019.00155 | PMID: 31031702",
        "Gabery, S., Salinas, C. G., Paulsen, S. J., et al. (2020). 'Semaglutide lowers body weight in rodents via distributed neural pathways.' JCI Insight, 5(6), e133429. DOI: 10.1172/jci.insight.133429 | PMID: 32213703"
      ],
      formula: "C187H291N45O59",
      molarMass: "4113.58 g/mol (PubChem CID 56843331 lists 4114) — confirm salt/acetate content with manufacturer COA",
      sequence: "His-Aib-Glu-Gly-Thr-Phe-Thr-Ser-Asp-Val-Ser-Ser-Tyr-Leu-Glu-Gly-Gln-Ala-Ala-Lys(γGlu-2×AEEA-C18 diacid)-Glu-Phe-Ile-Ala-Trp-Leu-Val-Arg-Gly-Arg-Gly-OH (31 residuos; Aib8, acilación en Lys26 y Arg34 en numeración GLP-1(7-37))",
      retentionTime: 11.8
    }
  },
  "retatrutide-spray": {
    en: {
      abstract: "Retatrutide is a synthetic 39-amino-acid peptide engineered as a single molecule that activates three receptors: the GLP-1 receptor, the GIP receptor, and the glucagon receptor. Coskun and colleagues first described it in 2022, reporting that the in-vitro potency ranking is led by the GIP receptor with balanced but lower activity at the GLP-1 and glucagon receptors. Like Tirzepatide, its backbone derives from GIP rather than GLP-1, and a fatty diacid conjugation drives albumin binding and extended circulating residence. The glucagon receptor arm is the defining addition, contributing an energy-expenditure and hepatic lipid component absent from single and dual agonists. A 2023 follow-up reported that gastric emptying is delayed and that the effect attenuates over repeated exposure. Research Use Only (RUO).",
      mechanism: "Retatrutide activates three class B G protein-coupled receptors from a single peptide chain. Each couples to adenylyl cyclase, raising cAMP and engaging protein kinase A, but the downstream consequences diverge by tissue. In pancreatic beta cells, the GLP-1 and GIP arms converge on glucose-dependent insulin granule exocytosis. In hepatocytes, the glucagon arm engages a pathway the incretin receptors do not touch, influencing hepatic glucose output, lipid handling, and energy expenditure. Research shows this is what separates Retatrutide from its predecessors: Semaglutide engages the GLP-1 receptor alone, Tirzepatide adds the GIP receptor, and only Retatrutide recruits the glucagon receptor as well. Balancing the three activities was the central design problem, since unopposed glucagon receptor signaling opposes the glucose-lowering effect of the incretin arms. The fatty diacid contributes no receptor contact and serves albumin binding.",
      benefits: [
        "**Triple Receptor Pharmacology:** Research shows concurrent activation of the GLP-1, GIP, and glucagon receptors, resolved by running three stably transfected cell lines in parallel and comparing cAMP concentration-response curves receptor by receptor.",
        "**Glucagon Arm Isolation:** Laboratory investigations use Retatrutide alongside Semaglutide and Tirzepatide to isolate what the glucagon receptor contributes, since it is the only tool compound in the series that engages all three.",
        "**Hepatic Lipid and Energy Studies:** Studies indicate effects on hepatic glucose output and lipid handling in hepatocyte models, questions that arise specifically from glucagon receptor engagement.",
        "**Glucose-Stimulated Insulin Secretion:** Research shows modulation of insulin release in isolated islets under static incubation and perifusion, comparing low and high glucose conditions to confirm glucose dependence.",
        "**Gastric Emptying Kinetics:** Urva and colleagues (2023) report delayed gastric emptying with attenuation across repeated exposure, a time-dependent profile measurable in standard gastric transit models."
      ],
      citations: [
        "Coskun, T., Urva, S., Roell, W. C., et al. (2022). 'LY3437943, a novel triple glucagon, GIP, and GLP-1 receptor agonist for glycemic control and weight loss: From discovery to clinical proof of concept.' Cell Metabolism, 34(9), 1234-1247.e9. DOI: 10.1016/j.cmet.2022.07.013 | PMID: 35985340",
        "Urva, S., Coskun, T., Loh, M. T., et al. (2022). 'LY3437943, a novel triple GIP, GLP-1, and glucagon receptor agonist: a phase 1b, multicentre, double-blind, placebo-controlled, randomised, multiple-ascending dose trial.' The Lancet, 400(10366), 1869-1881. DOI: 10.1016/S0140-6736(22)02033-5 | PMID: 36354040",
        "Urva, S., O'Farrell, L., Du, Y., et al. (2023). 'The novel GIP, GLP-1 and glucagon receptor agonist retatrutide delays gastric emptying.' Diabetes, Obesity and Metabolism, 25(9), 2784-2788. DOI: 10.1111/dom.15167 | PMID: 37311727"
      ],
      formula: "C221H342N46O68 — verify with manufacturer COA (no PubChem CID currently indexed for retatrutide)",
      molarMass: "Approximately 4731 g/mol — verify with manufacturer COA; not independently confirmable against PubChem at this time",
      sequence: "39-amino-acid synthetic peptide, C-terminally amidated, built on a GIP-derived backbone with two aminoisobutyric acid substitutions and a fatty diacid conjugation — verify exact sequence and conjugation site with manufacturer COA",
      retentionTime: 12.9
    },
    es: {
      abstract: "La retatrutida es un péptido sintético de 39 aminoácidos diseñado como una sola molécula que activa tres receptores: el receptor de GLP-1, el receptor de GIP y el receptor de glucagón. Coskun y colaboradores la describieron por primera vez en 2022 y reportaron que la potencia in-vitro está encabezada por el receptor de GIP, con actividad balanceada pero menor en los receptores de GLP-1 y de glucagón. Al igual que la tirzepatida, su esqueleto deriva de GIP y no de GLP-1, y una conjugación de diácido graso impulsa la unión a albúmina y una residencia circulante prolongada. El brazo del receptor de glucagón es la adición definitoria y aporta un componente de gasto energético y lipídico hepático ausente en los agonistas simples y duales. Un seguimiento de 2023 reportó un retraso del vaciamiento gástrico que se atenúa con la exposición repetida. Uso Exclusivo de Investigación (RUO).",
      mechanism: "La retatrutida activa tres receptores acoplados a proteínas G de clase B desde una sola cadena peptídica. Cada uno se acopla a la adenilato ciclasa, eleva el cAMP y activa la proteína quinasa A, pero las consecuencias corriente abajo divergen según el tejido. En las células beta pancreáticas, los brazos de GLP-1 y GIP convergen en la exocitosis de gránulos de insulina dependiente de glucosa. En los hepatocitos, el brazo de glucagón activa una vía que los receptores de incretinas no tocan, influyendo en la producción hepática de glucosa, el manejo lipídico y el gasto energético. La investigación muestra que esto es lo que separa a la retatrutida de sus predecesores: la semaglutida activa solo el receptor de GLP-1, la tirzepatida suma el de GIP, y únicamente la retatrutida recluta además el receptor de glucagón. Equilibrar las tres actividades fue el problema central de diseño, ya que la señalización del receptor de glucagón sin contrapeso se opone al efecto hipoglucemiante de los brazos de incretinas. El diácido graso no aporta contacto con el receptor y sirve a la unión con albúmina.",
      benefits: [
        "**Farmacología de triple receptor:** La investigación muestra la activación concurrente de los receptores de GLP-1, GIP y glucagón, resuelta al correr en paralelo tres líneas celulares transfectadas de forma estable y comparar las curvas de concentración-respuesta de cAMP receptor por receptor.",
        "**Aislamiento del brazo de glucagón:** Las investigaciones de laboratorio emplean la retatrutida junto a la semaglutida y la tirzepatida para aislar la contribución del receptor de glucagón, ya que es el único compuesto de la serie que activa los tres.",
        "**Estudios de lípidos y energía hepáticos:** Los estudios indican efectos sobre la producción hepática de glucosa y el manejo lipídico en modelos de hepatocitos, preguntas que surgen específicamente de la activación del receptor de glucagón.",
        "**Secreción de insulina estimulada por glucosa:** La investigación muestra la modulación de la liberación de insulina en islotes aislados, en incubación estática y perifusión, comparando condiciones de glucosa baja y alta para confirmar la dependencia de glucosa.",
        "**Cinética del vaciamiento gástrico:** Urva y colaboradores (2023) reportan un retraso del vaciamiento gástrico que se atenúa con la exposición repetida, un perfil dependiente del tiempo medible en modelos estándar de tránsito gástrico."
      ],
      citations: [
        "Coskun, T., Urva, S., Roell, W. C., et al. (2022). 'LY3437943, a novel triple glucagon, GIP, and GLP-1 receptor agonist for glycemic control and weight loss: From discovery to clinical proof of concept.' Cell Metabolism, 34(9), 1234-1247.e9. DOI: 10.1016/j.cmet.2022.07.013 | PMID: 35985340",
        "Urva, S., Coskun, T., Loh, M. T., et al. (2022). 'LY3437943, a novel triple GIP, GLP-1, and glucagon receptor agonist: a phase 1b, multicentre, double-blind, placebo-controlled, randomised, multiple-ascending dose trial.' The Lancet, 400(10366), 1869-1881. DOI: 10.1016/S0140-6736(22)02033-5 | PMID: 36354040",
        "Urva, S., O'Farrell, L., Du, Y., et al. (2023). 'The novel GIP, GLP-1 and glucagon receptor agonist retatrutide delays gastric emptying.' Diabetes, Obesity and Metabolism, 25(9), 2784-2788. DOI: 10.1111/dom.15167 | PMID: 37311727"
      ],
      formula: "C221H342N46O68 — verify with manufacturer COA (no PubChem CID currently indexed for retatrutide)",
      molarMass: "Approximately 4731 g/mol — verify with manufacturer COA; not independently confirmable against PubChem at this time",
      sequence: "Péptido sintético de 39 aminoácidos, amidado en el extremo C-terminal, construido sobre un armazón derivado de GIP con dos sustituciones de ácido aminoisobutírico y una conjugación de diácido graso — verifique la secuencia exacta y el sitio de conjugación con el COA del fabricante",
      retentionTime: 12.9
    }
  },
  "thymosin-alpha-1-spray": {
    en: {
      abstract: "Thymosin Alpha-1 is a 28-amino-acid, N-terminally acetylated peptide corresponding to a fragment of prothymosin alpha, originally isolated from thymic tissue in the search for the factors driving T-cell maturation. It acts on innate immune receptors rather than a classical hormone receptor. Romani and colleagues established in 2004 that it activates dendritic cells through Toll-like receptor signaling, with the response depending on the MyD88 adaptor and producing interleukin-12 and Th1 polarization. Laboratory investigations since have described thymocyte maturation, shifts in CD4 and CD8 populations, and increased natural killer cell activity. A 2017 Nature Medicine report added an unexpected second activity unrelated to immune signaling: modulation of cellular protein quality control and trafficking. Research Use Only (RUO).",
      mechanism: "Thymosin Alpha-1 engages Toll-like receptor 2 and Toll-like receptor 9 on dendritic cells and monocytes, which distinguishes it sharply from the receptor-agonist peptides that dominate metabolic research. Receptor engagement recruits the MyD88 adaptor, which propagates signal into the NF-κB and interferon regulatory factor pathways, driving interleukin-12 production and pushing naive T cells toward a Th1 program. Research shows the dependence on MyD88 is strict: the response collapses in cells lacking that adaptor, which is how the Toll-like receptor route was confirmed rather than inferred. Downstream effects described in the literature include thymocyte maturation, altered CD4 and CD8 ratios, and elevated natural killer cytotoxicity. The N-terminal acetyl group is required for activity, and unlike Thymalin, which is a mixture of thymic peptides, Thymosin Alpha-1 is a single defined sequence.",
      benefits: [
        "**Dendritic Cell Activation:** Research shows maturation of bone marrow-derived and monocyte-derived dendritic cells, measured by surface marker expression on flow cytometry alongside interleukin-12 output.",
        "**Toll-like Receptor Dependence:** Romani and colleagues (2004) report the response is abolished in cells lacking the MyD88 adaptor, giving labs a clean genetic control for confirming the signaling route.",
        "**Th1 Polarization Assays:** Laboratory investigations describe skewing of naive T cell differentiation toward a Th1 phenotype, quantified by interferon-gamma output in co-culture systems.",
        "**Natural Killer and T Cell Populations:** Studies indicate increased natural killer cytotoxicity and shifts in CD4 and CD8 ratios, assessed by standard cytotoxicity assays and immunophenotyping panels.",
        "**Protein Quality Control:** A 2017 Nature Medicine report describes modulation of cellular proteostasis and membrane protein trafficking, an activity independent of the immune pathway and measurable by trafficking and maturation assays."
      ],
      citations: [
        "Romani, L., Bistoni, F., Gaziano, R., et al. (2004). 'Thymosin alpha 1 activates dendritic cells for antifungal Th1 resistance through toll-like receptor signaling.' Blood, 103(11), 4232-4239. DOI: 10.1182/blood-2003-11-4036 | PMID: 14982877",
        "Romani, L., Oikonomou, V., Moretti, S., et al. (2017). 'Thymosin α1 represents a potential potent single-molecule-based therapy for cystic fibrosis.' Nature Medicine, 23(5), 590-600. DOI: 10.1038/nm.4305 | PMID: 28394330",
        "Goldstein, A. L., & Goldstein, A. L. (2009). 'From lab to bedside: emerging clinical applications of thymosin alpha 1.' Expert Opinion on Biological Therapy, 9(5), 593-608. DOI: 10.1517/14712590902911412 | PMID: 19392576"
      ],
      formula: "C129H215N33O55",
      molarMass: "3108.3 g/mol (PubChem CID 16130571)",
      sequence: "Ac-Ser-Asp-Ala-Ala-Val-Asp-Thr-Ser-Ser-Glu-Ile-Thr-Thr-Lys-Asp-Leu-Lys-Glu-Lys-Lys-Glu-Val-Val-Glu-Glu-Ala-Glu-Asn-OH (28 residues, N-terminally acetylated; no cysteine residues)",
      retentionTime: 3.6
    },
    es: {
      abstract: "La timosina alfa-1 es un péptido de 28 aminoácidos acetilado en su extremo N-terminal que corresponde a un fragmento de la protimosina alfa, aislado originalmente de tejido tímico durante la búsqueda de los factores que impulsan la maduración de los linfocitos T. Actúa sobre receptores inmunitarios innatos y no sobre un receptor hormonal clásico. Romani y colaboradores establecieron en 2004 que activa las células dendríticas mediante señalización por receptores tipo Toll, con una respuesta que depende del adaptador MyD88 y que produce interleucina-12 y polarización Th1. Desde entonces, las investigaciones de laboratorio han descrito maduración de timocitos, cambios en las poblaciones CD4 y CD8, y aumento de la actividad de células asesinas naturales. Un reporte de Nature Medicine de 2017 añadió una segunda actividad inesperada y ajena a la señalización inmunitaria: la modulación del control de calidad y del tráfico de proteínas celulares. Uso Exclusivo de Investigación (RUO).",
      mechanism: "La timosina alfa-1 interactúa con el receptor tipo Toll 2 y el receptor tipo Toll 9 en células dendríticas y monocitos, lo que la distingue marcadamente de los péptidos agonistas de receptores que dominan la investigación metabólica. La interacción con el receptor recluta el adaptador MyD88, que propaga la señal hacia las vías de NF-κB y de los factores reguladores de interferón, impulsando la producción de interleucina-12 y orientando a los linfocitos T vírgenes hacia un programa Th1. La investigación muestra que la dependencia de MyD88 es estricta: la respuesta se desploma en células que carecen de ese adaptador, que es como se confirmó la ruta de los receptores tipo Toll en lugar de solo inferirla. Los efectos descritos corriente abajo incluyen maduración de timocitos, alteración de las proporciones CD4 y CD8, y aumento de la citotoxicidad de las células asesinas naturales. El grupo acetilo N-terminal es necesario para la actividad y, a diferencia de la timalina, que es una mezcla de péptidos tímicos, la timosina alfa-1 es una única secuencia definida.",
      benefits: [
        "**Activación de células dendríticas:** La investigación muestra la maduración de células dendríticas derivadas de médula ósea y de monocitos, medida por la expresión de marcadores de superficie en citometría de flujo junto con la producción de interleucina-12.",
        "**Dependencia de receptores tipo Toll:** Romani y colaboradores (2004) reportan que la respuesta se anula en células que carecen del adaptador MyD88, lo que da a los laboratorios un control genético limpio para confirmar la ruta de señalización.",
        "**Ensayos de polarización Th1:** Las investigaciones de laboratorio describen la orientación de la diferenciación de linfocitos T vírgenes hacia un fenotipo Th1, cuantificada por la producción de interferón gamma en sistemas de cocultivo.",
        "**Poblaciones de células asesinas naturales y linfocitos T:** Los estudios indican un aumento de la citotoxicidad de células asesinas naturales y cambios en las proporciones CD4 y CD8, evaluados por ensayos estándar de citotoxicidad y paneles de inmunofenotipado.",
        "**Control de calidad de proteínas:** Un reporte de Nature Medicine de 2017 describe la modulación de la proteostasis celular y del tráfico de proteínas de membrana, una actividad independiente de la vía inmunitaria y medible mediante ensayos de tráfico y maduración."
      ],
      citations: [
        "Romani, L., Bistoni, F., Gaziano, R., et al. (2004). 'Thymosin alpha 1 activates dendritic cells for antifungal Th1 resistance through toll-like receptor signaling.' Blood, 103(11), 4232-4239. DOI: 10.1182/blood-2003-11-4036 | PMID: 14982877",
        "Romani, L., Oikonomou, V., Moretti, S., et al. (2017). 'Thymosin α1 represents a potential potent single-molecule-based therapy for cystic fibrosis.' Nature Medicine, 23(5), 590-600. DOI: 10.1038/nm.4305 | PMID: 28394330",
        "Goldstein, A. L., & Goldstein, A. L. (2009). 'From lab to bedside: emerging clinical applications of thymosin alpha 1.' Expert Opinion on Biological Therapy, 9(5), 593-608. DOI: 10.1517/14712590902911412 | PMID: 19392576"
      ],
      formula: "C129H215N33O55",
      molarMass: "3108.3 g/mol (PubChem CID 16130571)",
      sequence: "Ac-Ser-Asp-Ala-Ala-Val-Asp-Thr-Ser-Ser-Glu-Ile-Thr-Thr-Lys-Asp-Leu-Lys-Glu-Lys-Lys-Glu-Val-Val-Glu-Glu-Ala-Glu-Asn-OH (28 residuos, acetilado en el extremo N-terminal; sin residuos de cisteína)",
      retentionTime: 3.6
    }
  },
  "tesamorelin-spray": {
    en: {
      abstract: "Tesamorelin is a synthetic 44-amino-acid analog of human growth hormone-releasing hormone, developed under the code TH9507 and distinguished by a short unsaturated acyl group attached to its N-terminal tyrosine. That single modification is the reason the molecule exists: native growth hormone-releasing hormone is cleaved within minutes by an aminopeptidase acting at the second residue, and the acyl group blocks that cleavage. Tesamorelin binds the GHRH receptor on pituitary somatotroph cells, where receptor activation raises cAMP and drives transcription of the growth hormone gene. Ferdinandi and colleagues published the non-clinical pharmacology profile in 2007. An earlier 2004 study examined airway delivery of the same molecule, which makes the pre-dissolved spray format directly relevant to that literature. Research Use Only (RUO).",
      mechanism: "Tesamorelin binds the GHRH receptor, a class B G protein-coupled receptor expressed on pituitary somatotroph cells. Receptor activation couples to adenylyl cyclase and raises intracellular cAMP, activating protein kinase A, which phosphorylates the CREB transcription factor. Phosphorylated CREB drives expression of the Pit-1 transcription factor, which in turn sustains transcription of the growth hormone gene, so the compound increases both synthesis and release rather than release alone. Hepatic IGF-1 serves as the standard downstream readout. Research shows the mechanism is distinct from ghrelin-receptor secretagogues such as Ipamorelin, GHRP-6, and Hexarelin, which act on an entirely separate receptor and can be run as controls in the same experiment. Because Tesamorelin acts upstream at the GHRH receptor, laboratory investigations report that the native pulsatile release pattern is preserved.",
      benefits: [
        "**GHRH Receptor Pharmacology:** Research shows receptor-mediated cAMP accumulation in cultured pituitary cells and somatotroph-derived lines, generating concentration-response curves specific to the GHRH receptor.",
        "**Growth Hormone Release Assays:** Studies indicate increased growth hormone secretion into culture medium, quantified by immunoassay in primary rat pituitary cell preparations.",
        "**Mechanism Discrimination:** Laboratory investigations run Tesamorelin against Ipamorelin or GHRP-6 in the same plate to separate GHRH receptor signaling from ghrelin receptor signaling, since the two pathways are independent.",
        "**Enzymatic Stability Profiling:** Research shows the N-terminal acyl group blocks the aminopeptidase cleavage that limits native growth hormone-releasing hormone, measurable by comparing degradation rates in a side-by-side enzymatic assay.",
        "**Airway Delivery Models:** Jansen and colleagues (2004) reported on pulmonary administration of this molecule, providing a published reference point for groups working with solution and aerosol presentations."
      ],
      citations: [
        "Ferdinandi, E. S., Brazeau, P., High, K., et al. (2007). 'Non-clinical pharmacology and safety evaluation of TH9507, a human growth hormone-releasing factor analogue.' Basic & Clinical Pharmacology & Toxicology, 100(1), 49-58. DOI: 10.1111/j.1742-7843.2007.00008.x | PMID: 17214611",
        "Jansen, M., Darby, I., Abribat, T., et al. (2004). 'Pulmonary delivery of TH9507, a growth hormone releasing factor analogue, in the dog.' International Journal of Pharmaceutics, 276(1-2), 75-81. DOI: 10.1016/j.ijpharm.2004.02.012 | PMID: 15113616",
        "Halmos, G., Szabo, Z., Juhasz, E., et al. (2023). 'Signaling mechanism of growth hormone-releasing hormone receptor.' Vitamins and Hormones, 123, 1-26. DOI: 10.1016/bs.vh.2023.06.004 | PMID: 37717982"
      ],
      formula: "C221H366N72O67S",
      molarMass: "5135.9 g/mol (PubChem CID 16137828)",
      sequence: "trans-3-hexenoyl-Tyr-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Gly-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Met-Ser-Arg-Gln-Gln-Gly-Glu-Ser-Asn-Gln-Glu-Arg-Gly-Ala-Arg-Ala-Arg-Leu-NH2 (44 residues; single methionine at position 27)",
      retentionTime: 9.4
    },
    es: {
      abstract: "La tesamorelina es un análogo sintético de 44 aminoácidos de la hormona liberadora de hormona del crecimiento humana, desarrollado bajo el código TH9507 y caracterizado por un grupo acilo insaturado corto unido a su tirosina N-terminal. Esa única modificación es la razón de ser de la molécula: la hormona liberadora nativa es escindida en minutos por una aminopeptidasa que actúa sobre el segundo residuo, y el grupo acilo bloquea ese corte. La tesamorelina se une al receptor de GHRH en las células somatotropas hipofisarias, donde la activación del receptor eleva el cAMP e impulsa la transcripción del gen de la hormona del crecimiento. Ferdinandi y colaboradores publicaron el perfil de farmacología no clínica en 2007. Un estudio anterior de 2004 examinó la administración por vía aérea de la misma molécula, lo que hace que el formato predisuelto en spray sea directamente relevante para esa literatura. Uso Exclusivo de Investigación (RUO).",
      mechanism: "La tesamorelina se une al receptor de GHRH, un receptor acoplado a proteínas G de clase B expresado en las células somatotropas hipofisarias. La activación del receptor se acopla a la adenilato ciclasa y eleva el cAMP intracelular, activando la proteína quinasa A, que fosforila el factor de transcripción CREB. El CREB fosforilado impulsa la expresión del factor de transcripción Pit-1, que a su vez sostiene la transcripción del gen de la hormona del crecimiento, de modo que el compuesto aumenta tanto la síntesis como la liberación y no solo esta última. El IGF-1 hepático sirve como lectura secundaria estándar. La investigación muestra que el mecanismo es distinto del de los secretagogos del receptor de grelina como la ipamorelina, el GHRP-6 y la hexarelina, que actúan sobre un receptor completamente separado y pueden correrse como controles en el mismo experimento. Como la tesamorelina actúa corriente arriba en el receptor de GHRH, las investigaciones de laboratorio reportan que el patrón pulsátil nativo de liberación se preserva.",
      benefits: [
        "**Farmacología del receptor de GHRH:** La investigación muestra la acumulación de cAMP mediada por receptor en células hipofisarias en cultivo y líneas derivadas de somatotropos, generando curvas de concentración-respuesta específicas del receptor de GHRH.",
        "**Ensayos de liberación de hormona del crecimiento:** Los estudios indican un aumento de la secreción de hormona del crecimiento al medio de cultivo, cuantificada por inmunoensayo en preparaciones primarias de células hipofisarias de rata.",
        "**Discriminación de mecanismos:** Las investigaciones de laboratorio corren la tesamorelina frente a la ipamorelina o el GHRP-6 en la misma placa para separar la señalización del receptor de GHRH de la del receptor de grelina, ya que ambas vías son independientes.",
        "**Perfilado de estabilidad enzimática:** La investigación muestra que el grupo acilo N-terminal bloquea el corte por aminopeptidasa que limita a la hormona liberadora nativa, medible al comparar las tasas de degradación en un ensayo enzimático paralelo.",
        "**Modelos de administración por vía aérea:** Jansen y colaboradores (2004) reportaron sobre la administración pulmonar de esta molécula, ofreciendo un punto de referencia publicado para los grupos que trabajan con presentaciones en solución y aerosol."
      ],
      citations: [
        "Ferdinandi, E. S., Brazeau, P., High, K., et al. (2007). 'Non-clinical pharmacology and safety evaluation of TH9507, a human growth hormone-releasing factor analogue.' Basic & Clinical Pharmacology & Toxicology, 100(1), 49-58. DOI: 10.1111/j.1742-7843.2007.00008.x | PMID: 17214611",
        "Jansen, M., Darby, I., Abribat, T., et al. (2004). 'Pulmonary delivery of TH9507, a growth hormone releasing factor analogue, in the dog.' International Journal of Pharmaceutics, 276(1-2), 75-81. DOI: 10.1016/j.ijpharm.2004.02.012 | PMID: 15113616",
        "Halmos, G., Szabo, Z., Juhasz, E., et al. (2023). 'Signaling mechanism of growth hormone-releasing hormone receptor.' Vitamins and Hormones, 123, 1-26. DOI: 10.1016/bs.vh.2023.06.004 | PMID: 37717982"
      ],
      formula: "C221H366N72O67S",
      molarMass: "5135.9 g/mol (PubChem CID 16137828)",
      sequence: "trans-3-hexenoíl-Tyr-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Gly-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Met-Ser-Arg-Gln-Gln-Gly-Glu-Ser-Asn-Gln-Glu-Arg-Gly-Ala-Arg-Ala-Arg-Leu-NH2 (44 residuos; una sola metionina en la posición 27)",
      retentionTime: 9.4
    }
  },
  "tesamorelin-ipamorelin-spray": {
    en: {
      abstract: "Tesamorelin + Ipamorelin is a two-component research blend that engages the growth hormone axis at two independent points. Tesamorelin is a stabilized 44-residue analog of growth hormone-releasing hormone, carrying a short acyl group on its N-terminal tyrosine that blocks the aminopeptidase cleavage limiting the native hormone. Ipamorelin is a 5-residue ghrelin receptor agonist first described by Raun and colleagues in 1998, notable because it released growth hormone in laboratory models without the cortisol and prolactin elevation characteristic of earlier secretagogues such as GHRP-6. Because the two act on different receptors coupled to different G proteins, the pairing allows a single preparation to raise both cAMP and intracellular calcium in somatotroph models. Research Use Only (RUO).",
      mechanism: "The two components of this blend converge on growth hormone release from opposite directions. Tesamorelin activates the GHRH receptor, a class B G protein-coupled receptor on pituitary somatotroph cells, which couples through adenylyl cyclase to raise cAMP and activate protein kinase A. Phosphorylated CREB then drives Pit-1 expression, sustaining transcription of the growth hormone gene, so this arm increases synthesis as well as release. Ipamorelin activates the ghrelin receptor, which couples instead through phospholipase C, generating inositol trisphosphate and releasing calcium from intracellular stores to trigger vesicle fusion. Research shows Ipamorelin also reduces somatostatin tone, removing an inhibitory brake. The pairing is mechanistically distinct from combining two GHRH analogs, since those would compete for the same receptor rather than complement one another.",
      benefits: [
        "**Dual Pathway Pharmacology:** Research shows simultaneous engagement of the GHRH receptor and the ghrelin receptor, allowing cAMP and intracellular calcium to be tracked in the same somatotroph preparation.",
        "**Additive Versus Synergistic Testing:** Laboratory investigations run each component alone in adjacent wells to establish whether the combined growth hormone response exceeds the sum of the parts.",
        "**Secretagogue Selectivity:** Raun and colleagues (1998) report that Ipamorelin releases growth hormone without the cortisol and prolactin response seen with GHRP-6, making it the clean comparator in selectivity panels.",
        "**Growth Hormone Release Assays:** Studies indicate increased growth hormone secretion into culture medium, quantified by immunoassay in primary rat pituitary cell preparations.",
        "**Somatostatin Tone Studies:** Research shows the ghrelin receptor arm reduces inhibitory somatostatin signaling, a variable that can be isolated by comparing blend and single-component responses."
      ],
      citations: [
        "Ferdinandi, E. S., Brazeau, P., High, K., et al. (2007). 'Non-clinical pharmacology and safety evaluation of TH9507, a human growth hormone-releasing factor analogue.' Basic & Clinical Pharmacology & Toxicology, 100(1), 49-58. DOI: 10.1111/j.1742-7843.2007.00008.x | PMID: 17214611",
        "Raun, K., Hansen, B. S., Johansen, N. L., et al. (1998). 'Ipamorelin, the first selective growth hormone secretagogue.' European Journal of Endocrinology, 139(5), 552-561. DOI: 10.1530/eje.0.1390552 | PMID: 9849822",
        "Halmos, G., Szabo, Z., Juhasz, E., et al. (2023). 'Signaling mechanism of growth hormone-releasing hormone receptor.' Vitamins and Hormones, 123, 1-26. DOI: 10.1016/bs.vh.2023.06.004 | PMID: 37717982"
      ],
      formula: "Blend — Tesamorelin C221H366N72O67S and Ipamorelin C38H49N9O5; no single formula applies",
      molarMass: "Tesamorelin 5135.9 g/mol; Ipamorelin 711.9 g/mol — confirm the blend ratio with manufacturer COA",
      sequence: "Two-peptide blend: Tesamorelin, a 44-residue acylated GHRH analog, combined with Ipamorelin (Aib-His-D-2-Nal-D-Phe-Lys-NH2, 5 residues) — verify ratio with manufacturer COA",
      retentionTime: 9.4
    },
    es: {
      abstract: "Tesamorelin + Ipamorelin es una mezcla de investigación de dos componentes que actúa sobre el eje de la hormona del crecimiento en dos puntos independientes. La tesamorelina es un análogo estabilizado de 44 residuos de la hormona liberadora de hormona del crecimiento, con un grupo acilo corto en su tirosina N-terminal que bloquea el corte por aminopeptidasa que limita a la hormona nativa. La ipamorelina es un agonista del receptor de grelina de 5 residuos descrito por primera vez por Raun y colaboradores en 1998, notable porque liberó hormona del crecimiento en modelos de laboratorio sin la elevación de cortisol y prolactina característica de secretagogos anteriores como el GHRP-6. Como ambos actúan sobre receptores distintos acoplados a proteínas G diferentes, la combinación permite que una sola preparación eleve tanto el cAMP como el calcio intracelular en modelos de somatotropos. Uso Exclusivo de Investigación (RUO).",
      mechanism: "Los dos componentes de esta mezcla convergen en la liberación de hormona del crecimiento desde direcciones opuestas. La tesamorelina activa el receptor de GHRH, un receptor acoplado a proteínas G de clase B en las células somatotropas hipofisarias, que se acopla a la adenilato ciclasa para elevar el cAMP y activar la proteína quinasa A. El CREB fosforilado impulsa entonces la expresión de Pit-1 y sostiene la transcripción del gen de la hormona del crecimiento, de modo que este brazo aumenta la síntesis además de la liberación. La ipamorelina activa el receptor de grelina, que se acopla en cambio por fosfolipasa C, genera inositol trifosfato y libera calcio de los depósitos intracelulares para desencadenar la fusión vesicular. La investigación muestra que la ipamorelina también reduce el tono de somatostatina, retirando un freno inhibitorio. La combinación es mecánicamente distinta de unir dos análogos de GHRH, ya que estos competirían por el mismo receptor en lugar de complementarse.",
      benefits: [
        "**Farmacología de doble vía:** La investigación muestra la activación simultánea del receptor de GHRH y del receptor de grelina, lo que permite seguir el cAMP y el calcio intracelular en la misma preparación de somatotropos.",
        "**Pruebas aditivas frente a sinérgicas:** Las investigaciones de laboratorio corren cada componente por separado en pozos contiguos para establecer si la respuesta combinada de hormona del crecimiento supera la suma de las partes.",
        "**Selectividad del secretagogo:** Raun y colaboradores (1998) reportan que la ipamorelina libera hormona del crecimiento sin la respuesta de cortisol y prolactina observada con el GHRP-6, lo que la convierte en el comparador limpio de los paneles de selectividad.",
        "**Ensayos de liberación de hormona del crecimiento:** Los estudios indican un aumento de la secreción de hormona del crecimiento al medio de cultivo, cuantificada por inmunoensayo en preparaciones primarias de células hipofisarias de rata.",
        "**Estudios del tono de somatostatina:** La investigación muestra que el brazo del receptor de grelina reduce la señalización inhibitoria de somatostatina, una variable que puede aislarse comparando la respuesta de la mezcla con la de cada componente."
      ],
      citations: [
        "Ferdinandi, E. S., Brazeau, P., High, K., et al. (2007). 'Non-clinical pharmacology and safety evaluation of TH9507, a human growth hormone-releasing factor analogue.' Basic & Clinical Pharmacology & Toxicology, 100(1), 49-58. DOI: 10.1111/j.1742-7843.2007.00008.x | PMID: 17214611",
        "Raun, K., Hansen, B. S., Johansen, N. L., et al. (1998). 'Ipamorelin, the first selective growth hormone secretagogue.' European Journal of Endocrinology, 139(5), 552-561. DOI: 10.1530/eje.0.1390552 | PMID: 9849822",
        "Halmos, G., Szabo, Z., Juhasz, E., et al. (2023). 'Signaling mechanism of growth hormone-releasing hormone receptor.' Vitamins and Hormones, 123, 1-26. DOI: 10.1016/bs.vh.2023.06.004 | PMID: 37717982"
      ],
      formula: "Blend — Tesamorelin C221H366N72O67S and Ipamorelin C38H49N9O5; no single formula applies",
      molarMass: "Tesamorelin 5135.9 g/mol; Ipamorelin 711.9 g/mol — confirm the blend ratio with manufacturer COA",
      sequence: "Mezcla de dos péptidos: tesamorelina, análogo acilado de GHRH de 44 residuos, combinada con ipamorelina (Aib-His-D-2-Nal-D-Phe-Lys-NH2, 5 residuos) — verifique la proporción con el COA del fabricante",
      retentionTime: 9.4
    }
  },
  "tb-500-spray": {
    en: {
      abstract: "TB-500 corresponds to thymosin beta-4, a 43-residue peptide that ranks among the most abundant intracellular proteins in many cell types. Its defining molecular property is actin sequestration: it binds monomeric G-actin and maintains an unpolymerized reserve, thereby setting the pool available for filament assembly. Malinda and colleagues reported in 1997 that it drives directional migration of human endothelial cells, establishing the migration phenotype that dominates the literature. Bock-Marquette and colleagues later described activation of integrin-linked kinase and Akt signaling, adding a survival pathway to the cytoskeletal one, while Badamchian and colleagues reported downregulation of inflammatory mediators. The peptide is intrinsically disordered in solution and folds only upon binding actin, which accounts for its unusual resistance to aggregation. Research Use Only (RUO).",
      mechanism: "Thymosin beta-4 works through direct protein binding rather than receptor activation, which sets it apart from nearly every other peptide in recovery research. Its central actin-binding motif engages monomeric G-actin with modest affinity and holds it in a non-polymerizable state. Because filament assembly depends on the concentration of free monomer, this sequestration directly governs how quickly actin networks build and dissolve, and therefore how cells change shape and migrate. Research shows the effect is dose-dependent and measurable in cell-free polymerization assays, meaning it does not require any cellular machinery. Beyond the cytoskeleton, laboratory investigations describe activation of integrin-linked kinase and downstream Akt signaling, upregulation of laminin-5, and suppression of inflammatory mediator release. Unlike BPC-157, whose mechanism remains poorly defined, thymosin beta-4 has a specific, structurally characterized molecular partner.",
      benefits: [
        "**Actin Sequestration Assays:** Research shows dose-dependent binding of monomeric G-actin, measurable directly in cell-free pyrene-actin polymerization assays without any cellular machinery.",
        "**Endothelial Cell Migration:** Malinda and colleagues (1997) report directional migration of human umbilical vein endothelial cells, quantified in scratch-wound and Boyden chamber formats.",
        "**Integrin-Linked Kinase Signaling:** Bock-Marquette and colleagues (2004) describe activation of integrin-linked kinase and downstream Akt, giving labs a survival pathway distinct from the cytoskeletal effect.",
        "**Inflammatory Mediator Studies:** Badamchian and colleagues (2003) report downregulation of inflammatory mediators, assessed by cytokine panel in endotoxin-challenged models.",
        "**Extracellular Matrix Remodeling:** Laboratory investigations describe upregulated laminin-5 expression, measurable by immunoblot in epithelial and endothelial monolayer systems."
      ],
      citations: [
        "Malinda, K. M., Goldstein, A. L., & Kleinman, H. K. (1997). 'Thymosin beta 4 stimulates directional migration of human umbilical vein endothelial cells.' FASEB Journal, 11(6), 474-481. DOI: 10.1096/fasebj.11.6.9194528 | PMID: 9194528",
        "Bock-Marquette, I., Saxena, A., White, M. D., et al. (2004). 'Thymosin beta4 activates integrin-linked kinase and promotes cardiac cell migration, survival and cardiac repair.' Nature, 432(7016), 466-472. DOI: 10.1038/nature03000 | PMID: 15565145",
        "Badamchian, M., Fagarasan, M. O., Danner, R. L., et al. (2003). 'Thymosin beta(4) reduces lethality and down-regulates inflammatory mediators in endotoxin-induced septic shock.' International Immunopharmacology, 3(8), 1225-1233. DOI: 10.1016/S1567-5769(03)00024-9 | PMID: 12860178"
      ],
      formula: "C212H350N56O78S (full-length 43-residue thymosin beta-4)",
      molarMass: "4963 g/mol (PubChem CID 16132341, Timbetasin) — confirm whether the lot is full-length or the short active fragment with manufacturer COA",
      sequence: "Ser-Asp-Lys-Pro-Asp-Met-Ala-Glu-Ile-Glu-Lys-Phe-Asp-Lys-Ser-Lys-Leu-Lys-Lys-Thr-Glu-Thr-Gln-Glu-Lys-Asn-Pro-Leu-Pro-Ser-Lys-Glu-Thr-Ile-Glu-Gln-Glu-Lys-Gln-Ala-Gly-Glu-Ser (43 residues; single methionine; no cysteine)",
      retentionTime: 4.2
    },
    es: {
      abstract: "TB-500 corresponde a la timosina beta-4, un péptido de 43 residuos que figura entre las proteínas intracelulares más abundantes en muchos tipos celulares. Su propiedad molecular definitoria es el secuestro de actina: se une a la G-actina monomérica y mantiene una reserva no polimerizada, fijando así el depósito disponible para el ensamblaje de filamentos. Malinda y colaboradores reportaron en 1997 que impulsa la migración direccional de células endoteliales humanas, estableciendo el fenotipo de migración que domina la literatura. Bock-Marquette y colaboradores describieron después la activación de la quinasa ligada a integrinas y de la señalización por Akt, añadiendo una vía de supervivencia a la del citoesqueleto, mientras que Badamchian y colaboradores reportaron la regulación a la baja de mediadores inflamatorios. El péptido es intrínsecamente desordenado en solución y solo se pliega al unirse a la actina, lo que explica su resistencia inusual a la agregación. Uso Exclusivo de Investigación (RUO).",
      mechanism: "La timosina beta-4 actúa por unión directa a proteínas y no por activación de receptores, lo que la diferencia de casi cualquier otro péptido de la investigación en recuperación. Su motivo central de unión a actina se acopla a la G-actina monomérica con afinidad moderada y la mantiene en un estado no polimerizable. Como el ensamblaje de filamentos depende de la concentración de monómero libre, este secuestro gobierna directamente la velocidad con que las redes de actina se construyen y se disuelven, y por tanto cómo las células cambian de forma y migran. La investigación muestra que el efecto es dependiente de la dosis y medible en ensayos de polimerización libres de células, es decir, sin requerir maquinaria celular. Más allá del citoesqueleto, las investigaciones de laboratorio describen la activación de la quinasa ligada a integrinas y de la señalización por Akt, el aumento de laminina-5 y la supresión de la liberación de mediadores inflamatorios. A diferencia del BPC-157, cuyo mecanismo sigue mal definido, la timosina beta-4 tiene una pareja molecular específica y caracterizada estructuralmente.",
      benefits: [
        "**Ensayos de secuestro de actina:** La investigación muestra la unión dependiente de dosis a la G-actina monomérica, medible directamente en ensayos de polimerización con actina marcada con pireno sin maquinaria celular.",
        "**Migración de células endoteliales:** Malinda y colaboradores (1997) reportan la migración direccional de células endoteliales de vena umbilical humana, cuantificada en formatos de herida por raspado y cámara de Boyden.",
        "**Señalización por quinasa ligada a integrinas:** Bock-Marquette y colaboradores (2004) describen la activación de la quinasa ligada a integrinas y de Akt, ofreciendo una vía de supervivencia distinta del efecto citoesquelético.",
        "**Estudios de mediadores inflamatorios:** Badamchian y colaboradores (2003) reportan la regulación a la baja de mediadores inflamatorios, evaluada por panel de citoquinas en modelos desafiados con endotoxina.",
        "**Remodelación de matriz extracelular:** Las investigaciones de laboratorio describen el aumento de la expresión de laminina-5, medible por inmunotransferencia en sistemas de monocapa epitelial y endotelial."
      ],
      citations: [
        "Malinda, K. M., Goldstein, A. L., & Kleinman, H. K. (1997). 'Thymosin beta 4 stimulates directional migration of human umbilical vein endothelial cells.' FASEB Journal, 11(6), 474-481. DOI: 10.1096/fasebj.11.6.9194528 | PMID: 9194528",
        "Bock-Marquette, I., Saxena, A., White, M. D., et al. (2004). 'Thymosin beta4 activates integrin-linked kinase and promotes cardiac cell migration, survival and cardiac repair.' Nature, 432(7016), 466-472. DOI: 10.1038/nature03000 | PMID: 15565145",
        "Badamchian, M., Fagarasan, M. O., Danner, R. L., et al. (2003). 'Thymosin beta(4) reduces lethality and down-regulates inflammatory mediators in endotoxin-induced septic shock.' International Immunopharmacology, 3(8), 1225-1233. DOI: 10.1016/S1567-5769(03)00024-9 | PMID: 12860178"
      ],
      formula: "C212H350N56O78S (full-length 43-residue thymosin beta-4)",
      molarMass: "4963 g/mol (PubChem CID 16132341, Timbetasin) — confirm whether the lot is full-length or the short active fragment with manufacturer COA",
      sequence: "Ser-Asp-Lys-Pro-Asp-Met-Ala-Glu-Ile-Glu-Lys-Phe-Asp-Lys-Ser-Lys-Leu-Lys-Lys-Thr-Glu-Thr-Gln-Glu-Lys-Asn-Pro-Leu-Pro-Ser-Lys-Glu-Thr-Ile-Glu-Gln-Glu-Lys-Gln-Ala-Gly-Glu-Ser (43 residuos; una sola metionina; sin cisteína)",
      retentionTime: 4.2
    }
  },
  "snap-8-spray": {
    en: {
      abstract: "SNAP-8, also catalogued as acetyl octapeptide-3, is an eight-residue acetylated peptide developed as an extended analog of the hexapeptide Argireline. Both were designed around the same premise: that a sequence mimicking the N-terminal region of SNAP-25 can compete for its place in the SNARE complex, the three-protein assembly that drives vesicle fusion and neurotransmitter release. Blanes-Mira and colleagues published the founding work on the hexapeptide in 2002, and the structural basis for SNARE assembly was established by Fasshauer, Sutton and Brunger in 1998. An important limitation should be stated directly: no primary mechanistic study of SNAP-8 itself appears in the peer-reviewed literature, and the two indexed papers on acetyl octapeptide-3 are formulation studies rather than mechanism work. Research Use Only (RUO).",
      mechanism: "The proposed mechanism is competitive interference with SNARE complex assembly. Vesicle fusion requires syntaxin, VAMP and SNAP-25 to zipper together into a four-helix bundle that pulls the vesicle and target membranes into contact. SNAP-8 presents a sequence resembling the N-terminal end of SNAP-25, and the working model is that it occupies that position without supporting productive assembly, leaving a destabilized complex that docks vesicles less efficiently and slows catecholamine release. This is a protein-protein interaction mechanism, not receptor binding, which distinguishes it from every receptor agonist in this catalog. It should be read as a working model rather than an established finding, since the evidence comes from studies on the shorter Argireline hexapeptide and from SNARE structural biology rather than from direct work on this octapeptide.",
      benefits: [
        "**SNARE Assembly Assays:** Laboratory investigations titrate the peptide against recombinant syntaxin, VAMP and SNAP-25 to measure whether complex formation is measurably reduced in a cell-free system.",
        "**Comparative Peptide Studies:** Research shows the hexapeptide Argireline reduces vesicle-mediated release (Blanes-Mira 2002), giving labs a direct structural comparator for the two-residue-longer sequence.",
        "**Reconstructed Epidermis Penetration:** Studies indicate measurable delivery in reconstructed human epidermis models, with intact peptide quantified by mass spectrometry across a time course.",
        "**Formulation Stability Screening:** Avcil and colleagues (2020) evaluated acetyl octapeptide-3 in a hyaluronic acid carrier system, providing a published reference point for delivery-vehicle work.",
        "**Mechanism Validation Gap:** No primary mechanistic study of SNAP-8 exists, which makes direct SNARE-binding characterization an open and publishable question for a structural biology group."
      ],
      citations: [
        "Blanes-Mira, C., Clemente, J., Jodas, G., et al. (2002). 'A synthetic hexapeptide (Argireline) with antiwrinkle activity.' International Journal of Cosmetic Science, 24(5), 303-310. DOI: 10.1046/j.1467-2494.2002.00153.x | PMID: 18498523",
        "Fasshauer, D., Sutton, R. B., Brunger, A. T., & Jahn, R. (1998). 'Conserved structural features of the synaptic fusion complex: SNARE proteins reclassified as Q- and R-SNAREs.' PNAS, 95(26), 15781-15786. DOI: 10.1073/pnas.95.26.15781 | PMID: 9861047",
        "Avcil, M., Akman, G., Klokkers, J., et al. (2020). 'Efficacy of bioactive peptides loaded on hyaluronic acid microneedle patches: A monocentric clinical study.' Journal of Cosmetic Dermatology, 19(2), 328-337. DOI: 10.1111/jocd.13009 | PMID: 31134751"
      ],
      formula: "C41H70N16O16S",
      molarMass: "1075.2 g/mol (PubChem CID 76283482, acetyl octapeptide-3, CAS 868844-74-0)",
      sequence: "Ac-Glu-Glu-Met-Gln-Arg-Arg-Ala-Asp-NH2 (8 residues, N-terminally acetylated, C-terminal amide; single methionine)",
      retentionTime: 2.9
    },
    es: {
      abstract: "SNAP-8, catalogado también como acetil octapéptido-3, es un péptido acetilado de ocho residuos desarrollado como análogo extendido del hexapéptido Argireline. Ambos se diseñaron sobre la misma premisa: que una secuencia que imita la región N-terminal de SNAP-25 puede competir por su lugar en el complejo SNARE, el ensamblaje de tres proteínas que impulsa la fusión vesicular y la liberación de neurotransmisores. Blanes-Mira y colaboradores publicaron el trabajo fundacional sobre el hexapéptido en 2002, y la base estructural del ensamblaje SNARE fue establecida por Fasshauer, Sutton y Brunger en 1998. Conviene señalar una limitación de forma directa: no existe en la literatura revisada por pares ningún estudio mecanístico primario sobre SNAP-8 en sí, y los dos artículos indexados sobre acetil octapéptido-3 son estudios de formulación y no de mecanismo. Uso Exclusivo de Investigación (RUO).",
      mechanism: "El mecanismo propuesto es la interferencia competitiva con el ensamblaje del complejo SNARE. La fusión vesicular requiere que sintaxina, VAMP y SNAP-25 se entrelacen en un haz de cuatro hélices que aproxima las membranas vesicular y diana. SNAP-8 presenta una secuencia semejante al extremo N-terminal de SNAP-25, y el modelo de trabajo es que ocupa esa posición sin sostener un ensamblaje productivo, dejando un complejo desestabilizado que ancla vesículas con menor eficiencia y ralentiza la liberación de catecolaminas. Es un mecanismo de interacción proteína-proteína y no de unión a receptor, lo que lo distingue de todos los agonistas de receptores de este catálogo. Debe leerse como un modelo de trabajo y no como un hallazgo establecido, ya que la evidencia proviene de estudios sobre el hexapéptido Argireline y de la biología estructural de SNARE, no de trabajo directo sobre este octapéptido.",
      benefits: [
        "**Ensayos de ensamblaje SNARE:** Las investigaciones de laboratorio titulan el péptido frente a sintaxina, VAMP y SNAP-25 recombinantes para medir si la formación del complejo se reduce de forma apreciable en un sistema libre de células.",
        "**Estudios peptídicos comparativos:** La investigación muestra que el hexapéptido Argireline reduce la liberación mediada por vesículas (Blanes-Mira 2002), lo que ofrece un comparador estructural directo para la secuencia dos residuos más larga.",
        "**Penetración en epidermis reconstruida:** Los estudios indican una entrega medible en modelos de epidermis humana reconstruida, con el péptido intacto cuantificado por espectrometría de masas a lo largo del tiempo.",
        "**Cribado de estabilidad en formulación:** Avcil y colaboradores (2020) evaluaron el acetil octapéptido-3 en un sistema portador de ácido hialurónico, aportando un punto de referencia publicado para el trabajo con vehículos de entrega.",
        "**Vacío de validación del mecanismo:** No existe ningún estudio mecanístico primario sobre SNAP-8, lo que convierte la caracterización directa de su unión a SNARE en una pregunta abierta y publicable para un grupo de biología estructural."
      ],
      citations: [
        "Blanes-Mira, C., Clemente, J., Jodas, G., et al. (2002). 'A synthetic hexapeptide (Argireline) with antiwrinkle activity.' International Journal of Cosmetic Science, 24(5), 303-310. DOI: 10.1046/j.1467-2494.2002.00153.x | PMID: 18498523",
        "Fasshauer, D., Sutton, R. B., Brunger, A. T., & Jahn, R. (1998). 'Conserved structural features of the synaptic fusion complex: SNARE proteins reclassified as Q- and R-SNAREs.' PNAS, 95(26), 15781-15786. DOI: 10.1073/pnas.95.26.15781 | PMID: 9861047",
        "Avcil, M., Akman, G., Klokkers, J., et al. (2020). 'Efficacy of bioactive peptides loaded on hyaluronic acid microneedle patches: A monocentric clinical study.' Journal of Cosmetic Dermatology, 19(2), 328-337. DOI: 10.1111/jocd.13009 | PMID: 31134751"
      ],
      formula: "C41H70N16O16S",
      molarMass: "1075.2 g/mol (PubChem CID 76283482, acetyl octapeptide-3, CAS 868844-74-0)",
      sequence: "Ac-Glu-Glu-Met-Gln-Arg-Arg-Ala-Asp-NH2 (8 residuos, acetilado en el extremo N-terminal, amida C-terminal; una sola metionina)",
      retentionTime: 2.9
    }
  },
  "sermorelin-spray": {
    en: {
      abstract: "Sermorelin is a synthetic 29-residue peptide corresponding to the N-terminal fragment of human growth hormone-releasing hormone, terminating in a C-terminal amide. Its significance is that this truncation retains essentially the full receptor activity of the 44-residue parent hormone, establishing residues one through twenty-nine as the minimal active sequence and making Sermorelin the long-standing reference agonist at the GHRH receptor. Prakash and Goa reviewed the compound in 1999. Because it lacks any N-terminal protecting group, it is cleaved rapidly by the aminopeptidase that acts at the second residue, a liability that later analogs such as Tesamorelin were specifically engineered to overcome. Stepień and colleagues subsequently reported activity in a neuroendocrine tumor cell line, extending interest beyond pituitary models. Research Use Only (RUO).",
      mechanism: "Sermorelin binds the GHRH receptor, a class B G protein-coupled receptor on pituitary somatotroph cells, using the same recognition surface as the full-length hormone. Receptor activation couples to adenylyl cyclase and raises intracellular cAMP, which activates protein kinase A and leads to phosphorylation of the CREB transcription factor. Phosphorylated CREB drives Pit-1 expression, and Pit-1 sustains transcription of the growth hormone gene, so the compound increases hormone synthesis as well as release. Research shows the mechanism is identical in kind to Tesamorelin because both engage the same receptor, and the meaningful difference lies in durability rather than pharmacology: Sermorelin has no N-terminal protection and is cleaved rapidly, whereas Tesamorelin resists that cleavage. Ghrelin-receptor secretagogues such as Ipamorelin act through a different receptor entirely.",
      benefits: [
        "**Reference GHRH Agonist:** Research shows full receptor activity from the 29-residue fragment, making it the standard against which longer or modified GHRH analogs are benchmarked in cAMP assays.",
        "**Growth Hormone Release Assays:** Studies indicate increased growth hormone secretion into culture medium, quantified by immunoassay in primary rat pituitary cell preparations.",
        "**Enzymatic Stability Comparison:** Laboratory investigations pair Sermorelin with Tesamorelin to isolate the contribution of N-terminal protection, since the two share a receptor but differ sharply in degradation rate.",
        "**Extrapituitary Receptor Signaling:** Stepień and colleagues (2009) report proliferation and secretory changes in the NCI-H727 neuroendocrine cell line, extending GHRH receptor work beyond the pituitary.",
        "**Minimal Active Sequence Studies:** Research shows residues one through twenty-nine carry the receptor activity of the full hormone, supporting structure-activity work on further truncation and substitution."
      ],
      citations: [
        "Prakash, A., & Goa, K. L. (1999). 'Sermorelin: a review of its use in the diagnosis and treatment of children with idiopathic growth hormone deficiency.' BioDrugs, 12(2), 139-157. DOI: 10.2165/00063030-199912020-00007 | PMID: 18031173",
        "Stepień, T., Sacewicz, M., Lawnicka, H., et al. (2009). 'Stimulatory effect of growth hormone-releasing hormone (GHRH(1-29)NH2) on the proliferation, VEGF and chromogranin A secretion by human neuroendocrine tumor cell line NCI-H727 in vitro.' Neuropeptides, 43(5), 397-400. DOI: 10.1016/j.npep.2009.08.005 | PMID: 19747727",
        "Halmos, G., Szabo, Z., Juhasz, E., et al. (2023). 'Signaling mechanism of growth hormone-releasing hormone receptor.' Vitamins and Hormones, 123, 1-26. DOI: 10.1016/bs.vh.2023.06.004 | PMID: 37717982"
      ],
      formula: "C149H246N44O42S",
      molarMass: "3357.9 g/mol (PubChem CID 16132413)",
      sequence: "Tyr-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Gly-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Met-Ser-Arg-NH2 (29 residues, C-terminal amide; single methionine)",
      retentionTime: 7.8
    },
    es: {
      abstract: "La sermorelina es un péptido sintético de 29 residuos que corresponde al fragmento N-terminal de la hormona liberadora de hormona del crecimiento humana, terminado en una amida C-terminal. Su importancia radica en que esta truncación conserva prácticamente toda la actividad sobre el receptor de la hormona madre de 44 residuos, estableciendo los residuos uno a veintinueve como la secuencia activa mínima y convirtiendo a la sermorelina en el agonista de referencia de larga data del receptor de GHRH. Prakash y Goa revisaron el compuesto en 1999. Como carece de grupo protector N-terminal, es escindida rápidamente por la aminopeptidasa que actúa sobre el segundo residuo, una vulnerabilidad que análogos posteriores como la tesamorelina fueron diseñados específicamente para superar. Stepień y colaboradores reportaron después actividad en una línea de tumor neuroendocrino, ampliando el interés más allá de los modelos hipofisarios. Uso Exclusivo de Investigación (RUO).",
      mechanism: "La sermorelina se une al receptor de GHRH, un receptor acoplado a proteínas G de clase B en las células somatotropas hipofisarias, usando la misma superficie de reconocimiento que la hormona completa. La activación del receptor se acopla a la adenilato ciclasa y eleva el cAMP intracelular, lo que activa la proteína quinasa A y conduce a la fosforilación del factor de transcripción CREB. El CREB fosforilado impulsa la expresión de Pit-1, y Pit-1 sostiene la transcripción del gen de la hormona del crecimiento, de modo que el compuesto aumenta la síntesis además de la liberación. La investigación muestra que el mecanismo es idéntico en naturaleza al de la tesamorelina porque ambos activan el mismo receptor, y la diferencia relevante está en la durabilidad y no en la farmacología: la sermorelina carece de protección N-terminal y se escinde rápidamente, mientras que la tesamorelina resiste ese corte. Los secretagogos del receptor de grelina como la ipamorelina actúan por un receptor totalmente distinto.",
      benefits: [
        "**Agonista de GHRH de referencia:** La investigación muestra actividad completa sobre el receptor con el fragmento de 29 residuos, lo que lo convierte en el estándar frente al que se comparan análogos de GHRH más largos o modificados en ensayos de cAMP.",
        "**Ensayos de liberación de hormona del crecimiento:** Los estudios indican un aumento de la secreción de hormona del crecimiento al medio de cultivo, cuantificada por inmunoensayo en preparaciones primarias de células hipofisarias de rata.",
        "**Comparación de estabilidad enzimática:** Las investigaciones de laboratorio emparejan sermorelina y tesamorelina para aislar la contribución de la protección N-terminal, ya que comparten receptor pero difieren marcadamente en velocidad de degradación.",
        "**Señalización extrahipofisaria del receptor:** Stepień y colaboradores (2009) reportan cambios de proliferación y secreción en la línea neuroendocrina NCI-H727, extendiendo el trabajo sobre el receptor de GHRH más allá de la hipófisis.",
        "**Estudios de secuencia activa mínima:** La investigación muestra que los residuos uno a veintinueve portan la actividad de la hormona completa, lo que respalda el trabajo de relación estructura-actividad sobre truncaciones y sustituciones adicionales."
      ],
      citations: [
        "Prakash, A., & Goa, K. L. (1999). 'Sermorelin: a review of its use in the diagnosis and treatment of children with idiopathic growth hormone deficiency.' BioDrugs, 12(2), 139-157. DOI: 10.2165/00063030-199912020-00007 | PMID: 18031173",
        "Stepień, T., Sacewicz, M., Lawnicka, H., et al. (2009). 'Stimulatory effect of growth hormone-releasing hormone (GHRH(1-29)NH2) on the proliferation, VEGF and chromogranin A secretion by human neuroendocrine tumor cell line NCI-H727 in vitro.' Neuropeptides, 43(5), 397-400. DOI: 10.1016/j.npep.2009.08.005 | PMID: 19747727",
        "Halmos, G., Szabo, Z., Juhasz, E., et al. (2023). 'Signaling mechanism of growth hormone-releasing hormone receptor.' Vitamins and Hormones, 123, 1-26. DOI: 10.1016/bs.vh.2023.06.004 | PMID: 37717982"
      ],
      formula: "C149H246N44O42S",
      molarMass: "3357.9 g/mol (PubChem CID 16132413)",
      sequence: "Tyr-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Gly-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Met-Ser-Arg-NH2 (29 residuos, amida C-terminal; una sola metionina)",
      retentionTime: 7.8
    }
  },
  "ss-31-spray": {
    en: {
      abstract: "SS-31, also known as elamipretide, is a four-residue aromatic-cationic peptide designed to concentrate within mitochondria without relying on membrane potential. Its molecular target is not a protein but a lipid: cardiolipin, the four-tailed phospholipid found almost exclusively in the inner mitochondrial membrane. Birk and colleagues reported in 2013 that the compound re-energizes ischemic mitochondria specifically through this cardiolipin interaction, and follow-up work in 2014 characterized how it affects the cytochrome c and cardiolipin complex. The functional consequence described in that literature is twofold: cristae architecture is stabilized, and cardiolipin is prevented from converting cytochrome c into a peroxidase, cutting reactive oxygen species generation at its source. Because uptake is potential-independent, the compound accumulates even in depolarized mitochondria. Research Use Only (RUO).",
      mechanism: "SS-31 works by lipid binding rather than receptor activation, which makes it mechanistically unlike every other peptide in this catalog. Its alternating aromatic and cationic residues allow it to cross membranes without a transporter and to partition selectively into the inner mitochondrial membrane, where it associates with cardiolipin. Research shows two consequences follow. First, binding stabilizes the tight curvature of cristae membranes, preserving the physical organization that respiratory chain supercomplexes depend on. Second, and more specifically, it interferes with the cardiolipin and cytochrome c interaction that converts cytochrome c from an electron carrier into a peroxidase, a switch that drives reactive oxygen species production during ischemia. The property that distinguishes it most sharply is that accumulation does not require an intact membrane potential, unlike lipophilic cation strategies that lose their targeting precisely when mitochondria are damaged.",
      benefits: [
        "**Cardiolipin Binding Assays:** Research shows direct association with cardiolipin, measurable in defined liposome systems built from controlled lipid compositions without any cellular components.",
        "**Mitochondrial Respiration:** Birk and colleagues (2013) report restored electron transport in ischemic mitochondria, quantified by oxygen consumption on Seahorse or Clark-electrode platforms.",
        "**Cytochrome c Peroxidase Suppression:** Birk and colleagues (2014) describe interference with the cardiolipin and cytochrome c complex, the switch that drives reactive oxygen species generation.",
        "**Potential-Independent Uptake:** Studies indicate accumulation does not require intact membrane potential, allowing direct comparison against lipophilic cation approaches in depolarized preparations.",
        "**Endothelial Mitochondrial Protection:** Liu and colleagues (2014) report preserved endothelial mitochondria and reduced microvascular rarefaction in renal ischemia models."
      ],
      citations: [
        "Birk, A. V., Liu, S., Soong, Y., et al. (2013). 'The mitochondrial-targeted compound SS-31 re-energizes ischemic mitochondria by interacting with cardiolipin.' Journal of the American Society of Nephrology, 24(8), 1250-1261. DOI: 10.1681/ASN.2012121216 | PMID: 23813215",
        "Birk, A. V., Chao, W. M., Bracken, C., et al. (2014). 'Targeting mitochondrial cardiolipin and the cytochrome c/cardiolipin complex to promote electron transport and optimize mitochondrial ATP synthesis.' British Journal of Pharmacology, 171(8), 2017-2028. DOI: 10.1111/bph.12468 | PMID: 24134698",
        "Liu, S., Soong, Y., Seshan, S. V., et al. (2014). 'Novel cardiolipin therapeutic protects endothelial mitochondria during renal ischemia and mitigates microvascular rarefaction, inflammation, and fibrosis.' American Journal of Physiology - Renal Physiology, 306(9), F970-F980. DOI: 10.1152/ajprenal.00697.2013 | PMID: 24553434"
      ],
      formula: "C32H49N9O5",
      molarMass: "639.8 g/mol (PubChem CID 11764719, elamipretide)",
      sequence: "D-Arg-Dmt-Lys-Phe-NH2 (4 residues; contains D-arginine and 2,6-dimethyltyrosine, C-terminal amide)",
      retentionTime: 3.1
    },
    es: {
      abstract: "SS-31, también conocido como elamipretida, es un péptido aromático-catiónico de cuatro residuos diseñado para concentrarse dentro de las mitocondrias sin depender del potencial de membrana. Su diana molecular no es una proteína sino un lípido: la cardiolipina, el fosfolípido de cuatro colas que se encuentra casi exclusivamente en la membrana mitocondrial interna. Birk y colaboradores reportaron en 2013 que el compuesto reactiva las mitocondrias isquémicas específicamente a través de esta interacción con la cardiolipina, y el trabajo posterior de 2014 caracterizó cómo afecta al complejo de citocromo c y cardiolipina. La consecuencia funcional descrita en esa literatura es doble: se estabiliza la arquitectura de las crestas y se impide que la cardiolipina convierta al citocromo c en una peroxidasa, cortando la generación de especies reactivas de oxígeno en su origen. Como la captación es independiente del potencial, el compuesto se acumula incluso en mitocondrias despolarizadas. Uso Exclusivo de Investigación (RUO).",
      mechanism: "SS-31 actúa por unión a lípidos y no por activación de receptores, lo que lo hace mecánicamente distinto de todos los demás péptidos de este catálogo. Sus residuos alternantes aromáticos y catiónicos le permiten cruzar membranas sin transportador y repartirse selectivamente hacia la membrana mitocondrial interna, donde se asocia con la cardiolipina. La investigación muestra que de ahí se derivan dos consecuencias. Primero, la unión estabiliza la curvatura pronunciada de las membranas de las crestas, preservando la organización física de la que dependen los supercomplejos de la cadena respiratoria. Segundo, y de forma más específica, interfiere con la interacción entre cardiolipina y citocromo c que convierte al citocromo c de transportador de electrones en peroxidasa, un cambio que impulsa la producción de especies reactivas de oxígeno durante la isquemia. La propiedad que más lo distingue es que la acumulación no requiere un potencial de membrana intacto, a diferencia de las estrategias con cationes lipofílicos que pierden su direccionamiento justo cuando las mitocondrias están dañadas.",
      benefits: [
        "**Ensayos de unión a cardiolipina:** La investigación muestra una asociación directa con la cardiolipina, medible en sistemas de liposomas definidos de composición lipídica controlada y sin componentes celulares.",
        "**Respiración mitocondrial:** Birk y colaboradores (2013) reportan la restauración del transporte de electrones en mitocondrias isquémicas, cuantificada por consumo de oxígeno en plataformas Seahorse o de electrodo de Clark.",
        "**Supresión de la actividad peroxidasa del citocromo c:** Birk y colaboradores (2014) describen la interferencia con el complejo de cardiolipina y citocromo c, el interruptor que impulsa la generación de especies reactivas de oxígeno.",
        "**Captación independiente del potencial:** Los estudios indican que la acumulación no requiere un potencial de membrana intacto, lo que permite la comparación directa con enfoques de cationes lipofílicos en preparaciones despolarizadas.",
        "**Protección mitocondrial endotelial:** Liu y colaboradores (2014) reportan mitocondrias endoteliales preservadas y menor rarefacción microvascular en modelos de isquemia renal."
      ],
      citations: [
        "Birk, A. V., Liu, S., Soong, Y., et al. (2013). 'The mitochondrial-targeted compound SS-31 re-energizes ischemic mitochondria by interacting with cardiolipin.' Journal of the American Society of Nephrology, 24(8), 1250-1261. DOI: 10.1681/ASN.2012121216 | PMID: 23813215",
        "Birk, A. V., Chao, W. M., Bracken, C., et al. (2014). 'Targeting mitochondrial cardiolipin and the cytochrome c/cardiolipin complex to promote electron transport and optimize mitochondrial ATP synthesis.' British Journal of Pharmacology, 171(8), 2017-2028. DOI: 10.1111/bph.12468 | PMID: 24134698",
        "Liu, S., Soong, Y., Seshan, S. V., et al. (2014). 'Novel cardiolipin therapeutic protects endothelial mitochondria during renal ischemia and mitigates microvascular rarefaction, inflammation, and fibrosis.' American Journal of Physiology - Renal Physiology, 306(9), F970-F980. DOI: 10.1152/ajprenal.00697.2013 | PMID: 24553434"
      ],
      formula: "C32H49N9O5",
      molarMass: "639.8 g/mol (PubChem CID 11764719, elamipretide)",
      sequence: "D-Arg-Dmt-Lys-Phe-NH2 (4 residuos; contiene D-arginina y 2,6-dimetiltirosina, amida C-terminal)",
      retentionTime: 3.1
    }
  },
  "mots-c-spray": {
    en: {
      abstract: "MOTS-c is a 16-amino-acid peptide encoded within the mitochondrial genome rather than nuclear DNA, placing it among a small group of mitochondrial-derived peptides. Lee and colleagues described it in 2015, reporting that it targets the folate and methionine cycle and that the resulting accumulation of the intermediate AICAR activates AMP-activated protein kinase, shifting cellular metabolism toward glucose utilization. Kim and colleagues subsequently reported a distinct second function: under metabolic stress the peptide translocates to the nucleus and participates in regulating antioxidant and metabolic gene expression. Reynolds and colleagues later characterized it as exercise-responsive and connected to age-dependent physical decline and muscle homeostasis. Acting in both the cytosol and the nucleus is uncommon for a peptide of this size. Research Use Only (RUO).",
      mechanism: "MOTS-c operates through metabolic interference rather than receptor binding. Research shows it acts on the folate and methionine one-carbon cycle, and the practical consequence is accumulation of the purine biosynthesis intermediate AICAR. Because AICAR is a well-established activator of AMP-activated protein kinase, this indirect route converges on the same energy-sensing hub that exercise and metabolic stress engage, shifting cells toward glucose uptake and away from lipid storage. That is one mechanism. The second is transcriptional and physically separate: Kim and colleagues reported that metabolic stress drives the peptide into the nucleus, where it associates with stress-responsive transcription factors and regulates antioxidant response and metabolic gene programs. This dual cytosolic and nuclear activity distinguishes MOTS-c from SS-31, which acts purely on mitochondrial membrane lipids and never enters the nucleus.",
      benefits: [
        "**AMPK Activation:** Lee and colleagues (2015) report AMP-activated protein kinase activation via the folate and methionine cycle, measured by phospho-AMPK immunoblot in myotube and hepatocyte cultures.",
        "**Glucose Utilization Assays:** Research shows increased glucose uptake in skeletal muscle cell models, quantified by labelled glucose uptake alongside insulin sensitivity readouts.",
        "**Nuclear Translocation Studies:** Kim and colleagues (2018) describe stress-induced movement of the peptide into the nucleus, traceable by subcellular fractionation and immunofluorescence imaging.",
        "**Exercise Response Biology:** Reynolds and colleagues (2021) report the peptide is exercise-induced and regulates muscle homeostasis, studied using treadmill and wheel-running protocols in mice.",
        "**Mitochondrial-Derived Peptide Comparison:** Studies indicate distinct behaviour from SS-31, which binds membrane lipids and never enters the nucleus, allowing the two mitochondrial mechanisms to be separated experimentally."
      ],
      citations: [
        "Lee, C., Zeng, J., Drew, B. G., et al. (2015). 'The mitochondrial-derived peptide MOTS-c promotes metabolic homeostasis and reduces obesity and insulin resistance.' Cell Metabolism, 21(3), 443-454. DOI: 10.1016/j.cmet.2015.02.009 | PMID: 25738459",
        "Kim, K. H., Son, J. M., Benayoun, B. A., et al. (2018). 'The Mitochondrial-Encoded Peptide MOTS-c Translocates to the Nucleus to Regulate Nuclear Gene Expression in Response to Metabolic Stress.' Cell Metabolism, 28(3), 516-524.e7. DOI: 10.1016/j.cmet.2018.06.008 | PMID: 29983246",
        "Reynolds, J. C., Lai, R. W., Woodhead, J. S. T., et al. (2021). 'MOTS-c is an exercise-induced mitochondrial-encoded regulator of age-dependent physical decline and muscle homeostasis.' Nature Communications, 12(1), 470. DOI: 10.1038/s41467-020-20790-0 | PMID: 33473109"
      ],
      formula: "C101H152N28O22S2",
      molarMass: "2174.6 g/mol (PubChem CID 146675088)",
      sequence: "Met-Arg-Trp-Gln-Glu-Met-Gly-Tyr-Ile-Phe-Tyr-Pro-Arg-Lys-Leu-Arg (16 residues; two methionines; encoded in mitochondrial DNA)",
      retentionTime: 6.7
    },
    es: {
      abstract: "MOTS-c es un péptido de 16 aminoácidos codificado dentro del genoma mitocondrial y no en el ADN nuclear, lo que lo sitúa entre un pequeño grupo de péptidos de origen mitocondrial. Lee y colaboradores lo describieron en 2015 y reportaron que actúa sobre el ciclo del folato y la metionina, y que la acumulación resultante del intermediario AICAR activa la proteína quinasa activada por AMP, desplazando el metabolismo celular hacia la utilización de glucosa. Kim y colaboradores reportaron después una segunda función distinta: bajo estrés metabólico el péptido se transloca al núcleo y participa en la regulación de la expresión de genes antioxidantes y metabólicos. Reynolds y colaboradores lo caracterizaron más tarde como sensible al ejercicio y vinculado al declive físico dependiente de la edad y a la homeostasis muscular. Actuar tanto en el citosol como en el núcleo es poco común para un péptido de este tamaño. Uso Exclusivo de Investigación (RUO).",
      mechanism: "MOTS-c opera por interferencia metabólica y no por unión a receptores. La investigación muestra que actúa sobre el ciclo de un carbono del folato y la metionina, y la consecuencia práctica es la acumulación del intermediario de biosíntesis de purinas AICAR. Como el AICAR es un activador bien establecido de la proteína quinasa activada por AMP, esta ruta indirecta converge en el mismo centro de detección de energía que activan el ejercicio y el estrés metabólico, desplazando a las células hacia la captación de glucosa y lejos del almacenamiento de lípidos. Ese es un mecanismo. El segundo es transcripcional y físicamente separado: Kim y colaboradores reportaron que el estrés metabólico impulsa al péptido hacia el núcleo, donde se asocia con factores de transcripción sensibles al estrés y regula programas génicos de respuesta antioxidante y metabólicos. Esta doble actividad citosólica y nuclear distingue a MOTS-c de SS-31, que actúa puramente sobre los lípidos de la membrana mitocondrial y nunca entra al núcleo.",
      benefits: [
        "**Activación de AMPK:** Lee y colaboradores (2015) reportan la activación de la proteína quinasa activada por AMP vía el ciclo del folato y la metionina, medida por inmunotransferencia de AMPK fosforilada en cultivos de miotubos y hepatocitos.",
        "**Ensayos de utilización de glucosa:** La investigación muestra una mayor captación de glucosa en modelos de células de músculo esquelético, cuantificada por captación de glucosa marcada junto con lecturas de sensibilidad a la insulina.",
        "**Estudios de translocación nuclear:** Kim y colaboradores (2018) describen el movimiento del péptido hacia el núcleo inducido por estrés, rastreable por fraccionamiento subcelular e inmunofluorescencia.",
        "**Biología de la respuesta al ejercicio:** Reynolds y colaboradores (2021) reportan que el péptido es inducido por el ejercicio y regula la homeostasis muscular, estudiado con protocolos de cinta y rueda en ratones.",
        "**Comparación entre péptidos de origen mitocondrial:** Los estudios indican un comportamiento distinto al de SS-31, que se une a lípidos de membrana y nunca entra al núcleo, lo que permite separar experimentalmente ambos mecanismos mitocondriales."
      ],
      citations: [
        "Lee, C., Zeng, J., Drew, B. G., et al. (2015). 'The mitochondrial-derived peptide MOTS-c promotes metabolic homeostasis and reduces obesity and insulin resistance.' Cell Metabolism, 21(3), 443-454. DOI: 10.1016/j.cmet.2015.02.009 | PMID: 25738459",
        "Kim, K. H., Son, J. M., Benayoun, B. A., et al. (2018). 'The Mitochondrial-Encoded Peptide MOTS-c Translocates to the Nucleus to Regulate Nuclear Gene Expression in Response to Metabolic Stress.' Cell Metabolism, 28(3), 516-524.e7. DOI: 10.1016/j.cmet.2018.06.008 | PMID: 29983246",
        "Reynolds, J. C., Lai, R. W., Woodhead, J. S. T., et al. (2021). 'MOTS-c is an exercise-induced mitochondrial-encoded regulator of age-dependent physical decline and muscle homeostasis.' Nature Communications, 12(1), 470. DOI: 10.1038/s41467-020-20790-0 | PMID: 33473109"
      ],
      formula: "C101H152N28O22S2",
      molarMass: "2174.6 g/mol (PubChem CID 146675088)",
      sequence: "Met-Arg-Trp-Gln-Glu-Met-Gly-Tyr-Ile-Phe-Tyr-Pro-Arg-Lys-Leu-Arg (16 residuos; dos metioninas; codificado en el ADN mitocondrial)",
      retentionTime: 6.7
    }
  },
  "melanotan-1-spray": {
    en: {
      abstract: "Melanotan-1, catalogued as afamelanotide, is a 13-residue synthetic analog of alpha-melanocyte-stimulating hormone that acts as a selective agonist at the melanocortin-1 receptor. Sawyer and colleagues reported the molecule in 1980 under the descriptive name 4-norleucine, 7-D-phenylalanine-alpha-melanocyte-stimulating hormone, documenting what they termed ultralong biological activity relative to the native hormone. Two substitutions account for that behaviour: norleucine replaces the oxidation-sensitive methionine at position four, and a D-configured phenylalanine at position seven both resists enzymatic cleavage and constrains the peptide into its bioactive conformation. Hruby and colleagues published complementary structure-function work the same year, and Wilkes and colleagues extended the analysis in 1984. The compound is markedly more receptor-selective than the later cyclic analog Melanotan-2. Research Use Only (RUO).",
      mechanism: "Melanotan-1 binds the melanocortin-1 receptor, a G protein-coupled receptor expressed on melanocytes, with pronounced selectivity over the other melanocortin receptor subtypes. Receptor activation couples to adenylyl cyclase, raising cAMP and activating protein kinase A. Protein kinase A phosphorylates the CREB transcription factor, which drives expression of microphthalmia-associated transcription factor, the master regulator of the melanocyte gene program. That factor in turn controls transcription of tyrosinase, the rate-limiting enzyme converting tyrosine into eumelanin. Research shows the two engineered substitutions determine the pharmacology: the norleucine removes an oxidation liability while the D-phenylalanine blocks proteolysis and stabilizes the active conformation. This selectivity is the sharpest contrast with Melanotan-2, a cyclic lactam analog whose activity extends across melanocortin-3 and melanocortin-4 receptors as well.",
      benefits: [
        "**Melanocortin-1 Receptor Selectivity:** Research shows pronounced selectivity for the melanocortin-1 subtype, resolved by running parallel cell lines expressing individual receptor subtypes in cAMP assays.",
        "**Tyrosinase and Melanin Assays:** Studies indicate increased tyrosinase activity and melanin content in cultured melanocytes and B16 melanoma cells, measured spectrophotometrically across a multi-day time course.",
        "**Structure-Activity Reference:** Sawyer and colleagues (1980) documented ultralong biological activity from two substitutions, making the molecule a standard teaching case in rational peptide design.",
        "**Comparative Melanocortin Pharmacology:** Laboratory investigations pair it with Melanotan-2 to separate selective melanocortin-1 signaling from the broader receptor engagement of the cyclic analog.",
        "**Proteolytic Stability Profiling:** Research shows the D-configured residue at position seven resists enzymatic cleavage, measurable by comparing degradation rates against the native hormone in a side-by-side assay."
      ],
      citations: [
        "Sawyer, T. K., Sanfilippo, P. J., Hruby, V. J., et al. (1980). '4-Norleucine, 7-D-phenylalanine-alpha-melanocyte-stimulating hormone: a highly potent alpha-melanotropin with ultralong biological activity.' PNAS, 77(10), 5754-5758. DOI: 10.1073/pnas.77.10.5754 | PMID: 6777774",
        "Hruby, V. J., Sawyer, T. K., Yang, Y. C., et al. (1980). 'Synthesis and structure-function studies of melanocyte stimulating hormone analogues modified in the 2 and 4(7) positions.' Journal of Medicinal Chemistry, 23(12), 1432-1437. DOI: 10.1021/jm00186a026 | PMID: 7452698",
        "Wilkes, B. C., Sawyer, T. K., Hruby, V. J., et al. (1984). 'Comparative biological activities of potent active-site analogues of alpha-melanotropin.' International Journal of Peptide and Protein Research, 23(6), 621-629. DOI: 10.1111/j.1399-3011.1984.tb03134.x | PMID: 6332085"
      ],
      formula: "C78H111N21O19",
      molarMass: "1646.8 g/mol (PubChem CID 16197727, afamelanotide)",
      sequence: "Ac-Ser-Tyr-Ser-Nle-Glu-His-D-Phe-Arg-Trp-Gly-Lys-Pro-Val-NH2 (13 residues; norleucine at position 4, D-phenylalanine at position 7, C-terminal amide)",
      retentionTime: 6.1
    },
    es: {
      abstract: "El Melanotan-1, catalogado como afamelanotida, es un análogo sintético de 13 residuos de la hormona estimulante de melanocitos alfa que actúa como agonista selectivo del receptor de melanocortina-1. Sawyer y colaboradores reportaron la molécula en 1980 bajo el nombre descriptivo 4-norleucina, 7-D-fenilalanina-hormona estimulante de melanocitos alfa, documentando lo que denominaron actividad biológica ultraprolongada respecto a la hormona nativa. Dos sustituciones explican ese comportamiento: la norleucina reemplaza a la metionina sensible a oxidación en la posición cuatro, y una fenilalanina en configuración D en la posición siete resiste la escisión enzimática y restringe al péptido en su conformación bioactiva. Hruby y colaboradores publicaron trabajo complementario de estructura-función el mismo año, y Wilkes y colaboradores ampliaron el análisis en 1984. El compuesto es marcadamente más selectivo que el análogo cíclico posterior Melanotan-2. Uso Exclusivo de Investigación (RUO).",
      mechanism: "El Melanotan-1 se une al receptor de melanocortina-1, un receptor acoplado a proteínas G expresado en los melanocitos, con marcada selectividad frente a los demás subtipos. La activación del receptor se acopla a la adenilato ciclasa, eleva el cAMP y activa la proteína quinasa A. Esta fosforila el factor de transcripción CREB, que impulsa la expresión del factor de transcripción asociado a microftalmía, el regulador maestro del programa génico del melanocito. Ese factor controla a su vez la transcripción de la tirosinasa, la enzima limitante que convierte la tirosina en eumelanina. La investigación muestra que las dos sustituciones de ingeniería determinan la farmacología: la norleucina elimina una vulnerabilidad de oxidación mientras que la D-fenilalanina bloquea la proteólisis y estabiliza la conformación activa. Esta selectividad es el contraste más nítido con el Melanotan-2, un análogo de lactama cíclica cuya actividad se extiende también a los receptores de melanocortina-3 y melanocortina-4.",
      benefits: [
        "**Selectividad por el receptor de melanocortina-1:** La investigación muestra una marcada selectividad por el subtipo melanocortina-1, resuelta al correr líneas celulares paralelas que expresan subtipos individuales en ensayos de cAMP.",
        "**Ensayos de tirosinasa y melanina:** Los estudios indican un aumento de la actividad de tirosinasa y del contenido de melanina en melanocitos en cultivo y células de melanoma B16, medidos por espectrofotometría a lo largo de varios días.",
        "**Referencia de estructura-actividad:** Sawyer y colaboradores (1980) documentaron una actividad biológica ultraprolongada a partir de dos sustituciones, lo que convierte a la molécula en un caso didáctico estándar de diseño racional de péptidos.",
        "**Farmacología comparativa de melanocortinas:** Las investigaciones de laboratorio la emparejan con el Melanotan-2 para separar la señalización selectiva de melanocortina-1 de la activación más amplia del análogo cíclico.",
        "**Perfilado de estabilidad proteolítica:** La investigación muestra que el residuo en configuración D de la posición siete resiste la escisión enzimática, medible al comparar velocidades de degradación frente a la hormona nativa en un ensayo paralelo."
      ],
      citations: [
        "Sawyer, T. K., Sanfilippo, P. J., Hruby, V. J., et al. (1980). '4-Norleucine, 7-D-phenylalanine-alpha-melanocyte-stimulating hormone: a highly potent alpha-melanotropin with ultralong biological activity.' PNAS, 77(10), 5754-5758. DOI: 10.1073/pnas.77.10.5754 | PMID: 6777774",
        "Hruby, V. J., Sawyer, T. K., Yang, Y. C., et al. (1980). 'Synthesis and structure-function studies of melanocyte stimulating hormone analogues modified in the 2 and 4(7) positions.' Journal of Medicinal Chemistry, 23(12), 1432-1437. DOI: 10.1021/jm00186a026 | PMID: 7452698",
        "Wilkes, B. C., Sawyer, T. K., Hruby, V. J., et al. (1984). 'Comparative biological activities of potent active-site analogues of alpha-melanotropin.' International Journal of Peptide and Protein Research, 23(6), 621-629. DOI: 10.1111/j.1399-3011.1984.tb03134.x | PMID: 6332085"
      ],
      formula: "C78H111N21O19",
      molarMass: "1646.8 g/mol (PubChem CID 16197727, afamelanotide)",
      sequence: "Ac-Ser-Tyr-Ser-Nle-Glu-His-D-Phe-Arg-Trp-Gly-Lys-Pro-Val-NH2 (13 residuos; norleucina en posición 4, D-fenilalanina en posición 7, amida C-terminal)",
      retentionTime: 6.1
    }
  },
  "ll-37-spray": {
    en: {
      abstract: "LL-37 is the only cathelicidin antimicrobial peptide produced by humans, a 37-residue sequence liberated from the precursor protein hCAP18 by proteolytic cleavage. Dürr, Sudheendra and Ramamoorthy reviewed its biology comprehensively in 2006, describing a peptide that is unstructured in aqueous solution and adopts an amphipathic helical fold only on contact with anionic membranes. That conditional folding underlies its selectivity: bacterial membranes present a negatively charged surface that the strongly cationic peptide engages, while mammalian membranes largely do not. Beyond direct membrane activity, laboratory investigations describe host-directed signaling through formyl peptide receptor 2 and direct neutralization of bacterial lipopolysaccharide. Yang and colleagues reported stimulation of adipose-derived stromal cells through early growth response 1 and MAPK signaling. Research Use Only (RUO).",
      mechanism: "LL-37 operates through two mechanisms that are worth keeping separate. The direct antimicrobial mechanism is biophysical: the peptide has no fixed structure in water, but contact with an anionic lipid surface drives it into an amphipathic helix in which hydrophobic and cationic faces segregate. It then accumulates on the membrane and permeabilizes it through a carpet-like disruption rather than by forming a discrete pore. Selectivity follows from electrostatics, since bacterial membranes expose anionic phospholipids while mammalian outer leaflets are largely zwitterionic. The second mechanism is receptor-mediated: research shows engagement of formyl peptide receptor 2 on leukocytes, producing chemotaxis and activation, and the peptide also binds bacterial lipopolysaccharide directly and neutralizes it. This combination of physical membrane activity and receptor signaling distinguishes LL-37 from smaller immune peptides such as KPV, which act only through signaling.",
      benefits: [
        "**Minimum Inhibitory Concentration Panels:** Research shows membrane-selective antimicrobial activity, quantified by standard broth microdilution against bacterial panels at low micromolar concentrations.",
        "**Conditional Folding Studies:** Laboratory investigations use circular dichroism to track the transition from unstructured to helical as anionic lipid vesicles are titrated in, demonstrating membrane-dependent folding.",
        "**Formyl Peptide Receptor Signaling:** Studies indicate leukocyte chemotaxis and activation through formyl peptide receptor 2, measurable in transwell migration assays.",
        "**Lipopolysaccharide Neutralization:** Research shows direct binding and neutralization of bacterial lipopolysaccharide, assessed by limulus amebocyte lysate assay and downstream cytokine readouts.",
        "**Stromal Cell Signaling:** Yang and colleagues (2016) report stimulation of adipose-derived stromal cells through early growth response 1 and MAPK pathway activation."
      ],
      citations: [
        "Dürr, U. H., Sudheendra, U. S., & Ramamoorthy, A. (2006). 'LL-37, the only human member of the cathelicidin family of antimicrobial peptides.' Biochimica et Biophysica Acta, 1758(9), 1408-1425. DOI: 10.1016/j.bbamem.2006.03.030 | PMID: 16716248",
        "Yang, Y., Choi, H., Seon, M., et al. (2016). 'LL-37 stimulates the functions of adipose-derived stromal/stem cells via early growth response 1 and the MAPK pathway.' Stem Cell Research & Therapy, 7(1), 58. DOI: 10.1186/s13287-016-0313-4 | PMID: 27095351",
        "Zielke, C., Rad, B., Nielsen, J. E., et al. (2026). 'Human cathelicidin peptide LL-37 compacts nucleic acids and alters neutrophil extracellular trap structure.' Scientific Reports, 16(1). DOI: 10.1038/s41598-026-48091-4 | PMID: 42156793"
      ],
      formula: "C205H340N60O53",
      molarMass: "4493 g/mol (PubChem CID 16198951)",
      sequence: "Leu-Leu-Gly-Asp-Phe-Phe-Arg-Lys-Ser-Lys-Glu-Lys-Ile-Gly-Lys-Glu-Phe-Lys-Arg-Ile-Val-Gln-Arg-Ile-Lys-Asp-Phe-Leu-Arg-Asn-Leu-Val-Pro-Arg-Thr-Glu-Ser (37 residues; strongly cationic; no cysteine)",
      retentionTime: 8.6
    },
    es: {
      abstract: "LL-37 es el único péptido antimicrobiano de tipo catelicidina que producen los humanos, una secuencia de 37 residuos liberada de la proteína precursora hCAP18 por corte proteolítico. Dürr, Sudheendra y Ramamoorthy revisaron su biología de forma exhaustiva en 2006, describiendo un péptido que carece de estructura en solución acuosa y que adopta un plegamiento helicoidal anfipático solo al contactar con membranas aniónicas. Ese plegamiento condicional explica su selectividad: las membranas bacterianas presentan una superficie cargada negativamente que el péptido fuertemente catiónico reconoce, mientras que las de mamífero en gran medida no. Más allá de la actividad directa sobre membranas, las investigaciones de laboratorio describen señalización dirigida al hospedador a través del receptor de péptidos formilados 2 y la neutralización directa del lipopolisacárido bacteriano. Yang y colaboradores reportaron la estimulación de células estromales derivadas de tejido adiposo mediante la respuesta de crecimiento temprano 1 y la señalización MAPK. Uso Exclusivo de Investigación (RUO).",
      mechanism: "LL-37 opera mediante dos mecanismos que conviene mantener separados. El mecanismo antimicrobiano directo es biofísico: el péptido no tiene estructura fija en agua, pero el contacto con una superficie lipídica aniónica lo impulsa a formar una hélice anfipática en la que las caras hidrofóbica y catiónica se segregan. Luego se acumula sobre la membrana y la permeabiliza mediante una alteración tipo alfombra en lugar de formar un poro discreto. La selectividad se deriva de la electrostática, ya que las membranas bacterianas exponen fosfolípidos aniónicos mientras que las capas externas de mamífero son en gran medida zwitteriónicas. El segundo mecanismo es mediado por receptor: la investigación muestra la activación del receptor de péptidos formilados 2 en leucocitos, con quimiotaxis y activación, y el péptido además se une al lipopolisacárido bacteriano y lo neutraliza. Esta combinación de actividad física sobre membranas y señalización por receptor distingue a LL-37 de péptidos inmunitarios menores como el KPV, que actúan únicamente por señalización.",
      benefits: [
        "**Paneles de concentración mínima inhibitoria:** La investigación muestra actividad antimicrobiana selectiva de membrana, cuantificada por microdilución en caldo estándar frente a paneles bacterianos a concentraciones micromolares bajas.",
        "**Estudios de plegamiento condicional:** Las investigaciones de laboratorio usan dicroísmo circular para seguir la transición de desestructurado a helicoidal al titular vesículas lipídicas aniónicas, demostrando un plegamiento dependiente de membrana.",
        "**Señalización por receptor de péptidos formilados:** Los estudios indican quimiotaxis y activación de leucocitos mediante el receptor de péptidos formilados 2, medible en ensayos de migración transwell.",
        "**Neutralización de lipopolisacárido:** La investigación muestra la unión y neutralización directa del lipopolisacárido bacteriano, evaluada por ensayo de lisado de amebocitos de limulus y lecturas de citoquinas.",
        "**Señalización en células estromales:** Yang y colaboradores (2016) reportan la estimulación de células estromales derivadas de tejido adiposo mediante la respuesta de crecimiento temprano 1 y la activación de la vía MAPK."
      ],
      citations: [
        "Dürr, U. H., Sudheendra, U. S., & Ramamoorthy, A. (2006). 'LL-37, the only human member of the cathelicidin family of antimicrobial peptides.' Biochimica et Biophysica Acta, 1758(9), 1408-1425. DOI: 10.1016/j.bbamem.2006.03.030 | PMID: 16716248",
        "Yang, Y., Choi, H., Seon, M., et al. (2016). 'LL-37 stimulates the functions of adipose-derived stromal/stem cells via early growth response 1 and the MAPK pathway.' Stem Cell Research & Therapy, 7(1), 58. DOI: 10.1186/s13287-016-0313-4 | PMID: 27095351",
        "Zielke, C., Rad, B., Nielsen, J. E., et al. (2026). 'Human cathelicidin peptide LL-37 compacts nucleic acids and alters neutrophil extracellular trap structure.' Scientific Reports, 16(1). DOI: 10.1038/s41598-026-48091-4 | PMID: 42156793"
      ],
      formula: "C205H340N60O53",
      molarMass: "4493 g/mol (PubChem CID 16198951)",
      sequence: "Leu-Leu-Gly-Asp-Phe-Phe-Arg-Lys-Ser-Lys-Glu-Lys-Ile-Gly-Lys-Glu-Phe-Lys-Arg-Ile-Val-Gln-Arg-Ile-Lys-Asp-Phe-Leu-Arg-Asn-Leu-Val-Pro-Arg-Thr-Glu-Ser (37 residuos; fuertemente catiónico; sin cisteína)",
      retentionTime: 8.6
    }
  },
  "lipo-c-spray": {
    en: {
      abstract: "Lipo-C is a three-component research blend combining methionine, inositol and choline, and unlike the defined peptides elsewhere in this catalog it has no single molecular target. Its components converge on hepatic phosphatidylcholine synthesis through two independent routes. Choline supplies the CDP-choline pathway directly, while methionine feeds the one-carbon cycle that produces S-adenosylmethionine, the methyl donor required to convert phosphatidylethanolamine into phosphatidylcholine. Van der Veen and colleagues reviewed both pathways and their metabolic consequences in 2017. The functional significance is that hepatic export of lipid as very-low-density lipoprotein depends on phosphatidylcholine availability, and Corbin and colleagues reported in 2013 that genetic variation in choline and one-carbon metabolism tracks with the severity of hepatic lipid accumulation. Inositol contributes separately to phosphoinositide signaling. Research Use Only (RUO).",
      mechanism: "This blend has no receptor and no enzyme target, which sets it apart from every other product in this catalog and should be stated rather than obscured. Its three components act as metabolic substrates. Choline enters the CDP-choline pathway as the direct precursor of phosphatidylcholine, the dominant membrane phospholipid and the one required for assembling and exporting very-low-density lipoprotein particles from the liver. Methionine feeds the one-carbon cycle that produces S-adenosylmethionine, which serves as the methyl donor for the alternative route in which phosphatidylethanolamine is methylated stepwise into phosphatidylcholine. Research shows these two routes are partly redundant, which is why the balance between them matters experimentally. Inositol operates on a separate axis entirely, supplying the backbone for phosphoinositide signaling lipids rather than contributing to phosphatidylcholine synthesis.",
      benefits: [
        "**Hepatic Lipid Export Studies:** Research shows very-low-density lipoprotein assembly depends on phosphatidylcholine availability, measurable by lipid droplet quantification in choline-restricted hepatocyte cultures.",
        "**Two-Pathway Separation:** Laboratory investigations use choline-restricted medium with selective component add-back to distinguish the direct CDP-choline route from the methylation route methionine supplies.",
        "**One-Carbon Metabolism:** Corbin and colleagues (2013) report that genetic variation in choline and one-carbon metabolism tracks with hepatic lipid accumulation severity, providing a defined experimental framework.",
        "**Phospholipid Pathway Mapping:** Van der Veen and colleagues (2017) reviewed phosphatidylcholine and phosphatidylethanolamine metabolism, giving labs the reference framework for interpreting blend effects.",
        "**Phosphoinositide Signaling:** Studies indicate inositol supplies the backbone for phosphoinositide second messengers, an axis measurable independently of the phosphatidylcholine routes."
      ],
      citations: [
        "Corbin, K. D., Abdelmalek, M. F., Spencer, M. D., et al. (2013). 'Genetic signatures in choline and 1-carbon metabolism are associated with the severity of hepatic steatosis.' FASEB Journal, 27(4), 1674-1689. DOI: 10.1096/fj.12-219097 | PMID: 23292069",
        "van der Veen, J. N., Kennelly, J. P., Wan, S., et al. (2017). 'The critical role of phosphatidylcholine and phosphatidylethanolamine metabolism in health and disease.' Biochimica et Biophysica Acta - Biomembranes, 1859(9 Pt B), 1558-1572. DOI: 10.1016/j.bbamem.2017.04.006 | PMID: 28411170",
        "Li, J., Xin, Y., Li, J., et al. (2023). 'Phosphatidylethanolamine N-methyltransferase: from Functions to Diseases.' Aging and Disease, 14(3), 879-891. DOI: 10.14336/AD.2022.1025 | PMID: 37191416"
      ],
      formula: "Blend — no single formula. Components: L-methionine C5H11NO2S, myo-inositol C6H12O6, choline C5H14NO+",
      molarMass: "Component masses: L-methionine 149.21 g/mol, myo-inositol 180.16 g/mol, choline 104.17 g/mol — confirm the blend ratio with manufacturer COA",
      sequence: "Not a peptide — a three-component blend of L-methionine, myo-inositol and choline. Verify exact composition and ratio with manufacturer COA",
      retentionTime: 1.8
    },
    es: {
      abstract: "Lipo-C es una mezcla de investigación de tres componentes que combina metionina, inositol y colina y que, a diferencia de los péptidos definidos del resto de este catálogo, no tiene una diana molecular única. Sus componentes convergen en la síntesis hepática de fosfatidilcolina por dos rutas independientes. La colina alimenta directamente la vía CDP-colina, mientras que la metionina nutre el ciclo de un carbono que produce S-adenosilmetionina, el donador de metilos necesario para convertir la fosfatidiletanolamina en fosfatidilcolina. Van der Veen y colaboradores revisaron ambas vías y sus consecuencias metabólicas en 2017. La relevancia funcional es que la exportación hepática de lípidos como lipoproteína de muy baja densidad depende de la disponibilidad de fosfatidilcolina, y Corbin y colaboradores reportaron en 2013 que la variación genética en el metabolismo de la colina y de un carbono se corresponde con la severidad de la acumulación lipídica hepática. El inositol contribuye por separado a la señalización de fosfoinosítidos. Uso Exclusivo de Investigación (RUO).",
      mechanism: "Esta mezcla no tiene receptor ni diana enzimática, lo que la separa de cualquier otro producto de este catálogo y conviene declararlo en lugar de ocultarlo. Sus tres componentes actúan como sustratos metabólicos. La colina entra en la vía CDP-colina como precursor directo de la fosfatidilcolina, el fosfolípido de membrana dominante y el requerido para ensamblar y exportar partículas de lipoproteína de muy baja densidad desde el hígado. La metionina alimenta el ciclo de un carbono que produce S-adenosilmetionina, que sirve como donador de metilos de la ruta alternativa en la que la fosfatidiletanolamina se metila de forma escalonada hasta fosfatidilcolina. La investigación muestra que ambas rutas son parcialmente redundantes, razón por la cual el equilibrio entre ellas importa experimentalmente. El inositol opera en un eje completamente distinto, aportando el esqueleto de los lípidos de señalización fosfoinosítidos en lugar de contribuir a la síntesis de fosfatidilcolina.",
      benefits: [
        "**Estudios de exportación lipídica hepática:** La investigación muestra que el ensamblaje de lipoproteína de muy baja densidad depende de la disponibilidad de fosfatidilcolina, medible por cuantificación de gotas lipídicas en cultivos de hepatocitos restringidos en colina.",
        "**Separación de las dos vías:** Las investigaciones de laboratorio usan medio restringido en colina con reincorporación selectiva de componentes para distinguir la ruta directa CDP-colina de la ruta de metilación que aporta la metionina.",
        "**Metabolismo de un carbono:** Corbin y colaboradores (2013) reportan que la variación genética en el metabolismo de la colina y de un carbono se corresponde con la severidad de la acumulación lipídica hepática, ofreciendo un marco experimental definido.",
        "**Mapeo de vías de fosfolípidos:** Van der Veen y colaboradores (2017) revisaron el metabolismo de fosfatidilcolina y fosfatidiletanolamina, dando a los laboratorios el marco de referencia para interpretar los efectos de la mezcla.",
        "**Señalización de fosfoinosítidos:** Los estudios indican que el inositol aporta el esqueleto de los segundos mensajeros fosfoinosítidos, un eje medible de forma independiente de las rutas de fosfatidilcolina."
      ],
      citations: [
        "Corbin, K. D., Abdelmalek, M. F., Spencer, M. D., et al. (2013). 'Genetic signatures in choline and 1-carbon metabolism are associated with the severity of hepatic steatosis.' FASEB Journal, 27(4), 1674-1689. DOI: 10.1096/fj.12-219097 | PMID: 23292069",
        "van der Veen, J. N., Kennelly, J. P., Wan, S., et al. (2017). 'The critical role of phosphatidylcholine and phosphatidylethanolamine metabolism in health and disease.' Biochimica et Biophysica Acta - Biomembranes, 1859(9 Pt B), 1558-1572. DOI: 10.1016/j.bbamem.2017.04.006 | PMID: 28411170",
        "Li, J., Xin, Y., Li, J., et al. (2023). 'Phosphatidylethanolamine N-methyltransferase: from Functions to Diseases.' Aging and Disease, 14(3), 879-891. DOI: 10.14336/AD.2022.1025 | PMID: 37191416"
      ],
      formula: "Blend — no single formula. Components: L-methionine C5H11NO2S, myo-inositol C6H12O6, choline C5H14NO+",
      molarMass: "Component masses: L-methionine 149.21 g/mol, myo-inositol 180.16 g/mol, choline 104.17 g/mol — confirm the blend ratio with manufacturer COA",
      sequence: "No es un péptido — mezcla de tres componentes: L-metionina, mio-inositol y colina. Verifique la composición exacta y la proporción con el COA del fabricante",
      retentionTime: 1.8
    }
  },
  "l-carnitine-spray": {
    en: {
      abstract: "L-Carnitine is a small zwitterionic quaternary ammonium compound that functions as the obligatory carrier in mitochondrial fatty acid transport rather than as a signaling molecule. Long-chain fatty acyl groups cannot traverse the inner mitochondrial membrane bound to coenzyme A; carnitine palmitoyltransferase 1 exchanges the coenzyme A for carnitine, the resulting acylcarnitine crosses through a dedicated translocase, and carnitine palmitoyltransferase 2 restores the coenzyme A thioester so beta-oxidation can proceed. Longo and colleagues reviewed this transport system and the genetic disorders that disrupt it, establishing acylcarnitine profiling as the standard analytical readout. Because carnitine palmitoyltransferase 1 is the rate-limiting step and is inhibited by malonyl-CoA, the system links fatty acid synthesis and oxidation directly. Research Use Only (RUO).",
      mechanism: "L-Carnitine operates as a substrate and shuttle carrier, not a ligand, which sets it apart from every peptide in this catalog. The pathway runs in three steps. Carnitine palmitoyltransferase 1, embedded in the outer mitochondrial membrane, transfers a long-chain fatty acyl group from coenzyme A onto carnitine, forming an acylcarnitine. The carnitine-acylcarnitine translocase then exchanges that acylcarnitine into the matrix against an outbound free carnitine. Finally carnitine palmitoyltransferase 2 on the inner membrane transfers the acyl group back onto matrix coenzyme A, releasing carnitine for reuse and delivering the substrate to beta-oxidation. Research shows carnitine palmitoyltransferase 1 governs flux through the entire pathway and is allosterically inhibited by malonyl-CoA, the committed intermediate of fatty acid synthesis. Carnitine additionally buffers the acyl-CoA to free coenzyme A ratio by exporting surplus acyl groups as acylcarnitines.",
      benefits: [
        "**Fatty Acid Oxidation Flux:** Research shows beta-oxidation of long-chain substrates stalls without carnitine, measurable by labelled palmitate oxidation in isolated mitochondria or cultured hepatocytes.",
        "**Acylcarnitine Profiling:** Studies indicate the accumulating acylcarnitine species pinpoint where a block sits in the oxidation chain, quantified by tandem mass spectrometry as the standard readout.",
        "**Carnitine Palmitoyltransferase Assays:** Laboratory investigations use it as the acyl acceptor in direct enzyme assays measuring the rate-limiting transferase activity.",
        "**Coenzyme A Buffering:** Research shows surplus acyl groups are exported as acylcarnitines, allowing the acyl-CoA to free coenzyme A ratio to be manipulated experimentally.",
        "**Transport System Studies:** Longo and colleagues characterized the carnitine transporter and cycle, providing the framework labs use when studying uptake and distribution in cell models."
      ],
      citations: [
        "Longo, N., Frigeni, M., & Pasquali, M. (2016). 'Carnitine transport and fatty acid oxidation.' Biochimica et Biophysica Acta - Molecular Cell Research, 1863(10), 2422-2435. DOI: 10.1016/j.bbamcr.2016.01.023 | PMID: 26828774",
        "Longo, N., Amat di San Filippo, C., & Pasquali, M. (2006). 'Disorders of carnitine transport and the carnitine cycle.' American Journal of Medical Genetics Part C, 142C(2), 77-85. DOI: 10.1002/ajmg.c.30087 | PMID: 16602102",
        "Amat di San Filippo, C., Pasquali, M., & Longo, N. (2006). 'Pharmacological rescue of carnitine transport in primary carnitine deficiency.' Human Mutation, 27(6), 513-523. DOI: 10.1002/humu.20314 | PMID: 16652335"
      ],
      formula: "C7H15NO3",
      molarMass: "161.20 g/mol (PubChem CID 10917)",
      sequence: "Small Molecule — quaternary ammonium zwitterion (3-hydroxy-4-trimethylammonio-butanoate); not a peptide",
      retentionTime: 1.4
    },
    es: {
      abstract: "La L-carnitina es un pequeño compuesto de amonio cuaternario zwitteriónico que funciona como transportador obligado en el transporte mitocondrial de ácidos grasos y no como molécula de señalización. Los grupos acilo de cadena larga no pueden atravesar la membrana mitocondrial interna unidos a coenzima A; la carnitina palmitoiltransferasa 1 intercambia la coenzima A por carnitina, la acilcarnitina resultante cruza por una translocasa dedicada, y la carnitina palmitoiltransferasa 2 restaura el tioéster de coenzima A para que proceda la beta-oxidación. Longo y colaboradores revisaron este sistema y los trastornos genéticos que lo alteran, estableciendo el perfilado de acilcarnitinas como lectura analítica estándar. Como la carnitina palmitoiltransferasa 1 es el paso limitante y se inhibe con malonil-CoA, el sistema enlaza directamente la síntesis y la oxidación de ácidos grasos. Uso Exclusivo de Investigación (RUO).",
      mechanism: "La L-carnitina opera como sustrato y transportador, no como ligando, lo que la separa de todos los péptidos de este catálogo. La vía transcurre en tres pasos. La carnitina palmitoiltransferasa 1, insertada en la membrana mitocondrial externa, transfiere un grupo acilo de cadena larga desde la coenzima A a la carnitina y forma una acilcarnitina. La translocasa de carnitina-acilcarnitina intercambia entonces esa acilcarnitina hacia la matriz contra una carnitina libre saliente. Finalmente la carnitina palmitoiltransferasa 2 de la membrana interna devuelve el grupo acilo a la coenzima A de la matriz, liberando carnitina para su reutilización y entregando el sustrato a la beta-oxidación. La investigación muestra que la carnitina palmitoiltransferasa 1 gobierna el flujo de toda la vía y se inhibe alostéricamente con malonil-CoA, el intermediario comprometido de la síntesis de ácidos grasos. La carnitina además amortigua la relación acil-CoA a coenzima A libre exportando el excedente como acilcarnitinas.",
      benefits: [
        "**Flujo de oxidación de ácidos grasos:** La investigación muestra que la beta-oxidación de sustratos de cadena larga se detiene sin carnitina, medible por oxidación de palmitato marcado en mitocondrias aisladas o hepatocitos en cultivo.",
        "**Perfilado de acilcarnitinas:** Los estudios indican que las especies de acilcarnitina que se acumulan señalan dónde está el bloqueo en la cadena de oxidación, cuantificadas por espectrometría de masas en tándem como lectura estándar.",
        "**Ensayos de carnitina palmitoiltransferasa:** Las investigaciones de laboratorio la emplean como aceptor de acilo en ensayos enzimáticos directos que miden la actividad de la transferasa limitante.",
        "**Amortiguación de coenzima A:** La investigación muestra que el excedente de grupos acilo se exporta como acilcarnitinas, lo que permite manipular experimentalmente la relación acil-CoA a coenzima A libre.",
        "**Estudios del sistema de transporte:** Longo y colaboradores caracterizaron el transportador y el ciclo de la carnitina, aportando el marco que los laboratorios usan al estudiar captación y distribución en modelos celulares."
      ],
      citations: [
        "Longo, N., Frigeni, M., & Pasquali, M. (2016). 'Carnitine transport and fatty acid oxidation.' Biochimica et Biophysica Acta - Molecular Cell Research, 1863(10), 2422-2435. DOI: 10.1016/j.bbamcr.2016.01.023 | PMID: 26828774",
        "Longo, N., Amat di San Filippo, C., & Pasquali, M. (2006). 'Disorders of carnitine transport and the carnitine cycle.' American Journal of Medical Genetics Part C, 142C(2), 77-85. DOI: 10.1002/ajmg.c.30087 | PMID: 16602102",
        "Amat di San Filippo, C., Pasquali, M., & Longo, N. (2006). 'Pharmacological rescue of carnitine transport in primary carnitine deficiency.' Human Mutation, 27(6), 513-523. DOI: 10.1002/humu.20314 | PMID: 16652335"
      ],
      formula: "C7H15NO3",
      molarMass: "161.20 g/mol (PubChem CID 10917)",
      sequence: "Molécula pequeña — zwitterión de amonio cuaternario (3-hidroxi-4-trimetilamonio-butanoato); no es un péptido",
      retentionTime: 1.4
    }
  },
  "klow-spray": {
    en: {
      abstract: "KLOW is a four-component research blend combining a copper-binding tripeptide, a stable gastric pentadecapeptide, an actin-sequestering thymic peptide, and the C-terminal tripeptide of alpha-melanocyte-stimulating hormone. Unlike the defined single compounds elsewhere in this catalog it has no unified molecular target; each component acts through its own pathway. Pickart and Margolina reviewed the copper tripeptide gene expression data, Malinda and colleagues established the actin-binding component as a driver of endothelial migration, and Xiao and colleagues documented the anti-inflammatory tripeptide in mucosal models. The blend differs from the GLOW formulation by the addition of that anti-inflammatory tripeptide alone, which makes the two a natural experimental pair. Composition and ratio should be confirmed against the manufacturer certificate. Research Use Only (RUO).",
      mechanism: "This blend engages four separate pathways, and none of them overlap. The copper tripeptide coordinates a copper ion in a square-planar geometry and is studied for broad effects on matrix gene expression, collagen and glycosaminoglycan synthesis in fibroblast models. The pentadecapeptide component is studied around angiogenic signaling and nitric oxide pathways in vascular and gastrointestinal models. The actin-binding component works structurally rather than through any receptor, holding monomeric actin in an unpolymerized pool and thereby governing how quickly cells remodel their cytoskeleton and migrate. The fourth component, a tripeptide corresponding to the C-terminus of alpha-melanocyte-stimulating hormone, is studied for suppression of inflammatory transcription. Research shows the copper component depends on retaining its metal centre, which is why demetallation is a stability concern here and nowhere else in the catalog.",
      benefits: [
        "**Component Deconvolution:** Laboratory investigations run the blend alongside each isolated component in adjacent wells, the only design that establishes which of the four arms produced a given effect.",
        "**Matrix Remodeling Assays:** Research shows the copper tripeptide arm influences collagen and glycosaminoglycan expression in fibroblast culture, assessed by immunoblot and quantitative PCR.",
        "**Cell Migration Studies:** Malinda and colleagues (1997) established the actin-binding component as a driver of directional endothelial migration, measured in scratch-wound and Boyden chamber formats.",
        "**Inflammatory Transcription:** Xiao and colleagues (2017) documented the anti-inflammatory tripeptide in mucosal models, with cytokine panels as the standard readout.",
        "**KLOW Versus GLOW Comparison:** Studies indicate the two blends differ by exactly one component, making the pair the cleanest way to isolate what the anti-inflammatory arm contributes."
      ],
      citations: [
        "Pickart, L., & Margolina, A. (2018). 'Regenerative and Protective Actions of the GHK-Cu Peptide in the Light of the New Gene Data.' International Journal of Molecular Sciences, 19(7), 1987. DOI: 10.3390/ijms19071987 | PMID: 29986520",
        "Malinda, K. M., Goldstein, A. L., & Kleinman, H. K. (1997). 'Thymosin beta 4 stimulates directional migration of human umbilical vein endothelial cells.' FASEB Journal, 11(6), 474-481. DOI: 10.1096/fasebj.11.6.9194528 | PMID: 9194528",
        "Xiao, B., Xu, Z., Viennois, E., et al. (2017). 'Orally Targeted Delivery of Tripeptide KPV via Hyaluronic Acid-Functionalized Nanoparticles Efficiently Alleviates Ulcerative Colitis.' Molecular Therapy, 25(7), 1628-1640. DOI: 10.1016/j.ymthe.2016.11.020 | PMID: 28143741"
      ],
      formula: "Blend — no single formula applies; four peptide components including one copper-coordinated tripeptide",
      molarMass: "Not applicable to a blend — confirm component identities, individual masses and ratio with manufacturer COA",
      sequence: "Four-component peptide blend, typically a copper tripeptide with pentadecapeptide, actin-binding and anti-inflammatory tripeptide components — verify exact composition and ratio with manufacturer COA",
      retentionTime: 5.5
    },
    es: {
      abstract: "KLOW es una mezcla de investigación de cuatro componentes que combina un tripéptido que une cobre, un pentadecapéptido gástrico estable, un péptido tímico que secuestra actina, y el tripéptido C-terminal de la hormona estimulante de melanocitos alfa. A diferencia de los compuestos únicos definidos del resto del catálogo, no tiene una diana molecular unificada; cada componente actúa por su propia vía. Pickart y Margolina revisaron los datos de expresión génica del tripéptido de cobre, Malinda y colaboradores establecieron el componente que une actina como impulsor de la migración endotelial, y Xiao y colaboradores documentaron el tripéptido antiinflamatorio en modelos de mucosa. La mezcla difiere de la formulación GLOW únicamente por la adición de ese tripéptido antiinflamatorio, lo que convierte a ambas en una pareja experimental natural. La composición y la proporción deben confirmarse con el certificado del fabricante. Uso Exclusivo de Investigación (RUO).",
      mechanism: "Esta mezcla activa cuatro vías separadas, y ninguna se solapa. El tripéptido de cobre coordina un ion de cobre en geometría plano-cuadrada y se estudia por efectos amplios sobre la expresión génica de matriz y la síntesis de colágeno y glicosaminoglicanos en modelos de fibroblastos. El componente pentadecapéptido se estudia en torno a la señalización angiogénica y las vías del óxido nítrico en modelos vasculares y gastrointestinales. El componente que une actina actúa estructuralmente y no por receptor, manteniendo actina monomérica en un depósito no polimerizado y gobernando así la velocidad con que las células remodelan su citoesqueleto y migran. El cuarto componente, un tripéptido correspondiente al extremo C-terminal de la hormona estimulante de melanocitos alfa, se estudia por la supresión de la transcripción inflamatoria. La investigación muestra que el componente de cobre depende de conservar su centro metálico, razón por la cual la desmetalación es una preocupación de estabilidad aquí y en ningún otro punto del catálogo.",
      benefits: [
        "**Deconvolución de componentes:** Las investigaciones de laboratorio corren la mezcla junto a cada componente aislado en pozos contiguos, el único diseño que establece cuál de los cuatro brazos produjo un efecto dado.",
        "**Ensayos de remodelación de matriz:** La investigación muestra que el brazo del tripéptido de cobre influye en la expresión de colágeno y glicosaminoglicanos en cultivo de fibroblastos, evaluada por inmunotransferencia y PCR cuantitativa.",
        "**Estudios de migración celular:** Malinda y colaboradores (1997) establecieron el componente que une actina como impulsor de la migración endotelial direccional, medida en formatos de herida por raspado y cámara de Boyden.",
        "**Transcripción inflamatoria:** Xiao y colaboradores (2017) documentaron el tripéptido antiinflamatorio en modelos de mucosa, con paneles de citoquinas como lectura estándar.",
        "**Comparación KLOW frente a GLOW:** Los estudios indican que ambas mezclas difieren en exactamente un componente, lo que convierte a la pareja en la forma más limpia de aislar la contribución del brazo antiinflamatorio."
      ],
      citations: [
        "Pickart, L., & Margolina, A. (2018). 'Regenerative and Protective Actions of the GHK-Cu Peptide in the Light of the New Gene Data.' International Journal of Molecular Sciences, 19(7), 1987. DOI: 10.3390/ijms19071987 | PMID: 29986520",
        "Malinda, K. M., Goldstein, A. L., & Kleinman, H. K. (1997). 'Thymosin beta 4 stimulates directional migration of human umbilical vein endothelial cells.' FASEB Journal, 11(6), 474-481. DOI: 10.1096/fasebj.11.6.9194528 | PMID: 9194528",
        "Xiao, B., Xu, Z., Viennois, E., et al. (2017). 'Orally Targeted Delivery of Tripeptide KPV via Hyaluronic Acid-Functionalized Nanoparticles Efficiently Alleviates Ulcerative Colitis.' Molecular Therapy, 25(7), 1628-1640. DOI: 10.1016/j.ymthe.2016.11.020 | PMID: 28143741"
      ],
      formula: "Blend — no single formula applies; four peptide components including one copper-coordinated tripeptide",
      molarMass: "Not applicable to a blend — confirm component identities, individual masses and ratio with manufacturer COA",
      sequence: "Mezcla peptídica de cuatro componentes, típicamente un tripéptido de cobre con componentes pentadecapéptido, de unión a actina y tripéptido antiinflamatorio — verifique la composición exacta y la proporción con el COA del fabricante",
      retentionTime: 5.5
    }
  },
  "kisspeptin-spray": {
    en: {
      abstract: "Kisspeptin-10 is the C-terminal decapeptide of the larger kisspeptin precursor and the minimal fragment that fully activates KISS1R, a G protein-coupled receptor originally catalogued as an orphan. Kotani and colleagues reported in 2001 that kisspeptins are the natural ligands of that receptor, resolving its orphan status. Two independent groups subsequently established the physiological stakes: de Roux and colleagues and Seminara and colleagues both showed in 2003 that loss-of-function of the receptor prevents normal onset of puberty, placing kisspeptin signaling at the top of the reproductive axis. The peptide belongs to the RF-amide family, and its C-terminal amide is required for receptor activation. Because it acts upstream of gonadotropin-releasing hormone, it distinguishes hypothalamic from pituitary signaling. Research Use Only (RUO).",
      mechanism: "Kisspeptin-10 binds KISS1R on hypothalamic neurons and signals through Gq rather than Gs, which distinguishes its assay behaviour from most peptides in this catalog. Receptor activation stimulates phospholipase C, which cleaves membrane phosphoinositides into inositol trisphosphate and diacylglycerol. Inositol trisphosphate releases calcium from intracellular stores while diacylglycerol activates protein kinase C, and the combined effect depolarizes the neuron and triggers release of gonadotropin-releasing hormone. That released hormone then drives pituitary gonadotropin output, so kisspeptin sits one hierarchical level above the classical reproductive axis rather than within it. Research shows the C-terminal amide characteristic of the RF-amide family is required for receptor engagement, and studies indicate the decapeptide retains the full activity of the longer parent sequence.",
      benefits: [
        "**Calcium Mobilization Assays:** Research shows Gq-coupled signaling in cells stably expressing KISS1R, measured by intracellular calcium flux rather than the cAMP readout most catalog peptides require.",
        "**Hypothalamic Explant Models:** Studies indicate gonadotropin-releasing hormone release into the medium from hypothalamic explant and slice preparations following receptor activation.",
        "**Axis Localization Testing:** Laboratory investigations compare a kisspeptin challenge against a direct GnRH challenge, the design that separates a hypothalamic signaling defect from a pituitary one.",
        "**Receptor Deorphanization Reference:** Kotani and colleagues (2001) identified kisspeptins as the natural ligands of the previously orphan receptor, making this the reference agonist for the target.",
        "**Puberty Onset Genetics:** de Roux and Seminara and colleagues (2003) independently reported that loss of receptor function prevents normal puberty, providing the genetic framework for interpreting signaling studies."
      ],
      citations: [
        "Kotani, M., Detheux, M., Vandenbogaerde, A., et al. (2001). 'The metastasis suppressor gene KiSS-1 encodes kisspeptins, the natural ligands of the orphan G protein-coupled receptor GPR54.' Journal of Biological Chemistry, 276(37), 34631-34636. DOI: 10.1074/jbc.M104847200 | PMID: 11457843",
        "de Roux, N., Genin, E., Carel, J. C., et al. (2003). 'Hypogonadotropic hypogonadism due to loss of function of the KiSS1-derived peptide receptor GPR54.' PNAS, 100(19), 10972-10976. DOI: 10.1073/pnas.1834399100 | PMID: 12944565",
        "Seminara, S. B., Messager, S., Chatzidaki, E. E., et al. (2003). 'The GPR54 gene as a regulator of puberty.' New England Journal of Medicine, 349(17), 1614-1627. DOI: 10.1056/NEJMoa035322 | PMID: 14573733"
      ],
      formula: "C63H83N17O14",
      molarMass: "1302.4 g/mol (PubChem CID 25240297)",
      sequence: "Tyr-Asn-Trp-Asn-Ser-Phe-Gly-Leu-Arg-Phe-NH2 (10 residues, C-terminal amide required for activity; RF-amide family)",
      retentionTime: 6.9
    },
    es: {
      abstract: "La kisspeptina-10 es el decapéptido C-terminal del precursor mayor de kisspeptina y el fragmento mínimo que activa plenamente KISS1R, un receptor acoplado a proteínas G catalogado originalmente como huérfano. Kotani y colaboradores reportaron en 2001 que las kisspeptinas son los ligandos naturales de ese receptor, resolviendo su condición de huérfano. Dos grupos independientes establecieron después lo que estaba en juego fisiológicamente: de Roux y colaboradores y Seminara y colaboradores mostraron en 2003 que la pérdida de función del receptor impide el inicio normal de la pubertad, situando la señalización por kisspeptina en la cúspide del eje reproductivo. El péptido pertenece a la familia RF-amida y su amida C-terminal es necesaria para la activación del receptor. Como actúa corriente arriba de la hormona liberadora de gonadotropinas, distingue la señalización hipotalámica de la hipofisaria. Uso Exclusivo de Investigación (RUO).",
      mechanism: "La kisspeptina-10 se une a KISS1R en neuronas hipotalámicas y señaliza vía Gq y no Gs, lo que distingue su comportamiento en ensayos del de la mayoría de los péptidos de este catálogo. La activación del receptor estimula la fosfolipasa C, que escinde fosfoinosítidos de membrana en inositol trifosfato y diacilglicerol. El inositol trifosfato libera calcio de los depósitos intracelulares mientras el diacilglicerol activa la proteína quinasa C, y el efecto combinado despolariza la neurona y desencadena la liberación de hormona liberadora de gonadotropinas. Esa hormona impulsa entonces la producción hipofisaria de gonadotropinas, de modo que la kisspeptina se sitúa un nivel jerárquico por encima del eje reproductivo clásico y no dentro de él. La investigación muestra que la amida C-terminal característica de la familia RF-amida es necesaria para activar el receptor, y los estudios indican que el decapéptido conserva toda la actividad de la secuencia madre más larga.",
      benefits: [
        "**Ensayos de movilización de calcio:** La investigación muestra señalización acoplada a Gq en células que expresan de forma estable KISS1R, medida por flujo de calcio intracelular y no por la lectura de cAMP que requieren la mayoría de los péptidos del catálogo.",
        "**Modelos de explante hipotalámico:** Los estudios indican la liberación de hormona liberadora de gonadotropinas al medio desde preparaciones de explante y rebanada hipotalámica tras la activación del receptor.",
        "**Localización del defecto en el eje:** Las investigaciones de laboratorio comparan un desafío con kisspeptina frente a uno directo con GnRH, el diseño que separa un defecto hipotalámico de uno hipofisario.",
        "**Referencia de desorfanización del receptor:** Kotani y colaboradores (2001) identificaron las kisspeptinas como los ligandos naturales del receptor previamente huérfano, lo que convierte a este en el agonista de referencia de la diana.",
        "**Genética del inicio puberal:** de Roux y Seminara y colaboradores (2003) reportaron de forma independiente que la pérdida de función del receptor impide la pubertad normal, aportando el marco genético para interpretar los estudios de señalización."
      ],
      citations: [
        "Kotani, M., Detheux, M., Vandenbogaerde, A., et al. (2001). 'The metastasis suppressor gene KiSS-1 encodes kisspeptins, the natural ligands of the orphan G protein-coupled receptor GPR54.' Journal of Biological Chemistry, 276(37), 34631-34636. DOI: 10.1074/jbc.M104847200 | PMID: 11457843",
        "de Roux, N., Genin, E., Carel, J. C., et al. (2003). 'Hypogonadotropic hypogonadism due to loss of function of the KiSS1-derived peptide receptor GPR54.' PNAS, 100(19), 10972-10976. DOI: 10.1073/pnas.1834399100 | PMID: 12944565",
        "Seminara, S. B., Messager, S., Chatzidaki, E. E., et al. (2003). 'The GPR54 gene as a regulator of puberty.' New England Journal of Medicine, 349(17), 1614-1627. DOI: 10.1056/NEJMoa035322 | PMID: 14573733"
      ],
      formula: "C63H83N17O14",
      molarMass: "1302.4 g/mol (PubChem CID 25240297)",
      sequence: "Tyr-Asn-Trp-Asn-Ser-Phe-Gly-Leu-Arg-Phe-NH2 (10 residuos, amida C-terminal necesaria para la actividad; familia RF-amida)",
      retentionTime: 6.9
    }
  },
  "ipamorelin-spray": {
    en: {
      abstract: "Ipamorelin is a synthetic pentapeptide agonist at the ghrelin receptor, first described by Raun and colleagues in 1998 under the designation of the first selective growth hormone secretagogue. Its significance is comparative rather than novel: earlier secretagogues such as GHRP-6 released growth hormone but simultaneously elevated corticotropin, cortisol and prolactin, whereas Ipamorelin produced growth hormone release in laboratory models without that accompanying response. The receptor it targets was itself cloned by Howard and colleagues in 1996, following pharmacological work by Bowers and colleagues on the earlier hexapeptides. The molecule incorporates two D-configured residues and a naphthylalanine that does not occur in natural proteins, features that confer resistance to peptidase attack. Research Use Only (RUO).",
      mechanism: "Ipamorelin activates the ghrelin receptor on pituitary somatotroph cells, and the signaling route is calcium-driven rather than cAMP-driven. Receptor engagement couples through Gq to phospholipase C, which cleaves membrane phosphoinositides into inositol trisphosphate and diacylglycerol. Inositol trisphosphate releases calcium from intracellular stores, and the resulting calcium transient triggers fusion of growth hormone secretory vesicles with the plasma membrane. Research shows this mechanism is entirely separate from the GHRH receptor route used by Sermorelin and Tesamorelin, which is why the two classes can be run as controls for one another in the same experiment. What distinguishes Ipamorelin within the ghrelin receptor class is selectivity of downstream output: laboratory investigations report growth hormone release without the corticotropin, cortisol and prolactin elevation characteristic of GHRP-6.",
      benefits: [
        "**Secretagogue Selectivity Panels:** Raun and colleagues (1998) report growth hormone release without the corticotropin, cortisol and prolactin response GHRP-6 produces, measured in the same samples.",
        "**Calcium Mobilization Assays:** Research shows Gq-coupled signaling in cells stably expressing the ghrelin receptor, read as intracellular calcium flux rather than cAMP accumulation.",
        "**Cross-Class Mechanism Controls:** Laboratory investigations pair it with Sermorelin or Tesamorelin to separate the calcium-driven ghrelin route from the cAMP-driven GHRH route in one experiment.",
        "**Growth Hormone Release Assays:** Studies indicate increased growth hormone secretion into culture medium, quantified by immunoassay in primary rat pituitary cell preparations.",
        "**Peptidase Stability Profiling:** Research shows the two D-configured residues confer resistance to enzymatic cleavage, measurable by comparing degradation rates against an all-L analog."
      ],
      citations: [
        "Raun, K., Hansen, B. S., Johansen, N. L., et al. (1998). 'Ipamorelin, the first selective growth hormone secretagogue.' European Journal of Endocrinology, 139(5), 552-561. DOI: 10.1530/eje.0.1390552 | PMID: 9849822",
        "Howard, A. D., Feighner, S. D., Cully, D. F., et al. (1996). 'A receptor in pituitary and hypothalamus that functions in growth hormone release.' Science, 273(5277), 974-977. DOI: 10.1126/science.273.5277.974 | PMID: 8688086",
        "Bowers, C. Y., Sartor, A. O., Reynolds, G. A., et al. (1991). 'On the actions of the growth hormone-releasing hexapeptide, GHRP.' Endocrinology, 128(4), 2027-2035. DOI: 10.1210/endo-128-4-2027 | PMID: 2004615"
      ],
      formula: "C38H49N9O5",
      molarMass: "711.9 g/mol (PubChem CID 9831659)",
      sequence: "Aib-His-D-2-Nal-D-Phe-Lys-NH2 (5 residues; two D-configured residues plus 2-naphthylalanine, C-terminal amide)",
      retentionTime: 5.2
    },
    es: {
      abstract: "La ipamorelina es un pentapéptido sintético agonista del receptor de grelina, descrito por primera vez por Raun y colaboradores en 1998 como el primer secretagogo selectivo de hormona del crecimiento. Su relevancia es comparativa más que novedosa: secretagogos anteriores como el GHRP-6 liberaban hormona del crecimiento pero elevaban simultáneamente corticotropina, cortisol y prolactina, mientras que la ipamorelina produjo liberación de hormona del crecimiento en modelos de laboratorio sin esa respuesta acompañante. El receptor que activa fue clonado por Howard y colaboradores en 1996, tras el trabajo farmacológico de Bowers y colaboradores sobre los hexapéptidos anteriores. La molécula incorpora dos residuos en configuración D y una naftilalanina que no aparece en proteínas naturales, rasgos que le confieren resistencia al ataque de peptidasas. Uso Exclusivo de Investigación (RUO).",
      mechanism: "La ipamorelina activa el receptor de grelina en las células somatotropas hipofisarias, y la ruta de señalización es impulsada por calcio y no por cAMP. La interacción con el receptor se acopla vía Gq a la fosfolipasa C, que escinde fosfoinosítidos de membrana en inositol trifosfato y diacilglicerol. El inositol trifosfato libera calcio de los depósitos intracelulares, y el transitorio de calcio resultante desencadena la fusión de las vesículas secretoras de hormona del crecimiento con la membrana plasmática. La investigación muestra que este mecanismo es completamente distinto de la ruta del receptor de GHRH que usan la sermorelina y la tesamorelina, razón por la cual ambas clases pueden correrse como controles mutuos en el mismo experimento. Lo que distingue a la ipamorelina dentro de la clase del receptor de grelina es la selectividad de su producción secundaria: las investigaciones de laboratorio reportan liberación de hormona del crecimiento sin la elevación de corticotropina, cortisol y prolactina característica del GHRP-6.",
      benefits: [
        "**Paneles de selectividad de secretagogos:** Raun y colaboradores (1998) reportan liberación de hormona del crecimiento sin la respuesta de corticotropina, cortisol y prolactina que produce el GHRP-6, medida en las mismas muestras.",
        "**Ensayos de movilización de calcio:** La investigación muestra señalización acoplada a Gq en células que expresan de forma estable el receptor de grelina, leída como flujo de calcio intracelular y no como acumulación de cAMP.",
        "**Controles mecanísticos entre clases:** Las investigaciones de laboratorio la emparejan con sermorelina o tesamorelina para separar la ruta de grelina impulsada por calcio de la ruta de GHRH impulsada por cAMP en un solo experimento.",
        "**Ensayos de liberación de hormona del crecimiento:** Los estudios indican un aumento de la secreción de hormona del crecimiento al medio de cultivo, cuantificada por inmunoensayo en preparaciones primarias de células hipofisarias de rata.",
        "**Perfilado de estabilidad frente a peptidasas:** La investigación muestra que los dos residuos en configuración D confieren resistencia a la escisión enzimática, medible al comparar velocidades de degradación frente a un análogo todo-L."
      ],
      citations: [
        "Raun, K., Hansen, B. S., Johansen, N. L., et al. (1998). 'Ipamorelin, the first selective growth hormone secretagogue.' European Journal of Endocrinology, 139(5), 552-561. DOI: 10.1530/eje.0.1390552 | PMID: 9849822",
        "Howard, A. D., Feighner, S. D., Cully, D. F., et al. (1996). 'A receptor in pituitary and hypothalamus that functions in growth hormone release.' Science, 273(5277), 974-977. DOI: 10.1126/science.273.5277.974 | PMID: 8688086",
        "Bowers, C. Y., Sartor, A. O., Reynolds, G. A., et al. (1991). 'On the actions of the growth hormone-releasing hexapeptide, GHRP.' Endocrinology, 128(4), 2027-2035. DOI: 10.1210/endo-128-4-2027 | PMID: 2004615"
      ],
      formula: "C38H49N9O5",
      molarMass: "711.9 g/mol (PubChem CID 9831659)",
      sequence: "Aib-His-D-2-Nal-D-Phe-Lys-NH2 (5 residuos; dos residuos en configuración D más 2-naftilalanina, amida C-terminal)",
      retentionTime: 5.2
    }
  },
  "igf-1-lr3-spray": {
    en: {
      abstract: "IGF-1 LR3 is an 83-residue engineered analogue of human insulin-like growth factor 1, built from the 70-residue native sequence by substituting arginine for glutamate at the third position and adding a 13-residue amino-terminal extension. Both modifications serve one purpose: reducing capture by the insulin-like growth factor binding proteins that sequester the native hormone in circulation. Tomas and colleagues reported in 1997 that IGF-1 variants binding poorly to those proteins show more potent and more prolonged action than the native molecule, establishing the design rationale. Shooter and colleagues and Magee and colleagues subsequently mapped which structural domains govern binding protein versus receptor engagement. The target is the IGF-1 receptor, a tyrosine kinase. Research Use Only (RUO).",
      mechanism: "IGF-1 LR3 engages the IGF-1 receptor, and because that receptor is a tyrosine kinase rather than a G protein-coupled receptor, the entire downstream logic differs from most compounds in this catalog. Ligand binding drives conformational change and trans-autophosphorylation of the receptor beta subunits, creating docking sites for insulin receptor substrate proteins. Two branches follow. The PI3K and Akt axis promotes protein synthesis and cell survival, largely through mTOR and by suppressing pro-apoptotic signaling. The MAPK cascade drives proliferative gene expression. Research shows the engineered modifications do not alter receptor engagement itself; they alter availability. Native IGF-1 is almost entirely bound by binding proteins in serum, while the arginine substitution and amino-terminal extension leave far more of this analogue free, which is why its apparent potency in binding-protein-rich medium is substantially higher.",
      benefits: [
        "**Receptor Autophosphorylation:** Research shows tyrosine kinase activation in serum-starved myoblasts and fibroblasts, measured by phospho-receptor immunoblot across a defined time course.",
        "**Akt Pathway Signaling:** Studies indicate downstream Akt phosphorylation and mTOR engagement, giving a protein synthesis readout distinct from the cAMP and calcium assays used for GPCR peptides.",
        "**Binding Protein Evasion:** Tomas and colleagues (1997) report that variants binding poorly to IGF binding proteins are more potent and longer-acting, a contrast reproducible in binding-protein-rich medium.",
        "**Domain Mapping Studies:** Shooter and colleagues (1996) and Magee and colleagues (1999) characterized which structural domains govern binding protein versus receptor engagement.",
        "**Disulfide Integrity Testing:** Laboratory investigations compare reduced and non-reduced separations to confirm native disulfide pairing, a check that mass analysis alone cannot provide."
      ],
      citations: [
        "Tomas, F. M., Walton, P. E., Dunshea, F. R., et al. (1997). 'IGF-I variants which bind poorly to IGF-binding proteins show more potent and prolonged hypoglycaemic action than native IGF-I in pigs and marmoset monkeys.' Journal of Endocrinology, 155(2), 377-386. DOI: 10.1677/joe.0.1550377 | PMID: 9415072",
        "Shooter, G. K., Magee, B., Soos, M. A., et al. (1996). 'Insulin-like growth factor (IGF)-I A- and B-domain analogues with altered type 1 IGF and insulin receptor binding specificities.' Journal of Molecular Endocrinology, 17(3), 237-246. DOI: 10.1677/jme.0.0170237 | PMID: 8981230",
        "Magee, B. A., Shooter, G. K., Wallace, J. C., et al. (1999). 'Insulin-like growth factor I and its binding proteins: a study of the binding interface using B-domain analogues.' Biochemistry, 38(48), 15863-15870. DOI: 10.1021/bi9910070 | PMID: 10625451"
      ],
      formula: "Verify with manufacturer COA — an 83-residue protein; no single formula is independently confirmable from PubChem for this analogue",
      molarMass: "Approximately 9100 g/mol — verify with manufacturer COA; not independently confirmable against PubChem, which returns no entry for this analogue",
      sequence: "83-residue engineered analogue of human IGF-1: arginine substituted for glutamate at position 3 plus a 13-residue amino-terminal extension; three disulfide bonds — verify exact sequence with manufacturer COA",
      retentionTime: 10.2
    },
    es: {
      abstract: "El IGF-1 LR3 es un análogo diseñado de 83 residuos del factor de crecimiento insulínico tipo 1 humano, construido a partir de la secuencia nativa de 70 residuos sustituyendo glutamato por arginina en la tercera posición y añadiendo una extensión amino-terminal de 13 residuos. Ambas modificaciones sirven a un mismo propósito: reducir la captura por las proteínas de unión que secuestran la hormona nativa en circulación. Tomas y colaboradores reportaron en 1997 que las variantes de IGF-1 que se unen mal a esas proteínas muestran una acción más potente y prolongada que la molécula nativa, estableciendo la lógica de diseño. Shooter y colaboradores y Magee y colaboradores mapearon después qué dominios estructurales gobiernan la unión a proteínas de unión frente a la del receptor. La diana es el receptor de IGF-1, una tirosina quinasa. Uso Exclusivo de Investigación (RUO).",
      mechanism: "El IGF-1 LR3 activa el receptor de IGF-1 y, como ese receptor es una tirosina quinasa y no un receptor acoplado a proteínas G, toda la lógica corriente abajo difiere de la mayoría de los compuestos del catálogo. La unión del ligando provoca un cambio conformacional y la trans-autofosforilación de las subunidades beta del receptor, creando sitios de anclaje para las proteínas sustrato del receptor de insulina. De ahí salen dos ramas. El eje PI3K y Akt promueve la síntesis proteica y la supervivencia celular, en gran medida vía mTOR y suprimiendo la señalización proapoptótica. La cascada MAPK impulsa la expresión génica proliferativa. La investigación muestra que las modificaciones de ingeniería no alteran la activación del receptor en sí, sino la disponibilidad. El IGF-1 nativo está casi por completo unido a proteínas de unión en suero, mientras que la sustitución por arginina y la extensión amino-terminal dejan mucho más de este análogo libre, razón por la cual su potencia aparente en medio rico en proteínas de unión es notablemente mayor.",
      benefits: [
        "**Autofosforilación del receptor:** La investigación muestra la activación de la tirosina quinasa en mioblastos y fibroblastos privados de suero, medida por inmunotransferencia del receptor fosforilado a lo largo del tiempo.",
        "**Señalización por la vía Akt:** Los estudios indican la fosforilación secundaria de Akt y la activación de mTOR, lo que da una lectura de síntesis proteica distinta de los ensayos de cAMP y calcio usados para péptidos GPCR.",
        "**Evasión de proteínas de unión:** Tomas y colaboradores (1997) reportan que las variantes que se unen mal a las proteínas de unión de IGF son más potentes y duraderas, un contraste reproducible en medio rico en dichas proteínas.",
        "**Estudios de mapeo de dominios:** Shooter y colaboradores (1996) y Magee y colaboradores (1999) caracterizaron qué dominios estructurales gobiernan la unión a proteínas de unión frente a la del receptor.",
        "**Verificación de integridad de disulfuros:** Las investigaciones de laboratorio comparan separaciones reducidas y no reducidas para confirmar el emparejamiento nativo de disulfuros, una verificación que el análisis de masa por sí solo no aporta."
      ],
      citations: [
        "Tomas, F. M., Walton, P. E., Dunshea, F. R., et al. (1997). 'IGF-I variants which bind poorly to IGF-binding proteins show more potent and prolonged hypoglycaemic action than native IGF-I in pigs and marmoset monkeys.' Journal of Endocrinology, 155(2), 377-386. DOI: 10.1677/joe.0.1550377 | PMID: 9415072",
        "Shooter, G. K., Magee, B., Soos, M. A., et al. (1996). 'Insulin-like growth factor (IGF)-I A- and B-domain analogues with altered type 1 IGF and insulin receptor binding specificities.' Journal of Molecular Endocrinology, 17(3), 237-246. DOI: 10.1677/jme.0.0170237 | PMID: 8981230",
        "Magee, B. A., Shooter, G. K., Wallace, J. C., et al. (1999). 'Insulin-like growth factor I and its binding proteins: a study of the binding interface using B-domain analogues.' Biochemistry, 38(48), 15863-15870. DOI: 10.1021/bi9910070 | PMID: 10625451"
      ],
      formula: "Verify with manufacturer COA — an 83-residue protein; no single formula is independently confirmable from PubChem for this analogue",
      molarMass: "Approximately 9100 g/mol — verify with manufacturer COA; not independently confirmable against PubChem, which returns no entry for this analogue",
      sequence: "Análogo diseñado de 83 residuos del IGF-1 humano: arginina en lugar de glutamato en la posición 3 más una extensión amino-terminal de 13 residuos; tres puentes disulfuro — verifique la secuencia exacta con el COA del fabricante",
      retentionTime: 10.2
    }
  },
  "hcg-spray": {
    en: {
      abstract: "Human chorionic gonadotropin is a heterodimeric glycoprotein hormone rather than a synthetic peptide, composed of an alpha subunit common to the glycoprotein hormone family paired non-covalently with a hormone-specific beta subunit. It acts at the luteinizing hormone and choriogonadotropin receptor, a G protein-coupled receptor that Ascoli, Fanelli and Segaloff reviewed comprehensively in 2002 in what remains the standard reference for the target. Receptor activation raises cAMP and drives steroidogenesis through upregulation of the steroidogenic acute regulatory protein. Andric and Ascoli subsequently described a delayed growth-factor-mediated signaling arm that negatively regulates aromatase expression in granulosa cells. An extended, heavily glycosylated carboxy-terminal segment on the beta subunit accounts for its longer circulating life than luteinizing hormone. Research Use Only (RUO).",
      mechanism: "Chorionic gonadotropin acts as an assembled heterodimer; neither subunit alone binds the receptor, which is why dimer integrity is a functional requirement and not merely a quality metric. The alpha subunit is shared across the glycoprotein hormone family while the beta subunit determines which receptor is engaged. The intact dimer binds the luteinizing hormone and choriogonadotropin receptor, coupling through Gs to adenylyl cyclase and raising cAMP, which activates protein kinase A. Protein kinase A upregulates the steroidogenic acute regulatory protein, the gatekeeper that transports cholesterol into mitochondria and thereby sets the rate of steroid hormone synthesis. Research shows a secondary, delayed growth-factor-mediated arm also operates, which Andric and Ascoli described as negatively regulating aromatase expression. The distinguishing structural feature is the carbohydrate-rich carboxy-terminal extension on the beta subunit, absent from luteinizing hormone.",
      benefits: [
        "**Steroidogenesis Assays:** Research shows cAMP accumulation followed by steroid output in granulosa and Leydig cell cultures, the standard two-step readout for receptor function in a preparation.",
        "**Receptor Pharmacology Reference:** Ascoli and colleagues (2002) reviewed the luteinizing hormone and choriogonadotropin receptor comprehensively, providing the framework for interpreting response curves.",
        "**Aromatase Regulation:** Andric and Ascoli (2006) describe a delayed growth-factor-mediated signaling arm that negatively regulates aromatase expression in granulosa cells.",
        "**Shared Receptor Comparison:** Laboratory investigations run chorionic gonadotropin against luteinizing hormone at the same receptor, where the longer-lived glycoprotein gives a distinct response profile.",
        "**Dimer Integrity Testing:** Studies indicate neither subunit is active alone, making size-based confirmation of the intact heterodimer a functional assay rather than a purity formality."
      ],
      citations: [
        "Ascoli, M., Fanelli, F., & Segaloff, D. L. (2002). 'The lutropin/choriogonadotropin receptor, a 2002 perspective.' Endocrine Reviews, 23(2), 141-174. DOI: 10.1210/edrv.23.2.0462 | PMID: 11943741",
        "Andric, N., & Ascoli, M. (2006). 'A delayed gonadotropin-dependent and growth factor-mediated activation of the extracellular signal-regulated kinase 1/2 cascade negatively regulates aromatase expression in granulosa cells.' Molecular Endocrinology, 20(12), 3308-3320. DOI: 10.1210/me.2006-0241 | PMID: 16973759",
        "Kotani, M., Detheux, M., Vandenbogaerde, A., et al. (2001). 'The metastasis suppressor gene KiSS-1 encodes kisspeptins, the natural ligands of the orphan G protein-coupled receptor GPR54.' Journal of Biological Chemistry, 276(37), 34631-34636. DOI: 10.1074/jbc.M104847200 | PMID: 11457843"
      ],
      formula: "Not applicable — heterodimeric glycoprotein, not a defined small molecule or peptide",
      molarMass: "Approximately 36,700 g/mol including carbohydrate — varies with glycosylation; potency is specified in international units rather than mass. Verify with manufacturer COA",
      sequence: "Heterodimeric glycoprotein: a 92-residue alpha subunit shared across the glycoprotein hormone family paired non-covalently with a 145-residue hormone-specific beta subunit carrying a glycosylated carboxy-terminal extension — verify with manufacturer COA",
      retentionTime: 0.0
    },
    es: {
      abstract: "La gonadotropina coriónica humana es una hormona glicoproteica heterodimérica y no un péptido sintético, compuesta por una subunidad alfa común a la familia de hormonas glicoproteicas emparejada de forma no covalente con una subunidad beta específica. Actúa sobre el receptor de hormona luteinizante y coriogonadotropina, un receptor acoplado a proteínas G que Ascoli, Fanelli y Segaloff revisaron de forma exhaustiva en 2002 en lo que sigue siendo la referencia estándar de la diana. La activación del receptor eleva el cAMP e impulsa la esteroidogénesis mediante el aumento de la proteína reguladora aguda de la esteroidogénesis. Andric y Ascoli describieron después una rama de señalización retardada mediada por factores de crecimiento que regula negativamente la expresión de aromatasa en células de la granulosa. Un segmento carboxi-terminal extendido y muy glicosilado de la subunidad beta explica su vida circulante más larga que la de la hormona luteinizante. Uso Exclusivo de Investigación (RUO).",
      mechanism: "La gonadotropina coriónica actúa como heterodímero ensamblado; ninguna subunidad por separado se une al receptor, por lo que la integridad del dímero es un requisito funcional y no una mera métrica de calidad. La subunidad alfa se comparte en toda la familia de hormonas glicoproteicas mientras que la beta determina qué receptor se activa. El dímero intacto se une al receptor de hormona luteinizante y coriogonadotropina, se acopla vía Gs a la adenilato ciclasa y eleva el cAMP, lo que activa la proteína quinasa A. Esta aumenta la proteína reguladora aguda de la esteroidogénesis, el guardián que transporta colesterol a las mitocondrias y fija así la velocidad de síntesis de hormonas esteroides. La investigación muestra que opera además una rama secundaria retardada mediada por factores de crecimiento, que Andric y Ascoli describieron como reguladora negativa de la expresión de aromatasa. El rasgo estructural distintivo es la extensión carboxi-terminal rica en carbohidratos de la subunidad beta, ausente en la hormona luteinizante.",
      benefits: [
        "**Ensayos de esteroidogénesis:** La investigación muestra acumulación de cAMP seguida de producción de esteroides en cultivos de células de la granulosa y de Leydig, la lectura estándar en dos pasos de la función del receptor.",
        "**Referencia de farmacología del receptor:** Ascoli y colaboradores (2002) revisaron de forma exhaustiva el receptor de hormona luteinizante y coriogonadotropina, aportando el marco para interpretar las curvas de respuesta.",
        "**Regulación de la aromatasa:** Andric y Ascoli (2006) describen una rama de señalización retardada mediada por factores de crecimiento que regula negativamente la expresión de aromatasa en células de la granulosa.",
        "**Comparación en receptor compartido:** Las investigaciones de laboratorio corren gonadotropina coriónica frente a hormona luteinizante en el mismo receptor, donde la glicoproteína de vida más larga da un perfil de respuesta distinto.",
        "**Verificación de integridad del dímero:** Los estudios indican que ninguna subunidad es activa por separado, lo que convierte la confirmación del heterodímero intacto en un ensayo funcional y no en una formalidad de pureza."
      ],
      citations: [
        "Ascoli, M., Fanelli, F., & Segaloff, D. L. (2002). 'The lutropin/choriogonadotropin receptor, a 2002 perspective.' Endocrine Reviews, 23(2), 141-174. DOI: 10.1210/edrv.23.2.0462 | PMID: 11943741",
        "Andric, N., & Ascoli, M. (2006). 'A delayed gonadotropin-dependent and growth factor-mediated activation of the extracellular signal-regulated kinase 1/2 cascade negatively regulates aromatase expression in granulosa cells.' Molecular Endocrinology, 20(12), 3308-3320. DOI: 10.1210/me.2006-0241 | PMID: 16973759",
        "Kotani, M., Detheux, M., Vandenbogaerde, A., et al. (2001). 'The metastasis suppressor gene KiSS-1 encodes kisspeptins, the natural ligands of the orphan G protein-coupled receptor GPR54.' Journal of Biological Chemistry, 276(37), 34631-34636. DOI: 10.1074/jbc.M104847200 | PMID: 11457843"
      ],
      formula: "Not applicable — heterodimeric glycoprotein, not a defined small molecule or peptide",
      molarMass: "Approximately 36,700 g/mol including carbohydrate — varies with glycosylation; potency is specified in international units rather than mass. Verify with manufacturer COA",
      sequence: "Glicoproteína heterodimérica: subunidad alfa de 92 residuos compartida por la familia de hormonas glicoproteicas emparejada de forma no covalente con una subunidad beta específica de 145 residuos con extensión carboxi-terminal glicosilada — verifique con el COA del fabricante",
      retentionTime: 0.0
    }
  },
  "h-frag-spray": {
    en: {
      abstract: "H-Frag corresponds to residues 176 through 191 of human growth hormone, the carboxy-terminal segment identified as the hormone lipolytic domain. Its research interest rests on a dissociation: the fragment influences lipid metabolism without engaging the growth hormone receptor, and therefore without the hepatic IGF-1 induction and glucose handling changes the intact hormone produces. Ng and colleagues characterized the synthetic lipolytic domain in fatty rodent models in 2000, and Heffernan and colleagues compared the fragment directly against full growth hormone in 2001, reporting effects on lipid metabolism in obese mouse models. The sequence contains two cysteine residues forming an internal disulfide loop. It is closely related to but distinct from AOD9604, which carries tyrosine at position 1 in place of phenylalanine. Research Use Only (RUO).",
      mechanism: "H-Frag works through a mechanism defined as much by absence as by action. The intact growth hormone molecule binds its receptor and triggers JAK2 and STAT5 signaling, producing hepatic IGF-1 and a broad metabolic response. This fragment, comprising only the carboxy-terminal lipolytic domain, does not engage that receptor, and research indicates it therefore produces no IGF-1 induction and none of the glucose handling changes attributed to the full hormone. What it does influence is adipocyte lipid handling, with laboratory investigations describing modulation of lipolytic and lipogenic enzyme activity in fat cells rather than classical receptor agonism. Ng and colleagues characterized this in fatty rodent models and Heffernan and colleagues confirmed the dissociation against full growth hormone. Structurally the fragment carries an internal disulfide loop between its two cysteines, and it differs from AOD9604 at position 1, where that analogue carries tyrosine in place of phenylalanine.",
      benefits: [
        "**Adipocyte Lipolysis Assays:** Research shows measurable glycerol and free fatty acid release in 3T3-L1 and primary adipocyte cultures, the standard lipolysis readout for this fragment.",
        "**Receptor Dissociation Testing:** Heffernan and colleagues (2001) compared the fragment against full growth hormone, the design that demonstrates lipid effects without IGF-1 induction.",
        "**Lipolytic Domain Characterization:** Ng and colleagues (2000) characterized the synthetic lipolytic domain in fatty rodent models, establishing the framework for interpreting fragment activity.",
        "**Fragment Versus Analogue Comparison:** Laboratory investigations pair it against AOD9604, which differs only at position 1, isolating what a single hydroxyl group changes.",
        "**Disulfide Loop Integrity:** Studies indicate the internal cysteine loop defines the fragment conformation, verifiable by comparing reduced and non-reduced chromatographic separations."
      ],
      citations: [
        "Heffernan, M., Summers, R. J., Thorburn, A., et al. (2001). 'The effects of human GH and its lipolytic fragment (AOD9604) on lipid metabolism following chronic treatment in obese mice and beta-3 AR knock-out mice.' Endocrinology, 142(12), 5182-5189. DOI: 10.1210/endo.142.12.8522 | PMID: 11713213",
        "Ng, F. M., Sun, J., Sharma, L., et al. (2000). 'Metabolic studies of a synthetic lipolytic domain (AOD9604) of human growth hormone.' Hormone Research, 53(6), 274-278. DOI: 10.1159/000053183 | PMID: 11146367",
        "Ng, F. M., Jiang, W. J., Gianello, R., et al. (2000). 'Molecular and cellular actions of a structural domain of human growth hormone (AOD9401) on lipid metabolism in Zucker fatty rats.' Journal of Molecular Endocrinology, 25(3), 287-298. DOI: 10.1677/jme.0.0250287 | PMID: 11116208"
      ],
      formula: "C78H123N23O22S2",
      molarMass: "1799.1 g/mol (PubChem CID 16131230, somatotropin 176-191)",
      sequence: "Phe-Leu-Arg-Ile-Val-Gln-Cys-Arg-Ser-Val-Glu-Gly-Ser-Cys-Gly-Phe (16 residues; internal disulfide loop between the two cysteines). Distinct from AOD9604, which carries tyrosine at position 1 instead of phenylalanine and weighs 1815.1 g/mol",
      retentionTime: 7.3
    },
    es: {
      abstract: "El H-Frag corresponde a los residuos 176 a 191 de la hormona del crecimiento humana, el segmento carboxi-terminal identificado como dominio lipolítico de la hormona. Su interés investigativo reside en una disociación: el fragmento influye en el metabolismo lipídico sin activar el receptor de hormona del crecimiento y, por tanto, sin la inducción hepática de IGF-1 ni los cambios en el manejo de glucosa que produce la hormona intacta. Ng y colaboradores caracterizaron el dominio lipolítico sintético en modelos de roedores obesos en 2000, y Heffernan y colaboradores compararon el fragmento directamente frente a la hormona completa en 2001, reportando efectos sobre el metabolismo lipídico en modelos de ratón obeso. La secuencia contiene dos residuos de cisteína que forman un bucle disulfuro interno. Está estrechamente relacionado pero es distinto del AOD9604, que porta tirosina en la posición 1 en lugar de fenilalanina. Uso Exclusivo de Investigación (RUO).",
      mechanism: "El H-Frag actúa mediante un mecanismo definido tanto por lo que hace como por lo que omite. La molécula intacta de hormona del crecimiento se une a su receptor y desencadena la señalización JAK2 y STAT5, produciendo IGF-1 hepático y una respuesta metabólica amplia. Este fragmento, que comprende solo el dominio lipolítico carboxi-terminal, no activa ese receptor y la investigación indica que por ello no produce inducción de IGF-1 ni ninguno de los cambios en el manejo de glucosa atribuidos a la hormona completa. Lo que sí influye es el manejo lipídico del adipocito, con investigaciones de laboratorio que describen la modulación de la actividad de enzimas lipolíticas y lipogénicas en células grasas más que un agonismo clásico de receptor. Ng y colaboradores lo caracterizaron en modelos de roedores obesos y Heffernan y colaboradores confirmaron la disociación frente a la hormona completa. Estructuralmente el fragmento porta un bucle disulfuro interno entre sus dos cisteínas, y difiere del AOD9604 en la posición 1, donde ese análogo porta tirosina en lugar de fenilalanina.",
      benefits: [
        "**Ensayos de lipólisis en adipocitos:** La investigación muestra liberación medible de glicerol y ácidos grasos libres en cultivos de adipocitos 3T3-L1 y primarios, la lectura estándar de lipólisis para este fragmento.",
        "**Prueba de disociación del receptor:** Heffernan y colaboradores (2001) compararon el fragmento frente a la hormona del crecimiento completa, el diseño que demuestra efectos lipídicos sin inducción de IGF-1.",
        "**Caracterización del dominio lipolítico:** Ng y colaboradores (2000) caracterizaron el dominio lipolítico sintético en modelos de roedores obesos, estableciendo el marco para interpretar la actividad del fragmento.",
        "**Comparación fragmento frente a análogo:** Las investigaciones de laboratorio lo emparejan con el AOD9604, que difiere solo en la posición 1, aislando qué cambia un grupo hidroxilo.",
        "**Integridad del bucle disulfuro:** Los estudios indican que el bucle interno de cisteínas define la conformación del fragmento, verificable comparando separaciones cromatográficas reducidas y no reducidas."
      ],
      citations: [
        "Heffernan, M., Summers, R. J., Thorburn, A., et al. (2001). 'The effects of human GH and its lipolytic fragment (AOD9604) on lipid metabolism following chronic treatment in obese mice and beta-3 AR knock-out mice.' Endocrinology, 142(12), 5182-5189. DOI: 10.1210/endo.142.12.8522 | PMID: 11713213",
        "Ng, F. M., Sun, J., Sharma, L., et al. (2000). 'Metabolic studies of a synthetic lipolytic domain (AOD9604) of human growth hormone.' Hormone Research, 53(6), 274-278. DOI: 10.1159/000053183 | PMID: 11146367",
        "Ng, F. M., Jiang, W. J., Gianello, R., et al. (2000). 'Molecular and cellular actions of a structural domain of human growth hormone (AOD9401) on lipid metabolism in Zucker fatty rats.' Journal of Molecular Endocrinology, 25(3), 287-298. DOI: 10.1677/jme.0.0250287 | PMID: 11116208"
      ],
      formula: "C78H123N23O22S2",
      molarMass: "1799.1 g/mol (PubChem CID 16131230, somatotropin 176-191)",
      sequence: "Phe-Leu-Arg-Ile-Val-Gln-Cys-Arg-Ser-Val-Glu-Gly-Ser-Cys-Gly-Phe (16 residuos; bucle disulfuro interno entre las dos cisteínas). Distinto del AOD9604, que porta tirosina en la posición 1 en lugar de fenilalanina y pesa 1815.1 g/mol",
      retentionTime: 7.3
    }
  },
  "glutathione-spray": {
    en: {
      abstract: "Glutathione is a tripeptide of glutamate, cysteine and glycine distinguished by an unusual gamma-glutamyl linkage in which the glutamate side-chain carboxyl rather than its backbone carboxyl forms the peptide bond. That arrangement renders the molecule resistant to ordinary peptidases and accounts for its persistence as the dominant intracellular thiol. Lu reviewed the biosynthetic pathway and its regulation in 2013, and Forman, Zhang and Rinna covered its protective roles and the methodology for measuring it in 2009. The cysteine thiol is the functional centre: glutathione peroxidase consumes two molecules to reduce a peroxide and glutathione reductase regenerates them using NADPH, while glutathione S-transferase enzymes use the same thiol as a conjugating nucleophile. The ratio of reduced to oxidised form indexes cellular redox state. Research Use Only (RUO).",
      mechanism: "Glutathione functions as an enzyme cofactor and conjugating substrate rather than as a ligand, which places it alongside L-Carnitine as one of the few non-signaling compounds in this catalog. Two structural features govern its behaviour. The gamma-glutamyl linkage, formed through the glutamate side chain instead of the backbone, blocks cleavage by conventional peptidases and gives the tripeptide an unusually long intracellular residence. The cysteine thiol performs the chemistry. In the peroxidase reaction two glutathione molecules donate electrons to reduce hydrogen peroxide or a lipid peroxide, becoming linked as the oxidised disulfide dimer, which glutathione reductase then reduces back using NADPH as the electron source. Separately, glutathione S-transferase enzymes use the same thiol to conjugate electrophilic compounds. Research shows the reduced to oxidised ratio serves as the standard quantitative readout of redox state.",
      benefits: [
        "**Redox State Quantification:** Research shows the reduced to oxidised ratio is the accepted index of cellular redox balance, measured by separating both species rather than reporting total glutathione.",
        "**Peroxidase Enzyme Assays:** Studies indicate glutathione serves as the electron donor in glutathione peroxidase reactions, with turnover followed spectrophotometrically through NADPH consumption.",
        "**Conjugation Chemistry:** Laboratory investigations use the same thiol as the conjugating nucleophile in glutathione S-transferase assays, a distinct enzymatic readout from the peroxidase route.",
        "**Oxidative Challenge Models:** Research shows measurable ratio shifts when cultures are challenged with an oxidant, the standard design for studying redox buffering capacity.",
        "**Biosynthesis Pathway Studies:** Lu (2013) reviewed glutathione synthesis and its regulation, providing the framework labs use when manipulating precursor availability in culture."
      ],
      citations: [
        "Lu, S. C. (2013). 'Glutathione synthesis.' Biochimica et Biophysica Acta - General Subjects, 1830(5), 3143-3153. DOI: 10.1016/j.bbagen.2012.09.008 | PMID: 22995213",
        "Forman, H. J., Zhang, H., & Rinna, A. (2009). 'Glutathione: overview of its protective roles, measurement, and biosynthesis.' Molecular Aspects of Medicine, 30(1-2), 1-12. DOI: 10.1016/j.mam.2008.08.006 | PMID: 18796312",
        "Huang, C. S., He, W., & Meister, A. (1995). 'Amino acid sequence of rat kidney glutathione synthetase.' PNAS, 92(4), 1232-1236. DOI: 10.1073/pnas.92.4.1232 | PMID: 7862666"
      ],
      formula: "C10H17N3O6S",
      molarMass: "307.33 g/mol (PubChem CID 124886)",
      sequence: "gamma-Glu-Cys-Gly (3 residues; the glutamate joins through its side-chain carboxyl, not the backbone, which blocks ordinary peptidase cleavage)",
      retentionTime: 2.1
    },
    es: {
      abstract: "El glutatión es un tripéptido de glutamato, cisteína y glicina distinguido por un enlace gamma-glutamilo inusual en el que el carboxilo de la cadena lateral del glutamato, y no el del esqueleto, forma el enlace peptídico. Esa disposición vuelve la molécula resistente a las peptidasas ordinarias y explica su persistencia como el tiol intracelular dominante. Lu revisó la vía biosintética y su regulación en 2013, y Forman, Zhang y Rinna cubrieron sus funciones protectoras y la metodología de medición en 2009. El tiol de la cisteína es el centro funcional: la glutatión peroxidasa consume dos moléculas para reducir un peróxido y la glutatión reductasa las regenera usando NADPH, mientras que las enzimas glutatión S-transferasa usan el mismo tiol como nucleófilo conjugante. La relación entre forma reducida y oxidada indexa el estado redox celular. Uso Exclusivo de Investigación (RUO).",
      mechanism: "El glutatión funciona como cofactor enzimático y sustrato conjugante y no como ligando, lo que lo sitúa junto a la L-carnitina entre los pocos compuestos sin señalización de este catálogo. Dos rasgos estructurales gobiernan su comportamiento. El enlace gamma-glutamilo, formado por la cadena lateral del glutamato en lugar del esqueleto, bloquea la escisión por peptidasas convencionales y da al tripéptido una residencia intracelular inusualmente larga. El tiol de la cisteína realiza la química. En la reacción de la peroxidasa dos moléculas de glutatión donan electrones para reducir peróxido de hidrógeno o un peróxido lipídico, quedando unidas como dímero disulfuro oxidado, que la glutatión reductasa reduce después usando NADPH como fuente de electrones. Por separado, las enzimas glutatión S-transferasa usan el mismo tiol para conjugar compuestos electrofílicos. La investigación muestra que la relación reducido a oxidado sirve como lectura cuantitativa estándar del estado redox.",
      benefits: [
        "**Cuantificación del estado redox:** La investigación muestra que la relación reducido a oxidado es el índice aceptado del equilibrio redox celular, medida separando ambas especies en lugar de reportar glutatión total.",
        "**Ensayos de peroxidasa:** Los estudios indican que el glutatión actúa como donador de electrones en las reacciones de glutatión peroxidasa, con el recambio seguido por espectrofotometría a través del consumo de NADPH.",
        "**Química de conjugación:** Las investigaciones de laboratorio usan el mismo tiol como nucleófilo conjugante en ensayos de glutatión S-transferasa, una lectura enzimática distinta de la ruta de la peroxidasa.",
        "**Modelos de desafío oxidativo:** La investigación muestra cambios medibles en la relación cuando los cultivos se desafían con un oxidante, el diseño estándar para estudiar la capacidad de amortiguación redox.",
        "**Estudios de la vía biosintética:** Lu (2013) revisó la síntesis de glutatión y su regulación, aportando el marco que los laboratorios usan al manipular la disponibilidad de precursores en cultivo."
      ],
      citations: [
        "Lu, S. C. (2013). 'Glutathione synthesis.' Biochimica et Biophysica Acta - General Subjects, 1830(5), 3143-3153. DOI: 10.1016/j.bbagen.2012.09.008 | PMID: 22995213",
        "Forman, H. J., Zhang, H., & Rinna, A. (2009). 'Glutathione: overview of its protective roles, measurement, and biosynthesis.' Molecular Aspects of Medicine, 30(1-2), 1-12. DOI: 10.1016/j.mam.2008.08.006 | PMID: 18796312",
        "Huang, C. S., He, W., & Meister, A. (1995). 'Amino acid sequence of rat kidney glutathione synthetase.' PNAS, 92(4), 1232-1236. DOI: 10.1073/pnas.92.4.1232 | PMID: 7862666"
      ],
      formula: "C10H17N3O6S",
      molarMass: "307.33 g/mol (PubChem CID 124886)",
      sequence: "gamma-Glu-Cys-Gly (3 residuos; el glutamato se une por el carboxilo de su cadena lateral y no por el esqueleto, lo que bloquea la escisión por peptidasas ordinarias)",
      retentionTime: 2.1
    }
  },
  "glow-spray": {
    en: {
      abstract: "GLOW is a three-component research blend combining a copper-binding tripeptide, a stable gastric pentadecapeptide, and an actin-sequestering thymic peptide. Like other formulations of its type it has no unified molecular target; each component operates through an independent pathway. Pickart and Margolina reviewed the copper tripeptide gene expression literature in 2018, and Malinda and colleagues established the actin-binding component as a driver of directional endothelial migration in 1997, with Sikiric and colleagues covering the pentadecapeptide angiogenesis and nitric oxide work. The formulation is defined as much by what it omits as by what it contains: the related KLOW blend adds an anti-inflammatory tripeptide to these same three components, which makes the two an efficient experimental pair. Research Use Only (RUO).",
      mechanism: "This blend engages three independent pathways that do not converge. The copper tripeptide coordinates a copper ion in square-planar geometry and is studied for broad influence on matrix gene expression, with collagen and glycosaminoglycan synthesis as the usual readouts in fibroblast models. The pentadecapeptide component is investigated around angiogenic signaling and nitric oxide pathways in vascular and gastrointestinal preparations. The actin-binding component works structurally rather than through a receptor, binding monomeric actin and holding it in an unpolymerized pool, which sets how quickly cells remodel their cytoskeleton and migrate. Research shows the copper component depends on retaining its metal centre for activity, making demetallation a stability concern specific to copper-peptide formulations. The blend differs from KLOW by the absence of an anti-inflammatory tripeptide arm.",
      benefits: [
        "**Component Deconvolution:** Laboratory investigations run the blend beside each isolated component, the only design that attributes an observed effect to a specific arm of a three-part formulation.",
        "**Collagen Expression Assays:** Research shows the copper tripeptide arm influences collagen and glycosaminoglycan expression in fibroblast culture, measured by quantitative PCR and immunoblot.",
        "**Directional Migration:** Malinda and colleagues (1997) established the actin-binding component as a driver of endothelial migration, quantified by scratch-wound and Boyden chamber formats.",
        "**Angiogenesis and Nitric Oxide:** Sikiric and colleagues describe the pentadecapeptide component acting on angiogenic and nitric oxide pathways in vascular preparations.",
        "**GLOW Versus KLOW Comparison:** Studies indicate the two blends differ by a single anti-inflammatory component, making the pair the cleanest available test of what that arm contributes."
      ],
      citations: [
        "Pickart, L., & Margolina, A. (2018). 'Regenerative and Protective Actions of the GHK-Cu Peptide in the Light of the New Gene Data.' International Journal of Molecular Sciences, 19(7), 1987. DOI: 10.3390/ijms19071987 | PMID: 29986520",
        "Malinda, K. M., Goldstein, A. L., & Kleinman, H. K. (1997). 'Thymosin beta 4 stimulates directional migration of human umbilical vein endothelial cells.' FASEB Journal, 11(6), 474-481. DOI: 10.1096/fasebj.11.6.9194528 | PMID: 9194528",
        "Sikiric, P., Seiwerth, S., Skrtic, A., et al. (2025). 'BPC 157 Therapy: Targeting Angiogenesis and Nitric Oxide.' Pharmaceuticals, 18(10), 1450. DOI: 10.3390/ph18101450 | PMID: 41155565"
      ],
      formula: "Blend — no single formula applies; three peptide components including one copper-coordinated tripeptide",
      molarMass: "Not applicable to a blend — confirm component identities, individual masses and ratio with manufacturer COA",
      sequence: "Three-component peptide blend, typically a copper tripeptide with pentadecapeptide and actin-binding components — verify exact composition and ratio with manufacturer COA",
      retentionTime: 5.1
    },
    es: {
      abstract: "GLOW es una mezcla de investigación de tres componentes que combina un tripéptido que une cobre, un pentadecapéptido gástrico estable y un péptido tímico que secuestra actina. Como otras formulaciones de su tipo, no tiene una diana molecular unificada; cada componente opera por una vía independiente. Pickart y Margolina revisaron la literatura de expresión génica del tripéptido de cobre en 2018, y Malinda y colaboradores establecieron el componente que une actina como impulsor de la migración endotelial direccional en 1997, con Sikiric y colaboradores cubriendo el trabajo de angiogénesis y óxido nítrico del pentadecapéptido. La formulación se define tanto por lo que omite como por lo que contiene: la mezcla KLOW añade un tripéptido antiinflamatorio a estos mismos tres componentes, lo que convierte a ambas en una pareja experimental eficiente. Uso Exclusivo de Investigación (RUO).",
      mechanism: "Esta mezcla activa tres vías independientes que no convergen. El tripéptido de cobre coordina un ion de cobre en geometría plano-cuadrada y se estudia por su influencia amplia sobre la expresión génica de matriz, con la síntesis de colágeno y glicosaminoglicanos como lecturas habituales en modelos de fibroblastos. El componente pentadecapéptido se investiga en torno a la señalización angiogénica y las vías del óxido nítrico en preparaciones vasculares y gastrointestinales. El componente que une actina actúa estructuralmente y no por receptor, uniendo actina monomérica y manteniéndola en un depósito no polimerizado, lo que fija la velocidad con que las células remodelan su citoesqueleto y migran. La investigación muestra que el componente de cobre depende de conservar su centro metálico para su actividad, lo que hace de la desmetalación una preocupación de estabilidad específica de las formulaciones con péptidos de cobre. La mezcla difiere de KLOW por la ausencia de un brazo de tripéptido antiinflamatorio.",
      benefits: [
        "**Deconvolución de componentes:** Las investigaciones de laboratorio corren la mezcla junto a cada componente aislado, el único diseño que atribuye un efecto observado a un brazo concreto de una formulación de tres partes.",
        "**Ensayos de expresión de colágeno:** La investigación muestra que el brazo del tripéptido de cobre influye en la expresión de colágeno y glicosaminoglicanos en cultivo de fibroblastos, medida por PCR cuantitativa e inmunotransferencia.",
        "**Migración direccional:** Malinda y colaboradores (1997) establecieron el componente que une actina como impulsor de la migración endotelial, cuantificada por formatos de herida por raspado y cámara de Boyden.",
        "**Angiogénesis y óxido nítrico:** Sikiric y colaboradores describen el componente pentadecapéptido actuando sobre vías angiogénicas y de óxido nítrico en preparaciones vasculares.",
        "**Comparación GLOW frente a KLOW:** Los estudios indican que ambas mezclas difieren en un único componente antiinflamatorio, lo que convierte a la pareja en la prueba más limpia disponible de la contribución de ese brazo."
      ],
      citations: [
        "Pickart, L., & Margolina, A. (2018). 'Regenerative and Protective Actions of the GHK-Cu Peptide in the Light of the New Gene Data.' International Journal of Molecular Sciences, 19(7), 1987. DOI: 10.3390/ijms19071987 | PMID: 29986520",
        "Malinda, K. M., Goldstein, A. L., & Kleinman, H. K. (1997). 'Thymosin beta 4 stimulates directional migration of human umbilical vein endothelial cells.' FASEB Journal, 11(6), 474-481. DOI: 10.1096/fasebj.11.6.9194528 | PMID: 9194528",
        "Sikiric, P., Seiwerth, S., Skrtic, A., et al. (2025). 'BPC 157 Therapy: Targeting Angiogenesis and Nitric Oxide.' Pharmaceuticals, 18(10), 1450. DOI: 10.3390/ph18101450 | PMID: 41155565"
      ],
      formula: "Blend — no single formula applies; three peptide components including one copper-coordinated tripeptide",
      molarMass: "Not applicable to a blend — confirm component identities, individual masses and ratio with manufacturer COA",
      sequence: "Mezcla peptídica de tres componentes, típicamente un tripéptido de cobre con componentes pentadecapéptido y de unión a actina — verifique la composición exacta y la proporción con el COA del fabricante",
      retentionTime: 5.1
    }
  },
  "ghrp-6-spray": {
    en: {
      abstract: "GHRP-6 is a synthetic hexapeptide agonist at the ghrelin receptor with a notable place in receptor pharmacology history: the peptide preceded the target. Bowers and colleagues characterized its growth hormone-releasing activity through the 1980s, publishing detailed pharmacology in 1991, and the receptor mediating that activity was cloned by Howard and colleagues only in 1996. Robinson and colleagues showed in 1992 that the growth hormone response operates independently of endogenous growth hormone-releasing hormone signaling, establishing it as a distinct pathway. Unlike the later selective secretagogue Ipamorelin, GHRP-6 also raises corticotropin, cortisol and prolactin and acts as an appetite-stimulating ghrelin mimetic, a broader profile that makes it the standard comparator in selectivity panels. Research Use Only (RUO).",
      mechanism: "GHRP-6 activates the ghrelin receptor on pituitary somatotroph cells through a calcium-driven route. Receptor engagement couples via Gq to phospholipase C, which cleaves membrane phosphoinositides into inositol trisphosphate and diacylglycerol; inositol trisphosphate releases calcium from intracellular stores and the resulting transient drives fusion of growth hormone secretory vesicles. Research shows this pathway is independent of the GHRH receptor route, which Robinson and colleagues demonstrated by showing the response persists without endogenous GHRH signaling. What distinguishes GHRP-6 within its own class is breadth rather than selectivity: laboratory investigations report concurrent elevation of corticotropin, cortisol and prolactin, plus appetite stimulation consistent with its action as a ghrelin mimetic. Ipamorelin engages the same receptor without that accompanying profile, which is why the two are run together.",
      benefits: [
        "**Selectivity Panel Comparator:** Research shows concurrent elevation of corticotropin, cortisol and prolactin alongside growth hormone, the broader profile against which selective secretagogues are benchmarked.",
        "**Calcium Mobilization Assays:** Studies indicate Gq-coupled signaling in cells expressing the ghrelin receptor, read as intracellular calcium flux rather than cAMP accumulation.",
        "**GHRH Independence Testing:** Robinson and colleagues (1992) showed the growth hormone response persists without endogenous GHRH signaling, establishing the two pathways as separable.",
        "**Receptor Discovery Reference:** Howard and colleagues (1996) cloned the receptor whose existence this peptide's pharmacology had implied, making GHRP-6 the historical reference agonist for the target.",
        "**Appetite Signaling Models:** Laboratory investigations use its ghrelin-mimetic appetite stimulation as a readout distinct from growth hormone release in feeding behaviour studies."
      ],
      citations: [
        "Bowers, C. Y., Sartor, A. O., Reynolds, G. A., et al. (1991). 'On the actions of the growth hormone-releasing hexapeptide, GHRP.' Endocrinology, 128(4), 2027-2035. DOI: 10.1210/endo-128-4-2027 | PMID: 2004615",
        "Howard, A. D., Feighner, S. D., Cully, D. F., et al. (1996). 'A receptor in pituitary and hypothalamus that functions in growth hormone release.' Science, 273(5277), 974-977. DOI: 10.1126/science.273.5277.974 | PMID: 8688086",
        "Robinson, B. M., Friberg, R. D., Bowers, C. Y., et al. (1992). 'Acute growth hormone (GH) response to GH-releasing hexapeptide in humans is independent of endogenous GH-releasing hormone.' Journal of Clinical Endocrinology and Metabolism, 75(4), 1121-1124. DOI: 10.1210/jcem.75.4.1400881 | PMID: 1400881"
      ],
      formula: "C46H56N12O6",
      molarMass: "873.0 g/mol (PubChem CID 9919153)",
      sequence: "His-D-Trp-Ala-Trp-D-Phe-Lys-NH2 (6 residues; two tryptophans, two D-configured positions, C-terminal amide)",
      retentionTime: 5.8
    },
    es: {
      abstract: "El GHRP-6 es un hexapéptido sintético agonista del receptor de grelina con un lugar notable en la historia de la farmacología de receptores: el péptido precedió a la diana. Bowers y colaboradores caracterizaron su actividad liberadora de hormona del crecimiento a lo largo de los años ochenta y publicaron farmacología detallada en 1991, y el receptor que mediaba esa actividad solo fue clonado por Howard y colaboradores en 1996. Robinson y colaboradores mostraron en 1992 que la respuesta de hormona del crecimiento opera con independencia de la señalización endógena de la hormona liberadora, estableciéndola como vía distinta. A diferencia del secretagogo selectivo posterior, la ipamorelina, el GHRP-6 eleva además corticotropina, cortisol y prolactina y actúa como mimético de grelina estimulante del apetito, un perfil más amplio que lo convierte en el comparador estándar de los paneles de selectividad. Uso Exclusivo de Investigación (RUO).",
      mechanism: "El GHRP-6 activa el receptor de grelina en las células somatotropas hipofisarias por una ruta impulsada por calcio. La interacción con el receptor se acopla vía Gq a la fosfolipasa C, que escinde fosfoinosítidos de membrana en inositol trifosfato y diacilglicerol; el inositol trifosfato libera calcio de los depósitos intracelulares y el transitorio resultante impulsa la fusión de las vesículas secretoras de hormona del crecimiento. La investigación muestra que esta vía es independiente de la ruta del receptor de GHRH, lo que Robinson y colaboradores demostraron al comprobar que la respuesta persiste sin señalización endógena de GHRH. Lo que distingue al GHRP-6 dentro de su clase es la amplitud más que la selectividad: las investigaciones de laboratorio reportan elevación concurrente de corticotropina, cortisol y prolactina, además de estimulación del apetito coherente con su acción de mimético de grelina. La ipamorelina activa el mismo receptor sin ese perfil acompañante, razón por la cual ambos se corren juntos.",
      benefits: [
        "**Comparador en paneles de selectividad:** La investigación muestra elevación concurrente de corticotropina, cortisol y prolactina junto a la hormona del crecimiento, el perfil más amplio frente al cual se comparan los secretagogos selectivos.",
        "**Ensayos de movilización de calcio:** Los estudios indican señalización acoplada a Gq en células que expresan el receptor de grelina, leída como flujo de calcio intracelular y no como acumulación de cAMP.",
        "**Prueba de independencia de GHRH:** Robinson y colaboradores (1992) mostraron que la respuesta de hormona del crecimiento persiste sin señalización endógena de GHRH, estableciendo ambas vías como separables.",
        "**Referencia del descubrimiento del receptor:** Howard y colaboradores (1996) clonaron el receptor cuya existencia había implicado la farmacología de este péptido, lo que convierte al GHRP-6 en el agonista histórico de referencia de la diana.",
        "**Modelos de señalización del apetito:** Las investigaciones de laboratorio usan su estimulación del apetito, propia de un mimético de grelina, como lectura distinta de la liberación de hormona del crecimiento en estudios de conducta alimentaria."
      ],
      citations: [
        "Bowers, C. Y., Sartor, A. O., Reynolds, G. A., et al. (1991). 'On the actions of the growth hormone-releasing hexapeptide, GHRP.' Endocrinology, 128(4), 2027-2035. DOI: 10.1210/endo-128-4-2027 | PMID: 2004615",
        "Howard, A. D., Feighner, S. D., Cully, D. F., et al. (1996). 'A receptor in pituitary and hypothalamus that functions in growth hormone release.' Science, 273(5277), 974-977. DOI: 10.1126/science.273.5277.974 | PMID: 8688086",
        "Robinson, B. M., Friberg, R. D., Bowers, C. Y., et al. (1992). 'Acute growth hormone (GH) response to GH-releasing hexapeptide in humans is independent of endogenous GH-releasing hormone.' Journal of Clinical Endocrinology and Metabolism, 75(4), 1121-1124. DOI: 10.1210/jcem.75.4.1400881 | PMID: 1400881"
      ],
      formula: "C46H56N12O6",
      molarMass: "873.0 g/mol (PubChem CID 9919153)",
      sequence: "His-D-Trp-Ala-Trp-D-Phe-Lys-NH2 (6 residuos; dos triptófanos, dos posiciones en configuración D, amida C-terminal)",
      retentionTime: 5.8
    }
  },
  "ghrp-2-spray": {
    en: {
      abstract: "GHRP-2, catalogued in the literature as pralmorelin, is a synthetic hexapeptide agonist at the ghrelin receptor developed as a structural revision of the earlier GHRP-6. The receptor was cloned by Howard and colleagues in 1996, following the pharmacological groundwork Bowers and colleagues laid on the original hexapeptide series. Two design changes distinguish GHRP-2 from its predecessor: substitution of a non-proteinogenic naphthylalanine for one tryptophan, and introduction of a third D-configured residue, together increasing potency and reducing the appetite stimulation characteristic of GHRP-6. The compound is monitored in sport, and Reverter-Branchat and colleagues published dried blood spot detection methodology for it in 2021, which makes well-characterized reference material relevant to analytical laboratories. Research Use Only (RUO).",
      mechanism: "GHRP-2 activates the same ghrelin receptor as GHRP-6 and Ipamorelin, and the signaling route is identical: Gq coupling to phospholipase C, cleavage of membrane phosphoinositides into inositol trisphosphate and diacylglycerol, calcium release from intracellular stores, and fusion of growth hormone secretory vesicles. What differs is the structure and therefore the response profile. Research shows the substitution of naphthylalanine for tryptophan and the addition of a third D-configured residue together increase potency relative to the parent hexapeptide while reducing the appetite stimulation that characterizes GHRP-6. It does not, however, achieve the hormone selectivity Raun and colleagues documented for Ipamorelin, which releases growth hormone without concurrent corticotropin and prolactin elevation. GHRP-2 therefore sits between the two on the class potency and selectivity map.",
      benefits: [
        "**Three-Way Secretagogue Panels:** Research shows intermediate potency and selectivity between GHRP-6 and Ipamorelin, positioning it as the middle reference point when all three are run together.",
        "**Calcium Mobilization Assays:** Studies indicate Gq-coupled signaling in cells expressing the ghrelin receptor, measured as intracellular calcium flux rather than cAMP accumulation.",
        "**Analytical Reference Material:** Reverter-Branchat and colleagues (2021) published dried blood spot detection methodology for this compound, work that requires well-characterized reference standard.",
        "**Structure-Activity Comparison:** Laboratory investigations pair it against GHRP-6 to isolate what the naphthylalanine substitution and the additional D-configured residue contribute.",
        "**Chiral Method Development:** Research shows four non-standard stereochemical and residue positions, making it a demanding and therefore useful test compound for chiral separation methods."
      ],
      citations: [
        "Howard, A. D., Feighner, S. D., Cully, D. F., et al. (1996). 'A receptor in pituitary and hypothalamus that functions in growth hormone release.' Science, 273(5277), 974-977. DOI: 10.1126/science.273.5277.974 | PMID: 8688086",
        "Bowers, C. Y., Sartor, A. O., Reynolds, G. A., et al. (1991). 'On the actions of the growth hormone-releasing hexapeptide, GHRP.' Endocrinology, 128(4), 2027-2035. DOI: 10.1210/endo-128-4-2027 | PMID: 2004615",
        "Reverter-Branchat, G., Segura, J., & Pozo, O. J. (2021). 'On the road of dried blood spot sampling for antidoping tests: Detection of GHRP-2 abuse.' Drug Testing and Analysis, 13(3), 510-522. DOI: 10.1002/dta.2975 | PMID: 33197153"
      ],
      formula: "C45H55N9O6",
      molarMass: "818.0 g/mol (PubChem CID 6918245, pralmorelin)",
      sequence: "D-Ala-D-2-Nal-Ala-Trp-D-Phe-Lys-NH2 (6 residues; three D-configured positions plus 2-naphthylalanine, C-terminal amide)",
      retentionTime: 7.1
    },
    es: {
      abstract: "El GHRP-2, catalogado en la literatura como pralmorelina, es un hexapéptido sintético agonista del receptor de grelina desarrollado como revisión estructural del anterior GHRP-6. El receptor fue clonado por Howard y colaboradores en 1996, tras el trabajo farmacológico de base que Bowers y colaboradores realizaron sobre la serie original de hexapéptidos. Dos cambios de diseño distinguen al GHRP-2 de su predecesor: la sustitución de un triptófano por una naftilalanina no proteinogénica y la introducción de un tercer residuo en configuración D, que juntos aumentan la potencia y reducen la estimulación del apetito característica del GHRP-6. El compuesto está monitorizado en el deporte, y Reverter-Branchat y colaboradores publicaron en 2021 metodología de detección en gotas de sangre seca, lo que hace relevante el material de referencia bien caracterizado para laboratorios analíticos. Uso Exclusivo de Investigación (RUO).",
      mechanism: "El GHRP-2 activa el mismo receptor de grelina que el GHRP-6 y la ipamorelina, y la ruta de señalización es idéntica: acoplamiento a Gq y fosfolipasa C, escisión de fosfoinosítidos de membrana en inositol trifosfato y diacilglicerol, liberación de calcio de depósitos intracelulares y fusión de vesículas secretoras de hormona del crecimiento. Lo que difiere es la estructura y por tanto el perfil de respuesta. La investigación muestra que la sustitución de triptófano por naftilalanina y la adición de un tercer residuo en configuración D aumentan juntas la potencia respecto al hexapéptido madre reduciendo la estimulación del apetito que caracteriza al GHRP-6. No alcanza, sin embargo, la selectividad hormonal que Raun y colaboradores documentaron para la ipamorelina, que libera hormona del crecimiento sin elevación concurrente de corticotropina y prolactina. El GHRP-2 se sitúa por tanto entre ambos en el mapa de potencia y selectividad de la clase.",
      benefits: [
        "**Paneles triples de secretagogos:** La investigación muestra potencia y selectividad intermedias entre el GHRP-6 y la ipamorelina, lo que lo posiciona como punto de referencia central cuando los tres se corren juntos.",
        "**Ensayos de movilización de calcio:** Los estudios indican señalización acoplada a Gq en células que expresan el receptor de grelina, medida como flujo de calcio intracelular y no como acumulación de cAMP.",
        "**Material de referencia analítica:** Reverter-Branchat y colaboradores (2021) publicaron metodología de detección en gotas de sangre seca para este compuesto, trabajo que requiere un estándar de referencia bien caracterizado.",
        "**Comparación estructura-actividad:** Las investigaciones de laboratorio lo emparejan con el GHRP-6 para aislar la contribución de la sustitución por naftilalanina y del residuo adicional en configuración D.",
        "**Desarrollo de métodos quirales:** La investigación muestra cuatro posiciones estereoquímicas y de residuo no estándar, lo que lo convierte en un compuesto de prueba exigente y por ello útil para métodos de separación quiral."
      ],
      citations: [
        "Howard, A. D., Feighner, S. D., Cully, D. F., et al. (1996). 'A receptor in pituitary and hypothalamus that functions in growth hormone release.' Science, 273(5277), 974-977. DOI: 10.1126/science.273.5277.974 | PMID: 8688086",
        "Bowers, C. Y., Sartor, A. O., Reynolds, G. A., et al. (1991). 'On the actions of the growth hormone-releasing hexapeptide, GHRP.' Endocrinology, 128(4), 2027-2035. DOI: 10.1210/endo-128-4-2027 | PMID: 2004615",
        "Reverter-Branchat, G., Segura, J., & Pozo, O. J. (2021). 'On the road of dried blood spot sampling for antidoping tests: Detection of GHRP-2 abuse.' Drug Testing and Analysis, 13(3), 510-522. DOI: 10.1002/dta.2975 | PMID: 33197153"
      ],
      formula: "C45H55N9O6",
      molarMass: "818.0 g/mol (PubChem CID 6918245, pralmorelin)",
      sequence: "D-Ala-D-2-Nal-Ala-Trp-D-Phe-Lys-NH2 (6 residuos; tres posiciones en configuración D más 2-naftilalanina, amida C-terminal)",
      retentionTime: 7.1
    }
  },
  "dihexa-spray": {
    en: {
      abstract: "Dihexa is a small metabolically stabilized analog derived from angiotensin IV, consisting of two amino acid residues capped with a six-carbon acyl group at the amino terminus and a six-carbon amide linker at the carboxy end. McCoy and colleagues reported in 2013 on the evaluation of metabolically stabilized angiotensin IV analogs as procognitive agents, work that has not been retracted and remains the reference characterization of the series. An important caveat applies to the mechanism literature: the two papers that originally established hepatocyte growth factor and c-Met receptor potentiation as the mode of action were retracted by the publishing journal in 2025. Wright and Harding reviewed the brain hepatocyte growth factor and c-Met system separately, and Sun and colleagues reported PI3K and Akt pathway effects in 2021. Research Use Only (RUO).",
      mechanism: "The mechanism proposed for Dihexa is potentiation of hepatocyte growth factor signaling at c-Met, a receptor tyrosine kinase, which would place it apart from every G protein-coupled receptor agonist in this catalog. On that model the compound does not activate the receptor directly but strengthens the interaction between the growth factor and its receptor, with downstream PI3K and Akt signaling driving dendritic spine formation. Two qualifications matter. First, the primary papers establishing that mechanism were retracted in 2025, so it should be treated as an unsettled hypothesis rather than an established pathway. Second, what remains well supported is narrower: McCoy and colleagues characterized the metabolically stabilized angiotensin IV analog series in non-retracted work, and Sun and colleagues reported PI3K and Akt engagement in a transgenic model. The parent molecule, angiotensin IV, is a fragment of the renin-angiotensin system.",
      benefits: [
        "**Synaptogenesis Assays:** Research shows dendritic spine density and synapsin puncta counts in hippocampal neuron culture serve as the standard immunofluorescence readout for this compound.",
        "**Angiotensin IV Analog Series:** McCoy and colleagues (2013) characterized the metabolically stabilized analog series in work that has not been retracted, providing the reference structure-activity framework.",
        "**PI3K and Akt Signaling:** Sun and colleagues (2021) report pathway engagement and behavioural effects in the APP/PS1 transgenic mouse model, measured by immunoblot alongside memory testing.",
        "**Growth Factor System Context:** Wright and Harding (2015) reviewed the brain hepatocyte growth factor and c-Met system independently of the retracted primary papers.",
        "**Mechanism Verification Gap:** The two foundational hepatocyte growth factor and c-Met papers were retracted in 2025, leaving direct mechanistic confirmation an open and publishable question."
      ],
      citations: [
        "McCoy, A. T., Benoist, C. C., Wright, J. W., et al. (2013). 'Evaluation of metabolically stabilized angiotensin IV analogs as procognitive/antidementia agents.' Journal of Pharmacology and Experimental Therapeutics, 344(1), 141-154. DOI: 10.1124/jpet.112.199497 | PMID: 23055539",
        "Wright, J. W., & Harding, J. W. (2015). 'The Brain Hepatocyte Growth Factor/c-Met Receptor System: A New Target for the Treatment of Alzheimer's Disease.' Journal of Alzheimer's Disease, 45(4), 985-1000. DOI: 10.3233/JAD-142814 | PMID: 25649658",
        "Sun, X., Deng, Y., Fu, X., et al. (2021). 'AngIV-Analog Dihexa Rescues Cognitive Impairment and Recovers Memory in the APP/PS1 Mouse via the PI3K/AKT Signaling Pathway.' Brain Sciences, 11(11), 1487. DOI: 10.3390/brainsci11111487 | PMID: 34827486"
      ],
      formula: "C27H44N4O5",
      molarMass: "504.7 g/mol (PubChem CID 129010512)",
      sequence: "Small Molecule — N-hexanoyl-Tyr-Ile-(6)-aminohexanoic amide; a two-residue angiotensin IV analog with six-carbon caps at both ends",
      retentionTime: 11.6
    },
    es: {
      abstract: "El Dihexa es un análogo pequeño metabólicamente estabilizado derivado de la angiotensina IV, formado por dos residuos de aminoácido con un grupo acilo de seis carbonos en el extremo amino y un enlazador amida de seis carbonos en el extremo carboxilo. McCoy y colaboradores reportaron en 2013 la evaluación de análogos de angiotensina IV metabólicamente estabilizados como agentes procognitivos, trabajo que no ha sido retractado y sigue siendo la caracterización de referencia de la serie. Una salvedad importante aplica a la literatura del mecanismo: los dos artículos que establecieron originalmente la potenciación del factor de crecimiento de hepatocitos y del receptor c-Met como modo de acción fueron retractados por la revista editora en 2025. Wright y Harding revisaron por separado el sistema cerebral de factor de crecimiento de hepatocitos y c-Met, y Sun y colaboradores reportaron efectos en la vía PI3K y Akt en 2021. Uso Exclusivo de Investigación (RUO).",
      mechanism: "El mecanismo propuesto para el Dihexa es la potenciación de la señalización del factor de crecimiento de hepatocitos en c-Met, un receptor tirosina quinasa, lo que lo separaría de todos los agonistas de receptores acoplados a proteínas G del catálogo. Según ese modelo el compuesto no activa el receptor directamente sino que refuerza la interacción entre el factor de crecimiento y su receptor, con la señalización secundaria PI3K y Akt impulsando la formación de espinas dendríticas. Dos matices importan. Primero, los artículos primarios que establecieron ese mecanismo fueron retractados en 2025, por lo que debe tratarse como hipótesis no resuelta y no como vía establecida. Segundo, lo que sigue bien respaldado es más acotado: McCoy y colaboradores caracterizaron la serie de análogos de angiotensina IV metabólicamente estabilizados en trabajo no retractado, y Sun y colaboradores reportaron activación de PI3K y Akt en un modelo transgénico. La molécula madre, la angiotensina IV, es un fragmento del sistema renina-angiotensina.",
      benefits: [
        "**Ensayos de sinaptogénesis:** La investigación muestra que la densidad de espinas dendríticas y el recuento de puntos de sinapsina en cultivo de neuronas hipocampales son la lectura estándar de inmunofluorescencia para este compuesto.",
        "**Serie de análogos de angiotensina IV:** McCoy y colaboradores (2013) caracterizaron la serie de análogos metabólicamente estabilizados en trabajo no retractado, aportando el marco de referencia estructura-actividad.",
        "**Señalización PI3K y Akt:** Sun y colaboradores (2021) reportan activación de la vía y efectos conductuales en el modelo de ratón transgénico APP/PS1, medidos por inmunotransferencia junto con pruebas de memoria.",
        "**Contexto del sistema de factores de crecimiento:** Wright y Harding (2015) revisaron el sistema cerebral de factor de crecimiento de hepatocitos y c-Met de forma independiente a los artículos primarios retractados.",
        "**Vacío de verificación del mecanismo:** Los dos artículos fundacionales sobre factor de crecimiento de hepatocitos y c-Met fueron retractados en 2025, dejando la confirmación mecanística directa como pregunta abierta y publicable."
      ],
      citations: [
        "McCoy, A. T., Benoist, C. C., Wright, J. W., et al. (2013). 'Evaluation of metabolically stabilized angiotensin IV analogs as procognitive/antidementia agents.' Journal of Pharmacology and Experimental Therapeutics, 344(1), 141-154. DOI: 10.1124/jpet.112.199497 | PMID: 23055539",
        "Wright, J. W., & Harding, J. W. (2015). 'The Brain Hepatocyte Growth Factor/c-Met Receptor System: A New Target for the Treatment of Alzheimer's Disease.' Journal of Alzheimer's Disease, 45(4), 985-1000. DOI: 10.3233/JAD-142814 | PMID: 25649658",
        "Sun, X., Deng, Y., Fu, X., et al. (2021). 'AngIV-Analog Dihexa Rescues Cognitive Impairment and Recovers Memory in the APP/PS1 Mouse via the PI3K/AKT Signaling Pathway.' Brain Sciences, 11(11), 1487. DOI: 10.3390/brainsci11111487 | PMID: 34827486"
      ],
      formula: "C27H44N4O5",
      molarMass: "504.7 g/mol (PubChem CID 129010512)",
      sequence: "Molécula pequeña — N-hexanoíl-Tyr-Ile-(6)-amida de ácido aminohexanoico; análogo de angiotensina IV de dos residuos con extremos de seis carbonos",
      retentionTime: 11.6
    }
  },
  "cjc-1295-ipamorelin-spray": {
    en: {
      abstract: "CJC-1295 + Ipamorelin is a two-component research blend that engages the growth hormone axis at two independent receptors. CJC-1295 is a 29-residue analog of growth hormone-releasing hormone carrying four engineered substitutions; Jetté and colleagues characterized the albumin-bioconjugate approach in 2005, and Teichman and colleagues reported prolonged growth hormone and IGF-1 secretion in 2006. Ipamorelin is a five-residue ghrelin receptor agonist described by Raun and colleagues in 1998, notable because it released growth hormone without the corticotropin and prolactin elevation characteristic of earlier secretagogues. Because the two receptors couple through different G proteins, the pairing allows a single preparation to raise both cAMP and intracellular calcium in somatotroph models. Research Use Only (RUO).",
      mechanism: "The two components converge on growth hormone release from opposite directions. CJC-1295 activates the GHRH receptor, a class B G protein-coupled receptor, coupling through Gs to adenylyl cyclase; the resulting cAMP activates protein kinase A, which phosphorylates CREB and drives Pit-1 expression, sustaining transcription of the growth hormone gene. That arm therefore increases synthesis, not only release. Ipamorelin activates the ghrelin receptor, which couples instead through Gq to phospholipase C, generating inositol trisphosphate that releases calcium from intracellular stores and triggers fusion of secretory vesicles. Research shows Ipamorelin also reduces inhibitory somatostatin tone. Combining two GHRH analogs would produce competition for one receptor; combining a GHRH analog with a ghrelin receptor agonist produces engagement of two.",
      benefits: [
        "**Dual Second Messenger Readout:** Research shows cAMP and intracellular calcium can be tracked simultaneously in one somatotroph preparation, since the two arms couple through different G proteins.",
        "**Additive Versus Synergistic Testing:** Laboratory investigations run each component alone in adjacent wells, the only design that establishes whether the combined growth hormone response exceeds the sum of its parts.",
        "**Prolonged Secretion Profile:** Teichman and colleagues (2006) reported sustained growth hormone and IGF-1 elevation from the GHRH analog, giving a time-course dimension the pentapeptide alone does not provide.",
        "**Secretagogue Selectivity:** Raun and colleagues (1998) established that Ipamorelin releases growth hormone without the corticotropin and prolactin response of GHRP-6, which is why it is the partner of choice.",
        "**Somatostatin Tone Studies:** Research shows the ghrelin receptor arm reduces inhibitory somatostatin signaling, a variable isolatable by comparing blend against single-component responses."
      ],
      citations: [
        "Teichman, S. L., Neale, A., Lawrence, B., et al. (2006). 'Prolonged stimulation of growth hormone (GH) and insulin-like growth factor I secretion by CJC-1295, a long-acting analog of GH-releasing hormone, in healthy adults.' Journal of Clinical Endocrinology and Metabolism, 91(3), 799-805. DOI: 10.1210/jc.2005-1536 | PMID: 16352683",
        "Raun, K., Hansen, B. S., Johansen, N. L., et al. (1998). 'Ipamorelin, the first selective growth hormone secretagogue.' European Journal of Endocrinology, 139(5), 552-561. DOI: 10.1530/eje.0.1390552 | PMID: 9849822",
        "Howard, A. D., Feighner, S. D., Cully, D. F., et al. (1996). 'A receptor in pituitary and hypothalamus that functions in growth hormone release.' Science, 273(5277), 974-977. DOI: 10.1126/science.273.5277.974 | PMID: 8688086"
      ],
      formula: "Blend — no single formula applies; a 29-residue GHRH analog combined with Ipamorelin (C38H49N9O5)",
      molarMass: "Ipamorelin 711.9 g/mol; CJC-1295 3367.9 g/mol without DAC or 3647.2 g/mol with DAC — confirm which form and the blend ratio with manufacturer COA",
      sequence: "Two-peptide blend: a 29-residue tetrasubstituted GHRH analog combined with Ipamorelin (Aib-His-D-2-Nal-D-Phe-Lys-NH2) — verify the CJC-1295 form and blend ratio with manufacturer COA",
      retentionTime: 7.6
    },
    es: {
      abstract: "CJC-1295 + Ipamorelin es una mezcla de investigación de dos componentes que activa el eje de la hormona del crecimiento en dos receptores independientes. El CJC-1295 es un análogo de 29 residuos de la hormona liberadora de hormona del crecimiento con cuatro sustituciones diseñadas; Jetté y colaboradores caracterizaron el enfoque de bioconjugado con albúmina en 2005, y Teichman y colaboradores reportaron secreción prolongada de hormona del crecimiento e IGF-1 en 2006. La ipamorelina es un agonista del receptor de grelina de cinco residuos descrito por Raun y colaboradores en 1998, notable por liberar hormona del crecimiento sin la elevación de corticotropina y prolactina característica de secretagogos anteriores. Como ambos receptores se acoplan por proteínas G distintas, la combinación permite que una sola preparación eleve el cAMP y el calcio intracelular en modelos de somatotropos. Uso Exclusivo de Investigación (RUO).",
      mechanism: "Los dos componentes convergen en la liberación de hormona del crecimiento desde direcciones opuestas. El CJC-1295 activa el receptor de GHRH, un receptor acoplado a proteínas G de clase B, mediante Gs y la adenilato ciclasa; el cAMP resultante activa la proteína quinasa A, que fosforila el CREB e impulsa la expresión de Pit-1, sosteniendo la transcripción del gen de la hormona del crecimiento. Ese brazo aumenta por tanto la síntesis y no solo la liberación. La ipamorelina activa el receptor de grelina, que se acopla en cambio vía Gq a la fosfolipasa C, generando inositol trifosfato que libera calcio de los depósitos intracelulares y desencadena la fusión de vesículas secretoras. La investigación muestra que la ipamorelina además reduce el tono inhibitorio de somatostatina. Combinar dos análogos de GHRH produciría competencia por un receptor; combinar un análogo de GHRH con un agonista del receptor de grelina produce la activación de dos.",
      benefits: [
        "**Lectura de dos segundos mensajeros:** La investigación muestra que el cAMP y el calcio intracelular pueden seguirse simultáneamente en una sola preparación de somatotropos, ya que ambos brazos se acoplan por proteínas G distintas.",
        "**Pruebas aditivas frente a sinérgicas:** Las investigaciones de laboratorio corren cada componente por separado en pozos contiguos, el único diseño que establece si la respuesta combinada supera la suma de sus partes.",
        "**Perfil de secreción prolongada:** Teichman y colaboradores (2006) reportaron elevación sostenida de hormona del crecimiento e IGF-1 con el análogo de GHRH, aportando una dimensión temporal que el pentapéptido por sí solo no ofrece.",
        "**Selectividad del secretagogo:** Raun y colaboradores (1998) establecieron que la ipamorelina libera hormona del crecimiento sin la respuesta de corticotropina y prolactina del GHRP-6, razón por la cual es la pareja elegida.",
        "**Estudios del tono de somatostatina:** La investigación muestra que el brazo del receptor de grelina reduce la señalización inhibitoria de somatostatina, variable aislable comparando la mezcla con las respuestas de cada componente."
      ],
      citations: [
        "Teichman, S. L., Neale, A., Lawrence, B., et al. (2006). 'Prolonged stimulation of growth hormone (GH) and insulin-like growth factor I secretion by CJC-1295, a long-acting analog of GH-releasing hormone, in healthy adults.' Journal of Clinical Endocrinology and Metabolism, 91(3), 799-805. DOI: 10.1210/jc.2005-1536 | PMID: 16352683",
        "Raun, K., Hansen, B. S., Johansen, N. L., et al. (1998). 'Ipamorelin, the first selective growth hormone secretagogue.' European Journal of Endocrinology, 139(5), 552-561. DOI: 10.1530/eje.0.1390552 | PMID: 9849822",
        "Howard, A. D., Feighner, S. D., Cully, D. F., et al. (1996). 'A receptor in pituitary and hypothalamus that functions in growth hormone release.' Science, 273(5277), 974-977. DOI: 10.1126/science.273.5277.974 | PMID: 8688086"
      ],
      formula: "Blend — no single formula applies; a 29-residue GHRH analog combined with Ipamorelin (C38H49N9O5)",
      molarMass: "Ipamorelin 711.9 g/mol; CJC-1295 3367.9 g/mol without DAC or 3647.2 g/mol with DAC — confirm which form and the blend ratio with manufacturer COA",
      sequence: "Mezcla de dos péptidos: un análogo de GHRH de 29 residuos con cuatro sustituciones combinado con ipamorelina (Aib-His-D-2-Nal-D-Phe-Lys-NH2) — verifique la forma de CJC-1295 y la proporción con el COA del fabricante",
      retentionTime: 7.6
    }
  },
  "cjc-1295-dac-spray": {
    en: {
      abstract: "CJC-1295 with DAC is a 29-residue analog of growth hormone-releasing hormone carrying four engineered substitutions plus a Drug Affinity Complex, a maleimide group designed to form a covalent bond with a free cysteine thiol on circulating albumin. Jetté and colleagues reported in 2005 that human growth hormone-releasing factor albumin bioconjugates activate the receptor on the anterior pituitary, establishing that conjugation does not abolish receptor engagement. Teichman and colleagues subsequently reported prolonged growth hormone and insulin-like growth factor 1 secretion in 2006. The covalent conjugation strategy distinguishes it sharply from the reversible fatty-acid acylation used on GLP-1 analogs such as Semaglutide, and from the non-DAC version of the same peptide backbone. Research Use Only (RUO).",
      mechanism: "Receptor engagement is conventional for a GHRH analog: binding to the GHRH receptor on pituitary somatotroph cells couples through Gs to adenylyl cyclase, raising cAMP and activating protein kinase A, which phosphorylates CREB and drives Pit-1-dependent transcription of the growth hormone gene. The distinguishing mechanism sits outside the receptor entirely. The Drug Affinity Complex terminates in a maleimide, a group that reacts specifically and covalently with free thiols, and serum albumin presents exactly one accessible cysteine thiol. The resulting conjugate is a permanent chemical bond rather than an association. Research shows this differs fundamentally from the fatty-acid acylation strategy used on Semaglutide and Tirzepatide, where albumin binding is reversible and the peptide continuously exchanges between bound and free states. The four backbone substitutions independently block enzymatic degradation.",
      benefits: [
        "**Covalent Albumin Conjugation:** Research shows the maleimide group forms a permanent bond with the single free cysteine thiol on serum albumin, verifiable by incubating with purified albumin and following adduct formation.",
        "**Receptor Engagement After Conjugation:** Jetté and colleagues (2005) demonstrated albumin bioconjugates still activate the pituitary receptor, the control that validates the whole design.",
        "**Prolonged Secretion Profile:** Teichman and colleagues (2006) reported sustained growth hormone and IGF-1 elevation, giving a time-course readout the non-DAC version cannot provide.",
        "**Covalent Versus Reversible Comparison:** Laboratory investigations pair it against fatty-acid-acylated peptides such as Semaglutide to contrast permanent conjugation with reversible albumin association.",
        "**DAC Versus Non-DAC Controls:** Studies indicate the two versions share receptor pharmacology but differ entirely in duration, making the pair a clean way to isolate conjugation effects from receptor effects."
      ],
      citations: [
        "Teichman, S. L., Neale, A., Lawrence, B., et al. (2006). 'Prolonged stimulation of growth hormone (GH) and insulin-like growth factor I secretion by CJC-1295, a long-acting analog of GH-releasing hormone, in healthy adults.' Journal of Clinical Endocrinology and Metabolism, 91(3), 799-805. DOI: 10.1210/jc.2005-1536 | PMID: 16352683",
        "Jetté, L., Léger, R., Thibaudeau, K., et al. (2005). 'Human growth hormone-releasing factor (hGRF)1-29-albumin bioconjugates activate the GRF receptor on the anterior pituitary in rats.' Endocrinology, 146(7), 3052-3058. DOI: 10.1210/en.2004-1286 | PMID: 15817669",
        "Halmos, G., Szabo, Z., Juhasz, E., et al. (2023). 'Signaling mechanism of growth hormone-releasing hormone receptor.' Vitamins and Hormones, 123, 1-26. DOI: 10.1016/bs.vh.2023.06.004 | PMID: 37717982"
      ],
      formula: "C165H269N47O46",
      molarMass: "3647.2 g/mol (PubChem CID 91971820)",
      sequence: "29-residue GHRH analog with four engineered substitutions plus a maleimidoproprionyl Drug Affinity Complex at the C-terminal lysine — verify the exact conjugation site with manufacturer COA",
      retentionTime: 9.8
    },
    es: {
      abstract: "El CJC-1295 con DAC es un análogo de 29 residuos de la hormona liberadora de hormona del crecimiento con cuatro sustituciones diseñadas más un Complejo de Afinidad Farmacológica, un grupo maleimida diseñado para formar un enlace covalente con un tiol libre de cisteína en la albúmina circulante. Jetté y colaboradores reportaron en 2005 que los bioconjugados de factor liberador de hormona del crecimiento humano con albúmina activan el receptor en la hipófisis anterior, estableciendo que la conjugación no anula la activación del receptor. Teichman y colaboradores reportaron después secreción prolongada de hormona del crecimiento y de factor de crecimiento insulínico tipo 1 en 2006. La estrategia de conjugación covalente lo distingue marcadamente de la acilación reversible con ácidos grasos usada en análogos de GLP-1 como la semaglutida, y de la versión sin DAC del mismo esqueleto peptídico. Uso Exclusivo de Investigación (RUO).",
      mechanism: "La activación del receptor es convencional para un análogo de GHRH: la unión al receptor de GHRH en las células somatotropas hipofisarias se acopla vía Gs a la adenilato ciclasa, eleva el cAMP y activa la proteína quinasa A, que fosforila el CREB e impulsa la transcripción del gen de la hormona del crecimiento dependiente de Pit-1. El mecanismo distintivo se sitúa por completo fuera del receptor. El Complejo de Afinidad Farmacológica termina en una maleimida, un grupo que reacciona específica y covalentemente con tioles libres, y la albúmina sérica presenta exactamente un tiol de cisteína accesible. El conjugado resultante es un enlace químico permanente y no una asociación. La investigación muestra que esto difiere fundamentalmente de la estrategia de acilación con ácidos grasos usada en la semaglutida y la tirzepatida, donde la unión a albúmina es reversible y el péptido intercambia continuamente entre estados unido y libre. Las cuatro sustituciones del esqueleto bloquean de forma independiente la degradación enzimática.",
      benefits: [
        "**Conjugación covalente con albúmina:** La investigación muestra que el grupo maleimida forma un enlace permanente con el único tiol de cisteína libre de la albúmina sérica, verificable incubando con albúmina purificada y siguiendo la formación del aducto.",
        "**Activación del receptor tras la conjugación:** Jetté y colaboradores (2005) demostraron que los bioconjugados con albúmina siguen activando el receptor hipofisario, el control que valida todo el diseño.",
        "**Perfil de secreción prolongada:** Teichman y colaboradores (2006) reportaron elevación sostenida de hormona del crecimiento e IGF-1, aportando una lectura temporal que la versión sin DAC no ofrece.",
        "**Comparación covalente frente a reversible:** Las investigaciones de laboratorio lo emparejan con péptidos acilados con ácidos grasos como la semaglutida para contrastar conjugación permanente con asociación reversible a albúmina.",
        "**Controles con y sin DAC:** Los estudios indican que ambas versiones comparten farmacología de receptor pero difieren por completo en duración, lo que convierte a la pareja en una forma limpia de aislar efectos de conjugación de efectos de receptor."
      ],
      citations: [
        "Teichman, S. L., Neale, A., Lawrence, B., et al. (2006). 'Prolonged stimulation of growth hormone (GH) and insulin-like growth factor I secretion by CJC-1295, a long-acting analog of GH-releasing hormone, in healthy adults.' Journal of Clinical Endocrinology and Metabolism, 91(3), 799-805. DOI: 10.1210/jc.2005-1536 | PMID: 16352683",
        "Jetté, L., Léger, R., Thibaudeau, K., et al. (2005). 'Human growth hormone-releasing factor (hGRF)1-29-albumin bioconjugates activate the GRF receptor on the anterior pituitary in rats.' Endocrinology, 146(7), 3052-3058. DOI: 10.1210/en.2004-1286 | PMID: 15817669",
        "Halmos, G., Szabo, Z., Juhasz, E., et al. (2023). 'Signaling mechanism of growth hormone-releasing hormone receptor.' Vitamins and Hormones, 123, 1-26. DOI: 10.1016/bs.vh.2023.06.004 | PMID: 37717982"
      ],
      formula: "C165H269N47O46",
      molarMass: "3647.2 g/mol (PubChem CID 91971820)",
      sequence: "Análogo de GHRH de 29 residuos con cuatro sustituciones diseñadas más un Complejo de Afinidad Farmacológica maleimidopropionilo en la lisina C-terminal — verifique el sitio exacto de conjugación con el COA del fabricante",
      retentionTime: 9.8
    }
  },
  "cjc-1295-no-dac-spray": {
    en: {
      abstract: "CJC-1295 without DAC, also catalogued as modified GRF 1-29, is a 29-residue analog of growth hormone-releasing hormone carrying four engineered substitutions relative to the native fragment. Each substitution addresses a specific liability: a D-configured second residue blocks aminopeptidase cleavage, a glutamine substitution removes a deamidation-prone asparagine, an alanine substitution improves stability, and a leucine substitution eliminates the oxidation-prone methionine that Sermorelin retains. Jetté and colleagues characterized the receptor pharmacology of this backbone in 2005 in the context of albumin bioconjugates, and Stepień and colleagues reported activity of the unmodified 29-residue fragment in a neuroendocrine cell line. The compound differs from the DAC version by the absence of the albumin-conjugating group alone. Research Use Only (RUO).",
      mechanism: "Receptor engagement follows the standard GHRH route: binding to the GHRH receptor on pituitary somatotroph cells couples through Gs to adenylyl cyclase, raising intracellular cAMP and activating protein kinase A, which phosphorylates CREB and drives Pit-1-dependent transcription of the growth hormone gene, increasing both synthesis and release. The distinguishing feature is not the receptor but the backbone. Research shows the four substitutions each remove a specific degradation route rather than altering receptor affinity: blocking aminopeptidase cleavage, eliminating a deamidation site, improving conformational stability, and removing an oxidation-prone residue. Because Sermorelin is the same 29-residue fragment without those changes, and the DAC version is the same modified backbone with an albumin-conjugating group added, this compound sits at the informative midpoint of a three-way comparison.",
      benefits: [
        "**Substitution Value Isolation:** Laboratory investigations pair it against Sermorelin, the same-length unmodified fragment, to measure exactly what four engineered substitutions contribute to stability and duration.",
        "**GHRH Receptor Pharmacology:** Research shows receptor-mediated cAMP accumulation in cultured pituitary cells and somatotroph-derived lines, generating concentration-response curves for the target.",
        "**Conjugation Variable Control:** Studies indicate this version and the DAC version share the modified backbone entirely, so pairing them isolates albumin conjugation from receptor pharmacology.",
        "**Enzymatic Stability Profiling:** Research shows the D-configured second residue blocks aminopeptidase cleavage, measurable by comparing degradation rates against the native fragment side by side.",
        "**Reduced Degradation Surface:** Studies indicate the substitutions removed both the oxidation-prone methionine and the deamidation-prone asparagine, giving a cleaner stability profile than Sermorelin."
      ],
      citations: [
        "Jetté, L., Léger, R., Thibaudeau, K., et al. (2005). 'Human growth hormone-releasing factor (hGRF)1-29-albumin bioconjugates activate the GRF receptor on the anterior pituitary in rats.' Endocrinology, 146(7), 3052-3058. DOI: 10.1210/en.2004-1286 | PMID: 15817669",
        "Stepień, T., Sacewicz, M., Lawnicka, H., et al. (2009). 'Stimulatory effect of growth hormone-releasing hormone (GHRH(1-29)NH2) on the proliferation, VEGF and chromogranin A secretion by human neuroendocrine tumor cell line NCI-H727 in vitro.' Neuropeptides, 43(5), 397-400. DOI: 10.1016/j.npep.2009.08.005 | PMID: 19747727",
        "Halmos, G., Szabo, Z., Juhasz, E., et al. (2023). 'Signaling mechanism of growth hormone-releasing hormone receptor.' Vitamins and Hormones, 123, 1-26. DOI: 10.1016/bs.vh.2023.06.004 | PMID: 37717982"
      ],
      formula: "C152H252N44O42",
      molarMass: "3367.9 g/mol (PubChem CID 56841945)",
      sequence: "29-residue GHRH analog with four engineered substitutions (D-configured residue 2, glutamine 8, alanine 15, leucine 27), C-terminal amide; no methionine and no free asparagine — verify exact positions with manufacturer COA",
      retentionTime: 8.1
    },
    es: {
      abstract: "El CJC-1295 sin DAC, catalogado también como GRF 1-29 modificado, es un análogo de 29 residuos de la hormona liberadora de hormona del crecimiento con cuatro sustituciones diseñadas respecto al fragmento nativo. Cada sustitución aborda una vulnerabilidad concreta: un segundo residuo en configuración D bloquea la escisión por aminopeptidasa, una sustitución por glutamina elimina una asparagina propensa a desamidación, una sustitución por alanina mejora la estabilidad, y una sustitución por leucina elimina la metionina propensa a oxidación que la sermorelina conserva. Jetté y colaboradores caracterizaron la farmacología de receptor de este esqueleto en 2005 en el contexto de bioconjugados con albúmina, y Stepień y colaboradores reportaron actividad del fragmento de 29 residuos sin modificar en una línea neuroendocrina. El compuesto difiere de la versión con DAC únicamente por la ausencia del grupo conjugante de albúmina. Uso Exclusivo de Investigación (RUO).",
      mechanism: "La activación del receptor sigue la ruta estándar de GHRH: la unión al receptor de GHRH en las células somatotropas hipofisarias se acopla vía Gs a la adenilato ciclasa, eleva el cAMP intracelular y activa la proteína quinasa A, que fosforila el CREB e impulsa la transcripción del gen de la hormona del crecimiento dependiente de Pit-1, aumentando tanto la síntesis como la liberación. El rasgo distintivo no es el receptor sino el esqueleto. La investigación muestra que las cuatro sustituciones eliminan cada una una ruta concreta de degradación en lugar de alterar la afinidad por el receptor: bloquear la escisión por aminopeptidasa, eliminar un sitio de desamidación, mejorar la estabilidad conformacional y retirar un residuo propenso a oxidación. Como la sermorelina es el mismo fragmento de 29 residuos sin esos cambios, y la versión con DAC es el mismo esqueleto modificado con un grupo conjugante de albúmina añadido, este compuesto ocupa el punto medio informativo de una comparación a tres bandas.",
      benefits: [
        "**Aislamiento del valor de las sustituciones:** Las investigaciones de laboratorio lo emparejan con la sermorelina, el fragmento sin modificar de igual longitud, para medir exactamente qué aportan cuatro sustituciones diseñadas en estabilidad y duración.",
        "**Farmacología del receptor de GHRH:** La investigación muestra acumulación de cAMP mediada por receptor en células hipofisarias en cultivo y líneas derivadas de somatotropos, generando curvas concentración-respuesta para la diana.",
        "**Control de la variable de conjugación:** Los estudios indican que esta versión y la versión con DAC comparten por completo el esqueleto modificado, de modo que emparejarlas aísla la conjugación con albúmina de la farmacología del receptor.",
        "**Perfilado de estabilidad enzimática:** La investigación muestra que el segundo residuo en configuración D bloquea la escisión por aminopeptidasa, medible al comparar velocidades de degradación frente al fragmento nativo en paralelo.",
        "**Menor superficie de degradación:** Los estudios indican que las sustituciones eliminaron tanto la metionina propensa a oxidación como la asparagina propensa a desamidación, dando un perfil de estabilidad más limpio que el de la sermorelina."
      ],
      citations: [
        "Jetté, L., Léger, R., Thibaudeau, K., et al. (2005). 'Human growth hormone-releasing factor (hGRF)1-29-albumin bioconjugates activate the GRF receptor on the anterior pituitary in rats.' Endocrinology, 146(7), 3052-3058. DOI: 10.1210/en.2004-1286 | PMID: 15817669",
        "Stepień, T., Sacewicz, M., Lawnicka, H., et al. (2009). 'Stimulatory effect of growth hormone-releasing hormone (GHRH(1-29)NH2) on the proliferation, VEGF and chromogranin A secretion by human neuroendocrine tumor cell line NCI-H727 in vitro.' Neuropeptides, 43(5), 397-400. DOI: 10.1016/j.npep.2009.08.005 | PMID: 19747727",
        "Halmos, G., Szabo, Z., Juhasz, E., et al. (2023). 'Signaling mechanism of growth hormone-releasing hormone receptor.' Vitamins and Hormones, 123, 1-26. DOI: 10.1016/bs.vh.2023.06.004 | PMID: 37717982"
      ],
      formula: "C152H252N44O42",
      molarMass: "3367.9 g/mol (PubChem CID 56841945)",
      sequence: "Análogo de GHRH de 29 residuos con cuatro sustituciones diseñadas (residuo 2 en configuración D, glutamina 8, alanina 15, leucina 27), amida C-terminal; sin metionina ni asparagina libre — verifique las posiciones exactas con el COA del fabricante",
      retentionTime: 8.1
    }
  },
  "cagrilintide-spray": {
    en: {
      abstract: "Cagrilintide is a long-acting synthetic analog of amylin, a pancreatic peptide hormone, engineered with a fatty acid side chain that drives albumin binding and extends circulating duration. Its targets are the amylin receptors, which are unusual among peptide hormone receptors because none is a single gene product: each forms when the calcitonin receptor associates with one of three receptor activity-modifying proteins, generating three distinct subtypes. Cao and colleagues published the structural basis for this receptor phenotype in Science in 2022. Lau and colleagues reported once-weekly cagrilintide findings in 2021, and Enebo and colleagues studied concomitant administration alongside a GLP-1 receptor agonist the same year. The compound retains activity at the calcitonin receptor itself. Research Use Only (RUO).",
      mechanism: "Cagrilintide acts at amylin receptors, and understanding the target requires understanding that these receptors are assembled rather than encoded. The calcitonin receptor, a class B G protein-coupled receptor, associates with one of three receptor activity-modifying proteins; each pairing produces a receptor with distinct pharmacology, so what is called the amylin receptor is really three related subtypes. Research shows activation couples through Gs to adenylyl cyclase, raising cAMP and activating protein kinase A. Because the calcitonin receptor forms the core of every subtype, cagrilintide retains activity at the unpartnered calcitonin receptor as well. The fatty acid side chain contributes no receptor contact and serves albumin binding. This target family is entirely separate from the incretin receptors engaged by Semaglutide and Tirzepatide, which is why the two classes are studied in combination rather than as alternatives.",
      benefits: [
        "**Amylin Receptor Subtype Selectivity:** Research shows distinct pharmacology across the three subtypes, resolved by co-transfecting the calcitonin receptor with each accessory protein and comparing cAMP responses.",
        "**Receptor Assembly Studies:** Cao and colleagues (2022) resolved the structural basis for amylin receptor phenotype, explaining why accessory protein identity changes ligand pharmacology.",
        "**Calcitonin Receptor Cross-Activity:** Studies indicate retained activity at the unpartnered calcitonin receptor, a selectivity dimension measurable in parallel single-receptor assays.",
        "**Combination Pharmacology:** Enebo and colleagues (2021) studied concomitant amylin and GLP-1 receptor engagement, making Semaglutide the standard partner in combination design.",
        "**Aggregation Behaviour:** Laboratory investigations track amylin-family self-association by thioflavin fluorescence, a stability readout that matters more for this class than for most peptides."
      ],
      citations: [
        "Cao, J., Belousoff, M. J., Liang, Y. L., et al. (2022). 'A structural basis for amylin receptor phenotype.' Science, 375(6587), eabm9609. DOI: 10.1126/science.abm9609 | PMID: 35324283",
        "Lau, D. C. W., Erichsen, L., Francisco, A. M., et al. (2021). 'Once-weekly cagrilintide for weight management in people with overweight and obesity: a multicentre, randomised, double-blind, placebo-controlled and active-controlled, dose-finding phase 2 trial.' The Lancet, 398(10317), 2160-2172. DOI: 10.1016/S0140-6736(21)01751-7 | PMID: 34798060",
        "Enebo, L. B., Berthelsen, K. K., Kankam, M., et al. (2021). 'Safety, tolerability, pharmacokinetics, and pharmacodynamics of concomitant administration of multiple doses of cagrilintide with semaglutide 2.4 mg for weight management: a randomised, controlled, phase 1b trial.' The Lancet, 397(10286), 1736-1748. DOI: 10.1016/S0140-6736(21)00845-X | PMID: 33894838"
      ],
      formula: "C194H312N54O59S2",
      molarMass: "4409 g/mol (PubChem CID 171397054)",
      sequence: "Long-acting amylin analog, 32-residue backbone with an internal disulfide bridge and a fatty acid side chain for albumin binding — verify exact sequence and acylation site with manufacturer COA",
      retentionTime: 11.9
    },
    es: {
      abstract: "La cagrilintida es un análogo sintético de acción prolongada de la amilina, una hormona peptídica pancreática, diseñado con una cadena lateral de ácido graso que impulsa la unión a albúmina y extiende la duración circulante. Sus dianas son los receptores de amilina, inusuales entre los receptores de hormonas peptídicas porque ninguno es producto de un solo gen: cada uno se forma cuando el receptor de calcitonina se asocia con una de tres proteínas modificadoras de la actividad del receptor, generando tres subtipos distintos. Cao y colaboradores publicaron la base estructural de este fenotipo en Science en 2022. Lau y colaboradores reportaron hallazgos con cagrilintida semanal en 2021, y Enebo y colaboradores estudiaron la administración concomitante junto a un agonista del receptor de GLP-1 ese mismo año. El compuesto conserva actividad sobre el propio receptor de calcitonina. Uso Exclusivo de Investigación (RUO).",
      mechanism: "La cagrilintida actúa sobre los receptores de amilina, y entender la diana exige entender que estos receptores se ensamblan en lugar de codificarse. El receptor de calcitonina, un receptor acoplado a proteínas G de clase B, se asocia con una de tres proteínas modificadoras de la actividad del receptor; cada emparejamiento produce un receptor con farmacología propia, de modo que lo que se llama receptor de amilina son en realidad tres subtipos relacionados. La investigación muestra que la activación se acopla vía Gs a la adenilato ciclasa, eleva el cAMP y activa la proteína quinasa A. Como el receptor de calcitonina forma el núcleo de cada subtipo, la cagrilintida conserva actividad también sobre el receptor de calcitonina sin acompañante. La cadena lateral de ácido graso no aporta contacto con el receptor y sirve a la unión con albúmina. Esta familia de dianas es completamente distinta de los receptores de incretinas que activan la semaglutida y la tirzepatida, razón por la cual ambas clases se estudian en combinación y no como alternativas.",
      benefits: [
        "**Selectividad entre subtipos de receptor de amilina:** La investigación muestra farmacología distinta entre los tres subtipos, resuelta cotransfectando el receptor de calcitonina con cada proteína accesoria y comparando las respuestas de cAMP.",
        "**Estudios de ensamblaje del receptor:** Cao y colaboradores (2022) resolvieron la base estructural del fenotipo del receptor de amilina, explicando por qué la identidad de la proteína accesoria cambia la farmacología del ligando.",
        "**Actividad cruzada en receptor de calcitonina:** Los estudios indican actividad conservada sobre el receptor de calcitonina sin acompañante, una dimensión de selectividad medible en ensayos paralelos de receptor único.",
        "**Farmacología de combinación:** Enebo y colaboradores (2021) estudiaron la activación concomitante de receptores de amilina y de GLP-1, lo que convierte a la semaglutida en la pareja estándar en diseños de combinación.",
        "**Comportamiento de agregación:** Las investigaciones de laboratorio siguen la autoasociación de la familia de la amilina por fluorescencia de tioflavina, una lectura de estabilidad que importa más en esta clase que en la mayoría de los péptidos."
      ],
      citations: [
        "Cao, J., Belousoff, M. J., Liang, Y. L., et al. (2022). 'A structural basis for amylin receptor phenotype.' Science, 375(6587), eabm9609. DOI: 10.1126/science.abm9609 | PMID: 35324283",
        "Lau, D. C. W., Erichsen, L., Francisco, A. M., et al. (2021). 'Once-weekly cagrilintide for weight management in people with overweight and obesity: a multicentre, randomised, double-blind, placebo-controlled and active-controlled, dose-finding phase 2 trial.' The Lancet, 398(10317), 2160-2172. DOI: 10.1016/S0140-6736(21)01751-7 | PMID: 34798060",
        "Enebo, L. B., Berthelsen, K. K., Kankam, M., et al. (2021). 'Safety, tolerability, pharmacokinetics, and pharmacodynamics of concomitant administration of multiple doses of cagrilintide with semaglutide 2.4 mg for weight management: a randomised, controlled, phase 1b trial.' The Lancet, 397(10286), 1736-1748. DOI: 10.1016/S0140-6736(21)00845-X | PMID: 33894838"
      ],
      formula: "C194H312N54O59S2",
      molarMass: "4409 g/mol (PubChem CID 171397054)",
      sequence: "Análogo de amilina de acción prolongada, esqueleto de 32 residuos con puente disulfuro interno y cadena lateral de ácido graso para unión a albúmina — verifique la secuencia exacta y el sitio de acilación con el COA del fabricante",
      retentionTime: 11.9
    }
  },
  "bpc-157-tb-500-spray": {
    en: {
      abstract: "BPC-157 + TB-500 is a two-component research blend combining a stable gastric pentadecapeptide with an actin-sequestering thymic peptide. The two operate through fundamentally different principles: the first is studied around angiogenic signaling and nitric oxide pathways, work reviewed by Sikiric and colleagues, while the second binds monomeric actin directly and requires no receptor at all. Malinda and colleagues reported in 1997 that the thymic component drives directional migration of human endothelial cells, and Bock-Marquette and colleagues described activation of integrin-linked kinase and Akt signaling in 2004. Because one arm is measurable in cell-free polymerization assays and the other is not, the blend permits unusually clean mechanistic separation. Research Use Only (RUO).",
      mechanism: "The two components of this blend share no mechanistic ground, which is what makes the pairing analytically tractable. The thymic component works by direct protein binding: its actin-binding motif engages monomeric G-actin and holds it in a non-polymerizable state, and because filament assembly depends on free monomer concentration, this sequestration directly sets how quickly actin networks build and dissolve. Research shows the effect is dose-dependent in cell-free systems, requiring no cellular machinery whatsoever. Laboratory investigations additionally describe activation of integrin-linked kinase and downstream Akt signaling for this component. The pentadecapeptide operates through signaling instead, with studies indicating effects on angiogenic pathways and nitric oxide systems. One arm is structural, the other is signaling, and no receptor is shared between them.",
      benefits: [
        "**Cell-Free Mechanism Separation:** Research shows the thymic component sequesters actin in pyrene-actin assays with no cells present, attributing any cell-free signal unambiguously to one arm of the blend.",
        "**Endothelial Migration:** Malinda and colleagues (1997) established directional migration of human umbilical vein endothelial cells, measured in scratch-wound and Boyden chamber formats.",
        "**Integrin-Linked Kinase Signaling:** Bock-Marquette and colleagues (2004) describe activation of integrin-linked kinase and downstream Akt, a survival pathway distinct from the cytoskeletal effect.",
        "**Angiogenic and Nitric Oxide Pathways:** Sikiric and colleagues review the pentadecapeptide literature on angiogenesis and nitric oxide systems in vascular preparations.",
        "**Component Deconvolution:** Laboratory investigations run the blend beside each isolated peptide, the design that establishes whether the combined wound-closure response is additive or synergistic."
      ],
      citations: [
        "Malinda, K. M., Goldstein, A. L., & Kleinman, H. K. (1997). 'Thymosin beta 4 stimulates directional migration of human umbilical vein endothelial cells.' FASEB Journal, 11(6), 474-481. DOI: 10.1096/fasebj.11.6.9194528 | PMID: 9194528",
        "Bock-Marquette, I., Saxena, A., White, M. D., et al. (2004). 'Thymosin beta4 activates integrin-linked kinase and promotes cardiac cell migration, survival and cardiac repair.' Nature, 432(7016), 466-472. DOI: 10.1038/nature03000 | PMID: 15565145",
        "Sikiric, P., Seiwerth, S., Skrtic, A., et al. (2025). 'BPC 157 Therapy: Targeting Angiogenesis and Nitric Oxide.' Pharmaceuticals, 18(10), 1450. DOI: 10.3390/ph18101450 | PMID: 41155565"
      ],
      formula: "Blend — no single formula applies; BPC-157 (C62H98N16O22) combined with a thymic actin-sequestering peptide",
      molarMass: "BPC-157 1419.5 g/mol; thymosin beta-4 4963 g/mol if full length — confirm which thymic form and the blend ratio with manufacturer COA",
      sequence: "Two-peptide blend: BPC-157, a 15-residue pentadecapeptide, combined with an actin-sequestering thymic peptide supplied either full-length (43 residues) or as the short active fragment — verify form and ratio with manufacturer COA",
      retentionTime: 4.6
    },
    es: {
      abstract: "BPC-157 + TB-500 es una mezcla de investigación de dos componentes que combina un pentadecapéptido gástrico estable con un péptido tímico que secuestra actina. Ambos operan sobre principios fundamentalmente distintos: el primero se estudia en torno a la señalización angiogénica y las vías del óxido nítrico, trabajo revisado por Sikiric y colaboradores, mientras que el segundo une actina monomérica directamente y no requiere receptor alguno. Malinda y colaboradores reportaron en 1997 que el componente tímico impulsa la migración direccional de células endoteliales humanas, y Bock-Marquette y colaboradores describieron la activación de la quinasa ligada a integrinas y de Akt en 2004. Como un brazo es medible en ensayos de polimerización libres de células y el otro no, la mezcla permite una separación mecanística inusualmente limpia. Uso Exclusivo de Investigación (RUO).",
      mechanism: "Los dos componentes de esta mezcla no comparten terreno mecanístico, y eso es lo que vuelve manejable la combinación desde el punto de vista analítico. El componente tímico actúa por unión directa a proteínas: su motivo de unión a actina engancha la G-actina monomérica y la mantiene en estado no polimerizable y, como el ensamblaje de filamentos depende de la concentración de monómero libre, ese secuestro fija directamente la velocidad con que las redes de actina se construyen y se disuelven. La investigación muestra que el efecto es dependiente de dosis en sistemas libres de células, sin requerir maquinaria celular alguna. Las investigaciones de laboratorio describen además la activación de la quinasa ligada a integrinas y de Akt para este componente. El pentadecapéptido opera en cambio por señalización, con estudios que indican efectos sobre vías angiogénicas y sistemas de óxido nítrico. Un brazo es estructural, el otro de señalización, y no comparten receptor.",
      benefits: [
        "**Separación mecanística libre de células:** La investigación muestra que el componente tímico secuestra actina en ensayos con pireno sin células presentes, atribuyendo cualquier señal libre de células a un solo brazo de la mezcla.",
        "**Migración endotelial:** Malinda y colaboradores (1997) establecieron la migración direccional de células endoteliales de vena umbilical humana, medida en formatos de herida por raspado y cámara de Boyden.",
        "**Señalización por quinasa ligada a integrinas:** Bock-Marquette y colaboradores (2004) describen la activación de la quinasa ligada a integrinas y de Akt, una vía de supervivencia distinta del efecto citoesquelético.",
        "**Vías angiogénicas y de óxido nítrico:** Sikiric y colaboradores revisan la literatura del pentadecapéptido sobre angiogénesis y sistemas de óxido nítrico en preparaciones vasculares.",
        "**Deconvolución de componentes:** Las investigaciones de laboratorio corren la mezcla junto a cada péptido aislado, el diseño que establece si la respuesta combinada de cierre de herida es aditiva o sinérgica."
      ],
      citations: [
        "Malinda, K. M., Goldstein, A. L., & Kleinman, H. K. (1997). 'Thymosin beta 4 stimulates directional migration of human umbilical vein endothelial cells.' FASEB Journal, 11(6), 474-481. DOI: 10.1096/fasebj.11.6.9194528 | PMID: 9194528",
        "Bock-Marquette, I., Saxena, A., White, M. D., et al. (2004). 'Thymosin beta4 activates integrin-linked kinase and promotes cardiac cell migration, survival and cardiac repair.' Nature, 432(7016), 466-472. DOI: 10.1038/nature03000 | PMID: 15565145",
        "Sikiric, P., Seiwerth, S., Skrtic, A., et al. (2025). 'BPC 157 Therapy: Targeting Angiogenesis and Nitric Oxide.' Pharmaceuticals, 18(10), 1450. DOI: 10.3390/ph18101450 | PMID: 41155565"
      ],
      formula: "Blend — no single formula applies; BPC-157 (C62H98N16O22) combined with a thymic actin-sequestering peptide",
      molarMass: "BPC-157 1419.5 g/mol; thymosin beta-4 4963 g/mol if full length — confirm which thymic form and the blend ratio with manufacturer COA",
      sequence: "Mezcla de dos péptidos: BPC-157, pentadecapéptido de 15 residuos, combinado con un péptido tímico que secuestra actina suministrado en forma completa (43 residuos) o como fragmento activo corto — verifique la forma y la proporción con el COA del fabricante",
      retentionTime: 4.6
    }
  },
  "ara-290-spray": {
    en: {
      abstract: "ARA-290, also catalogued as cibinetide, is an 11-residue peptide derived from the tertiary structure of erythropoietin rather than from its linear sequence, reproducing the outward-facing residues of one helical surface of the folded protein. Brines and colleagues reported the design in 2008, describing nonerythropoietic tissue-protective peptides that engage the innate repair receptor, a heterocomplex of the erythropoietin receptor and the beta-common receptor subunit, without activating the homodimeric erythropoietin receptor responsible for red blood cell production. Brines and Cerami reviewed the broader tissue-protective signaling framework the same year. Applied work has extended into transplantation and ophthalmic models, with Yao and colleagues reporting improved islet allograft function using this innate repair receptor ligand in 2020. Research Use Only (RUO).",
      mechanism: "ARA-290 exploits a structural distinction between two receptor assemblies that share a subunit. Erythropoietin signals through two different receptors: a homodimer of the erythropoietin receptor, which drives red blood cell production, and a heterocomplex pairing that same receptor with the beta-common receptor subunit, termed the innate repair receptor, which mediates tissue-protective signaling. Because the two assemblies present different binding surfaces, a ligand shaped to fit one need not fit the other. Research shows ARA-290 reproduces the helical face of erythropoietin that contacts the heterocomplex, engaging repair signaling while leaving the erythropoietic homodimer unactivated. Brines and colleagues demonstrated this separation directly. The design principle, deriving a peptide from a folded surface rather than a linear fragment, distinguishes it from every sequence-derived peptide in this catalog.",
      benefits: [
        "**Receptor Selectivity Testing:** Research shows engagement of the innate repair receptor heterocomplex without activating the homodimeric erythropoietin receptor, demonstrable by running both receptor configurations in parallel.",
        "**Nonerythropoietic Design Validation:** Brines and colleagues (2008) established that tissue-protective signaling separates structurally from erythropoiesis, the finding this compound was built to exploit.",
        "**Structural Epitope Derivation:** Studies indicate the peptide reproduces a folded helical surface rather than a linear fragment, a design approach distinct from every sequence-derived peptide in this catalog.",
        "**Islet and Transplantation Models:** Yao and colleagues (2020) reported improved islet allograft function with this innate repair receptor ligand, extending the framework into applied transplantation work.",
        "**Tissue Protection Signaling:** Brines and Cerami (2008) reviewed erythropoietin-mediated tissue protection, providing the mechanistic context labs use when interpreting protective readouts."
      ],
      citations: [
        "Brines, M., Patel, N. S., Villa, P., et al. (2008). 'Nonerythropoietic, tissue-protective peptides derived from the tertiary structure of erythropoietin.' PNAS, 105(31), 10925-10930. DOI: 10.1073/pnas.0805594105 | PMID: 18676614",
        "Brines, M., & Cerami, A. (2008). 'Erythropoietin-mediated tissue protection: reducing collateral damage from the primary injury response.' Journal of Internal Medicine, 264(5), 405-432. DOI: 10.1111/j.1365-2796.2008.02024.x | PMID: 19017170",
        "Yao, M., Watanabe, M., Sun, S., et al. (2020). 'Improvement of Islet Allograft Function Using Cibinetide, an Innate Repair Receptor Ligand.' Transplantation, 104(10), 2048-2058. DOI: 10.1097/TP.0000000000003284 | PMID: 32345869"
      ],
      formula: "C51H84N16O21",
      molarMass: "1257.3 g/mol (PubChem CID 91810664, cibinetide)",
      sequence: "11-residue peptide reproducing the outward-facing residues of a helical surface of erythropoietin rather than a contiguous linear fragment; no cysteine, no methionine — verify exact sequence with manufacturer COA",
      retentionTime: 4.9
    },
    es: {
      abstract: "El ARA-290, catalogado también como cibinetida, es un péptido de 11 residuos derivado de la estructura terciaria de la eritropoyetina y no de su secuencia lineal, que reproduce los residuos orientados hacia el exterior de una superficie helicoidal de la proteína plegada. Brines y colaboradores reportaron el diseño en 2008, describiendo péptidos no eritropoyéticos protectores de tejidos que activan el receptor de reparación innata, un heterocomplejo del receptor de eritropoyetina y la subunidad del receptor beta-común, sin activar el receptor homodimérico responsable de la producción de glóbulos rojos. Brines y Cerami revisaron ese mismo año el marco más amplio de señalización protectora de tejidos. El trabajo aplicado se ha extendido a modelos de trasplante y oftálmicos, con Yao y colaboradores reportando en 2020 una mejor función del aloinjerto de islotes usando este ligando. Uso Exclusivo de Investigación (RUO).",
      mechanism: "El ARA-290 explota una distinción estructural entre dos ensamblajes de receptor que comparten una subunidad. La eritropoyetina señaliza por dos receptores distintos: un homodímero del receptor de eritropoyetina, que impulsa la producción de glóbulos rojos, y un heterocomplejo que empareja ese mismo receptor con la subunidad del receptor beta-común, denominado receptor de reparación innata, que media la señalización protectora de tejidos. Como ambos ensamblajes presentan superficies de unión distintas, un ligando modelado para encajar en uno no tiene por qué encajar en el otro. La investigación muestra que el ARA-290 reproduce la cara helicoidal de la eritropoyetina que contacta el heterocomplejo, activando la señalización de reparación y dejando sin activar el homodímero eritropoyético. Brines y colaboradores demostraron esta separación de forma directa. El principio de diseño, derivar un péptido de una superficie plegada en lugar de un fragmento lineal, lo distingue de todos los péptidos derivados de secuencia de este catálogo.",
      benefits: [
        "**Prueba de selectividad de receptor:** La investigación muestra la activación del heterocomplejo del receptor de reparación innata sin activar el receptor homodimérico de eritropoyetina, demostrable corriendo ambas configuraciones en paralelo.",
        "**Validación del diseño no eritropoyético:** Brines y colaboradores (2008) establecieron que la señalización protectora de tejidos se separa estructuralmente de la eritropoyesis, el hallazgo que este compuesto fue diseñado para aprovechar.",
        "**Derivación de epítopo estructural:** Los estudios indican que el péptido reproduce una superficie helicoidal plegada y no un fragmento lineal, un enfoque de diseño distinto del de todos los péptidos derivados de secuencia del catálogo.",
        "**Modelos de islotes y trasplante:** Yao y colaboradores (2020) reportaron una mejor función del aloinjerto de islotes con este ligando del receptor de reparación innata, extendiendo el marco al trabajo aplicado en trasplante.",
        "**Señalización de protección tisular:** Brines y Cerami (2008) revisaron la protección tisular mediada por eritropoyetina, aportando el contexto mecanístico que los laboratorios usan al interpretar lecturas protectoras."
      ],
      citations: [
        "Brines, M., Patel, N. S., Villa, P., et al. (2008). 'Nonerythropoietic, tissue-protective peptides derived from the tertiary structure of erythropoietin.' PNAS, 105(31), 10925-10930. DOI: 10.1073/pnas.0805594105 | PMID: 18676614",
        "Brines, M., & Cerami, A. (2008). 'Erythropoietin-mediated tissue protection: reducing collateral damage from the primary injury response.' Journal of Internal Medicine, 264(5), 405-432. DOI: 10.1111/j.1365-2796.2008.02024.x | PMID: 19017170",
        "Yao, M., Watanabe, M., Sun, S., et al. (2020). 'Improvement of Islet Allograft Function Using Cibinetide, an Innate Repair Receptor Ligand.' Transplantation, 104(10), 2048-2058. DOI: 10.1097/TP.0000000000003284 | PMID: 32345869"
      ],
      formula: "C51H84N16O21",
      molarMass: "1257.3 g/mol (PubChem CID 91810664, cibinetide)",
      sequence: "Péptido de 11 residuos que reproduce los residuos externos de una superficie helicoidal de la eritropoyetina en lugar de un fragmento lineal contiguo; sin cisteína ni metionina — verifique la secuencia exacta con el COA del fabricante",
      retentionTime: 4.9
    }
  },
  "aod9604-spray": {
    en: {
      abstract: "AOD9604 is a modified form of the carboxy-terminal lipolytic domain of human growth hormone, comprising 16 residues with an internal disulfide loop between its two cysteines. It differs from the unmodified 176-191 fragment at a single position: where that fragment begins with phenylalanine, AOD9604 carries tyrosine, a difference of one hydroxyl group corresponding to sixteen mass units. Ng and colleagues characterized the synthetic lipolytic domain in fatty rodent models in 2000, and Heffernan and colleagues compared the fragment against full growth hormone in obese mouse models in 2001, reporting effects on lipid metabolism. The research interest rests on a dissociation: the fragment influences adipocyte lipid handling without engaging the growth hormone receptor or inducing hepatic IGF-1. Research Use Only (RUO).",
      mechanism: "AOD9604 works through a mechanism defined by what it omits as much as by what it does. Intact growth hormone binds its receptor and triggers JAK2 and STAT5 signaling, producing hepatic IGF-1 and a broad metabolic response. This fragment comprises only the carboxy-terminal lipolytic domain and does not engage that receptor, so research indicates it produces no IGF-1 induction and none of the glucose handling changes attributed to the full hormone. What it does influence is adipocyte lipid handling, with laboratory investigations describing modulation of lipolytic and lipogenic enzyme activity rather than classical receptor agonism. Structurally it carries an internal disulfide loop between its two cysteines, and it differs from the unmodified 176-191 fragment by a single hydroxyl group at the amino-terminal residue.",
      benefits: [
        "**Adipocyte Lipolysis Assays:** Research shows measurable glycerol and free fatty acid release in 3T3-L1 and primary adipocyte cultures, the standard lipolysis readout for this fragment class.",
        "**Receptor Dissociation Testing:** Heffernan and colleagues (2001) compared the fragment against full growth hormone, the design demonstrating lipid effects without IGF-1 induction.",
        "**Lipolytic Domain Characterization:** Ng and colleagues (2000) characterized the synthetic lipolytic domain in fatty rodent models, establishing the interpretive framework for fragment activity.",
        "**Single-Residue Comparison:** Laboratory investigations pair it against the unmodified 176-191 fragment, which differs only at the first residue, isolating what one hydroxyl group changes.",
        "**Disulfide Loop Integrity:** Studies indicate the internal cysteine loop defines fragment conformation, verifiable by comparing reduced and non-reduced chromatographic separations."
      ],
      citations: [
        "Heffernan, M., Summers, R. J., Thorburn, A., et al. (2001). 'The effects of human GH and its lipolytic fragment (AOD9604) on lipid metabolism following chronic treatment in obese mice and beta-3 AR knock-out mice.' Endocrinology, 142(12), 5182-5189. DOI: 10.1210/endo.142.12.8522 | PMID: 11713213",
        "Ng, F. M., Sun, J., Sharma, L., et al. (2000). 'Metabolic studies of a synthetic lipolytic domain (AOD9604) of human growth hormone.' Hormone Research, 53(6), 274-278. DOI: 10.1159/000053183 | PMID: 11146367",
        "Ng, F. M., Jiang, W. J., Gianello, R., et al. (2000). 'Molecular and cellular actions of a structural domain of human growth hormone (AOD9401) on lipid metabolism in Zucker fatty rats.' Journal of Molecular Endocrinology, 25(3), 287-298. DOI: 10.1677/jme.0.0250287 | PMID: 11116208"
      ],
      formula: "C78H123N23O23S2",
      molarMass: "1815.1 g/mol (PubChem CID 71300630)",
      sequence: "Tyr-Leu-Arg-Ile-Val-Gln-Cys-Arg-Ser-Val-Glu-Gly-Ser-Cys-Gly-Phe (16 residues; internal disulfide loop between the two cysteines). Differs from the unmodified growth hormone 176-191 fragment, which carries phenylalanine at position 1 and weighs 1799.1 g/mol",
      retentionTime: 7.5
    },
    es: {
      abstract: "El AOD9604 es una forma modificada del dominio lipolítico carboxi-terminal de la hormona del crecimiento humana, con 16 residuos y un bucle disulfuro interno entre sus dos cisteínas. Difiere del fragmento 176-191 sin modificar en una sola posición: donde ese fragmento comienza con fenilalanina, el AOD9604 porta tirosina, una diferencia de un grupo hidroxilo equivalente a dieciséis unidades de masa. Ng y colaboradores caracterizaron el dominio lipolítico sintético en modelos de roedores obesos en 2000, y Heffernan y colaboradores compararon el fragmento frente a la hormona del crecimiento completa en modelos de ratón obeso en 2001, reportando efectos sobre el metabolismo lipídico. El interés investigativo reside en una disociación: el fragmento influye en el manejo lipídico del adipocito sin activar el receptor de hormona del crecimiento ni inducir IGF-1 hepático. Uso Exclusivo de Investigación (RUO).",
      mechanism: "El AOD9604 actúa mediante un mecanismo definido tanto por lo que omite como por lo que hace. La hormona del crecimiento intacta se une a su receptor y desencadena la señalización JAK2 y STAT5, produciendo IGF-1 hepático y una respuesta metabólica amplia. Este fragmento comprende solo el dominio lipolítico carboxi-terminal y no activa ese receptor, de modo que la investigación indica que no produce inducción de IGF-1 ni ninguno de los cambios en el manejo de glucosa atribuidos a la hormona completa. Lo que sí influye es el manejo lipídico del adipocito, con investigaciones que describen la modulación de la actividad de enzimas lipolíticas y lipogénicas más que un agonismo clásico de receptor. Estructuralmente porta un bucle disulfuro interno entre sus dos cisteínas, y difiere del fragmento 176-191 sin modificar en un solo grupo hidroxilo del residuo amino-terminal.",
      benefits: [
        "**Ensayos de lipólisis en adipocitos:** La investigación muestra liberación medible de glicerol y ácidos grasos libres en cultivos de adipocitos 3T3-L1 y primarios, la lectura estándar de lipólisis para esta clase de fragmentos.",
        "**Prueba de disociación del receptor:** Heffernan y colaboradores (2001) compararon el fragmento frente a la hormona del crecimiento completa, el diseño que demuestra efectos lipídicos sin inducción de IGF-1.",
        "**Caracterización del dominio lipolítico:** Ng y colaboradores (2000) caracterizaron el dominio lipolítico sintético en modelos de roedores obesos, estableciendo el marco interpretativo de la actividad del fragmento.",
        "**Comparación de un solo residuo:** Las investigaciones de laboratorio lo emparejan con el fragmento 176-191 sin modificar, que difiere solo en el primer residuo, aislando lo que cambia un grupo hidroxilo.",
        "**Integridad del bucle disulfuro:** Los estudios indican que el bucle interno de cisteínas define la conformación del fragmento, verificable comparando separaciones cromatográficas reducidas y no reducidas."
      ],
      citations: [
        "Heffernan, M., Summers, R. J., Thorburn, A., et al. (2001). 'The effects of human GH and its lipolytic fragment (AOD9604) on lipid metabolism following chronic treatment in obese mice and beta-3 AR knock-out mice.' Endocrinology, 142(12), 5182-5189. DOI: 10.1210/endo.142.12.8522 | PMID: 11713213",
        "Ng, F. M., Sun, J., Sharma, L., et al. (2000). 'Metabolic studies of a synthetic lipolytic domain (AOD9604) of human growth hormone.' Hormone Research, 53(6), 274-278. DOI: 10.1159/000053183 | PMID: 11146367",
        "Ng, F. M., Jiang, W. J., Gianello, R., et al. (2000). 'Molecular and cellular actions of a structural domain of human growth hormone (AOD9401) on lipid metabolism in Zucker fatty rats.' Journal of Molecular Endocrinology, 25(3), 287-298. DOI: 10.1677/jme.0.0250287 | PMID: 11116208"
      ],
      formula: "C78H123N23O23S2",
      molarMass: "1815.1 g/mol (PubChem CID 71300630)",
      sequence: "Tyr-Leu-Arg-Ile-Val-Gln-Cys-Arg-Ser-Val-Glu-Gly-Ser-Cys-Gly-Phe (16 residuos; bucle disulfuro interno entre las dos cisteínas). Difiere del fragmento 176-191 sin modificar, que porta fenilalanina en la posición 1 y pesa 1799.1 g/mol",
      retentionTime: 7.5
    }
  },
  "ahk-cu-spray": {
    en: {
      abstract: "AHK-Cu is a copper-coordinated tripeptide of alanine, histidine and lysine, structurally a close analog of the better-known GHK-Cu, differing only in that alanine replaces glycine at the first position. Research interest centres on copper delivery: several extracellular matrix enzymes require copper as a cofactor, and the lysyl oxidases in particular perform the cross-linking that gives collagen and elastin their mechanical properties, a family Vallet and Ricard-Blum reviewed in 2019. Pyo and colleagues reported in 2007 that a tripeptide-copper complex influenced human hair growth in ex vivo follicle organ culture, with dermal papilla proliferation and vascular endothelial growth factor expression as readouts. Notably, this remains essentially the only indexed primary study on AHK-Cu specifically. Research Use Only (RUO).",
      mechanism: "AHK-Cu functions as a copper carrier rather than a receptor ligand, which places it outside the signaling logic that governs most of this catalog. The histidine imidazole nitrogen together with backbone nitrogen donors holds a copper ion in a square-planar coordination geometry, producing a stable complex with a characteristic blue colour. Research treats the tripeptide as the delivery vehicle and the copper as the active centre, because a family of extracellular matrix enzymes depends on copper as a cofactor. The lysyl oxidases are the clearest example: they catalyse the oxidative deamination that forms cross-links between collagen and elastin fibres, and without copper they do not function. Structurally the compound differs from GHK-Cu by one methyl group, since alanine replaces glycine at the first position, and that single substitution is the entire basis for studying the two separately.",
      benefits: [
        "**Dermal Papilla Organ Culture:** Pyo and colleagues (2007) reported effects on human hair follicles in ex vivo organ culture, with dermal papilla proliferation and growth factor expression as the readouts.",
        "**Copper Enzyme Cofactor Studies:** Vallet and Ricard-Blum (2019) reviewed the lysyl oxidases, the copper-dependent enzymes that cross-link collagen and elastin and cannot function without the metal.",
        "**GHK-Cu Comparison:** Laboratory investigations pair the two copper tripeptides, which differ by a single methyl group at the first residue, isolating what that substitution changes.",
        "**Collagen Synthesis Framework:** Maquart and colleagues (1988) established copper tripeptide effects on collagen synthesis in fibroblast culture, the reference assay for this compound class.",
        "**Evidence Base Gap:** Essentially one indexed primary study exists on AHK-Cu specifically, which makes direct mechanistic characterization an open and publishable question for a dermal biology group."
      ],
      citations: [
        "Pyo, H. K., Yoo, H. G., Won, C. H., et al. (2007). 'The effect of tripeptide-copper complex on human hair growth in vitro.' Archives of Pharmacal Research, 30(7), 834-839. DOI: 10.1007/BF02978833 | PMID: 17703734",
        "Maquart, F. X., Pickart, L., Laurent, M., et al. (1988). 'Stimulation of collagen synthesis in fibroblast cultures by the tripeptide-copper complex glycyl-L-histidyl-L-lysine-Cu2+.' FEBS Letters, 238(2), 343-346. DOI: 10.1016/0014-5793(88)80509-x | PMID: 3169264",
        "Vallet, S. D., & Ricard-Blum, S. (2019). 'Lysyl oxidases: from enzyme activity to extracellular matrix cross-links.' Essays in Biochemistry, 63(3), 349-364. DOI: 10.1042/EBC20180050 | PMID: 31488698"
      ],
      formula: "C15H24ClCuN6O4 (hydrochloride form, PubChem CID 168431292) — confirm the exact salt form supplied with manufacturer COA",
      molarMass: "451.39 g/mol as the hydrochloride; the free copper complex differs — verify the salt form and copper content with manufacturer COA",
      sequence: "Ala-His-Lys coordinated to a copper ion (copper tripeptide-3). Differs from GHK-Cu only at position 1, where alanine replaces glycine",
      retentionTime: 2.4
    },
    es: {
      abstract: "El AHK-Cu es un tripéptido de alanina, histidina y lisina coordinado a cobre, estructuralmente un análogo cercano del más conocido GHK-Cu, del que solo difiere en que la alanina reemplaza a la glicina en la primera posición. El interés investigativo se centra en la entrega de cobre: varias enzimas de la matriz extracelular requieren cobre como cofactor, y las lisil oxidasas en particular realizan el entrecruzamiento que da al colágeno y a la elastina sus propiedades mecánicas, una familia que Vallet y Ricard-Blum revisaron en 2019. Pyo y colaboradores reportaron en 2007 que un complejo de tripéptido y cobre influía en el crecimiento del cabello humano en cultivo de órgano folicular ex vivo, con la proliferación de la papila dérmica y la expresión de factor de crecimiento endotelial vascular como lecturas. Cabe destacar que este sigue siendo esencialmente el único estudio primario indexado sobre AHK-Cu en concreto. Uso Exclusivo de Investigación (RUO).",
      mechanism: "El AHK-Cu funciona como portador de cobre y no como ligando de receptor, lo que lo sitúa fuera de la lógica de señalización que gobierna la mayor parte de este catálogo. El nitrógeno del imidazol de la histidina junto con nitrógenos donadores del esqueleto sostiene un ion de cobre en una geometría de coordinación plano-cuadrada, produciendo un complejo estable de color azul característico. La investigación trata al tripéptido como vehículo de entrega y al cobre como centro activo, porque una familia de enzimas de la matriz extracelular depende del cobre como cofactor. Las lisil oxidasas son el ejemplo más claro: catalizan la desaminación oxidativa que forma entrecruzamientos entre fibras de colágeno y elastina, y sin cobre no funcionan. Estructuralmente el compuesto difiere del GHK-Cu en un grupo metilo, ya que la alanina reemplaza a la glicina en la primera posición, y esa única sustitución es toda la base para estudiar ambos por separado.",
      benefits: [
        "**Cultivo de órgano de papila dérmica:** Pyo y colaboradores (2007) reportaron efectos sobre folículos pilosos humanos en cultivo de órgano ex vivo, con la proliferación de la papila dérmica y la expresión de factores de crecimiento como lecturas.",
        "**Estudios de cofactor enzimático de cobre:** Vallet y Ricard-Blum (2019) revisaron las lisil oxidasas, las enzimas dependientes de cobre que entrecruzan colágeno y elastina y que no funcionan sin el metal.",
        "**Comparación con GHK-Cu:** Las investigaciones de laboratorio emparejan ambos tripéptidos de cobre, que difieren en un solo grupo metilo del primer residuo, aislando qué cambia esa sustitución.",
        "**Marco de síntesis de colágeno:** Maquart y colaboradores (1988) establecieron los efectos del tripéptido de cobre sobre la síntesis de colágeno en cultivo de fibroblastos, el ensayo de referencia de esta clase.",
        "**Vacío en la base de evidencia:** Existe esencialmente un único estudio primario indexado sobre AHK-Cu en concreto, lo que convierte la caracterización mecanística directa en una pregunta abierta y publicable para un grupo de biología dérmica."
      ],
      citations: [
        "Pyo, H. K., Yoo, H. G., Won, C. H., et al. (2007). 'The effect of tripeptide-copper complex on human hair growth in vitro.' Archives of Pharmacal Research, 30(7), 834-839. DOI: 10.1007/BF02978833 | PMID: 17703734",
        "Maquart, F. X., Pickart, L., Laurent, M., et al. (1988). 'Stimulation of collagen synthesis in fibroblast cultures by the tripeptide-copper complex glycyl-L-histidyl-L-lysine-Cu2+.' FEBS Letters, 238(2), 343-346. DOI: 10.1016/0014-5793(88)80509-x | PMID: 3169264",
        "Vallet, S. D., & Ricard-Blum, S. (2019). 'Lysyl oxidases: from enzyme activity to extracellular matrix cross-links.' Essays in Biochemistry, 63(3), 349-364. DOI: 10.1042/EBC20180050 | PMID: 31488698"
      ],
      formula: "C15H24ClCuN6O4 (hydrochloride form, PubChem CID 168431292) — confirm the exact salt form supplied with manufacturer COA",
      molarMass: "451.39 g/mol as the hydrochloride; the free copper complex differs — verify the salt form and copper content with manufacturer COA",
      sequence: "Ala-His-Lys coordinado a un ion de cobre (tripéptido de cobre-3). Difiere del GHK-Cu solo en la posición 1, donde la alanina reemplaza a la glicina",
      retentionTime: 2.4
    }
  },
  "bioregulator-core-panel": {
    en: {
      abstract: "Bioregulator Core Panel assembles six ultrashort peptides from the Khavinson bioregulator family, each representing a different organ system: Pinealon for neural and pineal contexts, Thymalin for thymic and immune, Cardiogen for cardiovascular, Chonluten for respiratory, Ovagen for hepatic and digestive, and Cartalax for cartilage and musculoskeletal. These compounds are three to four residues long, developed over several decades at the Saint Petersburg Institute of Bioregulation and Gerontology. Khavinson and colleagues published a systematic review of peptide regulation of gene expression in 2021 and, in 2023, molecular modelling indicating that 26 such peptides can be transported into cells through the LAT and PEPT transporter families rather than by receptor binding. Avolio and colleagues reported in-vitro activity in the THP-1 monocyte and macrophage line. Research Use Only (RUO).",
      mechanism: "The bioregulator class operates through gene regulation rather than receptor signaling, and that single fact reframes how the panel is used. These peptides are too short to present the extended binding surface a G protein-coupled receptor requires. Instead, research describes them crossing the membrane through amino acid and peptide transporters, and Khavinson and colleagues used molecular docking to show that the ligand-binding sites of LAT1, LAT2 and PEPT1 are large enough to carry 26 such peptides. Once inside, laboratory investigations describe interaction with DNA and chromatin and consequent changes in transcription, which the 2021 systematic review documents across the family. Each panel member is associated in the literature with a different tissue context, which is the organising logic of the panel rather than six variations on one mechanism. Unlike Semaglutide or Ipamorelin, no member of this class has a defined receptor.",
      benefits: [
        "**Cross-System First-Pass Screening:** Research shows one representative peptide per organ system allows a single plate layout to survey six biological contexts before committing to a deeper compound set.",
        "**Monocyte and Macrophage Models:** Avolio and colleagues (2022) treated the THP-1 cell line with Khavinson peptides and measured proliferative activity and inflammatory pathway markers, the clearest published in-vitro format for this class.",
        "**Gene Expression Endpoints:** Khavinson and colleagues (2021) systematically reviewed peptide regulation of gene expression, establishing transcriptional readouts rather than receptor assays as the appropriate endpoint.",
        "**Cellular Uptake Mechanism:** Studies indicate transport through the LAT and PEPT transporter families rather than receptor binding, a route confirmable by co-incubation with transporter inhibitors.",
        "**Component Composition Analysis:** Linkova and colleagues (2023) examined which dipeptides within the Thymalin preparation drive its gene expression effects, relevant because that vial is a preparation rather than a single defined sequence."
      ],
      citations: [
        "Khavinson, V. K., Linkova, N. S., Rudskoy, A. I., & Petukhov, M. G. (2023). 'Feasibility of Transport of 26 Biologically Active Ultrashort Peptides via LAT and PEPT Family Transporters.' Biomolecules, 13(3), 552. DOI: 10.3390/biom13030552 | PMID: 36979488",
        "Khavinson, V. K., Popovich, I. G., Linkova, N. S., et al. (2021). 'Peptide Regulation of Gene Expression: A Systematic Review.' Molecules, 26(22), 7053. DOI: 10.3390/molecules26227053 | PMID: 34834147",
        "Avolio, F., Martinotti, S., Khavinson, V. K., et al. (2022). 'Peptides Regulating Proliferative Activity and Inflammatory Pathways in the Monocyte/Macrophage THP-1 Cell Line.' International Journal of Molecular Sciences, 23(7), 3607. DOI: 10.3390/ijms23073607 | PMID: 35408963"
      ],
      formula: "Panel of six — no single formula applies. Verified components: Pinealon C15H26N6O8 (PubChem CID 10273502); Cartalax C12H19N3O8 (CID 87815447); Chonluten as the Glu-Asp-Gly tripeptide C11H17N3O8 (CID 194641); Ovagen as the Glu-Asp-Leu tripeptide C15H25N3O8 (CID 444128). Cardiogen and Thymalin — verify with manufacturer COA",
      molarMass: "Component masses: Pinealon 418.40 g/mol; Cartalax 333.29 g/mol; Chonluten 319.27 g/mol; Ovagen 375.37 g/mol. Cardiogen returns no PubChem entry under that name and Thymalin is a polypeptide preparation rather than a single molecule — verify both with manufacturer COA",
      sequence: "Six ultrashort peptides, 20 mg per vial: Pinealon (Glu-Asp-Arg), Cartalax (Ala-Glu-Asp), Chonluten (Glu-Asp-Gly), Ovagen (Glu-Asp-Leu), Cardiogen (reported as Ala-Glu-Asp-Arg — not independently confirmable, verify with COA), and Thymalin (a thymic polypeptide preparation, not a single sequence — verify with COA)",
      retentionTime: 1.9
    },
    es: {
      abstract: "Bioregulator Core Panel reúne seis péptidos ultracortos de la familia bioreguladora de Khavinson, cada uno representando un sistema orgánico distinto: Pinealon para contextos neurales y pineales, Thymalin para tímico e inmunitario, Cardiogen para cardiovascular, Chonluten para respiratorio, Ovagen para hepático y digestivo, y Cartalax para cartílago y musculoesquelético. Estos compuestos tienen de tres a cuatro residuos y se desarrollaron durante varias décadas en el Instituto de Bioregulación y Gerontología de San Petersburgo. Khavinson y colaboradores publicaron en 2021 una revisión sistemática sobre la regulación peptídica de la expresión génica y, en 2023, un modelado molecular que indica que 26 de estos péptidos pueden transportarse al interior celular por las familias de transportadores LAT y PEPT en lugar de por unión a receptor. Avolio y colaboradores reportaron actividad in-vitro en la línea de monocitos y macrófagos THP-1. Uso Exclusivo de Investigación (RUO).",
      mechanism: "La clase bioreguladora opera por regulación génica y no por señalización de receptor, y ese solo hecho replantea cómo se usa el panel. Estos péptidos son demasiado cortos para presentar la superficie de unión extendida que requiere un receptor acoplado a proteínas G. En su lugar, la investigación describe su paso por la membrana mediante transportadores de aminoácidos y de péptidos, y Khavinson y colaboradores usaron acoplamiento molecular para mostrar que los sitios de unión de LAT1, LAT2 y PEPT1 son lo bastante amplios para transportar 26 de estos péptidos. Una vez dentro, las investigaciones de laboratorio describen la interacción con el ADN y la cromatina y los cambios consiguientes en la transcripción, que la revisión sistemática de 2021 documenta en toda la familia. Cada miembro del panel se asocia en la literatura con un contexto tisular distinto, y esa es la lógica organizadora del panel y no seis variaciones de un mismo mecanismo. A diferencia de la semaglutida o la ipamorelina, ningún miembro de esta clase tiene un receptor definido.",
      benefits: [
        "**Cribado inicial multisistema:** La investigación muestra que un péptido representativo por sistema orgánico permite explorar seis contextos biológicos con un solo diseño de placa antes de comprometerse con un set más amplio.",
        "**Modelos de monocitos y macrófagos:** Avolio y colaboradores (2022) trataron la línea THP-1 con péptidos de Khavinson y midieron actividad proliferativa y marcadores de vías inflamatorias, el formato in-vitro publicado más claro para esta clase.",
        "**Criterios de expresión génica:** Khavinson y colaboradores (2021) revisaron sistemáticamente la regulación peptídica de la expresión génica, estableciendo lecturas transcripcionales y no ensayos de receptor como criterio apropiado.",
        "**Mecanismo de captación celular:** Los estudios indican transporte por las familias LAT y PEPT en lugar de unión a receptor, una ruta confirmable por coincubación con inhibidores de transportadores.",
        "**Análisis de composición de componentes:** Linkova y colaboradores (2023) examinaron qué dipéptidos de la preparación Thymalin impulsan sus efectos sobre la expresión génica, relevante porque ese vial es una preparación y no una secuencia única definida."
      ],
      citations: [
        "Khavinson, V. K., Linkova, N. S., Rudskoy, A. I., & Petukhov, M. G. (2023). 'Feasibility of Transport of 26 Biologically Active Ultrashort Peptides via LAT and PEPT Family Transporters.' Biomolecules, 13(3), 552. DOI: 10.3390/biom13030552 | PMID: 36979488",
        "Khavinson, V. K., Popovich, I. G., Linkova, N. S., et al. (2021). 'Peptide Regulation of Gene Expression: A Systematic Review.' Molecules, 26(22), 7053. DOI: 10.3390/molecules26227053 | PMID: 34834147",
        "Avolio, F., Martinotti, S., Khavinson, V. K., et al. (2022). 'Peptides Regulating Proliferative Activity and Inflammatory Pathways in the Monocyte/Macrophage THP-1 Cell Line.' International Journal of Molecular Sciences, 23(7), 3607. DOI: 10.3390/ijms23073607 | PMID: 35408963"
      ],
      formula: "Panel of six — no single formula applies. Verified components: Pinealon C15H26N6O8 (PubChem CID 10273502); Cartalax C12H19N3O8 (CID 87815447); Chonluten as the Glu-Asp-Gly tripeptide C11H17N3O8 (CID 194641); Ovagen as the Glu-Asp-Leu tripeptide C15H25N3O8 (CID 444128). Cardiogen and Thymalin — verify with manufacturer COA",
      molarMass: "Component masses: Pinealon 418.40 g/mol; Cartalax 333.29 g/mol; Chonluten 319.27 g/mol; Ovagen 375.37 g/mol. Cardiogen returns no PubChem entry under that name and Thymalin is a polypeptide preparation rather than a single molecule — verify both with manufacturer COA",
      sequence: "Seis péptidos ultracortos, 20 mg por vial: Pinealon (Glu-Asp-Arg), Cartalax (Ala-Glu-Asp), Chonluten (Glu-Asp-Gly), Ovagen (Glu-Asp-Leu), Cardiogen (reportado como Ala-Glu-Asp-Arg — no confirmable de forma independiente, verifique con el COA) y Thymalin (preparación polipeptídica tímica, no una secuencia única — verifique con el COA)",
      retentionTime: 1.9
    }
  },
  "bioregulator-full-master-set": {
    en: {
      abstract: "Bioregulator Full Master Set assembles all sixteen ultrashort peptides of the Khavinson bioregulator family into a single research collection spanning seven organ systems: neuro and pineal, immune and thymic, cardiovascular, respiratory, hepatic and digestive, urogenital, and cartilage and musculoskeletal. These compounds are two to four residues long and were developed over several decades at the Saint Petersburg Institute of Bioregulation and Gerontology. Khavinson and colleagues published a systematic review of peptide regulation of gene expression in 2021, and in 2023 reported molecular docking indicating that 26 such peptides can be carried into cells by the LAT and PEPT transporter families rather than by receptor binding. Avolio and colleagues documented in-vitro activity in the THP-1 monocyte and macrophage line. Research Use Only (RUO).",
      mechanism: "The bioregulator family operates through gene regulation rather than receptor signaling, and a sixteen-member set makes that principle visible in a way individual compounds do not. These peptides are too short to present the extended binding surface a class B G protein-coupled receptor requires; the largest in the set is under 500 Da and the smallest is a dipeptide. Research describes them crossing the membrane through amino acid and peptide transporters, with Khavinson and colleagues demonstrating by molecular docking that LAT1, LAT2 and PEPT1 binding sites are large enough to carry 26 of them. Once intracellular, laboratory investigations describe interaction with DNA and chromatin and consequent transcriptional change. What distinguishes one member from another is the tissue context each is associated with in the literature, not a different receptor.",
      benefits: [
        "**Full-Family Systematic Screening:** Research shows a complete sixteen-peptide set allows one assay format to be applied uniformly across every member, which is what converts a compound collection into a comparable dataset.",
        "**Monocyte and Macrophage Models:** Avolio and colleagues (2022) treated the THP-1 line with Khavinson peptides and measured proliferative activity and inflammatory pathway markers, the clearest published in-vitro format for this family.",
        "**Gene Expression Profiling:** Khavinson and colleagues (2021) systematically reviewed peptide regulation of gene expression, establishing transcriptional readouts rather than receptor assays as the appropriate endpoint.",
        "**Transporter-Mediated Uptake:** Studies indicate entry through the LAT and PEPT transporter families rather than receptor binding, a route testable by co-incubation with transporter inhibitors across all sixteen members.",
        "**Cross-System Comparison:** Laboratory investigations use the seven-system span to ask whether tissue association in the literature corresponds to measurable differences in a single shared cell model."
      ],
      citations: [
        "Khavinson, V. K., Linkova, N. S., Rudskoy, A. I., & Petukhov, M. G. (2023). 'Feasibility of Transport of 26 Biologically Active Ultrashort Peptides via LAT and PEPT Family Transporters.' Biomolecules, 13(3), 552. DOI: 10.3390/biom13030552 | PMID: 36979488",
        "Khavinson, V. K., Popovich, I. G., Linkova, N. S., et al. (2021). 'Peptide Regulation of Gene Expression: A Systematic Review.' Molecules, 26(22), 7053. DOI: 10.3390/molecules26227053 | PMID: 34834147",
        "Avolio, F., Martinotti, S., Khavinson, V. K., et al. (2022). 'Peptides Regulating Proliferative Activity and Inflammatory Pathways in the Monocyte/Macrophage THP-1 Cell Line.' International Journal of Molecular Sciences, 23(7), 3607. DOI: 10.3390/ijms23073607 | PMID: 35408963"
      ],
      formula: "Set of sixteen — no single formula applies. Independently confirmable components: Vilon C11H21N3O5, Chonluten C11H17N3O8, Cartalax C12H19N3O8, Crystagen C14H21N3O8, Ovagen C15H25N3O8, Vesugen C15H26N4O8, Pinealon C15H26N6O8, Cortagen C17H26N4O9, Bronchogen C18H30N4O9, Livagen C18H31N5O9, Prostamax C20H33N5O9. Thymalin, Cardiogen, Pancragen, Testagen and Vesilute — verify with manufacturer COA",
      molarMass: "Component masses span roughly 275 to 488 g/mol: Vilon 275.30, Chonluten 319.27, Cartalax 333.29, Crystagen 359.33, Ovagen 375.37, Vesugen 390.39, Pinealon 418.40, Cortagen 430.4, Bronchogen 446.5, Livagen 461.5, Prostamax 487.5. Five components not independently confirmable — verify with manufacturer COA",
      sequence: "Sixteen ultrashort peptides, 20 mg per vial. Verified sequences: Vilon (Lys-Glu), Chonluten (Glu-Asp-Gly), Cartalax (Ala-Glu-Asp), Crystagen (Glu-Asp-Pro), Ovagen (Glu-Asp-Leu), Vesugen (Lys-Glu-Asp), Pinealon (Glu-Asp-Arg), Cortagen (Ala-Glu-Asp-Pro), Bronchogen (Ala-Glu-Asp-Leu), Livagen (Lys-Glu-Asp-Ala), Prostamax (Lys-Glu-Asp-Pro). Thymalin is a thymic polypeptide preparation rather than a single sequence; Cardiogen, Pancragen, Testagen and Vesilute — verify with manufacturer COA",
      retentionTime: 2.0
    },
    es: {
      abstract: "Bioregulator Full Master Set reúne los dieciséis péptidos ultracortos de la familia bioreguladora de Khavinson en una sola colección de investigación que abarca siete sistemas orgánicos: neuro y pineal, inmunitario y tímico, cardiovascular, respiratorio, hepático y digestivo, urogenital, y cartílago y musculoesquelético. Estos compuestos tienen de dos a cuatro residuos y se desarrollaron durante varias décadas en el Instituto de Bioregulación y Gerontología de San Petersburgo. Khavinson y colaboradores publicaron en 2021 una revisión sistemática sobre regulación péptidica de la expresión génica y, en 2023, un acoplamiento molecular que indica que 26 de estos péptidos pueden ser transportados a las células por las familias LAT y PEPT en lugar de por unión a receptor. Avolio y colaboradores documentaron actividad in-vitro en la línea de monocitos y macrófagos THP-1. Uso Exclusivo de Investigación (RUO).",
      mechanism: "La familia bioreguladora opera por regulación génica y no por señalización de receptor, y un set de dieciséis miembros vuelve visible ese principio de un modo que los compuestos individuales no logran. Estos péptidos son demasiado cortos para presentar la superficie de unión extendida que requiere un receptor acoplado a proteínas G de clase B; el mayor del set está por debajo de 500 Da y el menor es un dipéptido. La investigación describe su paso por la membrana mediante transportadores de aminoácidos y de péptidos, con Khavinson y colaboradores demostrando por acoplamiento molecular que los sitios de unión de LAT1, LAT2 y PEPT1 son lo bastante amplios para transportar 26 de ellos. Una vez dentro, las investigaciones describen interacción con el ADN y la cromatina y el consiguiente cambio transcripcional. Lo que distingue a un miembro de otro es el contexto tisular con el que se asocia en la literatura, no un receptor distinto.",
      benefits: [
        "**Cribado sistemático de familia completa:** La investigación muestra que un set completo de dieciséis péptidos permite aplicar un solo formato de ensayo de forma uniforme a cada miembro, que es lo que convierte una colección en un conjunto de datos comparable.",
        "**Modelos de monocitos y macrófagos:** Avolio y colaboradores (2022) trataron la línea THP-1 con péptidos de Khavinson y midieron actividad proliferativa y marcadores de vías inflamatorias, el formato in-vitro publicado más claro para esta familia.",
        "**Perfilado de expresión génica:** Khavinson y colaboradores (2021) revisaron sistemáticamente la regulación péptidica de la expresión génica, estableciendo lecturas transcripcionales como criterio apropiado.",
        "**Captación mediada por transportadores:** Los estudios indican entrada por las familias LAT y PEPT en lugar de unión a receptor, ruta comprobable por coincubación con inhibidores en los dieciséis miembros.",
        "**Comparación entre sistemas:** Las investigaciones de laboratorio usan la cobertura de siete sistemas para preguntar si la asociación tisular de la literatura se corresponde con diferencias medibles en un mismo modelo celular."
      ],
      citations: [
        "Khavinson, V. K., Linkova, N. S., Rudskoy, A. I., & Petukhov, M. G. (2023). 'Feasibility of Transport of 26 Biologically Active Ultrashort Peptides via LAT and PEPT Family Transporters.' Biomolecules, 13(3), 552. DOI: 10.3390/biom13030552 | PMID: 36979488",
        "Khavinson, V. K., Popovich, I. G., Linkova, N. S., et al. (2021). 'Peptide Regulation of Gene Expression: A Systematic Review.' Molecules, 26(22), 7053. DOI: 10.3390/molecules26227053 | PMID: 34834147",
        "Avolio, F., Martinotti, S., Khavinson, V. K., et al. (2022). 'Peptides Regulating Proliferative Activity and Inflammatory Pathways in the Monocyte/Macrophage THP-1 Cell Line.' International Journal of Molecular Sciences, 23(7), 3607. DOI: 10.3390/ijms23073607 | PMID: 35408963"
      ],
      formula: "Set of sixteen — no single formula applies. Independently confirmable components: Vilon C11H21N3O5, Chonluten C11H17N3O8, Cartalax C12H19N3O8, Crystagen C14H21N3O8, Ovagen C15H25N3O8, Vesugen C15H26N4O8, Pinealon C15H26N6O8, Cortagen C17H26N4O9, Bronchogen C18H30N4O9, Livagen C18H31N5O9, Prostamax C20H33N5O9. Thymalin, Cardiogen, Pancragen, Testagen and Vesilute — verify with manufacturer COA",
      molarMass: "Component masses span roughly 275 to 488 g/mol: Vilon 275.30, Chonluten 319.27, Cartalax 333.29, Crystagen 359.33, Ovagen 375.37, Vesugen 390.39, Pinealon 418.40, Cortagen 430.4, Bronchogen 446.5, Livagen 461.5, Prostamax 487.5. Five components not independently confirmable — verify with manufacturer COA",
      sequence: "Dieciséis péptidos ultracortos, 20 mg por vial. Secuencias verificadas: Vilon (Lys-Glu), Chonluten (Glu-Asp-Gly), Cartalax (Ala-Glu-Asp), Crystagen (Glu-Asp-Pro), Ovagen (Glu-Asp-Leu), Vesugen (Lys-Glu-Asp), Pinealon (Glu-Asp-Arg), Cortagen (Ala-Glu-Asp-Pro), Bronchogen (Ala-Glu-Asp-Leu), Livagen (Lys-Glu-Asp-Ala), Prostamax (Lys-Glu-Asp-Pro). Thymalin es una preparación polipeptídica tímica y no una secuencia única; Cardiogen, Pancragen, Testagen y Vesilute — verifique con el COA del fabricante",
      retentionTime: 2.0
    }
  },
  "bioregulator-cardiovascular": {
    en: {
      abstract: "Bioregulator Cardiovascular pairs the two ultrashort Khavinson peptides associated in the literature with cardiovascular tissue: Cardiogen for cardiac and Vesugen for vascular contexts. Vesugen is the tripeptide Lys-Glu-Asp, and Kozlov and colleagues reported on the vasoprotective activity of that sequence in atherosclerosis and restenosis contexts in 2016, a paper that identifies the compound by sequence rather than trade name. Both members act through the family mechanism Khavinson and colleagues reviewed in 2021, in which ultrashort peptides regulate gene expression rather than binding cell-surface receptors, entering cells through the LAT and PEPT transporter families as demonstrated by molecular docking in 2023. Research Use Only (RUO).",
      mechanism: "Both peptides in this panel act through gene regulation rather than receptor binding, and neither is large enough to do otherwise. Vesugen is three residues and Cardiogen four, well below the size a class B G protein-coupled receptor requires for engagement. Research describes the family entering cells through amino acid and peptide transporters, with Khavinson and colleagues showing by molecular docking that LAT1, LAT2 and PEPT1 binding sites can accommodate peptides of this size, followed by interaction with DNA and chromatin that alters transcription. What makes this pair coherent is tissue association rather than shared pharmacology: Kozlov and colleagues reported vasoprotective activity for the Lys-Glu-Asp sequence specifically in vascular contexts, while Cardiogen is placed with cardiac tissue in the same literature.",
      benefits: [
        "**Sequence-Traceable Vascular Work:** Kozlov and colleagues (2016) reported vasoprotective activity for the Lys-Glu-Asp tripeptide by sequence, letting a lab match the vial contents directly to the published molecule.",
        "**Endothelial Culture Readouts:** Research shows proliferation and inflammatory marker endpoints suit this family, following the format Avolio and colleagues established in monocyte and macrophage models.",
        "**Cardiac Versus Vascular Comparison:** Laboratory investigations run the two vials separately rather than combined, the only design that tests whether the literature tissue split corresponds to measurable difference.",
        "**Transporter-Mediated Uptake:** Studies indicate entry through the LAT and PEPT families rather than receptor binding, testable by co-incubation with transporter inhibitors.",
        "**Gene Expression Endpoints:** Khavinson and colleagues (2021) established transcriptional readouts as the appropriate endpoint for this family, replacing the receptor assays used for conventional peptides."
      ],
      citations: [
        "Kozlov, K. L., Bolotov, I. I., Linkova, N. S., et al. (2016). 'Molecular aspects of vasoprotective peptide KED activity during atherosclerosis and restenosis.' Advances in Gerontology, 29(4), 646-650. PMID: 28539025",
        "Khavinson, V. K., Popovich, I. G., Linkova, N. S., et al. (2021). 'Peptide Regulation of Gene Expression: A Systematic Review.' Molecules, 26(22), 7053. DOI: 10.3390/molecules26227053 | PMID: 34834147",
        "Khavinson, V. K., Linkova, N. S., Rudskoy, A. I., & Petukhov, M. G. (2023). 'Feasibility of Transport of 26 Biologically Active Ultrashort Peptides via LAT and PEPT Family Transporters.' Biomolecules, 13(3), 552. DOI: 10.3390/biom13030552 | PMID: 36979488"
      ],
      formula: "Two components. Vesugen C15H26N4O8 (PubChem CID 87571363). Cardiogen — no public compound record under this name; verify with manufacturer COA",
      molarMass: "Vesugen 390.39 g/mol. Cardiogen — not independently confirmable; verify with manufacturer COA",
      sequence: "Two ultrashort peptides, 20 mg per vial: Vesugen (Lys-Glu-Asp, verified) and Cardiogen (reported as Ala-Glu-Asp-Arg — not independently confirmable, verify with manufacturer COA)",
      retentionTime: 2.0
    },
    es: {
      abstract: "Bioregulator Cardiovascular combina los dos péptidos ultracortos de Khavinson asociados en la literatura con tejido cardiovascular: Cardiogen para contextos cardíacos y Vesugen para vasculares. Vesugen es el tripéptido Lys-Glu-Asp, y Kozlov y colaboradores reportaron en 2016 sobre la actividad vasoprotectora de esa secuencia en contextos de aterosclerosis y reestenosis, un artículo que identifica al compuesto por secuencia y no por nombre comercial. Ambos miembros actúan por el mecanismo de familia que Khavinson y colaboradores revisaron en 2021, en el que los péptidos ultracortos regulan la expresión génica en lugar de unirse a receptores de superficie, entrando a las células por las familias de transportadores LAT y PEPT según el acoplamiento molecular de 2023. Uso Exclusivo de Investigación (RUO).",
      mechanism: "Ambos péptidos de este panel actúan por regulación génica y no por unión a receptor, y ninguno es lo bastante grande para hacer otra cosa. Vesugen tiene tres residuos y Cardiogen cuatro, muy por debajo del tamaño que un receptor acoplado a proteínas G de clase B requiere. La investigación describe la entrada de la familia a las células por transportadores de aminoácidos y de péptidos, con Khavinson y colaboradores mostrando por acoplamiento molecular que los sitios de LAT1, LAT2 y PEPT1 admiten péptidos de este tamaño, seguido de interacción con ADN y cromatina que altera la transcripción. Lo que hace coherente a esta pareja es la asociación tisular más que una farmacología compartida: Kozlov y colaboradores reportaron actividad vasoprotectora de la secuencia Lys-Glu-Asp específicamente en contextos vasculares, mientras que Cardiogen se sitúa junto al tejido cardíaco en la misma literatura.",
      benefits: [
        "**Trabajo vascular rastreable por secuencia:** Kozlov y colaboradores (2016) reportaron actividad vasoprotectora del tripéptido Lys-Glu-Asp por secuencia, lo que permite vincular el contenido del vial con la molécula publicada.",
        "**Lecturas en cultivo endotelial:** La investigación muestra que los criterios de proliferación y marcadores inflamatorios encajan con esta familia, siguiendo el formato que Avolio y colaboradores establecieron en modelos de monocitos y macrófagos.",
        "**Comparación cardíaco frente a vascular:** Las investigaciones de laboratorio corren los dos viales por separado y no combinados, el único diseño que comprueba si la división tisular de la literatura corresponde a una diferencia medible.",
        "**Captación mediada por transportadores:** Los estudios indican entrada por las familias LAT y PEPT en lugar de unión a receptor, comprobable por coincubación con inhibidores.",
        "**Criterios de expresión génica:** Khavinson y colaboradores (2021) establecieron las lecturas transcripcionales como criterio apropiado para esta familia, reemplazando los ensayos de receptor de los péptidos convencionales."
      ],
      citations: [
        "Kozlov, K. L., Bolotov, I. I., Linkova, N. S., et al. (2016). 'Molecular aspects of vasoprotective peptide KED activity during atherosclerosis and restenosis.' Advances in Gerontology, 29(4), 646-650. PMID: 28539025",
        "Khavinson, V. K., Popovich, I. G., Linkova, N. S., et al. (2021). 'Peptide Regulation of Gene Expression: A Systematic Review.' Molecules, 26(22), 7053. DOI: 10.3390/molecules26227053 | PMID: 34834147",
        "Khavinson, V. K., Linkova, N. S., Rudskoy, A. I., & Petukhov, M. G. (2023). 'Feasibility of Transport of 26 Biologically Active Ultrashort Peptides via LAT and PEPT Family Transporters.' Biomolecules, 13(3), 552. DOI: 10.3390/biom13030552 | PMID: 36979488"
      ],
      formula: "Two components. Vesugen C15H26N4O8 (PubChem CID 87571363). Cardiogen — no public compound record under this name; verify with manufacturer COA",
      molarMass: "Vesugen 390.39 g/mol. Cardiogen — not independently confirmable; verify with manufacturer COA",
      sequence: "Dos péptidos ultracortos, 20 mg por vial: Vesugen (Lys-Glu-Asp, verificado) y Cardiogen (reportado como Ala-Glu-Asp-Arg — no confirmable de forma independiente, verifique con el COA del fabricante)",
      retentionTime: 2.0
    }
  },
  "bioregulator-hepatic-digestive": {
    en: {
      abstract: "Bioregulator Hepatic / Digestive groups the three ultrashort Khavinson peptides associated in the literature with hepatic, digestive and pancreatic tissue: Ovagen, Livagen and Pancragen. Livagen is the tetrapeptide Lys-Glu-Asp-Ala, and Kuznik and colleagues reported on that sequence together with a polypeptide liver complex in 2020, a study that identifies the compound by sequence rather than by trade name. Ovagen is the tripeptide Glu-Asp-Leu. All three act through the family mechanism Khavinson and colleagues reviewed in 2021, in which ultrashort peptides regulate gene expression rather than binding cell-surface receptors, entering cells through the LAT and PEPT transporter families as molecular docking demonstrated in 2023. Research Use Only (RUO).",
      mechanism: "The three peptides here act by gene regulation, not receptor agonism, and their size makes that the only available route. Ovagen is three residues, Livagen and Pancragen four, all far below the threshold for engaging a class B G protein-coupled receptor. Research describes the family crossing the membrane through amino acid and peptide transporters, with Khavinson and colleagues demonstrating by molecular docking that LAT1, LAT2 and PEPT1 accommodate peptides of this size, after which laboratory investigations describe interaction with DNA and chromatin and consequent transcriptional change. The panel coheres by tissue association rather than shared target. Kuznik and colleagues examined the Lys-Glu-Asp-Ala sequence in a hepatic context specifically, which is the clearest sequence-level attribution among the three.",
      benefits: [
        "**Sequence-Traceable Hepatic Work:** Kuznik and colleagues (2020) reported on the Lys-Glu-Asp-Ala tetrapeptide by sequence alongside a polypeptide liver complex, allowing direct vial-to-publication matching.",
        "**Hepatocyte Culture Readouts:** Research shows gene expression endpoints suit this family in cultured hepatocyte systems, following the framework Khavinson and colleagues reviewed in 2021.",
        "**Three-Way Tissue Comparison:** Laboratory investigations run the vials separately to test whether the hepatic, digestive and pancreatic split reported in the literature produces measurable difference in one shared model.",
        "**Transporter-Mediated Uptake:** Studies indicate entry through the LAT and PEPT transporter families rather than receptor binding, testable by co-incubation with transporter inhibitors.",
        "**Nomenclature Disambiguation:** Ovagen shares its name with a veterinary follicle-stimulating hormone preparation, making sequence-level identification rather than trade-name search essential for literature work."
      ],
      citations: [
        "Kuznik, B. I., Khasanova, N. B., Ryzhak, G. A., et al. (2020). 'The influence of polypeptide liver complex and tetrapeptide KEDA on organism physiological function.' Advances in Gerontology, 33(1), 159-164. PMID: 32362099",
        "Khavinson, V. K., Popovich, I. G., Linkova, N. S., et al. (2021). 'Peptide Regulation of Gene Expression: A Systematic Review.' Molecules, 26(22), 7053. DOI: 10.3390/molecules26227053 | PMID: 34834147",
        "Khavinson, V. K., Linkova, N. S., Rudskoy, A. I., & Petukhov, M. G. (2023). 'Feasibility of Transport of 26 Biologically Active Ultrashort Peptides via LAT and PEPT Family Transporters.' Biomolecules, 13(3), 552. DOI: 10.3390/biom13030552 | PMID: 36979488"
      ],
      formula: "Three components. Ovagen C15H25N3O8 (CID 444128); Livagen C18H31N5O9 (CID 87919683). Pancragen — no public compound record under this name; verify with manufacturer COA",
      molarMass: "Ovagen 375.37 g/mol; Livagen 461.5 g/mol. Pancragen — not independently confirmable; verify with manufacturer COA",
      sequence: "Three ultrashort peptides, 20 mg per vial: Ovagen (Glu-Asp-Leu, verified), Livagen (Lys-Glu-Asp-Ala, verified) and Pancragen (reported as Lys-Glu-Asp-Trp — not independently confirmable, verify with manufacturer COA)",
      retentionTime: 2.1
    },
    es: {
      abstract: "Bioregulator Hepatic / Digestive agrupa los tres péptidos ultracortos de Khavinson asociados en la literatura con tejido hepático, digestivo y pancreático: Ovagen, Livagen y Pancragen. Livagen es el tetrapéptido Lys-Glu-Asp-Ala, y Kuznik y colaboradores reportaron en 2020 sobre esa secuencia junto a un complejo polipeptídico hepático, un estudio que identifica al compuesto por secuencia y no por nombre comercial. Ovagen es el tripéptido Glu-Asp-Leu. Los tres actúan por el mecanismo de familia que Khavinson y colaboradores revisaron en 2021, en el que los péptidos ultracortos regulan la expresión génica en lugar de unirse a receptores de superficie, entrando a las células por las familias LAT y PEPT según demostró el acoplamiento molecular de 2023. Uso Exclusivo de Investigación (RUO).",
      mechanism: "Los tres péptidos actúan por regulación génica y no por agonismo de receptor, y su tamaño hace de esa la única ruta disponible. Ovagen tiene tres residuos, Livagen y Pancragen cuatro, muy por debajo del umbral para activar un receptor acoplado a proteínas G de clase B. La investigación describe el paso de la familia por la membrana mediante transportadores de aminoácidos y de péptidos, con Khavinson y colaboradores demostrando por acoplamiento molecular que LAT1, LAT2 y PEPT1 admiten péptidos de este tamaño, tras lo cual las investigaciones describen interacción con ADN y cromatina y el consiguiente cambio transcripcional. El panel es coherente por asociación tisular más que por diana compartida. Kuznik y colaboradores examinaron la secuencia Lys-Glu-Asp-Ala en contexto hepático específicamente, la atribución a nivel de secuencia más clara de las tres.",
      benefits: [
        "**Trabajo hepático rastreable por secuencia:** Kuznik y colaboradores (2020) reportaron sobre el tetrapéptido Lys-Glu-Asp-Ala por secuencia junto a un complejo polipeptídico hepático, permitiendo el emparejamiento directo entre vial y publicación.",
        "**Lecturas en cultivo de hepatocitos:** La investigación muestra que los criterios de expresión génica encajan con esta familia en sistemas de hepatocitos en cultivo, siguiendo el marco revisado por Khavinson y colaboradores en 2021.",
        "**Comparación tisular a tres bandas:** Las investigaciones de laboratorio corren los viales por separado para comprobar si la división hepática, digestiva y pancreática de la literatura produce diferencias medibles en un mismo modelo.",
        "**Captación mediada por transportadores:** Los estudios indican entrada por las familias LAT y PEPT en lugar de unión a receptor, comprobable por coincubación con inhibidores.",
        "**Desambiguación de nomenclatura:** Ovagen comparte nombre con una preparación veterinaria de hormona foliculoestimulante, lo que hace esencial la identificación por secuencia y no por búsqueda de nombre comercial."
      ],
      citations: [
        "Kuznik, B. I., Khasanova, N. B., Ryzhak, G. A., et al. (2020). 'The influence of polypeptide liver complex and tetrapeptide KEDA on organism physiological function.' Advances in Gerontology, 33(1), 159-164. PMID: 32362099",
        "Khavinson, V. K., Popovich, I. G., Linkova, N. S., et al. (2021). 'Peptide Regulation of Gene Expression: A Systematic Review.' Molecules, 26(22), 7053. DOI: 10.3390/molecules26227053 | PMID: 34834147",
        "Khavinson, V. K., Linkova, N. S., Rudskoy, A. I., & Petukhov, M. G. (2023). 'Feasibility of Transport of 26 Biologically Active Ultrashort Peptides via LAT and PEPT Family Transporters.' Biomolecules, 13(3), 552. DOI: 10.3390/biom13030552 | PMID: 36979488"
      ],
      formula: "Three components. Ovagen C15H25N3O8 (CID 444128); Livagen C18H31N5O9 (CID 87919683). Pancragen — no public compound record under this name; verify with manufacturer COA",
      molarMass: "Ovagen 375.37 g/mol; Livagen 461.5 g/mol. Pancragen — not independently confirmable; verify with manufacturer COA",
      sequence: "Tres péptidos ultracortos, 20 mg por vial: Ovagen (Glu-Asp-Leu, verificado), Livagen (Lys-Glu-Asp-Ala, verificado) y Pancragen (reportado como Lys-Glu-Asp-Trp — no confirmable de forma independiente, verifique con el COA del fabricante)",
      retentionTime: 2.1
    }
  },
  "bioregulator-immune-thymic": {
    en: {
      abstract: "Bioregulator Immune / Thymic groups three preparations associated with thymic and immune tissue research: Thymalin, Vilon and Crystagen. The set has an internal structural relationship the other panels lack. Linkova and colleagues reported in 2023 that the Thymalin preparation contains the dipeptides Lys-Glu and Glu-Trp, and Vilon is the Lys-Glu dipeptide supplied separately, so the kit contains both a preparation and one of its own constituents. Khavinson and colleagues reported Thymalin activating differentiation of human hematopoietic stem cells in 2020, and separately that the Lys-Glu peptide regulates SIRT1, PARP1 and PARP2 gene expression in mesenchymal stem cell aging. Crystagen is the tripeptide Glu-Asp-Pro. Research Use Only (RUO).",
      mechanism: "Two of the three components are defined ultrashort peptides acting through gene regulation, and the third is a preparation containing one of them. Vilon is the dipeptide Lys-Glu and Crystagen the tripeptide Glu-Asp-Pro, both far too small for receptor engagement and described entering cells through amino acid and peptide transporters before influencing transcription. Research shows the Lys-Glu peptide specifically regulates SIRT1, PARP1 and PARP2 gene expression during mesenchymal stem cell aging, which names an actual transcriptional target rather than a general effect. Thymalin is a thymic polypeptide preparation containing Lys-Glu and Glu-Trp among other components, and Khavinson and colleagues reported it activating differentiation of human hematopoietic stem cells. Preparation and component in one kit is what makes this panel distinctive.",
      benefits: [
        "**Preparation Versus Component Deconvolution:** Linkova and colleagues (2023) showed Thymalin contains the Lys-Glu dipeptide that Vilon supplies separately, letting one plate test how much of the preparation's effect a single peptide accounts for.",
        "**Named Transcriptional Targets:** Khavinson and colleagues (2023) reported the Lys-Glu peptide regulating SIRT1, PARP1 and PARP2 expression in mesenchymal stem cell aging, an unusually specific endpoint for this family.",
        "**Hematopoietic Stem Cell Differentiation:** Khavinson and colleagues (2020) reported Thymalin activating differentiation of human hematopoietic stem cells, giving a defined cellular readout.",
        "**Monocyte and Macrophage Models:** Research shows proliferative and inflammatory pathway readouts in THP-1 systems suit this family, following the format Avolio and colleagues established.",
        "**Mixed-Format Certification:** Studies indicate a preparation and a defined sequence require different analytical treatment, making this panel a practical case for handling both in one workflow."
      ],
      citations: [
        "Linkova, N., Khavinson, V., Diatlova, A., et al. (2023). 'The Influence of KE and EW Dipeptides in the Composition of the Thymalin Drug on Gene Expression and Protein Synthesis.' International Journal of Molecular Sciences, 24(17), 13377. DOI: 10.3390/ijms241713377 | PMID: 37686182",
        "Khavinson, V. K., Linkova, N. S., Kvetnoy, I. M., et al. (2020). 'Thymalin: Activation of Differentiation of Human Hematopoietic Stem Cells.' Bulletin of Experimental Biology and Medicine, 170(1), 118-122. DOI: 10.1007/s10517-020-05016-z | PMID: 33237528",
        "Khavinson, V. K., Linkova, N. S., Ashapkin, V. V., et al. (2023). 'KE peptide regulates SIRT1, PARP1, PARP2 gene expression and protein synthesis in human mesenchymal stem cells aging.' Advances in Gerontology, 36(3), 302-312. PMID: 37782636"
      ],
      formula: "Three components. Vilon C11H21N3O5 (CID 7010502); Crystagen C14H21N3O8 (CID 145455337). Thymalin is a thymic polypeptide preparation, not a single molecule — verify with manufacturer COA",
      molarMass: "Vilon 275.30 g/mol; Crystagen 359.33 g/mol. Thymalin has no single molecular mass — verify preparation specification with manufacturer COA",
      sequence: "Three components, 20 mg per vial: Vilon (Lys-Glu, verified dipeptide), Crystagen (Glu-Asp-Pro, verified tripeptide) and Thymalin (a thymic polypeptide preparation reported to contain Lys-Glu and Glu-Trp — verify with manufacturer COA)",
      retentionTime: 1.8
    },
    es: {
      abstract: "Bioregulator Immune / Thymic agrupa tres preparaciones asociadas con investigación de tejido tímico e inmunitario: Thymalin, Vilon y Crystagen. El set tiene una relación estructural interna que los otros paneles no poseen. Linkova y colaboradores reportaron en 2023 que la preparación Thymalin contiene los dipéptidos Lys-Glu y Glu-Trp, y Vilon es el dipéptido Lys-Glu suministrado por separado, de modo que el kit contiene tanto una preparación como uno de sus propios constituyentes. Khavinson y colaboradores reportaron en 2020 que Thymalin activa la diferenciación de células madre hematopoyéticas humanas y, por separado, que el péptido Lys-Glu regula la expresión de SIRT1, PARP1 y PARP2 en el envejecimiento de células madre mesenquimales. Crystagen es el tripéptido Glu-Asp-Pro. Uso Exclusivo de Investigación (RUO).",
      mechanism: "Dos de los tres componentes son péptidos ultracortos definidos que actúan por regulación génica, y el tercero es una preparación que contiene a uno de ellos. Vilon es el dipéptido Lys-Glu y Crystagen el tripéptido Glu-Asp-Pro, ambos demasiado pequeños para activar un receptor y descritos entrando a las células por transportadores de aminoácidos y de péptidos antes de influir en la transcripción. La investigación muestra que el péptido Lys-Glu regula específicamente la expresión de SIRT1, PARP1 y PARP2 durante el envejecimiento de células madre mesenquimales, lo que nombra una diana transcripcional concreta y no un efecto general. Thymalin es una preparación polipeptídica tímica que contiene Lys-Glu y Glu-Trp entre otros componentes, y Khavinson y colaboradores reportaron que activa la diferenciación de células madre hematopoyéticas humanas. Preparación y componente en un mismo kit es lo que distingue a este panel.",
      benefits: [
        "**Deconvolución preparación frente a componente:** Linkova y colaboradores (2023) mostraron que Thymalin contiene el dipéptido Lys-Glu que Vilon suministra por separado, permitiendo comprobar en una placa cuánto del efecto de la preparación explica un solo péptido.",
        "**Dianas transcripcionales nombradas:** Khavinson y colaboradores (2023) reportaron que el péptido Lys-Glu regula la expresión de SIRT1, PARP1 y PARP2 en el envejecimiento de células madre mesenquimales, un criterio inusualmente específico para esta familia.",
        "**Diferenciación de células madre hematopoyéticas:** Khavinson y colaboradores (2020) reportaron que Thymalin activa la diferenciación de células madre hematopoyéticas humanas, dando una lectura celular definida.",
        "**Modelos de monocitos y macrófagos:** La investigación muestra que las lecturas proliferativas y de vías inflamatorias en sistemas THP-1 encajan con esta familia, siguiendo el formato de Avolio y colaboradores.",
        "**Certificación de formato mixto:** Los estudios indican que una preparación y una secuencia definida requieren tratamiento analítico distinto, lo que hace de este panel un caso práctico para manejar ambos en un solo flujo."
      ],
      citations: [
        "Linkova, N., Khavinson, V., Diatlova, A., et al. (2023). 'The Influence of KE and EW Dipeptides in the Composition of the Thymalin Drug on Gene Expression and Protein Synthesis.' International Journal of Molecular Sciences, 24(17), 13377. DOI: 10.3390/ijms241713377 | PMID: 37686182",
        "Khavinson, V. K., Linkova, N. S., Kvetnoy, I. M., et al. (2020). 'Thymalin: Activation of Differentiation of Human Hematopoietic Stem Cells.' Bulletin of Experimental Biology and Medicine, 170(1), 118-122. DOI: 10.1007/s10517-020-05016-z | PMID: 33237528",
        "Khavinson, V. K., Linkova, N. S., Ashapkin, V. V., et al. (2023). 'KE peptide regulates SIRT1, PARP1, PARP2 gene expression and protein synthesis in human mesenchymal stem cells aging.' Advances in Gerontology, 36(3), 302-312. PMID: 37782636"
      ],
      formula: "Three components. Vilon C11H21N3O5 (CID 7010502); Crystagen C14H21N3O8 (CID 145455337). Thymalin is a thymic polypeptide preparation, not a single molecule — verify with manufacturer COA",
      molarMass: "Vilon 275.30 g/mol; Crystagen 359.33 g/mol. Thymalin has no single molecular mass — verify preparation specification with manufacturer COA",
      sequence: "Tres componentes, 20 mg por vial: Vilon (Lys-Glu, dipéptido verificado), Crystagen (Glu-Asp-Pro, tripéptido verificado) y Thymalin (preparación polipeptídica tímica que se reporta contiene Lys-Glu y Glu-Trp — verifique con el COA del fabricante)",
      retentionTime: 1.8
    }
  },
  "bioregulator-neuro-pineal": {
    en: {
      abstract: "Bioregulator Neuro / Pineal pairs the two ultrashort Khavinson peptides associated with central nervous system tissue: Pinealon, the tripeptide Glu-Asp-Arg linked with pineal gland and broader neural contexts, and Cortagen, the tetrapeptide Ala-Glu-Asp-Pro associated more closely with cerebral cortex. Both resolve to public compound records, with masses near 418 and 430 Da respectively. Ilina and colleagues reviewed neuroepigenetic mechanisms of ultrashort peptides in 2022, establishing transcriptional rather than receptor-mediated action as the operative frame. Zarubina and Shabanov reported on Cortagen in cerebral ischemia models in 2011. Both members act through the family mechanism of transporter-mediated cellular entry followed by interaction with DNA and chromatin. Research Use Only (RUO).",
      mechanism: "Both peptides act through transcriptional regulation, and Ilina and colleagues framed this specifically for the nervous system under the heading of neuroepigenetic mechanisms. Neither Pinealon nor Cortagen is large enough to engage a neuronal G protein-coupled receptor: one is three residues, the other four. Research describes the family entering cells through amino acid and peptide transporters, with Khavinson and colleagues demonstrating by molecular docking that LAT1, LAT2 and PEPT1 accommodate peptides of this size, followed by interaction with DNA and chromatin that alters gene expression. The two differ in reported tissue association rather than mechanism, Pinealon with pineal and broader neural tissue and Cortagen with cerebral cortex, which is what makes running them side by side informative.",
      benefits: [
        "**Neuroepigenetic Framing:** Ilina and colleagues (2022) reviewed neuroepigenetic mechanisms of ultrashort peptides, telling labs to design around transcriptional endpoints rather than receptor binding assays that would find nothing.",
        "**Pineal Versus Cortical Comparison:** Research shows the two are placed with different neural tissue in the literature, so running them separately in one neuronal model tests whether that distinction is measurable.",
        "**Cerebral Ischemia Models:** Zarubina and Shabanov (2011) reported on Cortagen in chronic cerebral ischemia contexts, giving the tetrapeptide arm a specific published model.",
        "**High-Resolution Identity Work:** Studies indicate the two differ by roughly 12 Da, the closest pair in the bioregulator family, making this panel a demanding test case for accurate mass identification.",
        "**Transporter-Mediated Uptake:** Laboratory investigations describe entry through the LAT and PEPT transporter families rather than receptor binding, testable by co-incubation with transporter inhibitors."
      ],
      citations: [
        "Ilina, A., Khavinson, V., Linkova, N., et al. (2022). 'Neuroepigenetic Mechanisms of Action of Ultrashort Peptides in Alzheimer's Disease.' International Journal of Molecular Sciences, 23(8), 4259. DOI: 10.3390/ijms23084259 | PMID: 35457077",
        "Zarubina, I. V., & Shabanov, P. D. (2011). 'Cortexin and cortagen as correcting agents in functional and metabolic disorders in the brain in chronic ischemia.' Eksperimental'naia i Klinicheskaia Farmakologiia, 74(2), 8-15. PMID: 21476278",
        "Khavinson, V. K., Popovich, I. G., Linkova, N. S., et al. (2021). 'Peptide Regulation of Gene Expression: A Systematic Review.' Molecules, 26(22), 7053. DOI: 10.3390/molecules26227053 | PMID: 34834147"
      ],
      formula: "Two components, both independently confirmable. Pinealon C15H26N6O8 (PubChem CID 10273502); Cortagen C17H26N4O9 (PubChem CID 18439621)",
      molarMass: "Pinealon 418.40 g/mol; Cortagen 430.4 g/mol — the closest pair in the bioregulator family, roughly 12 g/mol apart",
      sequence: "Two ultrashort peptides, 20 mg per vial: Pinealon (Glu-Asp-Arg, verified tripeptide) and Cortagen (Ala-Glu-Asp-Pro, verified tetrapeptide)",
      retentionTime: 2.2
    },
    es: {
      abstract: "Bioregulator Neuro / Pineal combina los dos péptidos ultracortos de Khavinson asociados con tejido del sistema nervioso central: Pinealon, el tripéptido Glu-Asp-Arg vinculado con la glándula pineal y contextos neurales amplios, y Cortagen, el tetrapéptido Ala-Glu-Asp-Pro asociado más estrechamente con la corteza cerebral. Ambos resuelven a registros públicos, con masas cercanas a 418 y 430 Da respectivamente. Ilina y colaboradores revisaron en 2022 los mecanismos neuroepigenéticos de los péptidos ultracortos, estableciendo la acción transcripcional y no mediada por receptor como marco operativo. Zarubina y Shabanov reportaron sobre Cortagen en modelos de isquemia cerebral en 2011. Ambos actúan por el mecanismo de familia de entrada celular mediada por transportadores seguida de interacción con ADN y cromatina. Uso Exclusivo de Investigación (RUO).",
      mechanism: "Ambos péptidos actúan por regulación transcripcional, e Ilina y colaboradores enmarcaron esto específicamente para el sistema nervioso bajo el título de mecanismos neuroepigenéticos. Ni Pinealon ni Cortagen son lo bastante grandes para activar un receptor neuronal acoplado a proteínas G: uno tiene tres residuos, el otro cuatro. La investigación describe la entrada de la familia a las células por transportadores de aminoácidos y de péptidos, con Khavinson y colaboradores demostrando por acoplamiento molecular que LAT1, LAT2 y PEPT1 admiten péptidos de este tamaño, seguido de interacción con ADN y cromatina que altera la expresión génica. Ambos difieren en la asociación tisular reportada más que en mecanismo, Pinealon con tejido pineal y neural amplio y Cortagen con corteza cerebral, lo que hace informativo correrlos en paralelo.",
      benefits: [
        "**Marco neuroepigenético:** Ilina y colaboradores (2022) revisaron los mecanismos neuroepigenéticos de los péptidos ultracortos, indicando a los laboratorios diseñar en torno a criterios transcripcionales y no a ensayos de unión a receptor.",
        "**Comparación pineal frente a cortical:** La investigación muestra que ambos se sitúan junto a tejido neural distinto en la literatura, de modo que correrlos por separado en un modelo neuronal comprueba si esa distinción es medible.",
        "**Modelos de isquemia cerebral:** Zarubina y Shabanov (2011) reportaron sobre Cortagen en contextos de isquemia cerebral crónica, dando al brazo tetrapéptido un modelo publicado específico.",
        "**Trabajo de identidad de alta resolución:** Los estudios indican que ambos difieren en unos 12 Da, la pareja más próxima de la familia, lo que hace de este panel un caso de prueba exigente para la identificación por masa exacta.",
        "**Captación mediada por transportadores:** Las investigaciones describen entrada por las familias LAT y PEPT en lugar de unión a receptor, comprobable por coincubación con inhibidores."
      ],
      citations: [
        "Ilina, A., Khavinson, V., Linkova, N., et al. (2022). 'Neuroepigenetic Mechanisms of Action of Ultrashort Peptides in Alzheimer's Disease.' International Journal of Molecular Sciences, 23(8), 4259. DOI: 10.3390/ijms23084259 | PMID: 35457077",
        "Zarubina, I. V., & Shabanov, P. D. (2011). 'Cortexin and cortagen as correcting agents in functional and metabolic disorders in the brain in chronic ischemia.' Eksperimental'naia i Klinicheskaia Farmakologiia, 74(2), 8-15. PMID: 21476278",
        "Khavinson, V. K., Popovich, I. G., Linkova, N. S., et al. (2021). 'Peptide Regulation of Gene Expression: A Systematic Review.' Molecules, 26(22), 7053. DOI: 10.3390/molecules26227053 | PMID: 34834147"
      ],
      formula: "Two components, both independently confirmable. Pinealon C15H26N6O8 (PubChem CID 10273502); Cortagen C17H26N4O9 (PubChem CID 18439621)",
      molarMass: "Pinealon 418.40 g/mol; Cortagen 430.4 g/mol — the closest pair in the bioregulator family, roughly 12 g/mol apart",
      sequence: "Dos péptidos ultracortos, 20 mg por vial: Pinealon (Glu-Asp-Arg, tripéptido verificado) y Cortagen (Ala-Glu-Asp-Pro, tetrapéptido verificado)",
      retentionTime: 2.2
    }
  },
  "bioregulator-respiratory": {
    en: {
      abstract: "Bioregulator Respiratory pairs the two ultrashort Khavinson peptides associated with bronchial and respiratory tissue: Chonluten, the tripeptide Glu-Asp-Gly, and Bronchogen, the tetrapeptide Ala-Glu-Asp-Leu. Both resolve to public compound records with masses near 319 and 447 Da. Both are built around a shared Glu-Asp core, a structural motif recurring across the bioregulator family. Neither carries substantial indexed primary literature under its own trade name, so the operative evidence is family-level: Khavinson and colleagues systematically reviewed peptide regulation of gene expression in 2021 and demonstrated transporter-mediated cellular entry by molecular docking in 2023, while Avolio and colleagues reported inflammatory pathway readouts in the THP-1 monocyte and macrophage line. Research Use Only (RUO).",
      mechanism: "Both peptides act through gene regulation rather than receptor binding, and their structures illustrate a pattern that runs through the whole bioregulator family. Chonluten is Glu-Asp-Gly and Bronchogen is Ala-Glu-Asp-Leu: different lengths, different flanking residues, but the same central Glu-Asp pair. That acidic core appears in most members of the family, and what varies between them is what sits around it, which is the structural basis for their different reported tissue associations. Research describes the family crossing the membrane through amino acid and peptide transporters, with Khavinson and colleagues showing by docking that LAT1, LAT2 and PEPT1 accommodate 26 such peptides, followed by interaction with DNA and chromatin that alters transcription. No receptor is involved for either member.",
      benefits: [
        "**Shared Core Structure-Activity:** Research shows both peptides carry the same central Glu-Asp pair with different flanking residues, letting a lab test whether the flanks alone change measurable output.",
        "**Bronchial Epithelial Culture:** Studies indicate transcriptional endpoints suit this family, and airway epithelial systems provide the tissue-appropriate model given the reported associations.",
        "**Inflammatory Pathway Readouts:** Avolio and colleagues (2022) established proliferative and inflammatory marker endpoints in the THP-1 line, the readout most directly transferable to respiratory work.",
        "**Wide Mass Separation:** Laboratory investigations benefit from a roughly 127 Da gap between the two components, the widest in any two-vial bioregulator panel and the easiest to resolve analytically.",
        "**Evidence Base Transparency:** Neither component carries substantial indexed primary literature under its trade name, making family-level framing and independent characterization the honest starting point."
      ],
      citations: [
        "Khavinson, V. K., Popovich, I. G., Linkova, N. S., et al. (2021). 'Peptide Regulation of Gene Expression: A Systematic Review.' Molecules, 26(22), 7053. DOI: 10.3390/molecules26227053 | PMID: 34834147",
        "Khavinson, V. K., Linkova, N. S., Rudskoy, A. I., & Petukhov, M. G. (2023). 'Feasibility of Transport of 26 Biologically Active Ultrashort Peptides via LAT and PEPT Family Transporters.' Biomolecules, 13(3), 552. DOI: 10.3390/biom13030552 | PMID: 36979488",
        "Avolio, F., Martinotti, S., Khavinson, V. K., et al. (2022). 'Peptides Regulating Proliferative Activity and Inflammatory Pathways in the Monocyte/Macrophage THP-1 Cell Line.' International Journal of Molecular Sciences, 23(7), 3607. DOI: 10.3390/ijms23073607 | PMID: 35408963"
      ],
      formula: "Two components, both independently confirmable. Chonluten C11H17N3O8 (PubChem CID 194641); Bronchogen C18H30N4O9 (PubChem CID 11690869)",
      molarMass: "Chonluten 319.27 g/mol; Bronchogen 446.5 g/mol — roughly 127 g/mol apart, the widest separation in any two-vial bioregulator panel",
      sequence: "Two ultrashort peptides, 20 mg per vial: Chonluten (Glu-Asp-Gly, verified tripeptide) and Bronchogen (Ala-Glu-Asp-Leu, verified tetrapeptide), both built on a shared Glu-Asp core",
      retentionTime: 1.9
    },
    es: {
      abstract: "Bioregulator Respiratory combina los dos péptidos ultracortos de Khavinson asociados con tejido bronquial y respiratorio: Chonluten, el tripéptido Glu-Asp-Gly, y Bronchogen, el tetrapéptido Ala-Glu-Asp-Leu. Ambos resuelven a registros públicos con masas cercanas a 319 y 447 Da. Ambos se construyen en torno a un núcleo Glu-Asp compartido, un motivo estructural recurrente en la familia bioreguladora. Ninguno cuenta con literatura primaria indexada sustancial bajo su nombre comercial, de modo que la evidencia operativa es de nivel familiar: Khavinson y colaboradores revisaron sistemáticamente la regulación péptidica de la expresión génica en 2021 y demostraron la entrada celular mediada por transportadores por acoplamiento molecular en 2023, mientras que Avolio y colaboradores reportaron lecturas de vías inflamatorias en la línea de monocitos y macrófagos THP-1. Uso Exclusivo de Investigación (RUO).",
      mechanism: "Ambos péptidos actúan por regulación génica y no por unión a receptor, y sus estructuras ilustran un patrón que recorre toda la familia bioreguladora. Chonluten es Glu-Asp-Gly y Bronchogen es Ala-Glu-Asp-Leu: longitudes distintas, residuos flanqueantes distintos, pero el mismo par central Glu-Asp. Ese núcleo ácido aparece en la mayoría de los miembros de la familia, y lo que varía entre ellos es lo que lo rodea, que es la base estructural de sus distintas asociaciones tisulares reportadas. La investigación describe el paso de la familia por la membrana mediante transportadores de aminoácidos y de péptidos, con Khavinson y colaboradores mostrando por acoplamiento que LAT1, LAT2 y PEPT1 admiten 26 de estos péptidos, seguido de interacción con ADN y cromatina que altera la transcripción. No hay receptor implicado en ninguno de los dos.",
      benefits: [
        "**Relación estructura-actividad de núcleo compartido:** La investigación muestra que ambos péptidos portan el mismo par central Glu-Asp con residuos flanqueantes distintos, lo que permite comprobar si los flancos por sí solos cambian el resultado medible.",
        "**Cultivo de epitelio bronquial:** Los estudios indican que los criterios transcripcionales encajan con esta familia, y los sistemas de epitelio de vía aérea aportan el modelo tisular apropiado según las asociaciones reportadas.",
        "**Lecturas de vías inflamatorias:** Avolio y colaboradores (2022) establecieron criterios de proliferación y marcadores inflamatorios en la línea THP-1, la lectura más directamente transferible al trabajo respiratorio.",
        "**Amplia separación de masa:** Las investigaciones de laboratorio se benefician de una brecha de unos 127 Da entre ambos componentes, la más amplia de cualquier panel bioregulador de dos viales y la más fácil de resolver analíticamente.",
        "**Transparencia de la base de evidencia:** Ningún componente cuenta con literatura primaria indexada sustancial bajo su nombre comercial, lo que hace del marco familiar y la caracterización independiente el punto de partida honesto."
      ],
      citations: [
        "Khavinson, V. K., Popovich, I. G., Linkova, N. S., et al. (2021). 'Peptide Regulation of Gene Expression: A Systematic Review.' Molecules, 26(22), 7053. DOI: 10.3390/molecules26227053 | PMID: 34834147",
        "Khavinson, V. K., Linkova, N. S., Rudskoy, A. I., & Petukhov, M. G. (2023). 'Feasibility of Transport of 26 Biologically Active Ultrashort Peptides via LAT and PEPT Family Transporters.' Biomolecules, 13(3), 552. DOI: 10.3390/biom13030552 | PMID: 36979488",
        "Avolio, F., Martinotti, S., Khavinson, V. K., et al. (2022). 'Peptides Regulating Proliferative Activity and Inflammatory Pathways in the Monocyte/Macrophage THP-1 Cell Line.' International Journal of Molecular Sciences, 23(7), 3607. DOI: 10.3390/ijms23073607 | PMID: 35408963"
      ],
      formula: "Two components, both independently confirmable. Chonluten C11H17N3O8 (PubChem CID 194641); Bronchogen C18H30N4O9 (PubChem CID 11690869)",
      molarMass: "Chonluten 319.27 g/mol; Bronchogen 446.5 g/mol — roughly 127 g/mol apart, the widest separation in any two-vial bioregulator panel",
      sequence: "Dos péptidos ultracortos, 20 mg por vial: Chonluten (Glu-Asp-Gly, tripéptido verificado) y Bronchogen (Ala-Glu-Asp-Leu, tetrapéptido verificado), ambos construidos sobre un núcleo Glu-Asp compartido",
      retentionTime: 1.9
    }
  },
  "bioregulator-urogenital": {
    en: {
      abstract: "Bioregulator Urogenital groups the three ultrashort Khavinson peptides associated in the literature with urogenital tissue: Prostamax with prostate, Testagen with testicular and Vesilute with bladder contexts. Prostamax is the tetrapeptide Lys-Glu-Asp-Pro, resolving to a public compound record at roughly 488 Da, the largest member of the bioregulator family. Testagen and Vesilute have no public compound records under those names. All three act through the family mechanism Khavinson and colleagues reviewed in 2021, in which ultrashort peptides regulate gene expression rather than binding cell-surface receptors, entering cells through the LAT and PEPT transporter families as molecular docking demonstrated in 2023. Chalisova and colleagues established organotypic tissue culture as the working model format. Research Use Only (RUO).",
      mechanism: "All three peptides act through gene regulation rather than receptor agonism, and Prostamax makes the size argument concretely. At roughly 488 Da it is the heaviest member of the bioregulator family, and it is still four residues, an order of magnitude below what a class B G protein-coupled receptor needs to engage a ligand. Research describes the family crossing the membrane through amino acid and peptide transporters, with Khavinson and colleagues demonstrating by molecular docking that LAT1, LAT2 and PEPT1 binding sites accommodate 26 such peptides, followed by interaction with DNA and chromatin that alters transcription. The three cohere by reported tissue association rather than shared target, and organotypic culture is the format that makes tissue-level distinctions testable.",
      benefits: [
        "**Organotypic Tissue Culture:** Chalisova and colleagues (2013) worked in organotypic culture, the format that lets tissue-specific comparisons mean something because the reported associations are tissue rather than receptor properties.",
        "**Three-Way Tissue Comparison:** Research shows the components are placed with prostate, testicular and bladder tissue respectively, so running them separately tests whether that split produces measurable difference.",
        "**Largest Family Member:** Studies indicate Prostamax at roughly 488 Da is the heaviest bioregulator, useful as the upper size bound when testing transporter-mediated uptake limits.",
        "**Transporter-Mediated Uptake:** Laboratory investigations describe entry through the LAT and PEPT families rather than receptor binding, testable by co-incubation with transporter inhibitors.",
        "**Characterization Gap:** Two of three components have no public compound record or indexed primary literature under their names, making independent identity confirmation a genuine and publishable first step."
      ],
      citations: [
        "Chalisova, N. I., Kontsevaya, N. E., Linkova, N. S., et al. (2013). 'Biological activity of amino acids in organotypic tissue cultures.' Bulletin of Experimental Biology and Medicine, 155(4), 581-585. DOI: 10.1007/s10517-013-2200-7 | PMID: 24143390",
        "Khavinson, V. K., Popovich, I. G., Linkova, N. S., et al. (2021). 'Peptide Regulation of Gene Expression: A Systematic Review.' Molecules, 26(22), 7053. DOI: 10.3390/molecules26227053 | PMID: 34834147",
        "Khavinson, V. K., Linkova, N. S., Rudskoy, A. I., & Petukhov, M. G. (2023). 'Feasibility of Transport of 26 Biologically Active Ultrashort Peptides via LAT and PEPT Family Transporters.' Biomolecules, 13(3), 552. DOI: 10.3390/biom13030552 | PMID: 36979488"
      ],
      formula: "Three components. Prostamax C20H33N5O9 (PubChem CID 9848296). Testagen and Vesilute — no public compound records under these names; verify with manufacturer COA",
      molarMass: "Prostamax 487.5 g/mol, the heaviest peptide in the bioregulator family. Testagen and Vesilute — not independently confirmable; verify with manufacturer COA",
      sequence: "Three ultrashort peptides, 20 mg per vial: Prostamax (Lys-Glu-Asp-Pro, verified tetrapeptide), Testagen (reported as Lys-Glu-Asp-Gly — not independently confirmable) and Vesilute (sequence not independently confirmable) — verify both with manufacturer COA",
      retentionTime: 2.3
    },
    es: {
      abstract: "Bioregulator Urogenital agrupa los tres péptidos ultracortos de Khavinson asociados en la literatura con tejido urogenital: Prostamax con próstata, Testagen con testículo y Vesilute con vejiga. Prostamax es el tetrapéptido Lys-Glu-Asp-Pro, que resuelve a un registro público con unos 488 Da, el miembro mayor de la familia bioreguladora. Testagen y Vesilute no tienen registros públicos bajo esos nombres. Los tres actúan por el mecanismo de familia que Khavinson y colaboradores revisaron en 2021, en el que los péptidos ultracortos regulan la expresión génica en lugar de unirse a receptores de superficie, entrando a las células por las familias LAT y PEPT según demostró el acoplamiento molecular de 2023. Chalisova y colaboradores establecieron el cultivo tisular organotípico como formato de modelo de trabajo. Uso Exclusivo de Investigación (RUO).",
      mechanism: "Los tres péptidos actúan por regulación génica y no por agonismo de receptor, y Prostamax vuelve concreto el argumento del tamaño. Con unos 488 Da es el miembro más pesado de la familia bioreguladora y sigue teniendo cuatro residuos, un orden de magnitud por debajo de lo que un receptor acoplado a proteínas G de clase B necesita para unir un ligando. La investigación describe el paso de la familia por la membrana mediante transportadores de aminoácidos y de péptidos, con Khavinson y colaboradores demostrando por acoplamiento molecular que los sitios de LAT1, LAT2 y PEPT1 admiten 26 de estos péptidos, seguido de interacción con ADN y cromatina que altera la transcripción. Los tres son coherentes por asociación tisular reportada más que por diana compartida, y el cultivo organotípico es el formato que hace comprobables las distinciones a nivel tisular.",
      benefits: [
        "**Cultivo tisular organotípico:** Chalisova y colaboradores (2013) trabajaron en cultivo organotípico, el formato que da sentido a las comparaciones tisulares porque las asociaciones reportadas son propiedades del tejido y no del receptor.",
        "**Comparación tisular a tres bandas:** La investigación muestra que los componentes se sitúan junto a tejido prostático, testicular y vesical respectivamente, de modo que correrlos por separado comprueba si esa división produce diferencias medibles.",
        "**Miembro mayor de la familia:** Los estudios indican que Prostamax, con unos 488 Da, es el bioregulador más pesado, útil como límite superior de tamaño al probar los límites de la captación mediada por transportadores.",
        "**Captación mediada por transportadores:** Las investigaciones describen entrada por las familias LAT y PEPT en lugar de unión a receptor, comprobable por coincubación con inhibidores.",
        "**Vacío de caracterización:** Dos de los tres componentes no tienen registro público de compuesto ni literatura primaria indexada bajo sus nombres, lo que hace de la confirmación independiente de identidad un primer paso genuino y publicable."
      ],
      citations: [
        "Chalisova, N. I., Kontsevaya, N. E., Linkova, N. S., et al. (2013). 'Biological activity of amino acids in organotypic tissue cultures.' Bulletin of Experimental Biology and Medicine, 155(4), 581-585. DOI: 10.1007/s10517-013-2200-7 | PMID: 24143390",
        "Khavinson, V. K., Popovich, I. G., Linkova, N. S., et al. (2021). 'Peptide Regulation of Gene Expression: A Systematic Review.' Molecules, 26(22), 7053. DOI: 10.3390/molecules26227053 | PMID: 34834147",
        "Khavinson, V. K., Linkova, N. S., Rudskoy, A. I., & Petukhov, M. G. (2023). 'Feasibility of Transport of 26 Biologically Active Ultrashort Peptides via LAT and PEPT Family Transporters.' Biomolecules, 13(3), 552. DOI: 10.3390/biom13030552 | PMID: 36979488"
      ],
      formula: "Three components. Prostamax C20H33N5O9 (PubChem CID 9848296). Testagen and Vesilute — no public compound records under these names; verify with manufacturer COA",
      molarMass: "Prostamax 487.5 g/mol, the heaviest peptide in the bioregulator family. Testagen and Vesilute — not independently confirmable; verify with manufacturer COA",
      sequence: "Tres péptidos ultracortos, 20 mg por vial: Prostamax (Lys-Glu-Asp-Pro, tetrapéptido verificado), Testagen (reportado como Lys-Glu-Asp-Gly — no confirmable de forma independiente) y Vesilute (secuencia no confirmable de forma independiente) — verifique ambos con el COA del fabricante",
      retentionTime: 2.3
    }
  },
  "advanced-nootropic": {
    en: {
      abstract: "Advanced Nootropic is a four-vial research kit supplying Semax Acetyl (30 mg), Selank Acetyl (10 mg), Dihexa (5 mg) and P-21 (5 mg) as separately labelled lyophilized units. The panel deliberately spans four unrelated chemical origins — an ACTH fragment analog, a tuftsin analog, an angiotensin IV derivative and an uncharacterized synthetic entity — rather than variations on one scaffold, giving investigators four independent chemistries to profile against a shared assay. Both Russian-origin components are supplied in their acetylated forms. Supplied for Research Use Only.",
      mechanism: "Semax and Selank share one structural trick and nothing else: both carry a C-terminal Pro-Gly-Pro tripeptide grafted onto an unrelated parent sequence, which slows exopeptidase trimming. Semax's parent is ACTH(4-10) and recent work implicates the Oprm1 gene product in its activity; Selank's parent is tuftsin, a tetrapeptide from the immunoglobulin heavy chain, and its literature centres on GABAergic and cytokine endpoints. Dihexa arrives from an entirely different direction as a hydrophobic angiotensin IV derivative studied for hepatocyte growth factor pathway potentiation. P-21 has no published mechanism.",
      benefits: [
        "Four unrelated chemical lineages in one tray — ACTH fragment, tuftsin analog, angiotensin IV derivative and an uncharacterized synthetic — supporting cross-scaffold comparison within a single assay run",
        "Acetylated presentations of both Semax and Selank, verified by LC-MS, so the panel is not silently substituted with the unmodified parent peptides",
        "Weighted fills (30 mg Semax against 5 mg Dihexa) matched to the depth of each component’s published dose-ranging literature rather than split evenly for appearance",
        "Dihexa supplied and documented as a small molecule with a small-molecule release assay, not force-fitted into a peptide purity workflow",
        "Explicit disclosure of the 2025 Dihexa retractions and of P-21’s absent literature, so study design starts from the actual evidence base"
      ],
      citations: [
        "Liu, R., Chen, Y., Huang, H., et al. (2025). 'Semax peptide targets the mu opioid receptor gene Oprm1 to promote deubiquitination and functional recovery after spinal cord injury in female mice.' British Journal of Pharmacology, 182(22), 5489-5516. DOI: 10.1111/bph.70122 | PMID: 40692165",
        "Konstantinopolsky, M. A., Chernyakova, I. V., & Kolik, L. G. (2022). 'Selank, a Peptide Analog of Tuftsin, Attenuates Aversive Signs of Morphine Withdrawal in Rats.' Bulletin of Experimental Biology and Medicine, 173(6), 730-733. DOI: 10.1007/s10517-022-05624-x | PMID: 36322304",
        "McCoy, A. T., Benoist, C. C., Wright, J. W., et al. (2013). 'Evaluation of metabolically stabilized angiotensin IV analogs as procognitive/antidementia agents.' Journal of Pharmacology and Experimental Therapeutics, 344(1), 141-154. DOI: 10.1124/jpet.112.199497 | PMID: 23055539"
      ],
      formula: "Blend — no single formula applies; Semax Acetyl C39H54N10O10S, Selank Acetyl C35H59N11O10, Dihexa C27H44N4O5, P-21 not indexed in PubChem",
      molarMass: "Semax Acetyl 855.0 g/mol; Selank Acetyl 793.9 g/mol; Dihexa 504.7 g/mol; P-21 verify with manufacturer COA",
      sequence: "Semax Ac-Met-Glu-His-Phe-Pro-Gly-Pro; Selank Ac-Thr-Lys-Pro-Arg-Pro-Gly-Pro; Dihexa is a small molecule, not a peptide chain",
      retentionTime: 8.4
    },
    es: {
      abstract: "Advanced Nootropic es un kit de investigación de cuatro viales que suministra Semax Acetyl (30 mg), Selank Acetyl (10 mg), Dihexa (5 mg) y P-21 (5 mg) como unidades liofilizadas etiquetadas por separado. El panel abarca deliberadamente cuatro orígenes químicos no relacionados — un análogo de fragmento de ACTH, un análogo de tuftsina, un derivado de angiotensina IV y una entidad sintética no caracterizada — en lugar de variaciones sobre un mismo esqueleto, ofreciendo cuatro químicas independientes para perfilar frente a un ensayo común. Ambos componentes de origen ruso se suministran en forma acetilada. Uso Exclusivo de Investigación.",
      mechanism: "Semax y Selank comparten un solo recurso estructural y nada más: ambos llevan un trippéptido C-terminal Pro-Gly-Pro injertado en una secuencia parental no relacionada, lo que ralentiza el recorte por exopeptidasas. El parental de Semax es ACTH(4-10) y trabajos recientes implican al producto del gen Oprm1 en su actividad; el parental de Selank es la tuftsina, un tetrapéptido de la cadena pesada de inmunoglobulina, y su literatura se centra en variables GABAérgicas y de citoquinas. Dihexa llega desde una dirección completamente distinta como derivado hidrofóbico de angiotensina IV estudiado por la potenciación de la vía del factor de crecimiento de hepatocitos. P-21 no tiene mecanismo publicado.",
      benefits: [
        "Cuatro linajes químicos no relacionados en una sola bandeja — fragmento de ACTH, análogo de tuftsina, derivado de angiotensina IV y un sintético no caracterizado — que permiten comparación entre esqueletos en una misma corrida de ensayo",
        "Presentaciones aceti-ladas de Semax y Selank verificadas por LC-MS, de modo que el panel no se sustituye silenciosamente por los péptidos parentales sin modificar",
        "Llenados ponderados (30 mg de Semax frente a 5 mg de Dihexa) ajustados a la profundidad de la literatura de rango de dosis de cada componente y no divididos por igual por apariencia",
        "Dihexa suministrado y documentado como molécula pequeña con un ensayo de liberación propio, sin forzarlo a un flujo de pureza peptídica",
        "Divulgación explícita de las retractaciones de Dihexa en 2025 y de la ausencia de literatura sobre P-21, para que el diseño del estudio parta de la base de evidencia real"
      ],
      citations: [
        "Liu, R., Chen, Y., Huang, H., et al. (2025). 'Semax peptide targets the mu opioid receptor gene Oprm1 to promote deubiquitination and functional recovery after spinal cord injury in female mice.' British Journal of Pharmacology, 182(22), 5489-5516. DOI: 10.1111/bph.70122 | PMID: 40692165",
        "Konstantinopolsky, M. A., Chernyakova, I. V., & Kolik, L. G. (2022). 'Selank, a Peptide Analog of Tuftsin, Attenuates Aversive Signs of Morphine Withdrawal in Rats.' Bulletin of Experimental Biology and Medicine, 173(6), 730-733. DOI: 10.1007/s10517-022-05624-x | PMID: 36322304",
        "McCoy, A. T., Benoist, C. C., Wright, J. W., et al. (2013). 'Evaluation of metabolically stabilized angiotensin IV analogs as procognitive/antidementia agents.' Journal of Pharmacology and Experimental Therapeutics, 344(1), 141-154. DOI: 10.1124/jpet.112.199497 | PMID: 23055539"
      ],
      formula: "Blend — no single formula applies; Semax Acetyl C39H54N10O10S, Selank Acetyl C35H59N11O10, Dihexa C27H44N4O5, P-21 not indexed in PubChem",
      molarMass: "Semax Acetyl 855.0 g/mol; Selank Acetyl 793.9 g/mol; Dihexa 504.7 g/mol; P-21 verify with manufacturer COA",
      sequence: "Semax Ac-Met-Glu-His-Phe-Pro-Gly-Pro; Selank Ac-Thr-Lys-Pro-Arg-Pro-Gly-Pro; Dihexa es una molécula pequeña, no una cadena peptídica",
      retentionTime: 8.4
    }
  },
  "advanced-repair-immune": {
    en: {
      abstract: "Advanced Repair & Immune supplies BPC-157 (10 mg), TB-500 (10 mg), KPV (10 mg) and LL-37 (5 mg) as four separately labelled lyophilized vials. The panel pairs two structural repair compounds with two innate immune signaling compounds, spanning a chain-length range from a three-residue tripeptide to a 37-residue cathelicidin — a thirteen-fold molecular weight spread that makes milligram-for-milligram comparison across the tray invalid. Strengths are set at 10 mg for three components rather than the 5 mg typical of entry panels. Supplied for Research Use Only.",
      mechanism: "TB-500 corresponds to the actin-binding domain of thymosin beta-4 and its studied action is sequestration of monomeric actin, an interaction defined at the structural level. BPC-157 is a synthetic sequence derived from a gastric juice protein with no identified receptor; its literature is organised around nitric oxide and angiogenic readouts. KPV is the terminal tripeptide of alpha-melanocyte stimulating hormone and is investigated as an NF-kappa-B modulator, including in orally delivered nanoparticle formats. LL-37 is the mature cathelicidin peptide released from the human CAMP gene product, amphipathic and membrane-active, with signaling roles alongside its direct antimicrobial behaviour.",
      benefits: [
        "Elevated 10 mg fills on BPC-157, TB-500 and KPV — double the 5 mg entry-panel convention — supporting replicate arms from a single lot",
        "Structural repair and innate immune signaling supplied on one tray, letting a single laboratory run both halves without cross-lot variables",
        "LL-37 supplied as the full 37-residue mature cathelicidin with a complete mass-map release, not a truncated fragment sold under the same name",
        "Deliberate 5 mg LL-37 fill set on molar rather than milligram parity with the tripeptide KPV, documented on the label",
        "Written disclosure that BPC-157 has no identified receptor and that TB-500 is the Ac-LKKTETQ fragment rather than full-length thymosin beta-4"
      ],
      citations: [
        "Sikiric, P., Seiwerth, S., Skrtic, A., et al. (2025). 'BPC 157 Therapy: Targeting Angiogenesis and Nitric Oxide.' Pharmaceuticals, 18(10), 1450. DOI: 10.3390/ph18101450 | PMID: 41155565",
        "Bock-Marquette, I., Saxena, A., White, M. D., et al. (2004). 'Thymosin beta4 activates integrin-linked kinase and promotes cardiac cell migration, survival and cardiac repair.' Nature, 432(7016), 466-472. DOI: 10.1038/nature03000 | PMID: 15565145",
        "Dürr, U. H., Sudheendra, U. S., & Ramamoorthy, A. (2006). 'LL-37, the only human member of the cathelicidin family of antimicrobial peptides.' Biochimica et Biophysica Acta, 1758(9), 1408-1425. DOI: 10.1016/j.bbamem.2006.03.030 | PMID: 16716248"
      ],
      formula: "Blend — no single formula applies; BPC-157 C62H98N16O22, TB-500 (Ac-LKKTETQ) C34H62N10O13, KPV C16H30N4O4, LL-37 C205H340N60O53",
      molarMass: "BPC-157 1419.5 g/mol; TB-500 fragment 819.0 g/mol; KPV 342.4 g/mol; LL-37 4493.3 g/mol — a thirteen-fold spread across the tray",
      sequence: "BPC-157 Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val; TB-500 Ac-Leu-Lys-Lys-Thr-Glu-Thr-Gln; KPV Lys-Pro-Val; LL-37 37-residue cathelicidin",
      retentionTime: 9.2
    },
    es: {
      abstract: "Advanced Repair & Immune suministra BPC-157 (10 mg), TB-500 (10 mg), KPV (10 mg) y LL-37 (5 mg) en cuatro viales liofilizados etiquetados por separado. El panel une dos compuestos de reparación estructural con dos de señalización inmunitaria innata, abarcando longitudes de cadena desde un tripéptido de tres residuos hasta una catelicidina de 37 residuos — una diferencia de peso molecular de trece veces que invalida la comparación miligramo a miligramo dentro de la bandeja. Las concentraciones se fijan en 10 mg para tres componentes en lugar de los 5 mg típicos de paneles de entrada. Uso Exclusivo de Investigación.",
      mechanism: "TB-500 corresponde al dominio de unión a actina de la timosina beta-4 y su acción estudiada es el secuestro de actina monomérica, una interacción definida a nivel estructural. BPC-157 es una secuencia sintética derivada de una proteína del jugo gástrico sin receptor identificado; su literatura se organiza en torno a lecturas de óxido nítrico y angiogénesis. KPV es el tripéptido terminal de la hormona estimulante de melanocitos alfa y se investiga como modulador de NF-kappa-B, incluso en formatos de nanopartículas de administración oral. LL-37 es el péptido catelicidina maduro liberado del producto del gen humano CAMP, anfipático y activo sobre membranas, con funciones de señalización además de su comportamiento antimicrobiano directo.",
      benefits: [
        "Llenados elevados de 10 mg en BPC-157, TB-500 y KPV — el doble de la convención de 5 mg de paneles de entrada — que permiten brazos replicados desde un solo lote",
        "Reparación estructural y señalización inmunitaria innata en una sola bandeja, permitiendo a un laboratorio ejecutar ambas mitades sin variables entre lotes",
        "LL-37 suministrado como catelicidina madura completa de 37 residuos con liberación por mapa de masas completo, no un fragmento truncado vendido bajo el mismo nombre",
        "Llenado deliberado de 5 mg de LL-37 fijado por paridad molar y no por miligramos frente al tripéptido KPV, documentado en la etiqueta",
        "Declaración escrita de que BPC-157 no tiene receptor identificado y de que TB-500 es el fragmento Ac-LKKTETQ y no timosina beta-4 completa"
      ],
      citations: [
        "Sikiric, P., Seiwerth, S., Skrtic, A., et al. (2025). 'BPC 157 Therapy: Targeting Angiogenesis and Nitric Oxide.' Pharmaceuticals, 18(10), 1450. DOI: 10.3390/ph18101450 | PMID: 41155565",
        "Bock-Marquette, I., Saxena, A., White, M. D., et al. (2004). 'Thymosin beta4 activates integrin-linked kinase and promotes cardiac cell migration, survival and cardiac repair.' Nature, 432(7016), 466-472. DOI: 10.1038/nature03000 | PMID: 15565145",
        "Dürr, U. H., Sudheendra, U. S., & Ramamoorthy, A. (2006). 'LL-37, the only human member of the cathelicidin family of antimicrobial peptides.' Biochimica et Biophysica Acta, 1758(9), 1408-1425. DOI: 10.1016/j.bbamem.2006.03.030 | PMID: 16716248"
      ],
      formula: "Blend — no single formula applies; BPC-157 C62H98N16O22, TB-500 (Ac-LKKTETQ) C34H62N10O13, KPV C16H30N4O4, LL-37 C205H340N60O53",
      molarMass: "BPC-157 1419.5 g/mol; TB-500 fragment 819.0 g/mol; KPV 342.4 g/mol; LL-37 4493.3 g/mol — a thirteen-fold spread across the tray",
      sequence: "BPC-157 Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val; TB-500 Ac-Leu-Lys-Lys-Thr-Glu-Thr-Gln; KPV Lys-Pro-Val; LL-37 catelicidina de 37 residuos",
      retentionTime: 9.2
    }
  },
  "body-composition-kit": {
    en: {
      abstract: "Body Composition Kit supplies Tesamorelin (10 mg), Ipamorelin (5 mg) and AOD9604 (5 mg) as three separately labelled lyophilized vials. Two components act at the pituitary through unrelated receptor superfamilies — a class B GHRH receptor and a class A ghrelin receptor — while the third acts at adipose tissue independent of both, giving three mechanistically distinct arms plus combinations from a single tray. Molecular weights span roughly sevenfold across the three vials. Supplied for Research Use Only.",
      mechanism: "Tesamorelin is a growth hormone releasing factor analog stabilised at the amino terminus by a trans-3-hexenoyl group, engaging the class B GHRH receptor and its associated adenylyl cyclase signaling. Ipamorelin is a selective pentapeptide agonist at the ghrelin receptor GHS-R1a, a class A receptor coupling through a phospholipase C route; its selectivity is the reason it is studied where earlier secretagogues produced off-target endocrine effects. AOD9604 corresponds to the carboxy-terminal lipolytic domain of growth hormone with a tyrosine substituted at the first position, and published work reports lipolytic activity persisting in beta-3 adrenergic receptor knockout animals.",
      benefits: [
        "Two receptor superfamilies plus one receptor-independent adipose mechanism in a single tray, yielding three distinct arms and a combination arm without cross-supplier sourcing",
        "Tesamorelin at a 10 mg fill — double the other two components — reflecting that it is the one component with an approved-product comparator literature at defined concentrations",
        "AOD9604 released on LC-MS with the observed mass printed, so the 16 dalton separation from the unmodified 176-191 fragment is documented rather than assumed",
        "Tesamorelin released by peptide mapping rather than intact mass, appropriate to a 44-residue chain with an acylated amino terminus",
        "Sevenfold molecular weight span disclosed on the tray so molar calculations are not carried across vials by mistake"
      ],
      citations: [
        "Ferdinandi, E. S., Brazeau, P., High, K., et al. (2007). 'Non-clinical pharmacology and safety evaluation of TH9507, a human growth hormone-releasing factor analogue.' Basic & Clinical Pharmacology & Toxicology, 100(1), 49-58. DOI: 10.1111/j.1742-7843.2007.00008.x | PMID: 17214611",
        "Raun, K., Hansen, B. S., Johansen, N. L., et al. (1998). 'Ipamorelin, the first selective growth hormone secretagogue.' European Journal of Endocrinology, 139(5), 552-561. DOI: 10.1530/eje.0.1390552 | PMID: 9849822",
        "Heffernan, M., Summers, R. J., Thorburn, A., et al. (2001). 'The effects of human GH and its lipolytic fragment (AOD9604) on lipid metabolism following chronic treatment in obese mice and beta-3 AR knock-out mice.' Endocrinology, 142(12), 5182-5189. DOI: 10.1210/endo.142.12.8522 | PMID: 11713213"
      ],
      formula: "Blend — no single formula applies; Tesamorelin C221H366N72O67S, Ipamorelin C38H49N9O5, AOD9604 C78H123N23O23S2",
      molarMass: "Tesamorelin 5135.9 g/mol; Ipamorelin 711.9 g/mol; AOD9604 1815.1 g/mol — an approximately sevenfold spread",
      sequence: "Tesamorelin trans-3-hexenoyl-GHRH(1-44) amide; Ipamorelin Aib-His-D-2-Nal-D-Phe-Lys-NH2; AOD9604 Tyr-substituted hGH(176-191)",
      retentionTime: 7.6
    },
    es: {
      abstract: "Body Composition Kit suministra tesamorelina (10 mg), ipamorelina (5 mg) y AOD9604 (5 mg) en tres viales liofilizados etiquetados por separado. Dos componentes actúan en la hipófisis mediante superfamilias de receptores no relacionadas — un receptor de GHRH de clase B y un receptor de grelina de clase A — mientras que el tercero actúa en tejido adiposo independientemente de ambos, ofreciendo tres brazos mecanísticamente distintos más combinaciones desde una sola bandeja. Los pesos moleculares abarcan aproximadamente siete veces entre los tres viales. Uso Exclusivo de Investigación.",
      mechanism: "La tesamorelina es un análogo del factor liberador de hormona del crecimiento estabilizado en el extremo amino por un grupo trans-3-hexenoilo, que activa el receptor de GHRH de clase B y su señalización asociada por adenilato ciclasa. La ipamorelina es un agonista pentapeptídico selectivo del receptor de grelina GHS-R1a, un receptor de clase A acoplado por la vía de la fosfolipasa C; su selectividad es la razón por la que se estudia donde secretagogos anteriores producían efectos endocrinos fuera de diana. AOD9604 corresponde al dominio lipolítico carboxi-terminal de la hormona del crecimiento con una tirosina sustituida en la primera posición, y el trabajo publicado reporta actividad lipolítica que persiste en animales con supresión del receptor adrenérgico beta-3.",
      benefits: [
        "Dos superfamilias de receptores más un mecanismo adiposo independiente de receptor en una sola bandeja, generando tres brazos distintos y un brazo de combinación sin abastecerse en varios proveedores",
        "Tesamorelina con llenado de 10 mg — el doble de los otros dos componentes — reflejando que es el único con literatura comparadora de producto aprobado a concentraciones definidas",
        "AOD9604 liberado por LC-MS con la masa observada impresa, de modo que la separación de 16 daltons frente al fragmento 176-191 sin modificar queda documentada y no supuesta",
        "Tesamorelina liberada por mapeo peptídico y no por masa intacta, lo apropiado para una cadena de 44 residuos con extremo amino acilado",
        "Rango de peso molecular de siete veces declarado en la bandeja para que los cálculos molares no se trasladen entre viales por error"
      ],
      citations: [
        "Ferdinandi, E. S., Brazeau, P., High, K., et al. (2007). 'Non-clinical pharmacology and safety evaluation of TH9507, a human growth hormone-releasing factor analogue.' Basic & Clinical Pharmacology & Toxicology, 100(1), 49-58. DOI: 10.1111/j.1742-7843.2007.00008.x | PMID: 17214611",
        "Raun, K., Hansen, B. S., Johansen, N. L., et al. (1998). 'Ipamorelin, the first selective growth hormone secretagogue.' European Journal of Endocrinology, 139(5), 552-561. DOI: 10.1530/eje.0.1390552 | PMID: 9849822",
        "Heffernan, M., Summers, R. J., Thorburn, A., et al. (2001). 'The effects of human GH and its lipolytic fragment (AOD9604) on lipid metabolism following chronic treatment in obese mice and beta-3 AR knock-out mice.' Endocrinology, 142(12), 5182-5189. DOI: 10.1210/endo.142.12.8522 | PMID: 11713213"
      ],
      formula: "Blend — no single formula applies; Tesamorelin C221H366N72O67S, Ipamorelin C38H49N9O5, AOD9604 C78H123N23O23S2",
      molarMass: "Tesamorelin 5135.9 g/mol; Ipamorelin 711.9 g/mol; AOD9604 1815.1 g/mol — an approximately sevenfold spread",
      sequence: "Tesamorelina trans-3-hexenoil-GHRH(1-44) amida; Ipamorelina Aib-His-D-2-Nal-D-Phe-Lys-NH2; AOD9604 hGH(176-191) con sustitución de tirosina",
      retentionTime: 7.6
    }
  },
  "classic-secretagogue": {
    en: {
      abstract: "Classic Secretagogue supplies Sermorelin (5 mg) and GHRP-2 (5 mg) as two separately labelled lyophilized vials — the first-generation GHRH plus ghrelin receptor pairing that preceded the CJC-1295 and Ipamorelin combination. Neither component carries the half-life extending modifications of the later generation, which is precisely why the pairing functions as a reference arm for generational comparison studies. Sermorelin is an unmodified natural GHRH(1-29) sequence; GHRP-2 is a synthetic hexapeptide built on D-amino acids. Supplied for Research Use Only.",
      mechanism: "Sermorelin reproduces the first 29 residues of human growth hormone releasing hormone with a C-terminal amide, the minimum fragment retaining full potency at the class B GHRH receptor. Because the sequence is unmodified, it is cleared rapidly — the limitation that drove the design of acylated and albumin-binding successors. GHRP-2 acts at GHS-R1a, the receptor Howard and colleagues identified in 1996 as the pituitary and hypothalamic site through which growth hormone releasing peptides operate. The two receptors couple through different G proteins and converge on the same somatotroph, which is the pharmacological basis for studying them together.",
      benefits: [
        "The reference generation for secretagogue comparison work — the exact pair against which CJC-1295 and Ipamorelin were subsequently developed",
        "Sermorelin supplied as the unmodified natural GHRH(1-29) sequence, giving a true baseline for studies quantifying what half-life extending modifications actually change",
        "Net peptide content reported alongside gross fill, so variable acetate counter-ion mass does not silently distort molar calculations",
        "GHRP-2 released with a chiral purity check appropriate to a hexapeptide whose D-amino acid and 2-naphthylalanine residues define its identity",
        "Sermorelin’s unusually complete public pharmacology record, from its period as an approved product, available as external comparator data"
      ],
      citations: [
        "Prakash, A., & Goa, K. L. (1999). 'Sermorelin: a review of its use in the diagnosis and treatment of children with idiopathic growth hormone deficiency.' BioDrugs, 12(2), 139-157. DOI: 10.2165/00063030-199912020-00007 | PMID: 18031173",
        "Bowers, C. Y., Sartor, A. O., Reynolds, G. A., et al. (1991). 'On the actions of the growth hormone-releasing hexapeptide, GHRP.' Endocrinology, 128(4), 2027-2035. DOI: 10.1210/endo-128-4-2027 | PMID: 2004615",
        "Halmos, G., Szabo, Z., Juhasz, E., et al. (2023). 'Signaling mechanism of growth hormone-releasing hormone receptor.' Vitamins and Hormones, 123, 1-26. DOI: 10.1016/bs.vh.2023.06.004 | PMID: 37717982"
      ],
      formula: "Blend — no single formula applies; Sermorelin C149H246N44O42S, GHRP-2 C45H55N9O6",
      molarMass: "Sermorelin 3357.9 g/mol; GHRP-2 817.9 g/mol — an approximately fourfold difference at matched 5 mg fills",
      sequence: "Sermorelin GHRH(1-29) amide, Tyr-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Gly-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Met-Ser-Arg-NH2; GHRP-2 D-Ala-D-2-Nal-Ala-Trp-D-Phe-Lys-NH2",
      retentionTime: 6.8
    },
    es: {
      abstract: "Classic Secretagogue suministra sermorelina (5 mg) y GHRP-2 (5 mg) en dos viales liofilizados etiquetados por separado — el par de primera generación de GHRH más receptor de grelina que precedió a la combinación de CJC-1295 e ipamorelina. Ninguno de los componentes lleva las modificaciones de extensión de vida media de la generación posterior, y precisamente por eso el par funciona como brazo de referencia en estudios de comparación generacional. La sermorelina es una secuencia natural GHRH(1-29) sin modificar; GHRP-2 es un hexapéptido sintético construido sobre aminoácidos D. Uso Exclusivo de Investigación.",
      mechanism: "La sermorelina reproduce los primeros 29 residuos de la hormona liberadora de hormona del crecimiento humana con una amida C-terminal, el fragmento mínimo que conserva potencia completa en el receptor de GHRH de clase B. Al ser una secuencia sin modificar, se elimina rápidamente — la limitación que impulsó el diseño de sucesores acilados y de unión a albúmina. GHRP-2 actúa en GHS-R1a, el receptor que Howard y colaboradores identificaron en 1996 como el sitio hipofisario e hipotalámico por el cual operan los péptidos liberadores de hormona del crecimiento. Ambos receptores se acoplan mediante proteínas G distintas y convergen en el mismo somatotropo, base farmacológica para estudiarlos juntos.",
      benefits: [
        "La generación de referencia para trabajos de comparación de secretagogos — el par exacto frente al cual se desarrollaron después CJC-1295 e ipamorelina",
        "Sermorelina suministrada como secuencia natural GHRH(1-29) sin modificar, dando una línea base real para estudios que cuantifican qué cambian realmente las modificaciones de vida media",
        "Contenido neto de péptido reportado junto al llenado bruto, para que la masa variable del contraión acetato no distorsione en silencio los cálculos molares",
        "GHRP-2 liberado con verificación de pureza quiral apropiada para un hexapéptido cuyos residuos de aminoácido D y 2-naftilalanina definen su identidad",
        "El registro farmacológico público inusualmente completo de la sermorelina, de su etapa como producto aprobado, disponible como dato comparador externo"
      ],
      citations: [
        "Prakash, A., & Goa, K. L. (1999). 'Sermorelin: a review of its use in the diagnosis and treatment of children with idiopathic growth hormone deficiency.' BioDrugs, 12(2), 139-157. DOI: 10.2165/00063030-199912020-00007 | PMID: 18031173",
        "Bowers, C. Y., Sartor, A. O., Reynolds, G. A., et al. (1991). 'On the actions of the growth hormone-releasing hexapeptide, GHRP.' Endocrinology, 128(4), 2027-2035. DOI: 10.1210/endo-128-4-2027 | PMID: 2004615",
        "Halmos, G., Szabo, Z., Juhasz, E., et al. (2023). 'Signaling mechanism of growth hormone-releasing hormone receptor.' Vitamins and Hormones, 123, 1-26. DOI: 10.1016/bs.vh.2023.06.004 | PMID: 37717982"
      ],
      formula: "Blend — no single formula applies; Sermorelin C149H246N44O42S, GHRP-2 C45H55N9O6",
      molarMass: "Sermorelin 3357.9 g/mol; GHRP-2 817.9 g/mol — an approximately fourfold difference at matched 5 mg fills",
      sequence: "Sermorelina GHRH(1-29) amida, Tyr-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Gly-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Met-Ser-Arg-NH2; GHRP-2 D-Ala-D-2-Nal-Ala-Trp-D-Phe-Lys-NH2",
      retentionTime: 6.8
    }
  },
  "extended-gh-igf": {
    en: {
      abstract: "Extended GH / IGF supplies CJC-1295 with DAC (5 mg), Ipamorelin (5 mg) and IGF-1 LR3 (1 mg) as three separately labelled lyophilized vials spanning hormone release through to downstream receptor tyrosine kinase signaling. It is the only panel in this range combining solid-phase synthetic peptides with a recombinant expressed protein, which is why the three vials carry two different release protocols. The IGF-1 LR3 fill is set at 1 mg to match assay consumption rather than matched to the peptides by milligram. Supplied for Research Use Only.",
      mechanism: "CJC-1295 with DAC is a GHRH(1-29) analog bearing four amino acid substitutions that resist enzymatic degradation plus an albumin-binding group that forms a covalent conjugate in circulation; work by Jetté and colleagues established that such albumin bioconjugates still activate the pituitary GHRH receptor. Ipamorelin acts selectively at GHS-R1a. IGF-1 LR3 operates one level down, binding the IGF-1 receptor directly; its reduced affinity for IGF binding proteins, engineered through an amino-terminal extension and a position-three substitution, is the property Tomas and colleagues characterised as producing more prolonged action than native IGF-1.",
      benefits: [
        "The only panel in this range spanning solid-phase synthetic peptides and a recombinant expressed protein, with two distinct release protocols documented per manufacturing route",
        "IGF-1 LR3 released on SDS-PAGE and disulfide folding confirmation rather than a peptide purity assay that would confirm the wrong properties for a folded protein",
        "Upstream secretagogue pair plus a downstream effector that bypasses the pituitary, enabling an experiment to localise where along the axis an observation originates",
        "CJC-1295 supplied unambiguously as the with-DAC form under CAS 446262-90-4, correcting the widely circulated registry number that actually maps to the no-DAC molecule",
        "Written statement that no independently confirmable molecular formula exists for IGF-1 LR3, with observed mass reported instead of a calculated figure"
      ],
      citations: [
        "Jetté, L., Léger, R., Thibaudeau, K., et al. (2005). 'Human growth hormone-releasing factor (hGRF)1-29-albumin bioconjugates activate the GRF receptor on the anterior pituitary in rats.' Endocrinology, 146(7), 3052-3058. DOI: 10.1210/en.2004-1286 | PMID: 15817669",
        "Raun, K., Hansen, B. S., Johansen, N. L., et al. (1998). 'Ipamorelin, the first selective growth hormone secretagogue.' European Journal of Endocrinology, 139(5), 552-561. DOI: 10.1530/eje.0.1390552 | PMID: 9849822",
        "Tomas, F. M., Walton, P. E., Dunshea, F. R., et al. (1997). 'IGF-I variants which bind poorly to IGF-binding proteins show more potent and prolonged hypoglycaemic action than native IGF-I in pigs and marmoset monkeys.' Journal of Endocrinology, 155(2), 377-386. DOI: 10.1677/joe.0.1550377 | PMID: 9415072"
      ],
      formula: "Blend — no single formula applies; CJC-1295 with DAC C165H269N47O46, Ipamorelin C38H49N9O5, IGF-1 LR3 not indexed in PubChem — verify with manufacturer COA",
      molarMass: "CJC-1295 with DAC 3647.2 g/mol; Ipamorelin 711.9 g/mol; IGF-1 LR3 approximately 9100 g/mol as an 83-residue protein — verify with manufacturer COA",
      sequence: "CJC-1295 with DAC, GHRH(1-29) analog with four substitutions plus an albumin-binding group; Ipamorelin Aib-His-D-2-Nal-D-Phe-Lys-NH2; IGF-1 LR3, 83-residue recombinant protein",
      retentionTime: 8.9
    },
    es: {
      abstract: "Extended GH / IGF suministra CJC-1295 con DAC (5 mg), ipamorelina (5 mg) e IGF-1 LR3 (1 mg) en tres viales liofilizados etiquetados por separado que abarcan desde la liberación hormonal hasta la señalización secundaria por tirosina quinasa receptora. Es el único panel de esta gama que combina péptidos sintéticos de fase sólida con una proteína recombinante expresada, y por eso los tres viales llevan dos protocolos de liberación distintos. El llenado de IGF-1 LR3 se fija en 1 mg para ajustarse al consumo del ensayo y no igualado por miligramos a los péptidos. Uso Exclusivo de Investigación.",
      mechanism: "CJC-1295 con DAC es un análogo de GHRH(1-29) con cuatro sustituciones de aminoácidos que resisten la degradación enzimática más un grupo de unión a albúmina que forma un conjugado covalente en circulación; el trabajo de Jetté y colaboradores estableció que tales bioconjugados de albúmina siguen activando el receptor hipofisario de GHRH. La ipamorelina actúa selectivamente en GHS-R1a. IGF-1 LR3 opera un nivel más abajo, uniendo directamente el receptor de IGF-1; su afinidad reducida por las proteínas de unión a IGF, diseñada mediante una extensión amino-terminal y una sustitución en la posición tres, es la propiedad que Tomas y colaboradores caracterizaron como productora de una acción más prolongada que la del IGF-1 nativo.",
      benefits: [
        "El único panel de esta gama que abarca péptidos sintéticos de fase sólida y una proteína recombinante expresada, con dos protocolos de liberación distintos documentados por ruta de fabricación",
        "IGF-1 LR3 liberado por SDS-PAGE y confirmación de plegamiento disulfuro en lugar de un ensayo de pureza peptídica que confirmaría propiedades equivocadas para una proteína plegada",
        "Par secretagogo corriente arriba más un efector corriente abajo que elude la hipófisis, permitiendo a un experimento localizar dónde se origina una observación en el eje",
        "CJC-1295 suministrado inequívocamente como la forma con DAC bajo CAS 446262-90-4, corrigiendo el número de registro ampliamente difundido que corresponde a la molécula sin DAC",
        "Declaración escrita de que no existe fórmula molecular confirmable de forma independiente para IGF-1 LR3, reportando masa observada en lugar de una cifra calculada"
      ],
      citations: [
        "Jetté, L., Léger, R., Thibaudeau, K., et al. (2005). 'Human growth hormone-releasing factor (hGRF)1-29-albumin bioconjugates activate the GRF receptor on the anterior pituitary in rats.' Endocrinology, 146(7), 3052-3058. DOI: 10.1210/en.2004-1286 | PMID: 15817669",
        "Raun, K., Hansen, B. S., Johansen, N. L., et al. (1998). 'Ipamorelin, the first selective growth hormone secretagogue.' European Journal of Endocrinology, 139(5), 552-561. DOI: 10.1530/eje.0.1390552 | PMID: 9849822",
        "Tomas, F. M., Walton, P. E., Dunshea, F. R., et al. (1997). 'IGF-I variants which bind poorly to IGF-binding proteins show more potent and prolonged hypoglycaemic action than native IGF-I in pigs and marmoset monkeys.' Journal of Endocrinology, 155(2), 377-386. DOI: 10.1677/joe.0.1550377 | PMID: 9415072"
      ],
      formula: "Blend — no single formula applies; CJC-1295 with DAC C165H269N47O46, Ipamorelin C38H49N9O5, IGF-1 LR3 not indexed in PubChem — verify with manufacturer COA",
      molarMass: "CJC-1295 with DAC 3647.2 g/mol; Ipamorelin 711.9 g/mol; IGF-1 LR3 approximately 9100 g/mol as an 83-residue protein — verify with manufacturer COA",
      sequence: "CJC-1295 con DAC, análogo de GHRH(1-29) con cuatro sustituciones más un grupo de unión a albúmina; Ipamorelina Aib-His-D-2-Nal-D-Phe-Lys-NH2; IGF-1 LR3, proteína recombinante de 83 residuos",
      retentionTime: 8.9
    }
  },
  "gh-secretagogue": {
    en: {
      abstract: "GH Secretagogue supplies CJC-1295 (5 mg, no-DAC form) and Ipamorelin (5 mg) as two separately labelled lyophilized vials. The pairing engages a class B GHRH receptor and a class A ghrelin receptor — two structurally unrelated receptor families using different second messenger routes — that converge on the same pituitary somatotroph. It occupies the middle position between the unmodified first-generation pairing and the albumin-binding extended panel, isolating the contribution of stabilising substitutions from that of albumin conjugation. Supplied for Research Use Only.",
      mechanism: "CJC-1295 in the no-DAC presentation is GHRH(1-29) carrying four amino acid substitutions chosen to resist dipeptidyl peptidase cleavage and asparagine rearrangement, without the maleimidoproprionic acid group that produces albumin conjugation in the DAC variant. It therefore activates the class B GHRH receptor with the same recognition surface as native GHRH while resisting the degradation routes that limit Sermorelin. Ipamorelin is a selective GHS-R1a pentapeptide agonist; Raun and colleagues characterised its selectivity as the property distinguishing it from earlier growth hormone releasing peptides that produced broader endocrine effects.",
      benefits: [
        "The intermediate generation between the unmodified first-generation pairing and the albumin-binding extended panel, isolating substitution effects from conjugation effects",
        "Two structurally unrelated receptor families with different second messenger routes converging on one target cell, supporting two-input rather than interchangeable-agonist study designs",
        "Observed intact mass printed on every certificate of analysis, resolving the with-DAC versus no-DAC question that a purity chromatogram cannot",
        "Explicit correction of the CAS 863288-34-0 attribution circulating sector-wide, with the no-DAC identity stated on the label",
        "Net peptide content reported alongside gross fill so variable acetate counter-ion mass does not distort molar comparison against the with-DAC panel"
      ],
      citations: [
        "Teichman, S. L., Neale, A., Lawrence, B., et al. (2006). 'Prolonged stimulation of growth hormone (GH) and insulin-like growth factor I secretion by CJC-1295, a long-acting analog of GH-releasing hormone, in healthy adults.' Journal of Clinical Endocrinology and Metabolism, 91(3), 799-805. DOI: 10.1210/jc.2005-1536 | PMID: 16352683",
        "Raun, K., Hansen, B. S., Johansen, N. L., et al. (1998). 'Ipamorelin, the first selective growth hormone secretagogue.' European Journal of Endocrinology, 139(5), 552-561. DOI: 10.1530/eje.0.1390552 | PMID: 9849822",
        "Howard, A. D., Feighner, S. D., Cully, D. F., et al. (1996). 'A receptor in pituitary and hypothalamus that functions in growth hormone release.' Science, 273(5277), 974-977. DOI: 10.1126/science.273.5277.974 | PMID: 8688086"
      ],
      formula: "Blend — no single formula applies; CJC-1295 no-DAC C152H252N44O42, Ipamorelin C38H49N9O5",
      molarMass: "CJC-1295 no-DAC 3367.9 g/mol; Ipamorelin 711.9 g/mol — the with-DAC variant is roughly 279 g/mol heavier at 3647.2",
      sequence: "CJC-1295 no-DAC, GHRH(1-29) with four stabilising substitutions and no albumin-binding group; Ipamorelin Aib-His-D-2-Nal-D-Phe-Lys-NH2",
      retentionTime: 7.9
    },
    es: {
      abstract: "GH Secretagogue suministra CJC-1295 (5 mg, forma sin DAC) e ipamorelina (5 mg) en dos viales liofilizados etiquetados por separado. El par activa un receptor de GHRH de clase B y un receptor de grelina de clase A — dos familias de receptores estructuralmente no relacionadas que usan rutas distintas de segundos mensajeros — que convergen en el mismo somatotropo hipofisario. Ocupa la posición intermedia entre el par de primera generación sin modificar y el panel extendido con unión a albúmina, aislando la contribución de las sustituciones estabilizadoras de la de la conjugación con albúmina. Uso Exclusivo de Investigación.",
      mechanism: "CJC-1295 en presentación sin DAC es GHRH(1-29) con cuatro sustituciones de aminoácidos elegidas para resistir la escisión por dipeptidil peptidasa y el reordenamiento de asparagina, sin el grupo de ácido maleimidopropiónico que produce la conjugación con albúmina en la variante DAC. Por tanto activa el receptor de GHRH de clase B con la misma superficie de reconocimiento que el GHRH nativo mientras resiste las rutas de degradación que limitan a la sermorelina. La ipamorelina es un agonista pentapeptídico selectivo de GHS-R1a; Raun y colaboradores caracterizaron su selectividad como la propiedad que la distingue de péptidos liberadores anteriores que producían efectos endocrinos más amplios.",
      benefits: [
        "La generación intermedia entre el par de primera generación sin modificar y el panel extendido con unión a albúmina, que aísla efectos de sustitución de efectos de conjugación",
        "Dos familias de receptores estructuralmente no relacionadas con rutas distintas de segundos mensajeros que convergen en una célula diana, apoyando diseños de dos entradas y no de agonistas intercambiables",
        "Masa intacta observada impresa en cada certificado de análisis, resolviendo la cuestión con DAC frente a sin DAC que un cromatograma de pureza no puede",
        "Corrección explícita de la atribución del CAS 863288-34-0 que circula en todo el sector, con la identidad sin DAC declarada en la etiqueta",
        "Contenido neto de péptido reportado junto al llenado bruto para que la masa variable del contraión acetato no distorsione la comparación molar frente al panel con DAC"
      ],
      citations: [
        "Teichman, S. L., Neale, A., Lawrence, B., et al. (2006). 'Prolonged stimulation of growth hormone (GH) and insulin-like growth factor I secretion by CJC-1295, a long-acting analog of GH-releasing hormone, in healthy adults.' Journal of Clinical Endocrinology and Metabolism, 91(3), 799-805. DOI: 10.1210/jc.2005-1536 | PMID: 16352683",
        "Raun, K., Hansen, B. S., Johansen, N. L., et al. (1998). 'Ipamorelin, the first selective growth hormone secretagogue.' European Journal of Endocrinology, 139(5), 552-561. DOI: 10.1530/eje.0.1390552 | PMID: 9849822",
        "Howard, A. D., Feighner, S. D., Cully, D. F., et al. (1996). 'A receptor in pituitary and hypothalamus that functions in growth hormone release.' Science, 273(5277), 974-977. DOI: 10.1126/science.273.5277.974 | PMID: 8688086"
      ],
      formula: "Blend — no single formula applies; CJC-1295 no-DAC C152H252N44O42, Ipamorelin C38H49N9O5",
      molarMass: "CJC-1295 no-DAC 3367.9 g/mol; Ipamorelin 711.9 g/mol — the with-DAC variant is roughly 279 g/mol heavier at 3647.2",
      sequence: "CJC-1295 sin DAC, GHRH(1-29) con cuatro sustituciones estabilizadoras y sin grupo de unión a albúmina; Ipamorelina Aib-His-D-2-Nal-D-Phe-Lys-NH2",
      retentionTime: 7.9
    }
  },
  "gut-mucosal-panel": {
    en: {
      abstract: "Gut & Mucosal Panel supplies BPC-157 (5 mg), KPV (10 mg) and Thymosin Alpha-1 (10 mg) as three separately labelled lyophilized vials. The panel is organised around the epithelial barrier rather than a receptor family, combining a signaling pentadecapeptide with no identified receptor, a melanocortin-derived tripeptide with published oral nanoparticle delivery data, and a Toll-like receptor active acetylated thymic peptide. Fills are weighted by molar consumption rather than set to a matched milligram figure. Supplied for Research Use Only.",
      mechanism: "Thymosin Alpha-1 is an acetylated 28-residue peptide from the thymosin fraction 5 preparation, and Romani and colleagues demonstrated its activation of dendritic cells through Toll-like receptor signaling — the most clearly defined mechanism in this tray. KPV is the alpha-MSH(11-13) tripeptide, investigated as an inhibitor of NF-kappa-B activation in intestinal epithelial cells, with delivery work demonstrating retained activity in targeted nanoparticle formats. BPC-157 is a synthetic sequence derived from a gastric juice protein; no receptor has been identified and its published readouts concern nitric oxide signaling and angiogenesis rather than a characterised binding event.",
      benefits: [
        "Three unrelated mechanistic approaches to the epithelial barrier in one tray — Toll-like receptor signaling, NF-kappa-B modulation, and an uncharacterised nitric oxide associated route",
        "KPV supplied at a 10 mg fill suited to oral delivery formulation work, the one component in this range with peer-reviewed nanoparticle delivery data behind it",
        "Thymosin Alpha-1 released with explicit N-terminal acetylation confirmation, since an unacetylated batch is a different molecule that still passes a purity assay",
        "Fills weighted by molar consumption across a three-residue to twenty-eight-residue span rather than set to a uniform milligram figure",
        "Written caution separating Thymosin Alpha-1 from thymalin and thymosin beta-4, three distinct substances routinely conflated across the sector"
      ],
      citations: [
        "Xiao, B., Xu, Z., Viennois, E., et al. (2017). 'Orally Targeted Delivery of Tripeptide KPV via Hyaluronic Acid-Functionalized Nanoparticles Efficiently Alleviates Ulcerative Colitis.' Molecular Therapy, 25(7), 1628-1640. DOI: 10.1016/j.ymthe.2016.11.020 | PMID: 28143741",
        "Romani, L., Bistoni, F., Gaziano, R., et al. (2004). 'Thymosin alpha 1 activates dendritic cells for antifungal Th1 resistance through toll-like receptor signaling.' Blood, 103(11), 4232-4239. DOI: 10.1182/blood-2003-11-4036 | PMID: 14982877",
        "Sikiric, P., Seiwerth, S., Skrtic, A., et al. (2025). 'BPC 157 Therapy: Targeting Angiogenesis and Nitric Oxide.' Pharmaceuticals, 18(10), 1450. DOI: 10.3390/ph18101450 | PMID: 41155565"
      ],
      formula: "Blend — no single formula applies; BPC-157 C62H98N16O22, KPV C16H30N4O4, Thymosin Alpha-1 C129H215N33O55",
      molarMass: "BPC-157 1419.5 g/mol; KPV 342.4 g/mol; Thymosin Alpha-1 3108.3 g/mol — a ninefold spread across the tray",
      sequence: "BPC-157 Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val; KPV Lys-Pro-Val; Thymosin Alpha-1 N-acetylated 28-residue thymic peptide",
      retentionTime: 6.4
    },
    es: {
      abstract: "Gut & Mucosal Panel suministra BPC-157 (5 mg), KPV (10 mg) y timosina alfa-1 (10 mg) en tres viales liofilizados etiquetados por separado. El panel se organiza en torno a la barrera epitelial y no a una familia de receptores, combinando un pentadecapéptido de señalización sin receptor identificado, un tripéptido derivado de melanocortina con datos publicados de administración oral en nanopartículas, y un péptido tímico acetilado activo sobre receptores tipo Toll. Los llenados se ponderan por consumo molar y no se fijan a una cifra igualada en miligramos. Uso Exclusivo de Investigación.",
      mechanism: "La timosina alfa-1 es un péptido acetilado de 28 residuos de la preparación timosina fracción 5, y Romani y colaboradores demostraron su activación de células dendríticas por señalización de receptores tipo Toll — el mecanismo más claramente definido de esta bandeja. KPV es el tripéptido alfa-MSH(11-13), investigado como inhibidor de la activación de NF-kappa-B en células epiteliales intestinales, con trabajos de administración que demuestran actividad conservada en formatos de nanopartículas dirigidas. BPC-157 es una secuencia sintética derivada de una proteína del jugo gástrico; no se ha identificado receptor y sus lecturas publicadas conciernen a señalización de óxido nítrico y angiogénesis, no a un evento de unión caracterizado.",
      benefits: [
        "Tres enfoques mecanísticos no relacionados sobre la barrera epitelial en una bandeja — señalización de receptores tipo Toll, modulación de NF-kappa-B y una ruta no caracterizada asociada a óxido nítrico",
        "KPV suministrado con llenado de 10 mg adecuado para trabajo de formulación oral, el único componente de esta gama con datos revisados por pares de administración en nanopartículas",
        "Timosina alfa-1 liberada con confirmación explícita de acetilación N-terminal, ya que un lote sin acetilar es una molécula distinta que aun así supera un ensayo de pureza",
        "Llenados ponderados por consumo molar en un rango de tres a veintiocho residuos y no fijados a una cifra uniforme en miligramos",
        "Advertencia escrita que separa la timosina alfa-1 de la timalina y de la timosina beta-4, tres sustancias distintas rutinariamente confundidas en el sector"
      ],
      citations: [
        "Xiao, B., Xu, Z., Viennois, E., et al. (2017). 'Orally Targeted Delivery of Tripeptide KPV via Hyaluronic Acid-Functionalized Nanoparticles Efficiently Alleviates Ulcerative Colitis.' Molecular Therapy, 25(7), 1628-1640. DOI: 10.1016/j.ymthe.2016.11.020 | PMID: 28143741",
        "Romani, L., Bistoni, F., Gaziano, R., et al. (2004). 'Thymosin alpha 1 activates dendritic cells for antifungal Th1 resistance through toll-like receptor signaling.' Blood, 103(11), 4232-4239. DOI: 10.1182/blood-2003-11-4036 | PMID: 14982877",
        "Sikiric, P., Seiwerth, S., Skrtic, A., et al. (2025). 'BPC 157 Therapy: Targeting Angiogenesis and Nitric Oxide.' Pharmaceuticals, 18(10), 1450. DOI: 10.3390/ph18101450 | PMID: 41155565"
      ],
      formula: "Blend — no single formula applies; BPC-157 C62H98N16O22, KPV C16H30N4O4, Thymosin Alpha-1 C129H215N33O55",
      molarMass: "BPC-157 1419.5 g/mol; KPV 342.4 g/mol; Thymosin Alpha-1 3108.3 g/mol — a ninefold spread across the tray",
      sequence: "BPC-157 Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val; KPV Lys-Pro-Val; Timosina alfa-1, péptido tímico N-acetilado de 28 residuos",
      retentionTime: 6.4
    }
  },
  "incretin-amylin": {
    en: {
      abstract: "Incretin + Amylin supplies Retatrutide (10 mg) and Cagrilintide (5 mg) as two separately labelled lyophilized vials engaging receptor systems with no structural relationship to each other. Retatrutide is a triple agonist at the GIP, GLP-1 and glucagon receptors; Cagrilintide acts at amylin receptors, which exist only as heterodimers of the calcitonin receptor with a receptor activity-modifying protein. Both are large lipidated analogs above 4400 daltons whose fatty acid side chains govern their handling behaviour. Supplied for Research Use Only.",
      mechanism: "Retatrutide activates three class B G protein-coupled receptors — GIP, GLP-1 and glucagon — from a single peptide backbone, and Coskun and colleagues described its discovery and receptor profile in 2022. Cagrilintide's targets are structurally different in kind: amylin receptors form when the calcitonin receptor associates with one of three receptor activity-modifying proteins, producing distinct phenotypes from the same core receptor. This means the amylin arm of an experiment is sensitive to the accessory protein complement of the model system, a variable that has no counterpart on the incretin side of the panel.",
      benefits: [
        "Two receptor systems with no structural relationship in one tray — a class B triple agonist alongside a heterodimer-dependent amylin agonist",
        "Cagrilintide supplied under the correct registry number 1415456-99-3, correcting the sector-wide 141430-65-1 attribution that resolves to an unrelated 371 dalton benzenesulfonamide",
        "Both components released on observed intact mass and peptide mapping rather than retention time, which lipidated side chains make an unreliable identity signal",
        "Retatrutide filled at double the Cagrilintide quantity to match its higher consumption across dose-ranging arms",
        "Handling guidance specific to surface-active lipidated peptides, where visible foaming indicates interface accumulation rather than dispersion"
      ],
      citations: [
        "Coskun, T., Urva, S., Roell, W. C., et al. (2022). 'LY3437943, a novel triple glucagon, GIP, and GLP-1 receptor agonist for glycemic control and weight loss: From discovery to clinical proof of concept.' Cell Metabolism, 34(9), 1234-1247.e9. DOI: 10.1016/j.cmet.2022.07.013 | PMID: 35985340",
        "Cao, J., Belousoff, M. J., Liang, Y. L., et al. (2022). 'A structural basis for amylin receptor phenotype.' Science, 375(6587), eabm9609. DOI: 10.1126/science.abm9609 | PMID: 35324283",
        "Enebo, L. B., Berthelsen, K. K., Kankam, M., et al. (2021). 'Safety, tolerability, pharmacokinetics, and pharmacodynamics of concomitant administration of multiple doses of cagrilintide with semaglutide 2.4 mg for weight management: a randomised, controlled, phase 1b trial.' The Lancet, 397(10286), 1736-1748. DOI: 10.1016/S0140-6736(21)00845-X | PMID: 33894838"
      ],
      formula: "Blend — no single formula applies; Retatrutide C221H342N46O68 and Cagrilintide C194H312N54O59S2",
      molarMass: "Retatrutide 4731.3 g/mol; Cagrilintide 4409 g/mol — both above 4400, the heaviest two-vial panel in this range",
      sequence: "Retatrutide, a lipidated triple GIP/GLP-1/glucagon receptor agonist backbone; Cagrilintide, a lipidated long-acting amylin analog",
      retentionTime: 11.3
    },
    es: {
      abstract: "Incretin + Amylin suministra retatrutida (10 mg) y cagrilintida (5 mg) en dos viales liofilizados etiquetados por separado que activan sistemas de receptores sin relación estructural entre sí. La retatrutida es un agonista triple de los receptores de GIP, GLP-1 y glucagón; la cagrilintida actúa en receptores de amilina, que existen únicamente como heterodímeros del receptor de calcitonina con una proteína modificadora de la actividad del receptor. Ambos son análogos lipidados grandes por encima de 4400 daltons cuyas cadenas laterales de ácido graso rigen su manipulación. Uso Exclusivo de Investigación.",
      mechanism: "La retatrutida activa tres receptores acoplados a proteína G de clase B — GIP, GLP-1 y glucagón — desde un solo esqueleto peptídico, y Coskun y colaboradores describieron su descubrimiento y perfil de receptores en 2022. Las dianas de la cagrilintida son estructuralmente distintas en naturaleza: los receptores de amilina se forman cuando el receptor de calcitonina se asocia con una de tres proteínas modificadoras de la actividad del receptor, produciendo fenotipos distintos desde el mismo receptor central. Esto implica que el brazo de amilina de un experimento es sensible al complemento de proteínas accesorias del sistema modelo, variable sin contraparte en el lado incretina del panel.",
      benefits: [
        "Dos sistemas de receptores sin relación estructural en una bandeja — un agonista triple de clase B junto a un agonista de amilina dependiente de heterodímeros",
        "Cagrilintida suministrada bajo el número de registro correcto 1415456-99-3, corrigiendo la atribución sectorial 141430-65-1 que resuelve a una bencenosulfonamida no relacionada de 371 daltons",
        "Ambos componentes liberados por masa intacta observada y mapeo peptídico y no por tiempo de retención, señal de identidad poco fiable por las cadenas laterales lipidadas",
        "Retatrutida llenada al doble de la cantidad de cagrilintida para ajustarse a su mayor consumo en brazos de rango de dosis",
        "Guía de manipulación específica para péptidos lipidados tensioactivos, donde la espuma visible indica acumulación en la interfase y no dispersión"
      ],
      citations: [
        "Coskun, T., Urva, S., Roell, W. C., et al. (2022). 'LY3437943, a novel triple glucagon, GIP, and GLP-1 receptor agonist for glycemic control and weight loss: From discovery to clinical proof of concept.' Cell Metabolism, 34(9), 1234-1247.e9. DOI: 10.1016/j.cmet.2022.07.013 | PMID: 35985340",
        "Cao, J., Belousoff, M. J., Liang, Y. L., et al. (2022). 'A structural basis for amylin receptor phenotype.' Science, 375(6587), eabm9609. DOI: 10.1126/science.abm9609 | PMID: 35324283",
        "Enebo, L. B., Berthelsen, K. K., Kankam, M., et al. (2021). 'Safety, tolerability, pharmacokinetics, and pharmacodynamics of concomitant administration of multiple doses of cagrilintide with semaglutide 2.4 mg for weight management: a randomised, controlled, phase 1b trial.' The Lancet, 397(10286), 1736-1748. DOI: 10.1016/S0140-6736(21)00845-X | PMID: 33894838"
      ],
      formula: "Blend — no single formula applies; Retatrutide C221H342N46O68 and Cagrilintide C194H312N54O59S2",
      molarMass: "Retatrutide 4731.3 g/mol; Cagrilintide 4409 g/mol — both above 4400, the heaviest two-vial panel in this range",
      sequence: "Retatrutida, esqueleto lipidado agonista triple de receptores GIP/GLP-1/glucagón; Cagrilintida, análogo de amilina lipidado de acción prolongada",
      retentionTime: 11.3
    }
  },
  "longevity-mitochondrial": {
    en: {
      abstract: "Longevity & Mitochondrial supplies Epithalon (10 mg), NAD+ (100 mg), SS-31 (10 mg) and 5-Amino-1MQ (50 mg) as four separately labelled vials. Only two components are peptides: NAD+ is a redox dinucleotide cofactor and 5-Amino-1MQ is a quaternary ammonium small molecule with a permanent positive charge. The four span telomerase-associated signaling, redox cofactor chemistry, cardiolipin binding and enzyme active site inhibition — four unrelated mechanisms requiring four distinct release protocols. Supplied for Research Use Only.",
      mechanism: "SS-31 has the most physically defined mechanism in this tray: Birk and colleagues showed it associates with cardiolipin in the inner mitochondrial membrane, a lipid rather than protein interaction, which is how it influences the cytochrome c and cardiolipin complex governing electron transport. 5-Amino-1MQ inhibits nicotinamide N-methyltransferase at its active site, an enzyme whose knockdown Kraus and colleagues linked to metabolic phenotypes. NAD+ participates as a substrate rather than a regulator, consumed stoichiometrically by sirtuins and PARP enzymes. Epithalon is a pineal tetrapeptide studied against telomerase upregulation and alternative telomere lengthening endpoints.",
      benefits: [
        "Four genuinely unrelated mechanisms in one tray — telomerase endpoints, redox cofactor chemistry, cardiolipin binding and enzyme active site inhibition",
        "Four distinct release protocols matched to chemistry: peptide LC-MS for two components, UV spectral confirmation at 260 nanometres for the dinucleotide, and counter-ion identity for the quaternary ammonium salt",
        "NAD+ filled at 100 mg because a stoichiometric cofactor is consumed in redox reactions rather than acting catalytically, unlike every peptide in this range",
        "Consolidated documentation for a set that laboratories otherwise assemble across three or four suppliers with incompatible certificate standards",
        "Explicit note that the strongest recent Epithalon telomere paper carries a published Correction, so investigators cite the corrected version"
      ],
      citations: [
        "Al-Dulaimi, S., Thomas, R., & Matta, S. (2025). 'Epitalon increases telomere length in human cell lines through telomerase upregulation or ALT activity.' Biogerontology, 26(5), 178. DOI: 10.1007/s10522-025-10315-x | PMID: 40908429 — see published Correction, Biogerontology 27(1):1, DOI: 10.1007/s10522-025-10326-8 | PMID: 41240216",
        "Birk, A. V., Liu, S., Soong, Y., et al. (2013). 'The mitochondrial-targeted compound SS-31 re-energizes ischemic mitochondria by interacting with cardiolipin.' Journal of the American Society of Nephrology, 24(8), 1250-1261. DOI: 10.1681/ASN.2012121216 | PMID: 23813215",
        "Neelakantan, H., Vance, V., Wetzel, M. D., et al. (2018). 'Selective and membrane-permeable small molecule inhibitors of nicotinamide N-methyltransferase reverse high fat diet-induced obesity in mice.' Biochemical Pharmacology, 147, 141-152. DOI: 10.1016/j.bcp.2017.11.007 | PMID: 29155147"
      ],
      formula: "Blend — no single formula applies; Epithalon C14H22N4O9, NAD+ C21H27N7O14P2, SS-31 C32H49N9O5, 5-Amino-1MQ C11H13N2 as the quaternary cation",
      molarMass: "Epithalon 390.35 g/mol; NAD+ 663.4 g/mol; SS-31 639.8 g/mol; 5-Amino-1MQ 173.2 g/mol as the free cation — verify salt form with manufacturer COA",
      sequence: "Epithalon Ala-Glu-Asp-Gly; SS-31 D-Arg-Dmt-Lys-Phe-NH2; NAD+ is a dinucleotide cofactor and 5-Amino-1MQ a quaternary ammonium small molecule — neither is a peptide",
      retentionTime: 3.7
    },
    es: {
      abstract: "Longevity & Mitochondrial suministra epitalón (10 mg), NAD+ (100 mg), SS-31 (10 mg) y 5-Amino-1MQ (50 mg) en cuatro viales etiquetados por separado. Solo dos componentes son péptidos: NAD+ es un cofactor dinucleótido redox y 5-Amino-1MQ es una molécula pequeña de amonio cuaternario con carga positiva permanente. Los cuatro abarcan señalización asociada a telomerasa, química de cofactores redox, unión a cardiolipina e inhibición de sitio activo enzimático — cuatro mecanismos no relacionados que requieren cuatro protocolos de liberación distintos. Uso Exclusivo de Investigación.",
      mechanism: "SS-31 tiene el mecanismo más físicamente definido de la bandeja: Birk y colaboradores mostraron que se asocia con la cardiolipina en la membrana mitocondrial interna, una interacción lipídica y no proteica, y así influye en el complejo de citocromo c y cardiolipina que gobierna el transporte de electrones. 5-Amino-1MQ inhibe la nicotinamida N-metiltransferasa en su sitio activo, enzima cuya supresión Kraus y colaboradores vincularon a fenotipos metabólicos. NAD+ participa como sustrato y no como regulador, consumido estequiométricamente por sirtuinas y enzimas PARP. El epitalón es un tetrapéptido pineal estudiado frente a variables de sobrerregulación de telomerasa y alargamiento telomérico alternativo.",
      benefits: [
        "Cuatro mecanismos genuinamente no relacionados en una bandeja — variables de telomerasa, química de cofactores redox, unión a cardiolipina e inhibición de sitio activo enzimático",
        "Cuatro protocolos de liberación distintos ajustados a la química: LC-MS peptídico para dos componentes, confirmación espectral UV a 260 nanómetros para el dinucleótido, e identidad de contraión para la sal de amonio cuaternario",
        "NAD+ llenado a 100 mg porque un cofactor estequiométrico se consume en reacciones redox en lugar de actuar catalíticamente, a diferencia de todo péptido de esta gama",
        "Documentación consolidada para un conjunto que los laboratorios ensamblan de otro modo entre tres o cuatro proveedores con estándares de certificado incompatibles",
        "Nota explícita de que el artículo reciente más sólido sobre telómeros y epitalón lleva una Corrección publicada, para que los investigadores citen la versión corregida"
      ],
      citations: [
        "Al-Dulaimi, S., Thomas, R., & Matta, S. (2025). 'Epitalon increases telomere length in human cell lines through telomerase upregulation or ALT activity.' Biogerontology, 26(5), 178. DOI: 10.1007/s10522-025-10315-x | PMID: 40908429 — see published Correction, Biogerontology 27(1):1, DOI: 10.1007/s10522-025-10326-8 | PMID: 41240216",
        "Birk, A. V., Liu, S., Soong, Y., et al. (2013). 'The mitochondrial-targeted compound SS-31 re-energizes ischemic mitochondria by interacting with cardiolipin.' Journal of the American Society of Nephrology, 24(8), 1250-1261. DOI: 10.1681/ASN.2012121216 | PMID: 23813215",
        "Neelakantan, H., Vance, V., Wetzel, M. D., et al. (2018). 'Selective and membrane-permeable small molecule inhibitors of nicotinamide N-methyltransferase reverse high fat diet-induced obesity in mice.' Biochemical Pharmacology, 147, 141-152. DOI: 10.1016/j.bcp.2017.11.007 | PMID: 29155147"
      ],
      formula: "Blend — no single formula applies; Epithalon C14H22N4O9, NAD+ C21H27N7O14P2, SS-31 C32H49N9O5, 5-Amino-1MQ C11H13N2 as the quaternary cation",
      molarMass: "Epithalon 390.35 g/mol; NAD+ 663.4 g/mol; SS-31 639.8 g/mol; 5-Amino-1MQ 173.2 g/mol as the free cation — verify salt form with manufacturer COA",
      sequence: "Epitalón Ala-Glu-Asp-Gly; SS-31 D-Arg-Dmt-Lys-Phe-NH2; NAD+ es un cofactor dinucleótido y 5-Amino-1MQ una molécula pequeña de amonio cuaternario — ninguno es un péptido",
      retentionTime: 3.7
    }
  },
  "melanocortin-reproductive": {
    en: {
      abstract: "Melanocortin & Reproductive supplies Melanotan-II (10 mg), PT-141 (10 mg) and Kisspeptin-10 (10 mg) as three separately labelled lyophilized vials. Two are lactam-bridged cyclic melanocortin agonists separated by approximately one dalton — PT-141 is the deamidated form of Melanotan-II — making this the panel with the most demanding identity verification requirement in the range. The third acts at KISS1R, a receptor upstream of and unrelated to the melanocortin family. Supplied for Research Use Only.",
      mechanism: "Melanotan-II and PT-141 are cyclic analogs of alpha-melanocyte stimulating hormone closed by a lactam bridge, acting across melanocortin receptor subtypes; the difference between them is a carboxy-terminal amide against a free acid, worth roughly one dalton. Melanotan-II is broadly active rather than subtype selective, a limitation the 2024 tool compound guidance from Weirath and Haskell-Luevano addresses directly. Kisspeptin-10 acts at KISS1R, identified by Kotani and colleagues in 2001 as the receptor for the KiSS-1 gene product, and it operates at the hypothalamic level upstream of gonadotropin release.",
      benefits: [
        "High-resolution observed mass printed for both melanocortin vials, the only way to distinguish two compounds separated by approximately one dalton",
        "Two lactam-bridged cyclic peptides alongside one linear decapeptide, giving directly comparable cyclic and linear stability behaviour within a single tray",
        "A hypothalamic KISS1R agonist supplied alongside downstream melanocortin agonists, allowing an observation to be localised by receptor family rather than assumed",
        "Written statement that Melanotan-II is a broad rather than subtype-selective agonist, with reference to the 2024 melanocortin tool compound guidance",
        "Handling protocol advising the two near-isobaric vials are never open simultaneously, since a mislabelled aliquot cannot be recovered by routine assay"
      ],
      citations: [
        "Weirath, N. A., & Haskell-Luevano, C. (2024). 'Recommended Tool Compounds for the Melanocortin Receptor (MCR) G Protein-Coupled Receptors (GPCRs).' ACS Pharmacology & Translational Science, 7(9), 2706-2724. DOI: 10.1021/acsptsci.4c00129 | PMID: 39296259",
        "Cipriani, S., Alfaroli, C., Maseroli, E., et al. (2023). 'An evaluation of bremelanotide injection for the treatment of hypoactive sexual desire disorder.' Expert Opinion on Pharmacotherapy, 24(1), 15-21. DOI: 10.1080/14656566.2022.2132144 | PMID: 36242769",
        "Kotani, M., Detheux, M., Vandenbogaerde, A., et al. (2001). 'The metastasis suppressor gene KiSS-1 encodes kisspeptins, the natural ligands of the orphan G protein-coupled receptor GPR54.' Journal of Biological Chemistry, 276(37), 34631-34636. DOI: 10.1074/jbc.M104847200 | PMID: 11457843"
      ],
      formula: "Blend — no single formula applies; Melanotan-II C50H69N15O9, PT-141 C50H68N14O10, Kisspeptin-10 C63H83N17O14",
      molarMass: "Melanotan-II 1024.2 g/mol; PT-141 1025.2 g/mol — approximately one dalton apart; Kisspeptin-10 1302.4 g/mol",
      sequence: "Melanotan-II Ac-Nle-cyclo(Asp-His-D-Phe-Arg-Trp-Lys)-NH2; PT-141 the same cyclic scaffold with a free acid terminus; Kisspeptin-10 Tyr-Asn-Trp-Asn-Ser-Phe-Gly-Leu-Arg-Phe-NH2",
      retentionTime: 5.8
    },
    es: {
      abstract: "Melanocortin & Reproductive suministra Melanotan-II (10 mg), PT-141 (10 mg) y kisspeptina-10 (10 mg) en tres viales liofilizados etiquetados por separado. Dos son agonistas cíclicos de melanocortina con puente lactámico separados por aproximadamente un dalton — PT-141 es la forma desamidada de Melanotan-II — lo que convierte a este panel en el de verificación de identidad más exigente de la gama. El tercero actúa en KISS1R, un receptor corriente arriba y no relacionado con la familia de melanocortina. Uso Exclusivo de Investigación.",
      mechanism: "Melanotan-II y PT-141 son análogos cíclicos de la hormona estimulante de melanocitos alfa cerrados por un puente lactámico, activos en varios subtipos de receptores de melanocortina; la diferencia entre ambos es una amida carboxi-terminal frente a un ácido libre, equivalente a aproximadamente un dalton. Melanotan-II es ampliamente activo y no selectivo por subtipo, limitación que la guía de compuestos herramienta de 2024 de Weirath y Haskell-Luevano aborda directamente. La kisspeptina-10 actúa en KISS1R, identificado por Kotani y colaboradores en 2001 como el receptor del producto del gen KiSS-1, y opera a nivel hipotalámico corriente arriba de la liberación de gonadotropinas.",
      benefits: [
        "Masa observada de alta resolución impresa para ambos viales de melanocortina, la única forma de distinguir dos compuestos separados por aproximadamente un dalton",
        "Dos péptidos cíclicos con puente lactámico junto a un decapéptido lineal, dando comportamiento de estabilidad cíclico y lineal directamente comparable en una misma bandeja",
        "Un agonista hipotalámico de KISS1R suministrado junto a agonistas de melanocortina corriente abajo, permitiendo localizar una observación por familia de receptores en lugar de suponerla",
        "Declaración escrita de que Melanotan-II es un agonista amplio y no selectivo por subtipo, con referencia a la guía de compuestos herramienta de melanocortina de 2024",
        "Protocolo de manipulación que aconseja no tener nunca abiertos a la vez los dos viales casi isobáricos, ya que una alícuota mal etiquetada no se recupera por ensayo rutinario"
      ],
      citations: [
        "Weirath, N. A., & Haskell-Luevano, C. (2024). 'Recommended Tool Compounds for the Melanocortin Receptor (MCR) G Protein-Coupled Receptors (GPCRs).' ACS Pharmacology & Translational Science, 7(9), 2706-2724. DOI: 10.1021/acsptsci.4c00129 | PMID: 39296259",
        "Cipriani, S., Alfaroli, C., Maseroli, E., et al. (2023). 'An evaluation of bremelanotide injection for the treatment of hypoactive sexual desire disorder.' Expert Opinion on Pharmacotherapy, 24(1), 15-21. DOI: 10.1080/14656566.2022.2132144 | PMID: 36242769",
        "Kotani, M., Detheux, M., Vandenbogaerde, A., et al. (2001). 'The metastasis suppressor gene KiSS-1 encodes kisspeptins, the natural ligands of the orphan G protein-coupled receptor GPR54.' Journal of Biological Chemistry, 276(37), 34631-34636. DOI: 10.1074/jbc.M104847200 | PMID: 11457843"
      ],
      formula: "Blend — no single formula applies; Melanotan-II C50H69N15O9, PT-141 C50H68N14O10, Kisspeptin-10 C63H83N17O14",
      molarMass: "Melanotan-II 1024.2 g/mol; PT-141 1025.2 g/mol — approximately one dalton apart; Kisspeptin-10 1302.4 g/mol",
      sequence: "Melanotan-II Ac-Nle-ciclo(Asp-His-D-Phe-Arg-Trp-Lys)-NH2; PT-141 el mismo esqueleto cíclico con extremo de ácido libre; Kisspeptina-10 Tyr-Asn-Trp-Asn-Ser-Phe-Gly-Leu-Arg-Phe-NH2",
      retentionTime: 5.8
    }
  },
  "metabolic-activation": {
    en: {
      abstract: "Metabolic Activation supplies SLU-PP-332 (10 mg), 5-Amino-1MQ (50 mg), NAD+ (100 mg) and MOTS-c (10 mg) as four separately labelled vials. Only one component is a peptide. The kit is organised around four distinct target classes reaching one metabolic system — nuclear receptor agonism, enzyme active site inhibition, redox cofactor supply, and mitochondrial-encoded peptide signaling. SLU-PP-332 acts on orphan nuclear receptors with no known endogenous ligand, placing it in a different experimental category from every peptide in this range. Supplied for Research Use Only.",
      mechanism: "SLU-PP-332 is a synthetic agonist across the estrogen-related receptor alpha, beta and gamma subtypes. These are nuclear receptors that regulate transcription directly, and Billon and colleagues showed the compound produces an ERR-alpha dependent acute aerobic response — the reason it is described in the literature as an exercise mimetic. 5-Amino-1MQ inhibits nicotinamide N-methyltransferase, an enzyme that consumes the methyl donor pool. NAD+ enters as substrate for sirtuins and PARP enzymes rather than as a regulator. MOTS-c is transcribed from mitochondrial DNA and, as Kim and colleagues demonstrated, translocates to the nucleus to alter nuclear gene expression under metabolic stress.",
      benefits: [
        "The only kit in this catalog built around a nuclear receptor target, giving transcriptional readouts on a timescale no cell surface agonist in this range produces",
        "SLU-PP-332 acts on orphan receptors with no known endogenous ligand, making it a genuine chemical tool rather than a hormone analog",
        "Four distinct release protocols matched to chemistry — peptide LC-MS, two small-molecule structural confirmations, and UV spectral identity at 260 nanometres for the dinucleotide",
        "MOTS-c supplied as the one mitochondrially encoded component, transcribed outside the nuclear genome unlike every other peptide in this catalog",
        "Published anti-doping metabolite reference data available for SLU-PP-332, unusual for a compound first described in 2023 and useful for independent identity verification"
      ],
      citations: [
        "Billon, C., Sitaula, S., Banerjee, S., et al. (2023). 'Synthetic ERRα/β/γ Agonist Induces an ERRα-Dependent Acute Aerobic Exercise Response and Enhances Exercise Capacity.' ACS Chemical Biology, 18(4), 756-771. DOI: 10.1021/acschembio.2c00720 | PMID: 36988910",
        "Neelakantan, H., Vance, V., Wetzel, M. D., et al. (2018). 'Selective and membrane-permeable small molecule inhibitors of nicotinamide N-methyltransferase reverse high fat diet-induced obesity in mice.' Biochemical Pharmacology, 147, 141-152. DOI: 10.1016/j.bcp.2017.11.007 | PMID: 29155147",
        "Lee, C., Zeng, J., Drew, B. G., et al. (2015). 'The mitochondrial-derived peptide MOTS-c promotes metabolic homeostasis and reduces obesity and insulin resistance.' Cell Metabolism, 21(3), 443-454. DOI: 10.1016/j.cmet.2015.02.009 | PMID: 25738459"
      ],
      formula: "Blend — no single formula applies; SLU-PP-332 C18H14N2O2, 5-Amino-1MQ C11H13N2 as the quaternary cation, NAD+ C21H27N7O14P2, MOTS-c C101H152N28O22S2",
      molarMass: "SLU-PP-332 290.3 g/mol; 5-Amino-1MQ 173.2 g/mol as the free cation; NAD+ 663.4 g/mol; MOTS-c 2174.6 g/mol — verify salt forms with manufacturer COA",
      sequence: "MOTS-c Met-Arg-Trp-Gln-Glu-Met-Gly-Tyr-Ile-Phe-Tyr-Pro-Arg-Lys-Leu-Arg; SLU-PP-332 and 5-Amino-1MQ are small molecules and NAD+ a dinucleotide cofactor — none is a peptide",
      retentionTime: 4.1
    },
    es: {
      abstract: "Metabolic Activation suministra SLU-PP-332 (10 mg), 5-Amino-1MQ (50 mg), NAD+ (100 mg) y MOTS-c (10 mg) en cuatro viales etiquetados por separado. Solo un componente es un péptido. El kit se organiza en torno a cuatro clases de diana distintas que alcanzan un mismo sistema metabólico — agonismo de receptor nuclear, inhibición de sitio activo enzimático, suministro de cofactor redox y señalización por péptido codificado en la mitocondria. SLU-PP-332 actúa sobre receptores nucleares huérfanos sin ligando endógeno conocido, situándolo en una categoría experimental distinta de todo péptido de esta gama. Uso Exclusivo de Investigación.",
      mechanism: "SLU-PP-332 es un agonista sintético de los subtipos alfa, beta y gamma del receptor relacionado con estrógenos. Son receptores nucleares que regulan la transcripción directamente, y Billon y colaboradores mostraron que el compuesto produce una respuesta aeróbica aguda dependiente de ERR-alfa — la razón por la que la literatura lo describe como mimético del ejercicio. 5-Amino-1MQ inhibe la nicotinamida N-metiltransferasa, enzima que consume el fondo de donantes de metilo. NAD+ entra como sustrato de sirtuinas y enzimas PARP y no como regulador. MOTS-c se transcribe desde el ADN mitocondrial y, según demostraron Kim y colaboradores, se transloca al núcleo para alterar la expresión génica nuclear bajo estrés metabólico.",
      benefits: [
        "El único kit de este catálogo construido en torno a una diana de receptor nuclear, dando lecturas transcripcionales en una escala temporal que ningún agonista de superficie de esta gama produce",
        "SLU-PP-332 actúa sobre receptores huérfanos sin ligando endógeno conocido, convirtiéndolo en una herramienta química genuina y no en un análogo hormonal",
        "Cuatro protocolos de liberación distintos ajustados a la química — LC-MS peptídico, dos confirmaciones estructurales de molécula pequeña e identidad espectral UV a 260 nanómetros para el dinucleótido",
        "MOTS-c suministrado como el único componente codificado mitocondrialmente, transcrito fuera del genoma nuclear a diferencia de todo otro péptido de este catálogo",
        "Datos publicados de referencia de metabolitos antidopaje para SLU-PP-332, inusual en un compuesto descrito por primera vez en 2023 y útil para verificación independiente de identidad"
      ],
      citations: [
        "Billon, C., Sitaula, S., Banerjee, S., et al. (2023). 'Synthetic ERRα/β/γ Agonist Induces an ERRα-Dependent Acute Aerobic Exercise Response and Enhances Exercise Capacity.' ACS Chemical Biology, 18(4), 756-771. DOI: 10.1021/acschembio.2c00720 | PMID: 36988910",
        "Neelakantan, H., Vance, V., Wetzel, M. D., et al. (2018). 'Selective and membrane-permeable small molecule inhibitors of nicotinamide N-methyltransferase reverse high fat diet-induced obesity in mice.' Biochemical Pharmacology, 147, 141-152. DOI: 10.1016/j.bcp.2017.11.007 | PMID: 29155147",
        "Lee, C., Zeng, J., Drew, B. G., et al. (2015). 'The mitochondrial-derived peptide MOTS-c promotes metabolic homeostasis and reduces obesity and insulin resistance.' Cell Metabolism, 21(3), 443-454. DOI: 10.1016/j.cmet.2015.02.009 | PMID: 25738459"
      ],
      formula: "Blend — no single formula applies; SLU-PP-332 C18H14N2O2, 5-Amino-1MQ C11H13N2 as the quaternary cation, NAD+ C21H27N7O14P2, MOTS-c C101H152N28O22S2",
      molarMass: "SLU-PP-332 290.3 g/mol; 5-Amino-1MQ 173.2 g/mol as the free cation; NAD+ 663.4 g/mol; MOTS-c 2174.6 g/mol — verify salt forms with manufacturer COA",
      sequence: "MOTS-c Met-Arg-Trp-Gln-Glu-Met-Gly-Tyr-Ile-Phe-Tyr-Pro-Arg-Lys-Leu-Arg; SLU-PP-332 y 5-Amino-1MQ son moléculas pequeñas y NAD+ un cofactor dinucleótido — ninguno es un péptido",
      retentionTime: 4.1
    }
  },
  "metabolic-support": {
    en: {
      abstract: "Metabolic Support supplies Retatrutide (10 mg), AOD9604 (5 mg) and MOTS-c (10 mg) as three separately labelled lyophilized vials. The kit is arranged by cellular location rather than mechanism family: one component acts at cell surface class B receptors, one at adipose tissue independent of the growth hormone receptor, and one from inside the mitochondrion where it is genomically encoded. That arrangement lets an experiment localise an observed effect rather than merely detect it. Supplied for Research Use Only.",
      mechanism: "Retatrutide activates the GIP, GLP-1 and glucagon receptors from a single lipidated backbone; Coskun and colleagues described its discovery and receptor profile in 2022. AOD9604 corresponds to the carboxy-terminal lipolytic domain of growth hormone with a tyrosine at position one, and Heffernan and colleagues reported its lipolytic activity persisting in beta-3 adrenergic receptor knockout animals — evidence it operates independently of that receptor. MOTS-c is one of a small number of peptides encoded within mitochondrial DNA; Reynolds and colleagues characterised it as an exercise-induced regulator of muscle homeostasis, and its activity involves translocation to the nucleus rather than surface receptor binding.",
      benefits: [
        "Three components arranged by cellular location — plasma membrane, adipose tissue, and mitochondrial interior — allowing an effect to be localised rather than merely observed",
        "AOD9604 released on LC-MS with observed mass printed, documenting the 16 dalton separation from the unmodified 176-191 fragment that a purity chromatogram cannot show",
        "MOTS-c supplied as a mitochondrially encoded peptide, transcribed outside the nuclear genome unlike every other peptide in this range",
        "Retatrutide released by full peptide mapping rather than retention time, which its fatty acid side chain makes an unreliable identity signal",
        "Published evidence that AOD9604 lipolytic activity persists without the beta-3 adrenergic receptor, giving a defined negative control for study design"
      ],
      citations: [
        "Coskun, T., Urva, S., Roell, W. C., et al. (2022). 'LY3437943, a novel triple glucagon, GIP, and GLP-1 receptor agonist for glycemic control and weight loss: From discovery to clinical proof of concept.' Cell Metabolism, 34(9), 1234-1247.e9. DOI: 10.1016/j.cmet.2022.07.013 | PMID: 35985340",
        "Heffernan, M., Summers, R. J., Thorburn, A., et al. (2001). 'The effects of human GH and its lipolytic fragment (AOD9604) on lipid metabolism following chronic treatment in obese mice and beta-3 AR knock-out mice.' Endocrinology, 142(12), 5182-5189. DOI: 10.1210/endo.142.12.8522 | PMID: 11713213",
        "Reynolds, J. C., Lai, R. W., Woodhead, J. S. T., et al. (2021). 'MOTS-c is an exercise-induced mitochondrial-encoded regulator of age-dependent physical decline and muscle homeostasis.' Nature Communications, 12(1), 470. DOI: 10.1038/s41467-020-20790-0 | PMID: 33473109"
      ],
      formula: "Blend — no single formula applies; Retatrutide C221H342N46O68, AOD9604 C78H123N23O23S2, MOTS-c C101H152N28O22S2",
      molarMass: "Retatrutide 4731.3 g/mol; AOD9604 1815.1 g/mol; MOTS-c 2174.6 g/mol",
      sequence: "Retatrutide, a lipidated triple GIP/GLP-1/glucagon receptor agonist backbone; AOD9604 Tyr-substituted hGH(176-191); MOTS-c Met-Arg-Trp-Gln-Glu-Met-Gly-Tyr-Ile-Phe-Tyr-Pro-Arg-Lys-Leu-Arg",
      retentionTime: 10.6
    },
    es: {
      abstract: "Metabolic Support suministra retatrutida (10 mg), AOD9604 (5 mg) y MOTS-c (10 mg) en tres viales liofilizados etiquetados por separado. El kit se organiza por localización celular y no por familia mecanística: un componente actúa en receptores de clase B de superficie, otro en tejido adiposo independientemente del receptor de hormona del crecimiento, y otro desde dentro de la mitocondria donde está codificado genómicamente. Esa disposición permite a un experimento localizar un efecto observado y no solo detectarlo. Uso Exclusivo de Investigación.",
      mechanism: "La retatrutida activa los receptores de GIP, GLP-1 y glucagón desde un solo esqueleto lipidado; Coskun y colaboradores describieron su descubrimiento y perfil de receptores en 2022. AOD9604 corresponde al dominio lipolítico carboxi-terminal de la hormona del crecimiento con tirosina en la posición uno, y Heffernan y colaboradores reportaron que su actividad lipolítica persiste en animales con supresión del receptor adrenérgico beta-3 — evidencia de que opera independientemente de ese receptor. MOTS-c es uno de los pocos péptidos codificados dentro del ADN mitocondrial; Reynolds y colaboradores lo caracterizaron como regulador inducido por ejercicio de la homeostasis muscular, y su actividad implica translocación al núcleo y no unión a receptor de superficie.",
      benefits: [
        "Tres componentes organizados por localización celular — membrana plasmática, tejido adiposo e interior mitocondrial — que permiten localizar un efecto y no solo observarlo",
        "AOD9604 liberado por LC-MS con masa observada impresa, documentando la separación de 16 daltons frente al fragmento 176-191 sin modificar que un cromatograma de pureza no puede mostrar",
        "MOTS-c suministrado como péptido codificado mitocondrialmente, transcrito fuera del genoma nuclear a diferencia de todo otro péptido de esta gama",
        "Retatrutida liberada por mapeo peptídico completo y no por tiempo de retención, señal de identidad poco fiable por su cadena lateral de ácido graso",
        "Evidencia publicada de que la actividad lipolítica de AOD9604 persiste sin el receptor adrenérgico beta-3, dando un control negativo definido para el diseño del estudio"
      ],
      citations: [
        "Coskun, T., Urva, S., Roell, W. C., et al. (2022). 'LY3437943, a novel triple glucagon, GIP, and GLP-1 receptor agonist for glycemic control and weight loss: From discovery to clinical proof of concept.' Cell Metabolism, 34(9), 1234-1247.e9. DOI: 10.1016/j.cmet.2022.07.013 | PMID: 35985340",
        "Heffernan, M., Summers, R. J., Thorburn, A., et al. (2001). 'The effects of human GH and its lipolytic fragment (AOD9604) on lipid metabolism following chronic treatment in obese mice and beta-3 AR knock-out mice.' Endocrinology, 142(12), 5182-5189. DOI: 10.1210/endo.142.12.8522 | PMID: 11713213",
        "Reynolds, J. C., Lai, R. W., Woodhead, J. S. T., et al. (2021). 'MOTS-c is an exercise-induced mitochondrial-encoded regulator of age-dependent physical decline and muscle homeostasis.' Nature Communications, 12(1), 470. DOI: 10.1038/s41467-020-20790-0 | PMID: 33473109"
      ],
      formula: "Blend — no single formula applies; Retatrutide C221H342N46O68, AOD9604 C78H123N23O23S2, MOTS-c C101H152N28O22S2",
      molarMass: "Retatrutide 4731.3 g/mol; AOD9604 1815.1 g/mol; MOTS-c 2174.6 g/mol",
      sequence: "Retatrutida, esqueleto lipidado agonista triple de receptores GIP/GLP-1/glucagón; AOD9604 hGH(176-191) con sustitución de tirosina; MOTS-c Met-Arg-Trp-Gln-Glu-Met-Gly-Tyr-Ile-Phe-Tyr-Pro-Arg-Lys-Leu-Arg",
      retentionTime: 10.6
    }
  },
  "nad-antioxidant": {
    en: {
      abstract: "NAD+ & Antioxidant supplies NAD+ (100 mg), Glutathione (600 mg) and MOTS-c (10 mg) as three separately labelled vials. Two components are endogenous redox molecules rather than signaling peptides — glutathione functions as a thiol redox buffer and NAD+ as a cofactor consumed stoichiometrically. Only MOTS-c is a conventional signaling peptide. The 600 mg glutathione fill is the largest single-vial quantity in this catalog, set by the stoichiometric logic of redox buffering rather than by receptor occupancy. Supplied for Research Use Only.",
      mechanism: "Glutathione is a cysteine-containing tripeptide whose free thiol makes it the principal non-protein thiol buffer in the cell; Lu described its synthesis pathway and Forman and colleagues its protective roles and measurement. NAD+ participates as substrate for sirtuins and PARP enzymes, consumed rather than catalytically recycled in those reactions. MOTS-c is encoded within mitochondrial DNA, and Kim and colleagues demonstrated it translocates to the nucleus under metabolic stress to regulate nuclear gene expression — a route no cell surface peptide in this catalog uses.",
      benefits: [
        "Glutathione released with a free thiol assay reporting the reduced fraction, since reduced and oxidised glutathione are distinct species that a purity chromatogram cannot separate",
        "A 600 mg glutathione fill — the largest single-vial quantity in this catalog — sized by the stoichiometric logic of redox buffering rather than receptor occupancy",
        "Three quantity logics on one tray, spanning sixtyfold, with the reasoning stated on the label rather than left for the buyer to infer",
        "NAD+ shipped with water content reported, because a hygroscopic cofactor’s stated mass is uninterpretable without it",
        "MOTS-c as the one mitochondrially encoded signaling component, acting through nuclear translocation rather than surface receptor binding"
      ],
      citations: [
        "Lu, S. C. (2013). 'Glutathione synthesis.' Biochimica et Biophysica Acta - General Subjects, 1830(5), 3143-3153. DOI: 10.1016/j.bbagen.2012.09.008 | PMID: 22995213",
        "Kim, K. H., Son, J. M., Benayoun, B. A., et al. (2018). 'The Mitochondrial-Encoded Peptide MOTS-c Translocates to the Nucleus to Regulate Nuclear Gene Expression in Response to Metabolic Stress.' Cell Metabolism, 28(3), 516-524.e7. DOI: 10.1016/j.cmet.2018.06.008 | PMID: 29983246",
        "Forman, H. J., Zhang, H., & Rinna, A. (2009). 'Glutathione: overview of its protective roles, measurement, and biosynthesis.' Molecular Aspects of Medicine, 30(1-2), 1-12. DOI: 10.1016/j.mam.2008.08.006 | PMID: 18796312"
      ],
      formula: "Blend — no single formula applies; NAD+ C21H27N7O14P2, Glutathione C10H17N3O6S, MOTS-c C101H152N28O22S2",
      molarMass: "NAD+ 663.4 g/mol; Glutathione 307.33 g/mol reduced form; MOTS-c 2174.6 g/mol",
      sequence: "Glutathione gamma-Glu-Cys-Gly; MOTS-c Met-Arg-Trp-Gln-Glu-Met-Gly-Tyr-Ile-Phe-Tyr-Pro-Arg-Lys-Leu-Arg; NAD+ is a dinucleotide cofactor, not a peptide",
      retentionTime: 2.9
    },
    es: {
      abstract: "NAD+ & Antioxidant suministra NAD+ (100 mg), glutatión (600 mg) y MOTS-c (10 mg) en tres viales etiquetados por separado. Dos componentes son moléculas redox endógenas y no péptidos de señalización — el glutatión funciona como tampón redox tiólico y NAD+ como cofactor consumido estequiométricamente. Solo MOTS-c es un péptido señalizador convencional. El llenado de 600 mg de glutatión es la mayor cantidad en un solo vial de este catálogo, fijada por la lógica estequiométrica del tamponamiento redox y no por ocupación de receptores. Uso Exclusivo de Investigación.",
      mechanism: "El glutatión es un tripéptido con cisteína cuyo tiol libre lo convierte en el principal tampón tiólico no proteico de la célula; Lu describió su vía de síntesis y Forman y colaboradores sus funciones protectoras y su medición. NAD+ participa como sustrato de sirtuinas y enzimas PARP, consumido y no reciclado catalíticamente en esas reacciones. MOTS-c está codificado dentro del ADN mitocondrial, y Kim y colaboradores demostraron que se transloca al núcleo bajo estrés metabólico para regular la expresión génica nuclear — una ruta que ningún péptido de superficie de este catálogo utiliza.",
      benefits: [
        "Glutatión liberado con ensayo de tiol libre que reporta la fracción reducida, ya que glutatión reducido y oxidado son especies distintas que un cromatograma de pureza no separa",
        "Un llenado de 600 mg de glutatión — la mayor cantidad en un solo vial de este catálogo — dimensionado por la lógica estequiométrica del tamponamiento redox y no por ocupación de receptores",
        "Tres lógicas de cantidad en una bandeja, con un rango de sesenta veces y el razonamiento declarado en la etiqueta en lugar de dejarlo a la inferencia del comprador",
        "NAD+ enviado con contenido de agua reportado, porque la masa declarada de un cofactor higroscópico es ininterpretable sin ese dato",
        "MOTS-c como el único componente señalizador codificado mitocondrialmente, actuando por translocación nuclear y no por unión a receptor de superficie"
      ],
      citations: [
        "Lu, S. C. (2013). 'Glutathione synthesis.' Biochimica et Biophysica Acta - General Subjects, 1830(5), 3143-3153. DOI: 10.1016/j.bbagen.2012.09.008 | PMID: 22995213",
        "Kim, K. H., Son, J. M., Benayoun, B. A., et al. (2018). 'The Mitochondrial-Encoded Peptide MOTS-c Translocates to the Nucleus to Regulate Nuclear Gene Expression in Response to Metabolic Stress.' Cell Metabolism, 28(3), 516-524.e7. DOI: 10.1016/j.cmet.2018.06.008 | PMID: 29983246",
        "Forman, H. J., Zhang, H., & Rinna, A. (2009). 'Glutathione: overview of its protective roles, measurement, and biosynthesis.' Molecular Aspects of Medicine, 30(1-2), 1-12. DOI: 10.1016/j.mam.2008.08.006 | PMID: 18796312"
      ],
      formula: "Blend — no single formula applies; NAD+ C21H27N7O14P2, Glutathione C10H17N3O6S, MOTS-c C101H152N28O22S2",
      molarMass: "NAD+ 663.4 g/mol; Glutathione 307.33 g/mol reduced form; MOTS-c 2174.6 g/mol",
      sequence: "Glutatión gamma-Glu-Cys-Gly; MOTS-c Met-Arg-Trp-Gln-Glu-Met-Gly-Tyr-Ile-Phe-Tyr-Pro-Arg-Lys-Leu-Arg; NAD+ es un cofactor dinucleótido, no un péptido",
      retentionTime: 2.9
    }
  },
  "neuro-core": {
    en: {
      abstract: "Neuro Core supplies Semax (10 mg) and Selank (10 mg) as two separately labelled lyophilized vials. Both are seven-residue peptides carrying the same C-terminal Pro-Gly-Pro stabilizing tail grafted onto entirely unrelated parent sequences — an ACTH fragment and the immune tetrapeptide tuftsin — which makes the pair a controlled structure-activity comparison rather than two similar compounds. The modification is held constant while the parent biology varies. Both are supplied as the unacetylated parent forms. Supplied for Research Use Only.",
      mechanism: "Semax derives from ACTH(4-10) with a Pro-Gly-Pro extension; Liu and colleagues reported in 2025 that it targets the mu opioid receptor gene Oprm1 to promote deubiquitination and functional recovery in a rodent spinal cord injury model — the first identification of a specific gene-level target for the compound. Selank derives from tuftsin, an immunologically active tetrapeptide from the immunoglobulin heavy chain, with the same Pro-Gly-Pro extension; Konstantinopolsky and colleagues characterised its behavioural effects in a morphine withdrawal model. The shared tail slows exopeptidase degradation in both cases without conferring any shared target.",
      benefits: [
        "A controlled structure-activity pair — identical Pro-Gly-Pro stabilization applied to two unrelated parent sequences, isolating the modification from the parent biology",
        "Amino terminal state stated explicitly on every certificate, since acetylated and unacetylated presentations differ by 42 daltons and circulate under the same product names",
        "A published functional connectomic study covering both compounds within one framework, giving an external comparison point that single-compound literature cannot provide",
        "Semax supplied with reference to a 2025 major-journal paper identifying a specific gene-level target, distinguishing it from compounds described only at the behavioural level",
        "Written acknowledgement that most of this literature originates from one research programme, so study design starts from the actual strength of the evidence"
      ],
      citations: [
        "Liu, R., Chen, Y., Huang, H., et al. (2025). 'Semax peptide targets the mu opioid receptor gene Oprm1 to promote deubiquitination and functional recovery after spinal cord injury in female mice.' British Journal of Pharmacology, 182(22), 5489-5516. DOI: 10.1111/bph.70122 | PMID: 40692165",
        "Konstantinopolsky, M. A., Chernyakova, I. V., & Kolik, L. G. (2022). 'Selank, a Peptide Analog of Tuftsin, Attenuates Aversive Signs of Morphine Withdrawal in Rats.' Bulletin of Experimental Biology and Medicine, 173(6), 730-733. DOI: 10.1007/s10517-022-05624-x | PMID: 36322304",
        "Panikratova, Y. R., Lebedeva, I. S., Sokolov, O. Y., et al. (2020). 'Functional Connectomic Approach to Studying Selank and Semax Effects.' Doklady Biological Sciences, 490(1), 9-11. DOI: 10.1134/S001249662001007X | PMID: 32342318"
      ],
      formula: "Blend — no single formula applies; Semax C37H51N9O10S and Selank C33H57N11O9",
      molarMass: "Semax 813.9 g/mol; Selank 751.9 g/mol — the acetylated presentations are each 42 g/mol heavier",
      sequence: "Semax Met-Glu-His-Phe-Pro-Gly-Pro; Selank Thr-Lys-Pro-Arg-Pro-Gly-Pro",
      retentionTime: 4.6
    },
    es: {
      abstract: "Neuro Core suministra Semax (10 mg) y Selank (10 mg) en dos viales liofilizados etiquetados por separado. Ambos son péptidos de siete residuos que llevan la misma cola estabilizadora C-terminal Pro-Gly-Pro injertada en secuencias parentales completamente ajenas — un fragmento de ACTH y el tetrapéptido inmunitario tuftsina — lo que convierte al par en una comparación estructura-actividad controlada y no en dos compuestos similares. La modificación se mantiene constante mientras varía la biología parental. Ambos se suministran como formas parentales sin acetilar. Uso Exclusivo de Investigación.",
      mechanism: "Semax deriva de ACTH(4-10) con una extensión Pro-Gly-Pro; Liu y colaboradores reportaron en 2025 que actúa sobre el gen del receptor opioide mu Oprm1 para promover la desubiquitinación y la recuperación funcional en un modelo roedor de lesión medular — la primera identificación de una diana específica a nivel génico para el compuesto. Selank deriva de la tuftsina, un tetrapéptido inmunológicamente activo de la cadena pesada de inmunoglobulina, con la misma extensión Pro-Gly-Pro; Konstantinopolsky y colaboradores caracterizaron sus efectos conductuales en un modelo de abstinencia de morfina. La cola compartida ralentiza la degradación por exopeptidasas en ambos casos sin conferir ninguna diana común.",
      benefits: [
        "Un par estructura-actividad controlado — estabilización Pro-Gly-Pro idéntica aplicada a dos secuencias parentales no relacionadas, que aísla la modificación de la biología parental",
        "Estado del extremo amino declarado explícitamente en cada certificado, ya que las presentaciones aceti-lada y sin acetilar difieren en 42 daltons y circulan bajo los mismos nombres comerciales",
        "Un estudio conectómico funcional publicado que cubre ambos compuestos en un mismo marco, dando un punto de comparación externo que la literatura de compuesto único no ofrece",
        "Semax suministrado con referencia a un artículo de 2025 en revista de primer nivel que identifica una diana específica a nivel génico, distinguiéndolo de compuestos descritos solo a nivel conductual",
        "Reconocimiento escrito de que la mayor parte de esta literatura proviene de un solo programa de investigación, para que el diseño del estudio parta de la fuerza real de la evidencia"
      ],
      citations: [
        "Liu, R., Chen, Y., Huang, H., et al. (2025). 'Semax peptide targets the mu opioid receptor gene Oprm1 to promote deubiquitination and functional recovery after spinal cord injury in female mice.' British Journal of Pharmacology, 182(22), 5489-5516. DOI: 10.1111/bph.70122 | PMID: 40692165",
        "Konstantinopolsky, M. A., Chernyakova, I. V., & Kolik, L. G. (2022). 'Selank, a Peptide Analog of Tuftsin, Attenuates Aversive Signs of Morphine Withdrawal in Rats.' Bulletin of Experimental Biology and Medicine, 173(6), 730-733. DOI: 10.1007/s10517-022-05624-x | PMID: 36322304",
        "Panikratova, Y. R., Lebedeva, I. S., Sokolov, O. Y., et al. (2020). 'Functional Connectomic Approach to Studying Selank and Semax Effects.' Doklady Biological Sciences, 490(1), 9-11. DOI: 10.1134/S001249662001007X | PMID: 32342318"
      ],
      formula: "Blend — no single formula applies; Semax C37H51N9O10S and Selank C33H57N11O9",
      molarMass: "Semax 813.9 g/mol; Selank 751.9 g/mol — the acetylated presentations are each 42 g/mol heavier",
      sequence: "Semax Met-Glu-His-Phe-Pro-Gly-Pro; Selank Thr-Lys-Pro-Arg-Pro-Gly-Pro",
      retentionTime: 4.6
    }
  },
  "recovery-sleep-stress": {
    en: {
      abstract: "Recovery, Sleep & Stress supplies DSIP (5 mg), Selank (10 mg) and Oxytocin (10 mg) as three separately labelled lyophilized vials. The three occupy markedly different levels of mechanistic certainty: oxytocin acts at a fully characterised class A receptor with a resolved signaling map, Selank has defined study endpoints without a single named receptor, and DSIP has had no identified receptor since its isolation in 1977. Oxytocin is the only cyclic component, closed by a structural disulfide bridge. Supplied for Research Use Only.",
      mechanism: "Oxytocin binds the oxytocin receptor, a class A G protein-coupled receptor whose signaling Jurek and Neumann mapped comprehensively from intracellular cascade through to behavioural output; its nine-residue sequence is closed into a ring by a disulfide bridge between cysteines at positions one and six. Selank is a tuftsin analog carrying a Pro-Gly-Pro extension, studied against GABAergic and cytokine endpoints, with Konstantinopolsky and colleagues reporting behavioural effects in a withdrawal model. DSIP was characterised by Schoenenberger and Monnier in 1977 as an electroencephalographic sleep-inducing factor; no receptor has been identified in the decades since, and Kovalzon and Strekalova's review title calls it a still unresolved riddle.",
      benefits: [
        "A deliberate span from a fully characterised receptor system to one uncharacterised for nearly fifty years, letting an experiment carry its own internal reference point",
        "Oxytocin released with explicit disulfide integrity confirmation, since a reduced linear batch shares the amino acid composition and passes a purity assay",
        "Written disclosure that DSIP has no identified receptor after five decades, framing a DSIP arm as exploratory rather than confirmatory work",
        "The only tray in this catalog pairing a cyclic disulfide-closed peptide with two linear chains, giving directly comparable handling behaviour",
        "Oxytocin’s comprehensively mapped receptor signaling available as an external positive control for assays where the other two components have none"
      ],
      citations: [
        "Jurek, B., & Neumann, I. D. (2018). 'The Oxytocin Receptor: From Intracellular Signaling to Behavior.' Physiological Reviews, 98(3), 1805-1908. DOI: 10.1152/physrev.00031.2017 | PMID: 29897293",
        "Kovalzon, V. M., & Strekalova, T. V. (2006). 'Delta sleep-inducing peptide (DSIP): a still unresolved riddle.' Journal of Neurochemistry, 97(2), 303-309. DOI: 10.1111/j.1471-4159.2006.03693.x | PMID: 16539679",
        "Konstantinopolsky, M. A., Chernyakova, I. V., & Kolik, L. G. (2022). 'Selank, a Peptide Analog of Tuftsin, Attenuates Aversive Signs of Morphine Withdrawal in Rats.' Bulletin of Experimental Biology and Medicine, 173(6), 730-733. DOI: 10.1007/s10517-022-05624-x | PMID: 36322304"
      ],
      formula: "Blend — no single formula applies; DSIP C35H48N10O15, Selank C33H57N11O9, Oxytocin C43H66N12O12S2",
      molarMass: "DSIP 848.8 g/mol; Selank 751.9 g/mol; Oxytocin 1007.2 g/mol as the disulfide-closed cyclic form",
      sequence: "DSIP Trp-Ala-Gly-Gly-Asp-Ala-Ser-Gly-Glu; Selank Thr-Lys-Pro-Arg-Pro-Gly-Pro; Oxytocin Cys-Tyr-Ile-Gln-Asn-Cys-Pro-Leu-Gly-NH2 with a disulfide bridge between residues 1 and 6",
      retentionTime: 3.4
    },
    es: {
      abstract: "Recovery, Sleep & Stress suministra DSIP (5 mg), Selank (10 mg) y oxitocina (10 mg) en tres viales liofilizados etiquetados por separado. Los tres ocupan niveles marcadamente distintos de certeza mecanística: la oxitocina actúa en un receptor de clase A plenamente caracterizado con mapa de señalización resuelto, Selank tiene variables de estudio definidas sin un receptor nombrado, y DSIP no tiene receptor identificado desde su aislamiento en 1977. La oxitocina es el único componente cíclico, cerrado por un puente disulfuro estructural. Uso Exclusivo de Investigación.",
      mechanism: "La oxitocina une el receptor de oxitocina, un receptor acoplado a proteína G de clase A cuya señalización Jurek y Neumann mapearon exhaustivamente desde la cascada intracelular hasta la salida conductual; su secuencia de nueve residuos se cierra en anillo por un puente disulfuro entre cisteínas en las posiciones uno y seis. Selank es un análogo de tuftsina con extensión Pro-Gly-Pro, estudiado frente a variables GABAérgicas y de citoquinas, con Konstantinopolsky y colaboradores reportando efectos conductuales en un modelo de abstinencia. DSIP fue caracterizado por Schoenenberger y Monnier en 1977 como factor electroencefalográfico inductor de sueño; no se ha identificado receptor en las décadas siguientes, y el título de la revisión de Kovalzon y Strekalova lo llama un enigma aún sin resolver.",
      benefits: [
        "Un rango deliberado desde un sistema de receptores plenamente caracterizado hasta uno sin caracterizar durante casi cincuenta años, permitiendo que un experimento lleve su propio punto de referencia interno",
        "Oxitocina liberada con confirmación explícita de integridad del disulfuro, ya que un lote reducido y lineal comparte la composición de aminoácidos y supera un ensayo de pureza",
        "Divulgación escrita de que DSIP no tiene receptor identificado tras cinco décadas, encuadrando un brazo con DSIP como trabajo exploratorio y no confirmatorio",
        "La única bandeja de este catálogo que empareja un péptido cíclico cerrado por disulfuro con dos cadenas lineales, dando comportamiento de manipulación directamente comparable",
        "La señalización del receptor de oxitocina, exhaustivamente mapeada, disponible como control positivo externo en ensayos donde los otros dos componentes carecen de él"
      ],
      citations: [
        "Jurek, B., & Neumann, I. D. (2018). 'The Oxytocin Receptor: From Intracellular Signaling to Behavior.' Physiological Reviews, 98(3), 1805-1908. DOI: 10.1152/physrev.00031.2017 | PMID: 29897293",
        "Kovalzon, V. M., & Strekalova, T. V. (2006). 'Delta sleep-inducing peptide (DSIP): a still unresolved riddle.' Journal of Neurochemistry, 97(2), 303-309. DOI: 10.1111/j.1471-4159.2006.03693.x | PMID: 16539679",
        "Konstantinopolsky, M. A., Chernyakova, I. V., & Kolik, L. G. (2022). 'Selank, a Peptide Analog of Tuftsin, Attenuates Aversive Signs of Morphine Withdrawal in Rats.' Bulletin of Experimental Biology and Medicine, 173(6), 730-733. DOI: 10.1007/s10517-022-05624-x | PMID: 36322304"
      ],
      formula: "Blend — no single formula applies; DSIP C35H48N10O15, Selank C33H57N11O9, Oxytocin C43H66N12O12S2",
      molarMass: "DSIP 848.8 g/mol; Selank 751.9 g/mol; Oxytocin 1007.2 g/mol as the disulfide-closed cyclic form",
      sequence: "DSIP Trp-Ala-Gly-Gly-Asp-Ala-Ser-Gly-Glu; Selank Thr-Lys-Pro-Arg-Pro-Gly-Pro; Oxitocina Cys-Tyr-Ile-Gln-Asn-Cys-Pro-Leu-Gly-NH2 con puente disulfuro entre los residuos 1 y 6",
      retentionTime: 3.4
    }
  },
  "repair-trio": {
    en: {
      abstract: "Repair Trio supplies BPC-157 (5 mg), TB-500 (5 mg) and GHK-Cu (50 mg) as three separately labelled vials. GHK-Cu is the only metal-complexed compound in this catalog — a coordination complex in which the copper ion is a structural component rather than an impurity, giving it buffer sensitivities, an additional copper content release assay, and a visible deep blue colour that reads as a quality signal before any instrument is used. The other two are conventional lyophilized repair peptides. Supplied for Research Use Only.",
      mechanism: "GHK-Cu is a glycyl-histidyl-lysine tripeptide coordinating a copper ion, and Pickart and Margolina's analysis of gene expression data is the basis for its study in matrix and regenerative contexts — the copper is integral, not adventitious. TB-500 corresponds to the actin-binding domain of thymosin beta-4; Bock-Marquette and colleagues characterised the parent protein's activation of integrin-linked kinase and its effects on cell migration. BPC-157 is a synthetic sequence derived from a gastric juice protein for which no receptor has been identified, with published readouts concerning nitric oxide signaling and angiogenesis rather than a characterised binding interaction.",
      benefits: [
        "The only metal-complexed compound in this catalog, with copper content determined and reported as a release specification rather than assumed from peptide purity",
        "A visual quality check available before any instrument is used — correctly loaded GHK-Cu is deep blue, and a pale cake indicates under-loaded copper",
        "Written warning that chelating buffers strip the coordinated copper and leave free GHK tripeptide, which still reads as pure on a chromatogram",
        "A 50 mg GHK-Cu fill against 5 mg repair peptides, sized for matrix formulation work rather than set to uniform milligram parity",
        "Explicit disclosure that BPC-157 has no identified receptor and that TB-500 is the Ac-LKKTETQ fragment rather than full-length thymosin beta-4"
      ],
      citations: [
        "Pickart, L., & Margolina, A. (2018). 'Regenerative and Protective Actions of the GHK-Cu Peptide in the Light of the New Gene Data.' International Journal of Molecular Sciences, 19(7), 1987. DOI: 10.3390/ijms19071987 | PMID: 29986520",
        "Bock-Marquette, I., Saxena, A., White, M. D., et al. (2004). 'Thymosin beta4 activates integrin-linked kinase and promotes cardiac cell migration, survival and cardiac repair.' Nature, 432(7016), 466-472. DOI: 10.1038/nature03000 | PMID: 15565145",
        "Sikiric, P., Seiwerth, S., Skrtic, A., et al. (2025). 'BPC 157 Therapy: Targeting Angiogenesis and Nitric Oxide.' Pharmaceuticals, 18(10), 1450. DOI: 10.3390/ph18101450 | PMID: 41155565"
      ],
      formula: "Blend — no single formula applies; BPC-157 C62H98N16O22, TB-500 (Ac-LKKTETQ) C34H62N10O13, GHK-Cu C14H21CuN6O4 as the copper complex",
      molarMass: "BPC-157 1419.5 g/mol; TB-500 fragment 819.0 g/mol; GHK-Cu 400.9 g/mol as the complex, against 340.4 for the uncomplexed GHK tripeptide",
      sequence: "BPC-157 Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val; TB-500 Ac-Leu-Lys-Lys-Thr-Glu-Thr-Gln; GHK-Cu Gly-His-Lys with a coordinated copper ion",
      retentionTime: 5.1
    },
    es: {
      abstract: "Repair Trio suministra BPC-157 (5 mg), TB-500 (5 mg) y GHK-Cu (50 mg) en tres viales etiquetados por separado. GHK-Cu es el único compuesto complejado con metal de este catálogo — un complejo de coordinación donde el ion cobre es componente estructural y no impureza, lo que le confiere sensibilidades de tampón, un ensayo adicional de liberación por contenido de cobre y un color azul intenso visible que funciona como señal de calidad antes de usar instrumento alguno. Los otros dos son péptidos de reparación liofilizados convencionales. Uso Exclusivo de Investigación.",
      mechanism: "GHK-Cu es un tripéptido glicil-histidil-lisina que coordina un ion cobre, y el análisis de datos de expresión génica de Pickart y Margolina es la base de su estudio en contextos de matriz y regeneración — el cobre es integral, no adventicio. TB-500 corresponde al dominio de unión a actina de la timosina beta-4; Bock-Marquette y colaboradores caracterizaron la activación por la proteína parental de la quinasa ligada a integrinas y sus efectos sobre la migración celular. BPC-157 es una secuencia sintética derivada de una proteína del jugo gástrico para la que no se ha identificado receptor, con lecturas publicadas sobre señalización de óxido nítrico y angiogénesis en lugar de una interacción de unión caracterizada.",
      benefits: [
        "El único compuesto complejado con metal de este catálogo, con contenido de cobre determinado y reportado como especificación de liberación en lugar de suponerse desde la pureza peptídica",
        "Una verificación visual de calidad disponible antes de usar instrumento alguno — el GHK-Cu correctamente cargado es azul intenso, y una torta pálida indica cobre insuficiente",
        "Advertencia escrita de que los tampones quelantes arrancan el cobre coordinado y dejan tripéptido GHK libre, que aun así se lee como puro en un cromatograma",
        "Un llenado de 50 mg de GHK-Cu frente a 5 mg de los péptidos de reparación, dimensionado para trabajo de formulación de matriz y no fijado a paridad uniforme en miligramos",
        "Divulgación explícita de que BPC-157 no tiene receptor identificado y de que TB-500 es el fragmento Ac-LKKTETQ y no timosina beta-4 completa"
      ],
      citations: [
        "Pickart, L., & Margolina, A. (2018). 'Regenerative and Protective Actions of the GHK-Cu Peptide in the Light of the New Gene Data.' International Journal of Molecular Sciences, 19(7), 1987. DOI: 10.3390/ijms19071987 | PMID: 29986520",
        "Bock-Marquette, I., Saxena, A., White, M. D., et al. (2004). 'Thymosin beta4 activates integrin-linked kinase and promotes cardiac cell migration, survival and cardiac repair.' Nature, 432(7016), 466-472. DOI: 10.1038/nature03000 | PMID: 15565145",
        "Sikiric, P., Seiwerth, S., Skrtic, A., et al. (2025). 'BPC 157 Therapy: Targeting Angiogenesis and Nitric Oxide.' Pharmaceuticals, 18(10), 1450. DOI: 10.3390/ph18101450 | PMID: 41155565"
      ],
      formula: "Blend — no single formula applies; BPC-157 C62H98N16O22, TB-500 (Ac-LKKTETQ) C34H62N10O13, GHK-Cu C14H21CuN6O4 as the copper complex",
      molarMass: "BPC-157 1419.5 g/mol; TB-500 fragment 819.0 g/mol; GHK-Cu 400.9 g/mol as the complex, against 340.4 for the uncomplexed GHK tripeptide",
      sequence: "BPC-157 Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val; TB-500 Ac-Leu-Lys-Lys-Thr-Glu-Thr-Gln; GHK-Cu Gly-His-Lys con un ion cobre coordinado",
      retentionTime: 5.1
    }
  },
  "reproductive-hpg-axis": {
    en: {
      abstract: "Reproductive / HPG-Axis supplies Gonadorelin (10 mg) and Kisspeptin-10 (10 mg) as two separately labelled lyophilized vials sitting at consecutive levels of a single axis. Kisspeptin-10 acts upstream at KISS1R, the receptor identified in 2003 as an essential gatekeeper of the axis; Gonadorelin is native gonadotropin releasing hormone itself rather than a substituted superagonist analog. One vial drives release of what the other contains, a directly sequential relationship unique among these kits. Supplied for Research Use Only.",
      mechanism: "Kisspeptin-10 binds KISS1R, the receptor Kotani and colleagues identified in 2001 as the target of KiSS-1 gene products; Seminara and colleagues then established the receptor's role as a regulator of the axis through loss of function genetics. Gonadorelin is native gonadotropin releasing hormone, a decapeptide with a pyroglutamate amino terminus and a C-terminal amide, acting at the GnRH receptor. That receptor's defining pharmacological feature is its differential response to pulsatile versus continuous exposure — Chason and colleagues examined receptor-level cross-talk in GT1-7 cells — and native GnRH behaves differently in this respect from substituted superagonist analogs.",
      benefits: [
        "Two consecutive levels of one axis rather than two parallel compounds, so an experiment can localise whether an effect originates above or at the GnRH level",
        "Gonadorelin supplied as native GnRH and stated as such, not a substituted superagonist whose sustained-exposure behaviour is functionally opposite",
        "Pyroglutamate formation at the gonadorelin amino terminus confirmed on release, since incomplete cyclisation yields a 17 dalton heavier molecule that elutes close by",
        "Explicit note that GnRH receptor response is pulsatile-dependent, so continuous well exposure will produce the opposite result to an intermittent protocol",
        "Two same-length, same-fill decapeptides with different targets, documented with observed masses so the vials remain distinguishable on paper"
      ],
      citations: [
        "Kotani, M., Detheux, M., Vandenbogaerde, A., et al. (2001). 'The metastasis suppressor gene KiSS-1 encodes kisspeptins, the natural ligands of the orphan G protein-coupled receptor GPR54.' Journal of Biological Chemistry, 276(37), 34631-34636. DOI: 10.1074/jbc.M104847200 | PMID: 11457843",
        "Seminara, S. B., Messager, S., Chatzidaki, E. E., et al. (2003). 'The GPR54 gene as a regulator of puberty.' New England Journal of Medicine, 349(17), 1614-1627. DOI: 10.1056/NEJMoa035322 | PMID: 14573733",
        "Chason, R. J., Kang, J. H., Gerkowicz, S. A., et al. (2015). 'GnRH agonist reduces estrogen receptor dimerization in GT1-7 cells: evidence for cross-talk between membrane-initiated estrogen and GnRH signaling.' Molecular and Cellular Endocrinology, 404, 67-74. DOI: 10.1016/j.mce.2015.01.023 | PMID: 25619861"
      ],
      formula: "Blend — no single formula applies; Gonadorelin C55H75N17O13 and Kisspeptin-10 C63H83N17O14",
      molarMass: "Gonadorelin 1182.3 g/mol; Kisspeptin-10 1302.4 g/mol — both ten-residue chains at matched 10 mg fills",
      sequence: "Gonadorelin pGlu-His-Trp-Ser-Tyr-Gly-Leu-Arg-Pro-Gly-NH2, the native GnRH decapeptide; Kisspeptin-10 Tyr-Asn-Trp-Asn-Ser-Phe-Gly-Leu-Arg-Phe-NH2",
      retentionTime: 5.4
    },
    es: {
      abstract: "Reproductive / HPG-Axis suministra gonadorelina (10 mg) y kisspeptina-10 (10 mg) en dos viales liofilizados etiquetados por separado situados en niveles consecutivos de un mismo eje. La kisspeptina-10 actúa corriente arriba en KISS1R, el receptor identificado en 2003 como guardián esencial del eje; la gonadorelina es la propia hormona liberadora de gonadotropinas nativa y no un análogo superagonista sustituido. Un vial impulsa la liberación de lo que contiene el otro, una relación directamente secuencial única entre estos kits. Uso Exclusivo de Investigación.",
      mechanism: "La kisspeptina-10 une KISS1R, el receptor que Kotani y colaboradores identificaron en 2001 como diana de los productos del gen KiSS-1; Seminara y colaboradores establecieron después el papel del receptor como regulador del eje mediante genética de pérdida de función. La gonadorelina es la hormona liberadora de gonadotropinas nativa, un decapéptido con extremo amino de piroglutamato y amida C-terminal, que actúa en el receptor de GnRH. La característica farmacológica definitoria de ese receptor es su respuesta diferencial a exposición pulsátil frente a continua — Chason y colaboradores examinaron la interacción a nivel de receptor en células GT1-7 — y la GnRH nativa se comporta de forma distinta en este aspecto que los análogos superagonistas sustituidos.",
      benefits: [
        "Dos niveles consecutivos de un mismo eje en lugar de dos compuestos paralelos, para que un experimento pueda localizar si un efecto se origina por encima del nivel de GnRH o en él",
        "Gonadorelina suministrada como GnRH nativa y declarada como tal, no como superagonista sustituido cuyo comportamiento bajo exposición sostenida es funcionalmente opuesto",
        "Formación de piroglutamato en el extremo amino de la gonadorelina confirmada en la liberación, ya que una ciclación incompleta da una molécula 17 daltons más pesada que eluye cerca",
        "Nota explícita de que la respuesta del receptor de GnRH depende de la pulsatilidad, así que la exposición continua en pocillo producirá el resultado opuesto al de un protocolo intermitente",
        "Dos decapéptidos de igual longitud y llenado con dianas distintas, documentados con masas observadas para que los viales sigan siendo distinguibles sobre el papel"
      ],
      citations: [
        "Kotani, M., Detheux, M., Vandenbogaerde, A., et al. (2001). 'The metastasis suppressor gene KiSS-1 encodes kisspeptins, the natural ligands of the orphan G protein-coupled receptor GPR54.' Journal of Biological Chemistry, 276(37), 34631-34636. DOI: 10.1074/jbc.M104847200 | PMID: 11457843",
        "Seminara, S. B., Messager, S., Chatzidaki, E. E., et al. (2003). 'The GPR54 gene as a regulator of puberty.' New England Journal of Medicine, 349(17), 1614-1627. DOI: 10.1056/NEJMoa035322 | PMID: 14573733",
        "Chason, R. J., Kang, J. H., Gerkowicz, S. A., et al. (2015). 'GnRH agonist reduces estrogen receptor dimerization in GT1-7 cells: evidence for cross-talk between membrane-initiated estrogen and GnRH signaling.' Molecular and Cellular Endocrinology, 404, 67-74. DOI: 10.1016/j.mce.2015.01.023 | PMID: 25619861"
      ],
      formula: "Blend — no single formula applies; Gonadorelin C55H75N17O13 and Kisspeptin-10 C63H83N17O14",
      molarMass: "Gonadorelin 1182.3 g/mol; Kisspeptin-10 1302.4 g/mol — both ten-residue chains at matched 10 mg fills",
      sequence: "Gonadorelina pGlu-His-Trp-Ser-Tyr-Gly-Leu-Arg-Pro-Gly-NH2, el decapéptido nativo de GnRH; Kisspeptina-10 Tyr-Asn-Trp-Asn-Ser-Phe-Gly-Leu-Arg-Phe-NH2",
      retentionTime: 5.4
    }
  },
  "skin-cosmetic": {
    en: {
      abstract: "Skin & Cosmetic supplies GHK-Cu (50 mg), Glutathione (600 mg) and SNAP-8 (10 mg) as three separately labelled vials spanning three unrelated chemistries — a copper coordination complex, a thiol redox buffer, and a peptide studied against SNARE complex assembly. Two of the three require release assays that peptide purity testing does not cover: copper content determination for GHK-Cu and a free thiol assay for glutathione. Fill sizes span sixtyfold, set by formulation consumption. Supplied for Research Use Only.",
      mechanism: "GHK-Cu is a glycyl-histidyl-lysine tripeptide coordinating copper, and Pickart and Margolina's gene data analysis underpins its study in matrix and regenerative contexts. Glutathione functions through its cysteine thiol as the principal non-protein thiol buffer in the cell and as substrate for glutathione peroxidases and transferases, with Forman and colleagues surveying its protective roles and measurement. SNAP-8 is an eight-residue analog derived from the amino terminal region of SNAP-25, investigated for interference with SNARE complex assembly — the fusion machinery Fasshauer and colleagues reclassified structurally as Q- and R-SNAREs in 1998.",
      benefits: [
        "Two components released on assays that peptide purity testing does not cover — copper content for the coordination complex and free thiol fraction for the redox buffer",
        "A 600 mg glutathione fill sized for concentration-series formulation screening rather than for receptor occupancy, the logic stated rather than left to inference",
        "GHK-Cu supplied with its deep blue colour as a pre-instrument quality indicator, and a written warning that chelating buffers strip the copper without affecting purity readings",
        "SNAP-8 acetylation state confirmed on release, since the unacetylated form circulates under the same product name across the sector",
        "Three unrelated chemistries on one tray — coordination complex, thiol buffer and SNARE-directed peptide — with no shared mechanism to confound attribution"
      ],
      citations: [
        "Pickart, L., & Margolina, A. (2018). 'Regenerative and Protective Actions of the GHK-Cu Peptide in the Light of the New Gene Data.' International Journal of Molecular Sciences, 19(7), 1987. DOI: 10.3390/ijms19071987 | PMID: 29986520",
        "Blanes-Mira, C., Clemente, J., Jodas, G., et al. (2002). 'A synthetic hexapeptide (Argireline) with antiwrinkle activity.' International Journal of Cosmetic Science, 24(5), 303-310. DOI: 10.1046/j.1467-2494.2002.00153.x | PMID: 18498523",
        "Forman, H. J., Zhang, H., & Rinna, A. (2009). 'Glutathione: overview of its protective roles, measurement, and biosynthesis.' Molecular Aspects of Medicine, 30(1-2), 1-12. DOI: 10.1016/j.mam.2008.08.006 | PMID: 18796312"
      ],
      formula: "Blend — no single formula applies; GHK-Cu C14H21CuN6O4 as the copper complex, Glutathione C10H17N3O6S, SNAP-8 C42H72N16O15S",
      molarMass: "GHK-Cu 400.9 g/mol as the complex; Glutathione 307.33 g/mol reduced form; SNAP-8 1073.2 g/mol",
      sequence: "GHK-Cu Gly-His-Lys with a coordinated copper ion; Glutathione gamma-Glu-Cys-Gly; SNAP-8 an eight-residue acetylated analog of the SNAP-25 amino terminal region",
      retentionTime: 4.9
    },
    es: {
      abstract: "Skin & Cosmetic suministra GHK-Cu (50 mg), glutatión (600 mg) y SNAP-8 (10 mg) en tres viales etiquetados por separado que abarcan tres químicas no relacionadas — un complejo de coordinación de cobre, un tampón redox tiólico y un péptido estudiado frente al ensamblaje del complejo SNARE. Dos de los tres requieren ensayos de liberación que el análisis de pureza peptídica no cubre: determinación de contenido de cobre para GHK-Cu y ensayo de tiol libre para el glutatión. Los tamaños de llenado abarcan sesenta veces, fijados por el consumo de formulación. Uso Exclusivo de Investigación.",
      mechanism: "GHK-Cu es un tripéptido glicil-histidil-lisina que coordina cobre, y el análisis de datos génicos de Pickart y Margolina sustenta su estudio en contextos de matriz y regeneración. El glutatión funciona mediante su tiol de cisteína como principal tampón tiólico no proteico de la célula y como sustrato de glutatión peroxidasas y transferasas, con Forman y colaboradores revisando sus funciones protectoras y su medición. SNAP-8 es un análogo de ocho residuos derivado de la región amino-terminal de SNAP-25, investigado por su interferencia con el ensamblaje del complejo SNARE — la maquinaria de fusión que Fasshauer y colaboradores reclasificaron estructuralmente como Q- y R-SNAREs en 1998.",
      benefits: [
        "Dos componentes liberados con ensayos que el análisis de pureza peptídica no cubre — contenido de cobre para el complejo de coordinación y fracción de tiol libre para el tampón redox",
        "Un llenado de 600 mg de glutatión dimensionado para cribado de formulaciones en series de concentración y no para ocupación de receptores, con la lógica declarada en lugar de dejarla a la inferencia",
        "GHK-Cu suministrado con su color azul intenso como indicador de calidad previo al instrumento, y advertencia escrita de que los tampones quelantes arrancan el cobre sin afectar las lecturas de pureza",
        "Estado de acetilación de SNAP-8 confirmado en la liberación, ya que la forma sin acetilar circula bajo el mismo nombre comercial en el sector",
        "Tres químicas no relacionadas en una bandeja — complejo de coordinación, tampón tiólico y péptido dirigido a SNARE — sin mecanismo compartido que confunda la atribución"
      ],
      citations: [
        "Pickart, L., & Margolina, A. (2018). 'Regenerative and Protective Actions of the GHK-Cu Peptide in the Light of the New Gene Data.' International Journal of Molecular Sciences, 19(7), 1987. DOI: 10.3390/ijms19071987 | PMID: 29986520",
        "Blanes-Mira, C., Clemente, J., Jodas, G., et al. (2002). 'A synthetic hexapeptide (Argireline) with antiwrinkle activity.' International Journal of Cosmetic Science, 24(5), 303-310. DOI: 10.1046/j.1467-2494.2002.00153.x | PMID: 18498523",
        "Forman, H. J., Zhang, H., & Rinna, A. (2009). 'Glutathione: overview of its protective roles, measurement, and biosynthesis.' Molecular Aspects of Medicine, 30(1-2), 1-12. DOI: 10.1016/j.mam.2008.08.006 | PMID: 18796312"
      ],
      formula: "Blend — no single formula applies; GHK-Cu C14H21CuN6O4 as the copper complex, Glutathione C10H17N3O6S, SNAP-8 C42H72N16O15S",
      molarMass: "GHK-Cu 400.9 g/mol as the complex; Glutathione 307.33 g/mol reduced form; SNAP-8 1073.2 g/mol",
      sequence: "GHK-Cu Gly-His-Lys con un ion cobre coordinado; Glutatión gamma-Glu-Cys-Gly; SNAP-8, análogo acetilado de ocho residuos de la región amino-terminal de SNAP-25",
      retentionTime: 4.9
    }
  },
  "vascular-immune-protection": {
    en: {
      abstract: "Vascular, Immune & Protection supplies VIP (5 mg), ARA-290 (16 mg) and Thymosin Alpha-1 (10 mg) as three separately labelled lyophilized vials targeting three distinct receptor systems. ARA-290 is notable as a deliberately activity-stripped compound — engineered from the tertiary structure of erythropoietin to retain tissue-protective signaling at the innate repair receptor while removing erythropoietic activity, separating two functions the parent hormone couples. The 16 mg ARA-290 fill is set to a working molar quantity rather than a rounded figure. Supplied for Research Use Only.",
      mechanism: "VIP is a 28-residue peptide acting at VPAC1 and VPAC2, class B receptors it shares with PACAP; Moody and colleagues reviewed the receptor family and the difficulty of achieving subtype selectivity within it. ARA-290 is an eleven-residue peptide derived from a helical region of erythropoietin's tertiary structure — Brines and colleagues showed such nonerythropoietic derivatives retain tissue-protective signaling through the innate repair receptor, a heteromeric assembly of the erythropoietin receptor with the beta common receptor. Thymosin Alpha-1 is an acetylated 28-residue thymic peptide activating dendritic cells through Toll-like receptor signaling.",
      benefits: [
        "ARA-290 as a deliberately activity-stripped tool — engineered to retain tissue-protective signaling while removing the erythropoietic effect that confounds erythropoietin itself",
        "Three distinct receptor systems on one tray — VPAC class B receptors, the innate repair receptor heteromer, and Toll-like receptor signaling — with no shared pathway to confound attribution",
        "A 16 mg ARA-290 fill set to a working molar quantity for an eleven-residue peptide rather than rounded to a conventional marketing figure",
        "Thymosin Alpha-1 released with explicit N-terminal acetylation confirmation, since an unacetylated batch is a different molecule that still passes a purity assay",
        "Written caution that VIP shares its receptors with PACAP and that VPAC1 versus VPAC2 selectivity remains open, so single-compound subtype attribution is unsupported"
      ],
      citations: [
        "Moody, T. W., Nuche-Berenguer, B., & Jensen, R. T. (2016). 'Vasoactive intestinal peptide/pituitary adenylate cyclase activating polypeptide, and their receptors and cancer.' Current Opinion in Endocrinology, Diabetes and Obesity, 23(1), 38-47. DOI: 10.1097/MED.0000000000000218 | PMID: 26702849",
        "Brines, M., Patel, N. S., Villa, P., et al. (2008). 'Nonerythropoietic, tissue-protective peptides derived from the tertiary structure of erythropoietin.' PNAS, 105(31), 10925-10930. DOI: 10.1073/pnas.0805594105 | PMID: 18676614",
        "Romani, L., Bistoni, F., Gaziano, R., et al. (2004). 'Thymosin alpha 1 activates dendritic cells for antifungal Th1 resistance through toll-like receptor signaling.' Blood, 103(11), 4232-4239. DOI: 10.1182/blood-2003-11-4036 | PMID: 14982877"
      ],
      formula: "Blend — no single formula applies; VIP C147H237N43O43S, ARA-290 C51H84N16O21, Thymosin Alpha-1 C129H215N33O55",
      molarMass: "VIP 3326.8 g/mol; ARA-290 1257.3 g/mol; Thymosin Alpha-1 3108.3 g/mol",
      sequence: "VIP, a 28-residue peptide acting at VPAC1 and VPAC2; ARA-290 Pyr-Glu-Gln-Leu-Glu-Arg-Ala-Leu-Asn-Ser-Ser, an eleven-residue erythropoietin-derived peptide; Thymosin Alpha-1, an N-acetylated 28-residue thymic peptide",
      retentionTime: 6.9
    },
    es: {
      abstract: "Vascular, Immune & Protection suministra VIP (5 mg), ARA-290 (16 mg) y timosina alfa-1 (10 mg) en tres viales liofilizados etiquetados por separado dirigidos a tres sistemas de receptores distintos. ARA-290 destaca como compuesto deliberadamente despojado de actividad — diseñado a partir de la estructura terciaria de la eritropoyetina para conservar la señalización protectora de tejidos en el receptor de reparación innata eliminando la actividad eritropoyética, separando dos funciones que la hormona parental acopla. El llenado de 16 mg de ARA-290 se fija a una cantidad molar de trabajo y no a una cifra redondeada. Uso Exclusivo de Investigación.",
      mechanism: "VIP es un péptido de 28 residuos que actúa en VPAC1 y VPAC2, receptores de clase B que comparte con PACAP; Moody y colaboradores revisaron la familia de receptores y la dificultad de lograr selectividad de subtipo dentro de ella. ARA-290 es un péptido de once residuos derivado de una región helicoidal de la estructura terciaria de la eritropoyetina — Brines y colaboradores mostraron que tales derivados no eritropoyéticos conservan la señalización protectora de tejidos mediante el receptor de reparación innata, un ensamblaje heteromérico del receptor de eritropoyetina con el receptor beta común. La timosina alfa-1 es un péptido tímico acetilado de 28 residuos que activa células dendríticas por señalización de receptores tipo Toll.",
      benefits: [
        "ARA-290 como herramienta deliberadamente despojada de actividad — diseñada para conservar la señalización protectora de tejidos eliminando el efecto eritropoyético que confunde a la propia eritropoyetina",
        "Tres sistemas de receptores distintos en una bandeja — receptores VPAC de clase B, el heterómero del receptor de reparación innata y la señalización de receptores tipo Toll — sin vía compartida que confunda la atribución",
        "Un llenado de 16 mg de ARA-290 fijado a una cantidad molar de trabajo para un péptido de once residuos y no redondeado a una cifra comercial convencional",
        "Timosina alfa-1 liberada con confirmación explícita de acetilación N-terminal, ya que un lote sin acetilar es una molécula distinta que aun así supera un ensayo de pureza",
        "Advertencia escrita de que VIP comparte sus receptores con PACAP y que la selectividad VPAC1 frente a VPAC2 sigue abierta, por lo que la atribución de subtipo con un solo compuesto no está respaldada"
      ],
      citations: [
        "Moody, T. W., Nuche-Berenguer, B., & Jensen, R. T. (2016). 'Vasoactive intestinal peptide/pituitary adenylate cyclase activating polypeptide, and their receptors and cancer.' Current Opinion in Endocrinology, Diabetes and Obesity, 23(1), 38-47. DOI: 10.1097/MED.0000000000000218 | PMID: 26702849",
        "Brines, M., Patel, N. S., Villa, P., et al. (2008). 'Nonerythropoietic, tissue-protective peptides derived from the tertiary structure of erythropoietin.' PNAS, 105(31), 10925-10930. DOI: 10.1073/pnas.0805594105 | PMID: 18676614",
        "Romani, L., Bistoni, F., Gaziano, R., et al. (2004). 'Thymosin alpha 1 activates dendritic cells for antifungal Th1 resistance through toll-like receptor signaling.' Blood, 103(11), 4232-4239. DOI: 10.1182/blood-2003-11-4036 | PMID: 14982877"
      ],
      formula: "Blend — no single formula applies; VIP C147H237N43O43S, ARA-290 C51H84N16O21, Thymosin Alpha-1 C129H215N33O55",
      molarMass: "VIP 3326.8 g/mol; ARA-290 1257.3 g/mol; Thymosin Alpha-1 3108.3 g/mol",
      sequence: "VIP, péptido de 28 residuos que actúa en VPAC1 y VPAC2; ARA-290 Pyr-Glu-Gln-Leu-Glu-Arg-Ala-Leu-Asn-Ser-Ser, péptido de once residuos derivado de eritropoyetina; Timosina alfa-1, péptido tímico N-acetilado de 28 residuos",
      retentionTime: 6.9
    }
  },
  "senescence-stack": {
    en: {
      abstract: "Senescence Stack supplies FOXO4-DRI (10 mg) and Epithalon (10 mg) as two separately labelled lyophilized vials. FOXO4-DRI is a D-retro-inverso peptide — every residue the D-enantiomer with the sequence reversed — designed to disrupt the FOXO4 interaction with p53 and drive selective apoptosis in senescent cells. Epithalon is a pineal tetrapeptide studied against telomerase and telomere length endpoints. At 46 residues against four, the two differ roughly fourteenfold in molecular weight at matched fills and pursue opposing interventions. Supplied for Research Use Only.",
      mechanism: "FOXO4-DRI acts by competitive disruption of a protein-protein interaction rather than by receptor binding or enzyme inhibition. Baar and colleagues built it in 2017 as a retro-inverso peptide that interferes with FOXO4 binding to p53, and Bourgeois and colleagues established in 2025 that the intrinsically disordered p53 transactivation domain is the surface both FOXO4 and the compound engage. Displacement drives p53 nuclear exclusion and selective apoptosis in senescent cells while sparing proliferating ones. Epithalon operates on an entirely different axis, studied for telomerase upregulation and alternative telomere lengthening in human cell lines rather than for any protein interaction.",
      benefits: [
        "Chiral amino acid analysis on the FOXO4-DRI certificate, the only assay that separates a genuine all-D retro-inverso peptide from an all-L impostor of identical mass and retention time",
        "A senolytic paired with a replicative-extension compound, framing an experiment as a question about interaction rather than as two versions of one effect",
        "The largest peptide in this catalog at 46 residues, in a different synthesis and handling class from the short chains that dominate this range",
        "Mechanistic precision drawn from 2025 structural work identifying the disordered p53 transactivation domain as the actual binding surface, not merely FOXO4 as a named target",
        "Published counter-evidence disclosed on-page — a 2023 Circulation report where senescent cell elimination worsened outcomes in a pulmonary hypertension model"
      ],
      citations: [
        "Baar, M. P., Brandt, R. M. C., Putavet, D. A., et al. (2017). 'Targeted Apoptosis of Senescent Cells Restores Tissue Homeostasis in Response to Chemotoxicity and Aging.' Cell, 169(1), 132-147.e16. DOI: 10.1016/j.cell.2017.02.031 | PMID: 28340339",
        "Bourgeois, B., Spreitzer, E., Platero-Rochart, D., et al. (2025). 'The disordered p53 transactivation domain is the target of FOXO4 and the senolytic compound FOXO4-DRI.' Nature Communications, 16(1), 5672. DOI: 10.1038/s41467-025-60844-9 | PMID: 40593617",
        "Al-Dulaimi, S., Thomas, R., & Matta, S. (2025). 'Epitalon increases telomere length in human cell lines through telomerase upregulation or ALT activity.' Biogerontology, 26(5), 178. DOI: 10.1007/s10522-025-10315-x | PMID: 40908429 — see published Correction, Biogerontology 27(1):1, DOI: 10.1007/s10522-025-10326-8 | PMID: 41240216"
      ],
      formula: "Blend — no single formula applies; FOXO4-DRI C228H388N86O64 and Epithalon C14H22N4O9",
      molarMass: "FOXO4-DRI 5358 g/mol as a 46-residue all-D peptide; Epithalon 390.35 g/mol — an approximately fourteenfold difference at matched 10 mg fills",
      sequence: "FOXO4-DRI, a 46-residue D-retro-inverso peptide combining a cell-penetrating segment with a FOXO4-derived segment, all residues D-enantiomers in reversed sequence; Epithalon Ala-Glu-Asp-Gly",
      retentionTime: 9.7
    },
    es: {
      abstract: "Senescence Stack suministra FOXO4-DRI (10 mg) y epitalón (10 mg) en dos viales liofilizados etiquetados por separado. FOXO4-DRI es un péptido D-retro-inverso — cada residuo el enantiómero D con la secuencia invertida — diseñado para alterar la interacción de FOXO4 con p53 e inducir apoptosis selectiva en células senescentes. El epitalón es un tetrapéptido pineal estudiado frente a variables de telomerasa y longitud telomérica. Con 46 residuos frente a cuatro, ambos difieren unas catorce veces en peso molecular con llenados iguales y persiguen intervenciones opuestas. Uso Exclusivo de Investigación.",
      mechanism: "FOXO4-DRI actúa por alteración competitiva de una interacción proteína-proteína y no por unión a receptor o inhibición enzimática. Baar y colaboradores lo construyeron en 2017 como péptido retro-inverso que interfiere con la unión de FOXO4 a p53, y Bourgeois y colaboradores establecieron en 2025 que el dominio de transactivación intrínsecamente desordenado de p53 es la superficie que activan tanto FOXO4 como el compuesto. El desplazamiento provoca exclusión nuclear de p53 y apoptosis selectiva en células senescentes preservando las proliferantes. El epitalón opera en un eje completamente distinto, estudiado por sobrerregulación de telomerasa y alargamiento telomérico alternativo en líneas celulares humanas y no por interacción proteica alguna.",
      benefits: [
        "Análisis quiral de aminoácidos en el certificado de FOXO4-DRI, el único ensayo que separa un péptido retro-inverso todo-D genuino de un impostor todo-L de masa y tiempo de retención idénticos",
        "Un senolítico emparejado con un compuesto de extensión replicativa, planteando el experimento como una pregunta sobre interacción y no como dos versiones de un mismo efecto",
        "El péptido más grande de este catálogo con 46 residuos, en una clase de síntesis y manipulación distinta de las cadenas cortas que dominan esta gama",
        "Precisión mecanística tomada de trabajo estructural de 2025 que identifica el dominio de transactivación desordenado de p53 como la superficie real de unión, no solo FOXO4 como diana nombrada",
        "Contraevidencia publicada divulgada en la página — un informe de 2023 en Circulation donde la eliminación de células senescentes empeoró los resultados en un modelo de hipertensión pulmonar"
      ],
      citations: [
        "Baar, M. P., Brandt, R. M. C., Putavet, D. A., et al. (2017). 'Targeted Apoptosis of Senescent Cells Restores Tissue Homeostasis in Response to Chemotoxicity and Aging.' Cell, 169(1), 132-147.e16. DOI: 10.1016/j.cell.2017.02.031 | PMID: 28340339",
        "Bourgeois, B., Spreitzer, E., Platero-Rochart, D., et al. (2025). 'The disordered p53 transactivation domain is the target of FOXO4 and the senolytic compound FOXO4-DRI.' Nature Communications, 16(1), 5672. DOI: 10.1038/s41467-025-60844-9 | PMID: 40593617",
        "Al-Dulaimi, S., Thomas, R., & Matta, S. (2025). 'Epitalon increases telomere length in human cell lines through telomerase upregulation or ALT activity.' Biogerontology, 26(5), 178. DOI: 10.1007/s10522-025-10315-x | PMID: 40908429 — see published Correction, Biogerontology 27(1):1, DOI: 10.1007/s10522-025-10326-8 | PMID: 41240216"
      ],
      formula: "Blend — no single formula applies; FOXO4-DRI C228H388N86O64 and Epithalon C14H22N4O9",
      molarMass: "FOXO4-DRI 5358 g/mol as a 46-residue all-D peptide; Epithalon 390.35 g/mol — an approximately fourteenfold difference at matched 10 mg fills",
      sequence: "FOXO4-DRI, péptido D-retro-inverso de 46 residuos que combina un segmento penetrante de célula con un segmento derivado de FOXO4, todos los residuos enantiómeros D en secuencia invertida; Epitalón Ala-Glu-Asp-Gly",
      retentionTime: 9.7
    }
  },
  "pathway-genetic-optimization-test": {
    en: {
      abstract: "PATHWAY™ Genetic Optimization Test is an at-home buccal swab collection kit that reads a defined panel of existing DNA sequence variants and returns a wellness report across seven areas. It is the only item in this catalog that is not a synthesized compound: nothing is introduced into a biological system, so it has no molecular formula, no purity specification, no mechanism of action and no reconstitution protocol. Samples are analyzed by TruLab Dx, a CLIA-certified partner laboratory. PATHWAY is a wellness and education tool, not a diagnostic, and it is not intended to diagnose, treat, cure, or prevent any disease.",
      mechanism: "No mechanism of action applies. PATHWAY™ is an observational genotyping panel, not an intervention — it measures sequence variants already present in the sample donor's DNA and does not act on any receptor, enzyme or pathway. The seven reported areas are recovery and inflammatory signaling, cognition and neurotransmitter processing, longevity and cellular maintenance, stress and HPA-axis response, metabolism and insulin signaling, food sensitivity, and micronutrient handling. Results are returned as lifestyle, nutrition and supplement considerations. Genetic variants describe population-level associations rather than individual determinations, and the report is explicitly framed as wellness and education rather than as medical findings.",
      benefits: [
        "Seven reported areas from one buccal swab: recovery and inflammatory signaling, cognition and neurotransmitter processing, longevity and cellular maintenance, stress and HPA-axis response, metabolism and insulin signaling, food sensitivity, and micronutrient handling",
        "Room temperature handling at 15°C to 30°C with no cold chain, the only item in this catalog that must not be refrigerated or frozen",
        "Sample analysis performed by TruLab Dx, a CLIA-certified partner laboratory, with the scope of that certification stated rather than implied",
        "Non-invasive cheek swab collection completed in minutes, with prepaid return packaging and a registration code linking sample to account",
        "Explicitly framed as a wellness and education tool rather than a diagnostic, with no claim to diagnose, treat, cure, or prevent any disease"
      ],
      citations: [
        "Centers for Medicare & Medicaid Services. 'Clinical Laboratory Improvement Amendments (CLIA).' 42 CFR Part 493 — the federal program governing laboratory operations, personnel qualifications, quality control and proficiency testing. CLIA regulates how a laboratory operates and does not evaluate the clinical validity of a test's health claims.",
        "No verified primary citation available for this product's specific variant panel — the composition of the panel is proprietary and is not published in the peer-reviewed literature. Recommend a primary literature search for the individual variants disclosed in the delivered report.",
        "Primary literature search recommended — query PubMed for 'direct-to-consumer genetic testing clinical validity', 'genetic wellness panel evidence', and 'buccal swab DNA collection stability' to evaluate the general evidence base for this product class."
      ],
      formula: "Not applicable — this is a DNA sample collection kit, not a chemical compound",
      molarMass: "Not applicable — no molecular species is supplied; the kit contains a swab, a stabilizing collection tube and return packaging",
      sequence: "Not applicable — PATHWAY reads existing DNA sequence variants from the sample donor and supplies no peptide or small molecule",
      retentionTime: 0
    },
    es: {
      abstract: "PATHWAY™ Genetic Optimization Test es un kit de recolección con hisopo bucal para uso en casa que lee un panel definido de variantes de secuencia de ADN existentes y devuelve un informe de bienestar sobre siete áreas. Es el único artículo de este catálogo que no es un compuesto sintetizado: no se introduce nada en un sistema biológico, así que no tiene fórmula molecular, ni especificación de pureza, ni mecanismo de acción, ni protocolo de reconstitución. Las muestras las analiza TruLab Dx, un laboratorio asociado con certificación CLIA. PATHWAY es una herramienta de bienestar y educación, no un diagnóstico, y no está destinada a diagnosticar, tratar, curar ni prevenir enfermedad alguna.",
      mechanism: "No aplica mecanismo de acción alguno. PATHWAY™ es un panel de genotipado observacional, no una intervención — mide variantes de secuencia ya presentes en el ADN del donante de la muestra y no actúa sobre ningún receptor, enzima o vía. Las siete áreas reportadas son recuperación y señalización inflamatoria, cognición y procesamiento de neurotransmisores, longevidad y mantenimiento celular, estrés y respuesta del eje HPA, metabolismo y señalización de insulina, sensibilidad alimentaria y manejo de micronutrientes. Los resultados se devuelven como consideraciones de estilo de vida, nutrición y suplementación. Las variantes genéticas describen asociaciones a nivel poblacional y no determinaciones individuales, y el informe se encuadra explícitamente como bienestar y educación y no como hallazgos médicos.",
      benefits: [
        "Siete áreas reportadas desde un solo hisopo bucal: recuperación y señalización inflamatoria, cognición y procesamiento de neurotransmisores, longevidad y mantenimiento celular, estrés y respuesta del eje HPA, metabolismo y señalización de insulina, sensibilidad alimentaria y manejo de micronutrientes",
        "Manipulación a temperatura ambiente de 15°C a 30°C sin cadena de frío, el único artículo de este catálogo que no debe refrigerarse ni congelarse",
        "Análisis de muestras realizado por TruLab Dx, laboratorio asociado con certificación CLIA, con el alcance de esa certificación declarado y no insinuado",
        "Recolección no invasiva con hisopo de mejilla completada en minutos, con empaque de devolución prepagado y código de registro que vincula muestra y cuenta",
        "Encuadrado explícitamente como herramienta de bienestar y educación y no como diagnóstico, sin pretensión de diagnosticar, tratar, curar ni prevenir enfermedad alguna"
      ],
      citations: [
        "Centers for Medicare & Medicaid Services. 'Clinical Laboratory Improvement Amendments (CLIA).' 42 CFR Part 493 — the federal program governing laboratory operations, personnel qualifications, quality control and proficiency testing. CLIA regulates how a laboratory operates and does not evaluate the clinical validity of a test's health claims.",
        "No verified primary citation available for this product's specific variant panel — the composition of the panel is proprietary and is not published in the peer-reviewed literature. Recommend a primary literature search for the individual variants disclosed in the delivered report.",
        "Primary literature search recommended — query PubMed for 'direct-to-consumer genetic testing clinical validity', 'genetic wellness panel evidence', and 'buccal swab DNA collection stability' to evaluate the general evidence base for this product class."
      ],
      formula: "No aplica — es un kit de recolección de muestras de ADN, no un compuesto químico",
      molarMass: "No aplica — no se suministra especie molecular alguna; el kit contiene un hisopo, un tubo de recolección estabilizador y empaque de devolución",
      sequence: "No aplica — PATHWAY lee variantes de secuencia de ADN existentes del donante de la muestra y no suministra péptido ni molécula pequeña alguna",
      retentionTime: 0
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
