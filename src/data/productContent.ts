// Per-product editorial overrides.
//
// The product page renders a templated FAQ set and Clinical Dossier for every SKU.
// Compounds listed here replace those templates with compound-specific copy written
// around the actual molecular target, so the page carries content that cannot be
// swapped onto another product. Anything not listed falls back to the template.

export interface ProductFaq {
  q: string;
  a: string;
}

export interface ProductDossier {
  /** Research Application Profile — who studies this compound and in which models. */
  applicationProfile: string;
  /** Quality & Purity Assurance — the analytical pipeline specific to this chemistry. */
  qualityAssurance: string;
}

export interface ProductContent {
  faqs: ProductFaq[];
  dossier: ProductDossier;
}

const FIVE_AMINO_1MQ_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale 5-Amino-1MQ Spray?',
      a: 'Every wholesale lot of 5-Amino-1MQ Spray is verified to ≥99.0% purity by reverse-phase HPLC with UV detection at 254 nm and confirmed by LC-MS. Each shipment ships with a batch-specific certificate of analysis. Because 5-Amino-1MQ is a quinolinium salt, our screen specifically covers residual 1-methylnicotinamide, unmethylated 5-aminoquinoline starting material, and residual methylating reagent, alongside standard water content and heavy-metal panels.',
    },
    {
      q: 'Is 5-Amino-1MQ Spray approved for therapeutic use or human consumption?',
      a: 'No. 5-Amino-1MQ Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. No NNMT inhibitor has any approved therapeutic indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale 5-Amino-1MQ Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running NAD+ and metabolic assay panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale 5-Amino-1MQ Spray supplied in?',
      a: '5-Amino-1MQ Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 50 mg per unit. The amber glass matters here: the aminoquinolinium chromophore absorbs in the near-UV and photodegrades under ambient light. Headspace is nitrogen-purged before capping to limit oxidation of the free aromatic amine, and no reconstitution step is required before use.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for 5-Amino-1MQ Spray?',
      a: 'Store 5-Amino-1MQ Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 60 days. Do not freeze: the solvent system can crystallize and repeated freeze-thaw cycles concentrate the quinolinium salt at the ice boundary, which shifts the assayed concentration. Brief excursions to 15°C to 25°C (59°F to 77°F) during transit are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for 5-Amino-1MQ Spray?',
      a: '5-Amino-1MQ is a substrate-competitive inhibitor of nicotinamide N-methyltransferase (NNMT, EC 2.1.1.1, UniProt P40261). NNMT transfers a methyl group from S-adenosyl-L-methionine to nicotinamide, producing 1-methylnicotinamide and S-adenosylhomocysteine. By occupying the nicotinamide pocket, 5-Amino-1MQ closes that exit route, so free nicotinamide is instead routed through NAMPT and NMNAT1/2/3 back into NAD+ (KEGG map00760). The resulting rise in the NAD+/NADH ratio increases flux through SIRT1 and SIRT3 and the LKB1/AMPK axis, with PGC-1α deacetylation as a downstream readout. This is enzyme inhibition, not receptor agonism, and it also shifts the cellular SAM/SAH methyl-donor ratio.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale 5-Amino-1MQ Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary NAD+ pathway research compounds. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale 5-Amino-1MQ Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the photolabile aminoquinolinium core against oxidation. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Metabolic research groups, muscle physiology labs, and NAD+ biology programs are the primary users of 5-Amino-1MQ. A cell biology lab running 3T3-L1 adipocyte differentiation assays will apply it to ask whether suppressing NNMT enzymatic activity alters lipid droplet accumulation and adipogenic gene expression, using intracellular 1-methylnicotinamide by LC-MS/MS as the pharmacodynamic readout. Skeletal muscle groups took a different route after Neelakantan et al. (2019) reported that NNMT inhibition reactivates senescent Pax7+ satellite cells in aged mice, and now use the compound in myoblast and myotube cultures to separate NAD+-dependent from NAD+-independent effects. It also serves as the pharmacological counterpart to NNMT siRNA knockdown: where the Kraus 2014 Nature work silenced the gene, 5-Amino-1MQ inhibits the enzyme, letting a lab test whether both approaches converge on the same phenotype.',
    qualityAssurance:
      'Because 5-Amino-1MQ is a permanently charged quinolinium cation rather than a peptide, the analytical pipeline differs from our lyophilized catalog. It runs on reverse-phase HPLC with an ion-pairing mobile phase to give reproducible retention around 4.2 minutes, with UV detection at 254 nm exploiting the aminoquinoline chromophore. LC-MS confirms identity on the m/z 159.1 cation in positive-ion mode. Three degradants get watched: unmethylated 5-aminoquinoline from incomplete alkylation, N-oxide from oxidation of the ring nitrogen, and acetylated amine from solvent carryover. The solution format sidesteps a real problem with the powder, since quinolinium halide salts are hygroscopic and cake in the vial, producing solvation variance between reconstitutions. Sterile filtration at 0.22 µm, nitrogen purge, and amber glass then hold the assayed concentration stable across the stated shelf life.',
  },
};

const FIVE_AMINO_1MQ_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de 5-Amino-1MQ Spray al por mayor?',
      a: 'Cada lote mayorista de 5-Amino-1MQ Spray se verifica a una pureza ≥99.0% mediante HPLC de fase reversa con detección UV a 254 nm y se confirma por LC-MS. Cada envío incluye un certificado de análisis específico del lote. Como 5-Amino-1MQ es una sal de quinolinio, nuestro cribado cubre específicamente la 1-metilnicotinamida residual, la 5-aminoquinolina de partida sin metilar y el reactivo metilante residual, además de los paneles estándar de humedad y metales pesados.',
    },
    {
      q: '¿Está aprobado 5-Amino-1MQ Spray para uso terapéutico o consumo humano?',
      a: 'No. 5-Amino-1MQ Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ningún inhibidor de NNMT cuenta con una indicación terapéutica aprobada.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para 5-Amino-1MQ Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de ensayos metabólicos y de NAD+, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra 5-Amino-1MQ Spray al por mayor?',
      a: '5-Amino-1MQ Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 50 mg por unidad. El vidrio ámbar cumple una función concreta: el cromóforo de aminoquinolinio absorbe en el UV cercano y se fotodegrada con la luz ambiental. El espacio de cabeza se purga con nitrógeno antes del sellado para limitar la oxidación de la amina aromática libre, y no se requiere reconstitución previa al uso.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad recomendados para 5-Amino-1MQ Spray?',
      a: 'Almacene 5-Amino-1MQ Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz; las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, utilice la unidad dentro de 60 días. No congelar: el sistema solvente puede cristalizar y los ciclos repetidos de congelación y descongelación concentran la sal de quinolinio en el frente de hielo, lo que altera la concentración analizada. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F) durante el tránsito.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para 5-Amino-1MQ Spray?',
      a: '5-Amino-1MQ es un inhibidor competitivo con el sustrato de la nicotinamida N-metiltransferasa (NNMT, EC 2.1.1.1, UniProt P40261). La NNMT transfiere un grupo metilo desde S-adenosil-L-metionina a la nicotinamida, produciendo 1-metilnicotinamida y S-adenosilhomocisteína. Al ocupar el bolsillo de nicotinamida, 5-Amino-1MQ cierra esa vía de salida, de modo que la nicotinamida libre se redirige por NAMPT y NMNAT1/2/3 de vuelta hacia NAD+ (KEGG map00760). El aumento resultante de la relación NAD+/NADH incrementa el flujo por SIRT1 y SIRT3 y por el eje LKB1/AMPK, con la desacetilación de PGC-1α como lectura secundaria. Es inhibición enzimática, no agonismo de receptor, y además modifica la relación celular SAM/SAH de donadores de metilo.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de envase o formulaciones personalizadas de 5-Amino-1MQ Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos complementarios de investigación de la vía NAD+. Contacte a nuestro equipo de ventas corporativas indicando concentración objetivo y número de unidades.',
    },
    {
      q: '¿Cómo se empaca y envía 5-Amino-1MQ Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen el núcleo fotolábil de aminoquinolinio frente a la oxidación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de investigación metabólica, los laboratorios de fisiología muscular y los programas de biología del NAD+ son los principales usuarios de 5-Amino-1MQ. Un laboratorio de biología celular que ejecuta ensayos de diferenciación de adipocitos 3T3-L1 lo aplica para preguntar si la supresión de la actividad enzimática de NNMT altera la acumulación de gotas lipídicas y la expresión de genes adipogénicos, usando la 1-metilnicotinamida intracelular por LC-MS/MS como lectura farmacodinámica. Los grupos de músculo esquelético tomaron otro camino tras el reporte de Neelakantan et al. (2019) sobre la reactivación de células satélite Pax7+ senescentes en ratones envejecidos, y hoy emplean el compuesto en cultivos de mioblastos y miotubos para separar efectos dependientes e independientes de NAD+. También funciona como contraparte farmacológica del silenciamiento de NNMT con siRNA: donde el trabajo de Kraus (Nature, 2014) silenció el gen, 5-Amino-1MQ inhibe la enzima, lo que permite verificar si ambos enfoques convergen en el mismo fenotipo.',
    qualityAssurance:
      'Como 5-Amino-1MQ es un catión de quinolinio permanentemente cargado y no un péptido, su cadena analítica difiere del resto de nuestro catálogo liofilizado. Se analiza por HPLC de fase reversa con fase móvil de par iónico, lo que da una retención reproducible cercana a 4.2 minutos, con detección UV a 254 nm aprovechando el cromóforo de aminoquinolina. La LC-MS confirma la identidad sobre el catión m/z 159.1 en modo de iones positivos. Se vigilan tres degradantes: 5-aminoquinolina sin metilar por alquilación incompleta, el N-óxido por oxidación del nitrógeno del anillo, y la amina acetilada por arrastre de solvente. El formato en solución evita un problema real del polvo, ya que las sales de haluro de quinolinio son higroscópicas y se apelmazan en el vial, generando variación de solvatación entre reconstituciones. La filtración estéril a 0.22 µm, la purga con nitrógeno y el vidrio ámbar mantienen estable la concentración analizada durante la vida útil declarada.',
  },
};

const TIRZEPATIDE_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Tirzepatide Spray?',
      a: 'Every wholesale lot of Tirzepatide Spray is verified to \u226599.0% purity by reverse-phase HPLC with UV detection at 214 nm and confirmed by LC-MS on the multiply-charged envelope. Each shipment carries a batch-specific certificate of analysis. Because Tirzepatide is a 39-residue lipidated peptide, our screen targets deletion sequences at the two Aib positions, des-lipid peptide lacking the C20 diacid side chain, Met-free oxidation products at Trp25, and residual TFA from purification.',
    },
    {
      q: 'Is Tirzepatide Spray approved for therapeutic use or human consumption?',
      a: 'No. Tirzepatide Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. This RUO material is not a pharmaceutical product and holds no approved indication in any jurisdiction.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Tirzepatide Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running incretin receptor assay panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale Tirzepatide Spray supplied in?',
      a: 'Tirzepatide Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 10 mg or 20 mg per unit. The formulation is buffered near pH 7.4, where the C20 fatty diacid side chain keeps the peptide soluble without organic co-solvent. Headspace is nitrogen-purged before capping to limit Trp and Met oxidation, and no reconstitution step is required.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Tirzepatide Spray?',
      a: 'Store Tirzepatide Spray refrigerated at 2\u00b0C to 8\u00b0C (36\u00b0F to 46\u00b0F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 30 days. Do not freeze: lipidated peptides like Tirzepatide self-associate into micellar aggregates at the ice interface, and repeated freeze-thaw cycles drive irreversible fibrillation that no filtration step recovers. Brief transit excursions to 15\u00b0C to 25\u00b0C (59\u00b0F to 77\u00b0F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Tirzepatide Spray?',
      a: 'Tirzepatide is a unimolecular dual agonist at two class B1 G protein-coupled receptors: the GIP receptor (GIPR, UniProt Q99835) and the GLP-1 receptor (GLP-1R, UniProt P43220). Both couple through G\u03b1s to adenylyl cyclase, raising cAMP and activating PKA and Epac2. What separates Tirzepatide from Semaglutide is imbalance and bias. Willard et al. (2020) showed it behaves as a full agonist at GIPR but only a partial agonist at GLP-1R, and at GLP-1R it is biased toward cAMP generation over \u03b2-arrestin recruitment. Reduced \u03b2-arrestin coupling means less receptor internalization and slower desensitization. The Lys20 \u03b3Glu-2\u00d7AEEA-eicosanedioic acid conjugate drives albumin binding rather than receptor contact.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Tirzepatide Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary incretin research compounds such as Cagrilintide. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale Tirzepatide Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the oxidation-sensitive Trp25 residue and the peptide backbone against aggregation. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Metabolic endocrinology groups, islet biology labs, and GPCR pharmacology programs are the primary users of Tirzepatide. A receptor pharmacology lab running HEK293 cells stably expressing human GIPR or GLP-1R will use it in cAMP accumulation assays (HTRF or GloSensor) to build concentration-response curves and quantify the imbalance Willard et al. (2020) described: full efficacy at GIPR, partial at GLP-1R. Islet groups take a different route, applying it to isolated murine or human islets in static incubation and perifusion to measure glucose-stimulated insulin secretion at 2.8 mM versus 16.7 mM glucose. A third question drives \u03b2-arrestin recruitment work in BRET or PathHunter systems: does biased signaling at GLP-1R actually translate into slower receptor internalization? Tirzepatide is the reference tool compound for asking whether dual incretin engagement beats selective GLP-1R agonism.',
    qualityAssurance:
      'Tirzepatide is a 39-residue synthetic peptide carrying two Aib residues and a C20 fatty diacid conjugate, so its analytical pipeline differs sharply from unmodified peptides. The lipidation makes it strongly hydrophobic, eluting late on reverse-phase C18 around 12.4 minutes under a standard acetonitrile-TFA gradient, and that late retention is itself an identity check. LC-MS confirms the 4813 Da mass through its multiply-charged envelope rather than a single molecular ion, with the +5 and +6 states dominant. Four degradants are watched: des-lipid peptide from incomplete acylation, Aib deletion sequences from sterically hindered couplings, Trp25 oxidation, and Asp9 isomerization. The pre-dissolved format removes a genuine problem with the lyophilized cake, which redissolves inconsistently because the C20 chain promotes micelle formation at the powder interface.',
  },
};

const TIRZEPATIDE_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Tirzepatide Spray al por mayor?',
      a: 'Cada lote mayorista de Tirzepatide Spray se verifica a una pureza ≥99.0% mediante HPLC de fase reversa con detección UV a 214 nm y se confirma por LC-MS sobre la envolvente de carga múltiple. Cada envío incluye un certificado de análisis específico del lote. Como la tirzepatida es un péptido lipidado de 39 residuos, nuestro cribado apunta a las secuencias de deleción en las dos posiciones Aib, al péptido sin la cadena lateral de diácido C20, a los productos de oxidación en Trp25 y al TFA residual de la purificación.',
    },
    {
      q: '¿Está aprobado Tirzepatide Spray para uso terapéutico o consumo humano?',
      a: 'No. Tirzepatide Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Este material RUO no es un producto farmacéutico y carece de indicación aprobada en cualquier jurisdicción.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Tirzepatide Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de ensayos de receptores de incretinas, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra Tirzepatide Spray al por mayor?',
      a: 'Tirzepatide Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 10 mg o 20 mg por unidad. La formulación se tampona cerca de pH 7.4, donde la cadena lateral de diácido graso C20 mantiene el péptido soluble sin codisolvente orgánico. El espacio de cabeza se purga con nitrógeno antes del sellado para limitar la oxidación de Trp y Met, y no se requiere reconstitución.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Tirzepatide Spray?',
      a: 'Almacene Tirzepatide Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 30 días. No congelar: los péptidos lipidados como la tirzepatida se autoasocian en agregados micelares en la interfaz del hielo, y los ciclos repetidos de congelación-descongelación provocan una fibrilación irreversible que ninguna filtración recupera. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F) durante el tránsito.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Tirzepatide Spray?',
      a: 'La tirzepatida es un agonista dual unimolecular sobre dos receptores acoplados a proteínas G de clase B1: el receptor de GIP (GIPR, UniProt Q99835) y el receptor de GLP-1 (GLP-1R, UniProt P43220). Ambos se acoplan vía Gαs a la adenilato ciclasa, elevando el cAMP y activando PKA y Epac2. Lo que separa a la tirzepatida de la semaglutida es el desequilibrio y el sesgo. Willard et al. (2020) demostraron que actúa como agonista completo en GIPR pero solo parcial en GLP-1R, y que en GLP-1R muestra sesgo hacia la generación de cAMP frente al reclutamiento de β-arrestina. Un menor acoplamiento a β-arrestina implica menos internalización del receptor y una desensibilización más lenta. El conjugado γGlu-2×AEEA-ácido eicosanodioico en Lys20 impulsa la unión a albúmina, no el contacto con el receptor.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Tirzepatide Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos de investigación de incretinas complementarios como la cagrilintida. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Tirzepatide Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen el residuo Trp25 sensible a la oxidación y el esqueleto peptídico frente a la agregación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de endocrinología metabólica, los laboratorios de biología de islotes y los programas de farmacología de GPCR son los principales usuarios de la tirzepatida. Un laboratorio de farmacología de receptores que trabaja con células HEK293 que expresan de forma estable GIPR o GLP-1R humanos la emplea en ensayos de acumulación de cAMP (HTRF o GloSensor) para construir curvas concentración-respuesta y cuantificar el desequilibrio descrito por Willard et al. (2020): eficacia completa en GIPR, parcial en GLP-1R. Los grupos de islotes toman otro camino y la aplican a islotes murinos o humanos aislados, en incubación estática y perifusión, para medir la secreción de insulina estimulada por glucosa a 2.8 mM frente a 16.7 mM. Una tercera pregunta impulsa el trabajo de reclutamiento de β-arrestina en sistemas BRET o PathHunter: ¿el sesgo de señalización en GLP-1R se traduce realmente en una internalización más lenta del receptor? La tirzepatida es el compuesto de referencia para preguntar si el compromiso dual de incretinas supera al agonismo selectivo de GLP-1R.',
    qualityAssurance:
      'La tirzepatida es un péptido sintético de 39 residuos con dos residuos Aib y un conjugado de diácido graso C20, por lo que su cadena analítica difiere marcadamente de la de los péptidos sin modificar. La lipidación la hace fuertemente hidrofóbica y eluye tarde en fase reversa C18, cerca de 12.4 minutos bajo un gradiente estándar de acetonitrilo-TFA, y esa retención tardía constituye por sí misma una verificación de identidad. La LC-MS confirma la masa de 4813 Da a través de su envolvente de carga múltiple y no de un único ión molecular, con los estados +5 y +6 dominantes. Se vigilan cuatro degradantes: el péptido sin lípido por acilación incompleta, las secuencias de deleción de Aib por acoplamientos estéricamente impedidos, la oxidación de Trp25 y la isomerización de Asp9. El formato predisuelto elimina un problema real del liofilizado, que se redisuelve de forma inconsistente porque la cadena C20 promueve la formación de micelas en la interfaz del polvo.',
  },
};

const SEMAGLUTIDE_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Semaglutide Spray?',
      a: 'Every wholesale lot of Semaglutide Spray is verified to ≥99.0% purity by reverse-phase HPLC with UV detection at 214 nm and confirmed by LC-MS across the multiply-charged envelope. Each shipment carries a batch-specific certificate of analysis. Because Semaglutide is an acylated GLP-1 analogue, our screen targets four things specifically: des-acyl peptide lacking the C18 octadecanedioic chain, Aib8 deletion sequences, Trp31 oxidation products, and the bis-acylated impurity that appears whenever the Lys34→Arg substitution is incomplete.',
    },
    {
      q: 'Is Semaglutide Spray approved for therapeutic use or human consumption?',
      a: 'No. Semaglutide Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. This RUO material is not a pharmaceutical product and carries no approved indication in any jurisdiction.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Semaglutide Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running GLP-1 receptor assay panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale Semaglutide Spray supplied in?',
      a: 'Semaglutide Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 5 mg, 10 mg, 20 mg, or 30 mg per unit. The formulation is buffered near pH 7.4, where the C18 diacid side chain keeps the analogue soluble without organic co-solvent. Headspace is nitrogen-purged before capping to protect the Trp31 indole ring from oxidation, and no reconstitution step is required.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Semaglutide Spray?',
      a: 'Store Semaglutide Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 30 days. Do not freeze: acylated GLP-1 analogues self-associate into oligomers at the ice interface, and repeated freeze-thaw cycles seed beta-sheet fibrils that no filtration step reverses. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Semaglutide Spray?',
      a: 'Semaglutide is a selective agonist at the glucagon-like peptide-1 receptor (GLP-1R, UniProt P43220), a class B1 G protein-coupled receptor, and it engages no other incretin receptor. Binding drives Gαs coupling to adenylyl cyclase, raising cAMP and activating both PKA and Epac2, which closes ATP-sensitive potassium channels, opens voltage-gated Ca²⁺ channels, and triggers glucose-dependent insulin granule exocytosis (KEGG hsa04911). Three engineered changes define the molecule: an Aib8 substitution that blocks DPP-4 cleavage, a Lys34→Arg swap that confines acylation to Lys26, and a γGlu-2×AEEA-linked C18 diacid that binds serum albumin. Unlike Tirzepatide, which also activates GIPR, Semaglutide is a balanced GLP-1R-selective agonist.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Semaglutide Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary metabolic research compounds such as Cagrilintide. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale Semaglutide Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the oxidation-sensitive Trp31 residue and guard the peptide backbone against aggregation. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Metabolic endocrinology groups, islet biology labs, and neuroscience programs studying energy balance are the primary users of Semaglutide. A GPCR pharmacology lab running HEK293 cells stably expressing human GLP-1R will use it in cAMP accumulation assays (HTRF or GloSensor) as the balanced-agonist reference against which biased ligands are scored — it is the control Tirzepatide gets compared to. Islet groups apply it to isolated murine and human islets in perifusion, measuring glucose-stimulated insulin secretion at 2.8 mM versus 16.7 mM glucose to confirm the response stays glucose-dependent. Neuroscience labs took a different direction after Gabery et al. (2020) mapped Semaglutide access to circumventricular organs, notably the area postrema and subfornical organ, and now use c-Fos activation mapping to trace distributed hindbrain and hypothalamic circuits.',
    qualityAssurance:
      'Semaglutide is an acylated 31-residue GLP-1 analogue engineered with an Aib8 substitution to prevent enzymatic degradation. Because of its lipophilic C18 side chain, its analytical pipeline requires reverse-phase C18 HPLC retention checks and LC-MS mass verification at 4113.58 Da. Quality control protocols specifically monitor for des-acyl impurities, oxidation products, and incomplete acylation to ensure maximum batch-to-batch reproducibility.',
  },
};

const SEMAGLUTIDE_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Semaglutide Spray al por mayor?',
      a: 'Cada lote mayorista de Semaglutide Spray se verifica a una pureza ≥99.0% mediante HPLC de fase reversa con detección UV a 214 nm y se confirma por LC-MS sobre la envolvente de carga múltiple. Cada envío incluye un certificado de análisis específico del lote. Como la semaglutida es un análogo acilado de GLP-1, nuestro cribado apunta específicamente a cuatro elementos: el péptido sin la cadena C18 de ácido octadecanodioico, las secuencias de deleción de Aib8, los productos de oxidación de Trp31 y la impureza bis-acilada que aparece cuando la sustitución Lys34→Arg es incompleta.',
    },
    {
      q: '¿Está aprobado Semaglutide Spray para uso terapéutico o consumo humano?',
      a: 'No. Semaglutide Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Este material RUO no es un producto farmacéutico y carece de indicación aprobada en cualquier jurisdicción.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Semaglutide Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de ensayos del receptor de GLP-1, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra Semaglutide Spray al por mayor?',
      a: 'Semaglutide Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 5 mg, 10 mg, 20 mg o 30 mg por unidad. La formulación se tampona cerca de pH 7.4, donde la cadena lateral de diácido C18 mantiene el análogo soluble sin codisolvente orgánico. El espacio de cabeza se purga con nitrógeno antes del sellado para proteger el anillo indólico de Trp31 frente a la oxidación, y no se requiere reconstitución.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Semaglutide Spray?',
      a: 'Almacene Semaglutide Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 30 días. No congelar: los análogos acilados de GLP-1 se autoasocian en oligómeros en la interfaz del hielo, y los ciclos repetidos de congelación-descongelación nuclean fibrillas de lámina beta que ninguna filtración revierte. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F) durante el tránsito.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Semaglutide Spray?',
      a: 'La semaglutida es un agonista selectivo del receptor del péptido similar al glucagón-1 (GLP-1R, UniProt P43220), un receptor acoplado a proteínas G de clase B1, y no activa ningún otro receptor de incretinas. Su unión impulsa el acoplamiento a Gαs y a la adenilato ciclasa, elevando el cAMP y activando PKA y Epac2, lo que cierra los canales de potasio sensibles a ATP, abre los canales de Ca²⁺ dependientes de voltaje y desencadena la exocitosis de gránulos de insulina dependiente de glucosa (KEGG hsa04911). Tres cambios de ingeniería definen la molécula: una sustitución Aib8 que bloquea la escisión por DPP-4, un cambio Lys34→Arg que confina la acilación a Lys26, y un diácido C18 unido por γGlu-2×AEEA que se une a la albúmina sérica. A diferencia de la tirzepatida, que también activa GIPR, la semaglutida es un agonista balanceado y selectivo de GLP-1R.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Semaglutide Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos de investigación metabólica complementarios como la cagrilintida. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Semaglutide Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen el residuo Trp31 sensible a la oxidación y resguardan el esqueleto peptídico frente a la agregación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de endocrinología metabólica, los laboratorios de biología de islotes y los programas de neurociencia que estudian el balance energético son los principales usuarios de la semaglutida. Un laboratorio de farmacología de GPCR que trabaja con células HEK293 que expresan de forma estable GLP-1R humano la emplea en ensayos de acumulación de cAMP (HTRF o GloSensor) como referencia de agonista balanceado frente a la cual se puntúan los ligandos sesgados: es el control con el que se compara la tirzepatida. Los grupos de islotes la aplican a islotes murinos y humanos aislados en perifusión, midiendo la secreción de insulina estimulada por glucosa a 2.8 mM frente a 16.7 mM para confirmar que la respuesta sigue siendo dependiente de glucosa. Los laboratorios de neurociencia tomaron otro rumbo tras el mapeo de Gabery et al. (2020) del acceso de la semaglutida a los órganos circunventriculares, en particular el área postrema y el órgano subfornical, y hoy usan mapeo de activación de c-Fos para trazar circuitos distribuidos del tronco encefálico y del hipotálamo.',
    qualityAssurance:
      'La semaglutida es un análogo acilado de GLP-1 de 31 residuos diseñado con una sustitución Aib8 para prevenir la degradación enzimática. Debido a su cadena lateral lipofílica C18, su cadena analítica requiere verificaciones de retención por HPLC en fase reversa C18 y verificación de masa por LC-MS a 4113.58 Da. Los protocolos de control de calidad monitorean específicamente las impurezas de des-acilo, los productos de oxidación y la acilación incompleta para garantizar la máxima reproducibilidad lote a lote.',
  },
};

const RETATRUTIDE_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Retatrutide Spray?',
      a: 'Every wholesale lot of Retatrutide Spray is verified to ≥99.0% purity by reverse-phase HPLC and confirmed by LC-MS against the expected intact mass. Each shipment carries a batch-specific certificate of analysis. Because Retatrutide is a fatty-acid-conjugated peptide, the screen focuses on three things competitors often skip: incompletely conjugated peptide missing its lipid arm, truncated sequences from the sterically hindered coupling steps, and oxidation at the single tryptophan residue.',
    },
    {
      q: 'Is Retatrutide Spray approved for therapeutic use or human consumption?',
      a: 'No. Retatrutide Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. No triple-hormone receptor agonist holds an approved indication in any jurisdiction.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Retatrutide Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running incretin and glucagon receptor assay panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale Retatrutide Spray supplied in?',
      a: 'Retatrutide Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 10 mg, 20 mg, 30 mg, or 60 mg per unit. The formulation is buffered near physiological pH, where the fatty-acid side chain keeps the peptide in solution without an organic co-solvent. Headspace is nitrogen-purged before capping to limit oxidation, and no reconstitution step is required.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Retatrutide Spray?',
      a: 'Store Retatrutide Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 30 days. Do not freeze: lipid-conjugated peptides concentrate and self-associate at the ice boundary, and repeated freeze-thaw cycles seed aggregates that filtration cannot reverse. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Retatrutide Spray?',
      a: 'Retatrutide is a single 39-amino-acid peptide that activates three receptors at once: the GLP-1 receptor, the GIP receptor, and the glucagon receptor. All three are class B G protein-coupled receptors that raise intracellular cAMP and engage protein kinase A, but each drives a different downstream program. The GLP-1 and GIP arms converge on glucose-dependent insulin release from pancreatic beta cells. The glucagon arm is what sets this compound apart — it engages hepatic glucagon receptors, adding an energy-expenditure and hepatic lipid-handling component that neither Semaglutide nor Tirzepatide provides. Coskun and colleagues reported the potency ranking is led by the GIP receptor, with balanced but lower activity at the other two.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Retatrutide Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary metabolic research compounds such as Cagrilintide. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale Retatrutide Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the oxidation-sensitive tryptophan residue and guard the peptide against aggregation. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Metabolic endocrinology groups and receptor pharmacology labs are the primary users of Retatrutide, and most of them come to it with one question: what does the glucagon receptor arm actually add? A pharmacology lab running three parallel cell lines — each stably expressing one of the human GLP-1, GIP, or glucagon receptors — will use it to build separate cAMP concentration-response curves and measure how the three potencies relate. That side-by-side design is the whole point, because Semaglutide hits one receptor and Tirzepatide hits two, so Retatrutide is the only tool that isolates the third. Islet groups take it into glucose-stimulated insulin secretion work on isolated islets, while hepatocyte and adipocyte labs use it to probe the energy-expenditure and lipid-handling questions the glucagon arm raises.',
    qualityAssurance:
      'Retatrutide is a fatty-acid-conjugated peptide, and that lipid arm shapes the entire analytical approach. It makes the molecule strongly hydrophobic, so it elutes late on a reverse-phase column, and that late retention window is itself a useful identity check — an unconjugated impurity comes off noticeably earlier and is easy to spot. LC-MS confirms the intact molecular weight, distinguishing correctly assembled material from peptide that never received its lipid. Three degradation routes are monitored across the shelf life: oxidation at the single tryptophan residue, deamidation, and truncated sequences left behind by the sterically hindered coupling steps. Supplying the compound pre-dissolved sidesteps a real problem with the powder form, which redissolves inconsistently because the lipid promotes clumping at the surface of the cake.',
  },
};

const RETATRUTIDE_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Retatrutide Spray al por mayor?',
      a: 'Cada lote mayorista de Retatrutide Spray se verifica a una pureza ≥99.0% por HPLC de fase reversa y se confirma por LC-MS frente a la masa intacta esperada. Cada envío incluye un certificado de análisis específico del lote. Como la retatrutida es un péptido conjugado con un ácido graso, el cribado se concentra en tres puntos que la competencia suele omitir: el péptido sin su brazo lipídico por conjugación incompleta, las secuencias truncadas de los acoplamientos estéricamente impedidos, y la oxidación del único residuo de triptófano.',
    },
    {
      q: '¿Está aprobado Retatrutide Spray para uso terapéutico o consumo humano?',
      a: 'No. Retatrutide Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ningún agonista triple de receptores hormonales cuenta con una indicación aprobada en ninguna jurisdicción.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Retatrutide Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de ensayos de receptores de incretinas y de glucagón, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra Retatrutide Spray al por mayor?',
      a: 'Retatrutide Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 10 mg, 20 mg, 30 mg o 60 mg por unidad. La formulación se tampona cerca del pH fisiológico, donde la cadena lateral de ácido graso mantiene el péptido en solución sin codisolvente orgánico. El espacio de cabeza se purga con nitrógeno antes del sellado para limitar la oxidación, y no se requiere reconstitución.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Retatrutide Spray?',
      a: 'Almacene Retatrutide Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 30 días. No congelar: los péptidos conjugados con lípidos se concentran y se autoasocian en la frontera del hielo, y los ciclos repetidos nuclean agregados que la filtración no revierte. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F) durante el tránsito.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Retatrutide Spray?',
      a: 'La retatrutida es un único péptido de 39 aminoácidos que activa tres receptores a la vez: el receptor de GLP-1, el receptor de GIP y el receptor de glucagón. Los tres son receptores acoplados a proteínas G de clase B que elevan el cAMP intracelular y activan la proteína quinasa A, pero cada uno impulsa un programa distinto. Los brazos de GLP-1 y GIP convergen en la liberación de insulina dependiente de glucosa desde las células beta pancreáticas. El brazo de glucagón es lo que distingue a este compuesto: activa receptores de glucagón hepáticos y añade un componente de gasto energético y manejo lipídico hepático que ni la semaglutida ni la tirzepatida aportan. Coskun y colaboradores reportaron que la potencia está encabezada por el receptor de GIP, con actividad balanceada pero menor en los otros dos.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Retatrutide Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos de investigación metabólica complementarios como la cagrilintida. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Retatrutide Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen el residuo de triptófano sensible a la oxidación y resguardan el péptido frente a la agregación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de endocrinología metabólica y los laboratorios de farmacología de receptores son los principales usuarios de la retatrutida, y la mayoría llega con una pregunta: ¿qué aporta realmente el brazo del receptor de glucagón? Un laboratorio de farmacología que trabaja con tres líneas celulares en paralelo, cada una expresando de forma estable el receptor humano de GLP-1, de GIP o de glucagón, la emplea para construir curvas separadas de concentración-respuesta de cAMP y medir cómo se relacionan las tres potencias. Ese diseño comparativo es justamente el punto, porque la semaglutida activa un receptor y la tirzepatida dos, de modo que la retatrutida es la única herramienta que aísla el tercero. Los grupos de islotes la llevan a estudios de secreción de insulina estimulada por glucosa, mientras que los laboratorios de hepatocitos y adipocitos la usan para explorar las preguntas de gasto energético y manejo lipídico que plantea el brazo de glucagón.',
    qualityAssurance:
      'La retatrutida es un péptido conjugado con un ácido graso, y ese brazo lipídico define todo el enfoque analítico. Vuelve la molécula fuertemente hidrofóbica, por lo que eluye tarde en una columna de fase reversa, y esa ventana de retención tardía constituye por sí misma una verificación de identidad útil: una impureza sin conjugar sale notablemente antes y es fácil de detectar. La LC-MS confirma el peso molecular intacto y distingue el material correctamente ensamblado del péptido que nunca recibió su lípido. Se vigilan tres rutas de degradación durante la vida útil: la oxidación del único residuo de triptófano, la desamidación y las secuencias truncadas que dejan los pasos de acoplamiento estéricamente impedidos. Suministrar el compuesto predisuelto evita un problema real del polvo, que se redisuelve de forma inconsistente porque el lípido favorece el apelmazamiento en la superficie del liofilizado.',
  },
};

const THYMOSIN_ALPHA_1_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Thymosin Alpha-1 Spray?',
      a: 'Every wholesale lot of Thymosin Alpha-1 Spray is verified to ≥99.0% purity by reverse-phase HPLC and confirmed by LC-MS against the expected 3108 Da mass. Each shipment carries a batch-specific certificate of analysis. One screen matters more here than for most peptides: the deacetylated variant. Thymosin Alpha-1 requires an intact N-terminal acetyl group for activity, and the missing-acetyl species is resolved by mass difference on every batch.',
    },
    {
      q: 'Is Thymosin Alpha-1 Spray approved for therapeutic use or human consumption?',
      a: 'No. Thymosin Alpha-1 Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. This RUO material is not a pharmaceutical product and carries no approved indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Thymosin Alpha-1 Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running innate immune signaling panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale Thymosin Alpha-1 Spray supplied in?',
      a: 'Thymosin Alpha-1 Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 10 mg per unit. This peptide is unusually water-soluble — it is rich in acidic residues and carries no cysteines — so it dissolves cleanly in aqueous buffer without any organic co-solvent. Headspace is nitrogen-purged before capping, and no reconstitution step is required.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Thymosin Alpha-1 Spray?',
      a: 'Store Thymosin Alpha-1 Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 30 days. Avoid freeze-thaw cycling: while this peptide has no disulfide bonds to scramble, repeated cycling accelerates deamidation at the C-terminal asparagine. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Thymosin Alpha-1 Spray?',
      a: 'Thymosin Alpha-1 is a 28-amino-acid fragment of prothymosin alpha that acts on innate immune receptors rather than a hormone receptor. Research shows it engages Toll-like receptor 2 and Toll-like receptor 9 on dendritic cells and monocytes, signaling through the MyD88 adaptor into NF-κB and interferon regulatory factor pathways. Romani and colleagues established that dendritic cell activation and Th1 polarization depend on this Toll-like receptor route, with interleukin-12 output as the readout. Downstream, laboratory investigations describe thymocyte maturation, shifts in CD4 and CD8 populations, and increased natural killer cell activity. A 2017 Nature Medicine report added a second, unrelated activity: modulation of cellular protein quality control.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Thymosin Alpha-1 Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary immune research compounds such as KPV or LL-37. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale Thymosin Alpha-1 Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the N-terminal acetyl group and the C-terminal asparagine, the two positions most vulnerable in this sequence. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Immunology labs, dendritic cell groups, and infectious disease programs are the primary users of Thymosin Alpha-1. A typical experiment starts with bone marrow-derived or monocyte-derived dendritic cells: the lab treats them, then measures interleukin-12 output and surface maturation markers by flow cytometry to ask whether the peptide pushes cells toward a Th1 program. Knockout models are the natural companion, since Romani and colleagues showed the response collapses in cells lacking the MyD88 adaptor — that comparison is how a group confirms the signal really travels through Toll-like receptors rather than some parallel route. Cell biology labs took a different direction after the 2017 Nature Medicine work and now use it to probe protein trafficking and quality control, a question that has nothing to do with immunity.',
    qualityAssurance:
      'Thymosin Alpha-1 sits at the opposite end of the analytical spectrum from our lipid-conjugated metabolic peptides, and that changes the whole method. It is dense with acidic residues and carries no cysteines, which makes it highly water-soluble and causes it to elute early on a reverse-phase column rather than late — an unusual retention profile that serves as a first-pass identity check. LC-MS confirms the intact molecular weight near 3108 Da. Two degradation routes get watched most closely: loss of the N-terminal acetyl group, which is resolved cleanly by the mass shift and matters because activity depends on that modification, and deamidation at the C-terminal asparagine, a classic hotspot for end-position residues. The absence of disulfide bonds removes the scrambling risk that complicates most immune peptides.',
  },
};

const THYMOSIN_ALPHA_1_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Thymosin Alpha-1 Spray al por mayor?',
      a: 'Cada lote mayorista de Thymosin Alpha-1 Spray se verifica a una pureza ≥99.0% por HPLC de fase reversa y se confirma por LC-MS frente a la masa esperada de 3108 Da. Cada envío incluye un certificado de análisis específico del lote. Un cribado importa aquí más que en la mayoría de los péptidos: la variante desacetilada. La timosina alfa-1 requiere un grupo acetilo N-terminal intacto para su actividad, y la especie que carece de él se resuelve por diferencia de masa en cada lote.',
    },
    {
      q: '¿Está aprobado Thymosin Alpha-1 Spray para uso terapéutico o consumo humano?',
      a: 'No. Thymosin Alpha-1 Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Este material RUO no es un producto farmacéutico y carece de indicación aprobada.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Thymosin Alpha-1 Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de señalización inmunitaria innata, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra Thymosin Alpha-1 Spray al por mayor?',
      a: 'Thymosin Alpha-1 Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 10 mg por unidad. Este péptido es inusualmente soluble en agua: es rico en residuos ácidos y no contiene cisteínas, por lo que se disuelve limpiamente en tampón acuoso sin ningún codisolvente orgánico. El espacio de cabeza se purga con nitrógeno antes del sellado, y no se requiere reconstitución.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Thymosin Alpha-1 Spray?',
      a: 'Almacene Thymosin Alpha-1 Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 30 días. Evite los ciclos de congelación-descongelación: aunque este péptido no tiene puentes disulfuro que se reorganicen, el ciclado repetido acelera la desamidación de la asparagina C-terminal. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F) durante el tránsito.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Thymosin Alpha-1 Spray?',
      a: 'La timosina alfa-1 es un fragmento de 28 aminoácidos de la protimosina alfa que actúa sobre receptores inmunitarios innatos y no sobre un receptor hormonal. La investigación muestra que interactúa con el receptor tipo Toll 2 y el receptor tipo Toll 9 en células dendríticas y monocitos, señalizando a través del adaptador MyD88 hacia las vías de NF-κB y de los factores reguladores de interferón. Romani y colaboradores establecieron que la activación de células dendríticas y la polarización Th1 dependen de esta ruta, con la producción de interleucina-12 como lectura. Corriente abajo, las investigaciones de laboratorio describen la maduración de timocitos, cambios en las poblaciones CD4 y CD8, y un aumento de la actividad de las células asesinas naturales. Un reporte de Nature Medicine de 2017 añadió una segunda actividad no relacionada: la modulación del control de calidad de proteínas celulares.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Thymosin Alpha-1 Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos de investigación inmunitaria complementarios como KPV o LL-37. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Thymosin Alpha-1 Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen el grupo acetilo N-terminal y la asparagina C-terminal, las dos posiciones más vulnerables de esta secuencia. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los laboratorios de inmunología, los grupos de células dendríticas y los programas de enfermedades infecciosas son los principales usuarios de la timosina alfa-1. Un experimento típico parte de células dendríticas derivadas de médula ósea o de monocitos: el laboratorio las trata y luego mide la producción de interleucina-12 y los marcadores de maduración de superficie por citometría de flujo, para preguntar si el péptido empuja a las células hacia un programa Th1. Los modelos de silenciamiento son el complemento natural, ya que Romani y colaboradores mostraron que la respuesta se desploma en células que carecen del adaptador MyD88: esa comparación es la forma en que un grupo confirma que la señal viaja realmente por los receptores tipo Toll y no por una ruta paralela. Los laboratorios de biología celular tomaron otro rumbo tras el trabajo de Nature Medicine de 2017 y hoy la emplean para explorar el tráfico y el control de calidad de proteínas, una pregunta ajena a la inmunidad.',
    qualityAssurance:
      'La timosina alfa-1 se sitúa en el extremo opuesto del espectro analítico respecto a nuestros péptidos metabólicos conjugados con lípidos, y eso cambia todo el método. Es densa en residuos ácidos y no contiene cisteínas, lo que la vuelve muy soluble en agua y hace que eluya temprano en una columna de fase reversa en lugar de tarde: un perfil de retención inusual que sirve como primera verificación de identidad. La LC-MS confirma el peso molecular intacto cerca de 3108 Da. Se vigilan sobre todo dos rutas de degradación: la pérdida del grupo acetilo N-terminal, que se resuelve limpiamente por el desplazamiento de masa y que importa porque la actividad depende de esa modificación, y la desamidación de la asparagina C-terminal, un punto clásico de vulnerabilidad en residuos terminales. La ausencia de puentes disulfuro elimina el riesgo de reorganización que complica a la mayoría de los péptidos inmunitarios.',
  },
};

const TESAMORELIN_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Tesamorelin Spray?',
      a: 'Every wholesale lot of Tesamorelin Spray is verified to ≥99.0% purity by reverse-phase HPLC and confirmed by LC-MS against the expected intact mass. Each shipment carries a batch-specific certificate of analysis. Two screens are specific to this chemistry: the des-hexenoyl species left by incomplete N-terminal acylation, and oxidation at the single methionine residue, which is the most reactive position in this 44-residue sequence.',
    },
    {
      q: 'Is Tesamorelin Spray approved for therapeutic use or human consumption?',
      a: 'No. Tesamorelin Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. This RUO material is not a pharmaceutical product and carries no approved indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Tesamorelin Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running pituitary and growth factor signaling panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale Tesamorelin Spray supplied in?',
      a: 'Tesamorelin Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 10 mg or 20 mg per unit. At 44 residues it is one of the longer peptides in our catalog, and the pre-dissolved format removes the slow, incomplete redissolution that long chains show when supplied as a powder. Headspace is nitrogen-purged before capping to protect the methionine residue, and no reconstitution step is required.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Tesamorelin Spray?',
      a: 'Store Tesamorelin Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 30 days. Do not freeze: long peptide chains like this one nucleate aggregates at the ice interface, and the methionine residue oxidizes faster once the structure is disturbed. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Tesamorelin Spray?',
      a: 'Tesamorelin is a stabilized 44-amino-acid analog of growth hormone-releasing hormone that binds the GHRH receptor on pituitary somatotroph cells. Receptor activation couples to adenylyl cyclase, raising cAMP and activating protein kinase A, which phosphorylates the CREB transcription factor and drives Pit-1-dependent transcription of the growth hormone gene. The result in laboratory models is increased growth hormone synthesis and release, with hepatic IGF-1 as the downstream readout. What distinguishes Tesamorelin is where it acts. Ghrelin-receptor secretagogues such as Ipamorelin and GHRP-6 work through an entirely separate receptor, while Tesamorelin acts upstream at the GHRH receptor and preserves the native pulsatile release pattern.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Tesamorelin Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary growth factor research compounds such as Ipamorelin. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale Tesamorelin Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the oxidation-prone methionine residue and guard this long peptide chain against aggregation. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Endocrinology groups and pituitary cell biology labs are the primary users of Tesamorelin, and the classic experiment uses cultured rat pituitary cells or somatotroph-derived lines. The lab treats the cells, then measures growth hormone released into the medium alongside intracellular cAMP, building a concentration-response curve that confirms the signal runs through the GHRH receptor rather than a parallel pathway. Ghrelin-receptor secretagogues are the natural comparator: running Ipamorelin or GHRP-6 in the same plate separates the two mechanisms cleanly, since they engage a different receptor entirely. The spray format also connects to a specific literature thread — Jansen and colleagues published on airway delivery of this exact molecule in 2004, which makes a pre-dissolved metered solution a natural fit for groups revisiting that work.',
    qualityAssurance:
      'Tesamorelin is a 44-residue chain carrying a short acyl group on its N-terminal tyrosine, and both features shape the analytical method. The acyl group is the entire reason the molecule resists the enzymatic clipping that limits native growth hormone-releasing hormone, so confirming it is present is a purity question and an identity question at once — the unmodified peptide elutes earlier on reverse-phase and is separated on every batch. LC-MS confirms the intact molecular weight. Because the sequence contains exactly one methionine, oxidation at that position is the dominant degradation route and the primary stability-indicating marker across the shelf life. Deamidation in the glutamine-rich C-terminal region and aggregation of the long chain round out the monitored panel.',
  },
};

const TESAMORELIN_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Tesamorelin Spray al por mayor?',
      a: 'Cada lote mayorista de Tesamorelin Spray se verifica a una pureza ≥99.0% por HPLC de fase reversa y se confirma por LC-MS frente a la masa intacta esperada. Cada envío incluye un certificado de análisis específico del lote. Dos cribados son propios de esta química: la especie sin el grupo hexenoílo que deja una acilación N-terminal incompleta, y la oxidación del único residuo de metionina, la posición más reactiva de esta secuencia de 44 residuos.',
    },
    {
      q: '¿Está aprobado Tesamorelin Spray para uso terapéutico o consumo humano?',
      a: 'No. Tesamorelin Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Este material RUO no es un producto farmacéutico y carece de indicación aprobada.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Tesamorelin Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de señalización hipofisaria y de factores de crecimiento, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra Tesamorelin Spray al por mayor?',
      a: 'Tesamorelin Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 10 mg o 20 mg por unidad. Con 44 residuos es uno de los péptidos más largos de nuestro catálogo, y el formato predisuelto elimina la redisolución lenta e incompleta que muestran las cadenas largas cuando se suministran en polvo. El espacio de cabeza se purga con nitrógeno antes del sellado para proteger el residuo de metionina, y no se requiere reconstitución.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Tesamorelin Spray?',
      a: 'Almacene Tesamorelin Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 30 días. No congelar: las cadenas peptídicas largas como esta nuclean agregados en la interfaz del hielo, y el residuo de metionina se oxida más rápido una vez alterada la estructura. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F) durante el tránsito.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Tesamorelin Spray?',
      a: 'La tesamorelina es un análogo estabilizado de 44 aminoácidos de la hormona liberadora de hormona del crecimiento que se une al receptor de GHRH en las células somatotropas hipofisarias. La activación del receptor se acopla a la adenilato ciclasa, eleva el cAMP y activa la proteína quinasa A, que fosforila el factor de transcripción CREB e impulsa la transcripción del gen de la hormona del crecimiento dependiente de Pit-1. El resultado en modelos de laboratorio es un aumento de la síntesis y liberación de hormona del crecimiento, con el IGF-1 hepático como lectura secundaria. Lo que distingue a la tesamorelina es el punto donde actúa. Los secretagogos del receptor de grelina como la ipamorelina y el GHRP-6 operan por un receptor completamente distinto, mientras que la tesamorelina actúa corriente arriba en el receptor de GHRH y preserva el patrón pulsátil nativo de liberación.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Tesamorelin Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos de investigación de factores de crecimiento complementarios como la ipamorelina. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Tesamorelin Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen el residuo de metionina propenso a la oxidación y resguardan esta cadena peptídica larga frente a la agregación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de endocrinología y los laboratorios de biología celular hipofisaria son los principales usuarios de la tesamorelina, y el experimento clásico emplea células hipofisarias de rata en cultivo o líneas derivadas de somatotropos. El laboratorio trata las células y luego mide la hormona del crecimiento liberada al medio junto con el cAMP intracelular, construyendo una curva concentración-respuesta que confirma que la señal transcurre por el receptor de GHRH y no por una vía paralela. Los secretagogos del receptor de grelina son el comparador natural: correr ipamorelina o GHRP-6 en la misma placa separa limpiamente ambos mecanismos, ya que activan un receptor totalmente distinto. El formato en spray también conecta con una línea específica de la literatura, pues Jansen y colaboradores publicaron sobre la administración por vía aérea de esta misma molécula en 2004, lo que hace de una solución predisuelta y dosificada una opción natural para los grupos que retoman ese trabajo.',
    qualityAssurance:
      'La tesamorelina es una cadena de 44 residuos que lleva un grupo acilo corto sobre su tirosina N-terminal, y ambas características definen el método analítico. Ese grupo acilo es la razón misma por la que la molécula resiste el corte enzimático que limita a la hormona liberadora de hormona del crecimiento nativa, de modo que confirmar su presencia es a la vez una cuestión de pureza y de identidad: el péptido sin modificar eluye antes en fase reversa y se separa en cada lote. La LC-MS confirma el peso molecular intacto. Como la secuencia contiene exactamente una metionina, la oxidación en esa posición es la ruta de degradación dominante y el principal marcador indicador de estabilidad durante la vida útil. La desamidación en la región C-terminal rica en glutamina y la agregación de la cadena larga completan el panel vigilado.',
  },
};

const TESAMORELIN_IPAMORELIN_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Tesamorelin + Ipamorelin Spray?',
      a: 'Every wholesale lot of Tesamorelin + Ipamorelin Spray is verified to ≥99.0% purity by reverse-phase HPLC and confirmed by LC-MS, with each peptide quantified against its own reference standard. Each shipment carries a batch-specific certificate of analysis. A blend adds a check that single-compound products do not need: the ratio between the two peptides is verified, not just total purity, alongside screens for oxidation in the Tesamorelin chain and incomplete acylation.',
    },
    {
      q: 'Is Tesamorelin + Ipamorelin Spray approved for therapeutic use or human consumption?',
      a: 'No. Tesamorelin + Ipamorelin Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. Neither component of this blend holds an approved indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Tesamorelin + Ipamorelin Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running pituitary secretion panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale Tesamorelin + Ipamorelin Spray supplied in?',
      a: 'Tesamorelin + Ipamorelin Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 10 mg combined per unit. Co-formulating a 44-residue peptide with a 5-residue one is exactly where a powder blend goes wrong, because the two dissolve at different rates and the ratio drifts between reconstitutions. Headspace is nitrogen-purged before capping, and no reconstitution step is required.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Tesamorelin + Ipamorelin Spray?',
      a: 'Store Tesamorelin + Ipamorelin Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 30 days. Do not freeze: the long Tesamorelin chain nucleates aggregates at the ice interface while the small Ipamorelin pentapeptide stays in solution, so freezing shifts the ratio as well as the purity. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Tesamorelin + Ipamorelin Spray?',
      a: 'This blend engages two separate receptors through two different G proteins, which is the entire reason the pairing exists. Tesamorelin binds the GHRH receptor on pituitary somatotroph cells, raising cAMP and activating protein kinase A, which drives transcription of the growth hormone gene through CREB and Pit-1. Ipamorelin binds the ghrelin receptor instead, signaling through phospholipase C and inositol trisphosphate to release intracellular calcium and trigger vesicle exocytosis. One arm builds the hormone, the other releases it, and the two signals converge on the same secretory pool. Research shows Ipamorelin is notably selective among secretagogues, releasing growth hormone without the cortisol and prolactin rise seen with GHRP-6.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Tesamorelin + Ipamorelin Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary growth factor research compounds such as CJC-1295. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale Tesamorelin + Ipamorelin Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the oxidation-prone methionine in the Tesamorelin chain and the blend ratio between the two peptides. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Endocrinology groups and pituitary cell biology labs are the main users of this blend, and the appeal is that it lets one preparation probe two pathways. A lab working with cultured rat pituitary cells will treat them and then measure growth hormone released into the medium while tracking both second messengers at once, since the GHRH arm raises cAMP and the ghrelin arm raises intracellular calcium. Running the two components separately in adjacent wells is the standard control, because that is how a group establishes whether the combined response is simply additive or genuinely synergistic. Selectivity work is the other common thread: Raun and colleagues reported that Ipamorelin releases growth hormone without the cortisol and prolactin response that older secretagogues produce, so labs use it as the clean comparator against GHRP-6.',
    qualityAssurance:
      'A blend shifts the analytical question from purity to composition. The two peptides here differ enormously in size, and that difference is genuinely helpful: a 44-residue chain and a 5-residue one separate far apart on a reverse-phase column, so each is quantified cleanly against its own reference standard rather than being resolved out of a crowded region. LC-MS confirms both molecular weights independently. The certificate reports the ratio alongside the purity of each component, because a blend that is individually pure but incorrectly proportioned is still off specification. Oxidation in the longer chain is the dominant degradation route, while the short peptide is comparatively robust. The pre-dissolved format matters more here than for a single compound, since a powder blend redissolves at two different rates.',
  },
};

const TESAMORELIN_IPAMORELIN_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Tesamorelin + Ipamorelin Spray al por mayor?',
      a: 'Cada lote mayorista de Tesamorelin + Ipamorelin Spray se verifica a una pureza ≥99.0% por HPLC de fase reversa y se confirma por LC-MS, cuantificando cada péptido frente a su propio estándar de referencia. Cada envío incluye un certificado de análisis específico del lote. Una mezcla añade una verificación que los productos de un solo compuesto no necesitan: se comprueba la proporción entre ambos péptidos, no solo la pureza total, junto con cribados de oxidación en la cadena de tesamorelina y de acilación incompleta.',
    },
    {
      q: '¿Está aprobado Tesamorelin + Ipamorelin Spray para uso terapéutico o consumo humano?',
      a: 'No. Tesamorelin + Ipamorelin Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ninguno de los componentes de esta mezcla cuenta con una indicación aprobada.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Tesamorelin + Ipamorelin Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de secreción hipofisaria, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra Tesamorelin + Ipamorelin Spray al por mayor?',
      a: 'Tesamorelin + Ipamorelin Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 10 mg combinados por unidad. Coformular un péptido de 44 residuos con uno de 5 es justamente donde falla una mezcla en polvo, porque ambos se disuelven a velocidades distintas y la proporción se desvía entre reconstituciones. El espacio de cabeza se purga con nitrógeno antes del sellado y no se requiere reconstitución.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Tesamorelin + Ipamorelin Spray?',
      a: 'Almacene Tesamorelin + Ipamorelin Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 30 días. No congelar: la cadena larga de tesamorelina nuclea agregados en la interfaz del hielo mientras que el pentapéptido de ipamorelina permanece en solución, de modo que congelar altera tanto la proporción como la pureza. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F) durante el tránsito.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Tesamorelin + Ipamorelin Spray?',
      a: 'Esta mezcla activa dos receptores distintos a través de dos proteínas G diferentes, y esa es justamente la razón de la combinación. La tesamorelina se une al receptor de GHRH en las células somatotropas hipofisarias, eleva el cAMP y activa la proteína quinasa A, que impulsa la transcripción del gen de la hormona del crecimiento mediante CREB y Pit-1. La ipamorelina, en cambio, se une al receptor de grelina y señaliza por fosfolipasa C e inositol trifosfato para liberar calcio intracelular y desencadenar la exocitosis vesicular. Un brazo sintetiza la hormona y el otro la libera, y ambas señales convergen sobre el mismo depósito secretor. La investigación muestra que la ipamorelina es notablemente selectiva entre los secretagogos, liberando hormona del crecimiento sin el aumento de cortisol y prolactina que se observa con el GHRP-6.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Tesamorelin + Ipamorelin Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos de investigación de factores de crecimiento complementarios como el CJC-1295. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Tesamorelin + Ipamorelin Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen la metionina propensa a oxidación de la cadena de tesamorelina y la proporción entre ambos péptidos. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de endocrinología y los laboratorios de biología celular hipofisaria son los principales usuarios de esta mezcla, y su atractivo es que permite explorar dos vías con una sola preparación. Un laboratorio que trabaja con células hipofisarias de rata en cultivo las trata y luego mide la hormona del crecimiento liberada al medio mientras sigue ambos segundos mensajeros a la vez, ya que el brazo de GHRH eleva el cAMP y el de grelina eleva el calcio intracelular. Correr los dos componentes por separado en pozos contiguos es el control estándar, porque así se establece si la respuesta combinada es simplemente aditiva o genuinamente sinérgica. El trabajo de selectividad es el otro hilo habitual: Raun y colaboradores reportaron que la ipamorelina libera hormona del crecimiento sin la respuesta de cortisol y prolactina que producen los secretagogos más antiguos, por lo que se usa como comparador limpio frente al GHRP-6.',
    qualityAssurance:
      'Una mezcla desplaza la pregunta analítica de la pureza a la composición. Los dos péptidos difieren enormemente en tamaño, y esa diferencia resulta útil: una cadena de 44 residuos y una de 5 se separan ampliamente en una columna de fase reversa, de modo que cada una se cuantifica limpiamente frente a su propio estándar en lugar de resolverse dentro de una región saturada. La LC-MS confirma ambos pesos moleculares de forma independiente. El certificado reporta la proporción junto con la pureza de cada componente, porque una mezcla individualmente pura pero mal proporcionada sigue estando fuera de especificación. La oxidación de la cadena más larga es la ruta de degradación dominante, mientras que el péptido corto es comparativamente robusto. El formato predisuelto importa más aquí que en un compuesto único, ya que una mezcla en polvo se redisuelve a dos velocidades distintas.',
  },
};

const TB_500_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale TB-500 Spray?',
      a: 'Every wholesale lot of TB-500 Spray is verified to ≥99.0% purity by reverse-phase HPLC and confirmed by LC-MS against the expected intact mass. Each shipment carries a batch-specific certificate of analysis. One identity check matters more here than purity alone: material sold as TB-500 is sometimes the short active fragment rather than the full 43-residue thymosin beta-4 sequence, so the certificate states which form the lot contains. Oxidation at the single methionine and truncated sequences are also screened.',
    },
    {
      q: 'Is TB-500 Spray approved for therapeutic use or human consumption?',
      a: 'No. TB-500 Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. This RUO material is not a pharmaceutical product and carries no approved indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale TB-500 Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running cell migration and cytoskeletal assay panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale TB-500 Spray supplied in?',
      a: 'TB-500 Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 5 mg or 10 mg per unit. This peptide is unusually easy to keep in solution because it is highly hydrophilic and intrinsically disordered, meaning it carries no folded structure to lose and resists the aggregation that troubles more structured peptides. Headspace is nitrogen-purged before capping, and no reconstitution step is required.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for TB-500 Spray?',
      a: 'Store TB-500 Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 30 days. Freeze-thaw cycling is less damaging here than for structured peptides, since this sequence is intrinsically disordered and has no fold to disrupt, but repeated cycling still accelerates methionine oxidation. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for TB-500 Spray?',
      a: 'TB-500 corresponds to thymosin beta-4, whose primary molecular function is sequestering monomeric actin. It binds G-actin through a short actin-binding motif and holds it in an unpolymerized pool, which sets how much actin is available for filament assembly and therefore governs cytoskeletal remodeling and cell migration. That is a structural mechanism, not receptor agonism, and it separates this compound from essentially every other peptide in a recovery catalog. Research shows additional downstream activity: Bock-Marquette and colleagues reported activation of integrin-linked kinase and Akt signaling, and laboratory investigations describe upregulated laminin-5, increased endothelial cell migration, and reduced inflammatory mediator output.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale TB-500 Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary recovery research compounds such as BPC-157. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale TB-500 Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the single methionine residue and the peptide backbone. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Cell biology labs studying cytoskeletal dynamics and wound healing groups are the primary users of TB-500. The foundational experiment is a migration assay: Malinda and colleagues showed that human umbilical vein endothelial cells move directionally in response to thymosin beta-4, and that scratch-wound or Boyden chamber format remains the standard readout today. Cardiac and vascular groups took a different route after Bock-Marquette and colleagues reported integrin-linked kinase and Akt activation, and now use it to ask whether the migration effect and the survival signaling can be separated. Actin biochemistry labs use it more directly still, running pyrene-actin polymerization assays in which the compound is titrated against monomeric actin to measure sequestration.',
    qualityAssurance:
      'TB-500 is short on the usual analytical complications and long on one unusual question. It contains no cysteines, so there is no disulfide scrambling to resolve, and it is intrinsically disordered in solution, so there is no folded conformation whose loss would go undetected by a purity method. It is also strongly hydrophilic and elutes early on a reverse-phase column. The real question is identity rather than purity: material sold under this name is sometimes the short active fragment and sometimes the full-length sequence, and the two differ enormously in mass. LC-MS settles it unambiguously, and our certificate states which form the lot contains. Oxidation at the single methionine is the dominant degradation route across the shelf life.',
  },
};

const TB_500_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de TB-500 Spray al por mayor?',
      a: 'Cada lote mayorista de TB-500 Spray se verifica a una pureza ≥99.0% por HPLC de fase reversa y se confirma por LC-MS frente a la masa intacta esperada. Cada envío incluye un certificado de análisis específico del lote. Una verificación de identidad importa aquí más que la pureza por sí sola: el material vendido como TB-500 es a veces el fragmento activo corto y no la secuencia completa de 43 residuos de la timosina beta-4, por lo que el certificado indica qué forma contiene el lote. También se criban la oxidación de la única metionina y las secuencias truncadas.',
    },
    {
      q: '¿Está aprobado TB-500 Spray para uso terapéutico o consumo humano?',
      a: 'No. TB-500 Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Este material RUO no es un producto farmacéutico y carece de indicación aprobada.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para TB-500 Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de migración celular y ensayos del citoesqueleto, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra TB-500 Spray al por mayor?',
      a: 'TB-500 Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 5 mg o 10 mg por unidad. Este péptido es inusualmente fácil de mantener en solución porque es muy hidrofílico e intrínsecamente desordenado, lo que significa que no tiene una estructura plegada que perder y resiste la agregación que afecta a péptidos más estructurados. El espacio de cabeza se purga con nitrógeno antes del sellado y no se requiere reconstitución.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de TB-500 Spray?',
      a: 'Almacene TB-500 Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 30 días. Los ciclos de congelación-descongelación son menos dañinos aquí que en péptidos estructurados, ya que esta secuencia es intrínsecamente desordenada y no tiene un plegamiento que alterar, pero el ciclado repetido sigue acelerando la oxidación de la metionina. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F) durante el tránsito.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para TB-500 Spray?',
      a: 'TB-500 corresponde a la timosina beta-4, cuya función molecular principal es el secuestro de actina monomérica. Se une a la G-actina mediante un motivo corto de unión a actina y la mantiene en un depósito no polimerizado, lo que determina cuánta actina queda disponible para el ensamblaje de filamentos y gobierna así la remodelación del citoesqueleto y la migración celular. Ese es un mecanismo estructural y no un agonismo de receptor, lo que separa a este compuesto de prácticamente cualquier otro péptido de un catálogo de recuperación. La investigación muestra actividad adicional corriente abajo: Bock-Marquette y colaboradores reportaron la activación de la quinasa ligada a integrinas y de la señalización por Akt, y las investigaciones de laboratorio describen un aumento de laminina-5, mayor migración de células endoteliales y menor producción de mediadores inflamatorios.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de TB-500 Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos de investigación de recuperación complementarios como el BPC-157. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía TB-500 Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen el único residuo de metionina y el esqueleto peptídico. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los laboratorios de biología celular que estudian la dinámica del citoesqueleto y los grupos de cicatrización son los principales usuarios de TB-500. El experimento fundacional es un ensayo de migración: Malinda y colaboradores mostraron que las células endoteliales de vena umbilical humana se desplazan direccionalmente en respuesta a la timosina beta-4, y ese formato de herida por raspado o de cámara de Boyden sigue siendo la lectura estándar. Los grupos cardíacos y vasculares tomaron otro camino tras el reporte de Bock-Marquette y colaboradores sobre la activación de la quinasa ligada a integrinas y de Akt, y hoy lo emplean para preguntar si el efecto de migración y la señalización de supervivencia pueden separarse. Los laboratorios de bioquímica de actina lo usan de forma aún más directa, con ensayos de polimerización de actina marcada con pireno en los que el compuesto se titula frente a la actina monomérica para medir el secuestro.',
    qualityAssurance:
      'TB-500 presenta pocas de las complicaciones analíticas habituales y una pregunta inusual. No contiene cisteínas, por lo que no hay reorganización de disulfuros que resolver, y es intrínsecamente desordenado en solución, de modo que no existe una conformación plegada cuya pérdida pasara inadvertida a un método de pureza. También es fuertemente hidrofílico y eluye temprano en una columna de fase reversa. La cuestión real es de identidad más que de pureza: el material vendido con este nombre es a veces el fragmento activo corto y a veces la secuencia completa, y ambos difieren enormemente en masa. La LC-MS lo resuelve sin ambigüedad y nuestro certificado indica qué forma contiene el lote. La oxidación de la única metionina es la ruta de degradación dominante durante la vida útil.',
  },
};

const SNAP_8_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale SNAP-8 Spray?',
      a: 'Every wholesale lot of SNAP-8 Spray is verified to ≥99.0% purity by reverse-phase HPLC and confirmed by LC-MS against the expected mass near 1075 Da. Each shipment carries a batch-specific certificate of analysis. Two screens are specific to this short acetylated sequence: the deacetylated variant, which is separated by mass difference, and oxidation at the single methionine, which is the most reactive position in an otherwise stable octapeptide.',
    },
    {
      q: 'Is SNAP-8 Spray approved for therapeutic use or human consumption?',
      a: 'No. SNAP-8 Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. It is supplied for laboratory investigation only and is not a finished cosmetic product.',
    },
    {
      q: 'What is the minimum order quantity for wholesale SNAP-8 Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running vesicle exocytosis and dermal model panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale SNAP-8 Spray supplied in?',
      a: 'SNAP-8 Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 10 mg or 20 mg per unit. At eight residues it is one of the smallest peptides in our catalog and dissolves readily in aqueous buffer without an organic co-solvent. Headspace is nitrogen-purged before capping to protect the methionine residue, and no reconstitution step is required.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for SNAP-8 Spray?',
      a: 'Store SNAP-8 Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 30 days. Short peptides like this one tolerate handling better than long chains, but freeze-thaw cycling still accelerates methionine oxidation and should be avoided. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for SNAP-8 Spray?',
      a: 'SNAP-8 is an acetylated octapeptide that mimics the N-terminal segment of SNAP-25, one of the three proteins that assemble into the SNARE complex driving vesicle fusion. By presenting a competing sequence, it is understood to occupy the position SNAP-25 would take, producing a SNARE complex that assembles less efficiently and slows vesicle docking and neurotransmitter release. It is a two-residue extension of the earlier hexapeptide Argireline, built on the same competitive logic. One caveat deserves stating plainly: no primary mechanistic study of SNAP-8 itself has been published. The mechanism is inferred from the Argireline literature and from SNARE structural biology, not demonstrated directly for this sequence.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale SNAP-8 Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary peptide research compounds such as Argireline. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale SNAP-8 Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the N-terminal acetyl group and the single methionine residue. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Cosmetic science groups and dermal model laboratories are the primary users of SNAP-8, which places it in a different world from the receptor pharmacology compounds elsewhere in this catalog. A formulation lab evaluating penetration and stability will work with reconstructed human epidermis models, measuring how much intact peptide reaches the viable layers over time. Groups interested in the mechanism itself take a more fundamental route, running in-vitro SNARE complex assembly assays in which the peptide is titrated against recombinant SNAP-25, syntaxin and VAMP to see whether complex formation is genuinely reduced. That second experiment matters because the mechanism has never been demonstrated directly for this sequence, only inferred from work on the shorter Argireline hexapeptide and from SNARE structural biology.',
    qualityAssurance:
      'SNAP-8 is analytically straightforward, which is a genuine advantage when the science around it is thin. At eight residues and roughly 1075 Da it produces a clean, well-resolved peak on reverse-phase separation, and LC-MS confirms the mass without the multiply-charged envelope that complicates larger peptides. Two things get watched. The first is the N-terminal acetyl group, whose loss shifts the mass by a small, easily resolved amount and which matters because the acetylation is part of the designed structure. The second is the single methionine, the only oxidation-prone residue in the sequence and therefore the dominant stability-indicating marker. Because the peptide is short, hydrophilic and free of cysteine, aggregation and disulfide scrambling are not practical concerns.',
  },
};

const SNAP_8_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de SNAP-8 Spray al por mayor?',
      a: 'Cada lote mayorista de SNAP-8 Spray se verifica a una pureza ≥99.0% por HPLC de fase reversa y se confirma por LC-MS frente a la masa esperada cercana a 1075 Da. Cada envío incluye un certificado de análisis específico del lote. Dos cribados son propios de esta secuencia corta acetilada: la variante desacetilada, que se separa por diferencia de masa, y la oxidación de la única metionina, la posición más reactiva de un octapéptido por lo demás estable.',
    },
    {
      q: '¿Está aprobado SNAP-8 Spray para uso terapéutico o consumo humano?',
      a: 'No. SNAP-8 Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Se suministra únicamente para investigación de laboratorio y no es un producto cosmético terminado.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para SNAP-8 Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de exocitosis vesicular y modelos dérmicos, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra SNAP-8 Spray al por mayor?',
      a: 'SNAP-8 Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 10 mg o 20 mg por unidad. Con ocho residuos es uno de los péptidos más pequeños de nuestro catálogo y se disuelve con facilidad en tampón acuoso sin codisolvente orgánico. El espacio de cabeza se purga con nitrógeno antes del sellado para proteger el residuo de metionina y no se requiere reconstitución.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de SNAP-8 Spray?',
      a: 'Almacene SNAP-8 Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 30 días. Los péptidos cortos como este toleran mejor la manipulación que las cadenas largas, pero el ciclado de congelación-descongelación sigue acelerando la oxidación de la metionina y debe evitarse. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F) durante el tránsito.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para SNAP-8 Spray?',
      a: 'SNAP-8 es un octapéptido acetilado que imita el segmento N-terminal de SNAP-25, una de las tres proteínas que se ensamblan en el complejo SNARE que impulsa la fusión vesicular. Al presentar una secuencia competidora, se entiende que ocupa la posición que tomaría SNAP-25, produciendo un complejo SNARE que se ensambla con menor eficiencia y que ralentiza el anclaje vesicular y la liberación de neurotransmisores. Es una extensión de dos residuos del hexapéptido anterior Argireline, construido sobre la misma lógica competitiva. Una salvedad merece decirse con claridad: no se ha publicado ningún estudio mecanístico primario sobre SNAP-8 en sí. El mecanismo se infiere de la literatura sobre Argireline y de la biología estructural de SNARE, no se ha demostrado directamente para esta secuencia.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de SNAP-8 Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos peptídicos de investigación complementarios como la Argireline. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía SNAP-8 Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen el grupo acetilo N-terminal y el único residuo de metionina. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de ciencia cosmética y los laboratorios de modelos dérmicos son los principales usuarios de SNAP-8, lo que lo sitúa en un mundo distinto al de los compuestos de farmacología de receptores del resto de este catálogo. Un laboratorio de formulación que evalúa penetración y estabilidad trabaja con modelos de epidermis humana reconstruida, midiendo cuánto péptido intacto alcanza las capas viables con el tiempo. Los grupos interesados en el mecanismo mismo toman una ruta más fundamental, con ensayos in-vitro de ensamblaje del complejo SNARE en los que el péptido se titula frente a SNAP-25, sintaxina y VAMP recombinantes para comprobar si la formación del complejo se reduce realmente. Ese segundo experimento importa porque el mecanismo nunca se ha demostrado directamente para esta secuencia, solo se ha inferido del trabajo sobre el hexapéptido Argireline y de la biología estructural de SNARE.',
    qualityAssurance:
      'SNAP-8 es analíticamente sencillo, lo que resulta una ventaja real cuando la ciencia a su alrededor es escasa. Con ocho residuos y unos 1075 Da produce un pico limpio y bien resuelto en separación de fase reversa, y la LC-MS confirma la masa sin la envolvente de carga múltiple que complica a los péptidos mayores. Se vigilan dos cosas. La primera es el grupo acetilo N-terminal, cuya pérdida desplaza la masa en una cantidad pequeña y fácil de resolver, y que importa porque la acetilación forma parte de la estructura diseñada. La segunda es la única metionina, el único residuo propenso a oxidación de la secuencia y por tanto el principal marcador indicador de estabilidad. Como el péptido es corto, hidrofílico y carece de cisteína, la agregación y la reorganización de disulfuros no son preocupaciones prácticas.',
  },
};

const SERMORELIN_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Sermorelin Spray?',
      a: 'Every wholesale lot of Sermorelin Spray is verified to ≥99.0% purity by reverse-phase HPLC and confirmed by LC-MS against the expected mass near 3358 Da. Each shipment carries a batch-specific certificate of analysis. Three screens matter for this sequence: oxidation at the single methionine, deamidation at the asparagine position, and truncated chains from incomplete coupling, which are the common failure modes when a 29-residue peptide is assembled.',
    },
    {
      q: 'Is Sermorelin Spray approved for therapeutic use or human consumption?',
      a: 'No. Sermorelin Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. This RUO material is not a pharmaceutical product and carries no approved indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Sermorelin Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running pituitary secretion panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale Sermorelin Spray supplied in?',
      a: 'Sermorelin Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 10 mg or 20 mg per unit. At 29 residues it sits in a comfortable middle range for solubility, dissolving cleanly in aqueous buffer without an organic co-solvent. Headspace is nitrogen-purged before capping to protect the methionine residue, and no reconstitution step is required.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Sermorelin Spray?',
      a: 'Store Sermorelin Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 30 days. Do not freeze: repeated freeze-thaw cycles accelerate both methionine oxidation and deamidation, and this sequence lacks the N-terminal protection that stabilizes Tesamorelin, so it is the more fragile of the two GHRH analogs. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Sermorelin Spray?',
      a: 'Sermorelin is the first 29 residues of growth hormone-releasing hormone, and that truncation is the whole point: laboratory investigations established that this fragment retains essentially all the receptor activity of the full 44-residue hormone, making it the minimal active sequence. It binds the GHRH receptor on pituitary somatotroph cells, which couples to adenylyl cyclase, raises cAMP and activates protein kinase A, driving growth hormone gene transcription through CREB and Pit-1. What separates Sermorelin from Tesamorelin is not the receptor but the stability. Sermorelin carries no N-terminal protecting group, so it is cleaved rapidly by the same aminopeptidase that Tesamorelin resists, which makes the pair a clean way to isolate enzymatic stability from receptor pharmacology.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Sermorelin Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary growth factor research compounds such as Ipamorelin. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale Sermorelin Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the single methionine residue and the asparagine positions prone to deamidation. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Endocrinology and pituitary cell biology groups are the primary users of Sermorelin, and it usually enters an experiment as the reference GHRH agonist rather than the compound under study. A lab working with cultured rat pituitary cells will use it to establish the baseline concentration-response curve for growth hormone release, then compare longer or modified analogs against that standard. Stepień and colleagues took it into a different setting, applying the 29-residue fragment to the NCI-H727 neuroendocrine tumor cell line and measuring proliferation alongside vascular endothelial growth factor and chromogranin A output, which opened a line of work on GHRH receptor signaling outside the pituitary. The most informative pairing remains Sermorelin against Tesamorelin, since the two share a receptor but differ entirely in enzymatic stability.',
    qualityAssurance:
      'Sermorelin presents a familiar mid-length peptide analytical profile with one instructive contrast. At 29 residues it separates cleanly on reverse-phase and gives a well-defined retention window, and LC-MS confirms the intact mass near 3358 Da. Three degradation routes are monitored: oxidation at the single methionine, which is the dominant stability-indicating marker, deamidation at the asparagine position, and truncated chains left by incomplete coupling during assembly. The instructive part is what is absent. Unlike Tesamorelin, this sequence carries no N-terminal protecting group, so the analytical method does not need to confirm an acyl modification is present, but the material is correspondingly more sensitive to enzymatic degradation once it leaves the controlled formulation.',
  },
};

const SERMORELIN_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Sermorelin Spray al por mayor?',
      a: 'Cada lote mayorista de Sermorelin Spray se verifica a una pureza ≥99.0% por HPLC de fase reversa y se confirma por LC-MS frente a la masa esperada cercana a 3358 Da. Cada envío incluye un certificado de análisis específico del lote. Tres cribados importan para esta secuencia: la oxidación de la única metionina, la desamidación en la posición de asparagina y las cadenas truncadas por acoplamiento incompleto, que son los fallos habituales al ensamblar un péptido de 29 residuos.',
    },
    {
      q: '¿Está aprobado Sermorelin Spray para uso terapéutico o consumo humano?',
      a: 'No. Sermorelin Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Este material RUO no es un producto farmacéutico y carece de indicación aprobada.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Sermorelin Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de secreción hipofisaria, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra Sermorelin Spray al por mayor?',
      a: 'Sermorelin Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 10 mg o 20 mg por unidad. Con 29 residuos se sitúa en un rango cómodo de solubilidad y se disuelve limpiamente en tampón acuoso sin codisolvente orgánico. El espacio de cabeza se purga con nitrógeno antes del sellado para proteger el residuo de metionina y no se requiere reconstitución.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Sermorelin Spray?',
      a: 'Almacene Sermorelin Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 30 días. No congelar: los ciclos repetidos aceleran tanto la oxidación de la metionina como la desamidación, y esta secuencia carece de la protección N-terminal que estabiliza a la tesamorelina, por lo que es el más frágil de los dos análogos de GHRH. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F) durante el tránsito.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Sermorelin Spray?',
      a: 'La sermorelina son los primeros 29 residuos de la hormona liberadora de hormona del crecimiento, y esa truncación es justamente el punto: las investigaciones de laboratorio establecieron que este fragmento conserva prácticamente toda la actividad sobre el receptor de la hormona completa de 44 residuos, convirtiéndolo en la secuencia activa mínima. Se une al receptor de GHRH en las células somatotropas hipofisarias, que se acopla a la adenilato ciclasa, eleva el cAMP y activa la proteína quinasa A, impulsando la transcripción del gen de la hormona del crecimiento mediante CREB y Pit-1. Lo que separa a la sermorelina de la tesamorelina no es el receptor sino la estabilidad. La sermorelina no lleva grupo protector N-terminal, por lo que es escindida rápidamente por la misma aminopeptidasa a la que resiste la tesamorelina, lo que convierte a la pareja en una forma limpia de aislar la estabilidad enzimática de la farmacología del receptor.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Sermorelin Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos de investigación de factores de crecimiento complementarios como la ipamorelina. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Sermorelin Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen el único residuo de metionina y las posiciones de asparagina propensas a desamidación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de endocrinología y biología celular hipofisaria son los principales usuarios de la sermorelina, que suele entrar en un experimento como agonista de GHRH de referencia más que como el compuesto en estudio. Un laboratorio que trabaja con células hipofisarias de rata en cultivo la emplea para establecer la curva concentración-respuesta basal de liberación de hormona del crecimiento y luego compara análogos más largos o modificados contra ese estándar. Stepień y colaboradores la llevaron a otro escenario, aplicando el fragmento de 29 residuos a la línea de tumor neuroendocrino NCI-H727 y midiendo la proliferación junto con la producción de factor de crecimiento endotelial vascular y cromogranina A, lo que abrió una línea de trabajo sobre la señalización del receptor de GHRH fuera de la hipófisis. La comparación más informativa sigue siendo sermorelina frente a tesamorelina, ya que comparten receptor pero difieren por completo en estabilidad enzimática.',
    qualityAssurance:
      'La sermorelina presenta un perfil analítico familiar de péptido de longitud media con un contraste instructivo. Con 29 residuos se separa limpiamente en fase reversa y da una ventana de retención bien definida, y la LC-MS confirma la masa intacta cerca de 3358 Da. Se vigilan tres rutas de degradación: la oxidación de la única metionina, que es el principal marcador indicador de estabilidad, la desamidación en la posición de asparagina, y las cadenas truncadas por acoplamiento incompleto durante el ensamblaje. Lo instructivo es lo que falta. A diferencia de la tesamorelina, esta secuencia no lleva grupo protector N-terminal, de modo que el método analítico no necesita confirmar la presencia de una modificación acilo, pero el material es correspondientemente más sensible a la degradación enzimática una vez fuera de la formulación controlada.',
  },
};

const SS_31_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale SS-31 Spray?',
      a: 'Every wholesale lot of SS-31 Spray is verified to ≥99.0% purity by reverse-phase HPLC and confirmed by LC-MS against the expected mass of 639.8 Da. Each shipment carries a batch-specific certificate of analysis. This tetrapeptide demands a screen most peptides do not: it contains a D-arginine and a non-standard dimethyltyrosine, so chiral purity is assessed alongside chemical purity, because a D-to-L epimer carries the correct mass and would pass a mass check undetected.',
    },
    {
      q: 'Is SS-31 Spray approved for therapeutic use or human consumption?',
      a: 'No. SS-31 Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. This RUO material is not a pharmaceutical product and carries no approved indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale SS-31 Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running mitochondrial bioenergetics panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale SS-31 Spray supplied in?',
      a: 'SS-31 Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 10 mg or 50 mg per unit. At four residues and roughly 640 Da it is by far the smallest peptide in our catalog, and its alternating aromatic-cationic design makes it freely water-soluble without any organic co-solvent. Headspace is nitrogen-purged before capping, and no reconstitution step is required.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for SS-31 Spray?',
      a: 'Store SS-31 Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 30 days. This tetrapeptide is unusually robust for a peptide, since its D-amino acid content resists peptidase attack and its small size leaves no folded structure to disrupt, but light protection still matters because the dimethyltyrosine aromatic ring is photosensitive. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for SS-31 Spray?',
      a: 'SS-31 does not bind a receptor at all. It is a four-residue aromatic-cationic peptide that partitions into the inner mitochondrial membrane and binds cardiolipin, the signature phospholipid found almost exclusively there. That binding does two things research has characterized in detail. It stabilizes the curvature of cristae membranes, preserving the architecture on which electron transport depends, and it prevents cardiolipin from converting cytochrome c into a peroxidase, which is the reaction that turns a damaged mitochondrion into a reactive oxygen species generator. Birk and colleagues established this cardiolipin interaction directly. Critically, its uptake does not depend on membrane potential, unlike lipophilic cation approaches, so it still concentrates in depolarized mitochondria where potential-driven agents fail.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale SS-31 Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary mitochondrial research compounds such as MOTS-c. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale SS-31 Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the non-standard dimethyltyrosine residue and the D-amino acid stereochemistry. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Mitochondrial biology labs and bioenergetics groups are the primary users of SS-31, and most experiments start on isolated mitochondria rather than whole cells. A typical run uses a Seahorse extracellular flux analyzer or a Clark-type oxygen electrode to measure oxygen consumption and ATP synthesis in mitochondria isolated from tissue, comparing treated and untreated preparations under normal and ischemic conditions. Birk and colleagues built the foundational work this way, showing that the compound restores electron transport in ischemic mitochondria specifically through cardiolipin. Cardiolipin biochemistry groups take a more direct route, using liposome systems built from defined lipid compositions to measure binding without any biological complexity. The membrane-potential-independence is the property most often tested, since it separates this compound from lipophilic cation approaches that fail in depolarized mitochondria.',
    qualityAssurance:
      'SS-31 is the smallest compound in our peptide catalog and, paradoxically, one of the more demanding to certify. At roughly 640 Da it gives a clean single-charge mass confirmation rather than the multiply-charged envelope larger peptides produce, and it elutes early on reverse-phase. The complication is stereochemistry. The sequence deliberately contains a D-amino acid and a non-standard methylated tyrosine, and an epimer in which that D-residue has inverted would carry exactly the correct molecular weight while being a different molecule. Mass spectrometry cannot see that difference, so chiral separation is run as a distinct assay rather than folded into the purity method. Beyond stereochemistry the compound is remarkably stable, since D-residues resist peptidase attack and four residues leave no fold to lose.',
  },
};

const SS_31_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de SS-31 Spray al por mayor?',
      a: 'Cada lote mayorista de SS-31 Spray se verifica a una pureza ≥99.0% por HPLC de fase reversa y se confirma por LC-MS frente a la masa esperada de 639.8 Da. Cada envío incluye un certificado de análisis específico del lote. Este tetrapéptido exige un cribado que la mayoría de los péptidos no necesita: contiene una D-arginina y una dimetiltirosina no estándar, por lo que se evalúa la pureza quiral junto con la química, ya que un epímero D a L tiene la masa correcta y pasaría inadvertido en una verificación de masa.',
    },
    {
      q: '¿Está aprobado SS-31 Spray para uso terapéutico o consumo humano?',
      a: 'No. SS-31 Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Este material RUO no es un producto farmacéutico y carece de indicación aprobada.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para SS-31 Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de bioenergética mitocondrial, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra SS-31 Spray al por mayor?',
      a: 'SS-31 Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 10 mg o 50 mg por unidad. Con cuatro residuos y unos 640 Da es con diferencia el péptido más pequeño de nuestro catálogo, y su diseño alternante aromático-catiónico lo hace libremente soluble en agua sin ningún codisolvente orgánico. El espacio de cabeza se purga con nitrógeno antes del sellado y no se requiere reconstitución.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de SS-31 Spray?',
      a: 'Almacene SS-31 Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 30 días. Este tetrapéptido es inusualmente robusto para un péptido, ya que su contenido de aminoácidos D resiste el ataque de peptidasas y su pequeño tamaño no deja estructura plegada que alterar, pero la protección frente a la luz sigue importando porque el anillo aromático de dimetiltirosina es fotosensible. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F) durante el tránsito.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para SS-31 Spray?',
      a: 'SS-31 no se une a ningún receptor. Es un péptido aromático-catiónico de cuatro residuos que se reparte hacia la membrana mitocondrial interna y se une a la cardiolipina, el fosfolípido característico que se encuentra casi exclusivamente allí. Esa unión hace dos cosas que la investigación ha caracterizado en detalle. Estabiliza la curvatura de las membranas de las crestas, preservando la arquitectura de la que depende el transporte de electrones, e impide que la cardiolipina convierta al citocromo c en una peroxidasa, la reacción que convierte a una mitocondria dañada en un generador de especies reactivas de oxígeno. Birk y colaboradores establecieron esta interacción con la cardiolipina de forma directa. De manera crucial, su captación no depende del potencial de membrana, a diferencia de los enfoques con cationes lipofílicos, por lo que sigue concentrándose en mitocondrias despolarizadas donde los agentes dirigidos por potencial fallan.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de SS-31 Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos de investigación mitocondrial complementarios como MOTS-c. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía SS-31 Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen el residuo no estándar de dimetiltirosina y la estereoquímica de los aminoácidos D. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los laboratorios de biología mitocondrial y los grupos de bioenergética son los principales usuarios de SS-31, y la mayoría de los experimentos comienzan en mitocondrias aisladas y no en células enteras. Una corrida típica usa un analizador de flujo extracelular Seahorse o un electrodo de oxígeno tipo Clark para medir el consumo de oxígeno y la síntesis de ATP en mitocondrias aisladas de tejido, comparando preparaciones tratadas y no tratadas en condiciones normales e isquémicas. Birk y colaboradores construyeron el trabajo fundacional de esta manera, mostrando que el compuesto restaura el transporte de electrones en mitocondrias isquémicas específicamente a través de la cardiolipina. Los grupos de bioquímica de cardiolipina toman una ruta más directa, con sistemas de liposomas de composición lipídica definida para medir la unión sin complejidad biológica. La independencia del potencial de membrana es la propiedad que más se pone a prueba, ya que separa a este compuesto de los enfoques con cationes lipofílicos que fallan en mitocondrias despolarizadas.',
    qualityAssurance:
      'SS-31 es el compuesto más pequeño de nuestro catálogo peptídico y, paradójicamente, uno de los más exigentes de certificar. Con unos 640 Da ofrece una confirmación de masa de carga simple en lugar de la envolvente de carga múltiple que producen los péptidos mayores, y eluye temprano en fase reversa. La complicación es la estereoquímica. La secuencia contiene deliberadamente un aminoácido D y una tirosina metilada no estándar, y un epímero en el que ese residuo D se hubiera invertido tendría exactamente el peso molecular correcto siendo una molécula distinta. La espectrometría de masas no puede ver esa diferencia, por lo que la separación quiral se corre como ensayo aparte y no integrada en el método de pureza. Más allá de la estereoquímica el compuesto es notablemente estable, ya que los residuos D resisten el ataque de peptidasas y cuatro residuos no dejan plegamiento que perder.',
  },
};

const MOTS_C_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale MOTS-c Spray?',
      a: 'Every wholesale lot of MOTS-c Spray is verified to ≥99.0% purity by reverse-phase HPLC and confirmed by LC-MS against the expected mass near 2175 Da. Each shipment carries a batch-specific certificate of analysis. This 16-residue sequence carries two methionines, giving it twice the usual oxidation exposure, so singly and doubly oxidized species are both resolved and reported alongside standard screens for truncated chains and residual synthesis reagents.',
    },
    {
      q: 'Is MOTS-c Spray approved for therapeutic use or human consumption?',
      a: 'No. MOTS-c Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. This RUO material is not a pharmaceutical product and carries no approved indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale MOTS-c Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running AMPK and mitochondrial signaling panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale MOTS-c Spray supplied in?',
      a: 'MOTS-c Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 10 mg or 40 mg per unit. At 16 residues it dissolves readily in aqueous buffer, and the pre-dissolved format is particularly useful here because the two methionine residues begin oxidizing on contact with air during any manual reconstitution step. Headspace is nitrogen-purged before capping, and no reconstitution is required.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for MOTS-c Spray?',
      a: 'Store MOTS-c Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 30 days. Minimize air exposure and avoid freeze-thaw cycling: with two methionines in a short sequence, oxidation is the limiting stability factor rather than aggregation, and each cycle increases headspace contact. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for MOTS-c Spray?',
      a: 'MOTS-c is unusual before you even reach its mechanism: it is encoded within mitochondrial DNA rather than the nuclear genome, one of only a handful of peptides with that origin. Lee and colleagues reported in 2015 that it acts on the folate and methionine cycle, and that the resulting accumulation of an intermediate called AICAR activates AMP-activated protein kinase, shifting cells toward glucose utilization. Kim and colleagues later found a second, separate role. Under metabolic stress the peptide translocates into the nucleus, where it associates with stress-responsive transcription factors and regulates antioxidant and metabolic gene programs. Acting in both the cytosol and the nucleus is rare for a peptide of this size, and it is why MOTS-c is studied differently from receptor ligands.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale MOTS-c Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary mitochondrial research compounds such as SS-31. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale MOTS-c Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the two oxidation-prone methionine residues. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Metabolic research groups, muscle physiology labs and aging biology programs are the primary users of MOTS-c. A metabolic lab will typically start in skeletal muscle myotubes or cultured hepatocytes, treating cells and then measuring AMPK phosphorylation by immunoblot alongside glucose uptake, which is the readout Lee and colleagues used to establish the compound as an AMPK activator working through the folate and methionine cycle. Aging groups run a different design entirely: Reynolds and colleagues reported that the peptide is exercise-induced and regulates age-dependent physical decline, so those labs use treadmill or wheel-running protocols in mice and track muscle homeostasis markers. A third line follows Kim and colleagues into nuclear translocation, using fractionation and imaging to watch the peptide move into the nucleus under metabolic stress.',
    qualityAssurance:
      'MOTS-c has one dominant analytical concern and it is a straightforward one. The 16-residue sequence contains two methionine residues, which is a high proportion for a peptide this short and means oxidation is the limiting factor across the shelf life rather than aggregation or truncation. Both the singly and doubly oxidized forms are resolved on reverse-phase and reported separately, since a certificate that lumps them together understates how much intact material remains. LC-MS confirms the intact mass near 2175 Da, and the oxidized species appear as clean, predictable mass increments that are easy to quantify. Nitrogen purging and the pre-dissolved format both address the same vulnerability, because the highest-risk moment for a methionine-rich peptide is the air exposure during manual reconstitution.',
  },
};

const MOTS_C_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de MOTS-c Spray al por mayor?',
      a: 'Cada lote mayorista de MOTS-c Spray se verifica a una pureza ≥99.0% por HPLC de fase reversa y se confirma por LC-MS frente a la masa esperada cercana a 2175 Da. Cada envío incluye un certificado de análisis específico del lote. Esta secuencia de 16 residuos lleva dos metioninas, lo que duplica la exposición habitual a la oxidación, por lo que las especies mono y dioxidadas se resuelven y reportan junto con los cribados estándar de cadenas truncadas y reactivos de síntesis residuales.',
    },
    {
      q: '¿Está aprobado MOTS-c Spray para uso terapéutico o consumo humano?',
      a: 'No. MOTS-c Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Este material RUO no es un producto farmacéutico y carece de indicación aprobada.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para MOTS-c Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de AMPK y señalización mitocondrial, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra MOTS-c Spray al por mayor?',
      a: 'MOTS-c Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 10 mg o 40 mg por unidad. Con 16 residuos se disuelve con facilidad en tampón acuoso, y el formato predisuelto resulta especialmente útil aquí porque los dos residuos de metionina empiezan a oxidarse al contacto con el aire durante cualquier reconstitución manual. El espacio de cabeza se purga con nitrógeno antes del sellado y no se requiere reconstitución.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de MOTS-c Spray?',
      a: 'Almacene MOTS-c Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 30 días. Minimice la exposición al aire y evite los ciclos de congelación-descongelación: con dos metioninas en una secuencia corta, la oxidación es el factor limitante de estabilidad más que la agregación, y cada ciclo aumenta el contacto con el espacio de cabeza. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F) durante el tránsito.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para MOTS-c Spray?',
      a: 'MOTS-c es inusual incluso antes de llegar a su mecanismo: está codificado dentro del ADN mitocondrial y no en el genoma nuclear, uno de los pocos péptidos con ese origen. Lee y colaboradores reportaron en 2015 que actúa sobre el ciclo del folato y la metionina, y que la acumulación resultante de un intermediario llamado AICAR activa la proteína quinasa activada por AMP, desplazando a las células hacia la utilización de glucosa. Kim y colaboradores encontraron después un segundo papel independiente. Bajo estrés metabólico el péptido se transloca al núcleo, donde se asocia con factores de transcripción sensibles al estrés y regula programas génicos antioxidantes y metabólicos. Actuar tanto en el citosol como en el núcleo es raro para un péptido de este tamaño, y es la razón por la que MOTS-c se estudia de forma distinta a los ligandos de receptores.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de MOTS-c Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos de investigación mitocondrial complementarios como SS-31. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía MOTS-c Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen los dos residuos de metionina propensos a oxidación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de investigación metabólica, los laboratorios de fisiología muscular y los programas de biología del envejecimiento son los principales usuarios de MOTS-c. Un laboratorio metabólico suele comenzar en miotubos de músculo esquelético o hepatocitos en cultivo, tratando las células y midiendo luego la fosforilación de AMPK por inmunotransferencia junto con la captación de glucosa, que es la lectura que Lee y colaboradores usaron para establecerlo como activador de AMPK a través del ciclo del folato y la metionina. Los grupos de envejecimiento aplican un diseño distinto: Reynolds y colaboradores reportaron que el péptido es inducido por el ejercicio y regula el declive físico dependiente de la edad, por lo que esos laboratorios usan protocolos de cinta o rueda en ratones y siguen marcadores de homeostasis muscular. Una tercera línea sigue a Kim y colaboradores hacia la translocación nuclear, usando fraccionamiento e imagen para observar al péptido entrar al núcleo bajo estrés metabólico.',
    qualityAssurance:
      'MOTS-c tiene una preocupación analítica dominante y es sencilla. La secuencia de 16 residuos contiene dos metioninas, una proporción alta para un péptido tan corto, lo que hace de la oxidación el factor limitante durante la vida útil más que la agregación o la truncación. Tanto la forma mono como la dioxidada se resuelven en fase reversa y se reportan por separado, ya que un certificado que las agrupa subestima cuánto material intacto queda. La LC-MS confirma la masa intacta cerca de 2175 Da, y las especies oxidadas aparecen como incrementos de masa limpios y predecibles, fáciles de cuantificar. La purga con nitrógeno y el formato predisuelto abordan la misma vulnerabilidad, porque el momento de mayor riesgo para un péptido rico en metionina es la exposición al aire durante la reconstitución manual.',
  },
};

const MELANOTAN_1_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Melanotan-1 Spray?',
      a: 'Every wholesale lot of Melanotan-1 Spray is verified to ≥99.0% purity by reverse-phase HPLC and confirmed by LC-MS against the expected mass near 1647 Da. Each shipment carries a batch-specific certificate of analysis. Chiral purity is assessed separately here, because the deliberate D-phenylalanine at position seven is what gives the molecule its extended activity, and an inverted epimer would carry the identical mass while behaving differently.',
    },
    {
      q: 'Is Melanotan-1 Spray approved for therapeutic use or human consumption?',
      a: 'No. Melanotan-1 Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. It is not supplied for cosmetic use of any kind.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Melanotan-1 Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running melanocortin receptor panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale Melanotan-1 Spray supplied in?',
      a: 'Melanotan-1 Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 10 mg per unit. Amber glass earns its place here: the tryptophan residue absorbs in the near-ultraviolet and photodegrades under ambient light, which is a genuine handling constraint for this sequence. Headspace is nitrogen-purged before capping, and no reconstitution step is required.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Melanotan-1 Spray?',
      a: 'Store Melanotan-1 Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 30 days. Light protection is more than routine caution for this peptide, since tryptophan photodegradation proceeds even at room lighting levels. Avoid freeze-thaw cycling. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Melanotan-1 Spray?',
      a: 'Melanotan-1, known in the literature as afamelanotide, is a 13-residue analog of alpha-melanocyte-stimulating hormone that acts as a selective agonist at the melanocortin-1 receptor on melanocytes. Receptor activation raises cAMP and activates protein kinase A, which phosphorylates CREB and drives expression of the transcription factor MITF. MITF in turn controls transcription of tyrosinase, the rate-limiting enzyme of eumelanin synthesis. Two engineered substitutions define the molecule: a norleucine replacing the oxidation-prone methionine at position four, and a D-phenylalanine at position seven that blocks enzymatic degradation and locks the bioactive conformation. Sawyer and colleagues reported the result as ultralong biological activity. Unlike Melanotan-2, a cyclic analog with broad activity across several melanocortin receptors, Melanotan-1 is the selective one.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Melanotan-1 Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary melanocortin research compounds such as Melanotan-2. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale Melanotan-1 Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the D-phenylalanine stereocentre and the tryptophan residue. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Pigment cell biology labs and melanocortin receptor pharmacology groups are the primary users of Melanotan-1. The classic experiment uses cultured melanocytes or B16 melanoma cells, where a lab treats the cells and then measures tyrosinase activity and melanin content spectrophotometrically over several days, building a concentration-response curve for the pigmentation pathway. Receptor pharmacology groups run a different design, using cell lines expressing individual melanocortin receptor subtypes to establish selectivity, which is where the comparison with Melanotan-2 becomes essential: the cyclic analog engages several receptor subtypes while this linear one is far more confined to melanocortin-1. Structure-activity groups still return to the original design question, since the pair of substitutions that Sawyer and colleagues introduced remains a textbook case of rational peptide engineering.',
    qualityAssurance:
      'Melanotan-1 raises two analytical questions that a routine purity method would miss. The first is stereochemistry. The D-phenylalanine at position seven is the entire reason the molecule resists degradation, and an epimer in which that centre has inverted carries exactly the same molecular weight, so mass spectrometry cannot detect it. Chiral separation runs as a distinct assay. The second is photostability. The sequence contains a tryptophan residue whose indole ring absorbs in the near-ultraviolet and degrades under ordinary room lighting, which makes light exposure during handling a measurable source of loss rather than a theoretical one. Amber primary containers address this directly. Notably, the norleucine substitution removes the methionine that native alpha-melanocyte-stimulating hormone carries, so oxidation at that position is designed out.',
  },
};

const MELANOTAN_1_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Melanotan-1 Spray al por mayor?',
      a: 'Cada lote mayorista de Melanotan-1 Spray se verifica a una pureza ≥99.0% por HPLC de fase reversa y se confirma por LC-MS frente a la masa esperada cercana a 1647 Da. Cada envío incluye un certificado de análisis específico del lote. La pureza quiral se evalúa por separado, porque la D-fenilalanina deliberada en la posición siete es lo que da a la molécula su actividad prolongada, y un epímero invertido tendría la masa idéntica comportándose de forma distinta.',
    },
    {
      q: '¿Está aprobado Melanotan-1 Spray para uso terapéutico o consumo humano?',
      a: 'No. Melanotan-1 Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. No se suministra para uso cosmético de ningún tipo.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Melanotan-1 Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de receptores de melanocortina, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra Melanotan-1 Spray al por mayor?',
      a: 'Melanotan-1 Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 10 mg por unidad. El vidrio ámbar se justifica aquí: el residuo de triptófano absorbe en el ultravioleta cercano y se fotodegrada bajo luz ambiental, lo que constituye una restricción real de manipulación para esta secuencia. El espacio de cabeza se purga con nitrógeno antes del sellado y no se requiere reconstitución.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Melanotan-1 Spray?',
      a: 'Almacene Melanotan-1 Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 30 días. La protección frente a la luz es más que una precaución rutinaria para este péptido, ya que la fotodegradación del triptófano avanza incluso con iluminación ambiental. Evite los ciclos de congelación-descongelación. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F) durante el tránsito.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Melanotan-1 Spray?',
      a: 'El Melanotan-1, conocido en la literatura como afamelanotida, es un análogo de 13 residuos de la hormona estimulante de melanocitos alfa que actúa como agonista selectivo del receptor de melanocortina-1 en los melanocitos. La activación del receptor eleva el cAMP y activa la proteína quinasa A, que fosforila el CREB e impulsa la expresión del factor de transcripción MITF. MITF controla a su vez la transcripción de la tirosinasa, la enzima limitante de la síntesis de eumelanina. Dos sustituciones de ingeniería definen la molécula: una norleucina que reemplaza a la metionina propensa a oxidación en la posición cuatro, y una D-fenilalanina en la posición siete que bloquea la degradación enzimática y fija la conformación bioactiva. Sawyer y colaboradores describieron el resultado como una actividad biológica ultraprolongada. A diferencia del Melanotan-2, un análogo cíclico con actividad amplia sobre varios receptores de melanocortina, el Melanotan-1 es el selectivo.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Melanotan-1 Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos de investigación de melanocortina complementarios como el Melanotan-2. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Melanotan-1 Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen el centro quiral de D-fenilalanina y el residuo de triptófano. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los laboratorios de biología de células pigmentarias y los grupos de farmacología de receptores de melanocortina son los principales usuarios del Melanotan-1. El experimento clásico usa melanocitos en cultivo o células de melanoma B16, donde el laboratorio trata las células y luego mide la actividad de tirosinasa y el contenido de melanina por espectrofotometría a lo largo de varios días, construyendo una curva concentración-respuesta para la vía de pigmentación. Los grupos de farmacología de receptores aplican otro diseño, con líneas celulares que expresan subtipos individuales de receptores de melanocortina para establecer la selectividad, y ahí la comparación con el Melanotan-2 resulta esencial: el análogo cíclico activa varios subtipos mientras que este lineal está mucho más confinado al melanocortina-1. Los grupos de relación estructura-actividad siguen volviendo a la pregunta de diseño original, ya que el par de sustituciones que introdujeron Sawyer y colaboradores sigue siendo un caso de manual de ingeniería racional de péptidos.',
    qualityAssurance:
      'El Melanotan-1 plantea dos preguntas analíticas que un método de pureza rutinario pasaría por alto. La primera es la estereoquímica. La D-fenilalanina en la posición siete es la razón misma por la que la molécula resiste la degradación, y un epímero con ese centro invertido tiene exactamente el mismo peso molecular, de modo que la espectrometría de masas no puede detectarlo. La separación quiral se corre como ensayo aparte. La segunda es la fotoestabilidad. La secuencia contiene un residuo de triptófano cuyo anillo indólico absorbe en el ultravioleta cercano y se degrada bajo iluminación ambiental común, lo que convierte la exposición a la luz durante la manipulación en una fuente medible de pérdida y no en una teórica. Los envases primarios ámbar lo abordan directamente. Cabe destacar que la sustitución por norleucina elimina la metionina que porta la hormona estimulante de melanocitos alfa nativa, de modo que la oxidación en esa posición queda descartada por diseño.',
  },
};

const LL_37_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale LL-37 Spray?',
      a: 'Every wholesale lot of LL-37 Spray is verified to ≥99.0% purity by reverse-phase HPLC and confirmed by LC-MS against the expected mass near 4493 Da. Each shipment carries a batch-specific certificate of analysis. Strongly cationic peptides bring a specific analytical difficulty: they adsorb to glass and plastic surfaces during handling, so recovery is validated as part of the method rather than assumed, alongside standard screens for truncated chains and deamidation.',
    },
    {
      q: 'Is LL-37 Spray approved for therapeutic use or human consumption?',
      a: 'No. LL-37 Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. This RUO material is not a pharmaceutical product and carries no approved indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale LL-37 Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running antimicrobial and innate immune assay panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale LL-37 Spray supplied in?',
      a: 'LL-37 Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 1 mg per unit. The lower unit strength reflects how this peptide is actually used, since antimicrobial assays work at low micromolar concentrations rather than the milligram loads metabolic compounds require. The pre-dissolved format also sidesteps the adsorption losses that cationic peptides suffer during manual reconstitution. Headspace is nitrogen-purged before capping.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for LL-37 Spray?',
      a: 'Store LL-37 Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 30 days. Avoid freeze-thaw cycling and avoid transferring between containers unnecessarily, because each transfer loses cationic peptide to surface adsorption and quietly lowers the working concentration. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for LL-37 Spray?',
      a: 'LL-37 is the only cathelicidin peptide humans produce, released from a precursor protein by enzymatic cleavage, and it works through two distinct mechanisms. The first is physical rather than biochemical: the peptide is unstructured in aqueous solution but folds into an amphipathic helix on contact with anionic bacterial membranes, then disrupts them through a carpet-like permeabilization. Its strong net positive charge is what confers selectivity, since bacterial membranes are anionic while mammalian membranes are largely neutral at the surface. The second mechanism is host signaling: research shows LL-37 engages formyl peptide receptor 2 on leukocytes, driving chemotaxis and activation, and it also binds and neutralizes bacterial lipopolysaccharide directly.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale LL-37 Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary immune research compounds such as KPV. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale LL-37 Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the highly cationic backbone against surface adsorption. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Microbiology labs, innate immunity groups and biophysics teams all work with LL-37, and each measures something different. A microbiology lab runs standard broth microdilution to establish minimum inhibitory concentrations against bacterial panels, working at low micromolar levels. Biophysics groups take the more mechanistic route, using circular dichroism to watch the peptide transition from unstructured to helical as anionic lipid vesicles are added, which is the single clearest demonstration that its folding is conditional on the membrane it encounters. Immunology groups follow the host-directed arm instead: Yang and colleagues reported that it stimulates adipose-derived stromal cells through early growth response 1 and MAPK signaling, and chemotaxis assays through formyl peptide receptor 2 remain a common design.',
    qualityAssurance:
      'LL-37 presents an analytical problem that has nothing to do with chemistry and everything to do with handling. The peptide carries a strong net positive charge, and cationic peptides adsorb readily to glass and plastic surfaces, which means a sample can lose material between weighing and measurement without any degradation occurring at all. Recovery is therefore validated as part of the method rather than assumed, and ion-pairing conditions on the reverse-phase separation are tuned to keep the peptide eluting reproducibly. LC-MS confirms the intact mass near 4493 Da. The sequence contains no cysteine, so disulfide scrambling is not a concern, and it is unstructured in aqueous buffer, meaning there is no folded conformation to preserve during storage. Truncated chains and deamidation complete the monitored panel.',
  },
};

const LL_37_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de LL-37 Spray al por mayor?',
      a: 'Cada lote mayorista de LL-37 Spray se verifica a una pureza ≥99.0% por HPLC de fase reversa y se confirma por LC-MS frente a la masa esperada cercana a 4493 Da. Cada envío incluye un certificado de análisis específico del lote. Los péptidos fuertemente catiónicos plantean una dificultad analítica específica: se adsorben a superficies de vidrio y plástico durante la manipulación, por lo que la recuperación se valida como parte del método en lugar de darse por supuesta, junto con cribados estándar de cadenas truncadas y desamidación.',
    },
    {
      q: '¿Está aprobado LL-37 Spray para uso terapéutico o consumo humano?',
      a: 'No. LL-37 Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Este material RUO no es un producto farmacéutico y carece de indicación aprobada.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para LL-37 Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles antimicrobianos y de inmunidad innata, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra LL-37 Spray al por mayor?',
      a: 'LL-37 Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 1 mg por unidad. La menor concentración por unidad refleja cómo se usa realmente este péptido, ya que los ensayos antimicrobianos trabajan a concentraciones micromolares bajas y no con las cargas en miligramos que requieren los compuestos metabólicos. El formato predisuelto también evita las pérdidas por adsorción que sufren los péptidos catiónicos durante la reconstitución manual. El espacio de cabeza se purga con nitrógeno antes del sellado.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de LL-37 Spray?',
      a: 'Almacene LL-37 Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 30 días. Evite los ciclos de congelación-descongelación y las transferencias innecesarias entre recipientes, porque cada trasvase pierde péptido catiónico por adsorción superficial y reduce silenciosamente la concentración de trabajo. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F) durante el tránsito.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para LL-37 Spray?',
      a: 'LL-37 es la única catelicidina que producen los humanos, liberada de una proteína precursora por corte enzimático, y actúa mediante dos mecanismos distintos. El primero es físico más que bioquímico: el péptido carece de estructura en solución acuosa pero se pliega en una hélice anfipática al contactar con membranas bacterianas aniónicas y luego las altera mediante una permeabilización tipo alfombra. Su fuerte carga positiva neta es lo que le confiere selectividad, ya que las membranas bacterianas son aniónicas mientras que las de mamífero son en gran medida neutras en su superficie. El segundo mecanismo es de señalización del hospedador: la investigación muestra que LL-37 activa el receptor de péptidos formilados 2 en los leucocitos, impulsando quimiotaxis y activación, y además se une y neutraliza directamente el lipopolisacárido bacteriano.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de LL-37 Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos de investigación inmunitaria complementarios como el KPV. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía LL-37 Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen el esqueleto fuertemente catiónico frente a la adsorción superficial. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los laboratorios de microbiología, los grupos de inmunidad innata y los equipos de biofísica trabajan todos con LL-37, y cada uno mide algo distinto. Un laboratorio de microbiología ejecuta microdilución en caldo estándar para establecer concentraciones mínimas inhibitorias frente a paneles bacterianos, trabajando a niveles micromolares bajos. Los grupos de biofísica toman la ruta más mecanística, usando dicroísmo circular para observar la transición del péptido de desestructurado a helicoidal a medida que se añaden vesículas lipídicas aniónicas, lo que constituye la demostración más clara de que su plegamiento depende de la membrana que encuentra. Los grupos de inmunología siguen en cambio el brazo dirigido al hospedador: Yang y colaboradores reportaron que estimula células estromales derivadas de tejido adiposo a través de la respuesta de crecimiento temprano 1 y la señalización MAPK, y los ensayos de quimiotaxis vía el receptor de péptidos formilados 2 siguen siendo un diseño habitual.',
    qualityAssurance:
      'LL-37 presenta un problema analítico que nada tiene que ver con la química y todo con la manipulación. El péptido porta una fuerte carga positiva neta, y los péptidos catiónicos se adsorben con facilidad a superficies de vidrio y plástico, lo que significa que una muestra puede perder material entre el pesaje y la medición sin que ocurra degradación alguna. Por eso la recuperación se valida como parte del método en lugar de darse por supuesta, y las condiciones de par iónico en la separación de fase reversa se ajustan para que el péptido eluya de forma reproducible. La LC-MS confirma la masa intacta cerca de 4493 Da. La secuencia no contiene cisteína, por lo que la reorganización de disulfuros no es una preocupación, y carece de estructura en tampón acuoso, de modo que no hay conformación plegada que preservar durante el almacenamiento. Las cadenas truncadas y la desamidación completan el panel vigilado.',
  },
};

const LIPO_C_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Lipo-C Spray?',
      a: 'Every wholesale lot of Lipo-C Spray is verified by HPLC and LC-MS, with each of the three components quantified independently against its own reference standard rather than assessed as a single peak. Each shipment carries a batch-specific certificate of analysis reporting both individual component purity and the blend ratio. Methionine oxidation is the primary degradation screen, since it is the only oxidation-sensitive component in the formulation.',
    },
    {
      q: 'Is Lipo-C Spray approved for therapeutic use or human consumption?',
      a: 'No. Lipo-C Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. It is a laboratory reagent blend, not a nutritional or dietary product.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Lipo-C Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running hepatic lipid metabolism panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale Lipo-C Spray supplied in?',
      a: 'Lipo-C Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 120 mg combined per unit. All three components are small, highly water-soluble molecules rather than peptides, so the solution is stable without any organic co-solvent and there is no aggregation risk of the kind peptide formulations face. Headspace is nitrogen-purged before capping to protect the methionine component, and no reconstitution is required.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Lipo-C Spray?',
      a: 'Store Lipo-C Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 60 days, a longer window than our peptide products because small molecules degrade more slowly in solution. Avoid freeze-thaw cycling, which can cause differential crystallization and shift the ratio between components. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Lipo-C Spray?',
      a: 'Lipo-C has no single molecular target, and stating that plainly matters more than inventing one. It is a blend of methionine, inositol and choline whose components converge on hepatic phosphatidylcholine synthesis by two independent routes. Choline is the direct substrate for the CDP-choline pathway, the main route to phosphatidylcholine. Methionine feeds the one-carbon cycle that generates S-adenosylmethionine, the methyl donor for the alternative route in which phosphatidylethanolamine is methylated to phosphatidylcholine. Both matter because hepatic export of lipid as very-low-density lipoprotein requires phosphatidylcholine, which is why choline restriction causes lipid to accumulate in liver models. Inositol contributes separately, feeding phosphoinositide signaling rather than the phosphatidylcholine routes.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Lipo-C Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary amino acid and metabolic research compounds. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale Lipo-C Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the methionine component against oxidation and the ratio between the three components. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Hepatology and lipid metabolism groups are the primary users of this blend, and the experimental logic is usually subtractive rather than additive. A liver research lab working with cultured hepatocytes will place cells in choline-restricted medium, watch lipid droplets accumulate as very-low-density lipoprotein export stalls, and then reintroduce the components to see which one rescues the phenotype. That design answers a question a combined preparation alone cannot, since it separates the contribution of the direct choline route from the methylation route that methionine supplies. Corbin and colleagues established the clinical relevance of that one-carbon connection to hepatic lipid accumulation, and van der Veen and colleagues mapped the two phosphatidylcholine pathways in detail. Inositol is usually studied on its own axis, in phosphoinositide signaling work.',
    qualityAssurance:
      'Verifying a blend is a different exercise from verifying a single compound, and the difference is worth being explicit about. There is no meaningful single purity figure for Lipo-C, because a purity percentage describes one substance and this formulation contains three. Each component is therefore quantified independently against its own reference standard, and the certificate reports both the individual purity figures and the ratio between them, since a blend whose components are each pure but incorrectly proportioned is still out of specification. The three separate well on reverse-phase because they differ substantially in polarity. Methionine is the only oxidation-sensitive component and provides the stability-indicating marker. Because all three are small molecules rather than peptides, aggregation and conformational change are simply not applicable.',
  },
};

const LIPO_C_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Lipo-C Spray al por mayor?',
      a: 'Cada lote mayorista de Lipo-C Spray se verifica por HPLC y LC-MS, cuantificando cada uno de los tres componentes de forma independiente frente a su propio estándar de referencia en lugar de evaluarlos como un solo pico. Cada envío incluye un certificado de análisis específico del lote que reporta tanto la pureza individual de cada componente como la proporción de la mezcla. La oxidación de la metionina es el cribado de degradación principal, ya que es el único componente sensible a oxidación de la formulación.',
    },
    {
      q: '¿Está aprobado Lipo-C Spray para uso terapéutico o consumo humano?',
      a: 'No. Lipo-C Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Es una mezcla de reactivos de laboratorio, no un producto nutricional ni dietético.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Lipo-C Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de metabolismo lipídico hepático, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra Lipo-C Spray al por mayor?',
      a: 'Lipo-C Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 120 mg combinados por unidad. Los tres componentes son moléculas pequeñas y muy solubles en agua, no péptidos, por lo que la solución es estable sin codisolvente orgánico y no existe el riesgo de agregación que enfrentan las formulaciones peptídicas. El espacio de cabeza se purga con nitrógeno antes del sellado para proteger el componente de metionina y no se requiere reconstitución.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Lipo-C Spray?',
      a: 'Almacene Lipo-C Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 60 días, una ventana más amplia que la de nuestros productos peptídicos porque las moléculas pequeñas se degradan más lentamente en solución. Evite los ciclos de congelación-descongelación, que pueden provocar cristalización diferencial y alterar la proporción entre componentes. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F) durante el tránsito.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Lipo-C Spray?',
      a: 'Lipo-C no tiene una diana molecular única, y decirlo con claridad importa más que inventar una. Es una mezcla de metionina, inositol y colina cuyos componentes convergen en la síntesis hepática de fosfatidilcolina por dos rutas independientes. La colina es el sustrato directo de la vía CDP-colina, la ruta principal hacia la fosfatidilcolina. La metionina alimenta el ciclo de un carbono que genera S-adenosilmetionina, el donador de metilos de la ruta alternativa en la que la fosfatidiletanolamina se metila a fosfatidilcolina. Ambas importan porque la exportación hepática de lípidos como lipoproteína de muy baja densidad requiere fosfatidilcolina, razón por la cual la restricción de colina provoca acumulación de lípidos en modelos hepáticos. El inositol contribuye por separado, alimentando la señalización de fosfoinosítidos y no las rutas de fosfatidilcolina.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Lipo-C Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con aminoácidos complementarios y compuestos de investigación metabólica. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Lipo-C Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen el componente de metionina frente a la oxidación y la proporción entre los tres componentes. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de hepatología y metabolismo lipídico son los principales usuarios de esta mezcla, y la lógica experimental suele ser sustractiva más que aditiva. Un laboratorio de investigación hepática que trabaja con hepatocitos en cultivo coloca las células en medio restringido en colina, observa cómo se acumulan las gotas lipídicas al detenerse la exportación de lipoproteína de muy baja densidad, y luego reintroduce los componentes para ver cuál rescata el fenotipo. Ese diseño responde una pregunta que una preparación combinada por sí sola no puede, ya que separa la contribución de la ruta directa de la colina de la ruta de metilación que aporta la metionina. Corbin y colaboradores establecieron la relevancia clínica de esa conexión de un carbono con la acumulación lipídica hepática, y van der Veen y colaboradores mapearon en detalle las dos vías de la fosfatidilcolina. El inositol suele estudiarse en su propio eje, en trabajos de señalización de fosfoinosítidos.',
    qualityAssurance:
      'Verificar una mezcla es un ejercicio distinto de verificar un compuesto único, y conviene ser explícito al respecto. No existe una cifra única y significativa de pureza para Lipo-C, porque un porcentaje de pureza describe una sustancia y esta formulación contiene tres. Por eso cada componente se cuantifica de forma independiente frente a su propio estándar de referencia, y el certificado reporta tanto las cifras individuales de pureza como la proporción entre ellas, ya que una mezcla cuyos componentes son puros pero están mal proporcionados sigue estando fuera de especificación. Los tres se separan bien en fase reversa porque difieren sustancialmente en polaridad. La metionina es el único componente sensible a oxidación y aporta el marcador indicador de estabilidad. Como los tres son moléculas pequeñas y no péptidos, la agregación y el cambio conformacional simplemente no aplican.',
  },
};

const L_CARNITINE_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale L-Carnitine Spray?',
      a: 'Every wholesale lot of L-Carnitine Spray is verified to ≥99.0% purity and confirmed by LC-MS against the expected mass of 161.2 Da. Each shipment carries a batch-specific certificate of analysis. This compound needs a different chromatographic approach than our peptides: it is a small zwitterion that barely retains on standard reverse-phase columns, so the method uses ion-pairing or hydrophilic interaction separation, and D-carnitine is screened as the key stereochemical impurity.',
    },
    {
      q: 'Is L-Carnitine Spray approved for therapeutic use or human consumption?',
      a: 'No. L-Carnitine Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. It is a laboratory reagent, not a nutritional or dietary product.',
    },
    {
      q: 'What is the minimum order quantity for wholesale L-Carnitine Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running fatty acid oxidation panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale L-Carnitine Spray supplied in?',
      a: 'L-Carnitine Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 400 mg per unit. Carnitine is strongly hygroscopic in solid form and will pull moisture from ambient air within minutes of opening a vial, which makes accurate weighing genuinely difficult. Supplying it pre-dissolved removes that problem entirely. Headspace is nitrogen-purged before capping, and no reconstitution is required.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for L-Carnitine Spray?',
      a: 'Store L-Carnitine Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 60 days, a longer window than our peptide products because small molecules degrade far more slowly in solution. Freeze-thaw cycling is tolerated better here than by any peptide in the catalog, since there is no folded structure to disrupt. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are fine.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for L-Carnitine Spray?',
      a: 'L-Carnitine has no receptor. It is the carrier molecule in a transport system, and understanding that changes how it is studied. Long-chain fatty acids cannot cross the inner mitochondrial membrane while attached to coenzyme A, so carnitine palmitoyltransferase 1 on the outer membrane swaps the coenzyme A for carnitine, producing an acylcarnitine. That acylcarnitine crosses via a dedicated translocase, and carnitine palmitoyltransferase 2 on the inner face reverses the swap so beta-oxidation can begin. Carnitine palmitoyltransferase 1 is the rate-limiting step of the whole pathway and is switched off by malonyl-CoA. Carnitine also buffers the acyl-CoA to free coenzyme A ratio by exporting surplus acyl groups.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale L-Carnitine Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary amino acid research compounds such as Glutathione. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale L-Carnitine Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the zwitterionic compound against moisture uptake. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Metabolic biochemistry groups and mitochondrial physiology labs are the main users of L-Carnitine, and the standard readout is not a receptor assay at all. A lab studying fatty acid oxidation will incubate isolated mitochondria or cultured hepatocytes with a labelled long-chain fatty acid and measure how much reaches beta-oxidation with and without carnitine present, since the pathway simply stalls without it. Acylcarnitine profiling by tandem mass spectrometry is the other workhorse method, because the pattern of acylcarnitine species that accumulate identifies exactly where in the chain a block sits. Longo and colleagues built much of the framework describing carnitine transport and the enzymes that move it, and their work remains the reference point for interpreting those profiles.',
    qualityAssurance:
      'L-Carnitine sits apart from the rest of our catalog analytically because it is not a peptide. It carries both a positive and a negative charge at neutral pH, making it one of the most water-soluble compounds we supply and almost unretained on a standard reverse-phase column, so the method relies on ion-pairing or hydrophilic interaction separation instead. Mass confirmation is straightforward at 161.2 Da, with no multiply-charged envelope to interpret. The critical screen is stereochemical: the D-enantiomer has the identical mass and would pass any mass check undetected, so chiral separation runs as its own assay. Solid carnitine is aggressively hygroscopic, which is precisely why the pre-dissolved format improves concentration accuracy over a powder.',
  },
};

const L_CARNITINE_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de L-Carnitine Spray al por mayor?',
      a: 'Cada lote mayorista de L-Carnitine Spray se verifica a una pureza ≥99.0% y se confirma por LC-MS frente a la masa esperada de 161.2 Da. Cada envío incluye un certificado de análisis específico del lote. Este compuesto exige un enfoque cromatográfico distinto al de nuestros péptidos: es un zwitterión pequeño que apenas se retiene en columnas de fase reversa estándar, por lo que el método usa par iónico o interacción hidrofílica, y la D-carnitina se criba como impureza estereoquímica clave.',
    },
    {
      q: '¿Está aprobado L-Carnitine Spray para uso terapéutico o consumo humano?',
      a: 'No. L-Carnitine Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Es un reactivo de laboratorio, no un producto nutricional ni dietético.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para L-Carnitine Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de oxidación de ácidos grasos, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra L-Carnitine Spray al por mayor?',
      a: 'L-Carnitine Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 400 mg por unidad. La carnitina es fuertemente higroscópica en forma sólida y capta humedad del aire ambiental en minutos tras abrir un vial, lo que dificulta realmente el pesaje exacto. Suministrarla predisuelta elimina ese problema por completo. El espacio de cabeza se purga con nitrógeno antes del sellado y no se requiere reconstitución.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de L-Carnitine Spray?',
      a: 'Almacene L-Carnitine Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 60 días, una ventana más amplia que la de nuestros péptidos porque las moléculas pequeñas se degradan mucho más lentamente en solución. Los ciclos de congelación-descongelación se toleran mejor aquí que en cualquier péptido del catálogo, ya que no hay estructura plegada que alterar. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F).',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para L-Carnitine Spray?',
      a: 'La L-carnitina no tiene receptor. Es la molécula transportadora de un sistema de transporte, y entender eso cambia cómo se estudia. Los ácidos grasos de cadena larga no pueden cruzar la membrana mitocondrial interna unidos a la coenzima A, de modo que la carnitina palmitoiltransferasa 1 de la membrana externa intercambia la coenzima A por carnitina y produce una acilcarnitina. Esa acilcarnitina cruza por una translocasa dedicada, y la carnitina palmitoiltransferasa 2 de la cara interna revierte el intercambio para que comience la beta-oxidación. La carnitina palmitoiltransferasa 1 es el paso limitante de toda la vía y se apaga con malonil-CoA. La carnitina además amortigua la relación acil-CoA a coenzima A libre exportando grupos acilo excedentes.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de L-Carnitine Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con aminoácidos de investigación complementarios como el glutatión. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía L-Carnitine Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen el compuesto zwitteriónico frente a la absorción de humedad. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de bioquímica metabólica y los laboratorios de fisiología mitocondrial son los principales usuarios de la L-carnitina, y la lectura estándar no es un ensayo de receptor. Un laboratorio que estudia la oxidación de ácidos grasos incuba mitocondrias aisladas o hepatocitos en cultivo con un ácido graso de cadena larga marcado y mide cuánto llega a la beta-oxidación con y sin carnitina, ya que la vía simplemente se detiene sin ella. El perfilado de acilcarnitinas por espectrometría de masas en tándem es el otro método habitual, porque el patrón de especies que se acumulan identifica exactamente dónde está el bloqueo. Longo y colaboradores construyeron gran parte del marco que describe el transporte de carnitina y las enzimas que la movilizan, y su trabajo sigue siendo la referencia para interpretar esos perfiles.',
    qualityAssurance:
      'La L-carnitina se aparta analíticamente del resto de nuestro catálogo porque no es un péptido. Porta carga positiva y negativa a pH neutro, lo que la convierte en uno de los compuestos más solubles que suministramos y casi sin retención en una columna de fase reversa estándar, por lo que el método recurre a separación por par iónico o interacción hidrofílica. La confirmación de masa es directa a 161.2 Da, sin envolvente de carga múltiple que interpretar. El cribado crítico es estereoquímico: el enantiómero D tiene masa idéntica y pasaría inadvertido en cualquier verificación de masa, de modo que la separación quiral se corre como ensayo propio. La carnitina sólida es intensamente higroscópica, razón por la cual el formato predisuelto mejora la exactitud de concentración frente al polvo.',
  },
};

const KLOW_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale KLOW Spray?',
      a: 'Every wholesale lot of KLOW Spray is verified by HPLC and LC-MS with each peptide quantified independently against its own reference standard, and the certificate reports both individual purity and the blend ratio. One assay is unique to copper-peptide blends: elemental analysis confirms the copper content and its coordination state, because a copper tripeptide that has lost its metal centre is a different molecule with the same peptide backbone and would pass a peptide-only purity check.',
    },
    {
      q: 'Is KLOW Spray approved for therapeutic use or human consumption?',
      a: 'No. KLOW Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. It is a laboratory reagent blend and is not a finished cosmetic product.',
    },
    {
      q: 'What is the minimum order quantity for wholesale KLOW Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running matrix remodeling and inflammation panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale KLOW Spray supplied in?',
      a: 'KLOW Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 80 mg combined per unit. The characteristic blue tint comes from the copper tripeptide component and is expected, not a defect. Buffering is chosen to hold the copper complex intact, since pH extremes strip the metal from the peptide. Headspace is nitrogen-purged before capping, and no reconstitution is required.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for KLOW Spray?',
      a: 'Store KLOW Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 30 days. Do not freeze: the four components have different solubility limits, so ice formation concentrates them unequally and the ratio shifts even if every individual peptide survives intact. Watch for any colour change from blue toward green, which signals copper coordination loss. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for KLOW Spray?',
      a: 'KLOW is a four-component blend, so it has four mechanisms rather than one. The copper tripeptide component coordinates a copper ion and is studied for its effect on matrix gene expression and collagen remodeling in fibroblasts. The pentadecapeptide component is studied around angiogenesis and nitric oxide signaling. The actin-binding component sequesters monomeric actin, governing cytoskeletal dynamics and cell migration. The fourth component is the C-terminal tripeptide of alpha-melanocyte-stimulating hormone, studied for suppression of inflammatory transcription. That fourth arm is precisely what separates KLOW from the GLOW blend, which contains the first three but not the anti-inflammatory tripeptide. Confirm the exact composition and ratio against the manufacturer certificate of analysis.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale KLOW Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary dermal research compounds such as GHK-Cu. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale KLOW Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the copper coordination and the blend ratio between the four components. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Dermal biology labs and wound healing groups are the primary users of KLOW, and the experimental logic is almost always deconstructive. A fibroblast culture lab will run the blend alongside each individual component in adjacent wells, measuring collagen expression, scratch-wound closure rate and inflammatory cytokine output, because a four-component preparation tells you nothing about which arm produced an effect unless the parts are tested too. The copper tripeptide arm connects to the gene expression work Pickart and Margolina reviewed, the actin-binding arm to the endothelial migration assays Malinda and colleagues established, and the anti-inflammatory tripeptide to the colitis and mucosal work Xiao and colleagues published. The comparison researchers most often want is KLOW against GLOW, since the two differ by exactly one component.',
    qualityAssurance:
      'Verifying a four-component blend is a composition problem, not a purity problem, and one component makes it harder than most. Each peptide is quantified independently against its own reference standard and the certificate reports the ratio alongside individual purity, because a blend whose parts are each pure but wrongly proportioned is still out of specification. The four differ enough in size and polarity to separate cleanly on reverse-phase. The complication is the copper: elemental analysis confirms both how much copper is present and whether it remains coordinated to its tripeptide, since a demetallated tripeptide carries the correct peptide mass and would slip through a peptide-only method undetected. Buffer choice and light protection both serve to hold that coordination stable across the shelf life.',
  },
};

const KLOW_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de KLOW Spray al por mayor?',
      a: 'Cada lote mayorista de KLOW Spray se verifica por HPLC y LC-MS con cada péptido cuantificado de forma independiente frente a su propio estándar, y el certificado reporta tanto la pureza individual como la proporción de la mezcla. Un ensayo es exclusivo de las mezclas con péptidos de cobre: el análisis elemental confirma el contenido de cobre y su estado de coordinación, porque un tripéptido de cobre que ha perdido su centro metálico es una molécula distinta con el mismo esqueleto peptídico y pasaría una verificación de pureza únicamente peptídica.',
    },
    {
      q: '¿Está aprobado KLOW Spray para uso terapéutico o consumo humano?',
      a: 'No. KLOW Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Es una mezcla de reactivos de laboratorio y no un producto cosmético terminado.',
    },
    {
      q: '¿En qué forma física se suministra KLOW Spray al por mayor?',
      a: 'KLOW Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 80 mg combinados por unidad. El característico tono azul procede del componente de tripéptido de cobre y es esperable, no un defecto. El tampón se elige para mantener intacto el complejo de cobre, ya que los extremos de pH despojan al péptido de su metal. El espacio de cabeza se purga con nitrógeno antes del sellado y no se requiere reconstitución.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de KLOW Spray?',
      a: 'Almacene KLOW Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 30 días. No congelar: los cuatro componentes tienen límites de solubilidad distintos, de modo que la formación de hielo los concentra de forma desigual y la proporción se desplaza aunque cada péptido sobreviva intacto. Vigile cualquier cambio de color de azul hacia verde, que indica pérdida de coordinación del cobre. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F).',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para KLOW Spray?',
      a: 'KLOW es una mezcla de cuatro componentes, por lo que tiene cuatro mecanismos en lugar de uno. El componente de tripéptido de cobre coordina un ion de cobre y se estudia por su efecto sobre la expresión génica de matriz y la remodelación de colágeno en fibroblastos. El componente pentadecapéptido se estudia en torno a la angiogénesis y la señalización por óxido nítrico. El componente que une actina secuestra actina monomérica y gobierna la dinámica del citoesqueleto y la migración celular. El cuarto componente es el tripéptido C-terminal de la hormona estimulante de melanocitos alfa, estudiado por la supresión de la transcripción inflamatoria. Ese cuarto brazo es justamente lo que separa a KLOW de la mezcla GLOW, que contiene los tres primeros pero no el tripéptido antiinflamatorio. Confirme la composición exacta y la proporción con el certificado de análisis del fabricante.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de KLOW Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos de investigación dérmica complementarios como el GHK-Cu. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía KLOW Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen la coordinación del cobre y la proporción entre los cuatro componentes. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los laboratorios de biología dérmica y los grupos de cicatrización son los principales usuarios de KLOW, y la lógica experimental es casi siempre deconstructiva. Un laboratorio de cultivo de fibroblastos corre la mezcla junto a cada componente individual en pozos contiguos, midiendo expresión de colágeno, velocidad de cierre de herida por raspado y producción de citoquinas inflamatorias, porque una preparación de cuatro componentes no dice nada sobre qué brazo produjo un efecto si no se ensayan también las partes. El brazo del tripéptido de cobre conecta con el trabajo de expresión génica que revisaron Pickart y Margolina, el brazo que une actina con los ensayos de migración endotelial que establecieron Malinda y colaboradores, y el tripéptido antiinflamatorio con el trabajo en colitis y mucosa que publicaron Xiao y colaboradores. La comparación que más se busca es KLOW frente a GLOW, ya que difieren en exactamente un componente.',
    qualityAssurance:
      'Verificar una mezcla de cuatro componentes es un problema de composición y no de pureza, y un componente lo complica más de lo habitual. Cada péptido se cuantifica de forma independiente frente a su propio estándar y el certificado reporta la proporción junto con la pureza individual, porque una mezcla con partes puras pero mal proporcionadas sigue estando fuera de especificación. Los cuatro difieren lo suficiente en tamaño y polaridad para separarse limpiamente en fase reversa. La complicación es el cobre: el análisis elemental confirma cuánto cobre hay y si permanece coordinado a su tripéptido, ya que un tripéptido desmetalado tiene la masa peptídica correcta y pasaría inadvertido en un método solo peptídico. La elección del tampón y la protección frente a la luz sirven ambas para mantener estable esa coordinación durante la vida útil.',
  },
};

const KISSPEPTIN_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Kisspeptin Spray?',
      a: 'Every wholesale lot of Kisspeptin Spray is verified to ≥99.0% purity by reverse-phase HPLC and confirmed by LC-MS against the expected mass near 1302 Da. Each shipment carries a batch-specific certificate of analysis. One screen carries unusual weight for this sequence: loss of the C-terminal amide. Kisspeptin belongs to the RF-amide family and the amide is required for receptor activation, so the free-acid form is inactive despite differing by only one mass unit.',
    },
    {
      q: 'Is Kisspeptin Spray approved for therapeutic use or human consumption?',
      a: 'No. Kisspeptin Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. This RUO material is not a pharmaceutical product and carries no approved indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Kisspeptin Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running reproductive axis and GPCR signaling panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale Kisspeptin Spray supplied in?',
      a: 'Kisspeptin Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 10 mg per unit. The sequence carries two tryptophan-adjacent aromatic residues and a free tyrosine, so amber glass earns its place against photodegradation. Headspace is nitrogen-purged before capping, and no reconstitution step is required.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Kisspeptin Spray?',
      a: 'Store Kisspeptin Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 30 days. Avoid freeze-thaw cycling, which accelerates both tryptophan oxidation and hydrolysis of the C-terminal amide, and it is the amide loss that matters most here because it silently converts active peptide into inactive free acid. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Kisspeptin Spray?',
      a: 'Kisspeptin-10 activates KISS1R, a G protein-coupled receptor expressed on hypothalamic neurons, and its position in the hierarchy is what makes it distinctive. Receptor activation couples through Gq to phospholipase C, generating inositol trisphosphate and diacylglycerol, releasing intracellular calcium and depolarizing the neuron. Those neurons then release gonadotropin-releasing hormone, which drives pituitary output. In other words this peptide sits one level above GnRH, acting as the upstream trigger rather than a GnRH analog, which is precisely why it can distinguish a hypothalamic defect from a pituitary one. Kotani and colleagues identified kisspeptins as the natural ligands of this receptor, and independent groups later showed that losing receptor function blocks the onset of puberty.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Kisspeptin Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary neuroendocrine research compounds. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale Kisspeptin Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the C-terminal amide required for receptor activation. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Neuroendocrinology groups and reproductive biology labs are the primary users of Kisspeptin-10, and the appeal is its position in the axis. A GPCR pharmacology lab will work with cells stably expressing KISS1R and measure calcium mobilization rather than cAMP, because this receptor couples through Gq rather than Gs, which already separates the assay design from most peptide work in this catalog. Hypothalamic explant and slice preparations are the other common model, where the readout is gonadotropin-releasing hormone released into the medium. The design question that draws labs here is diagnostic in nature: because kisspeptin acts one step above GnRH, comparing a kisspeptin challenge against a direct GnRH challenge separates a hypothalamic signaling defect from a pituitary one.',
    qualityAssurance:
      'Kisspeptin-10 is a mid-size peptide with one stability liability that dominates everything else. It belongs to the RF-amide family, meaning the C-terminal residue must carry an amide group for the receptor to be activated at all, and hydrolysis of that amide to the free acid changes the mass by a single unit while abolishing activity. Modern mass spectrometry resolves that difference cleanly, and it is reported on every certificate because a purity figure that ignores it would be misleading. Beyond the amide, the aromatic residues make the peptide photosensitive and oxidation-prone, so amber glass and nitrogen purging both serve real purposes here. Reverse-phase separation gives a well-defined retention window that doubles as an identity check.',
  },
};

const KISSPEPTIN_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Kisspeptin Spray al por mayor?',
      a: 'Cada lote mayorista de Kisspeptin Spray se verifica a una pureza ≥99.0% por HPLC de fase reversa y se confirma por LC-MS frente a la masa esperada cercana a 1302 Da. Cada envío incluye un certificado de análisis específico del lote. Un cribado tiene un peso inusual en esta secuencia: la pérdida de la amida C-terminal. La kisspeptina pertenece a la familia RF-amida y la amida es necesaria para activar el receptor, de modo que la forma de ácido libre es inactiva pese a diferir en apenas una unidad de masa.',
    },
    {
      q: '¿Está aprobado Kisspeptin Spray para uso terapéutico o consumo humano?',
      a: 'No. Kisspeptin Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Este material RUO no es un producto farmacéutico y carece de indicación aprobada.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Kisspeptin Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles del eje reproductivo y de señalización GPCR, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra Kisspeptin Spray al por mayor?',
      a: 'Kisspeptin Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 10 mg por unidad. La secuencia porta residuos aromáticos y una tirosina libre, por lo que el vidrio ámbar se justifica frente a la fotodegradación. El espacio de cabeza se purga con nitrógeno antes del sellado y no se requiere reconstitución.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Kisspeptin Spray?',
      a: 'Almacene Kisspeptin Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 30 días. Evite los ciclos de congelación-descongelación, que aceleran tanto la oxidación del triptófano como la hidrólisis de la amida C-terminal, y es la pérdida de amida la que más importa aquí porque convierte silenciosamente el péptido activo en ácido libre inactivo. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F).',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Kisspeptin Spray?',
      a: 'La kisspeptina-10 activa KISS1R, un receptor acoplado a proteínas G expresado en neuronas hipotalámicas, y su posición en la jerarquía es lo que la distingue. La activación del receptor se acopla vía Gq a la fosfolipasa C, genera inositol trifosfato y diacilglicerol, libera calcio intracelular y despolariza la neurona. Esas neuronas liberan entonces la hormona liberadora de gonadotropinas, que impulsa la producción hipofisaria. Dicho de otro modo, este péptido se sitúa un nivel por encima de GnRH y actúa como disparador corriente arriba en lugar de como análogo de GnRH, y por eso puede distinguir un defecto hipotalámico de uno hipofisario. Kotani y colaboradores identificaron las kisspeptinas como los ligandos naturales de este receptor, y grupos independientes mostraron después que perder la función del receptor bloquea el inicio de la pubertad.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Kisspeptin Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos de investigación neuroendocrina complementarios. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Kisspeptin Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen la amida C-terminal necesaria para la activación del receptor. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de neuroendocrinología y los laboratorios de biología reproductiva son los principales usuarios de la kisspeptina-10, y su atractivo es su posición en el eje. Un laboratorio de farmacología de GPCR trabaja con células que expresan de forma estable KISS1R y mide movilización de calcio en lugar de cAMP, porque este receptor se acopla vía Gq y no Gs, lo que ya separa el diseño del ensayo de la mayor parte del trabajo peptídico de este catálogo. Las preparaciones de explante hipotalámico y de rebanada son el otro modelo habitual, donde la lectura es la hormona liberadora de gonadotropinas vertida al medio. La pregunta de diseño que atrae a los laboratorios es de naturaleza diagnóstica: como la kisspeptina actúa un paso por encima de GnRH, comparar un desafío con kisspeptina frente a uno directo con GnRH separa un defecto de señalización hipotalámico de uno hipofisario.',
    qualityAssurance:
      'La kisspeptina-10 es un péptido de tamaño medio con una vulnerabilidad de estabilidad que domina a todas las demás. Pertenece a la familia RF-amida, lo que significa que el residuo C-terminal debe portar un grupo amida para que el receptor se active, y la hidrólisis de esa amida a ácido libre cambia la masa en una sola unidad mientras anula la actividad. La espectrometría de masas moderna resuelve esa diferencia limpiamente y se reporta en cada certificado, porque una cifra de pureza que la ignorara sería engañosa. Más allá de la amida, los residuos aromáticos vuelven al péptido fotosensible y propenso a la oxidación, de modo que el vidrio ámbar y la purga con nitrógeno cumplen funciones reales. La separación en fase reversa da una ventana de retención bien definida que sirve además como verificación de identidad.',
  },
};

const IPAMORELIN_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Ipamorelin Spray?',
      a: 'Every wholesale lot of Ipamorelin Spray is verified to ≥99.0% purity by reverse-phase HPLC and confirmed by LC-MS against the expected mass near 712 Da. Each shipment carries a batch-specific certificate of analysis. Chiral analysis runs as a separate assay for this sequence, because it deliberately contains two D-configured residues plus a non-standard naphthylalanine, and an epimer at either centre carries the identical mass while behaving differently at the receptor.',
    },
    {
      q: 'Is Ipamorelin Spray approved for therapeutic use or human consumption?',
      a: 'No. Ipamorelin Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. This RUO material is not a pharmaceutical product and carries no approved indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Ipamorelin Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running growth hormone secretagogue panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale Ipamorelin Spray supplied in?',
      a: 'Ipamorelin Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 5 mg or 10 mg per unit. At five residues it is one of the shorter peptides in our catalog and dissolves readily in aqueous buffer without any organic co-solvent. Headspace is nitrogen-purged before capping, and no reconstitution step is required.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Ipamorelin Spray?',
      a: 'Store Ipamorelin Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 30 days. This pentapeptide is comparatively robust because its D-configured residues resist peptidase attack and its short chain leaves no fold to disrupt, but freeze-thaw cycling should still be avoided since it accelerates hydrolysis of the C-terminal amide. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Ipamorelin Spray?',
      a: 'Ipamorelin is a five-residue agonist at the ghrelin receptor, the same target GHRP-6 and GHRP-2 engage, but selectivity is what defines it. Receptor activation couples through Gq to phospholipase C, generating inositol trisphosphate that releases calcium from intracellular stores and triggers growth hormone vesicle exocytosis from pituitary somatotroph cells. That calcium-driven route is mechanistically distinct from GHRH analogs such as Sermorelin and Tesamorelin, which raise cAMP instead. What separates Ipamorelin from its own class is cleanliness of response: Raun and colleagues reported that it releases growth hormone without the corticotropin, cortisol and prolactin elevation that GHRP-6 produces, which is why it became the selectivity reference in secretagogue panels.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Ipamorelin Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary growth factor research compounds such as Tesamorelin. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale Ipamorelin Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the two D-configured residues and the C-terminal amide. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Endocrinology groups and pituitary cell biology labs are the primary users of Ipamorelin, and it almost always appears in a comparison rather than alone. The standard design places it alongside GHRP-6 and GHRP-2 in adjacent wells of cultured rat pituitary cells, measuring growth hormone released into the medium against corticotropin and prolactin in the same samples, because the selectivity claim only means something when the off-target hormones are measured too. Raun and colleagues built that comparison originally and it remains the template. Receptor pharmacology groups take a narrower route, working with cells stably expressing the ghrelin receptor and reading calcium mobilization, which separates this compound cleanly from the cAMP-driven GHRH analogs also stocked in this catalog.',
    qualityAssurance:
      'Ipamorelin is small enough that mass confirmation is trivial and stereochemistry is the whole analytical story. At five residues and roughly 712 Da it gives a clean single-charge mass rather than the multiply-charged envelope larger peptides produce, and it elutes in a well-defined reverse-phase window. The design deliberately incorporates two D-configured residues and a naphthylalanine that does not occur in natural proteins, and every one of those centres is a place where a synthesis can go subtly wrong while still producing material of exactly the correct mass. Chiral separation therefore runs as its own assay rather than being folded into the purity method. Beyond that, hydrolysis of the C-terminal amide is the main degradation route monitored across the shelf life.',
  },
};

const IPAMORELIN_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Ipamorelin Spray al por mayor?',
      a: 'Cada lote mayorista de Ipamorelin Spray se verifica a una pureza ≥99.0% por HPLC de fase reversa y se confirma por LC-MS frente a la masa esperada cercana a 712 Da. Cada envío incluye un certificado de análisis específico del lote. El análisis quiral se corre como ensayo aparte para esta secuencia, porque contiene deliberadamente dos residuos en configuración D más una naftilalanina no estándar, y un epímero en cualquiera de esos centros tiene masa idéntica pero se comporta distinto en el receptor.',
    },
    {
      q: '¿Está aprobado Ipamorelin Spray para uso terapéutico o consumo humano?',
      a: 'No. Ipamorelin Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Este material RUO no es un producto farmacéutico y carece de indicación aprobada.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Ipamorelin Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de secretagogos de hormona del crecimiento, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra Ipamorelin Spray al por mayor?',
      a: 'Ipamorelin Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 5 mg o 10 mg por unidad. Con cinco residuos es uno de los péptidos más cortos de nuestro catálogo y se disuelve con facilidad en tampón acuoso sin codisolvente orgánico. El espacio de cabeza se purga con nitrógeno antes del sellado y no se requiere reconstitución.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Ipamorelin Spray?',
      a: 'Almacene Ipamorelin Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 30 días. Este pentapéptido es comparativamente robusto porque sus residuos en configuración D resisten el ataque de peptidasas y su cadena corta no deja plegamiento que alterar, pero deben evitarse igualmente los ciclos de congelación-descongelación, ya que aceleran la hidrólisis de la amida C-terminal. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F).',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Ipamorelin Spray?',
      a: 'La ipamorelina es un agonista de cinco residuos del receptor de grelina, la misma diana que activan el GHRP-6 y el GHRP-2, pero la selectividad es lo que la define. La activación del receptor se acopla vía Gq a la fosfolipasa C, genera inositol trifosfato que libera calcio de los depósitos intracelulares y desencadena la exocitosis de vesículas de hormona del crecimiento en las células somatotropas hipofisarias. Esa ruta impulsada por calcio es mecánicamente distinta de la de los análogos de GHRH como la sermorelina y la tesamorelina, que en cambio elevan el cAMP. Lo que separa a la ipamorelina dentro de su propia clase es la limpieza de la respuesta: Raun y colaboradores reportaron que libera hormona del crecimiento sin la elevación de corticotropina, cortisol y prolactina que produce el GHRP-6, y por eso se convirtió en la referencia de selectividad en los paneles de secretagogos.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Ipamorelin Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos de investigación de factores de crecimiento complementarios como la tesamorelina. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Ipamorelin Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen los dos residuos en configuración D y la amida C-terminal. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de endocrinología y los laboratorios de biología celular hipofisaria son los principales usuarios de la ipamorelina, y casi siempre aparece en una comparación más que sola. El diseño estándar la sitúa junto al GHRP-6 y al GHRP-2 en pozos contiguos de células hipofisarias de rata en cultivo, midiendo la hormona del crecimiento vertida al medio frente a corticotropina y prolactina en las mismas muestras, porque la afirmación de selectividad solo significa algo si también se miden las hormonas fuera de diana. Raun y colaboradores construyeron esa comparación originalmente y sigue siendo la plantilla. Los grupos de farmacología de receptores toman una ruta más estrecha, con células que expresan de forma estable el receptor de grelina y lectura de movilización de calcio, lo que separa limpiamente a este compuesto de los análogos de GHRH impulsados por cAMP también disponibles en este catálogo.',
    qualityAssurance:
      'La ipamorelina es lo bastante pequeña como para que la confirmación de masa sea trivial y la estereoquímica sea toda la historia analítica. Con cinco residuos y unos 712 Da ofrece una masa de carga simple limpia en lugar de la envolvente de carga múltiple de los péptidos mayores, y eluye en una ventana de fase reversa bien definida. El diseño incorpora deliberadamente dos residuos en configuración D y una naftilalanina que no aparece en proteínas naturales, y cada uno de esos centros es un punto donde una síntesis puede desviarse sutilmente produciendo material de masa exactamente correcta. Por eso la separación quiral se corre como ensayo propio y no integrada en el método de pureza. Más allá de eso, la hidrólisis de la amida C-terminal es la ruta de degradación principal vigilada durante la vida útil.',
  },
};

const IGF_1_LR3_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale IGF-1 LR3 Spray?',
      a: 'Every wholesale lot of IGF-1 LR3 Spray is verified to ≥99.0% purity by reverse-phase HPLC and confirmed by LC-MS. Each shipment carries a batch-specific certificate of analysis. This analogue needs a check most catalog peptides do not: it folds around three disulfide bonds, and mispaired disulfide isomers carry the identical molecular mass while being structurally different proteins, so non-reduced versus reduced comparison is run to confirm correct pairing alongside aggregation screening.',
    },
    {
      q: 'Is IGF-1 LR3 Spray approved for therapeutic use or human consumption?',
      a: 'No. IGF-1 LR3 Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. This RUO material is not a pharmaceutical product and carries no approved indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale IGF-1 LR3 Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running receptor tyrosine kinase panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale IGF-1 LR3 Spray supplied in?',
      a: 'IGF-1 LR3 Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 1 mg per unit. The low unit strength reflects real usage, since receptor assays work at nanomolar concentrations rather than the milligram loads metabolic compounds need. At 83 residues this is a folded protein rather than a short peptide, and the buffered pre-dissolved format avoids the harsh acidic reconstitution that powder forms of this analogue usually require. Headspace is nitrogen-purged before capping.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for IGF-1 LR3 Spray?',
      a: 'Store IGF-1 LR3 Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 30 days. Never freeze this one. As a folded 83-residue protein it loses activity through denaturation and disulfide scrambling rather than through simple chemical degradation, and a single freeze-thaw cycle can unfold material that still gives the correct mass on analysis. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for IGF-1 LR3 Spray?',
      a: 'IGF-1 LR3 activates the IGF-1 receptor, a receptor tyrosine kinase rather than a G protein-coupled receptor, which changes both the signaling and the assay readouts entirely. Ligand binding triggers receptor autophosphorylation, recruitment of insulin receptor substrate proteins, and activation of two downstream branches: the PI3K and Akt axis governing survival and protein synthesis, and the MAPK cascade governing proliferation. The engineering is what distinguishes this analogue. Native IGF-1 circulates almost entirely bound to binding proteins that sequester it; substituting arginine for glutamate at the third position disrupts that binding, and a 13-residue amino-terminal extension adds further. Tomas and colleagues showed variants that bind those proteins poorly are more potent and longer-acting.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale IGF-1 LR3 Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary growth factor research compounds such as Ipamorelin. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale IGF-1 LR3 Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the three disulfide bonds that hold the folded structure together. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Cell biology groups studying growth signaling and muscle physiology labs are the primary users of IGF-1 LR3, and the assay readouts differ sharply from the receptor peptides elsewhere in this catalog because the target is a tyrosine kinase. A typical experiment treats serum-starved myoblasts or fibroblasts and then measures receptor autophosphorylation and Akt phosphorylation by immunoblot across a time course, followed by protein synthesis or proliferation as the functional endpoint. The comparison that makes this analogue worth stocking is against native IGF-1 in binding-protein-rich medium, since that is where the engineered variant separates: Tomas and colleagues showed variants evading those binding proteins are markedly more potent and longer-acting, and reproducing that contrast is the standard validation.',
    qualityAssurance:
      'IGF-1 LR3 is the most structurally complex item in this group and its analytical pipeline reflects that. At 83 residues it is a folded protein rather than a peptide, held together by three disulfide bonds, and that changes what a purity method has to prove. Mispaired disulfide isomers are the central concern because they carry exactly the correct molecular mass while being different molecules, so reduced and non-reduced separations are compared to confirm the pairing is native. Aggregation is screened by size-based separation, since folded proteins can dimerise without any change in monomer chemistry. Reverse-phase gives the identity retention window and mass spectrometry confirms the intact protein. The pre-dissolved buffered format avoids the acidic reconstitution powder presentations typically demand.',
  },
};

const IGF_1_LR3_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de IGF-1 LR3 Spray al por mayor?',
      a: 'Cada lote mayorista de IGF-1 LR3 Spray se verifica a una pureza ≥99.0% por HPLC de fase reversa y se confirma por LC-MS. Cada envío incluye un certificado de análisis específico del lote. Este análogo exige una verificación que la mayoría de los péptidos del catálogo no necesita: se pliega alrededor de tres puentes disulfuro, y los isómeros con emparejamiento incorrecto tienen la misma masa molecular siendo proteínas estructuralmente distintas, por lo que se corre una comparación reducida frente a no reducida para confirmar el emparejamiento correcto, junto con el cribado de agregación.',
    },
    {
      q: '¿Está aprobado IGF-1 LR3 Spray para uso terapéutico o consumo humano?',
      a: 'No. IGF-1 LR3 Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Este material RUO no es un producto farmacéutico y carece de indicación aprobada.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para IGF-1 LR3 Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de receptores tirosina quinasa, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra IGF-1 LR3 Spray al por mayor?',
      a: 'IGF-1 LR3 Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 1 mg por unidad. La baja concentración por unidad refleja el uso real, ya que los ensayos de receptor trabajan a concentraciones nanomolares y no con las cargas en miligramos que requieren los compuestos metabólicos. Con 83 residuos es una proteína plegada y no un péptido corto, y el formato predisuelto y tamponado evita la reconstitución ácida agresiva que suelen requerir las formas en polvo de este análogo. El espacio de cabeza se purga con nitrógeno antes del sellado.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de IGF-1 LR3 Spray?',
      a: 'Almacene IGF-1 LR3 Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 30 días. Nunca congele este producto. Como proteína plegada de 83 residuos pierde actividad por desnaturalización y reorganización de disulfuros más que por degradación química simple, y un solo ciclo de congelación-descongelación puede desplegar material que sigue dando la masa correcta en el análisis. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F).',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para IGF-1 LR3 Spray?',
      a: 'El IGF-1 LR3 activa el receptor de IGF-1, un receptor tirosina quinasa y no un receptor acoplado a proteínas G, lo que cambia por completo tanto la señalización como las lecturas del ensayo. La unión del ligando desencadena la autofosforilación del receptor, el reclutamiento de proteínas sustrato del receptor de insulina y la activación de dos ramas: el eje PI3K y Akt que gobierna la supervivencia y la síntesis proteica, y la cascada MAPK que gobierna la proliferación. La ingeniería es lo que distingue a este análogo. El IGF-1 nativo circula casi por completo unido a proteínas de unión que lo secuestran; sustituir glutamato por arginina en la tercera posición altera esa unión, y una extensión amino-terminal de 13 residuos añade más. Tomas y colaboradores mostraron que las variantes que se unen mal a esas proteínas son más potentes y de acción más prolongada.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de IGF-1 LR3 Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos de investigación de factores de crecimiento complementarios como la ipamorelina. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía IGF-1 LR3 Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen los tres puentes disulfuro que sostienen la estructura plegada. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de biología celular que estudian señalización de crecimiento y los laboratorios de fisiología muscular son los principales usuarios del IGF-1 LR3, y las lecturas del ensayo difieren marcadamente de las de los péptidos de receptor del resto del catálogo porque la diana es una tirosina quinasa. Un experimento típico trata mioblastos o fibroblastos privados de suero y mide después la autofosforilación del receptor y la fosforilación de Akt por inmunotransferencia a lo largo del tiempo, seguido de síntesis proteica o proliferación como criterio funcional. La comparación que justifica tener este análogo es frente al IGF-1 nativo en medio rico en proteínas de unión, porque ahí es donde la variante diseñada se separa: Tomas y colaboradores mostraron que las variantes que evaden esas proteínas son notablemente más potentes y duraderas, y reproducir ese contraste es la validación estándar.',
    qualityAssurance:
      'El IGF-1 LR3 es el elemento estructuralmente más complejo de este grupo y su cadena analítica lo refleja. Con 83 residuos es una proteína plegada y no un péptido, sostenida por tres puentes disulfuro, y eso cambia lo que un método de pureza debe demostrar. Los isómeros con disulfuros mal emparejados son la preocupación central porque tienen exactamente la masa correcta siendo moléculas distintas, de modo que se comparan separaciones reducidas y no reducidas para confirmar que el emparejamiento es nativo. La agregación se criba por separación según tamaño, ya que las proteínas plegadas pueden dimerizar sin cambio alguno en la química del monómero. La fase reversa aporta la ventana de retención de identidad y la espectrometría de masas confirma la proteína intacta. El formato predisuelto y tamponado evita la reconstitución ácida que exigen habitualmente las presentaciones en polvo.',
  },
};

const HCG_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale HCG Spray?',
      a: 'Every wholesale lot of HCG Spray is verified by immunoassay and bioassay with a batch-specific certificate of analysis reporting potency in international units. This is deliberate rather than a shortcut: chorionic gonadotropin is a glycoprotein whose carbohydrate chains vary between preparations and directly affect measured activity, so a chromatographic purity percentage alone would not describe it usefully. Subunit integrity and aggregation are screened by size-based separation alongside the potency determination.',
    },
    {
      q: 'Is HCG Spray approved for therapeutic use or human consumption?',
      a: 'No. HCG Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. This RUO material is not a pharmaceutical product and carries no approved indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale HCG Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running gonadotropin receptor and steroidogenesis panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale HCG Spray supplied in?',
      a: 'HCG Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 5,000 or 10,000 international units per unit. Note the unit of measure: this product is specified by bioactivity rather than by mass, because glycoprotein preparations of identical weight can differ in activity depending on their carbohydrate composition. The buffered format also protects the heterodimer, which dissociates into inactive subunits under conditions a small peptide would tolerate. Headspace is nitrogen-purged before capping.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for HCG Spray?',
      a: 'Store HCG Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 30 days. Never freeze and avoid vigorous agitation. The two subunits are held together by non-covalent interactions rather than a peptide bond, so freezing or shear stress can separate them into individually inactive halves while every conventional analysis still reports the correct components present. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for HCG Spray?',
      a: 'Chorionic gonadotropin is not a peptide at all but a heterodimeric glycoprotein, and that architecture defines its behaviour. It consists of an alpha subunit shared with luteinizing hormone, follicle-stimulating hormone and thyrotropin, paired non-covalently with a beta subunit that supplies target specificity. The assembled dimer binds the luteinizing hormone and choriogonadotropin receptor, which couples through Gs to adenylyl cyclase, raising cAMP and activating protein kinase A. That cascade upregulates the steroidogenic acute regulatory protein, moving cholesterol into mitochondria and driving steroid hormone synthesis. Research shows an extended carboxy-terminal segment on the beta subunit carries additional carbohydrate chains, and it is this extension that gives chorionic gonadotropin a markedly longer circulating life than luteinizing hormone at the same receptor.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale HCG Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary neuroendocrine research compounds such as Kisspeptin. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale HCG Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the glycosylation pattern that determines measured bioactivity. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Reproductive endocrinology groups and steroidogenesis labs are the primary users of chorionic gonadotropin, and it is usually the stimulus rather than the subject. A granulosa or Leydig cell culture lab will treat cells and then measure cAMP accumulation followed by steroid output into the medium, building a concentration-response curve that establishes receptor function in that preparation. Ascoli and colleagues reviewed the receptor comprehensively and their framework remains the standard reference for interpreting those curves, while Andric and Ascoli later described the delayed signaling that shapes aromatase expression in granulosa cells. Because the receptor is shared with luteinizing hormone, the useful comparison is between the two ligands at the same target, where the longer-lived glycoprotein produces a measurably different response profile.',
    qualityAssurance:
      'Chorionic gonadotropin cannot be certified the way the rest of this catalog is, and understanding why matters for procurement. It is a glycoprotein heterodimer whose carbohydrate chains differ between preparations, and those chains materially affect biological activity, so two lots of identical mass and identical protein purity can differ in potency. The certificate therefore reports activity in international units determined by bioassay and immunoassay, which is the meaningful specification for this molecule. Size-based separation confirms the two subunits remain associated as an intact dimer rather than dissociated, and screens for aggregation. Chromatographic purity is measured but reported as a supporting figure rather than the headline, because on its own it would describe the preparation incompletely.',
  },
};

const HCG_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de HCG Spray al por mayor?',
      a: 'Cada lote mayorista de HCG Spray se verifica por inmunoensayo y bioensayo con un certificado de análisis específico del lote que reporta la potencia en unidades internacionales. Esto es deliberado y no un atajo: la gonadotropina coriónica es una glicoproteína cuyas cadenas de carbohidrato varían entre preparaciones y afectan directamente la actividad medida, de modo que un porcentaje de pureza cromatográfica por sí solo no la describiría de forma útil. La integridad de las subunidades y la agregación se criban por separación según tamaño junto con la determinación de potencia.',
    },
    {
      q: '¿Está aprobado HCG Spray para uso terapéutico o consumo humano?',
      a: 'No. HCG Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Este material RUO no es un producto farmacéutico y carece de indicación aprobada.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para HCG Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de receptores de gonadotropinas y esteroidogénesis, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra HCG Spray al por mayor?',
      a: 'HCG Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 5.000 o 10.000 unidades internacionales por unidad. Observe la unidad de medida: este producto se especifica por bioactividad y no por masa, porque preparaciones glicoproteicas de peso idéntico pueden diferir en actividad según su composición de carbohidratos. El formato tamponado también protege el heterodímero, que se disocia en subunidades inactivas bajo condiciones que un péptido pequeño toleraría. El espacio de cabeza se purga con nitrógeno antes del sellado.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de HCG Spray?',
      a: 'Almacene HCG Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 30 días. Nunca congele y evite la agitación vigorosa. Las dos subunidades se mantienen unidas por interacciones no covalentes y no por un enlace peptídico, de modo que la congelación o el estrés de cizalla pueden separarlas en mitades individualmente inactivas mientras cualquier análisis convencional sigue reportando los componentes correctos. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F).',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para HCG Spray?',
      a: 'La gonadotropina coriónica no es un péptido sino una glicoproteína heterodimérica, y esa arquitectura define su comportamiento. Consta de una subunidad alfa compartida con la hormona luteinizante, la foliculoestimulante y la tirotropina, emparejada de forma no covalente con una subunidad beta que aporta la especificidad de diana. El dímero ensamblado se une al receptor de hormona luteinizante y coriogonadotropina, que se acopla vía Gs a la adenilato ciclasa, eleva el cAMP y activa la proteína quinasa A. Esa cascada aumenta la proteína reguladora aguda de la esteroidogénesis, que traslada colesterol a las mitocondrias e impulsa la síntesis de hormonas esteroides. La investigación muestra que un segmento carboxi-terminal extendido de la subunidad beta porta cadenas adicionales de carbohidrato, y es esa extensión la que da a la gonadotropina coriónica una vida circulante marcadamente más larga que la de la hormona luteinizante en el mismo receptor.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de HCG Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos de investigación neuroendocrina complementarios como la kisspeptina. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía HCG Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen el patrón de glicosilación que determina la bioactividad medida. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de endocrinología reproductiva y los laboratorios de esteroidogénesis son los principales usuarios de la gonadotropina coriónica, y suele ser el estímulo más que el sujeto de estudio. Un laboratorio de cultivo de células de la granulosa o de Leydig trata las células y mide después la acumulación de cAMP seguida de la producción de esteroides al medio, construyendo una curva concentración-respuesta que establece la función del receptor en esa preparación. Ascoli y colaboradores revisaron el receptor de forma exhaustiva y su marco sigue siendo la referencia estándar para interpretar esas curvas, mientras que Andric y Ascoli describieron después la señalización retardada que modela la expresión de aromatasa en células de la granulosa. Como el receptor es compartido con la hormona luteinizante, la comparación útil es entre ambos ligandos en la misma diana, donde la glicoproteína de vida más larga produce un perfil de respuesta medibley distinto.',
    qualityAssurance:
      'La gonadotropina coriónica no puede certificarse como el resto de este catálogo, y entender por qué importa para las compras. Es un heterodímero glicoproteico cuyas cadenas de carbohidrato difieren entre preparaciones, y esas cadenas afectan materialmente la actividad biológica, de modo que dos lotes de masa y pureza proteica idénticas pueden diferir en potencia. Por eso el certificado reporta actividad en unidades internacionales determinadas por bioensayo e inmunoensayo, que es la especificación significativa para esta molécula. La separación según tamaño confirma que ambas subunidades permanecen asociadas como dímero intacto y no disociadas, y criba la agregación. La pureza cromatográfica se mide pero se reporta como dato de apoyo y no como cifra principal, porque por sí sola describiría la preparación de forma incompleta.',
  },
};

const H_FRAG_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale H-Frag Spray?',
      a: 'Every wholesale lot of H-Frag Spray is verified to ≥99.0% purity by reverse-phase HPLC and confirmed by LC-MS against the expected mass near 1799 Da. Each shipment carries a batch-specific certificate of analysis. One identity check matters especially here: AOD9604 is this same 16-residue fragment carrying tyrosine at position 1 where this one carries phenylalanine, a difference of one hydroxyl group and 16 mass units, so the certificate confirms which molecule the lot contains. Disulfide pairing and cysteine oxidation are also screened.',
    },
    {
      q: 'Is H-Frag Spray approved for therapeutic use or human consumption?',
      a: 'No. H-Frag Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. This RUO material is not a pharmaceutical product and carries no approved indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale H-Frag Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running adipocyte lipolysis panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale H-Frag Spray supplied in?',
      a: 'H-Frag Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 5 mg per unit. Unlike most short peptides in this catalog, this sequence contains two cysteines that form an internal disulfide loop, so the buffer is chosen to keep that bond intact rather than simply to maximise solubility. Headspace is nitrogen-purged before capping to prevent oxidation of free thiols, and no reconstitution step is required.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for H-Frag Spray?',
      a: 'Store H-Frag Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 30 days. Avoid freeze-thaw cycling and avoid contact with reducing agents. The internal disulfide bond is the structural feature that distinguishes this fragment from most short peptides, and reduction opens the loop into a linear peptide with the same residue composition but different conformation. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for H-Frag Spray?',
      a: 'H-Frag corresponds to residues 176 to 191 of human growth hormone, the segment identified as the lipolytic domain. Its defining property is what it does not do: this fragment acts on fat metabolism without engaging the growth hormone receptor, so it does not drive hepatic IGF-1 production or produce the glucose handling changes the full hormone causes. Ng and colleagues characterized the synthetic lipolytic domain and reported effects on lipid metabolism in fatty rodent models, and Heffernan and colleagues compared the fragment against full growth hormone directly. Research indicates the mechanism involves modulation of adipocyte lipolytic and lipogenic enzyme activity rather than classical receptor agonism. The sequence carries an internal disulfide loop that most short catalog peptides lack.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale H-Frag Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary metabolic research compounds such as AOD9604. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale H-Frag Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the internal disulfide loop and the two cysteine residues. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Metabolic research groups studying adipose tissue are the primary users of H-Frag, and the experimental design is built around a deliberate absence. A lab working with 3T3-L1 adipocytes or isolated primary adipocytes will measure glycerol and free fatty acid release into the medium as the lipolysis readout, then run full growth hormone in parallel wells and measure IGF-1 induction alongside it. The point of that second arm is to demonstrate the dissociation: the fragment should move lipid metabolism without moving IGF-1, which is precisely the comparison Heffernan and colleagues published. Ng and colleagues had earlier characterized the synthetic lipolytic domain in fatty rodent models. Groups also frequently pair the fragment against AOD9604, which differs at a single residue position.',
    qualityAssurance:
      'H-Frag presents two analytical questions, and both are about identity rather than simple purity. The first concerns a near neighbour: AOD9604 is this same sequence carrying tyrosine at the first position instead of phenylalanine, and the resulting 16-unit mass difference is small enough that a careless method could conflate the two. Mass analysis resolves it unambiguously and the certificate states which molecule the lot contains, which matters because buyers routinely use the two names interchangeably. The second question is the internal disulfide loop formed between the two cysteine residues. Reduced and non-reduced separations are compared to confirm the loop is closed, since an open linear form has an almost identical mass. Oxidation of free thiols is the main degradation route watched across the shelf life.',
  },
};

const H_FRAG_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de H-Frag Spray al por mayor?',
      a: 'Cada lote mayorista de H-Frag Spray se verifica a una pureza ≥99.0% por HPLC de fase reversa y se confirma por LC-MS frente a la masa esperada cercana a 1799 Da. Cada envío incluye un certificado de análisis específico del lote. Una verificación de identidad importa especialmente aquí: el AOD9604 es este mismo fragmento de 16 residuos con tirosina en la posición 1 donde este porta fenilalanina, una diferencia de un grupo hidroxilo y 16 unidades de masa, de modo que el certificado confirma qué molécula contiene el lote. También se criban el emparejamiento de disulfuros y la oxidación de cisteínas.',
    },
    {
      q: '¿Está aprobado H-Frag Spray para uso terapéutico o consumo humano?',
      a: 'No. H-Frag Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Este material RUO no es un producto farmacéutico y carece de indicación aprobada.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para H-Frag Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de lipólisis en adipocitos, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra H-Frag Spray al por mayor?',
      a: 'H-Frag Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 5 mg por unidad. A diferencia de la mayoría de los péptidos cortos del catálogo, esta secuencia contiene dos cisteínas que forman un bucle disulfuro interno, por lo que el tampón se elige para mantener ese enlace intacto y no solo para maximizar la solubilidad. El espacio de cabeza se purga con nitrógeno antes del sellado para evitar la oxidación de tioles libres, y no se requiere reconstitución.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de H-Frag Spray?',
      a: 'Almacene H-Frag Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 30 días. Evite los ciclos de congelación-descongelación y el contacto con agentes reductores. El puente disulfuro interno es el rasgo estructural que distingue a este fragmento de la mayoría de los péptidos cortos, y su reducción abre el bucle en un péptido lineal con la misma composición de residuos pero conformación distinta. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F).',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para H-Frag Spray?',
      a: 'El H-Frag corresponde a los residuos 176 a 191 de la hormona del crecimiento humana, el segmento identificado como dominio lipolítico. Su propiedad definitoria es lo que no hace: este fragmento actúa sobre el metabolismo lipídico sin activar el receptor de hormona del crecimiento, de modo que no impulsa la producción hepática de IGF-1 ni provoca los cambios en el manejo de glucosa que causa la hormona completa. Ng y colaboradores caracterizaron el dominio lipolítico sintético y reportaron efectos sobre el metabolismo lipídico en modelos de roedores obesos, y Heffernan y colaboradores compararon el fragmento directamente frente a la hormona del crecimiento completa. La investigación indica que el mecanismo implica la modulación de la actividad de enzimas lipolíticas y lipogénicas del adipocito más que un agonismo clásico de receptor. La secuencia porta un bucle disulfuro interno que la mayoría de los péptidos cortos del catálogo no tiene.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de H-Frag Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos de investigación metabólica complementarios como el AOD9604. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía H-Frag Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen el bucle disulfuro interno y los dos residuos de cisteína. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de investigación metabólica que estudian tejido adiposo son los principales usuarios del H-Frag, y el diseño experimental se construye en torno a una ausencia deliberada. Un laboratorio que trabaja con adipocitos 3T3-L1 o adipocitos primarios aislados mide la liberación de glicerol y ácidos grasos libres al medio como lectura de lipólisis, y luego corre hormona del crecimiento completa en pozos paralelos midiendo además la inducción de IGF-1. El sentido de ese segundo brazo es demostrar la disociación: el fragmento debe mover el metabolismo lipídico sin mover el IGF-1, que es exactamente la comparación que publicaron Heffernan y colaboradores. Ng y colaboradores habían caracterizado antes el dominio lipolítico sintético en modelos de roedores obesos. Los grupos también emparejan con frecuencia el fragmento con el AOD9604, que difiere en una única posición de residuo.',
    qualityAssurance:
      'El H-Frag plantea dos preguntas analíticas, y ambas son de identidad más que de pureza simple. La primera concierne a un vecino cercano: el AOD9604 es esta misma secuencia con tirosina en la primera posición en lugar de fenilalanina, y la diferencia de 16 unidades es lo bastante pequeña como para que un método descuidado los confunda. El análisis de masa lo resuelve sin ambigüedad y el certificado indica qué molécula contiene el lote, lo que importa porque los compradores usan ambos nombres indistintamente. La segunda cuestión es el bucle disulfuro interno formado entre los dos residuos de cisteína. Se comparan separaciones reducidas y no reducidas para confirmar que el bucle está cerrado, ya que la forma lineal abierta tiene una masa casi idéntica. La oxidación de tioles libres es la ruta de degradación principal vigilada durante la vida útil.',
  },
};

const GLUTATHIONE_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Glutathione Spray?',
      a: 'Every wholesale lot of Glutathione Spray is verified to ≥99.0% purity by reverse-phase HPLC and confirmed by LC-MS against the expected mass of 307.3 Da. Each shipment carries a batch-specific certificate of analysis. The specification that actually matters for this compound is the ratio of reduced to oxidised form, because the free thiol oxidises to the disulfide dimer on air contact and only the reduced form is active, so both species are quantified and reported separately.',
    },
    {
      q: 'Is Glutathione Spray approved for therapeutic use or human consumption?',
      a: 'No. Glutathione Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. It is a laboratory reagent, not a nutritional or dietary product.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Glutathione Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running oxidative stress and redox panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale Glutathione Spray supplied in?',
      a: 'Glutathione Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 600 mg or 1,500 mg per unit. Nitrogen purging matters more for this compound than for anything else in the catalog: the free cysteine thiol oxidises to the disulfide dimer on contact with atmospheric oxygen, and that conversion begins within minutes of opening a powder vial. Supplying it pre-dissolved under nitrogen removes the highest-risk handling step entirely.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Glutathione Spray?',
      a: 'Store Glutathione Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 30 days and minimise air exposure at every step. Oxidation, not hydrolysis or aggregation, is the limiting stability factor here, and each opening admits oxygen that converts reduced glutathione to the inactive disulfide form. Avoid contact with trace metal ions, which catalyse that oxidation. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Glutathione Spray?',
      a: 'Glutathione is a tripeptide with an unusual bond that defines its behaviour. Its glutamate residue joins the cysteine through the side-chain carboxyl rather than the normal backbone linkage, and that gamma-glutamyl bond is why ordinary peptidases cannot cleave it, giving the molecule an intracellular lifetime no conventional tripeptide would have. The cysteine thiol does the chemical work. Glutathione peroxidase consumes two molecules to reduce a peroxide, generating the oxidised disulfide dimer, and glutathione reductase then regenerates the reduced form using NADPH, so the pair cycles continuously. The same thiol serves as the conjugating nucleophile for glutathione S-transferase enzymes. Research shows the ratio between reduced and oxidised forms is the standard quantitative index of cellular redox state.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Glutathione Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary antioxidant research compounds such as L-Carnitine. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale Glutathione Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the free cysteine thiol against air oxidation. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Oxidative stress groups and toxicology labs are the primary users of glutathione, and the measurement they care about is a ratio rather than a concentration. A cell biology lab studying redox balance will challenge cultures with an oxidant and then quantify reduced and oxidised glutathione separately, because the ratio between them is the accepted index of cellular redox state and a total-glutathione number conceals the very change being studied. Enzymology groups take a more direct route, using the compound as substrate in glutathione peroxidase and glutathione S-transferase assays where turnover is followed spectrophotometrically. Lu reviewed the synthesis pathway and its regulation, and Forman and colleagues covered measurement methodology, which together define how most labs design these experiments.',
    qualityAssurance:
      'Glutathione inverts the usual analytical priority: chromatographic purity is easy and chemical state is hard. At 307.3 Da the molecule gives a clean single-charge mass confirmation and separates readily on reverse-phase. The difficulty is that the reduced and oxidised forms are chemically distinct species with different masses, and a preparation can be entirely pure while containing a substantial fraction of the inactive oxidised dimer. Both are therefore quantified and reported as a ratio rather than folded into a single purity figure. Trace metal contamination is screened as well, since metal ions catalyse the oxidation and a lot that meets specification on release can drift if metals are present. Nitrogen purging and the pre-dissolved format both target that same vulnerability.',
  },
};

const GLUTATHIONE_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Glutathione Spray al por mayor?',
      a: 'Cada lote mayorista de Glutathione Spray se verifica a una pureza ≥99.0% por HPLC de fase reversa y se confirma por LC-MS frente a la masa esperada de 307.3 Da. Cada envío incluye un certificado de análisis específico del lote. La especificación que realmente importa en este compuesto es la relación entre forma reducida y oxidada, porque el tiol libre se oxida al dímero disulfuro al contacto con el aire y solo la forma reducida es activa, de modo que ambas especies se cuantifican y reportan por separado.',
    },
    {
      q: '¿Está aprobado Glutathione Spray para uso terapéutico o consumo humano?',
      a: 'No. Glutathione Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Es un reactivo de laboratorio, no un producto nutricional ni dietético.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Glutathione Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de estrés oxidativo y redox, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra Glutathione Spray al por mayor?',
      a: 'Glutathione Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 600 mg o 1.500 mg por unidad. La purga con nitrógeno importa más en este compuesto que en cualquier otro del catálogo: el tiol libre de cisteína se oxida al dímero disulfuro al contacto con el oxígeno atmosférico, y esa conversión empieza a los pocos minutos de abrir un vial de polvo. Suministrarlo predisuelto bajo nitrógeno elimina por completo el paso de manipulación de mayor riesgo.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Glutathione Spray?',
      a: 'Almacene Glutathione Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 30 días y minimice la exposición al aire en cada paso. La oxidación, y no la hidrólisis ni la agregación, es el factor limitante de estabilidad aquí, y cada apertura admite oxígeno que convierte el glutatión reducido en la forma disulfuro inactiva. Evite el contacto con trazas de iones metálicos, que catalizan esa oxidación. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F).',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Glutathione Spray?',
      a: 'El glutatión es un tripéptido con un enlace inusual que define su comportamiento. Su residuo de glutamato se une a la cisteína por el carboxilo de la cadena lateral y no por el enlace de esqueleto habitual, y ese enlace gamma-glutamilo es la razón por la que las peptidasas ordinarias no pueden escindirlo, dando a la molécula una vida intracelular que ningún tripéptido convencional tendría. El tiol de la cisteína hace el trabajo químico. La glutatión peroxidasa consume dos moléculas para reducir un peróxido y genera el dímero disulfuro oxidado, y la glutatión reductasa regenera después la forma reducida usando NADPH, de modo que el par cicla de forma continua. El mismo tiol actúa como nucleófilo conjugante para las enzimas glutatión S-transferasa. La investigación muestra que la relación entre formas reducida y oxidada es el índice cuantitativo estándar del estado redox celular.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Glutathione Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos antioxidantes de investigación complementarios como la L-carnitina. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Glutathione Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen el tiol libre de cisteína frente a la oxidación por aire. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de estrés oxidativo y los laboratorios de toxicología son los principales usuarios del glutatión, y la medición que les importa es una relación más que una concentración. Un laboratorio de biología celular que estudia el equilibrio redox desafía los cultivos con un oxidante y cuantifica después el glutatión reducido y el oxidado por separado, porque la relación entre ambos es el índice aceptado del estado redox celular y una cifra de glutatión total oculta justamente el cambio que se estudia. Los grupos de enzimología toman una ruta más directa, usando el compuesto como sustrato en ensayos de glutatión peroxidasa y glutatión S-transferasa donde el recambio se sigue por espectrofotometría. Lu revisó la vía de síntesis y su regulación, y Forman y colaboradores cubrieron la metodología de medición, lo que en conjunto define cómo la mayoría de los laboratorios diseña estos experimentos.',
    qualityAssurance:
      'El glutatión invierte la prioridad analítica habitual: la pureza cromatográfica es fácil y el estado químico es difícil. Con 307.3 Da la molécula da una confirmación de masa de carga simple limpia y se separa con facilidad en fase reversa. La dificultad es que las formas reducida y oxidada son especies químicamente distintas con masas diferentes, y una preparación puede ser enteramente pura conteniendo una fracción sustancial del dímero oxidado inactivo. Por eso ambas se cuantifican y reportan como relación en lugar de integrarse en una cifra única de pureza. También se criba la contaminación por trazas metálicas, ya que los iones metálicos catalizan la oxidación y un lote que cumple especificación al liberarse puede desviarse si hay metales presentes. La purga con nitrógeno y el formato predisuelto atacan esa misma vulnerabilidad.',
  },
};

const GLOW_BLEND_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale GLOW Spray?',
      a: 'Every wholesale lot of GLOW Spray is verified by HPLC and LC-MS with each of the three peptides quantified independently against its own reference standard, and the certificate reports individual purity alongside the blend ratio. Elemental analysis is run in addition, confirming copper content and coordination state, because a copper tripeptide stripped of its metal retains the correct peptide mass and would pass a peptide-only purity method undetected.',
    },
    {
      q: 'Is GLOW Spray approved for therapeutic use or human consumption?',
      a: 'No. GLOW Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. It is a laboratory reagent blend and is not a finished cosmetic product.',
    },
    {
      q: 'What is the minimum order quantity for wholesale GLOW Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running collagen remodeling and migration panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale GLOW Spray supplied in?',
      a: 'GLOW Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 70 mg combined per unit. The blue tint comes from the copper tripeptide component and is expected rather than a defect. Buffering is chosen to hold the copper complex intact, since pH extremes strip the metal from the peptide backbone. Headspace is nitrogen-purged before capping, and no reconstitution step is required.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for GLOW Spray?',
      a: 'Store GLOW Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 30 days. Do not freeze: the three components differ in solubility, so ice formation concentrates them unequally and shifts the ratio even when each peptide survives chemically intact. A colour drift from blue toward green signals copper coordination loss. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for GLOW Spray?',
      a: 'GLOW is a three-component blend with three separate mechanisms and no unified target. The copper tripeptide coordinates a copper ion and is studied for its influence on matrix gene expression, collagen and glycosaminoglycan synthesis in fibroblast models. The pentadecapeptide component is studied around angiogenic signaling and nitric oxide pathways. The third component binds monomeric actin and holds it unpolymerized, governing cytoskeletal remodeling and directional cell migration through a structural mechanism rather than any receptor. The distinction from the KLOW blend is precise and worth knowing: KLOW contains these same three plus an anti-inflammatory tripeptide, so GLOW is the formulation without that fourth arm. Confirm exact composition and ratio against the manufacturer certificate of analysis.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale GLOW Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary dermal research compounds such as the KLOW blend. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale GLOW Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the copper coordination and the blend ratio between the three components. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Dermal biology and wound healing groups are the primary users of GLOW, and experiments are built to take the blend apart rather than test it whole. A fibroblast culture lab will run the blend beside each isolated component in adjacent wells, measuring collagen expression by quantitative PCR and scratch-wound closure rate by time-lapse imaging, because a three-component preparation cannot tell you which arm produced an effect unless the parts are tested alongside it. The copper tripeptide arm connects to the gene expression work Pickart and Margolina reviewed, and the actin-binding arm to the endothelial migration assays Malinda and colleagues established. The most informative single comparison is GLOW against KLOW, since the two differ by exactly one added component.',
    qualityAssurance:
      'Certifying GLOW is a composition exercise rather than a purity one, with a metal complicating the picture. Each of the three peptides is quantified independently against its own reference standard and the certificate reports the ratio alongside individual purity, because components that are each pure but wrongly proportioned still place the blend out of specification. The three differ enough in size and polarity to resolve cleanly on reverse-phase separation. The copper component requires an additional method entirely: elemental analysis confirms both how much copper is present and whether it remains bound to its tripeptide, since a demetallated peptide carries the correct mass and would pass a chromatographic check unnoticed. Buffer selection and light protection both serve to hold that coordination stable across the stated shelf life.',
  },
};

const GLOW_BLEND_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de GLOW Spray al por mayor?',
      a: 'Cada lote mayorista de GLOW Spray se verifica por HPLC y LC-MS con cada uno de los tres péptidos cuantificado de forma independiente frente a su propio estándar, y el certificado reporta la pureza individual junto con la proporción de la mezcla. Además se realiza análisis elemental que confirma el contenido de cobre y su estado de coordinación, porque un tripéptido de cobre despojado de su metal conserva la masa peptídica correcta y pasaría inadvertido en un método de pureza solo peptídico.',
    },
    {
      q: '¿Está aprobado GLOW Spray para uso terapéutico o consumo humano?',
      a: 'No. GLOW Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Es una mezcla de reactivos de laboratorio y no un producto cosmético terminado.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para GLOW Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de remodelación de colágeno y migración, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra GLOW Spray al por mayor?',
      a: 'GLOW Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 70 mg combinados por unidad. El tono azul procede del componente de tripéptido de cobre y es esperable, no un defecto. El tampón se elige para mantener intacto el complejo de cobre, ya que los extremos de pH despojan al esqueleto peptídico de su metal. El espacio de cabeza se purga con nitrógeno antes del sellado y no se requiere reconstitución.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de GLOW Spray?',
      a: 'Almacene GLOW Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 30 días. No congelar: los tres componentes difieren en solubilidad, de modo que la formación de hielo los concentra de forma desigual y desplaza la proporción aunque cada péptido sobreviva químicamente intacto. Una deriva de color de azul hacia verde indica pérdida de coordinación del cobre. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F).',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para GLOW Spray?',
      a: 'GLOW es una mezcla de tres componentes con tres mecanismos separados y ninguna diana unificada. El tripéptido de cobre coordina un ion de cobre y se estudia por su influencia sobre la expresión génica de matriz y la síntesis de colágeno y glicosaminoglicanos en modelos de fibroblastos. El componente pentadecapéptido se estudia en torno a la señalización angiogénica y las vías del óxido nítrico. El tercer componente une actina monomérica y la mantiene sin polimerizar, gobernando la remodelación del citoesqueleto y la migración celular direccional mediante un mecanismo estructural y no por receptor. La distinción respecto a la mezcla KLOW es precisa y conviene conocerla: KLOW contiene estos mismos tres más un tripéptido antiinflamatorio, de modo que GLOW es la formulación sin ese cuarto brazo. Confirme la composición exacta y la proporción con el certificado de análisis del fabricante.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de GLOW Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos de investigación dérmica complementarios como la mezcla KLOW. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía GLOW Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen la coordinación del cobre y la proporción entre los tres componentes. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de biología dérmica y cicatrización son los principales usuarios de GLOW, y los experimentos se diseñan para desmontar la mezcla más que para probarla entera. Un laboratorio de cultivo de fibroblastos corre la mezcla junto a cada componente aislado en pozos contiguos, midiendo la expresión de colágeno por PCR cuantitativa y la velocidad de cierre de herida por raspado mediante imagen de lapso temporal, porque una preparación de tres componentes no revela qué brazo produjo un efecto si no se ensayan las partes en paralelo. El brazo del tripéptido de cobre conecta con el trabajo de expresión génica que revisaron Pickart y Margolina, y el brazo que une actina con los ensayos de migración endotelial que establecieron Malinda y colaboradores. La comparación individual más informativa es GLOW frente a KLOW, ya que difieren en exactamente un componente añadido.',
    qualityAssurance:
      'Certificar GLOW es un ejercicio de composición más que de pureza, con un metal que complica el panorama. Cada uno de los tres péptidos se cuantifica de forma independiente frente a su propio estándar y el certificado reporta la proporción junto con la pureza individual, porque componentes puros pero mal proporcionados siguen dejando la mezcla fuera de especificación. Los tres difieren lo suficiente en tamaño y polaridad para resolverse limpiamente en fase reversa. El componente de cobre exige un método adicional: el análisis elemental confirma cuánto cobre hay y si sigue unido a su tripéptido, ya que un péptido desmetalado tiene la masa correcta y pasaría desapercibido en una verificación cromatográfica. La elección del tampón y la protección frente a la luz sirven para mantener estable esa coordinación durante la vida útil declarada.',
  },
};

const GHRP_6_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale GHRP-6 Spray?',
      a: 'Every wholesale lot of GHRP-6 Spray is verified to ≥99.0% purity by reverse-phase HPLC and confirmed by LC-MS against the expected mass near 873 Da. Each shipment carries a batch-specific certificate of analysis. This hexapeptide contains two tryptophan residues, giving it twice the usual oxidation exposure, so singly and doubly oxidised species are resolved and reported separately. Chiral analysis confirms the two D-configured positions, which mass spectrometry alone cannot distinguish.',
    },
    {
      q: 'Is GHRP-6 Spray approved for therapeutic use or human consumption?',
      a: 'No. GHRP-6 Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. This RUO material is not a pharmaceutical product and carries no approved indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale GHRP-6 Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running growth hormone secretagogue panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale GHRP-6 Spray supplied in?',
      a: 'GHRP-6 Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 10 mg per unit. Amber glass is doing real work here: two tryptophan residues in a six-residue sequence make this one of the more photosensitive peptides in the catalog, and the indole rings degrade under ordinary room lighting. Headspace is nitrogen-purged before capping, and no reconstitution step is required.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for GHRP-6 Spray?',
      a: 'Store GHRP-6 Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 30 days and minimise air exposure. With two tryptophans in a short sequence, oxidation and photodegradation together are the limiting stability factors rather than aggregation or hydrolysis. Avoid freeze-thaw cycling, since each cycle increases headspace contact. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for GHRP-6 Spray?',
      a: 'GHRP-6 is a six-residue agonist at the ghrelin receptor, and its historical position is unusual: this peptide found the receptor rather than the other way round. Bowers and colleagues characterized the hexapeptide pharmacologically through the 1980s, and the receptor it was acting on was only cloned by Howard and colleagues in 1996, a decade later. Mechanistically the receptor couples through Gq to phospholipase C, generating inositol trisphosphate that releases intracellular calcium and triggers growth hormone vesicle exocytosis. Unlike Ipamorelin, which engages the same receptor selectively, GHRP-6 also elevates corticotropin, cortisol and prolactin, and it stimulates appetite as a ghrelin mimetic. That broader response profile is what makes it the standard comparator in selectivity work.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale GHRP-6 Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary secretagogue research compounds such as GHRP-2. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale GHRP-6 Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the two oxidation-prone tryptophan residues. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Endocrinology groups and receptor pharmacology labs are the primary users of GHRP-6, and it is more often the reference point than the subject. The standard secretagogue panel places it beside Ipamorelin and GHRP-2 in cultured rat pituitary cells, measuring growth hormone in the medium alongside corticotropin and prolactin, because GHRP-6 is precisely the compound whose broader hormone response defines what selectivity means for the others. Bowers and colleagues built that comparative framework and Robinson and colleagues later showed the growth hormone response operates independently of endogenous GHRH signaling. Receptor groups use it as the reference agonist in calcium mobilization assays on cells expressing the ghrelin receptor, the target its own pharmacology led investigators to identify.',
    qualityAssurance:
      'GHRP-6 concentrates an unusual amount of oxidation risk into a very short sequence. Six residues, two of them tryptophan, means the indole side chains dominate the stability profile: they oxidise readily and they absorb strongly in the near-ultraviolet, so both air exposure and ambient lighting degrade the material measurably. Singly and doubly oxidised forms are resolved on reverse-phase and reported separately, since combining them would understate how much intact peptide remains. Mass confirmation near 873 Da is straightforward with no multiply-charged envelope to interpret. The second requirement is chiral: two positions are deliberately D-configured, and an epimer at either carries the identical mass, so chiral separation runs as its own assay rather than being inferred.',
  },
};

const GHRP_6_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de GHRP-6 Spray al por mayor?',
      a: 'Cada lote mayorista de GHRP-6 Spray se verifica a una pureza ≥99.0% por HPLC de fase reversa y se confirma por LC-MS frente a la masa esperada cercana a 873 Da. Cada envío incluye un certificado de análisis específico del lote. Este hexapéptido contiene dos residuos de triptófano, lo que duplica la exposición habitual a la oxidación, de modo que las especies mono y dioxidadas se resuelven y reportan por separado. El análisis quiral confirma las dos posiciones en configuración D, que la espectrometría de masas por sí sola no puede distinguir.',
    },
    {
      q: '¿Está aprobado GHRP-6 Spray para uso terapéutico o consumo humano?',
      a: 'No. GHRP-6 Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Este material RUO no es un producto farmacéutico y carece de indicación aprobada.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para GHRP-6 Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de secretagogos de hormona del crecimiento, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra GHRP-6 Spray al por mayor?',
      a: 'GHRP-6 Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 10 mg por unidad. El vidrio ámbar cumple aquí una función real: dos residuos de triptófano en una secuencia de seis lo convierten en uno de los péptidos más fotosensibles del catálogo, y los anillos indólicos se degradan bajo iluminación ambiental común. El espacio de cabeza se purga con nitrógeno antes del sellado y no se requiere reconstitución.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de GHRP-6 Spray?',
      a: 'Almacene GHRP-6 Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 30 días y minimice la exposición al aire. Con dos triptófanos en una secuencia corta, la oxidación y la fotodegradación son juntas los factores limitantes de estabilidad más que la agregación o la hidrólisis. Evite los ciclos de congelación-descongelación, ya que cada ciclo aumenta el contacto con el espacio de cabeza. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F).',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para GHRP-6 Spray?',
      a: 'El GHRP-6 es un agonista de seis residuos del receptor de grelina, y su posición histórica es inusual: este péptido encontró al receptor y no al revés. Bowers y colaboradores caracterizaron farmacológicamente el hexapéptido a lo largo de los años ochenta, y el receptor sobre el que actuaba solo fue clonado por Howard y colaboradores en 1996, una década después. Mecánicamente el receptor se acopla vía Gq a la fosfolipasa C, genera inositol trifosfato que libera calcio intracelular y desencadena la exocitosis de vesículas de hormona del crecimiento. A diferencia de la ipamorelina, que activa el mismo receptor de forma selectiva, el GHRP-6 eleva además corticotropina, cortisol y prolactina, y estimula el apetito como mimético de la grelina. Ese perfil de respuesta más amplio es lo que lo convierte en el comparador estándar en trabajos de selectividad.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de GHRP-6 Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos secretagogos de investigación complementarios como el GHRP-2. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía GHRP-6 Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen los dos residuos de triptófano propensos a oxidación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de endocrinología y los laboratorios de farmacología de receptores son los principales usuarios del GHRP-6, y suele ser el punto de referencia más que el sujeto. El panel estándar de secretagogos lo sitúa junto a la ipamorelina y el GHRP-2 en células hipofisarias de rata en cultivo, midiendo hormona del crecimiento en el medio junto con corticotropina y prolactina, porque el GHRP-6 es justamente el compuesto cuya respuesta hormonal más amplia define qué significa selectividad para los demás. Bowers y colaboradores construyeron ese marco comparativo y Robinson y colaboradores mostraron después que la respuesta de hormona del crecimiento opera con independencia de la señalización endógena de GHRH. Los grupos de receptores lo usan como agonista de referencia en ensayos de movilización de calcio sobre células que expresan el receptor de grelina, la diana que su propia farmacología llevó a identificar.',
    qualityAssurance:
      'El GHRP-6 concentra una cantidad inusual de riesgo oxidativo en una secuencia muy corta. Seis residuos, dos de ellos triptófano, significa que las cadenas laterales indólicas dominan el perfil de estabilidad: se oxidan con facilidad y absorben fuertemente en el ultravioleta cercano, de modo que tanto la exposición al aire como la iluminación ambiental degradan el material de forma medible. Las formas mono y dioxidadas se resuelven en fase reversa y se reportan por separado, ya que combinarlas subestimaría cuánto péptido intacto queda. La confirmación de masa cerca de 873 Da es directa, sin envolvente de carga múltiple que interpretar. El segundo requisito es quiral: dos posiciones son deliberadamente de configuración D, y un epímero en cualquiera tiene masa idéntica, por lo que la separación quiral se corre como ensayo propio y no se infiere.',
  },
};

const GHRP_2_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale GHRP-2 Spray?',
      a: 'Every wholesale lot of GHRP-2 Spray is verified to ≥99.0% purity by reverse-phase HPLC and confirmed by LC-MS against the expected mass near 818 Da. Each shipment carries a batch-specific certificate of analysis. Chiral analysis is essential rather than optional for this sequence: it carries three D-configured residues plus a non-proteinogenic naphthylalanine, and an epimer at any of those centres has the identical mass. Tryptophan oxidation is monitored as the main chemical degradation route.',
    },
    {
      q: 'Is GHRP-2 Spray approved for therapeutic use or human consumption?',
      a: 'No. GHRP-2 Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. This RUO material is not a pharmaceutical product and carries no approved indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale GHRP-2 Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running secretagogue and anti-doping reference panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale GHRP-2 Spray supplied in?',
      a: 'GHRP-2 Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 100 mg per unit. The higher unit strength relative to GHRP-6 reflects how it is typically used in reference and method-development work rather than any difference in potency. The naphthylalanine residue makes the peptide more hydrophobic than its hexapeptide predecessor, so the buffer accounts for that. Headspace is nitrogen-purged before capping, and no reconstitution is required.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for GHRP-2 Spray?',
      a: 'Store GHRP-2 Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 30 days. This sequence is somewhat more robust than GHRP-6 because it carries one tryptophan rather than two and three D-configured residues rather than two, which together reduce both oxidation exposure and peptidase susceptibility. Avoid freeze-thaw cycling nonetheless. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for GHRP-2 Spray?',
      a: 'GHRP-2, also catalogued as pralmorelin, is a six-residue agonist at the ghrelin receptor and a deliberate structural revision of the earlier hexapeptide GHRP-6. Receptor activation couples through Gq to phospholipase C, generating inositol trisphosphate that releases intracellular calcium and triggers growth hormone vesicle release from pituitary somatotroph cells. The design changes are specific: a naphthylalanine replaces one tryptophan and a third D-configured residue is introduced, modifications that increase potency and reduce the appetite stimulation characteristic of GHRP-6 while retaining the same receptor target. It occupies a middle position in this class, more potent than the original hexapeptide but without the clean hormone selectivity Raun and colleagues reported for Ipamorelin.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale GHRP-2 Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary secretagogue research compounds such as GHRP-6. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale GHRP-2 Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the single tryptophan and the three D-configured positions. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Endocrinology groups and analytical reference laboratories both use GHRP-2, and the second application is unusual for this catalog. In pituitary cell work it takes its place in the three-way secretagogue panel beside GHRP-6 and Ipamorelin, where growth hormone in the medium is measured against corticotropin and prolactin to position each compound on the potency and selectivity axes. The other use is methodological: because GHRP-2 is a monitored substance in sport, anti-doping laboratories require well-characterized reference material for developing detection assays, and Reverter-Branchat and colleagues published on dried blood spot detection of this exact compound. Research-grade material with a documented certificate is what those method-development programmes need.',
    qualityAssurance:
      'GHRP-2 places more weight on chiral analysis than almost anything else in the catalog. The sequence deliberately incorporates three D-configured residues and a naphthylalanine that does not occur in natural proteins, which means four positions where a synthesis can go subtly wrong while still producing material of exactly the correct molecular mass. Chiral separation therefore runs as an independent assay and is reported alongside chromatographic purity, because mass spectrometry is structurally blind to these differences. The naphthylalanine also makes the peptide noticeably more hydrophobic than its hexapeptide predecessor, giving a later and well-separated retention window that serves as an identity check. Oxidation of the single tryptophan is the main chemical degradation route monitored across the shelf life.',
  },
};

const GHRP_2_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de GHRP-2 Spray al por mayor?',
      a: 'Cada lote mayorista de GHRP-2 Spray se verifica a una pureza ≥99.0% por HPLC de fase reversa y se confirma por LC-MS frente a la masa esperada cercana a 818 Da. Cada envío incluye un certificado de análisis específico del lote. El análisis quiral es esencial y no opcional para esta secuencia: porta tres residuos en configuración D más una naftilalanina no proteinogénica, y un epímero en cualquiera de esos centros tiene masa idéntica. La oxidación del triptófano se vigila como principal ruta de degradación química.',
    },
    {
      q: '¿Está aprobado GHRP-2 Spray para uso terapéutico o consumo humano?',
      a: 'No. GHRP-2 Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Este material RUO no es un producto farmacéutico y carece de indicación aprobada.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para GHRP-2 Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de secretagogos y de referencia antidopaje, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra GHRP-2 Spray al por mayor?',
      a: 'GHRP-2 Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 100 mg por unidad. La mayor concentración por unidad respecto al GHRP-6 refleja su uso habitual en trabajo de referencia y desarrollo de métodos, no una diferencia de potencia. El residuo de naftilalanina vuelve al péptido más hidrofóbico que su predecesor hexapéptido, y el tampón lo tiene en cuenta. El espacio de cabeza se purga con nitrógeno antes del sellado y no se requiere reconstitución.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de GHRP-2 Spray?',
      a: 'Almacene GHRP-2 Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 30 días. Esta secuencia es algo más robusta que el GHRP-6 porque porta un triptófano en lugar de dos y tres residuos en configuración D en lugar de dos, lo que reduce a la vez la exposición a oxidación y la susceptibilidad a peptidasas. Evite aun así los ciclos de congelación-descongelación. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F).',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para GHRP-2 Spray?',
      a: 'El GHRP-2, catalogado también como pralmorelina, es un agonista de seis residuos del receptor de grelina y una revisión estructural deliberada del hexapéptido anterior GHRP-6. La activación del receptor se acopla vía Gq a la fosfolipasa C, genera inositol trifosfato que libera calcio intracelular y desencadena la liberación de vesículas de hormona del crecimiento en las células somatotropas hipofisarias. Los cambios de diseño son específicos: una naftilalanina sustituye a un triptófano y se introduce un tercer residuo en configuración D, modificaciones que aumentan la potencia y reducen la estimulación del apetito característica del GHRP-6 conservando la misma diana. Ocupa una posición intermedia en esta clase, más potente que el hexapéptido original pero sin la selectividad hormonal limpia que Raun y colaboradores reportaron para la ipamorelina.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de GHRP-2 Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos secretagogos de investigación complementarios como el GHRP-6. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía GHRP-2 Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen el único triptófano y las tres posiciones en configuración D. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de endocrinología y los laboratorios analíticos de referencia usan ambos el GHRP-2, y la segunda aplicación es inusual en este catálogo. En trabajo con células hipofisarias ocupa su lugar en el panel triple de secretagogos junto al GHRP-6 y la ipamorelina, donde la hormona del crecimiento en el medio se mide frente a corticotropina y prolactina para situar cada compuesto en los ejes de potencia y selectividad. El otro uso es metodológico: como el GHRP-2 es una sustancia monitorizada en el deporte, los laboratorios antidopaje requieren material de referencia bien caracterizado para desarrollar ensayos de detección, y Reverter-Branchat y colaboradores publicaron sobre la detección de este mismo compuesto en gotas de sangre seca. El material de grado investigación con certificado documentado es lo que necesitan esos programas de desarrollo de métodos.',
    qualityAssurance:
      'El GHRP-2 otorga más peso al análisis quiral que casi cualquier otro producto del catálogo. La secuencia incorpora deliberadamente tres residuos en configuración D y una naftilalanina que no aparece en proteínas naturales, lo que significa cuatro posiciones donde una síntesis puede desviarse sutilmente produciendo material de masa molecular exactamente correcta. Por eso la separación quiral se corre como ensayo independiente y se reporta junto a la pureza cromatográfica, porque la espectrometría de masas es estructuralmente ciega a estas diferencias. La naftilalanina además vuelve al péptido notablemente más hidrofóbico que su predecesor hexapéptido, dando una ventana de retención más tardía y bien separada que sirve como verificación de identidad. La oxidación del único triptófano es la principal ruta de degradación química vigilada durante la vida útil.',
  },
};

const DIHEXA_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Dihexa Spray?',
      a: 'Every wholesale lot of Dihexa Spray is verified to ≥99.0% purity by reverse-phase HPLC and confirmed by LC-MS against the expected mass near 505 Da. Each shipment carries a batch-specific certificate of analysis. Two screens are specific to this chemistry: the des-acyl species left by incomplete hexanoylation at the amino terminus, and free-acid material where the terminal amide has hydrolysed. Both carry masses close enough to the target that a loosely specified method could miss them.',
    },
    {
      q: 'Is Dihexa Spray approved for therapeutic use or human consumption?',
      a: 'No. Dihexa Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. This RUO material is not a pharmaceutical product and carries no approved indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Dihexa Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running synaptogenesis and growth factor signaling panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale Dihexa Spray supplied in?',
      a: 'Dihexa Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 10 mg per unit. This compound is markedly more lipophilic than the peptides around it in this catalog, thanks to a six-carbon acyl chain at one end and a six-carbon amide linker at the other, so the formulation is built to hold it in solution and to limit adsorption onto container surfaces. Headspace is nitrogen-purged before capping, and no reconstitution is required.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Dihexa Spray?',
      a: 'Store Dihexa Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 30 days. Avoid unnecessary transfers between containers: lipophilic compounds adsorb onto plastic surfaces and each transfer quietly lowers the working concentration without any chemical degradation occurring. Avoid freeze-thaw cycling, which can cause the compound to come out of solution. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Dihexa Spray?',
      a: 'Dihexa is a small angiotensin IV-derived molecule built from two amino acids capped with a six-carbon acyl group and a six-carbon amide linker. The proposed mechanism is potentiation of hepatocyte growth factor signaling at the c-Met receptor tyrosine kinase, which would place it in a different mechanistic category from the receptor agonists elsewhere in this catalog. That said, the evidence base requires a clear caveat. The two papers that originally established the hepatocyte growth factor and c-Met mechanism were retracted by the publishing journal in 2025. McCoy and colleagues characterized the metabolically stabilized angiotensin IV analog series in work that has not been retracted, and Sun and colleagues later reported effects through PI3K and Akt signaling in a transgenic mouse model.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Dihexa Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary cognitive research compounds such as Semax. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale Dihexa Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the hydrophobic acyl chain against adsorption losses. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Neuroscience groups studying synaptogenesis are the primary users of Dihexa, and anyone planning work with it should first understand the state of the literature. Two of the foundational papers describing its hepatocyte growth factor and c-Met mechanism were retracted in 2025, which does not invalidate the compound as a research tool but does mean the mechanism should be treated as an open question rather than settled fact. Hippocampal neuron culture is the standard model, where dendritic spine density and synapsin puncta counts by immunofluorescence serve as the synaptogenesis readout. Wright and Harding reviewed the brain hepatocyte growth factor and c-Met system independently of the retracted work, and Sun and colleagues reported behavioural and PI3K and Akt pathway effects in a transgenic mouse model.',
    qualityAssurance:
      'Dihexa is the most lipophilic compound in this group and its analytical behaviour follows directly from that. A six-carbon acyl chain at the amino terminus and a six-carbon amide linker at the other end make the molecule far more hydrophobic than a two-residue peptide would otherwise be, so it elutes late on reverse-phase separation and that late retention window doubles as an identity check. Mass confirmation near 505 Da is clean, with no multiply-charged envelope. Two degradants are watched: material where the amino-terminal acylation is incomplete, and free-acid material where the terminal amide has hydrolysed. The practical handling risk is adsorption rather than degradation, since lipophilic compounds bind to plastic surfaces and quietly reduce working concentration.',
  },
};

const DIHEXA_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Dihexa Spray al por mayor?',
      a: 'Cada lote mayorista de Dihexa Spray se verifica a una pureza ≥99.0% por HPLC de fase reversa y se confirma por LC-MS frente a la masa esperada cercana a 505 Da. Cada envío incluye un certificado de análisis específico del lote. Dos cribados son propios de esta química: la especie sin acilo que deja una hexanoilación incompleta en el extremo amino, y el material de ácido libre donde la amida terminal se ha hidrolizado. Ambos tienen masas lo bastante próximas al objetivo como para que un método poco específico los pase por alto.',
    },
    {
      q: '¿Está aprobado Dihexa Spray para uso terapéutico o consumo humano?',
      a: 'No. Dihexa Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Este material RUO no es un producto farmacéutico y carece de indicación aprobada.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Dihexa Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de sinaptogénesis y señalización de factores de crecimiento, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra Dihexa Spray al por mayor?',
      a: 'Dihexa Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 10 mg por unidad. Este compuesto es marcadamente más lipofílico que los péptidos que lo rodean en el catálogo, gracias a una cadena acilo de seis carbonos en un extremo y un enlazador amida de seis carbonos en el otro, de modo que la formulación se diseña para mantenerlo en solución y limitar la adsorción a las superficies del envase. El espacio de cabeza se purga con nitrógeno antes del sellado y no se requiere reconstitución.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Dihexa Spray?',
      a: 'Almacene Dihexa Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 30 días. Evite trasvases innecesarios entre recipientes: los compuestos lipofílicos se adsorben a superficies plásticas y cada transferencia reduce silenciosamente la concentración de trabajo sin que ocurra degradación química alguna. Evite los ciclos de congelación-descongelación, que pueden precipitar el compuesto. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F).',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Dihexa Spray?',
      a: 'El Dihexa es una molécula pequeña derivada de angiotensina IV construida a partir de dos aminoácidos con un grupo acilo de seis carbonos y un enlazador amida de seis carbonos. El mecanismo propuesto es la potenciación de la señalización del factor de crecimiento de hepatocitos en el receptor tirosina quinasa c-Met, lo que lo situaría en una categoría mecanística distinta de la de los agonistas de receptores del resto del catálogo. Dicho esto, la base de evidencia requiere una salvedad clara. Los dos artículos que establecieron originalmente el mecanismo del factor de crecimiento de hepatocitos y c-Met fueron retractados por la revista editora en 2025. McCoy y colaboradores caracterizaron la serie de análogos de angiotensina IV metabólicamente estabilizados en un trabajo que no ha sido retractado, y Sun y colaboradores reportaron después efectos vía señalización PI3K y Akt en un modelo de ratón transgénico.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Dihexa Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos de investigación cognitiva complementarios como el Semax. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Dihexa Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen la cadena acilo hidrofóbica frente a pérdidas por adsorción. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de neurociencia que estudian sinaptogénesis son los principales usuarios del Dihexa, y quien planifique trabajo con él debe conocer primero el estado de la literatura. Dos de los artículos fundacionales que describían su mecanismo de factor de crecimiento de hepatocitos y c-Met fueron retractados en 2025, lo que no invalida al compuesto como herramienta de investigación pero sí implica que el mecanismo debe tratarse como pregunta abierta y no como hecho establecido. El cultivo de neuronas hipocampales es el modelo estándar, donde la densidad de espinas dendríticas y el recuento de puntos de sinapsina por inmunofluorescencia sirven como lectura de sinaptogénesis. Wright y Harding revisaron el sistema cerebral de factor de crecimiento de hepatocitos y c-Met de forma independiente al trabajo retractado, y Sun y colaboradores reportaron efectos conductuales y de la vía PI3K y Akt en un modelo de ratón transgénico.',
    qualityAssurance:
      'El Dihexa es el compuesto más lipofílico de este grupo y su comportamiento analítico se deriva directamente de ello. Una cadena acilo de seis carbonos en el extremo amino y un enlazador amida de seis carbonos en el otro vuelven la molécula mucho más hidrofóbica de lo que sería un péptido de dos residuos, de modo que eluye tarde en fase reversa y esa ventana de retención tardía sirve además como verificación de identidad. La confirmación de masa cerca de 505 Da es limpia, sin envolvente de carga múltiple. Se vigilan dos degradantes: el material con acilación amino-terminal incompleta y el material de ácido libre donde la amida terminal se ha hidrolizado. El riesgo práctico de manipulación es la adsorción más que la degradación, ya que los compuestos lipofílicos se unen a superficies plásticas y reducen silenciosamente la concentración de trabajo.',
  },
};

const CJC_1295_IPAMORELIN_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale CJC-1295 + Ipamorelin Spray?',
      a: 'Every wholesale lot of CJC-1295 + Ipamorelin Spray is verified to ≥99.0% purity per component by reverse-phase HPLC and confirmed by LC-MS, with each peptide quantified against its own reference standard. The certificate reports the blend ratio alongside individual purity. Both peptides carry non-standard residues, so chiral analysis runs as a separate assay, and the certificate states which CJC-1295 form the lot contains since the DAC and non-DAC versions differ substantially in mass.',
    },
    {
      q: 'Is CJC-1295 + Ipamorelin Spray approved for therapeutic use or human consumption?',
      a: 'No. CJC-1295 + Ipamorelin Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. Neither component of this blend holds an approved indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale CJC-1295 + Ipamorelin Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running pituitary secretion panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale CJC-1295 + Ipamorelin Spray supplied in?',
      a: 'CJC-1295 + Ipamorelin Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 10 mg combined per unit. The two peptides differ enormously in size, a 29-residue chain beside a 5-residue one, and that gap is exactly why a powder blend drifts: the small peptide dissolves first and the ratio shifts between reconstitutions. Headspace is nitrogen-purged before capping, and no reconstitution is required.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for CJC-1295 + Ipamorelin Spray?',
      a: 'Store CJC-1295 + Ipamorelin Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 30 days. Do not freeze: the 29-residue chain nucleates aggregates at the ice interface while the pentapeptide stays fully in solution, so freezing shifts the ratio even when neither peptide degrades chemically. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for CJC-1295 + Ipamorelin Spray?',
      a: 'This blend engages two receptors through two different G proteins, which is the entire logic of the pairing. CJC-1295 binds the GHRH receptor on pituitary somatotroph cells, coupling through Gs to adenylyl cyclase, raising cAMP and driving growth hormone gene transcription via CREB and Pit-1. Ipamorelin binds the ghrelin receptor instead, coupling through Gq to phospholipase C, releasing intracellular calcium and triggering vesicle exocytosis. One arm builds hormone and sustains the signal; the other releases stored hormone in discrete events. Research shows Ipamorelin does this without the corticotropin and prolactin elevation GHRP-6 produces, which is why it rather than an older secretagogue appears in this blend.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale CJC-1295 + Ipamorelin Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary growth factor research compounds such as Tesamorelin. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale CJC-1295 + Ipamorelin Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the blend ratio and the non-standard residues in both peptides. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Endocrinology groups and pituitary cell biology labs are the main users of this blend, and its appeal is that one preparation drives two second messengers at once. A lab working with cultured rat pituitary cells will treat and then measure growth hormone released into the medium while tracking cAMP and intracellular calcium in parallel, since the GHRH arm raises the former and the ghrelin arm the latter. Running each component alone in adjacent wells is the mandatory control, because that is the only way to establish whether the combined response is additive or genuinely synergistic. Teichman and colleagues documented the prolonged secretion profile of the GHRH analog, and Raun and colleagues established the selectivity that makes Ipamorelin the preferred partner over GHRP-6.',
    qualityAssurance:
      'A blend moves the analytical question from purity to composition, and this pairing makes that unusually tractable. The two peptides differ so much in length, roughly 29 residues against 5, that they separate far apart on a reverse-phase column and each can be quantified cleanly against its own reference standard rather than resolved from a crowded region. Mass analysis confirms both independently. One identity question deserves attention: CJC-1295 exists in two forms, with and without the affinity complex, and they differ by several hundred mass units, so the certificate states which form the lot contains. The certificate reports the blend ratio alongside individual purity, since correctly pure but wrongly proportioned material is still out of specification.',
  },
};

const CJC_1295_IPAMORELIN_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de CJC-1295 + Ipamorelin Spray al por mayor?',
      a: 'Cada lote mayorista de CJC-1295 + Ipamorelin Spray se verifica a una pureza ≥99.0% por componente mediante HPLC de fase reversa y se confirma por LC-MS, cuantificando cada péptido frente a su propio estándar. El certificado reporta la proporción de la mezcla junto con la pureza individual. Ambos péptidos portan residuos no estándar, por lo que el análisis quiral se corre como ensayo aparte, y el certificado indica qué forma de CJC-1295 contiene el lote, ya que las versiones con y sin DAC difieren sustancialmente en masa.',
    },
    {
      q: '¿Está aprobado CJC-1295 + Ipamorelin Spray para uso terapéutico o consumo humano?',
      a: 'No. CJC-1295 + Ipamorelin Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ninguno de los componentes de esta mezcla cuenta con una indicación aprobada.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para CJC-1295 + Ipamorelin Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de secreción hipofisaria, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra CJC-1295 + Ipamorelin Spray al por mayor?',
      a: 'CJC-1295 + Ipamorelin Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 10 mg combinados por unidad. Los dos péptidos difieren enormemente en tamaño, una cadena de 29 residuos junto a una de 5, y esa brecha es justamente la razón por la que una mezcla en polvo se desvía: el péptido pequeño se disuelve primero y la proporción cambia entre reconstituciones. El espacio de cabeza se purga con nitrógeno antes del sellado y no se requiere reconstitución.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de CJC-1295 + Ipamorelin Spray?',
      a: 'Almacene CJC-1295 + Ipamorelin Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 30 días. No congelar: la cadena de 29 residuos nuclea agregados en la interfaz del hielo mientras el pentapéptido permanece completamente en solución, de modo que congelar altera la proporción aunque ninguno se degrade químicamente. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F).',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para CJC-1295 + Ipamorelin Spray?',
      a: 'Esta mezcla activa dos receptores mediante dos proteínas G distintas, y esa es toda la lógica de la combinación. El CJC-1295 se une al receptor de GHRH en las células somatotropas hipofisarias, se acopla vía Gs a la adenilato ciclasa, eleva el cAMP e impulsa la transcripción del gen de la hormona del crecimiento mediante CREB y Pit-1. La ipamorelina, en cambio, se une al receptor de grelina, se acopla vía Gq a la fosfolipasa C, libera calcio intracelular y desencadena la exocitosis vesicular. Un brazo sintetiza hormona y sostiene la señal; el otro libera hormona almacenada en eventos discretos. La investigación muestra que la ipamorelina lo hace sin la elevación de corticotropina y prolactina que produce el GHRP-6, razón por la cual aparece ella y no un secretagogo más antiguo en esta mezcla.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de CJC-1295 + Ipamorelin Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos de investigación de factores de crecimiento complementarios como la tesamorelina. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía CJC-1295 + Ipamorelin Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen la proporción de la mezcla y los residuos no estándar de ambos péptidos. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de endocrinología y los laboratorios de biología celular hipofisaria son los principales usuarios de esta mezcla, y su atractivo es que una sola preparación impulsa dos segundos mensajeros a la vez. Un laboratorio con células hipofisarias de rata en cultivo trata y luego mide la hormona del crecimiento vertida al medio mientras sigue en paralelo el cAMP y el calcio intracelular, ya que el brazo de GHRH eleva el primero y el de grelina el segundo. Correr cada componente por separado en pozos contiguos es el control obligatorio, porque es la única forma de establecer si la respuesta combinada es aditiva o genuinamente sinérgica. Teichman y colaboradores documentaron el perfil de secreción prolongada del análogo de GHRH, y Raun y colaboradores establecieron la selectividad que hace de la ipamorelina la pareja preferida frente al GHRP-6.',
    qualityAssurance:
      'Una mezcla desplaza la pregunta analítica de la pureza a la composición, y esta combinación lo vuelve inusualmente manejable. Los dos péptidos difieren tanto en longitud, unos 29 residuos frente a 5, que se separan ampliamente en una columna de fase reversa y cada uno puede cuantificarse limpiamente frente a su propio estándar en lugar de resolverse en una región saturada. El análisis de masa confirma ambos de forma independiente. Una cuestión de identidad merece atención: el CJC-1295 existe en dos formas, con y sin el complejo de afinidad, y difieren en varios cientos de unidades de masa, por lo que el certificado indica qué forma contiene el lote. El certificado reporta la proporción junto con la pureza individual, ya que material puro pero mal proporcionado sigue estando fuera de especificación.',
  },
};

const CJC_1295_DAC_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale CJC-1295 (with DAC) Spray?',
      a: 'Every wholesale lot of CJC-1295 with DAC Spray is verified to ≥99.0% purity by reverse-phase HPLC and confirmed by LC-MS against the expected mass near 3647 Da. Each shipment carries a batch-specific certificate of analysis. The screen that matters most here is the affinity complex itself: material that has lost the maleimide group carries the non-DAC mass of roughly 3368 Da, a difference of several hundred units that mass analysis resolves unambiguously and the certificate reports explicitly.',
    },
    {
      q: 'Is CJC-1295 (with DAC) Spray approved for therapeutic use or human consumption?',
      a: 'No. CJC-1295 (with DAC) Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. This RUO material is not a pharmaceutical product and carries no approved indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale CJC-1295 (with DAC) Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running GHRH receptor and albumin binding panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale CJC-1295 (with DAC) Spray supplied in?',
      a: 'CJC-1295 with DAC Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 5 mg per unit. The formulation matters more here than for most peptides because the affinity complex terminates in a maleimide group designed to react with a free thiol, so the buffer is chosen to avoid premature reaction and the headspace is nitrogen-purged to keep reactive species out. No reconstitution step is required.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for CJC-1295 (with DAC) Spray?',
      a: 'Store CJC-1295 with DAC Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 30 days. Keep it away from any thiol-containing reagent and away from reducing agents entirely: the maleimide group is deliberately reactive toward free thiols, and contact with one consumes the affinity complex that defines this version. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for CJC-1295 (with DAC) Spray?',
      a: 'CJC-1295 with DAC binds the GHRH receptor on pituitary somatotroph cells, coupling through Gs to adenylyl cyclase, raising cAMP and driving growth hormone gene transcription through CREB and Pit-1. That much it shares with every GHRH analog. What defines this version is what happens outside the receptor. The Drug Affinity Complex is a maleimide group attached to the peptide that reacts with a free cysteine thiol on circulating albumin, forming a covalent bond. This is the important distinction from the fatty-acid acylation used on Semaglutide and Tirzepatide, which produces reversible non-covalent albumin binding. Jetté and colleagues characterized these albumin bioconjugates, and Teichman and colleagues reported the prolonged secretion profile that follows.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale CJC-1295 (with DAC) Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary growth factor research compounds such as Ipamorelin. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale CJC-1295 (with DAC) Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the reactive maleimide group that forms the albumin bond. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Endocrinology groups and protein bioconjugation labs both work with CJC-1295 with DAC, and the second group is unusual for a growth hormone compound. In pituitary cell culture the readout is conventional: cAMP accumulation followed by growth hormone released into the medium, establishing that the affinity complex has not compromised receptor engagement. The more distinctive experiment tests the conjugation chemistry itself. A lab will incubate the peptide with purified serum albumin and follow adduct formation by size-based separation or mass analysis, confirming that the maleimide group reacts with the single free cysteine thiol as designed. Jetté and colleagues built that framework in 2005, and the natural comparison is against the non-DAC version, which shares the receptor pharmacology but none of the conjugation chemistry.',
    qualityAssurance:
      'This version presents an analytical question that no other GHRH analog in the catalog raises. The affinity complex adds several hundred mass units to the peptide, so material that has lost it during synthesis or storage reports the non-DAC mass instead, and mass analysis separates the two forms without ambiguity. The certificate states which form the lot contains, which matters because the DAC and non-DAC products are sold under names that differ by three letters. Beyond identity, the maleimide group is deliberately reactive toward free thiols, so the analytical method confirms it has not already reacted with something during processing. Reverse-phase separation gives a well-defined retention window that shifts noticeably between the two forms, providing a second identity check.',
  },
};

const CJC_1295_DAC_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de CJC-1295 (with DAC) Spray al por mayor?',
      a: 'Cada lote mayorista de CJC-1295 con DAC Spray se verifica a una pureza ≥99.0% por HPLC de fase reversa y se confirma por LC-MS frente a la masa esperada cercana a 3647 Da. Cada envío incluye un certificado de análisis específico del lote. El cribado que más importa aquí es el propio complejo de afinidad: el material que ha perdido el grupo maleimida tiene la masa de la forma sin DAC, unos 3368 Da, una diferencia de varios cientos de unidades que el análisis de masa resuelve sin ambigüedad y que el certificado reporta de forma explícita.',
    },
    {
      q: '¿Está aprobado CJC-1295 (with DAC) Spray para uso terapéutico o consumo humano?',
      a: 'No. CJC-1295 (with DAC) Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Este material RUO no es un producto farmacéutico y carece de indicación aprobada.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para CJC-1295 (with DAC) Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de receptor de GHRH y unión a albúmina, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra CJC-1295 (with DAC) Spray al por mayor?',
      a: 'CJC-1295 con DAC Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 5 mg por unidad. La formulación importa aquí más que en la mayoría de los péptidos porque el complejo de afinidad termina en un grupo maleimida diseñado para reaccionar con un tiol libre, de modo que el tampón se elige para evitar una reacción prematura y el espacio de cabeza se purga con nitrógeno para excluir especies reactivas. No se requiere reconstitución.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de CJC-1295 (with DAC) Spray?',
      a: 'Almacene CJC-1295 con DAC Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 30 días. Manténgalo alejado de cualquier reactivo con tioles y por completo de agentes reductores: el grupo maleimida es deliberadamente reactivo frente a tioles libres, y el contacto con uno consume el complejo de afinidad que define esta versión. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F).',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para CJC-1295 (with DAC) Spray?',
      a: 'El CJC-1295 con DAC se une al receptor de GHRH en las células somatotropas hipofisarias, se acopla vía Gs a la adenilato ciclasa, eleva el cAMP e impulsa la transcripción del gen de la hormona del crecimiento mediante CREB y Pit-1. Eso lo comparte con todos los análogos de GHRH. Lo que define a esta versión es lo que ocurre fuera del receptor. El Complejo de Afinidad Farmacológica es un grupo maleimida unido al péptido que reacciona con un tiol libre de cisteína en la albúmina circulante y forma un enlace covalente. Esta es la distinción importante frente a la acilación con ácidos grasos que usan la semaglutida y la tirzepatida, que produce una unión no covalente y reversible a la albúmina. Jetté y colaboradores caracterizaron estos bioconjugados con albúmina, y Teichman y colaboradores reportaron el perfil de secreción prolongada que se deriva.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de CJC-1295 (with DAC) Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos de investigación de factores de crecimiento complementarios como la ipamorelina. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía CJC-1295 (with DAC) Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen el grupo maleimida reactivo que forma el enlace con la albúmina. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de endocrinología y los laboratorios de bioconjugación de proteínas trabajan ambos con CJC-1295 con DAC, y el segundo grupo es inusual para un compuesto de hormona del crecimiento. En cultivo de células hipofisarias la lectura es convencional: acumulación de cAMP seguida de hormona del crecimiento vertida al medio, estableciendo que el complejo de afinidad no ha comprometido la activación del receptor. El experimento más distintivo pone a prueba la propia química de conjugación. Un laboratorio incuba el péptido con albúmina sérica purificada y sigue la formación del aducto por separación según tamaño o análisis de masa, confirmando que el grupo maleimida reacciona con el único tiol libre de cisteína como se diseñó. Jetté y colaboradores construyeron ese marco en 2005, y la comparación natural es frente a la versión sin DAC, que comparte la farmacología del receptor pero ninguna de la química de conjugación.',
    qualityAssurance:
      'Esta versión plantea una pregunta analítica que ningún otro análogo de GHRH del catálogo suscita. El complejo de afinidad añade varios cientos de unidades de masa al péptido, de modo que el material que lo ha perdido durante la síntesis o el almacenamiento reporta la masa de la forma sin DAC, y el análisis de masa separa ambas formas sin ambigüedad. El certificado indica qué forma contiene el lote, lo que importa porque ambos productos se venden con nombres que difieren en tres letras. Más allá de la identidad, el grupo maleimida es deliberadamente reactivo frente a tioles libres, por lo que el método analítico confirma que no ha reaccionado ya con algo durante el procesamiento. La separación en fase reversa da una ventana de retención bien definida que se desplaza de forma apreciable entre ambas formas, aportando una segunda verificación de identidad.',
  },
};

const CJC_1295_NO_DAC_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale CJC-1295 (No DAC) Spray?',
      a: 'Every wholesale lot of CJC-1295 No DAC Spray is verified to ≥99.0% purity by reverse-phase HPLC and confirmed by LC-MS against the expected mass near 3368 Da. Each shipment carries a batch-specific certificate of analysis. Two checks are specific to this sequence: confirmation that all four engineered substitutions are present, since a partially reverted chain has a different mass, and chiral analysis of the D-configured second residue, which mass spectrometry cannot distinguish from its natural counterpart.',
    },
    {
      q: 'Is CJC-1295 (No DAC) Spray approved for therapeutic use or human consumption?',
      a: 'No. CJC-1295 (No DAC) Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. This RUO material is not a pharmaceutical product and carries no approved indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale CJC-1295 (No DAC) Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running GHRH receptor assay panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale CJC-1295 (No DAC) Spray supplied in?',
      a: 'CJC-1295 No DAC Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 10 mg per unit. At 29 residues it sits comfortably in the mid-size range for solubility and dissolves cleanly in aqueous buffer without an organic co-solvent. Notably, this sequence carries no methionine, because one of the four substitutions replaced it, so it is less oxidation-prone than Sermorelin. Headspace is still nitrogen-purged before capping.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for CJC-1295 (No DAC) Spray?',
      a: 'Store CJC-1295 No DAC Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 30 days. This sequence is more robust than Sermorelin at the same length, because the engineered substitutions removed both the oxidation-prone methionine and the deamidation-prone asparagine from the native backbone. Avoid freeze-thaw cycling nonetheless. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for CJC-1295 (No DAC) Spray?',
      a: 'CJC-1295 without DAC is a 29-residue analog of growth hormone-releasing hormone that binds the GHRH receptor on pituitary somatotroph cells, coupling through Gs to adenylyl cyclase, raising cAMP and driving growth hormone gene transcription through CREB and Pit-1. Its interest lies in the four engineered substitutions, each of which solves a specific problem in the native sequence. A D-configured residue at position two blocks enzymatic cleavage. A glutamine substitution removes an asparagine that would otherwise deamidate. An alanine substitution improves stability. A leucine substitution eliminates the methionine that oxidises in Sermorelin. Compared against Sermorelin, which is the unmodified fragment of identical length, this analog isolates exactly what rational substitution buys.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale CJC-1295 (No DAC) Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary growth factor research compounds such as Sermorelin. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale CJC-1295 (No DAC) Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the four engineered substitutions and the C-terminal amide. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Endocrinology and pituitary cell biology groups are the primary users, and this analog is most informative when paired with something else. The single most instructive comparison in the GHRH class places it beside Sermorelin: the two are the same length and hit the same receptor, but one carries four engineered substitutions and the other does not, so running them together in cultured rat pituitary cells isolates precisely what those substitutions contribute to stability and duration. A second pairing against the DAC version isolates the opposite variable, since those two share the substitutions and differ only in the albumin conjugation. The readouts are conventional throughout: cAMP accumulation followed by growth hormone released into the medium.',
    qualityAssurance:
      'This analog is analytically cleaner than its unmodified counterpart, and the reason is instructive. Two of the four engineered substitutions removed the residues that normally dominate a GHRH fragment stability profile: the methionine that oxidises and the asparagine that deamidates are both gone from the sequence. What remains to monitor is truncated chains from incomplete coupling and hydrolysis of the C-terminal amide. Mass analysis confirms the intact 29-residue chain near 3368 Da, and it also distinguishes this material from the DAC-bearing version, which is several hundred units heavier. Chiral separation runs as a distinct assay because the D-configured second residue carries the same mass as its natural form and mass spectrometry is blind to the difference.',
  },
};

const CJC_1295_NO_DAC_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de CJC-1295 (No DAC) Spray al por mayor?',
      a: 'Cada lote mayorista de CJC-1295 No DAC Spray se verifica a una pureza ≥99.0% por HPLC de fase reversa y se confirma por LC-MS frente a la masa esperada cercana a 3368 Da. Cada envío incluye un certificado de análisis específico del lote. Dos verificaciones son propias de esta secuencia: la confirmación de que las cuatro sustituciones diseñadas están presentes, ya que una cadena parcialmente revertida tiene otra masa, y el análisis quiral del segundo residuo en configuración D, que la espectrometría de masas no puede distinguir de su equivalente natural.',
    },
    {
      q: '¿Está aprobado CJC-1295 (No DAC) Spray para uso terapéutico o consumo humano?',
      a: 'No. CJC-1295 (No DAC) Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Este material RUO no es un producto farmacéutico y carece de indicación aprobada.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para CJC-1295 (No DAC) Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de ensayos del receptor de GHRH, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra CJC-1295 (No DAC) Spray al por mayor?',
      a: 'CJC-1295 No DAC Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 10 mg por unidad. Con 29 residuos se sitúa cómodamente en el rango de tamaño medio para solubilidad y se disuelve limpiamente en tampón acuoso sin codisolvente orgánico. Cabe destacar que esta secuencia no contiene metionina, porque una de las cuatro sustituciones la reemplazó, por lo que es menos propensa a oxidación que la sermorelina. Aun así, el espacio de cabeza se purga con nitrógeno antes del sellado.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de CJC-1295 (No DAC) Spray?',
      a: 'Almacene CJC-1295 No DAC Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 30 días. Esta secuencia es más robusta que la sermorelina de igual longitud, porque las sustituciones diseñadas eliminaron del esqueleto nativo tanto la metionina propensa a oxidación como la asparagina propensa a desamidación. Evite aun así los ciclos de congelación-descongelación. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F).',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para CJC-1295 (No DAC) Spray?',
      a: 'El CJC-1295 sin DAC es un análogo de 29 residuos de la hormona liberadora de hormona del crecimiento que se une al receptor de GHRH en las células somatotropas hipofisarias, se acopla vía Gs a la adenilato ciclasa, eleva el cAMP e impulsa la transcripción del gen de la hormona del crecimiento mediante CREB y Pit-1. Su interés reside en las cuatro sustituciones diseñadas, cada una de las cuales resuelve un problema concreto de la secuencia nativa. Un residuo en configuración D en la posición dos bloquea la escisión enzimática. Una sustitución por glutamina elimina una asparagina que de otro modo se desamidaría. Una sustitución por alanina mejora la estabilidad. Una sustitución por leucina elimina la metionina que se oxida en la sermorelina. Comparado con la sermorelina, que es el fragmento sin modificar de idéntica longitud, este análogo aísla exactamente lo que aporta la sustitución racional.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de CJC-1295 (No DAC) Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos de investigación de factores de crecimiento complementarios como la sermorelina. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía CJC-1295 (No DAC) Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen las cuatro sustituciones diseñadas y la amida C-terminal. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de endocrinología y biología celular hipofisaria son los principales usuarios, y este análogo resulta más informativo emparejado con otro compuesto. La comparación más instructiva de la clase GHRH lo sitúa junto a la sermorelina: ambos tienen la misma longitud y activan el mismo receptor, pero uno porta cuatro sustituciones diseñadas y el otro no, de modo que correrlos juntos en células hipofisarias de rata aísla precisamente lo que esas sustituciones aportan en estabilidad y duración. Un segundo emparejamiento frente a la versión con DAC aísla la variable opuesta, ya que esos dos comparten las sustituciones y solo difieren en la conjugación con albúmina. Las lecturas son convencionales en todos los casos: acumulación de cAMP seguida de hormona del crecimiento vertida al medio.',
    qualityAssurance:
      'Este análogo es analíticamente más limpio que su contraparte sin modificar, y la razón es instructiva. Dos de las cuatro sustituciones diseñadas eliminaron los residuos que normalmente dominan el perfil de estabilidad de un fragmento de GHRH: la metionina que se oxida y la asparagina que se desamida ya no están en la secuencia. Lo que queda por vigilar son las cadenas truncadas por acoplamiento incompleto y la hidrólisis de la amida C-terminal. El análisis de masa confirma la cadena intacta de 29 residuos cerca de 3368 Da, y además distingue este material de la versión con DAC, varios cientos de unidades más pesada. La separación quiral se corre como ensayo aparte porque el segundo residuo en configuración D tiene la misma masa que su forma natural y la espectrometría de masas es ciega a esa diferencia.',
  },
};

const CAGRILINTIDE_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Cagrilintide Spray?',
      a: 'Every wholesale lot of Cagrilintide Spray is verified to ≥99.0% purity by reverse-phase HPLC and confirmed by LC-MS across the multiply-charged envelope against the expected mass near 4409 Da. Each shipment carries a batch-specific certificate of analysis. Two screens are specific to this chemistry: the des-acyl species left by incomplete fatty acid conjugation, and confirmation that the internal disulfide bridge is correctly closed, since the reduced linear form carries an almost identical mass.',
    },
    {
      q: 'Is Cagrilintide Spray approved for therapeutic use or human consumption?',
      a: 'No. Cagrilintide Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. This RUO material is not a pharmaceutical product and carries no approved indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Cagrilintide Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running amylin and calcitonin receptor panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale Cagrilintide Spray supplied in?',
      a: 'Cagrilintide Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 10 mg per unit. Amylin-family peptides are notoriously prone to self-association and fibril formation, which is the practical reason a buffered pre-dissolved format outperforms a powder here: reconstituting an aggregation-prone peptide by hand is where most material is lost. Headspace is nitrogen-purged before capping, and no reconstitution is required.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Cagrilintide Spray?',
      a: 'Store Cagrilintide Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 30 days. Do not freeze and avoid vigorous agitation: amylin-family peptides nucleate beta-sheet fibrils under mechanical and thermal stress, and once fibrillation starts it is not reversible by filtration or warming. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Cagrilintide Spray?',
      a: 'Cagrilintide is a long-acting amylin analog, and the receptor it targets is unusual because it is not a single gene product. An amylin receptor forms when the calcitonin receptor associates with a receptor activity-modifying protein, and because there are three such accessory proteins there are three distinct amylin receptor subtypes rather than one. Cao and colleagues published the structural basis for this in 2022. Receptor activation couples through Gs to adenylyl cyclase, raising cAMP. Cagrilintide also retains activity at the calcitonin receptor itself. A fatty acid side chain drives albumin binding for extended duration, and the design distinguishes it from GLP-1 agonists such as Semaglutide, which engage an entirely different receptor family.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Cagrilintide Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary metabolic research compounds such as Semaglutide. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale Cagrilintide Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the disulfide bridge and the fatty acid side chain. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Metabolic endocrinology groups and receptor pharmacology labs are the primary users of Cagrilintide, and the receptor architecture shapes the experiment. Because an amylin receptor only exists when the calcitonin receptor pairs with an accessory protein, a pharmacology lab must co-transfect both components into a host line to build each subtype, then measure cAMP accumulation to establish selectivity across the three. That is a more involved setup than a single-receptor assay and it is the reason this compound appears mostly in specialist hands. Cao and colleagues resolved the structural basis for the subtypes in 2022. Combination work is the other major thread, since Enebo and colleagues studied concomitant amylin and GLP-1 receptor engagement, making Semaglutide the natural partner compound.',
    qualityAssurance:
      'Cagrilintide combines two structural features that each demand their own analytical check. The fatty acid side chain makes the molecule strongly hydrophobic, so it elutes late on a reverse-phase column, and that late retention window is itself an identity check because material lacking the acyl group comes off noticeably earlier. Mass confirmation works across the multiply-charged envelope rather than a single ion, as expected for a peptide of this size. The second feature is an internal disulfide bridge, and the reduced open form has an almost identical mass, so reduced and non-reduced separations are compared to confirm the bridge is closed. Aggregation screening completes the panel, since amylin-family peptides self-associate readily and fibrillated material is not recoverable.',
  },
};

const CAGRILINTIDE_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Cagrilintide Spray al por mayor?',
      a: 'Cada lote mayorista de Cagrilintide Spray se verifica a una pureza ≥99.0% por HPLC de fase reversa y se confirma por LC-MS sobre la envolvente de carga múltiple frente a la masa esperada cercana a 4409 Da. Cada envío incluye un certificado de análisis específico del lote. Dos cribados son propios de esta química: la especie sin acilo que deja una conjugación incompleta del ácido graso, y la confirmación de que el puente disulfuro interno está correctamente cerrado, ya que la forma lineal reducida tiene una masa casi idéntica.',
    },
    {
      q: '¿Está aprobado Cagrilintide Spray para uso terapéutico o consumo humano?',
      a: 'No. Cagrilintide Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Este material RUO no es un producto farmacéutico y carece de indicación aprobada.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Cagrilintide Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de receptores de amilina y calcitonina, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra Cagrilintide Spray al por mayor?',
      a: 'Cagrilintide Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 10 mg por unidad. Los péptidos de la familia de la amilina son notoriamente propensos a la autoasociación y a formar fibrillas, y esa es la razón práctica por la que un formato predisuelto y tamponado supera al polvo: reconstituir a mano un péptido propenso a agregación es donde se pierde la mayor parte del material. El espacio de cabeza se purga con nitrógeno antes del sellado y no se requiere reconstitución.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Cagrilintide Spray?',
      a: 'Almacene Cagrilintide Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 30 días. No congelar y evitar la agitación vigorosa: los péptidos de la familia de la amilina nuclean fibrillas de lámina beta bajo estrés mecánico y térmico, y una vez iniciada la fibrilación no se revierte por filtración ni calentamiento. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F).',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Cagrilintide Spray?',
      a: 'La cagrilintida es un análogo de amilina de acción prolongada, y el receptor que activa es inusual porque no es el producto de un solo gen. Un receptor de amilina se forma cuando el receptor de calcitonina se asocia con una proteína modificadora de la actividad del receptor y, como existen tres de esas proteínas accesorias, hay tres subtipos distintos de receptor de amilina y no uno. Cao y colaboradores publicaron la base estructural de esto en 2022. La activación del receptor se acopla vía Gs a la adenilato ciclasa y eleva el cAMP. La cagrilintida conserva además actividad sobre el propio receptor de calcitonina. Una cadena lateral de ácido graso impulsa la unión a albúmina para una duración prolongada, y el diseño la distingue de agonistas de GLP-1 como la semaglutida, que activan una familia de receptores completamente distinta.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Cagrilintide Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos de investigación metabólica complementarios como la semaglutida. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Cagrilintide Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen el puente disulfuro y la cadena lateral de ácido graso. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de endocrinología metabólica y los laboratorios de farmacología de receptores son los principales usuarios de la cagrilintida, y la arquitectura del receptor condiciona el experimento. Como un receptor de amilina solo existe cuando el receptor de calcitonina se empareja con una proteína accesoria, un laboratorio de farmacología debe cotransfectar ambos componentes en una línea huésped para construir cada subtipo y medir después la acumulación de cAMP para establecer la selectividad entre los tres. Ese montaje es más laborioso que un ensayo de receptor único y es la razón por la que este compuesto aparece sobre todo en manos especializadas. Cao y colaboradores resolvieron la base estructural de los subtipos en 2022. El trabajo de combinación es el otro hilo principal, ya que Enebo y colaboradores estudiaron la activación concomitante de receptores de amilina y de GLP-1, lo que convierte a la semaglutida en el compuesto acompañante natural.',
    qualityAssurance:
      'La cagrilintida combina dos rasgos estructurales que exigen cada uno su propia verificación analítica. La cadena lateral de ácido graso vuelve la molécula fuertemente hidrofóbica, por lo que eluye tarde en una columna de fase reversa, y esa ventana de retención tardía constituye por sí misma una verificación de identidad, ya que el material sin el grupo acilo sale notablemente antes. La confirmación de masa funciona sobre la envolvente de carga múltiple y no sobre un ion único, como corresponde a un péptido de este tamaño. El segundo rasgo es un puente disulfuro interno, y la forma abierta reducida tiene una masa casi idéntica, de modo que se comparan separaciones reducidas y no reducidas para confirmar que el puente está cerrado. El cribado de agregación completa el panel, ya que los péptidos de la familia de la amilina se autoasocian con facilidad y el material fibrilado no es recuperable.',
  },
};

const BPC_157_TB_500_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale BPC-157 + TB-500 Spray?',
      a: 'Every wholesale lot of BPC-157 + TB-500 Spray is verified by HPLC and LC-MS with each peptide quantified independently against its own reference standard, and the certificate reports the blend ratio alongside individual purity. One identity check matters particularly: material sold as TB-500 is sometimes the short active fragment rather than the full 43-residue sequence, and the two differ by thousands of mass units, so the certificate states which form the lot contains.',
    },
    {
      q: 'Is BPC-157 + TB-500 Spray approved for therapeutic use or human consumption?',
      a: 'No. BPC-157 + TB-500 Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. Neither component of this blend holds an approved indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale BPC-157 + TB-500 Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running tissue repair and cell migration panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale BPC-157 + TB-500 Spray supplied in?',
      a: 'BPC-157 + TB-500 Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 10 mg or 20 mg combined per unit. Both components are highly water-soluble and neither carries a cysteine, so the solution is unusually stable for a two-peptide blend and needs no organic co-solvent. Headspace is nitrogen-purged before capping, and no reconstitution step is required.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for BPC-157 + TB-500 Spray?',
      a: 'Store BPC-157 + TB-500 Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 30 days. This blend tolerates handling better than most, since neither peptide carries a disulfide bond and the thymic component is intrinsically disordered with no fold to lose, but freeze-thaw cycling should still be avoided because it shifts the ratio between two components of very different size. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for BPC-157 + TB-500 Spray?',
      a: 'This blend pairs two mechanisms that operate on completely different principles, which is unusual even among combination products. The pentadecapeptide component acts through signaling: research describes effects on angiogenic pathways and nitric oxide systems in vascular and gastrointestinal models. The thymic component works structurally instead, binding monomeric actin through a short actin-binding motif and holding it in an unpolymerized pool, which governs how quickly cells remodel their cytoskeleton and migrate. That second mechanism requires no receptor at all and is measurable in cell-free polymerization assays. Combining a signaling peptide with a direct protein-binding peptide means the two arms can be separated cleanly, because one shows activity without any cellular machinery present.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale BPC-157 + TB-500 Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary recovery research compounds such as GHK-Cu. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale BPC-157 + TB-500 Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the blend ratio and the oxidation-sensitive residues in both peptides. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Wound healing groups and cytoskeletal biology labs are the primary users of this blend, and the two components lend themselves to unusually clean separation. A cell biology lab will run a scratch-wound closure assay with the blend and with each component alone in adjacent wells, then add a cell-free pyrene-actin polymerization assay as a third arm. That last experiment is the decisive one: the thymic component shows dose-dependent actin sequestration with no cells present at all, while the pentadecapeptide shows nothing, which attributes any cell-free signal unambiguously to one arm. Malinda and colleagues established the endothelial migration readout, Bock-Marquette and colleagues described the integrin-linked kinase branch, and Sikiric and colleagues cover the angiogenic and nitric oxide literature for the other component.',
    qualityAssurance:
      'Verifying this blend is a composition exercise, and the size gap between the two components makes it straightforward. A 15-residue peptide and a 43-residue one separate far apart on a reverse-phase column, so each is quantified cleanly against its own reference standard, and mass analysis confirms both independently. The certificate reports the ratio alongside individual purity. One identity question needs stating: the thymic component is sold in both a full-length form and a short active fragment, and the mass difference between them is enormous, so the certificate specifies which form the lot contains rather than leaving buyers to assume. Neither peptide carries a cysteine, which removes disulfide scrambling from the panel entirely and makes this blend simpler to certify than most.',
  },
};

const BPC_157_TB_500_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de BPC-157 + TB-500 Spray al por mayor?',
      a: 'Cada lote mayorista de BPC-157 + TB-500 Spray se verifica por HPLC y LC-MS con cada péptido cuantificado de forma independiente frente a su propio estándar, y el certificado reporta la proporción de la mezcla junto con la pureza individual. Una verificación de identidad importa especialmente: el material vendido como TB-500 es a veces el fragmento activo corto y no la secuencia completa de 43 residuos, y ambos difieren en miles de unidades de masa, por lo que el certificado indica qué forma contiene el lote.',
    },
    {
      q: '¿Está aprobado BPC-157 + TB-500 Spray para uso terapéutico o consumo humano?',
      a: 'No. BPC-157 + TB-500 Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ninguno de los componentes de esta mezcla cuenta con una indicación aprobada.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para BPC-157 + TB-500 Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de reparación tisular y migración celular, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra BPC-157 + TB-500 Spray al por mayor?',
      a: 'BPC-157 + TB-500 Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 10 mg o 20 mg combinados por unidad. Ambos componentes son muy solubles en agua y ninguno porta cisteína, por lo que la solución es inusualmente estable para una mezcla de dos péptidos y no requiere codisolvente orgánico. El espacio de cabeza se purga con nitrógeno antes del sellado y no se requiere reconstitución.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de BPC-157 + TB-500 Spray?',
      a: 'Almacene BPC-157 + TB-500 Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 30 días. Esta mezcla tolera la manipulación mejor que la mayoría, ya que ninguno de los péptidos porta puentes disulfuro y el componente tímico es intrínsecamente desordenado sin plegamiento que perder, pero deben evitarse igualmente los ciclos de congelación-descongelación porque desplazan la proporción entre dos componentes de tamaño muy distinto. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F).',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para BPC-157 + TB-500 Spray?',
      a: 'Esta mezcla une dos mecanismos que operan sobre principios completamente distintos, algo inusual incluso entre productos combinados. El componente pentadecapéptido actúa por señalización: la investigación describe efectos sobre vías angiogénicas y sistemas de óxido nítrico en modelos vasculares y gastrointestinales. El componente tímico actúa en cambio de forma estructural, uniendo actina monomérica mediante un motivo corto de unión y manteniéndola en un depósito no polimerizado, lo que gobierna la velocidad con que las células remodelan su citoesqueleto y migran. Ese segundo mecanismo no requiere receptor alguno y es medible en ensayos de polimerización libres de células. Combinar un péptido de señalización con uno de unión directa a proteínas permite separar limpiamente ambos brazos, porque uno muestra actividad sin ninguna maquinaria celular presente.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de BPC-157 + TB-500 Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos de investigación de recuperación complementarios como el GHK-Cu. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía BPC-157 + TB-500 Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen la proporción de la mezcla y los residuos sensibles a oxidación de ambos péptidos. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de cicatrización y los laboratorios de biología del citoesqueleto son los principales usuarios de esta mezcla, y sus dos componentes se prestan a una separación inusualmente limpia. Un laboratorio de biología celular corre un ensayo de cierre de herida por raspado con la mezcla y con cada componente por separado en pozos contiguos, y añade como tercer brazo un ensayo de polimerización de actina con pireno libre de células. Ese último experimento es el decisivo: el componente tímico muestra secuestro de actina dependiente de dosis sin células presentes, mientras que el pentadecapéptido no muestra nada, lo que atribuye cualquier señal libre de células a un solo brazo sin ambigüedad. Malinda y colaboradores establecieron la lectura de migración endotelial, Bock-Marquette y colaboradores describieron la rama de la quinasa ligada a integrinas, y Sikiric y colaboradores cubren la literatura angiogénica y de óxido nítrico del otro componente.',
    qualityAssurance:
      'Verificar esta mezcla es un ejercicio de composición, y la diferencia de tamaño entre ambos componentes lo vuelve sencillo. Un péptido de 15 residuos y uno de 43 se separan ampliamente en una columna de fase reversa, de modo que cada uno se cuantifica limpiamente frente a su propio estándar y el análisis de masa confirma ambos de forma independiente. El certificado reporta la proporción junto con la pureza individual. Una cuestión de identidad debe declararse: el componente tímico se vende tanto en forma completa como en fragmento activo corto, y la diferencia de masa entre ambos es enorme, por lo que el certificado especifica qué forma contiene el lote en lugar de dejar que el comprador lo suponga. Ninguno de los péptidos porta cisteína, lo que elimina por completo la reorganización de disulfuros del panel y hace esta mezcla más simple de certificar que la mayoría.',
  },
};

const ARA_290_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale ARA-290 Spray?',
      a: 'Every wholesale lot of ARA-290 Spray is verified to ≥99.0% purity by reverse-phase HPLC and confirmed by LC-MS against the expected mass near 1257 Da. Each shipment carries a batch-specific certificate of analysis. Truncated sequences are the main synthesis-related screen for an 11-residue chain, alongside deamidation at the asparagine and glutamine positions. Because the peptide reproduces a structural surface rather than a linear fragment, sequence fidelity is confirmed position by position.',
    },
    {
      q: 'Is ARA-290 Spray approved for therapeutic use or human consumption?',
      a: 'No. ARA-290 Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. This RUO material is not a pharmaceutical product and carries no approved indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale ARA-290 Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running tissue protection and receptor heterocomplex panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale ARA-290 Spray supplied in?',
      a: 'ARA-290 Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 10 mg per unit. At 11 residues it dissolves readily in aqueous buffer without an organic co-solvent, and it carries no cysteine so there is no disulfide to protect. Headspace is nitrogen-purged before capping, and no reconstitution step is required.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for ARA-290 Spray?',
      a: 'Store ARA-290 Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 30 days. Short peptides tolerate handling better than long chains and this one carries no disulfide bond to scramble, but avoid freeze-thaw cycling because it accelerates deamidation at the amide-bearing residues. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for ARA-290 Spray?',
      a: 'ARA-290 is an 11-residue peptide with an unusual origin: rather than being cut from the linear sequence of erythropoietin, it reproduces a structural surface, the outward-facing residues of one helical face of the folded protein. That design choice is the whole point. Research shows it engages the innate repair receptor, a heterocomplex formed when the erythropoietin receptor pairs with the beta-common receptor subunit, while deliberately avoiding the homodimeric erythropoietin receptor that drives red blood cell production. Brines and colleagues established this separation in 2008, showing that tissue-protective signaling and erythropoiesis run through structurally distinct receptor assemblies. The compound therefore engages a repair pathway without the haematological consequence that limits erythropoietin itself.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale ARA-290 Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary recovery research compounds such as BPC-157. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale ARA-290 Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the short chain against adsorption and the aromatic residues from light. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Tissue protection groups and receptor biology labs are the primary users of ARA-290, and the defining experiment is a negative control as much as a positive one. A lab studying the innate repair receptor will treat cells expressing both the erythropoietin receptor and the beta-common subunit and measure protective signaling, then run the same treatment on cells expressing only the homodimeric erythropoietin receptor and confirm no response. That pairing is what demonstrates the design worked. Brines and colleagues built this framework in 2008 with nonerythropoietic tissue-protective peptides derived from erythropoietin tertiary structure. Applied work has followed into islet and retinal models, where Yao and colleagues reported improved islet allograft function using the same innate repair receptor ligand.',
    qualityAssurance:
      'ARA-290 is analytically among the more straightforward compounds in the catalog, and its structure explains why. At 11 residues and roughly 1257 Da it produces a clean, well-resolved reverse-phase peak and a single-charge mass confirmation without the multiply-charged envelope larger peptides require. It carries no cysteine, so disulfide scrambling is not part of the panel, and no methionine, so oxidation is not the dominant degradation route it is for many short peptides. What is monitored instead is truncated chains from incomplete coupling and deamidation at the amide-bearing residues. One point deserves emphasis in the identity check: because the sequence reproduces a structural surface of a folded protein rather than a contiguous fragment, position-by-position sequence confirmation matters more than usual.',
  },
};

const ARA_290_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de ARA-290 Spray al por mayor?',
      a: 'Cada lote mayorista de ARA-290 Spray se verifica a una pureza ≥99.0% por HPLC de fase reversa y se confirma por LC-MS frente a la masa esperada cercana a 1257 Da. Cada envío incluye un certificado de análisis específico del lote. Las secuencias truncadas son el cribado principal relacionado con la síntesis en una cadena de 11 residuos, junto con la desamidación en las posiciones de asparagina y glutamina. Como el péptido reproduce una superficie estructural y no un fragmento lineal, la fidelidad de secuencia se confirma posición por posición.',
    },
    {
      q: '¿Está aprobado ARA-290 Spray para uso terapéutico o consumo humano?',
      a: 'No. ARA-290 Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Este material RUO no es un producto farmacéutico y carece de indicación aprobada.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para ARA-290 Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de protección tisular y de heterocomplejos de receptores, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra ARA-290 Spray al por mayor?',
      a: 'ARA-290 Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 10 mg por unidad. Con 11 residuos se disuelve con facilidad en tampón acuoso sin codisolvente orgánico, y no porta cisteína, por lo que no hay disulfuro que proteger. El espacio de cabeza se purga con nitrógeno antes del sellado y no se requiere reconstitución.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de ARA-290 Spray?',
      a: 'Almacene ARA-290 Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 30 días. Los péptidos cortos toleran la manipulación mejor que las cadenas largas y este no porta puentes disulfuro que se reorganicen, pero evite los ciclos de congelación-descongelación porque aceleran la desamidación en los residuos con grupos amida. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F).',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para ARA-290 Spray?',
      a: 'El ARA-290 es un péptido de 11 residuos con un origen inusual: en lugar de recortarse de la secuencia lineal de la eritropoyetina, reproduce una superficie estructural, los residuos orientados hacia el exterior de una cara helicoidal de la proteína plegada. Esa decisión de diseño es todo el punto. La investigación muestra que activa el receptor de reparación innata, un heterocomplejo que se forma cuando el receptor de eritropoyetina se empareja con la subunidad del receptor beta-común, evitando deliberadamente el receptor homodimérico de eritropoyetina que impulsa la producción de glóbulos rojos. Brines y colaboradores establecieron esta separación en 2008, mostrando que la señalización protectora de tejidos y la eritropoyesis transcurren por ensamblajes de receptor estructuralmente distintos. El compuesto activa así una vía de reparación sin la consecuencia hematológica que limita a la eritropoyetina misma.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de ARA-290 Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos de investigación de recuperación complementarios como el BPC-157. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía ARA-290 Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen la cadena corta frente a la adsorción y los residuos aromáticos frente a la luz. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de protección tisular y los laboratorios de biología de receptores son los principales usuarios del ARA-290, y el experimento definitorio es tanto un control negativo como uno positivo. Un laboratorio que estudia el receptor de reparación innata trata células que expresan a la vez el receptor de eritropoyetina y la subunidad beta-común y mide la señalización protectora, y luego aplica el mismo tratamiento a células que expresan solo el receptor homodimérico de eritropoyetina para confirmar la ausencia de respuesta. Ese emparejamiento es lo que demuestra que el diseño funcionó. Brines y colaboradores construyeron este marco en 2008 con péptidos no eritropoyéticos protectores de tejidos derivados de la estructura terciaria de la eritropoyetina. El trabajo aplicado ha seguido hacia modelos de islotes y retina, donde Yao y colaboradores reportaron una mejor función del aloinjerto de islotes usando el mismo ligando del receptor de reparación innata.',
    qualityAssurance:
      'El ARA-290 se cuenta entre los compuestos analíticamente más sencillos del catálogo, y su estructura explica por qué. Con 11 residuos y unos 1257 Da produce un pico limpio y bien resuelto en fase reversa y una confirmación de masa de carga simple, sin la envolvente de carga múltiple que requieren los péptidos mayores. No porta cisteína, de modo que la reorganización de disulfuros no forma parte del panel, ni metionina, por lo que la oxidación no es la ruta de degradación dominante que sí es en muchos péptidos cortos. Lo que se vigila en cambio son las cadenas truncadas por acoplamiento incompleto y la desamidación en los residuos con grupos amida. Un punto merece énfasis en la verificación de identidad: como la secuencia reproduce una superficie estructural de una proteína plegada y no un fragmento contiguo, la confirmación de secuencia posición por posición importa más de lo habitual.',
  },
};

const AOD9604_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale AOD9604 Spray?',
      a: 'Every wholesale lot of AOD9604 Spray is verified to ≥99.0% purity by reverse-phase HPLC and confirmed by LC-MS against the expected mass near 1815 Da. Each shipment carries a batch-specific certificate of analysis. The identity check that matters most distinguishes this compound from the unmodified 176-191 fragment, which differs by a single oxygen atom at 1799 Da because its first residue is phenylalanine rather than tyrosine. Disulfide pairing and cysteine oxidation are also screened.',
    },
    {
      q: 'Is AOD9604 Spray approved for therapeutic use or human consumption?',
      a: 'No. AOD9604 Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. This RUO material is not a pharmaceutical product and carries no approved indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale AOD9604 Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running adipocyte lipolysis panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale AOD9604 Spray supplied in?',
      a: 'AOD9604 Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 5 mg or 10 mg per unit. Two cysteines form an internal disulfide loop in this 16-residue sequence, so the buffer is selected to keep that bond closed rather than simply to maximise solubility. The amino-terminal tyrosine adds mild photosensitivity, which the amber glass addresses. Headspace is nitrogen-purged before capping, and no reconstitution is required.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for AOD9604 Spray?',
      a: 'Store AOD9604 Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 30 days. Avoid freeze-thaw cycling and keep the material away from reducing agents entirely: the internal disulfide loop defines the fragment conformation, and reduction opens it into a linear peptide with the same residue composition but a different shape. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for AOD9604 Spray?',
      a: 'AOD9604 is a modified form of the growth hormone lipolytic domain, and the modification is smaller than most descriptions suggest. The unmodified 176-191 fragment begins with phenylalanine; AOD9604 carries tyrosine in that first position instead, which differs by a single hydroxyl group and therefore by one oxygen atom in the molecular formula. Both sequences are 16 residues long. Functionally the compound shares the fragment defining property: it influences adipocyte lipid handling without engaging the growth hormone receptor, so it does not drive hepatic IGF-1 production. Ng and colleagues characterized the synthetic lipolytic domain in fatty rodent models, and Heffernan and colleagues compared it against full growth hormone directly.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale AOD9604 Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary metabolic research compounds such as H-Frag. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale AOD9604 Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the internal disulfide loop and the tyrosine at the amino terminus. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Metabolic research groups studying adipose tissue are the primary users of AOD9604, and the experimental design is built around demonstrating an absence. A lab working with 3T3-L1 adipocytes or isolated primary adipocytes measures glycerol and free fatty acid release into the medium as the lipolysis readout, then runs full growth hormone in parallel wells while measuring IGF-1 induction alongside. The point of that second arm is the dissociation: the fragment should move lipid metabolism without moving IGF-1, exactly the comparison Heffernan and colleagues published in 2001. Ng and colleagues had characterized the synthetic lipolytic domain in fatty rodent models the year before. A third pairing against the unmodified 176-191 fragment isolates what the single residue substitution changes.',
    qualityAssurance:
      'AOD9604 raises one identity question that is easy to get wrong and one structural question that is easy to miss. The identity question concerns its near neighbour: the unmodified 176-191 fragment carries phenylalanine where this compound carries tyrosine, a difference of one hydroxyl group and therefore sixteen mass units. Both are 16 residues long, so length offers no discrimination and only accurate mass analysis separates them; the certificate states which molecule the lot contains, because the two names are used interchangeably in commerce far more often than the chemistry warrants. The structural question is the internal disulfide loop between the two cysteines, confirmed by comparing reduced and non-reduced separations since the open linear form carries an almost identical mass.',
  },
};

const AOD9604_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de AOD9604 Spray al por mayor?',
      a: 'Cada lote mayorista de AOD9604 Spray se verifica a una pureza ≥99.0% por HPLC de fase reversa y se confirma por LC-MS frente a la masa esperada cercana a 1815 Da. Cada envío incluye un certificado de análisis específico del lote. La verificación de identidad más relevante lo distingue del fragmento 176-191 sin modificar, que difiere en un solo átomo de oxígeno a 1799 Da porque su primer residuo es fenilalanina en lugar de tirosina. También se criban el emparejamiento de disulfuros y la oxidación de cisteínas.',
    },
    {
      q: '¿Está aprobado AOD9604 Spray para uso terapéutico o consumo humano?',
      a: 'No. AOD9604 Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Este material RUO no es un producto farmacéutico y carece de indicación aprobada.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para AOD9604 Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de lipólisis en adipocitos, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra AOD9604 Spray al por mayor?',
      a: 'AOD9604 Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 5 mg o 10 mg por unidad. Dos cisteínas forman un bucle disulfuro interno en esta secuencia de 16 residuos, por lo que el tampón se elige para mantener ese enlace cerrado y no solo para maximizar la solubilidad. La tirosina amino-terminal añade una leve fotosensibilidad, que el vidrio ámbar aborda. El espacio de cabeza se purga con nitrógeno antes del sellado y no se requiere reconstitución.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de AOD9604 Spray?',
      a: 'Almacene AOD9604 Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 30 días. Evite los ciclos de congelación-descongelación y mantenga el material completamente alejado de agentes reductores: el bucle disulfuro interno define la conformación del fragmento, y su reducción lo abre en un péptido lineal con la misma composición de residuos pero otra forma. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F).',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para AOD9604 Spray?',
      a: 'El AOD9604 es una forma modificada del dominio lipolítico de la hormona del crecimiento, y la modificación es menor de lo que sugieren la mayoría de las descripciones. El fragmento 176-191 sin modificar comienza con fenilalanina; el AOD9604 porta en cambio tirosina en esa primera posición, lo que difiere en un solo grupo hidroxilo y por tanto en un átomo de oxígeno en la fórmula molecular. Ambas secuencias tienen 16 residuos. Funcionalmente el compuesto comparte la propiedad definitoria del fragmento: influye en el manejo lipídico del adipocito sin activar el receptor de hormona del crecimiento, de modo que no impulsa la producción hepática de IGF-1. Ng y colaboradores caracterizaron el dominio lipolítico sintético en modelos de roedores obesos, y Heffernan y colaboradores lo compararon directamente frente a la hormona completa.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de AOD9604 Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos de investigación metabólica complementarios como el H-Frag. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía AOD9604 Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen el bucle disulfuro interno y la tirosina del extremo amino. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de investigación metabólica que estudian tejido adiposo son los principales usuarios del AOD9604, y el diseño experimental se construye en torno a demostrar una ausencia. Un laboratorio que trabaja con adipocitos 3T3-L1 o adipocitos primarios aislados mide la liberación de glicerol y ácidos grasos libres al medio como lectura de lipólisis, y luego corre hormona del crecimiento completa en pozos paralelos midiendo además la inducción de IGF-1. El sentido de ese segundo brazo es la disociación: el fragmento debe mover el metabolismo lipídico sin mover el IGF-1, exactamente la comparación que publicaron Heffernan y colaboradores en 2001. Ng y colaboradores habían caracterizado el dominio lipolítico sintético en modelos de roedores obesos el año anterior. Un tercer emparejamiento frente al fragmento 176-191 sin modificar aísla lo que cambia la sustitución de un solo residuo.',
    qualityAssurance:
      'El AOD9604 plantea una pregunta de identidad fácil de errar y una estructural fácil de pasar por alto. La cuestión de identidad concierne a su vecino cercano: el fragmento 176-191 sin modificar porta fenilalanina donde este compuesto porta tirosina, una diferencia de un grupo hidroxilo y por tanto de dieciséis unidades de masa. Ambos tienen 16 residuos, de modo que la longitud no discrimina y solo un análisis de masa preciso los separa; el certificado indica qué molécula contiene el lote, porque ambos nombres se usan indistintamente en el comercio mucho más de lo que la química justifica. La cuestión estructural es el bucle disulfuro interno entre las dos cisteínas, confirmado comparando separaciones reducidas y no reducidas, ya que la forma lineal abierta tiene una masa casi idéntica.',
  },
};

const AHK_CU_SPRAY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale AHK-Cu Spray?',
      a: 'Every wholesale lot of AHK-Cu Spray is verified to ≥99.0% peptide purity by reverse-phase HPLC and confirmed by LC-MS. Each shipment carries a batch-specific certificate of analysis. One assay is specific to copper peptides and cannot be skipped: elemental analysis confirms both copper content and coordination state, because a tripeptide that has lost its copper centre retains the correct peptide mass and would pass a peptide-only purity method entirely undetected.',
    },
    {
      q: 'Is AHK-Cu Spray approved for therapeutic use or human consumption?',
      a: 'No. AHK-Cu Spray is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. It is a laboratory reagent and is not a finished cosmetic product.',
    },
    {
      q: 'What is the minimum order quantity for wholesale AHK-Cu Spray?',
      a: 'The minimum order quantity is 10 spray units, which constitutes one standard wholesale kit. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running dermal papilla and matrix remodeling panels, and distribution brands. We do not fulfill retail or single-unit inquiries.',
    },
    {
      q: 'What physical form is wholesale AHK-Cu Spray supplied in?',
      a: 'AHK-Cu Spray is supplied as a pre-dissolved, sterile-filtered solution in amber glass bottles fitted with a metered atomizer, at 50 mg or 100 mg per unit. The characteristic blue tint comes from the coordinated copper ion and is expected rather than a defect. Buffering is chosen specifically to hold the copper complex intact, since both acidic and strongly alkaline conditions strip the metal from the peptide backbone. Headspace is nitrogen-purged before capping, and no reconstitution step is required.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for AHK-Cu Spray?',
      a: 'Store AHK-Cu Spray refrigerated at 2°C to 8°C (36°F to 46°F), upright and protected from light, where sealed units remain within specification for up to 24 months. Once the atomizer is first actuated, use the unit within 30 days. Watch the colour: a drift from blue toward green or a loss of tint altogether signals copper coordination loss, which is the failure mode specific to this compound class and one that no peptide purity check would catch. Avoid chelating agents entirely. Brief transit excursions to 15°C to 25°C (59°F to 77°F) are tolerated.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for AHK-Cu Spray?',
      a: 'AHK-Cu is a three-residue peptide, alanyl-histidyl-lysine, coordinated to a copper ion, and the copper is the functional centre rather than an additive. The histidine imidazole nitrogen and the peptide backbone nitrogens hold the metal in a square-planar arrangement, and research treats the complex as a copper delivery vehicle. That matters because several extracellular matrix enzymes are copper-dependent, lysyl oxidase among them, and lysyl oxidase performs the cross-linking that gives collagen and elastin their tensile properties. The single-residue difference from GHK-Cu, alanine in place of glycine at the first position, is the whole structural distinction between the two. Pyo and colleagues reported effects on dermal papilla cells and vascular endothelial growth factor expression in cultured human hair follicles.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale AHK-Cu Spray?',
      a: 'Yes. Qualified procurement partners can request alternative concentrations, non-standard bottle volumes, unlabeled or private-label presentation, or co-formulation with complementary copper peptide research compounds such as GHK-Cu. Contact our corporate sales desk with your target concentration and unit count to scope the run.',
    },
    {
      q: 'How is wholesale AHK-Cu Spray packaged and shipped to preserve compound integrity?',
      a: 'Units ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers that hold the shipment inside the refrigerated range through transit. Amber primary containers and nitrogen-purged headspace protect the copper coordination against demetallation. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Dermal biology groups and hair follicle laboratories are the primary users of AHK-Cu, and anyone planning work with it should know the literature is thin. A search of PubMed returns essentially one indexed study on this specific compound: Pyo and colleagues reported in 2007 that a tripeptide-copper complex affected human hair growth in an ex vivo follicle organ culture model, with dermal papilla cell proliferation and vascular endothelial growth factor expression as the readouts. That organ culture format remains the reference design. Most mechanistic reasoning therefore borrows from the far larger GHK-Cu literature, which Maquart and colleagues opened in 1988 with collagen synthesis in fibroblast cultures, and from copper enzymology, where Vallet and Ricard-Blum reviewed the lysyl oxidases.',
    qualityAssurance:
      'Certifying a copper peptide requires an analysis that peptide chemistry alone does not provide, and stating why is worth the space. Reverse-phase separation and mass analysis confirm the tripeptide backbone in the ordinary way, and at three residues the molecule gives a clean, well-resolved peak. The problem is that a demetallated tripeptide carries exactly the correct peptide mass while being a different and inactive substance, so elemental analysis is run alongside to quantify copper and confirm it remains coordinated rather than free in solution. The visible blue tint provides a useful first-pass indicator, since a drift toward green or a loss of colour signals coordination loss before any instrument is involved. Buffer selection and light protection both serve to keep that coordination stable.',
  },
};

const AHK_CU_SPRAY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de AHK-Cu Spray al por mayor?',
      a: 'Cada lote mayorista de AHK-Cu Spray se verifica a una pureza peptídica ≥99.0% por HPLC de fase reversa y se confirma por LC-MS. Cada envío incluye un certificado de análisis específico del lote. Un ensayo es propio de los péptidos de cobre y no puede omitirse: el análisis elemental confirma tanto el contenido de cobre como su estado de coordinación, porque un tripéptido que ha perdido su centro de cobre conserva la masa peptídica correcta y pasaría por completo inadvertido en un método de pureza solo peptídico.',
    },
    {
      q: '¿Está aprobado AHK-Cu Spray para uso terapéutico o consumo humano?',
      a: 'No. AHK-Cu Spray se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Es un reactivo de laboratorio y no un producto cosmético terminado.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para AHK-Cu Spray al por mayor?',
      a: 'La cantidad mínima de pedido es de 10 unidades en spray, lo que constituye un kit mayorista estándar. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de papila dérmica y remodelación de matriz, y marcas de distribución. No atendemos consultas minoristas ni de unidad individual.',
    },
    {
      q: '¿En qué forma física se suministra AHK-Cu Spray al por mayor?',
      a: 'AHK-Cu Spray se suministra como una solución predisuelta y filtrada en estéril, en frascos de vidrio ámbar con atomizador dosificador, a 50 mg o 100 mg por unidad. El característico tono azul procede del ion de cobre coordinado y es esperable, no un defecto. El tampón se elige específicamente para mantener intacto el complejo de cobre, ya que tanto las condiciones ácidas como las fuertemente alcalinas despojan al esqueleto peptídico de su metal. El espacio de cabeza se purga con nitrógeno antes del sellado y no se requiere reconstitución.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de AHK-Cu Spray?',
      a: 'Almacene AHK-Cu Spray refrigerado entre 2°C y 8°C (36°F a 46°F), en posición vertical y protegido de la luz, donde las unidades selladas se mantienen dentro de especificación hasta 24 meses. Una vez accionado el atomizador por primera vez, use la unidad en un plazo de 30 días. Vigile el color: una deriva de azul hacia verde o la pérdida total del tono indica pérdida de coordinación del cobre, el modo de fallo propio de esta clase de compuestos y que ninguna verificación de pureza peptídica detectaría. Evite por completo los agentes quelantes. Se toleran excursiones breves de 15°C a 25°C (59°F a 77°F).',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para AHK-Cu Spray?',
      a: 'El AHK-Cu es un péptido de tres residuos, alanil-histidil-lisina, coordinado a un ion de cobre, y el cobre es el centro funcional y no un aditivo. El nitrógeno del imidazol de la histidina y los nitrógenos del esqueleto peptídico sostienen el metal en una disposición plano-cuadrada, y la investigación trata el complejo como un vehículo de entrega de cobre. Eso importa porque varias enzimas de la matriz extracelular son dependientes de cobre, entre ellas la lisil oxidasa, que realiza el entrecruzamiento que da al colágeno y a la elastina sus propiedades de tensión. La diferencia de un solo residuo respecto al GHK-Cu, alanina en lugar de glicina en la primera posición, es toda la distinción estructural entre ambos. Pyo y colaboradores reportaron efectos sobre células de la papila dérmica y la expresión de factor de crecimiento endotelial vascular en folículos pilosos humanos en cultivo.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de AHK-Cu Spray al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas, volúmenes de frasco no estándar, presentación sin marca o de marca privada, o coformulación con compuestos de investigación con péptidos de cobre complementarios como el GHK-Cu. Contacte a nuestra mesa de ventas corporativas con su concentración objetivo y número de unidades para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía AHK-Cu Spray al por mayor para preservar la integridad del compuesto?',
      a: 'Las unidades se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío dentro del rango refrigerado durante el tránsito. Los envases primarios ámbar y el espacio de cabeza purgado con nitrógeno protegen la coordinación del cobre frente a la desmetalación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de biología dérmica y los laboratorios de folículo piloso son los principales usuarios del AHK-Cu, y quien planifique trabajo con él debe saber que la literatura es escasa. Una búsqueda en PubMed devuelve esencialmente un único estudio indexado sobre este compuesto concreto: Pyo y colaboradores reportaron en 2007 que un complejo de tripéptido y cobre afectaba el crecimiento del cabello humano en un modelo de cultivo de órgano ex vivo, con la proliferación de células de la papila dérmica y la expresión de factor de crecimiento endotelial vascular como lecturas. Ese formato de cultivo de órgano sigue siendo el diseño de referencia. Por eso la mayor parte del razonamiento mecanístico se toma prestada de la literatura mucho más amplia sobre GHK-Cu, que Maquart y colaboradores abrieron en 1988 con la síntesis de colágeno en cultivos de fibroblastos, y de la enzimología del cobre, donde Vallet y Ricard-Blum revisaron las lisil oxidasas.',
    qualityAssurance:
      'Certificar un péptido de cobre exige un análisis que la química peptídica por sí sola no aporta, y vale la pena explicar por qué. La separación en fase reversa y el análisis de masa confirman el esqueleto tripeptídico de la forma habitual, y con tres residuos la molécula da un pico limpio y bien resuelto. El problema es que un tripéptido desmetalado tiene exactamente la masa peptídica correcta siendo una sustancia distinta e inactiva, de modo que se realiza además un análisis elemental para cuantificar el cobre y confirmar que sigue coordinado y no libre en solución. El tono azul visible aporta un indicador útil de primera aproximación, ya que una deriva hacia el verde o la pérdida de color señala la pérdida de coordinación antes de involucrar ningún instrumento. La elección del tampón y la protección frente a la luz mantienen estable esa coordinación.',
  },
};

const BIOREGULATOR_CORE_PANEL_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Bioregulator Core Panel?',
      a: 'Every vial in the Bioregulator Core Panel is verified to ≥99.0% purity by reverse-phase HPLC and confirmed by LC-MS, and each is certified separately rather than as a kit average. That distinction matters here because the six peptides are only three or four residues long and several share the same acidic residues, so the certificate identifies which peptide is in which vial by mass rather than relying on the label alone. Truncated sequences and deamidation are the primary screens.',
    },
    {
      q: 'Is Bioregulator Core Panel approved for therapeutic use or human consumption?',
      a: 'No. Bioregulator Core Panel is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. None of the six component peptides holds an approved indication in the United States.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Bioregulator Core Panel?',
      a: 'The minimum order quantity is one complete panel of six vials, 20 mg per vial. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running comparative peptide screens, and distribution brands. Multi-panel and full-set procurement is available for qualified partners. We do not fulfill retail or single-vial inquiries.',
    },
    {
      q: 'What physical form is wholesale Bioregulator Core Panel supplied in?',
      a: 'Bioregulator Core Panel is supplied as six individually labelled vials of lyophilized powder, 20 mg per vial, each vacuum-sealed under nitrogen. Individual labelling is not cosmetic: at three to four residues these peptides are visually indistinguishable as powders and several fall within a narrow mass range, so vial-level identity has to be established at packaging rather than inferred later. No pre-dissolved format is offered for this panel.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Bioregulator Core Panel?',
      a: 'Store the sealed panel at -20°C (-4°F) for long-term stability, where lyophilized vials remain within specification for up to 36 months. Short-term storage at 2°C to 8°C (36°F to 46°F) is acceptable. Once reconstituted in sterile diluent, use within 14 days held at 2°C to 8°C. These ultrashort peptides are more hydrolysis-prone in solution than longer chains because a larger fraction of the molecule is exposed backbone, so reconstitute only what an experiment consumes.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Bioregulator Core Panel?',
      a: 'The six peptides in this panel act through gene regulation rather than receptor agonism, which separates them from essentially every other class in this catalog. Each is an ultrashort sequence of three or four residues, and research describes them entering cells through amino acid and peptide transporters rather than binding a surface receptor, then interacting with DNA and chromatin to influence transcription. Khavinson and colleagues modelled transport for 26 such peptides through the LAT and PEPT transporter families. The panel takes one representative peptide per organ system: Pinealon for neural and pineal work, Thymalin for thymic and immune, Cardiogen for cardiovascular, Chonluten for respiratory, Ovagen for hepatic and digestive, and Cartalax for cartilage and musculoskeletal.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Bioregulator Core Panel?',
      a: 'Yes. Qualified procurement partners can request alternative vial strengths, different peptide combinations drawn from the wider bioregulator range, additional replicates of a single component, or unlabeled and private-label presentation. Contact our corporate sales desk with your target composition and panel count to scope the run.',
    },
    {
      q: 'How is wholesale Bioregulator Core Panel packaged and shipped to preserve compound integrity?',
      a: 'Panels ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers holding the shipment in the frozen or refrigerated range through transit. Each vial retains its individual identity label inside the kit tray so component traceability survives handling. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Gerontology groups and comparative peptide screening labs are the primary users of a panel like this, and the reason is efficiency rather than any single compound. A lab building a first-pass survey wants one representative peptide per organ system so it can run a single plate layout across six biological contexts before committing to a deeper set. Avolio and colleagues demonstrated the kind of readout that suits this format, treating the monocyte and macrophage THP-1 cell line with Khavinson peptides and measuring proliferative activity and inflammatory pathway markers. Gene expression is the other common endpoint, following the systematic review Khavinson and colleagues assembled in 2021. Linkova and colleagues separately examined which dipeptides within the Thymalin preparation drive its gene expression effects, which is worth knowing before treating that vial as a single defined molecule.',
    qualityAssurance:
      'Certifying a six-vial panel of ultrashort peptides is a different exercise from certifying one compound, and the short chain length is what makes it demanding. Each vial is verified independently rather than as a kit average, because a panel whose components are individually pure but wrongly assigned to vials is worse than useless to a lab running a comparative screen. Reverse-phase separation of three and four residue peptides gives early, closely spaced retention windows, so mass confirmation carries most of the identification burden and the certificate reports the observed mass per vial. Truncated sequences from incomplete coupling and deamidation at acidic residues are the routine degradation screens. One component deserves separate treatment: Thymalin is a thymic polypeptide preparation rather than a single defined sequence, so it is characterised by profile rather than by a single molecular mass.',
  },
};

const BIOREGULATOR_CORE_PANEL_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Bioregulator Core Panel al por mayor?',
      a: 'Cada vial del Bioregulator Core Panel se verifica a una pureza ≥99.0% por HPLC de fase reversa y se confirma por LC-MS, y cada uno se certifica por separado y no como promedio del kit. Esa distinción importa aquí porque los seis péptidos tienen solo tres o cuatro residuos y varios comparten los mismos residuos ácidos, de modo que el certificado identifica qué péptido va en cada vial por masa y no confiando solo en la etiqueta. Las secuencias truncadas y la desamidación son los cribados principales.',
    },
    {
      q: '¿Está aprobado Bioregulator Core Panel para uso terapéutico o consumo humano?',
      a: 'No. Bioregulator Core Panel se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ninguno de los seis péptidos componentes cuenta con una indicación aprobada en Estados Unidos.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Bioregulator Core Panel al por mayor?',
      a: 'La cantidad mínima de pedido es un panel completo de seis viales, 20 mg por vial. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan cribados peptídicos comparativos, y marcas de distribución. Hay disponibilidad de adquisición multipanel y de set completo para socios calificados. No atendemos consultas minoristas ni de vial individual.',
    },
    {
      q: '¿En qué forma física se suministra Bioregulator Core Panel al por mayor?',
      a: 'Bioregulator Core Panel se suministra como seis viales etiquetados individualmente de polvo liofilizado, 20 mg por vial, cada uno sellado al vacío bajo nitrógeno. El etiquetado individual no es cosmético: con tres o cuatro residuos estos péptidos son visualmente indistinguibles como polvos y varios caen en un rango estrecho de masa, de modo que la identidad por vial debe establecerse en el envasado y no inferirse después. No se ofrece formato predisuelto para este panel.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Bioregulator Core Panel?',
      a: 'Almacene el panel sellado a -20°C (-4°F) para estabilidad a largo plazo, donde los viales liofilizados se mantienen dentro de especificación hasta 36 meses. El almacenamiento a corto plazo entre 2°C y 8°C (36°F a 46°F) es aceptable. Una vez reconstituido en diluyente estéril, use el material en 14 días manteniéndolo entre 2°C y 8°C. Estos péptidos ultracortos son más propensos a la hidrólisis en solución que las cadenas largas porque una fracción mayor de la molécula es esqueleto expuesto, así que reconstituya solo lo que consuma el experimento.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Bioregulator Core Panel?',
      a: 'Los seis péptidos de este panel actúan por regulación génica y no por agonismo de receptor, lo que los separa de prácticamente cualquier otra clase de este catálogo. Cada uno es una secuencia ultracorta de tres o cuatro residuos, y la investigación describe su entrada a las células mediante transportadores de aminoácidos y de péptidos en lugar de unirse a un receptor de superficie, para luego interactuar con el ADN y la cromatina e influir en la transcripción. Khavinson y colaboradores modelaron el transporte de 26 de estos péptidos por las familias de transportadores LAT y PEPT. El panel toma un péptido representativo por sistema orgánico: Pinealon para trabajo neural y pineal, Thymalin para tímico e inmunitario, Cardiogen para cardiovascular, Chonluten para respiratorio, Ovagen para hepático y digestivo, y Cartalax para cartílago y musculoesquelético.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Bioregulator Core Panel al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas de vial, combinaciones distintas de péptidos tomadas del rango bioregulador más amplio, réplicas adicionales de un solo componente, o presentación sin marca o de marca privada. Contacte a nuestra mesa de ventas corporativas con su composición objetivo y número de paneles para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Bioregulator Core Panel al por mayor para preservar la integridad del compuesto?',
      a: 'Los paneles se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío en rango congelado o refrigerado durante el tránsito. Cada vial conserva su etiqueta de identidad individual dentro de la bandeja del kit, de modo que la trazabilidad por componente sobrevive a la manipulación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de gerontología y los laboratorios de cribado peptídico comparativo son los principales usuarios de un panel como este, y la razón es la eficiencia más que cualquier compuesto individual. Un laboratorio que construye un sondeo inicial quiere un péptido representativo por sistema orgánico para poder correr un solo diseño de placa en seis contextos biológicos antes de comprometerse con un set más profundo. Avolio y colaboradores demostraron el tipo de lectura que encaja con este formato, tratando la línea celular de monocitos y macrófagos THP-1 con péptidos de Khavinson y midiendo la actividad proliferativa y marcadores de vías inflamatorias. La expresión génica es el otro criterio habitual, siguiendo la revisión sistemática que Khavinson y colaboradores reunieron en 2021. Linkova y colaboradores examinaron por separado qué dipéptidos dentro de la preparación Thymalin impulsan sus efectos sobre la expresión génica, algo que conviene saber antes de tratar ese vial como una molécula única definida.',
    qualityAssurance:
      'Certificar un panel de seis viales de péptidos ultracortos es un ejercicio distinto de certificar un solo compuesto, y la longitud corta de cadena es lo que lo vuelve exigente. Cada vial se verifica de forma independiente y no como promedio del kit, porque un panel cuyos componentes son puros individualmente pero están mal asignados a los viales resulta peor que inútil para un laboratorio que ejecuta un cribado comparativo. La separación en fase reversa de péptidos de tres y cuatro residuos da ventanas de retención tempranas y muy próximas, de modo que la confirmación de masa carga con la mayor parte de la identificación y el certificado reporta la masa observada por vial. Las secuencias truncadas por acoplamiento incompleto y la desamidación en residuos ácidos son los cribados rutinarios de degradación. Un componente merece trato aparte: Thymalin es una preparación polipeptídica tímica y no una secuencia única definida, por lo que se caracteriza por perfil y no por una masa molecular única.',
  },
};

const BIOREGULATOR_FULL_MASTER_SET_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Bioregulator Full Master Set?',
      a: 'Every vial in the Bioregulator Full Master Set is verified to ≥99.0% purity by reverse-phase HPLC and confirmed by LC-MS, certified per vial rather than as a set average. Sixteen ultrashort peptides fall inside a narrow mass window running from roughly 275 to 488 Da, so identity has to be established by observed mass against each declared sequence rather than by chromatographic position alone. Truncated sequences and deamidation at the acidic residues are the routine screens.',
    },
    {
      q: 'Is Bioregulator Full Master Set approved for therapeutic use or human consumption?',
      a: 'No. Bioregulator Full Master Set is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. None of the component peptides holds an approved indication in the United States.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Bioregulator Full Master Set?',
      a: 'The minimum order quantity is one complete panel of 16 vials, 20 mg each. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running full-spectrum peptide screens, and distribution brands. Multi-panel and full-set procurement is available for qualified partners. We do not fulfill retail or single-vial inquiries.',
    },
    {
      q: 'What physical form is wholesale Bioregulator Full Master Set supplied in?',
      a: 'Bioregulator Full Master Set is supplied as sixteen individually labelled vials of lyophilized powder, 20 mg per vial, each vacuum-sealed under nitrogen and marked with compound name, strength and lot. Nothing is pre-mixed. With sixteen visually identical white powders spanning a 213 Da total mass range, label-level traceability is the only practical way a receiving lab can confirm what is in each position without running its own identity check.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Bioregulator Full Master Set?',
      a: 'Store the sealed panel at -20°C (-4°F) for long-term stability, where lyophilized vials remain within specification for up to 36 months. Short-term storage at 2°C to 8°C (36°F to 46°F) is acceptable. Once reconstituted in sterile diluent, use within 14 days held at 2°C to 8°C. These ultrashort peptides are more hydrolysis-prone in solution than longer chains because a larger fraction of the molecule is exposed backbone, so reconstitute only what an experiment consumes.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Bioregulator Full Master Set?',
      a: 'All sixteen peptides in this set act through gene regulation rather than receptor agonism, which is the organising principle of the whole collection. Each is two to four residues long, too short to present the extended binding surface a G protein-coupled receptor requires. Research describes them entering cells through amino acid and peptide transporters instead, and Khavinson and colleagues used molecular docking to show the binding sites of LAT1, LAT2 and PEPT1 can accommodate 26 such peptides. Once inside, laboratory investigations describe interaction with DNA and chromatin and consequent transcriptional change. The set spans seven organ systems, and tissue association rather than a shared receptor is what separates one member from another.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Bioregulator Full Master Set?',
      a: 'Yes. Qualified procurement partners can request alternative vial strengths, additional replicates of a single component, unlabeled or private-label presentation, or additional replicates of any single component or subset panels drawn from the same range. Contact our corporate sales desk with your target composition and panel count to scope the run.',
    },
    {
      q: 'How is wholesale Bioregulator Full Master Set packaged and shipped to preserve compound integrity?',
      a: 'Panels ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers holding the shipment in the frozen or refrigerated range through transit. Each vial retains its individual identity label inside the kit tray so component traceability survives handling. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Gerontology programmes and full-spectrum screening laboratories are the natural users of a sixteen-peptide set, and the reason is coverage rather than any individual compound. A lab designing a systematic survey wants every member of a chemical family available at once so a single assay format can be applied uniformly across all of them, which is what turns a collection into a dataset. Avolio and colleagues showed the kind of readout that scales this way, treating the monocyte and macrophage THP-1 line with Khavinson peptides and measuring proliferative activity alongside inflammatory pathway markers. Gene expression profiling is the other endpoint that suits the format, following the systematic review Khavinson and colleagues assembled in 2021 across the family.',
    qualityAssurance:
      'Certifying sixteen ultrashort peptides in one set is a composition problem before it is a purity problem. Each vial is verified independently rather than as a set average, because a collection whose members are individually pure but wrongly positioned is unusable for a systematic screen. The practical difficulty is that these peptides cluster in both mass and polarity: the full set spans roughly 275 to 488 Da and every member elutes early on reverse-phase, so retention alone does not discriminate and observed mass carries the identification. Truncated sequences from incomplete coupling and deamidation at the acidic residues are the routine degradation screens. Eleven of the sixteen have independently confirmable public reference data; the remainder are certified against manufacturer specification.',
  },
};

const BIOREGULATOR_FULL_MASTER_SET_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Bioregulator Full Master Set al por mayor?',
      a: 'Cada vial del Bioregulator Full Master Set se verifica a una pureza ≥99.0% por HPLC de fase reversa y se confirma por LC-MS, certificado por vial y no como promedio del set. Dieciséis péptidos ultracortos caen dentro de una ventana estrecha de masa que va de unos 275 a 488 Da, de modo que la identidad debe establecerse por masa observada frente a cada secuencia declarada y no por posición cromatográfica. Las secuencias truncadas y la desamidación en residuos ácidos son los cribados rutinarios.',
    },
    {
      q: '¿Está aprobado Bioregulator Full Master Set para uso terapéutico o consumo humano?',
      a: 'No. Bioregulator Full Master Set se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ninguno de los péptidos componentes cuenta con una indicación aprobada en Estados Unidos.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Bioregulator Full Master Set al por mayor?',
      a: 'La cantidad mínima de pedido es un panel completo de 16 viales de 20 mg cada uno. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan cribados peptídicos de espectro completo, y marcas de distribución. Hay disponibilidad multipanel y de set completo para socios calificados. No atendemos consultas minoristas ni de vial individual.',
    },
    {
      q: '¿En qué forma física se suministra Bioregulator Full Master Set al por mayor?',
      a: 'Bioregulator Full Master Set se suministra como dieciséis viales etiquetados individualmente de polvo liofilizado, 20 mg por vial, cada uno sellado al vacío bajo nitrógeno y marcado con nombre, concentración y lote. Nada viene premezclado. Con dieciséis polvos blancos visualmente idénticos que abarcan un rango total de masa de 213 Da, la trazabilidad por etiqueta es la única forma práctica de que un laboratorio receptor confirme el contenido de cada posición sin correr su propia verificación.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Bioregulator Full Master Set?',
      a: 'Almacene el panel sellado a -20°C (-4°F) para estabilidad a largo plazo, donde los viales liofilizados se mantienen dentro de especificación hasta 36 meses. El almacenamiento a corto plazo entre 2°C y 8°C (36°F a 46°F) es aceptable. Una vez reconstituido en diluyente estéril, use el material en 14 días entre 2°C y 8°C. Estos péptidos ultracortos son más propensos a la hidrólisis en solución que las cadenas largas porque una fracción mayor de la molécula es esqueleto expuesto, así que reconstituya solo lo que consuma el experimento.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Bioregulator Full Master Set?',
      a: 'Los dieciséis péptidos de este set actúan por regulación génica y no por agonismo de receptor, y ese es el principio organizador de toda la colección. Cada uno tiene de dos a cuatro residuos, demasiado corto para presentar la superficie de unión extendida que requiere un receptor acoplado a proteínas G. La investigación describe su entrada a las células mediante transportadores de aminoácidos y de péptidos, y Khavinson y colaboradores usaron acoplamiento molecular para mostrar que los sitios de unión de LAT1, LAT2 y PEPT1 pueden acomodar 26 de estos péptidos. Una vez dentro, las investigaciones describen interacción con el ADN y la cromatina y el consiguiente cambio transcripcional. El set abarca siete sistemas orgánicos, y la asociación tisular, no un receptor compartido, es lo que separa a un miembro de otro.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Bioregulator Full Master Set al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas de vial, réplicas adicionales de un solo componente, presentación sin marca o de marca privada, o réplicas adicionales de cualquier componente o paneles parciales del mismo rango. Contacte a nuestra mesa de ventas corporativas con su composición objetivo y número de paneles para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Bioregulator Full Master Set al por mayor para preservar la integridad del compuesto?',
      a: 'Los paneles se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío en rango congelado o refrigerado durante el tránsito. Cada vial conserva su etiqueta de identidad individual dentro de la bandeja del kit, de modo que la trazabilidad por componente sobrevive a la manipulación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los programas de gerontología y los laboratorios de cribado de espectro completo son los usuarios naturales de un set de dieciséis péptidos, y la razón es la cobertura más que cualquier compuesto individual. Un laboratorio que diseña un sondeo sistemático quiere todos los miembros de una familia química disponibles a la vez para aplicar un solo formato de ensayo de manera uniforme, que es lo que convierte una colección en un conjunto de datos. Avolio y colaboradores mostraron el tipo de lectura que escala así, tratando la línea de monocitos y macrófagos THP-1 con péptidos de Khavinson y midiendo actividad proliferativa junto a marcadores de vías inflamatorias. El perfilado de expresión génica es el otro criterio que encaja con el formato, siguiendo la revisión sistemática que Khavinson y colaboradores reunieron en 2021.',
    qualityAssurance:
      'Certificar dieciséis péptidos ultracortos en un set es un problema de composición antes que de pureza. Cada vial se verifica de forma independiente y no como promedio del set, porque una colección con miembros puros pero mal posicionados resulta inservible para un cribado sistemático. La dificultad práctica es que estos péptidos se agrupan tanto en masa como en polaridad: el set completo abarca de unos 275 a 488 Da y todos eluyen temprano en fase reversa, de modo que la retención por sí sola no discrimina y la masa observada carga con la identificación. Las secuencias truncadas por acoplamiento incompleto y la desamidación en residuos ácidos son los cribados rutinarios. Once de los dieciséis tienen datos públicos de referencia confirmables de forma independiente; el resto se certifica contra especificación del fabricante.',
  },
};

const BIOREGULATOR_CARDIOVASCULAR_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Bioregulator Cardiovascular?',
      a: 'Both vials in Bioregulator Cardiovascular are verified to ≥99.0% purity by reverse-phase HPLC and confirmed by LC-MS, each certified separately. Vesugen has an independently confirmable public reference mass near 390 Da against which the observed value is checked. Cardiogen is certified against manufacturer specification instead, because no public compound record resolves under that name. Truncated sequences and deamidation at the acidic residues complete the screen.',
    },
    {
      q: 'Is Bioregulator Cardiovascular approved for therapeutic use or human consumption?',
      a: 'No. Bioregulator Cardiovascular is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. None of the component peptides holds an approved indication in the United States.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Bioregulator Cardiovascular?',
      a: 'The minimum order quantity is one complete panel of 2 vials, 20 mg each. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running endothelial and vascular tissue panels, and distribution brands. Multi-panel and full-set procurement is available for qualified partners. We do not fulfill retail or single-vial inquiries.',
    },
    {
      q: 'What physical form is wholesale Bioregulator Cardiovascular supplied in?',
      a: 'Bioregulator Cardiovascular is supplied as two individually labelled vials of lyophilized powder, 20 mg per vial, each vacuum-sealed under nitrogen. The two are not pre-mixed, which matters more here than in a larger panel: with only two components, a lab comparing cardiac against vascular tissue association needs them separable, and a premixed vial would make that comparison impossible to run.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Bioregulator Cardiovascular?',
      a: 'Store the sealed panel at -20°C (-4°F) for long-term stability, where lyophilized vials remain within specification for up to 36 months. Short-term storage at 2°C to 8°C (36°F to 46°F) is acceptable. Once reconstituted in sterile diluent, use within 14 days held at 2°C to 8°C. These ultrashort peptides are more hydrolysis-prone in solution than longer chains because a larger fraction of the molecule is exposed backbone, so reconstitute only what an experiment consumes.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Bioregulator Cardiovascular?',
      a: 'This panel pairs the two bioregulators the literature associates with cardiovascular tissue, and one of them has a directly traceable research record. Vesugen is the tripeptide Lys-Glu-Asp, and Kozlov and colleagues published on the vasoprotective activity of that exact sequence in atherosclerosis and restenosis contexts, which means the paper attaches to the molecule rather than to a trade name. Cardiogen is the cardiac-tissue counterpart. Both act through the family mechanism rather than receptor binding: too short to engage a G protein-coupled receptor, they are described entering cells through amino acid and peptide transporters and then influencing transcription through DNA and chromatin interaction.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Bioregulator Cardiovascular?',
      a: 'Yes. Qualified procurement partners can request alternative vial strengths, additional replicates of a single component, unlabeled or private-label presentation, or other bioregulator panels from the same range, such as the Immune / Thymic set. Contact our corporate sales desk with your target composition and panel count to scope the run.',
    },
    {
      q: 'How is wholesale Bioregulator Cardiovascular packaged and shipped to preserve compound integrity?',
      a: 'Panels ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers holding the shipment in the frozen or refrigerated range through transit. Each vial retains its individual identity label inside the kit tray so component traceability survives handling. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Vascular biology groups and endothelial cell laboratories are the primary users of this pair, and the Vesugen arm is where the traceable work sits. Kozlov and colleagues examined the vasoprotective activity of the Lys-Glu-Asp tripeptide in atherosclerosis and restenosis contexts, and because that report identifies the peptide by sequence rather than trade name, a lab can match the material in the vial directly to the published molecule. Endothelial culture with proliferation and inflammatory marker readouts is the usual format. The Cardiogen arm is harder to place in the indexed literature: its name collides with a rubidium-82 cardiac imaging generator, so database searches return unrelated results and most reasoning about it borrows from the wider family.',
    qualityAssurance:
      'A two-vial panel certifies quickly but asymmetrically, and it is worth saying which half is which. Vesugen resolves to a public compound record with a reference mass near 390 Da, so the observed mass is checked against an external standard rather than only against an internal specification. Cardiogen has no such record under its trade name, so it is certified against manufacturer specification and the certificate reports the observed mass without an external cross-reference. Both are short enough to elute early on reverse-phase within a narrow window, which is why mass rather than retention drives identification. Truncated sequences and deamidation at the acidic residues are the routine degradation screens for both.',
  },
};

const BIOREGULATOR_CARDIOVASCULAR_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Bioregulator Cardiovascular al por mayor?',
      a: 'Ambos viales de Bioregulator Cardiovascular se verifican a una pureza ≥99.0% por HPLC de fase reversa y se confirman por LC-MS, cada uno certificado por separado. Vesugen tiene una masa de referencia pública confirmable cercana a 390 Da contra la que se coteja el valor observado. Cardiogen se certifica en cambio contra especificación del fabricante, porque ningún registro público de compuesto resuelve bajo ese nombre. Las secuencias truncadas y la desamidación en residuos ácidos completan el cribado.',
    },
    {
      q: '¿Está aprobado Bioregulator Cardiovascular para uso terapéutico o consumo humano?',
      a: 'No. Bioregulator Cardiovascular se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ninguno de los péptidos componentes cuenta con una indicación aprobada en Estados Unidos.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Bioregulator Cardiovascular al por mayor?',
      a: 'La cantidad mínima de pedido es un panel completo de 2 viales de 20 mg cada uno. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de tejido endotelial y vascular, y marcas de distribución. Hay disponibilidad multipanel y de set completo para socios calificados. No atendemos consultas minoristas ni de vial individual.',
    },
    {
      q: '¿En qué forma física se suministra Bioregulator Cardiovascular al por mayor?',
      a: 'Bioregulator Cardiovascular se suministra como dos viales etiquetados individualmente de polvo liofilizado, 20 mg por vial, cada uno sellado al vacío bajo nitrógeno. Los dos no vienen premezclados, algo que importa más aquí que en un panel mayor: con solo dos componentes, un laboratorio que compara asociación con tejido cardíaco frente a vascular los necesita separables, y un vial premezclado haría imposible esa comparación.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Bioregulator Cardiovascular?',
      a: 'Almacene el panel sellado a -20°C (-4°F) para estabilidad a largo plazo, donde los viales liofilizados se mantienen dentro de especificación hasta 36 meses. El almacenamiento a corto plazo entre 2°C y 8°C (36°F a 46°F) es aceptable. Una vez reconstituido en diluyente estéril, use el material en 14 días entre 2°C y 8°C. Estos péptidos ultracortos son más propensos a la hidrólisis en solución que las cadenas largas porque una fracción mayor de la molécula es esqueleto expuesto, así que reconstituya solo lo que consuma el experimento.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Bioregulator Cardiovascular?',
      a: 'Este panel combina los dos bioreguladores que la literatura asocia con tejido cardiovascular, y uno de ellos tiene un registro de investigación directamente rastreable. Vesugen es el tripéptido Lys-Glu-Asp, y Kozlov y colaboradores publicaron sobre la actividad vasoprotectora de esa secuencia exacta en contextos de aterosclerosis y reestenosis, lo que significa que el artículo se adhiere a la molécula y no a un nombre comercial. Cardiogen es la contraparte de tejido cardíaco. Ambos actúan por el mecanismo de la familia y no por unión a receptor: demasiado cortos para activar un receptor acoplado a proteínas G, se describe su entrada a las células mediante transportadores de aminoácidos y de péptidos y su influencia posterior sobre la transcripción por interacción con ADN y cromatina.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Bioregulator Cardiovascular al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas de vial, réplicas adicionales de un solo componente, presentación sin marca o de marca privada, o otros paneles bioreguladores del mismo rango, como el set Immune / Thymic. Contacte a nuestra mesa de ventas corporativas con su composición objetivo y número de paneles para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Bioregulator Cardiovascular al por mayor para preservar la integridad del compuesto?',
      a: 'Los paneles se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío en rango congelado o refrigerado durante el tránsito. Cada vial conserva su etiqueta de identidad individual dentro de la bandeja del kit, de modo que la trazabilidad por componente sobrevive a la manipulación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de biología vascular y los laboratorios de células endoteliales son los principales usuarios de esta pareja, y el brazo de Vesugen es donde está el trabajo rastreable. Kozlov y colaboradores examinaron la actividad vasoprotectora del tripéptido Lys-Glu-Asp en contextos de aterosclerosis y reestenosis y, como ese reporte identifica el péptido por secuencia y no por nombre comercial, un laboratorio puede vincular el material del vial directamente con la molécula publicada. El cultivo endotelial con lecturas de proliferación y marcadores inflamatorios es el formato habitual. El brazo de Cardiogen es más difícil de situar en la literatura indexada: su nombre colisiona con un generador de rubidio-82 para imagen cardíaca, de modo que las búsquedas devuelven resultados no relacionados y la mayor parte del razonamiento se toma de la familia más amplia.',
    qualityAssurance:
      'Un panel de dos viales se certifica rápido pero de forma asimétrica, y conviene decir qué mitad es cuál. Vesugen resuelve a un registro público de compuesto con masa de referencia cercana a 390 Da, de modo que la masa observada se coteja contra un estándar externo y no solo contra una especificación interna. Cardiogen no tiene tal registro bajo su nombre comercial, por lo que se certifica contra especificación del fabricante y el certificado reporta la masa observada sin referencia cruzada externa. Ambos son lo bastante cortos para eluir temprano en fase reversa dentro de una ventana estrecha, razón por la cual la masa y no la retención impulsa la identificación. Las secuencias truncadas y la desamidación en residuos ácidos son los cribados rutinarios.',
  },
};

const BIOREGULATOR_HEPATIC_DIGESTIVE_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Bioregulator Hepatic / Digestive?',
      a: 'All three vials are verified to ≥99.0% purity by reverse-phase HPLC and confirmed by LC-MS, each certified separately. Two of the three have independently confirmable public reference masses: Ovagen near 375 Da and Livagen near 462 Da. Pancragen is certified against manufacturer specification, since no public compound record resolves under that name. Truncated sequences and deamidation at the acidic residues complete the routine screen.',
    },
    {
      q: 'Is Bioregulator Hepatic / Digestive approved for therapeutic use or human consumption?',
      a: 'No. Bioregulator Hepatic / Digestive is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. None of the component peptides holds an approved indication in the United States.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Bioregulator Hepatic / Digestive?',
      a: 'The minimum order quantity is one complete panel of 3 vials, 20 mg each. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running hepatocyte and pancreatic tissue panels, and distribution brands. Multi-panel and full-set procurement is available for qualified partners. We do not fulfill retail or single-vial inquiries.',
    },
    {
      q: 'What physical form is wholesale Bioregulator Hepatic / Digestive supplied in?',
      a: 'Bioregulator Hepatic / Digestive is supplied as three individually labelled vials of lyophilized powder, 20 mg per vial, each vacuum-sealed under nitrogen and marked with compound, strength and lot. The three are not pre-mixed. Their masses sit roughly 375, 462 and, per manufacturer specification, near 500 Da, which is close enough that a receiving lab depends on the label rather than on visual or gross-mass discrimination.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Bioregulator Hepatic / Digestive?',
      a: 'Store the sealed panel at -20°C (-4°F) for long-term stability, where lyophilized vials remain within specification for up to 36 months. Short-term storage at 2°C to 8°C (36°F to 46°F) is acceptable. Once reconstituted in sterile diluent, use within 14 days held at 2°C to 8°C. These ultrashort peptides are more hydrolysis-prone in solution than longer chains because a larger fraction of the molecule is exposed backbone, so reconstitute only what an experiment consumes.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Bioregulator Hepatic / Digestive?',
      a: 'This panel groups the three bioregulators the literature places with hepatic, digestive and pancreatic tissue, and the Livagen arm carries the most traceable record. Livagen is the tetrapeptide Lys-Glu-Asp-Ala, and Kuznik and colleagues published on that exact sequence alongside a polypeptide liver complex, which lets the paper attach to the molecule rather than to a trade name. Ovagen is the tripeptide Glu-Asp-Leu and Pancragen is the pancreatic-tissue counterpart. All three act through the family mechanism: too short for receptor engagement, described entering cells through amino acid and peptide transporters and then influencing transcription through DNA and chromatin interaction.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Bioregulator Hepatic / Digestive?',
      a: 'Yes. Qualified procurement partners can request alternative vial strengths, additional replicates of a single component, unlabeled or private-label presentation, or other bioregulator panels from the same range, such as the Cardiovascular set. Contact our corporate sales desk with your target composition and panel count to scope the run.',
    },
    {
      q: 'How is wholesale Bioregulator Hepatic / Digestive packaged and shipped to preserve compound integrity?',
      a: 'Panels ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers holding the shipment in the frozen or refrigerated range through transit. Each vial retains its individual identity label inside the kit tray so component traceability survives handling. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Hepatology groups and pancreatic islet laboratories are the natural users of this panel, and Livagen is where the attributable work sits. Kuznik and colleagues reported on the Lys-Glu-Asp-Ala tetrapeptide alongside a polypeptide liver complex, and because that study names the peptide by sequence a lab can connect the vial to the published molecule without relying on trade-name matching. Cultured hepatocyte systems with gene expression readouts are the usual format, following the family framework Khavinson and colleagues reviewed. The Ovagen arm needs a caution: its name collides with a veterinary follicle-stimulating hormone preparation, so literature searches under that term return results from an entirely different field.',
    qualityAssurance:
      'Certification across three vials here is uneven in a way worth stating plainly. Ovagen and Livagen both resolve to public compound records, so their observed masses are checked against external reference values near 375 and 462 Da respectively. Pancragen has no such record under its trade name and is certified against manufacturer specification, with the certificate reporting observed mass without an external cross-reference. All three elute early and closely on reverse-phase, which is characteristic of tripeptides and tetrapeptides built from acidic residues, so mass rather than retention carries the identification. Deamidation at the glutamate and aspartate positions and truncated sequences from incomplete coupling are the routine degradation screens.',
  },
};

const BIOREGULATOR_HEPATIC_DIGESTIVE_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Bioregulator Hepatic / Digestive al por mayor?',
      a: 'Los tres viales se verifican a una pureza ≥99.0% por HPLC de fase reversa y se confirman por LC-MS, cada uno certificado por separado. Dos de los tres tienen masas de referencia públicas confirmables: Ovagen cerca de 375 Da y Livagen cerca de 462 Da. Pancragen se certifica contra especificación del fabricante, ya que ningún registro público resuelve bajo ese nombre. Las secuencias truncadas y la desamidación en residuos ácidos completan el cribado rutinario.',
    },
    {
      q: '¿Está aprobado Bioregulator Hepatic / Digestive para uso terapéutico o consumo humano?',
      a: 'No. Bioregulator Hepatic / Digestive se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ninguno de los péptidos componentes cuenta con una indicación aprobada en Estados Unidos.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Bioregulator Hepatic / Digestive al por mayor?',
      a: 'La cantidad mínima de pedido es un panel completo de 3 viales de 20 mg cada uno. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de hepatocitos y tejido pancreático, y marcas de distribución. Hay disponibilidad multipanel y de set completo para socios calificados. No atendemos consultas minoristas ni de vial individual.',
    },
    {
      q: '¿En qué forma física se suministra Bioregulator Hepatic / Digestive al por mayor?',
      a: 'Bioregulator Hepatic / Digestive se suministra como tres viales etiquetados individualmente de polvo liofilizado, 20 mg por vial, cada uno sellado al vacío bajo nitrógeno y marcado con compuesto, concentración y lote. Los tres no vienen premezclados. Sus masas se sitúan en torno a 375, 462 y, según especificación del fabricante, cerca de 500 Da, lo bastante próximas como para que un laboratorio receptor dependa de la etiqueta y no de una discriminación visual o de masa gruesa.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Bioregulator Hepatic / Digestive?',
      a: 'Almacene el panel sellado a -20°C (-4°F) para estabilidad a largo plazo, donde los viales liofilizados se mantienen dentro de especificación hasta 36 meses. El almacenamiento a corto plazo entre 2°C y 8°C (36°F a 46°F) es aceptable. Una vez reconstituido en diluyente estéril, use el material en 14 días entre 2°C y 8°C. Estos péptidos ultracortos son más propensos a la hidrólisis en solución que las cadenas largas porque una fracción mayor de la molécula es esqueleto expuesto, así que reconstituya solo lo que consuma el experimento.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Bioregulator Hepatic / Digestive?',
      a: 'Este panel agrupa los tres bioreguladores que la literatura sitúa junto a tejido hepático, digestivo y pancreático, y el brazo de Livagen porta el registro más rastreable. Livagen es el tetrapéptido Lys-Glu-Asp-Ala, y Kuznik y colaboradores publicaron sobre esa secuencia exacta junto a un complejo polipeptídico hepático, lo que permite que el artículo se adhiera a la molécula y no a un nombre comercial. Ovagen es el tripéptido Glu-Asp-Leu y Pancragen es la contraparte de tejido pancreático. Los tres actúan por el mecanismo de la familia: demasiado cortos para activar un receptor, se describe su entrada a las células por transportadores de aminoácidos y de péptidos y su influencia posterior sobre la transcripción.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Bioregulator Hepatic / Digestive al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas de vial, réplicas adicionales de un solo componente, presentación sin marca o de marca privada, o otros paneles bioreguladores del mismo rango, como el set Cardiovascular. Contacte a nuestra mesa de ventas corporativas con su composición objetivo y número de paneles para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Bioregulator Hepatic / Digestive al por mayor para preservar la integridad del compuesto?',
      a: 'Los paneles se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío en rango congelado o refrigerado durante el tránsito. Cada vial conserva su etiqueta de identidad individual dentro de la bandeja del kit, de modo que la trazabilidad por componente sobrevive a la manipulación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de hepatología y los laboratorios de islotes pancreáticos son los usuarios naturales de este panel, y Livagen es donde está el trabajo atribuible. Kuznik y colaboradores reportaron sobre el tetrapéptido Lys-Glu-Asp-Ala junto a un complejo polipeptídico hepático y, como ese estudio nombra el péptido por secuencia, un laboratorio puede conectar el vial con la molécula publicada sin depender de coincidencias de nombre comercial. Los sistemas de hepatocitos en cultivo con lecturas de expresión génica son el formato habitual, siguiendo el marco de familia que revisaron Khavinson y colaboradores. El brazo de Ovagen requiere una precaución: su nombre colisiona con una preparación veterinaria de hormona foliculoestimulante, de modo que las búsquedas bajo ese término devuelven resultados de un campo completamente distinto.',
    qualityAssurance:
      'La certificación entre los tres viales es desigual de un modo que conviene declarar. Ovagen y Livagen resuelven a registros públicos de compuesto, de modo que sus masas observadas se cotejan contra valores de referencia externos cercanos a 375 y 462 Da respectivamente. Pancragen no tiene tal registro bajo su nombre comercial y se certifica contra especificación del fabricante, reportando el certificado la masa observada sin referencia cruzada externa. Los tres eluyen temprano y muy próximos en fase reversa, algo característico de tripéptidos y tetrapéptidos construidos con residuos ácidos, por lo que la masa y no la retención carga con la identificación. La desamidación en las posiciones de glutamato y aspartato y las secuencias truncadas son los cribados rutinarios.',
  },
};

const BIOREGULATOR_IMMUNE_THYMIC_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Bioregulator Immune / Thymic?',
      a: 'All three vials are verified to ≥99.0% purity by reverse-phase HPLC and confirmed by LC-MS, certified separately. Vilon and Crystagen resolve to public compound records with reference masses near 275 and 359 Da. Thymalin is handled differently: it is a thymic polypeptide preparation rather than a single molecule, so it is characterised by chromatographic profile against a reference batch rather than by one molecular mass. The certificate states which approach applies to which vial.',
    },
    {
      q: 'Is Bioregulator Immune / Thymic approved for therapeutic use or human consumption?',
      a: 'No. Bioregulator Immune / Thymic is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. None of the component peptides holds an approved indication in the United States.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Bioregulator Immune / Thymic?',
      a: 'The minimum order quantity is one complete panel of 3 vials, 20 mg each. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running innate immune and stem cell differentiation panels, and distribution brands. Multi-panel and full-set procurement is available for qualified partners. We do not fulfill retail or single-vial inquiries.',
    },
    {
      q: 'What physical form is wholesale Bioregulator Immune / Thymic supplied in?',
      a: 'Bioregulator Immune / Thymic is supplied as three individually labelled vials of lyophilized powder, 20 mg per vial, each vacuum-sealed under nitrogen. Vilon is the smallest peptide in our entire catalog at two residues and roughly 275 Da, which makes it the most hygroscopic and the most sensitive to handling in the set. None of the three is pre-mixed, and with a preparation and two defined sequences in one kit, keeping them separate is a functional requirement.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Bioregulator Immune / Thymic?',
      a: 'Store the sealed panel at -20°C (-4°F) for long-term stability, where lyophilized vials remain within specification for up to 36 months. Short-term storage at 2°C to 8°C (36°F to 46°F) is acceptable. Once reconstituted in sterile diluent, use within 14 days held at 2°C to 8°C. These ultrashort peptides are more hydrolysis-prone in solution than longer chains because a larger fraction of the molecule is exposed backbone, so reconstitute only what an experiment consumes.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Bioregulator Immune / Thymic?',
      a: 'This panel contains a structural relationship the other bioregulator kits do not: one of its vials is a constituent of another. Linkova and colleagues reported that the Thymalin preparation contains the dipeptides Lys-Glu and Glu-Trp, and Lys-Glu is Vilon, supplied here as its own vial. That makes the pairing a built-in deconvolution experiment, since a lab can run the preparation against one of its own components. Crystagen is the tripeptide Glu-Asp-Pro. All three act through gene regulation rather than receptor binding, and Khavinson and colleagues separately reported that the Lys-Glu peptide regulates SIRT1, PARP1 and PARP2 expression in mesenchymal stem cell aging.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Bioregulator Immune / Thymic?',
      a: 'Yes. Qualified procurement partners can request alternative vial strengths, additional replicates of a single component, unlabeled or private-label presentation, or other bioregulator panels from the same range, such as the Neuro / Pineal set. Contact our corporate sales desk with your target composition and panel count to scope the run.',
    },
    {
      q: 'How is wholesale Bioregulator Immune / Thymic packaged and shipped to preserve compound integrity?',
      a: 'Panels ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers holding the shipment in the frozen or refrigerated range through transit. Each vial retains its individual identity label inside the kit tray so component traceability survives handling. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Immunology groups and stem cell laboratories are the primary users of this panel, and it supports an unusually clean experiment. Because Linkova and colleagues established that the Thymalin preparation contains the Lys-Glu dipeptide, and Vilon is that dipeptide supplied separately, a lab can run preparation against component in the same plate and ask how much of the observed effect the single peptide accounts for. Khavinson and colleagues reported Thymalin activating differentiation of human hematopoietic stem cells, giving a defined cellular readout, while their separate work on the Lys-Glu peptide measured SIRT1, PARP1 and PARP2 expression in mesenchymal stem cell aging. Monocyte and macrophage systems such as THP-1 provide the inflammatory arm.',
    qualityAssurance:
      'This panel needs two different certification approaches in one kit, which is unusual. Vilon and Crystagen are defined sequences with public reference records, so their observed masses are checked against external values near 275 and 359 Da. Thymalin is a thymic polypeptide preparation, not a single molecule, so a single mass would misrepresent it; it is characterised instead by chromatographic profile compared against a reference batch, and the certificate says so explicitly rather than reporting a number that would imply a purity it does not have. Vilon deserves separate handling for a second reason: at two residues it is markedly hygroscopic, so vials are sealed under nitrogen and should be equilibrated before opening.',
  },
};

const BIOREGULATOR_IMMUNE_THYMIC_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Bioregulator Immune / Thymic al por mayor?',
      a: 'Los tres viales se verifican a una pureza ≥99.0% por HPLC de fase reversa y se confirman por LC-MS, certificados por separado. Vilon y Crystagen resuelven a registros públicos con masas de referencia cercanas a 275 y 359 Da. Thymalin se trata de forma distinta: es una preparación polipeptídica tímica y no una molécula única, por lo que se caracteriza por perfil cromatográfico frente a un lote de referencia y no por una masa molecular. El certificado indica qué enfoque aplica a cada vial.',
    },
    {
      q: '¿Está aprobado Bioregulator Immune / Thymic para uso terapéutico o consumo humano?',
      a: 'No. Bioregulator Immune / Thymic se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ninguno de los péptidos componentes cuenta con una indicación aprobada en Estados Unidos.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Bioregulator Immune / Thymic al por mayor?',
      a: 'La cantidad mínima de pedido es un panel completo de 3 viales de 20 mg cada uno. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de inmunidad innata y diferenciación de células madre, y marcas de distribución. Hay disponibilidad multipanel y de set completo para socios calificados. No atendemos consultas minoristas ni de vial individual.',
    },
    {
      q: '¿En qué forma física se suministra Bioregulator Immune / Thymic al por mayor?',
      a: 'Bioregulator Immune / Thymic se suministra como tres viales etiquetados individualmente de polvo liofilizado, 20 mg por vial, cada uno sellado al vacío bajo nitrógeno. Vilon es el péptido más pequeño de todo nuestro catálogo con dos residuos y unos 275 Da, lo que lo hace el más higroscópico y el más sensible a la manipulación del set. Ninguno de los tres viene premezclado y, con una preparación y dos secuencias definidas en un mismo kit, mantenerlos separados es un requisito funcional.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Bioregulator Immune / Thymic?',
      a: 'Almacene el panel sellado a -20°C (-4°F) para estabilidad a largo plazo, donde los viales liofilizados se mantienen dentro de especificación hasta 36 meses. El almacenamiento a corto plazo entre 2°C y 8°C (36°F a 46°F) es aceptable. Una vez reconstituido en diluyente estéril, use el material en 14 días entre 2°C y 8°C. Estos péptidos ultracortos son más propensos a la hidrólisis en solución que las cadenas largas porque una fracción mayor de la molécula es esqueleto expuesto, así que reconstituya solo lo que consuma el experimento.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Bioregulator Immune / Thymic?',
      a: 'Este panel contiene una relación estructural que los otros kits bioreguladores no tienen: uno de sus viales es constituyente de otro. Linkova y colaboradores reportaron que la preparación Thymalin contiene los dipéptidos Lys-Glu y Glu-Trp, y Lys-Glu es Vilon, suministrado aquí en su propio vial. Eso convierte a la pareja en un experimento de deconvolución integrado, ya que un laboratorio puede correr la preparación frente a uno de sus propios componentes. Crystagen es el tripéptido Glu-Asp-Pro. Los tres actúan por regulación génica y no por unión a receptor, y Khavinson y colaboradores reportaron por separado que el péptido Lys-Glu regula la expresión de SIRT1, PARP1 y PARP2 en el envejecimiento de células madre mesenquimales.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Bioregulator Immune / Thymic al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas de vial, réplicas adicionales de un solo componente, presentación sin marca o de marca privada, o otros paneles bioreguladores del mismo rango, como el set Neuro / Pineal. Contacte a nuestra mesa de ventas corporativas con su composición objetivo y número de paneles para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Bioregulator Immune / Thymic al por mayor para preservar la integridad del compuesto?',
      a: 'Los paneles se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío en rango congelado o refrigerado durante el tránsito. Cada vial conserva su etiqueta de identidad individual dentro de la bandeja del kit, de modo que la trazabilidad por componente sobrevive a la manipulación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de inmunología y los laboratorios de células madre son los principales usuarios de este panel, que respalda un experimento inusualmente limpio. Como Linkova y colaboradores establecieron que la preparación Thymalin contiene el dipéptido Lys-Glu, y Vilon es ese dipéptido suministrado por separado, un laboratorio puede correr preparación frente a componente en la misma placa y preguntar cuánto del efecto observado explica el péptido individual. Khavinson y colaboradores reportaron que Thymalin activa la diferenciación de células madre hematopoyéticas humanas, dando una lectura celular definida, mientras que su trabajo separado sobre el péptido Lys-Glu midió la expresión de SIRT1, PARP1 y PARP2 en el envejecimiento de células madre mesenquimales. Los sistemas de monocitos y macrófagos como THP-1 aportan el brazo inflamatorio.',
    qualityAssurance:
      'Este panel exige dos enfoques de certificación distintos en un mismo kit, algo inusual. Vilon y Crystagen son secuencias definidas con registros públicos de referencia, de modo que sus masas observadas se cotejan contra valores externos cercanos a 275 y 359 Da. Thymalin es una preparación polipeptídica tímica y no una molécula única, por lo que una masa única la representaría mal; se caracteriza en cambio por perfil cromatográfico comparado con un lote de referencia, y el certificado lo declara explícitamente en lugar de reportar un número que implicaría una pureza que no tiene. Vilon merece manejo aparte por una segunda razón: con dos residuos es marcadamente higroscópico, por lo que los viales se sellan bajo nitrógeno y deben equilibrarse antes de abrirse.',
  },
};

const BIOREGULATOR_NEURO_PINEAL_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Bioregulator Neuro / Pineal?',
      a: 'Both vials are verified to ≥99.0% purity by reverse-phase HPLC and confirmed by LC-MS, each certified separately, and both resolve to public compound records. This panel presents the tightest identification problem in the bioregulator range: Pinealon and Cortagen differ by roughly 12 Da, closer than any other pair in the family, so the analytical method must resolve masses that sit almost on top of one another. High-resolution mass measurement rather than nominal mass is what separates them.',
    },
    {
      q: 'Is Bioregulator Neuro / Pineal approved for therapeutic use or human consumption?',
      a: 'No. Bioregulator Neuro / Pineal is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. None of the component peptides holds an approved indication in the United States.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Bioregulator Neuro / Pineal?',
      a: 'The minimum order quantity is one complete panel of 2 vials, 20 mg each. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running neuronal culture and epigenetic panels, and distribution brands. Multi-panel and full-set procurement is available for qualified partners. We do not fulfill retail or single-vial inquiries.',
    },
    {
      q: 'What physical form is wholesale Bioregulator Neuro / Pineal supplied in?',
      a: 'Bioregulator Neuro / Pineal is supplied as two individually labelled vials of lyophilized powder, 20 mg per vial, each vacuum-sealed under nitrogen. Individual labelling matters more in this pair than in most: at roughly 418 and 430 Da the two powders are indistinguishable by eye and nearly so by nominal mass, so a receiving lab that loses the labels cannot recover the assignment without high-resolution analysis of its own.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Bioregulator Neuro / Pineal?',
      a: 'Store the sealed panel at -20°C (-4°F) for long-term stability, where lyophilized vials remain within specification for up to 36 months. Short-term storage at 2°C to 8°C (36°F to 46°F) is acceptable. Once reconstituted in sterile diluent, use within 14 days held at 2°C to 8°C. These ultrashort peptides are more hydrolysis-prone in solution than longer chains because a larger fraction of the molecule is exposed backbone, so reconstitute only what an experiment consumes.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Bioregulator Neuro / Pineal?',
      a: 'This panel pairs the two bioregulators the literature places in central nervous system contexts, and both are structurally defined. Pinealon is the tripeptide Glu-Asp-Arg, associated with pineal gland and broader neural tissue; Cortagen is the tetrapeptide Ala-Glu-Asp-Pro, associated more closely with cerebral cortex tissue. Ilina and colleagues reviewed neuroepigenetic mechanisms of ultrashort peptides, which is the mechanistic frame this pair sits in: rather than binding a neuronal receptor, these peptides are described entering cells through amino acid and peptide transporters and then influencing transcription through DNA and chromatin interaction. Zarubina and Shabanov reported separately on Cortagen in cerebral ischemia models.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Bioregulator Neuro / Pineal?',
      a: 'Yes. Qualified procurement partners can request alternative vial strengths, additional replicates of a single component, unlabeled or private-label presentation, or other bioregulator panels from the same range, such as the Immune / Thymic set. Contact our corporate sales desk with your target composition and panel count to scope the run.',
    },
    {
      q: 'How is wholesale Bioregulator Neuro / Pineal packaged and shipped to preserve compound integrity?',
      a: 'Panels ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers holding the shipment in the frozen or refrigerated range through transit. Each vial retains its individual identity label inside the kit tray so component traceability survives handling. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Neuroscience groups working on epigenetic regulation are the primary users of this pair, and the framing comes from Ilina and colleagues, who reviewed neuroepigenetic mechanisms of ultrashort peptides. That review is what tells a lab to design around transcriptional readouts rather than receptor binding assays, which would find nothing. Primary neuronal culture and organotypic brain slice preparations with gene expression endpoints are the usual formats. The two arms support a direct comparison: Pinealon is placed with pineal and broader neural tissue while Cortagen is associated more specifically with cerebral cortex, so running them separately in the same neuronal model tests whether that reported distinction is measurable. Zarubina and Shabanov studied Cortagen in cerebral ischemia contexts.',
    qualityAssurance:
      'The analytical challenge in this two-vial panel is unusually specific: the components sit closer in mass than any other pair in the bioregulator family. Pinealon and Cortagen differ by roughly 12 Da, which nominal mass measurement can blur, so accurate high-resolution mass is what establishes which vial holds which peptide. Both resolve to public compound records, so observed values are checked against external references rather than internal specification alone. Retention offers little help because both elute early and close together on reverse-phase, as short acidic peptides do. Deamidation at the glutamate and aspartate positions and truncated sequences from incomplete coupling are the routine degradation screens.',
  },
};

const BIOREGULATOR_NEURO_PINEAL_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Bioregulator Neuro / Pineal al por mayor?',
      a: 'Ambos viales se verifican a una pureza ≥99.0% por HPLC de fase reversa y se confirman por LC-MS, cada uno certificado por separado, y ambos resuelven a registros públicos de compuesto. Este panel plantea el problema de identificación más ajustado del rango bioregulador: Pinealon y Cortagen difieren en unos 12 Da, más próximos que cualquier otra pareja de la familia, de modo que el método analítico debe resolver masas casi superpuestas. La medición de masa de alta resolución y no la masa nominal es lo que los separa.',
    },
    {
      q: '¿Está aprobado Bioregulator Neuro / Pineal para uso terapéutico o consumo humano?',
      a: 'No. Bioregulator Neuro / Pineal se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ninguno de los péptidos componentes cuenta con una indicación aprobada en Estados Unidos.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Bioregulator Neuro / Pineal al por mayor?',
      a: 'La cantidad mínima de pedido es un panel completo de 2 viales de 20 mg cada uno. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de cultivo neuronal y epigenética, y marcas de distribución. Hay disponibilidad multipanel y de set completo para socios calificados. No atendemos consultas minoristas ni de vial individual.',
    },
    {
      q: '¿En qué forma física se suministra Bioregulator Neuro / Pineal al por mayor?',
      a: 'Bioregulator Neuro / Pineal se suministra como dos viales etiquetados individualmente de polvo liofilizado, 20 mg por vial, cada uno sellado al vacío bajo nitrógeno. El etiquetado individual importa más en esta pareja que en la mayoría: con unos 418 y 430 Da, los dos polvos son indistinguibles a simple vista y casi por masa nominal, de modo que un laboratorio que pierda las etiquetas no puede recuperar la asignación sin un análisis propio de alta resolución.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Bioregulator Neuro / Pineal?',
      a: 'Almacene el panel sellado a -20°C (-4°F) para estabilidad a largo plazo, donde los viales liofilizados se mantienen dentro de especificación hasta 36 meses. El almacenamiento a corto plazo entre 2°C y 8°C (36°F a 46°F) es aceptable. Una vez reconstituido en diluyente estéril, use el material en 14 días entre 2°C y 8°C. Estos péptidos ultracortos son más propensos a la hidrólisis en solución que las cadenas largas porque una fracción mayor de la molécula es esqueleto expuesto, así que reconstituya solo lo que consuma el experimento.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Bioregulator Neuro / Pineal?',
      a: 'Este panel combina los dos bioreguladores que la literatura sitúa en contextos del sistema nervioso central, y ambos están estructuralmente definidos. Pinealon es el tripéptido Glu-Asp-Arg, asociado con la glándula pineal y tejido neural más amplio; Cortagen es el tetrapéptido Ala-Glu-Asp-Pro, asociado más estrechamente con tejido de corteza cerebral. Ilina y colaboradores revisaron los mecanismos neuroepigenéticos de los péptidos ultracortos, que es el marco mecanístico de esta pareja: en lugar de unirse a un receptor neuronal, se describe su entrada a las células por transportadores de aminoácidos y de péptidos y su influencia posterior sobre la transcripción mediante interacción con ADN y cromatina. Zarubina y Shabanov reportaron por separado sobre Cortagen en modelos de isquemia cerebral.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Bioregulator Neuro / Pineal al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas de vial, réplicas adicionales de un solo componente, presentación sin marca o de marca privada, o otros paneles bioreguladores del mismo rango, como el set Immune / Thymic. Contacte a nuestra mesa de ventas corporativas con su composición objetivo y número de paneles para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Bioregulator Neuro / Pineal al por mayor para preservar la integridad del compuesto?',
      a: 'Los paneles se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío en rango congelado o refrigerado durante el tránsito. Cada vial conserva su etiqueta de identidad individual dentro de la bandeja del kit, de modo que la trazabilidad por componente sobrevive a la manipulación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de neurociencia que trabajan en regulación epigenética son los principales usuarios de esta pareja, y el marco proviene de Ilina y colaboradores, que revisaron los mecanismos neuroepigenéticos de los péptidos ultracortos. Esa revisión es la que indica a un laboratorio diseñar en torno a lecturas transcripcionales y no a ensayos de unión a receptor, que no encontrarían nada. El cultivo neuronal primario y las preparaciones de rebanada cerebral organotípica con criterios de expresión génica son los formatos habituales. Los dos brazos permiten una comparación directa: Pinealon se sitúa junto a tejido pineal y neural amplio mientras que Cortagen se asocia más específicamente con corteza cerebral, de modo que correrlos por separado en el mismo modelo neuronal comprueba si esa distinción reportada es medible. Zarubina y Shabanov estudiaron Cortagen en contextos de isquemia cerebral.',
    qualityAssurance:
      'El reto analítico de este panel de dos viales es inusualmente específico: los componentes están más próximos en masa que cualquier otra pareja de la familia bioreguladora. Pinealon y Cortagen difieren en unos 12 Da, algo que la medición de masa nominal puede difuminar, de modo que la masa exacta de alta resolución es lo que establece qué vial contiene qué péptido. Ambos resuelven a registros públicos, por lo que los valores observados se cotejan contra referencias externas y no solo contra especificación interna. La retención ayuda poco porque ambos eluyen temprano y muy juntos en fase reversa, como corresponde a péptidos ácidos cortos. La desamidación en las posiciones de glutamato y aspartato y las secuencias truncadas son los cribados rutinarios.',
  },
};

const BIOREGULATOR_RESPIRATORY_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Bioregulator Respiratory?',
      a: 'Both vials are verified to ≥99.0% purity by reverse-phase HPLC and confirmed by LC-MS, each certified separately, and both resolve to public compound records with reference masses near 319 and 447 Da. The 127 Da gap between them is the widest in any two-vial bioregulator panel, which makes identification comparatively straightforward here. Truncated sequences and deamidation at the glutamate and aspartate positions are the routine screens.',
    },
    {
      q: 'Is Bioregulator Respiratory approved for therapeutic use or human consumption?',
      a: 'No. Bioregulator Respiratory is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. None of the component peptides holds an approved indication in the United States.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Bioregulator Respiratory?',
      a: 'The minimum order quantity is one complete panel of 2 vials, 20 mg each. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running bronchial epithelial and inflammatory panels, and distribution brands. Multi-panel and full-set procurement is available for qualified partners. We do not fulfill retail or single-vial inquiries.',
    },
    {
      q: 'What physical form is wholesale Bioregulator Respiratory supplied in?',
      a: 'Bioregulator Respiratory is supplied as two individually labelled vials of lyophilized powder, 20 mg per vial, each vacuum-sealed under nitrogen. Chonluten is a tripeptide and Bronchogen a tetrapeptide, and the size difference between them is large enough that they separate clearly on analysis, which is not true of every pair in this range. Neither is pre-mixed, so the two tissue associations can be tested independently.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Bioregulator Respiratory?',
      a: 'Store the sealed panel at -20°C (-4°F) for long-term stability, where lyophilized vials remain within specification for up to 36 months. Short-term storage at 2°C to 8°C (36°F to 46°F) is acceptable. Once reconstituted in sterile diluent, use within 14 days held at 2°C to 8°C. These ultrashort peptides are more hydrolysis-prone in solution than longer chains because a larger fraction of the molecule is exposed backbone, so reconstitute only what an experiment consumes.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Bioregulator Respiratory?',
      a: 'This panel pairs the two bioregulators the literature associates with bronchial and respiratory tissue, and both are structurally defined. Chonluten is the tripeptide Glu-Asp-Gly and Bronchogen the tetrapeptide Ala-Glu-Asp-Leu. Both are built around a shared Glu-Asp core with different flanking residues, which is a recurring design pattern across the bioregulator family and worth noticing: the acidic pair appears in most members, and tissue association tracks with what surrounds it. Neither engages a receptor. Research describes the family entering cells through amino acid and peptide transporters and then influencing transcription through DNA and chromatin interaction, the mechanism Khavinson and colleagues reviewed across 26 such peptides.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Bioregulator Respiratory?',
      a: 'Yes. Qualified procurement partners can request alternative vial strengths, additional replicates of a single component, unlabeled or private-label presentation, or other bioregulator panels from the same range, such as the Cardiovascular set. Contact our corporate sales desk with your target composition and panel count to scope the run.',
    },
    {
      q: 'How is wholesale Bioregulator Respiratory packaged and shipped to preserve compound integrity?',
      a: 'Panels ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers holding the shipment in the frozen or refrigerated range through transit. Each vial retains its individual identity label inside the kit tray so component traceability survives handling. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Respiratory epithelium groups and inflammatory signaling laboratories are the natural users of this pair, though a caution is warranted about the evidence base. Neither Chonluten nor Bronchogen carries a substantial body of indexed primary literature under its own name, so most experimental reasoning is drawn from the family-level work: Khavinson and colleagues on peptide regulation of gene expression, and Avolio and colleagues on monocyte and macrophage responses in the THP-1 line, which supplies the inflammatory readout most directly transferable to airway work. Bronchial epithelial culture with transcriptional endpoints is the format that follows from that framing. Running the tripeptide against the tetrapeptide tests whether the flanking residues around their shared acidic core change anything measurable.',
    qualityAssurance:
      'This is the most analytically comfortable pair in the bioregulator range, and the reason is simple arithmetic. Chonluten and Bronchogen differ by roughly 127 Da, a wide enough gap that nominal mass alone distinguishes them and high-resolution measurement is confirmatory rather than essential. Both resolve to public compound records, so observed values are checked against external references. Both still elute early and close on reverse-phase, as short peptides built from acidic residues do, so mass remains the primary identifier. Deamidation at the glutamate and aspartate positions is the main chemical degradation route, alongside truncated sequences from incomplete coupling during synthesis.',
  },
};

const BIOREGULATOR_RESPIRATORY_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Bioregulator Respiratory al por mayor?',
      a: 'Ambos viales se verifican a una pureza ≥99.0% por HPLC de fase reversa y se confirman por LC-MS, cada uno certificado por separado, y ambos resuelven a registros públicos con masas de referencia cercanas a 319 y 447 Da. La brecha de 127 Da entre ellos es la más amplia de cualquier panel bioregulador de dos viales, lo que hace la identificación comparativamente sencilla. Las secuencias truncadas y la desamidación en posiciones de glutamato y aspartato son los cribados rutinarios.',
    },
    {
      q: '¿Está aprobado Bioregulator Respiratory para uso terapéutico o consumo humano?',
      a: 'No. Bioregulator Respiratory se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ninguno de los péptidos componentes cuenta con una indicación aprobada en Estados Unidos.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Bioregulator Respiratory al por mayor?',
      a: 'La cantidad mínima de pedido es un panel completo de 2 viales de 20 mg cada uno. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de epitelio bronquial e inflamación, y marcas de distribución. Hay disponibilidad multipanel y de set completo para socios calificados. No atendemos consultas minoristas ni de vial individual.',
    },
    {
      q: '¿En qué forma física se suministra Bioregulator Respiratory al por mayor?',
      a: 'Bioregulator Respiratory se suministra como dos viales etiquetados individualmente de polvo liofilizado, 20 mg por vial, cada uno sellado al vacío bajo nitrógeno. Chonluten es un tripéptido y Bronchogen un tetrapéptido, y la diferencia de tamaño entre ellos es lo bastante grande como para que se separen con claridad en el análisis, algo que no ocurre con todas las parejas de este rango. Ninguno viene premezclado, de modo que ambas asociaciones tisulares pueden comprobarse de forma independiente.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Bioregulator Respiratory?',
      a: 'Almacene el panel sellado a -20°C (-4°F) para estabilidad a largo plazo, donde los viales liofilizados se mantienen dentro de especificación hasta 36 meses. El almacenamiento a corto plazo entre 2°C y 8°C (36°F a 46°F) es aceptable. Una vez reconstituido en diluyente estéril, use el material en 14 días entre 2°C y 8°C. Estos péptidos ultracortos son más propensos a la hidrólisis en solución que las cadenas largas porque una fracción mayor de la molécula es esqueleto expuesto, así que reconstituya solo lo que consuma el experimento.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Bioregulator Respiratory?',
      a: 'Este panel combina los dos bioreguladores que la literatura asocia con tejido bronquial y respiratorio, y ambos están estructuralmente definidos. Chonluten es el tripéptido Glu-Asp-Gly y Bronchogen el tetrapéptido Ala-Glu-Asp-Leu. Ambos se construyen en torno a un núcleo Glu-Asp compartido con residuos flanqueantes distintos, un patrón de diseño recurrente en la familia bioreguladora que conviene notar: el par ácido aparece en la mayoría de los miembros, y la asociación tisular varía con lo que lo rodea. Ninguno activa un receptor. La investigación describe la entrada de la familia a las células por transportadores de aminoácidos y de péptidos y su influencia posterior sobre la transcripción, el mecanismo que Khavinson y colaboradores revisaron en 26 de estos péptidos.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Bioregulator Respiratory al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas de vial, réplicas adicionales de un solo componente, presentación sin marca o de marca privada, o otros paneles bioreguladores del mismo rango, como el set Cardiovascular. Contacte a nuestra mesa de ventas corporativas con su composición objetivo y número de paneles para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Bioregulator Respiratory al por mayor para preservar la integridad del compuesto?',
      a: 'Los paneles se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío en rango congelado o refrigerado durante el tránsito. Cada vial conserva su etiqueta de identidad individual dentro de la bandeja del kit, de modo que la trazabilidad por componente sobrevive a la manipulación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los grupos de epitelio respiratorio y los laboratorios de señalización inflamatoria son los usuarios naturales de esta pareja, aunque conviene una precaución sobre la base de evidencia. Ni Chonluten ni Bronchogen cuentan con un cuerpo sustancial de literatura primaria indexada bajo su propio nombre, de modo que la mayor parte del razonamiento experimental se toma del trabajo a nivel de familia: Khavinson y colaboradores sobre regulación péptidica de la expresión génica, y Avolio y colaboradores sobre respuestas de monocitos y macrófagos en la línea THP-1, que aporta la lectura inflamatoria más directamente transferible al trabajo de vía aérea. El cultivo de epitelio bronquial con criterios transcripcionales es el formato que se deriva. Correr el tripéptido frente al tetrapéptido comprueba si los residuos flanqueantes de su núcleo ácido compartido cambian algo medible.',
    qualityAssurance:
      'Esta es la pareja analíticamente más cómoda del rango bioregulador, y la razón es aritmética simple. Chonluten y Bronchogen difieren en unos 127 Da, una brecha lo bastante amplia como para que la masa nominal por sí sola los distinga y la medición de alta resolución sea confirmatoria más que esencial. Ambos resuelven a registros públicos, de modo que los valores observados se cotejan contra referencias externas. Ambos eluyen igualmente temprano y juntos en fase reversa, como corresponde a péptidos cortos de residuos ácidos, por lo que la masa sigue siendo el identificador principal. La desamidación en las posiciones de glutamato y aspartato es la ruta de degradación química principal, junto a las secuencias truncadas por acoplamiento incompleto.',
  },
};

const BIOREGULATOR_UROGENITAL_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Bioregulator Urogenital?',
      a: 'All three vials are verified to ≥99.0% purity by reverse-phase HPLC and confirmed by LC-MS, each certified separately. Prostamax resolves to a public compound record with a reference mass near 488 Da, the heaviest peptide in the bioregulator range. Testagen and Vesilute have no public records under those names and are certified against manufacturer specification, with observed mass reported but no external cross-reference. This panel carries the highest proportion of specification-only components of any in the set.',
    },
    {
      q: 'Is Bioregulator Urogenital approved for therapeutic use or human consumption?',
      a: 'No. Bioregulator Urogenital is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. None of the component peptides holds an approved indication in the United States.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Bioregulator Urogenital?',
      a: 'The minimum order quantity is one complete panel of 3 vials, 20 mg each. 99 Purity Wholesale supplies bulk quantities to research institutions, contract laboratories running organotypic tissue culture panels, and distribution brands. Multi-panel and full-set procurement is available for qualified partners. We do not fulfill retail or single-vial inquiries.',
    },
    {
      q: 'What physical form is wholesale Bioregulator Urogenital supplied in?',
      a: 'Bioregulator Urogenital is supplied as three individually labelled vials of lyophilized powder, 20 mg per vial, each vacuum-sealed under nitrogen and marked with compound, strength and lot. None is pre-mixed. Label-level traceability carries more weight in this panel than in most, because two of the three components cannot be cross-checked against an external public reference and the label plus certificate is the only identity record a receiving lab has.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Bioregulator Urogenital?',
      a: 'Store the sealed panel at -20°C (-4°F) for long-term stability, where lyophilized vials remain within specification for up to 36 months. Short-term storage at 2°C to 8°C (36°F to 46°F) is acceptable. Once reconstituted in sterile diluent, use within 14 days held at 2°C to 8°C. These ultrashort peptides are more hydrolysis-prone in solution than longer chains because a larger fraction of the molecule is exposed backbone, so reconstitute only what an experiment consumes.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Bioregulator Urogenital?',
      a: 'This panel groups the three bioregulators the literature places with urogenital tissue: Prostamax with prostate, Testagen with testicular and Vesilute with bladder contexts. Prostamax is the tetrapeptide Lys-Glu-Asp-Pro and at roughly 488 Da it is the largest peptide in the entire bioregulator family, which still puts it well under the size any G protein-coupled receptor would engage. All three act through the family mechanism rather than receptor binding: research describes ultrashort peptides entering cells through amino acid and peptide transporters and then influencing transcription through DNA and chromatin interaction. Chalisova and colleagues worked in organotypic tissue culture, which is the model format this kind of tissue-specific comparison uses.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Bioregulator Urogenital?',
      a: 'Yes. Qualified procurement partners can request alternative vial strengths, additional replicates of a single component, unlabeled or private-label presentation, or other bioregulator panels from the same range, such as the Hepatic / Digestive set. Contact our corporate sales desk with your target composition and panel count to scope the run.',
    },
    {
      q: 'How is wholesale Bioregulator Urogenital packaged and shipped to preserve compound integrity?',
      a: 'Panels ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers holding the shipment in the frozen or refrigerated range through transit. Each vial retains its individual identity label inside the kit tray so component traceability survives handling. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Reproductive tissue laboratories and organotypic culture groups are the primary users of this panel, and the model format matters more here than the individual compounds. Chalisova and colleagues worked with organotypic tissue cultures in the Khavinson group, and that format — explanted tissue maintained in culture rather than a dissociated cell line — is what allows a tissue-specific comparison to mean anything, since the reported prostate, testicular and bladder associations are properties of tissue context rather than of a receptor a monolayer would express. A caution belongs alongside that: two of the three components have no indexed primary literature or public compound record under their names, so independent characterization is the honest first step rather than an optional extra.',
    qualityAssurance:
      'Certification here is more uneven than in any other bioregulator panel, and saying so is more useful than smoothing it over. Prostamax resolves to a public compound record, so its observed mass near 488 Da is checked against an external reference. Testagen and Vesilute have no such records under their trade names, so both are certified against manufacturer specification with observed mass reported and no external cross-check available. All three elute early and closely on reverse-phase, so retention contributes little to discrimination. Deamidation at the glutamate and aspartate positions and truncated sequences from incomplete coupling are the routine degradation screens across all three vials.',
  },
};

const BIOREGULATOR_UROGENITAL_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Bioregulator Urogenital al por mayor?',
      a: 'Los tres viales se verifican a una pureza ≥99.0% por HPLC de fase reversa y se confirman por LC-MS, cada uno certificado por separado. Prostamax resuelve a un registro público con masa de referencia cercana a 488 Da, el péptido más pesado del rango bioregulador. Testagen y Vesilute no tienen registros públicos bajo esos nombres y se certifican contra especificación del fabricante, reportando la masa observada sin referencia cruzada externa. Este panel tiene la mayor proporción de componentes solo por especificación de todo el set.',
    },
    {
      q: '¿Está aprobado Bioregulator Urogenital para uso terapéutico o consumo humano?',
      a: 'No. Bioregulator Urogenital se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ninguno de los péptidos componentes cuenta con una indicación aprobada en Estados Unidos.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Bioregulator Urogenital al por mayor?',
      a: 'La cantidad mínima de pedido es un panel completo de 3 viales de 20 mg cada uno. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios por contrato que ejecutan paneles de cultivo tisular organotípico, y marcas de distribución. Hay disponibilidad multipanel y de set completo para socios calificados. No atendemos consultas minoristas ni de vial individual.',
    },
    {
      q: '¿En qué forma física se suministra Bioregulator Urogenital al por mayor?',
      a: 'Bioregulator Urogenital se suministra como tres viales etiquetados individualmente de polvo liofilizado, 20 mg por vial, cada uno sellado al vacío bajo nitrógeno y marcado con compuesto, concentración y lote. Ninguno viene premezclado. La trazabilidad por etiqueta pesa más en este panel que en la mayoría, porque dos de los tres componentes no pueden cotejarse contra una referencia pública externa y la etiqueta más el certificado son el único registro de identidad del que dispone el laboratorio receptor.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Bioregulator Urogenital?',
      a: 'Almacene el panel sellado a -20°C (-4°F) para estabilidad a largo plazo, donde los viales liofilizados se mantienen dentro de especificación hasta 36 meses. El almacenamiento a corto plazo entre 2°C y 8°C (36°F a 46°F) es aceptable. Una vez reconstituido en diluyente estéril, use el material en 14 días entre 2°C y 8°C. Estos péptidos ultracortos son más propensos a la hidrólisis en solución que las cadenas largas porque una fracción mayor de la molécula es esqueleto expuesto, así que reconstituya solo lo que consuma el experimento.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Bioregulator Urogenital?',
      a: 'Este panel agrupa los tres bioreguladores que la literatura sitúa junto a tejido urogenital: Prostamax con próstata, Testagen con testículo y Vesilute con vejiga. Prostamax es el tetrapéptido Lys-Glu-Asp-Pro y con unos 488 Da es el péptido mayor de toda la familia bioreguladora, lo que aun así lo deja muy por debajo del tamaño que activaría cualquier receptor acoplado a proteínas G. Los tres actúan por el mecanismo de familia y no por unión a receptor: la investigación describe la entrada de péptidos ultracortos a las células por transportadores de aminoácidos y de péptidos y su influencia posterior sobre la transcripción. Chalisova y colaboradores trabajaron en cultivo tisular organotípico, el formato de modelo que usa este tipo de comparación tisular.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Bioregulator Urogenital al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas de vial, réplicas adicionales de un solo componente, presentación sin marca o de marca privada, o otros paneles bioreguladores del mismo rango, como el set Hepatic / Digestive. Contacte a nuestra mesa de ventas corporativas con su composición objetivo y número de paneles para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Bioregulator Urogenital al por mayor para preservar la integridad del compuesto?',
      a: 'Los paneles se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío en rango congelado o refrigerado durante el tránsito. Cada vial conserva su etiqueta de identidad individual dentro de la bandeja del kit, de modo que la trazabilidad por componente sobrevive a la manipulación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Los laboratorios de tejido reproductivo y los grupos de cultivo organotípico son los principales usuarios de este panel, y el formato del modelo importa aquí más que los compuestos individuales. Chalisova y colaboradores trabajaron con cultivos tisulares organotípicos en el grupo de Khavinson, y ese formato — tejido explantado mantenido en cultivo en lugar de una línea celular disociada — es lo que permite que una comparación tisular signifique algo, ya que las asociaciones reportadas con próstata, testículo y vejiga son propiedades del contexto tisular y no de un receptor que una monocapa expresaría. Junto a eso corresponde una precaución: dos de los tres componentes no tienen literatura primaria indexada ni registro público de compuesto bajo sus nombres, de modo que la caracterización independiente es el primer paso honesto y no un extra opcional.',
    qualityAssurance:
      'La certificación aquí es más desigual que en cualquier otro panel bioregulador, y declararlo resulta más útil que suavizarlo. Prostamax resuelve a un registro público, de modo que su masa observada cercana a 488 Da se coteja contra una referencia externa. Testagen y Vesilute no tienen tales registros bajo sus nombres comerciales, por lo que ambos se certifican contra especificación del fabricante con la masa observada reportada y sin verificación cruzada externa disponible. Los tres eluyen temprano y muy juntos en fase reversa, de modo que la retención aporta poco a la discriminación. La desamidación en posiciones de glutamato y aspartato y las secuencias truncadas son los cribados rutinarios en los tres viales.',
  },
};

const ADVANCED_NOOTROPIC_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Advanced Nootropic?',
      a: 'Each of the four vials is released against its own HPLC chromatogram at ≥99.0% area purity, with LC-MS confirming the acetylated N-terminus on both Semax Acetyl and Selank Acetyl — the modification that distinguishes them from the unacetylated parent peptides also sold in this category. Dihexa is released as a small molecule assay rather than a peptide map. P-21 is released on HPLC purity and identity only; no reference standard is publicly indexed for it.',
    },
    {
      q: 'Is Advanced Nootropic approved for therapeutic use or human consumption?',
      a: 'No. Advanced Nootropic is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. No component of the kit is supplied under any therapeutic indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Advanced Nootropic?',
      a: 'The minimum order quantity is one complete kit of 4 vials — Semax Acetyl 30 mg, Selank Acetyl 10 mg, Dihexa 5 mg, P-21 5 mg. 99 Purity Wholesale supplies bulk quantities to research institutions, neuroscience laboratories, and distribution brands. Multi-kit and mixed-configuration procurement is available for qualified partners. We do not fulfill retail or single-vial inquiries.',
    },
    {
      q: 'What physical form is wholesale Advanced Nootropic supplied in?',
      a: 'Four separately labelled amber vials of white to off-white lyophilized powder, presented in a single tray. The Semax vial is the largest fill at 30 mg; Dihexa and P-21 are 5 mg each and will look like a barely visible film at the vial base, which is normal for a low-fill lyophilizate and not a short-fill. Dihexa is the only component that is not a peptide chain — it is a small-molecule angiotensin IV derivative and reconstitutes differently.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Advanced Nootropic?',
      a: 'Store the sealed tray at -20°C (-4°F) for long-term stability, up to 36 months for the lyophilized vials. Short-term holding at 2°C to 8°C (36°F to 46°F) is acceptable. Reconstituted material should be used within 14 days at 2°C to 8°C. Semax and Selank both terminate in a Pro-Gly-Pro tail that resists exopeptidase trimming, which is what makes them unusually stable in solution compared with unmodified short peptides — but that stability does not extend to freeze-thaw, so aliquot rather than re-freeze.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Advanced Nootropic?',
      a: 'The four components do not share a target. Semax is an ACTH(4-10) fragment analog; a 2025 British Journal of Pharmacology report identified the mu opioid receptor gene Oprm1 as a target through which it drives deubiquitination in a rodent spinal cord injury model. Selank is a tuftsin (Thr-Lys-Pro-Arg) analog studied against GABAergic and cytokine endpoints. Dihexa is an angiotensin IV derivative investigated as an HGF/c-Met potentiator. P-21 has no indexed mechanistic literature at all — investigators should treat it as an uncharacterized entity, not an established one.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Advanced Nootropic?',
      a: 'Yes. Qualified procurement partners can request alternative vial strengths, additional replicates of a single component, unlabeled or private-label presentation, or a Semax-only or Selank-only replicate set. Contact our corporate sales desk with your target composition and kit count to scope the run.',
    },
    {
      q: 'How is wholesale Advanced Nootropic packaged and shipped to preserve compound integrity?',
      a: 'Kits ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers holding the shipment in the frozen or refrigerated range through transit. Each vial retains its individual identity label inside the tray so component traceability survives handling. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Advanced Nootropic assembles four compounds that reach cognitive research from four unrelated chemical lineages, which is the reason to buy them as a set rather than singly. Semax descends from adrenocorticotropic hormone, Selank from the immune tetrapeptide tuftsin, Dihexa from angiotensin IV, and P-21 from a synthetic series with no published parentage. Both Semax and Selank in this panel are the acetylated presentations, so any comparison against unacetylated stock in the same laboratory is a comparison of two different molecules. The 30 mg Semax fill is deliberately six times the Dihexa fill because Semax is the component with the broadest published dose-ranging literature and the one most likely to be consumed across replicate arms.',
    qualityAssurance:
      'Two disclosures belong on this panel. First, the two papers that founded the Dihexa HGF/c-Met literature — Kawas 2012 and Benoist 2014 — were retracted by the Journal of Pharmacology and Experimental Therapeutics in 2025. The surviving Dihexa evidence base is thinner than product pages elsewhere imply, and our citations below deliberately exclude the retracted work. Second, P-21 has no PubChem record and no indexed primary literature; we release it on HPLC purity and identity but cannot point to an external reference standard, and we will not manufacture one in marketing copy. Every vial ships with a batch-specific certificate of analysis showing the actual chromatogram, and residual solvent plus water content are reported per component rather than as a panel average.',
  },
};

const ADVANCED_NOOTROPIC_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Advanced Nootropic al por mayor?',
      a: 'Cada uno de los cuatro viales se libera contra su propio cromatograma HPLC con ≥99.0% de pureza por área, y LC-MS confirma el extremo N-terminal acetilado tanto en Semax Acetyl como en Selank Acetyl — la modificación que los distingue de los péptidos parentales sin acetilar también disponibles en esta categoría. Dihexa se libera como ensayo de molécula pequeña en lugar de mapeo peptídico. P-21 se libera únicamente por pureza HPLC e identidad; no existe un estándar de referencia indexado públicamente.',
    },
    {
      q: '¿Está aprobado Advanced Nootropic para uso terapéutico o consumo humano?',
      a: 'No. Advanced Nootropic se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ningún componente del kit se suministra con indicación terapéutica alguna.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Advanced Nootropic al por mayor?',
      a: 'La cantidad mínima de pedido es un kit completo de 4 viales — Semax Acetyl 30 mg, Selank Acetyl 10 mg, Dihexa 5 mg, P-21 5 mg. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios de neurociencia, y marcas de distribución. Hay disponibilidad de múltiples kits y de configuraciones mixtas para socios calificados. No atendemos consultas minoristas ni de vial individual.',
    },
    {
      q: '¿En qué forma física se suministra Advanced Nootropic al por mayor?',
      a: 'Cuatro viales ámbar etiquetados por separado con polvo liofilizado blanco a blanquecino, presentados en una sola bandeja. El vial de Semax es el de mayor llenado con 30 mg; Dihexa y P-21 son de 5 mg cada uno y se verán como una película apenas visible en la base del vial, lo cual es normal en un liofilizado de bajo llenado y no indica llenado incompleto. Dihexa es el único componente que no es una cadena peptídica — es un derivado de angiotensina IV de molécula pequeña y se reconstituye de forma distinta.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Advanced Nootropic?',
      a: 'Almacene la bandeja sellada a -20°C (-4°F) para estabilidad a largo plazo, hasta 36 meses para los viales liofilizados. El almacenamiento breve entre 2°C y 8°C (36°F a 46°F) es aceptable. El material reconstituido debe usarse en 14 días entre 2°C y 8°C. Semax y Selank terminan ambos en una cola Pro-Gly-Pro que resiste el recorte por exopeptidasas, lo que los hace inusualmente estables en solución frente a péptidos cortos sin modificar — pero esa estabilidad no se extiende a los ciclos de congelación, así que fraccione en alícuotas en lugar de recongelar.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Advanced Nootropic?',
      a: 'Los cuatro componentes no comparten diana. Semax es un análogo del fragmento ACTH(4-10); un informe de 2025 en British Journal of Pharmacology identificó el gen del receptor opioide mu, Oprm1, como diana por la cual impulsa la desubiquitinación en un modelo roedor de lesión medular. Selank es un análogo de tuftsina (Thr-Lys-Pro-Arg) estudiado frente a variables GABAérgicas y de citoquinas. Dihexa es un derivado de angiotensina IV investigado como potenciador de HGF/c-Met. P-21 carece por completo de literatura mecanicista indexada — los investigadores deben tratarlo como una entidad no caracterizada, no como una establecida.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Advanced Nootropic al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas de vial, réplicas adicionales de un solo componente, presentación sin marca o de marca privada, o un conjunto replicado solo de Semax o solo de Selank. Contacte a nuestra mesa de ventas corporativas con su composición objetivo y número de kits para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Advanced Nootropic al por mayor para preservar la integridad del compuesto?',
      a: 'Los kits se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío en rango congelado o refrigerado durante el tránsito. Cada vial conserva su etiqueta de identidad individual dentro de la bandeja, de modo que la trazabilidad por componente sobrevive a la manipulación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Advanced Nootropic reúne cuatro compuestos que llegan a la investigación cognitiva desde cuatro linajes químicos no relacionados, lo cual es la razón para adquirirlos como conjunto y no por separado. Semax desciende de la hormona adrenocorticotrópica, Selank del tetrapéptido inmunitario tuftsina, Dihexa de la angiotensina IV, y P-21 de una serie sintética sin linaje publicado. Tanto Semax como Selank en este panel son las presentaciones aceti-ladas, de modo que cualquier comparación frente a existencias sin acetilar en el mismo laboratorio compara dos moléculas distintas. El llenado de 30 mg de Semax es deliberadamente seis veces el de Dihexa porque Semax es el componente con la literatura de rango de dosis más amplia y el más probable de consumirse en brazos replicados.',
    qualityAssurance:
      'Dos advertencias corresponden a este panel. Primero, los dos artículos que fundaron la literatura de Dihexa sobre HGF/c-Met — Kawas 2012 y Benoist 2014 — fueron retractados por el Journal of Pharmacology and Experimental Therapeutics en 2025. La base de evidencia sobreviviente de Dihexa es más delgada de lo que sugieren otras páginas de producto, y nuestras citas a continuación excluyen deliberadamente el trabajo retractado. Segundo, P-21 no tiene registro en PubChem ni literatura primaria indexada; lo liberamos por pureza HPLC e identidad pero no podemos señalar un estándar de referencia externo, y no fabricaremos uno en el texto comercial. Cada vial se envía con un certificado de análisis específico del lote que muestra el cromatograma real, y el solvente residual y el contenido de agua se reportan por componente y no como promedio del panel.',
  },
};

const ADVANCED_REPAIR_IMMUNE_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Advanced Repair & Immune?',
      a: 'All four vials are released at ≥99.0% HPLC area purity with LC-MS mass confirmation. LL-37 receives the most scrutiny of the four: at 37 residues it is by far the longest chain here and the most prone to deletion sequences, so its release includes a full mass-map rather than intact mass alone. KPV, at three residues, sits at the opposite extreme and is confirmed against a synthetic reference standard. Each vial carries its own certificate of analysis.',
    },
    {
      q: 'Is Advanced Repair & Immune approved for therapeutic use or human consumption?',
      a: 'No. Advanced Repair & Immune is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. No component of the kit is supplied under any therapeutic indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Advanced Repair & Immune?',
      a: 'The minimum order quantity is one complete kit of 4 vials — BPC-157 10 mg, TB-500 10 mg, KPV 10 mg, LL-37 5 mg. 99 Purity Wholesale supplies bulk quantities to research institutions, tissue repair and innate immunity laboratories, and distribution brands. Multi-kit and mixed-configuration procurement is available for qualified partners. We do not fulfill retail or single-vial inquiries.',
    },
    {
      q: 'What physical form is wholesale Advanced Repair & Immune supplied in?',
      a: 'Four separately labelled vials of lyophilized powder. Note the strength asymmetry: BPC-157, TB-500 and KPV are each 10 mg while LL-37 is 5 mg, because LL-37 is roughly thirteen times the molecular weight of KPV and a 10 mg fill would represent a far smaller molar quantity than the label suggests. Reading this panel by milligram alone will mislead; the tray is balanced on chain length, not on mass.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Advanced Repair & Immune?',
      a: 'Store the sealed tray at -20°C (-4°F) for up to 36 months. Short-term holding at 2°C to 8°C (36°F to 46°F) is acceptable. Reconstituted material should be used within 14 days at 2°C to 8°C, with one exception worth planning around: LL-37 is a cationic amphipathic helix that adsorbs to ordinary polypropylene surfaces, so low-bind labware and a shorter working window are advisable for that vial specifically. KPV, being a tripeptide, is the most hydrolysis-tolerant of the four.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Advanced Repair & Immune?',
      a: 'The panel splits cleanly into two mechanistic halves. BPC-157 and TB-500 are the structural pair: TB-500 works through actin sequestration, a physically defined interaction, while BPC-157 has no confirmed receptor and its literature is framed around nitric oxide and angiogenic signaling. KPV and LL-37 are the immune pair: KPV is the C-terminal tripeptide of alpha-MSH and is studied as an NF-kappa-B pathway modulator, while LL-37 is the only component here that is a full-length natural human gene product, cleaved from the CAMP-encoded cathelicidin precursor.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Advanced Repair & Immune?',
      a: 'Yes. Qualified procurement partners can request alternative vial strengths, additional replicates of a single component, unlabeled or private-label presentation, or matched BPC-157 and TB-500 replicates without the immune pair. Contact our corporate sales desk with your target composition and kit count to scope the run.',
    },
    {
      q: 'How is wholesale Advanced Repair & Immune packaged and shipped to preserve compound integrity?',
      a: 'Kits ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers holding the shipment in the frozen or refrigerated range through transit. Each vial retains its individual identity label inside the tray so component traceability survives handling. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Advanced Repair & Immune is the elevated-strength presentation of the repair category: 10 mg fills on BPC-157, TB-500 and KPV rather than the 5 mg fills common to entry panels, which matters when a study design calls for replicate arms rather than a single pass. The pairing logic is that structural repair and innate immune signaling are usually studied on separate benches even though tissue models express both, and this tray lets one laboratory run both halves on the same lot. LL-37 is the component that changes the character of the panel — it is a genuine host defence peptide with direct membrane activity, which means assays containing it must control for lytic effects that the other three do not produce.',
    qualityAssurance:
      'The honest position on this panel concerns BPC-157. Despite an extensive publication record, no receptor has been identified for it and the great majority of that record originates from a single research group; investigators should weight it accordingly rather than treating volume of papers as independent confirmation. TB-500 raises a separate labelling point — the material supplied is the Ac-LKKTETQ fragment of thymosin beta-4, not full-length thymosin beta-4, and citations drawn from full-length protein studies do not transfer directly. Both facts are stated here rather than buried. Every vial ships with a batch-specific certificate of analysis, and endotoxin is reported per vial because LL-37 assays are particularly sensitive to it.',
  },
};

const ADVANCED_REPAIR_IMMUNE_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Advanced Repair & Immune al por mayor?',
      a: 'Los cuatro viales se liberan con ≥99.0% de pureza por área HPLC y confirmación de masa por LC-MS. LL-37 recibe el mayor escrutinio de los cuatro: con 37 residuos es con diferencia la cadena más larga y la más propensa a secuencias con deleciones, por lo que su liberación incluye un mapa de masas completo y no solo la masa intacta. KPV, con tres residuos, ocupa el extremo opuesto y se confirma contra un estándar de referencia sintético. Cada vial lleva su propio certificado de análisis.',
    },
    {
      q: '¿Está aprobado Advanced Repair & Immune para uso terapéutico o consumo humano?',
      a: 'No. Advanced Repair & Immune se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ningún componente del kit se suministra con indicación terapéutica alguna.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Advanced Repair & Immune al por mayor?',
      a: 'La cantidad mínima de pedido es un kit completo de 4 viales — BPC-157 10 mg, TB-500 10 mg, KPV 10 mg, LL-37 5 mg. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios de reparación tisular e inmunidad innata, y marcas de distribución. Hay disponibilidad de múltiples kits y de configuraciones mixtas para socios calificados. No atendemos consultas minoristas ni de vial individual.',
    },
    {
      q: '¿En qué forma física se suministra Advanced Repair & Immune al por mayor?',
      a: 'Cuatro viales etiquetados por separado con polvo liofilizado. Observe la asimetría de concentración: BPC-157, TB-500 y KPV son de 10 mg cada uno mientras que LL-37 es de 5 mg, porque LL-37 pesa aproximadamente trece veces más que KPV y un llenado de 10 mg representaría una cantidad molar mucho menor de lo que sugiere la etiqueta. Leer este panel solo por miligramos induce a error; la bandeja está equilibrada por longitud de cadena, no por masa.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Advanced Repair & Immune?',
      a: 'Almacene la bandeja sellada a -20°C (-4°F) hasta 36 meses. El almacenamiento breve entre 2°C y 8°C (36°F a 46°F) es aceptable. El material reconstituido debe usarse en 14 días entre 2°C y 8°C, con una excepción que conviene prever: LL-37 es una hélice anfipática catiónica que se adsorbe a superficies de polipropileno común, por lo que se recomienda material de baja unión y una ventana de trabajo más corta para ese vial en particular. KPV, al ser un tripéptido, es el más tolerante a la hidrólisis de los cuatro.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Advanced Repair & Immune?',
      a: 'El panel se divide limpiamente en dos mitades mecanísticas. BPC-157 y TB-500 son el par estructural: TB-500 actúa por secuestro de actina, una interacción físicamente definida, mientras que BPC-157 carece de receptor confirmado y su literatura se enmarca en señalización de óxido nítrico y angiogénesis. KPV y LL-37 son el par inmunitario: KPV es el tripéptido C-terminal de la alfa-MSH y se estudia como modulador de la vía NF-kappa-B, mientras que LL-37 es el único componente aquí que es un producto génico humano natural de longitud completa, escindido del precursor catelicidina codificado por CAMP.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Advanced Repair & Immune al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas de vial, réplicas adicionales de un solo componente, presentación sin marca o de marca privada, o réplicas emparejadas de BPC-157 y TB-500 sin el par inmunitario. Contacte a nuestra mesa de ventas corporativas con su composición objetivo y número de kits para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Advanced Repair & Immune al por mayor para preservar la integridad del compuesto?',
      a: 'Los kits se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío en rango congelado o refrigerado durante el tránsito. Cada vial conserva su etiqueta de identidad individual dentro de la bandeja, de modo que la trazabilidad por componente sobrevive a la manipulación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Advanced Repair & Immune es la presentación de alta concentración de la categoría de reparación: llenados de 10 mg en BPC-157, TB-500 y KPV en lugar de los 5 mg habituales en paneles de entrada, lo que importa cuando el diseño del estudio requiere brazos replicados y no una sola pasada. La lógica del emparejamiento es que la reparación estructural y la señalización inmunitaria innata suelen estudiarse en mesas separadas aunque los modelos tisulares expresen ambas, y esta bandeja permite que un solo laboratorio ejecute las dos mitades sobre el mismo lote. LL-37 es el componente que cambia el carácter del panel — es un auténtico péptido de defensa del hospedador con actividad directa sobre membranas, lo que obliga a controlar efectos líticos que los otros tres no producen.',
    qualityAssurance:
      'La posición honesta sobre este panel concierne a BPC-157. Pese a un extenso registro de publicaciones, no se ha identificado receptor alguno y la gran mayoría de ese registro proviene de un solo grupo de investigación; los investigadores deben ponderarlo en consecuencia en vez de tratar el volumen de artículos como confirmación independiente. TB-500 plantea una cuestión de etiquetado aparte — el material suministrado es el fragmento Ac-LKKTETQ de la timosina beta-4, no la timosina beta-4 de longitud completa, y las citas tomadas de estudios de la proteína completa no se transfieren directamente. Ambos hechos se declaran aquí en vez de ocultarse. Cada vial se envía con certificado de análisis específico del lote, y la endotoxina se reporta por vial porque los ensayos con LL-37 son particularmente sensibles a ella.',
  },
};

const BODY_COMPOSITION_KIT_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Body Composition Kit?',
      a: 'Each vial is released at ≥99.0% HPLC area purity with LC-MS identity confirmation. Tesamorelin receives peptide mapping rather than intact mass alone, because at 44 residues carrying an N-terminal trans-3-hexenoyl group it is the component where synthesis errors are most likely and least visible. AOD9604 is checked specifically for the tyrosine at position one — the single substitution that separates it from the unmodified growth hormone 176-191 fragment and shifts the mass by exactly 16 daltons.',
    },
    {
      q: 'Is Body Composition Kit approved for therapeutic use or human consumption?',
      a: 'No. Body Composition Kit is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. No component of the kit is supplied under any therapeutic indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Body Composition Kit?',
      a: 'The minimum order quantity is one complete kit of 3 vials — Tesamorelin 10 mg, Ipamorelin 5 mg, AOD9604 5 mg. 99 Purity Wholesale supplies bulk quantities to research institutions, metabolic and endocrine research laboratories, and distribution brands. Multi-kit and mixed-configuration procurement is available for qualified partners. We do not fulfill retail or single-vial inquiries.',
    },
    {
      q: 'What physical form is wholesale Body Composition Kit supplied in?',
      a: 'Three separately labelled vials of white lyophilized powder in one tray. The three span an unusually wide molecular size range for a three-vial kit — Ipamorelin is a pentapeptide near 712 daltons, AOD9604 is a 16-residue fragment near 1815 daltons, and Tesamorelin is a 44-residue analog above 5100 daltons, roughly a sevenfold spread. Reconstitution volumes calculated for one will not translate to the others on a molar basis.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Body Composition Kit?',
      a: 'Store the sealed tray at -20°C (-4°F) for up to 36 months. Short-term holding at 2°C to 8°C (36°F to 46°F) is acceptable, and reconstituted material should be used within 14 days at 2°C to 8°C. Tesamorelin is the component most sensitive to handling: long GHRH-family chains are prone to aggregation on agitation, so reconstitute by directing diluent down the vial wall and swirling rather than shaking. AOD9604 contains two cysteines forming a disulfide loop that reducing conditions will open.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Body Composition Kit?',
      a: 'Two of the three components act upstream and one acts downstream, which is the design of the kit. Tesamorelin engages the GHRH receptor, a class B G protein-coupled receptor, while Ipamorelin engages the ghrelin receptor GHS-R1a, a class A receptor with entirely different architecture — two different receptor superfamilies converging on the same secretory cell. AOD9604 does not act on either. It is a fragment of the growth hormone molecule itself, studied for lipolytic activity in adipose tissue independent of the growth hormone receptor, including in beta-3 adrenergic receptor knockout models.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Body Composition Kit?',
      a: 'Yes. Qualified procurement partners can request alternative vial strengths, additional replicates of a single component, unlabeled or private-label presentation, or a Tesamorelin-heavy configuration for extended dose-ranging. Contact our corporate sales desk with your target composition and kit count to scope the run.',
    },
    {
      q: 'How is wholesale Body Composition Kit packaged and shipped to preserve compound integrity?',
      a: 'Kits ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers holding the shipment in the frozen or refrigerated range through transit. Each vial retains its individual identity label inside the tray so component traceability survives handling. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Body Composition Kit is built around a specific experimental question: whether a lipolytic fragment behaves differently in the presence of secretagogue-driven signaling than on its own. The two secretagogues in the tray reach the same pituitary cell through unrelated receptor superfamilies, and AOD9604 bypasses the pituitary entirely, acting at adipose tissue. That gives a laboratory three arms and a combination arm from one tray without sourcing across suppliers. Tesamorelin is fills at double the other two at 10 mg because it is the only component with a defined regulatory history — it was approved as Egrifta, which means published comparator data exists at known concentrations and study designs tend to consume more of it.',
    qualityAssurance:
      'One naming hazard is worth stating plainly. AOD9604 and the unmodified human growth hormone 176-191 fragment are frequently sold interchangeably, and they are not the same molecule: AOD9604 carries a tyrosine substitution at position one, giving C78H123N23O23S2 near 1815 daltons against C78H123N23O22S2 near 1799 daltons for the unmodified fragment — exactly one oxygen apart. A 16 dalton difference is invisible on a purity chromatogram and obvious on a mass spectrum, which is why we release this component on LC-MS and report the observed mass on the certificate. Tesamorelin and Ipamorelin are released with peptide mapping and intact mass respectively, and each vial ships with its own batch-specific certificate of analysis.',
  },
};

const BODY_COMPOSITION_KIT_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Body Composition Kit al por mayor?',
      a: 'Cada vial se libera con ≥99.0% de pureza por área HPLC y confirmación de identidad por LC-MS. La tesamorelina recibe mapeo peptídico y no solo masa intacta, porque con 44 residuos y un grupo trans-3-hexenoilo N-terminal es el componente donde los errores de síntesis son más probables y menos visibles. AOD9604 se verifica específicamente por la tirosina en posición uno — la única sustitución que lo separa del fragmento 176-191 sin modificar de la hormona del crecimiento y que desplaza la masa exactamente 16 daltons.',
    },
    {
      q: '¿Está aprobado Body Composition Kit para uso terapéutico o consumo humano?',
      a: 'No. Body Composition Kit se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ningún componente del kit se suministra con indicación terapéutica alguna.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Body Composition Kit al por mayor?',
      a: 'La cantidad mínima de pedido es un kit completo de 3 viales — tesamorelina 10 mg, ipamorelina 5 mg, AOD9604 5 mg. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios de investigación metabólica y endocrina, y marcas de distribución. Hay disponibilidad de múltiples kits y de configuraciones mixtas para socios calificados. No atendemos consultas minoristas ni de vial individual.',
    },
    {
      q: '¿En qué forma física se suministra Body Composition Kit al por mayor?',
      a: 'Tres viales etiquetados por separado con polvo liofilizado blanco en una sola bandeja. Los tres abarcan un rango de tamaño molecular inusualmente amplio para un kit de tres viales — la ipamorelina es un pentapéptido cercano a 712 daltons, AOD9604 es un fragmento de 16 residuos cercano a 1815 daltons, y la tesamorelina es un análogo de 44 residuos por encima de 5100 daltons, aproximadamente siete veces de diferencia. Los volúmenes de reconstitución calculados para uno no se trasladan a los otros en base molar.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Body Composition Kit?',
      a: 'Almacene la bandeja sellada a -20°C (-4°F) hasta 36 meses. El almacenamiento breve entre 2°C y 8°C (36°F a 46°F) es aceptable, y el material reconstituido debe usarse en 14 días entre 2°C y 8°C. La tesamorelina es el componente más sensible a la manipulación: las cadenas largas de la familia GHRH tienden a agregarse con la agitación, así que reconstituya dirigiendo el diluyente por la pared del vial y girando suavemente en lugar de agitar. AOD9604 contiene dos cisteínas que forman un bucle disulfuro que las condiciones reductoras abrirán.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Body Composition Kit?',
      a: 'Dos de los tres componentes actúan corriente arriba y uno corriente abajo, y ese es el diseño del kit. La tesamorelina activa el receptor de GHRH, un receptor acoplado a proteína G de clase B, mientras que la ipamorelina activa el receptor de grelina GHS-R1a, de clase A y arquitectura completamente distinta — dos superfamilias de receptores que convergen en la misma célula secretora. AOD9604 no actúa sobre ninguno de los dos. Es un fragmento de la propia molécula de hormona del crecimiento, estudiado por actividad lipolítica en tejido adiposo independiente del receptor de hormona del crecimiento, incluso en modelos con supresión del receptor adrenérgico beta-3.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Body Composition Kit al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas de vial, réplicas adicionales de un solo componente, presentación sin marca o de marca privada, o una configuración con predominio de tesamorelina para rango de dosis extendido. Contacte a nuestra mesa de ventas corporativas con su composición objetivo y número de kits para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Body Composition Kit al por mayor para preservar la integridad del compuesto?',
      a: 'Los kits se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío en rango congelado o refrigerado durante el tránsito. Cada vial conserva su etiqueta de identidad individual dentro de la bandeja, de modo que la trazabilidad por componente sobrevive a la manipulación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Body Composition Kit se construye alrededor de una pregunta experimental concreta: si un fragmento lipolítico se comporta de manera distinta en presencia de señalización impulsada por secretagogos que por sí solo. Los dos secretagogos de la bandeja alcanzan la misma célula hipofisaria por superfamilias de receptores no relacionadas, y AOD9604 elude la hipófisis por completo, actuando en el tejido adiposo. Eso da a un laboratorio tres brazos y un brazo de combinación desde una sola bandeja sin abastecerse en varios proveedores. La tesamorelina se llena al doble que los otros dos con 10 mg porque es el único componente con historia regulatoria definida — fue aprobada como Egrifta, lo que significa que existen datos comparadores publicados a concentraciones conocidas y los diseños de estudio tienden a consumir más de ella.',
    qualityAssurance:
      'Un riesgo de nomenclatura merece declararse con claridad. AOD9604 y el fragmento 176-191 sin modificar de la hormona del crecimiento humana se venden con frecuencia de forma intercambiable, y no son la misma molécula: AOD9604 lleva una sustitución de tirosina en la posición uno, dando C78H123N23O23S2 cerca de 1815 daltons frente a C78H123N23O22S2 cerca de 1799 daltons del fragmento sin modificar — exactamente un oxígeno de diferencia. Una diferencia de 16 daltons es invisible en un cromatograma de pureza y evidente en un espectro de masas, por eso liberamos este componente por LC-MS y reportamos la masa observada en el certificado. Tesamorelina e ipamorelina se liberan con mapeo peptídico y masa intacta respectivamente, y cada vial se envía con su propio certificado de análisis específico del lote.',
  },
};

const CLASSIC_SECRETAGOGUE_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Classic Secretagogue?',
      a: 'Both vials are released at ≥99.0% HPLC area purity with LC-MS identity confirmation. Sermorelin, at 29 residues, receives peptide mapping because deletion sequences in a chain that length co-elute closely with the target. GHRP-2 is a synthetic hexapeptide containing D-amino acids and 2-naphthylalanine, so its release includes a chiral check — an L-form impurity would pass a standard purity assay while being a different compound entirely.',
    },
    {
      q: 'Is Classic Secretagogue approved for therapeutic use or human consumption?',
      a: 'No. Classic Secretagogue is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. No component of the kit is supplied under any therapeutic indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Classic Secretagogue?',
      a: 'The minimum order quantity is one complete kit of 2 vials — Sermorelin 5 mg and GHRP-2 5 mg. 99 Purity Wholesale supplies bulk quantities to research institutions, endocrine research laboratories, and distribution brands. Multi-kit and mixed-configuration procurement is available for qualified partners. We do not fulfill retail or single-vial inquiries.',
    },
    {
      q: 'What physical form is wholesale Classic Secretagogue supplied in?',
      a: 'Two separately labelled vials of white lyophilized powder at 5 mg each. This is the smallest panel in the bundle range and the only two-vial kit whose components are both first-generation compounds. Sermorelin is a 29-residue chain near 3358 daltons; GHRP-2 is a hexapeptide near 818 daltons, a fourfold difference despite the matched milligram fills.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Classic Secretagogue?',
      a: 'Store the sealed tray at -20°C (-4°F) for up to 36 months, with short-term holding at 2°C to 8°C (36°F to 46°F) acceptable. Reconstituted material should be used within 14 days at 2°C to 8°C. Sermorelin is the shorter-lived of the two in solution because it terminates in a free amide on an unmodified natural sequence with no protective substitutions — the very property that later analogs such as CJC-1295 and Tesamorelin were designed to correct.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Classic Secretagogue?',
      a: 'Sermorelin is GHRH(1-29) amide — the shortest fragment of human growth hormone releasing hormone that retains full activity at the class B GHRH receptor, and an unmodified natural sequence rather than an engineered analog. GHRP-2 acts at the ghrelin receptor GHS-R1a, the receptor identified in 1996 before its endogenous ligand was known, and it was characterised during the era when growth hormone releasing peptides were being mapped by Bowers and colleagues. Neither compound carries the half-life extending modifications that define the later generation.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Classic Secretagogue?',
      a: 'Yes. Qualified procurement partners can request alternative vial strengths, additional replicates of a single component, unlabeled or private-label presentation, or additional Sermorelin replicates without the GHRP-2 vial. Contact our corporate sales desk with your target composition and kit count to scope the run.',
    },
    {
      q: 'How is wholesale Classic Secretagogue packaged and shipped to preserve compound integrity?',
      a: 'Kits ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers holding the shipment in the frozen or refrigerated range through transit. Each vial retains its individual identity label inside the tray so component traceability survives handling. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Classic Secretagogue exists as a reference arm. Sermorelin and GHRP-2 are the compounds against which the later CJC-1295 and Ipamorelin pairing was developed, and a laboratory comparing generations needs both eras on the same bench with the same purity release. Sermorelin\'s history is genuinely unusual for a research peptide: it held United States approval as Geref and was withdrawn from that market in 2008 for commercial rather than safety reasons, which means an unusually complete pharmacology dossier exists in the public record. GHRP-2 sits in the opposite position — it never reached approval and is best known today as an anti-doping detection target, with published dried blood spot methods developed specifically to find it.',
    qualityAssurance:
      'Sourcing note that matters for this panel: Sermorelin is widely offered as \'sermorelin acetate\' and the acetate is a counter-ion from purification, not part of the molecule. Acetate content is variable between manufacturers and it is real mass in the vial, which means two 5 mg vials from two suppliers can contain measurably different peptide quantities. We report net peptide content alongside gross fill on the certificate of analysis so molar calculations start from the right number. GHRP-2 is released with a chiral purity check because its D-amino acid and 2-naphthylalanine residues are the identity of the compound, and an epimerised batch is a different molecule with the same retention profile.',
  },
};

const CLASSIC_SECRETAGOGUE_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Classic Secretagogue al por mayor?',
      a: 'Ambos viales se liberan con ≥99.0% de pureza por área HPLC y confirmación de identidad por LC-MS. La sermorelina, con 29 residuos, recibe mapeo peptídico porque las secuencias con deleciones en una cadena de esa longitud coeluyen muy cerca del objetivo. GHRP-2 es un hexapéptido sintético que contiene aminoácidos D y 2-naftilalanina, por lo que su liberación incluye una verificación quiral — una impureza en forma L pasaría un ensayo de pureza estándar siendo un compuesto completamente distinto.',
    },
    {
      q: '¿Está aprobado Classic Secretagogue para uso terapéutico o consumo humano?',
      a: 'No. Classic Secretagogue se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ningún componente del kit se suministra con indicación terapéutica alguna.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Classic Secretagogue al por mayor?',
      a: 'La cantidad mínima de pedido es un kit completo de 2 viales — sermorelina 5 mg y GHRP-2 5 mg. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios de investigación endocrina, y marcas de distribución. Hay disponibilidad de múltiples kits y de configuraciones mixtas para socios calificados. No atendemos consultas minoristas ni de vial individual.',
    },
    {
      q: '¿En qué forma física se suministra Classic Secretagogue al por mayor?',
      a: 'Dos viales etiquetados por separado con polvo liofilizado blanco de 5 mg cada uno. Es el panel más pequeño de la gama de kits y el único de dos viales cuyos componentes son ambos compuestos de primera generación. La sermorelina es una cadena de 29 residuos cercana a 3358 daltons; GHRP-2 es un hexapéptido cercano a 818 daltons, cuatro veces de diferencia pese a los llenados iguales en miligramos.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Classic Secretagogue?',
      a: 'Almacene la bandeja sellada a -20°C (-4°F) hasta 36 meses, siendo aceptable el almacenamiento breve entre 2°C y 8°C (36°F a 46°F). El material reconstituido debe usarse en 14 días entre 2°C y 8°C. La sermorelina es la de vida más corta en solución de las dos porque termina en una amida libre sobre una secuencia natural sin modificar y sin sustituciones protectoras — justamente la propiedad que análogos posteriores como CJC-1295 y tesamorelina se diseñaron para corregir.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Classic Secretagogue?',
      a: 'La sermorelina es GHRH(1-29) amida — el fragmento más corto de la hormona liberadora de hormona del crecimiento humana que conserva actividad completa en el receptor de GHRH de clase B, y una secuencia natural sin modificar en lugar de un análogo diseñado. GHRP-2 actúa en el receptor de grelina GHS-R1a, el receptor identificado en 1996 antes de conocerse su ligando endógeno, y se caracterizó en la época en que Bowers y colaboradores mapeaban los péptidos liberadores de hormona del crecimiento. Ninguno de los dos compuestos lleva las modificaciones de extensión de vida media que definen a la generación posterior.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Classic Secretagogue al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas de vial, réplicas adicionales de un solo componente, presentación sin marca o de marca privada, o réplicas adicionales de sermorelina sin el vial de GHRP-2. Contacte a nuestra mesa de ventas corporativas con su composición objetivo y número de kits para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Classic Secretagogue al por mayor para preservar la integridad del compuesto?',
      a: 'Los kits se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío en rango congelado o refrigerado durante el tránsito. Cada vial conserva su etiqueta de identidad individual dentro de la bandeja, de modo que la trazabilidad por componente sobrevive a la manipulación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Classic Secretagogue existe como brazo de referencia. La sermorelina y GHRP-2 son los compuestos frente a los cuales se desarrolló el par posterior de CJC-1295 e ipamorelina, y un laboratorio que compare generaciones necesita ambas épocas en la misma mesa con la misma liberación de pureza. La historia de la sermorelina es genuinamente inusual para un péptido de investigación: tuvo aprobación en Estados Unidos como Geref y fue retirada de ese mercado en 2008 por razones comerciales y no de seguridad, lo que significa que existe un expediente farmacológico inusualmente completo en el registro público. GHRP-2 ocupa la posición opuesta — nunca alcanzó aprobación y hoy se conoce sobre todo como diana de detección antidopaje, con métodos publicados de gota de sangre seca desarrollados específicamente para encontrarlo.',
    qualityAssurance:
      'Nota de abastecimiento relevante para este panel: la sermorelina se ofrece ampliamente como ‘acetato de sermorelina’ y el acetato es un contraión de la purificación, no parte de la molécula. El contenido de acetato varía entre fabricantes y es masa real dentro del vial, lo que significa que dos viales de 5 mg de dos proveedores pueden contener cantidades de péptido medible-mente distintas. Reportamos el contenido neto de péptido junto al llenado bruto en el certificado de análisis para que los cálculos molares partan de la cifra correcta. GHRP-2 se libera con verificación de pureza quiral porque sus residuos de aminoácido D y 2-naftilalanina son la identidad del compuesto, y un lote epimerizado es una molécula distinta con el mismo perfil de retención.',
  },
};

const EXTENDED_GH_IGF_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Extended GH / IGF?',
      a: 'CJC-1295 with DAC and Ipamorelin are released at ≥99.0% HPLC area purity with LC-MS identity confirmation and peptide mapping on the 30-residue CJC chain. IGF-1 LR3 is released differently and deliberately so: it is a recombinant 83-residue protein rather than a solid-phase synthesis product, so its release covers SDS-PAGE, RP-HPLC purity and correct disulfide folding. A synthetic peptide release protocol applied to a recombinant protein would confirm the wrong things.',
    },
    {
      q: 'Is Extended GH / IGF approved for therapeutic use or human consumption?',
      a: 'No. Extended GH / IGF is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. No component of the kit is supplied under any therapeutic indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Extended GH / IGF?',
      a: 'The minimum order quantity is one complete kit of 3 vials — CJC-1295 with DAC 5 mg, Ipamorelin 5 mg, IGF-1 LR3 1 mg. 99 Purity Wholesale supplies bulk quantities to research institutions, endocrine and growth factor signaling laboratories, and distribution brands. Multi-kit and mixed-configuration procurement is available for qualified partners. We do not fulfill retail or single-vial inquiries.',
    },
    {
      q: 'What physical form is wholesale Extended GH / IGF supplied in?',
      a: 'Three separately labelled vials of lyophilized powder. The IGF-1 LR3 vial is 1 mg against 5 mg for the other two, and this is not a cost decision — IGF-1 LR3 is a folded protein above 9000 daltons whose activity depends on tertiary structure, so it is supplied at the quantity a signaling assay actually consumes rather than at a matched milligram figure that would sit in the freezer degrading.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Extended GH / IGF?',
      a: 'Store the sealed tray at -20°C (-4°F). The two synthetic peptides remain within specification for up to 36 months; IGF-1 LR3 should be treated as the limiting component and held at -20°C or below with strictly no repeat freeze-thaw, since each cycle risks partial unfolding that purity assays will not detect. Reconstitute IGF-1 LR3 in weak acid rather than plain bacteriostatic water, and use reconstituted protein within a shorter window than the 14 days appropriate to the peptides.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Extended GH / IGF?',
      a: 'This panel is arranged along a signaling axis rather than around a shared target. CJC-1295 with DAC engages the GHRH receptor and carries a maleimidoproprionic acid group that forms a covalent bond with circulating albumin — the drug affinity complex that gives it its name and separates it from the no-DAC version. Ipamorelin engages the ghrelin receptor. IGF-1 LR3 sits downstream of both at the IGF-1 receptor, a receptor tyrosine kinase, and its arginine-for-glutamate substitution at position three plus a 13-residue amino-terminal extension are what reduce its binding to IGF binding proteins.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Extended GH / IGF?',
      a: 'Yes. Qualified procurement partners can request alternative vial strengths, additional replicates of a single component, unlabeled or private-label presentation, or an additional IGF-1 LR3 vial without the secretagogue pair. Contact our corporate sales desk with your target composition and kit count to scope the run.',
    },
    {
      q: 'How is wholesale Extended GH / IGF packaged and shipped to preserve compound integrity?',
      a: 'Kits ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers holding the shipment in the frozen or refrigerated range through transit. Each vial retains its individual identity label inside the tray so component traceability survives handling. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Extended GH / IGF is the only panel in this range that crosses from synthetic peptide chemistry into recombinant protein territory, and that is its defining property. CJC-1295 with DAC and Ipamorelin are made by solid-phase synthesis; IGF-1 LR3 is expressed in bacterial culture and refolded, a completely different manufacturing route with different failure modes and a different release protocol. For a laboratory studying where along the growth hormone axis an effect originates, this tray provides an upstream secretagogue pair and a downstream effector that bypasses the pituitary entirely — which means an observation seen with all three but absent with IGF-1 LR3 alone localises upstream.',
    qualityAssurance:
      'Two disclosures. First, IGF-1 LR3 has no PubChem record and no independently confirmable molecular formula — it is an 83-residue analog whose exact composition varies with the expression construct, and any supplier quoting a precise formula for it is quoting a calculation, not a measurement. We report the observed mass from our own analysis and direct investigators to verify against the manufacturer certificate of analysis. Second, CJC-1295 is sold in two forms that differ by roughly 279 daltons, with and without the drug affinity complex, and the CAS registry number 863288-34-0 circulating widely across the industry actually maps to the no-DAC molecule. The vial in this tray is the with-DAC form, CAS 446262-90-4.',
  },
};

const EXTENDED_GH_IGF_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Extended GH / IGF al por mayor?',
      a: 'CJC-1295 con DAC e ipamorelina se liberan con ≥99.0% de pureza por área HPLC, confirmación de identidad por LC-MS y mapeo peptídico en la cadena de 30 residuos de CJC. IGF-1 LR3 se libera de forma distinta y deliberadamente así: es una proteína recombinante de 83 residuos y no un producto de síntesis en fase sólida, por lo que su liberación cubre SDS-PAGE, pureza por RP-HPLC y plegamiento disulfuro correcto. Un protocolo de liberación de péptido sintético aplicado a una proteína recombinante confirmaría las cosas equivocadas.',
    },
    {
      q: '¿Está aprobado Extended GH / IGF para uso terapéutico o consumo humano?',
      a: 'No. Extended GH / IGF se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ningún componente del kit se suministra con indicación terapéutica alguna.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Extended GH / IGF al por mayor?',
      a: 'La cantidad mínima de pedido es un kit completo de 3 viales — CJC-1295 con DAC 5 mg, ipamorelina 5 mg, IGF-1 LR3 1 mg. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios de señalización endocrina y de factores de crecimiento, y marcas de distribución. Hay disponibilidad de múltiples kits y de configuraciones mixtas para socios calificados. No atendemos consultas minoristas ni de vial individual.',
    },
    {
      q: '¿En qué forma física se suministra Extended GH / IGF al por mayor?',
      a: 'Tres viales etiquetados por separado con polvo liofilizado. El vial de IGF-1 LR3 es de 1 mg frente a 5 mg de los otros dos, y no es una decisión de costo — IGF-1 LR3 es una proteína plegada de más de 9000 daltons cuya actividad depende de la estructura terciaria, así que se suministra en la cantidad que un ensayo de señalización realmente consume y no en una cifra igualada en miligramos que se degradaría en el congelador.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Extended GH / IGF?',
      a: 'Almacene la bandeja sellada a -20°C (-4°F). Los dos péptidos sintéticos permanecen dentro de especificación hasta 36 meses; IGF-1 LR3 debe tratarse como el componente limitante y mantenerse a -20°C o menos sin ningún ciclo repetido de congelación, ya que cada ciclo arriesga desplegamiento parcial que los ensayos de pureza no detectarán. Reconstituya IGF-1 LR3 en ácido débil en lugar de agua bacteriostática simple, y use la proteína reconstituida en una ventana más corta que los 14 días apropiados para los péptidos.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Extended GH / IGF?',
      a: 'Este panel se organiza a lo largo de un eje de señalización y no en torno a una diana compartida. CJC-1295 con DAC activa el receptor de GHRH y lleva un grupo de ácido maleimidopropiónico que forma un enlace covalente con la albúmina circulante — el complejo de afinidad que le da nombre y lo separa de la versión sin DAC. La ipamorelina activa el receptor de grelina. IGF-1 LR3 se sitúa corriente abajo de ambos en el receptor de IGF-1, una tirosina quinasa receptora, y su sustitución de arginina por glutamato en la posición tres más una extensión amino-terminal de 13 residuos son lo que reduce su unión a las proteínas de unión a IGF.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Extended GH / IGF al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas de vial, réplicas adicionales de un solo componente, presentación sin marca o de marca privada, o un vial adicional de IGF-1 LR3 sin el par secretagogo. Contacte a nuestra mesa de ventas corporativas con su composición objetivo y número de kits para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Extended GH / IGF al por mayor para preservar la integridad del compuesto?',
      a: 'Los kits se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío en rango congelado o refrigerado durante el tránsito. Cada vial conserva su etiqueta de identidad individual dentro de la bandeja, de modo que la trazabilidad por componente sobrevive a la manipulación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Extended GH / IGF es el único panel de esta gama que cruza de la química de péptidos sintéticos al terreno de las proteínas recombinantes, y esa es su propiedad definitoria. CJC-1295 con DAC e ipamorelina se fabrican por síntesis en fase sólida; IGF-1 LR3 se expresa en cultivo bacteriano y se repliega, una ruta de fabricación completamente distinta con modos de fallo distintos y un protocolo de liberación distinto. Para un laboratorio que estudia dónde se origina un efecto a lo largo del eje de la hormona del crecimiento, esta bandeja aporta un par secretagogo corriente arriba y un efector corriente abajo que elude la hipófisis por completo — de modo que una observación presente con los tres pero ausente con IGF-1 LR3 solo se localiza corriente arriba.',
    qualityAssurance:
      'Dos advertencias. Primera, IGF-1 LR3 no tiene registro en PubChem ni fórmula molecular confirmable de forma independiente — es un análogo de 83 residuos cuya composición exacta varía con la construcción de expresión, y cualquier proveedor que cite una fórmula precisa está citando un cálculo, no una medición. Reportamos la masa observada en nuestro propio análisis y remitimos a los investigadores a verificar contra el certificado de análisis del fabricante. Segunda, CJC-1295 se vende en dos formas que difieren en unos 279 daltons, con y sin el complejo de afinidad, y el número CAS 863288-34-0 que circula ampliamente en la industria corresponde en realidad a la molécula sin DAC. El vial de esta bandeja es la forma con DAC, CAS 446262-90-4.',
  },
};

const GH_SECRETAGOGUE_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale GH Secretagogue?',
      a: 'Both vials are released at ≥99.0% HPLC area purity with LC-MS identity confirmation, and the CJC-1295 chain receives peptide mapping across all 29 residues. The release specifically records the observed intact mass because the with-DAC and no-DAC forms of CJC-1295 differ by roughly 279 daltons — a gap wide enough that mass spectrometry settles the question outright, while a purity chromatogram alone would not.',
    },
    {
      q: 'Is GH Secretagogue approved for therapeutic use or human consumption?',
      a: 'No. GH Secretagogue is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. No component of the kit is supplied under any therapeutic indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale GH Secretagogue?',
      a: 'The minimum order quantity is one complete kit of 2 vials — CJC-1295 5 mg and Ipamorelin 5 mg. 99 Purity Wholesale supplies bulk quantities to research institutions, endocrine research laboratories, and distribution brands. Multi-kit and mixed-configuration procurement is available for qualified partners. We do not fulfill retail or single-vial inquiries.',
    },
    {
      q: 'What physical form is wholesale GH Secretagogue supplied in?',
      a: 'Two separately labelled vials of white lyophilized powder at 5 mg each. The CJC-1295 supplied here is the no-DAC form, also catalogued in the literature as Modified GRF(1-29) — a 29-residue chain near 3368 daltons. Ipamorelin is a pentapeptide near 712 daltons, so despite the matched fills the vials hold roughly a fivefold difference in molar quantity.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for GH Secretagogue?',
      a: 'Store the sealed tray at -20°C (-4°F) for up to 36 months, with short-term holding at 2°C to 8°C (36°F to 46°F) acceptable and a 14-day working window once reconstituted at 2°C to 8°C. Without the albumin-binding group of the DAC variant, this CJC-1295 form has no covalent carrier to stabilise it in solution, so it behaves in the vial much more like Sermorelin than like the with-DAC molecule and benefits from aliquoting.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for GH Secretagogue?',
      a: 'The pairing engages two receptors that share a target cell and almost nothing else. CJC-1295 acts at the GHRH receptor, a class B G protein-coupled receptor signaling largely through adenylyl cyclase. Ipamorelin acts at GHS-R1a, a class A receptor coupling through phospholipase C. The receptors sit in different structural families, use different second messenger routes, and converge on the same pituitary somatotroph — which is why the combination is studied as a two-input system rather than as two interchangeable secretagogues.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale GH Secretagogue?',
      a: 'Yes. Qualified procurement partners can request alternative vial strengths, additional replicates of a single component, unlabeled or private-label presentation, or the with-DAC variant substituted for the no-DAC vial. Contact our corporate sales desk with your target composition and kit count to scope the run.',
    },
    {
      q: 'How is wholesale GH Secretagogue packaged and shipped to preserve compound integrity?',
      a: 'Kits ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers holding the shipment in the frozen or refrigerated range through transit. Each vial retains its individual identity label inside the tray so component traceability survives handling. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'GH Secretagogue is the middle generation of the three secretagogue panels in this range, and the distinction that matters is what it deliberately leaves out. Classic Secretagogue supplies unmodified first-generation compounds; Extended GH / IGF adds the albumin-binding DAC variant and a downstream recombinant effector. This tray sits between them: CJC-1295 carries the four stabilising amino acid substitutions but not the drug affinity complex, giving an intermediate profile that isolates what the substitutions contribute from what albumin binding contributes. Running all three panels resolves a question no single panel answers.',
    qualityAssurance:
      'This panel carries the industry\'s most persistent identity problem, and we state it rather than inherit it. The CAS registry number 863288-34-0 is quoted across the sector for both CJC-1295 forms; it correctly identifies the no-DAC molecule only. The with-DAC compound is CAS 446262-90-4. Our own catalogue is not exempt from this having been an issue historically, which is why every vial in this tray is released with an observed intact mass on the certificate of analysis rather than a registry number alone. Net peptide content is reported alongside gross fill, since acetate counter-ion mass varies between manufacturing lots and is real weight in the vial.',
  },
};

const GH_SECRETAGOGUE_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de GH Secretagogue al por mayor?',
      a: 'Ambos viales se liberan con ≥99.0% de pureza por área HPLC y confirmación de identidad por LC-MS, y la cadena de CJC-1295 recibe mapeo peptídico en los 29 residuos. La liberación registra específicamente la masa intacta observada porque las formas con DAC y sin DAC de CJC-1295 difieren en unos 279 daltons — una brecha lo bastante amplia como para que la espectrometría de masas resuelva la cuestión por completo, mientras que un cromatograma de pureza por sí solo no lo haría.',
    },
    {
      q: '¿Está aprobado GH Secretagogue para uso terapéutico o consumo humano?',
      a: 'No. GH Secretagogue se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ningún componente del kit se suministra con indicación terapéutica alguna.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para GH Secretagogue al por mayor?',
      a: 'La cantidad mínima de pedido es un kit completo de 2 viales — CJC-1295 5 mg e ipamorelina 5 mg. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios de investigación endocrina, y marcas de distribución. Hay disponibilidad de múltiples kits y de configuraciones mixtas para socios calificados. No atendemos consultas minoristas ni de vial individual.',
    },
    {
      q: '¿En qué forma física se suministra GH Secretagogue al por mayor?',
      a: 'Dos viales etiquetados por separado con polvo liofilizado blanco de 5 mg cada uno. El CJC-1295 suministrado aquí es la forma sin DAC, catalogada en la literatura también como GRF(1-29) modificado — una cadena de 29 residuos cercana a 3368 daltons. La ipamorelina es un pentapéptido cercano a 712 daltons, de modo que pese a los llenados iguales los viales contienen una diferencia molar de aproximadamente cinco veces.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de GH Secretagogue?',
      a: 'Almacene la bandeja sellada a -20°C (-4°F) hasta 36 meses, siendo aceptable el almacenamiento breve entre 2°C y 8°C (36°F a 46°F) y una ventana de trabajo de 14 días una vez reconstituido entre 2°C y 8°C. Sin el grupo de unión a albúmina de la variante DAC, esta forma de CJC-1295 no tiene portador covalente que la estabilice en solución, así que se comporta en el vial mucho más como la sermorelina que como la molécula con DAC y se beneficia del fraccionamiento en alícuotas.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para GH Secretagogue?',
      a: 'El par activa dos receptores que comparten célula diana y casi nada más. CJC-1295 actúa en el receptor de GHRH, un receptor acoplado a proteína G de clase B que señaliza principalmente por adenilato ciclasa. La ipamorelina actúa en GHS-R1a, un receptor de clase A acoplado por fosfolipasa C. Los receptores pertenecen a familias estructurales distintas, usan rutas de segundos mensajeros distintas y convergen en el mismo somatotropo hipofisario — por eso la combinación se estudia como un sistema de dos entradas y no como dos secretagogos intercambiables.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de GH Secretagogue al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas de vial, réplicas adicionales de un solo componente, presentación sin marca o de marca privada, o la variante con DAC en sustitución del vial sin DAC. Contacte a nuestra mesa de ventas corporativas con su composición objetivo y número de kits para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía GH Secretagogue al por mayor para preservar la integridad del compuesto?',
      a: 'Los kits se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío en rango congelado o refrigerado durante el tránsito. Cada vial conserva su etiqueta de identidad individual dentro de la bandeja, de modo que la trazabilidad por componente sobrevive a la manipulación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'GH Secretagogue es la generación intermedia de los tres paneles de secretagogos de esta gama, y la distinción que importa es lo que deja fuera deliberadamente. Classic Secretagogue suministra compuestos de primera generación sin modificar; Extended GH / IGF añade la variante DAC de unión a albúmina y un efector recombinante corriente abajo. Esta bandeja se sitúa en medio: CJC-1295 lleva las cuatro sustituciones estabilizadoras de aminoácidos pero no el complejo de afinidad, dando un perfil intermedio que aísla lo que aportan las sustituciones de lo que aporta la unión a albúmina. Ejecutar los tres paneles resuelve una pregunta que ningún panel responde por sí solo.',
    qualityAssurance:
      'Este panel arrastra el problema de identidad más persistente del sector, y lo declaramos en lugar de heredarlo. El número CAS 863288-34-0 se cita en todo el sector para ambas formas de CJC-1295; identifica correctamente solo la molécula sin DAC. El compuesto con DAC es CAS 446262-90-4. Nuestro propio catálogo no está exento de que esto haya sido un problema históricamente, por lo cual cada vial de esta bandeja se libera con una masa intacta observada en el certificado de análisis y no con un número de registro solamente. El contenido neto de péptido se reporta junto al llenado bruto, ya que la masa del contraión acetato varía entre lotes de fabricación y es peso real en el vial.',
  },
};

const GUT_MUCOSAL_PANEL_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Gut & Mucosal Panel?',
      a: 'Each vial is released at ≥99.0% HPLC area purity with LC-MS identity confirmation. Thymosin Alpha-1 is checked specifically for its N-terminal acetylation, which is part of the molecule rather than a processing artefact — an unacetylated batch is a different compound and would still pass a purity assay. KPV is confirmed against a synthetic tripeptide reference standard, and BPC-157 is released on intact mass and sequence confirmation.',
    },
    {
      q: 'Is Gut & Mucosal Panel approved for therapeutic use or human consumption?',
      a: 'No. Gut & Mucosal Panel is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. No component of the kit is supplied under any therapeutic indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Gut & Mucosal Panel?',
      a: 'The minimum order quantity is one complete kit of 3 vials — BPC-157 5 mg, KPV 10 mg, Thymosin Alpha-1 10 mg. 99 Purity Wholesale supplies bulk quantities to research institutions, gastrointestinal and mucosal immunology laboratories, and distribution brands. Multi-kit and mixed-configuration procurement is available for qualified partners. We do not fulfill retail or single-vial inquiries.',
    },
    {
      q: 'What physical form is wholesale Gut & Mucosal Panel supplied in?',
      a: 'Three separately labelled vials of white lyophilized powder. KPV and Thymosin Alpha-1 are supplied at 10 mg while BPC-157 is at 5 mg, reflecting how each is typically consumed: KPV is a three-residue tripeptide where a milligram represents a large molar quantity and formulation work consumes it quickly, while Thymosin Alpha-1 at 28 residues needs the larger fill to reach comparable molar coverage.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Gut & Mucosal Panel?',
      a: 'Store the sealed tray at -20°C (-4°F) for up to 36 months, with short-term holding at 2°C to 8°C (36°F to 46°F) acceptable and a 14-day window once reconstituted at 2°C to 8°C. KPV is the most robust of the three in solution — a tripeptide has few bonds to hydrolyse — while Thymosin Alpha-1 is the most demanding, as its acetylated amino terminus and 28-residue length make it the component where degradation products appear first on a repeat chromatogram.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Gut & Mucosal Panel?',
      a: 'The three components approach mucosal biology from three separate directions. Thymosin Alpha-1 is the best characterised, acting through Toll-like receptor signaling in dendritic cells as Romani and colleagues established. KPV is the carboxy-terminal tripeptide of alpha-melanocyte stimulating hormone, studied as an NF-kappa-B pathway modulator and notable for retaining activity in orally delivered nanoparticle formats. BPC-157 has no identified receptor at all; its literature is organised around nitric oxide and angiogenic readouts rather than a defined binding interaction, and that gap should shape how it is positioned in a study.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Gut & Mucosal Panel?',
      a: 'Yes. Qualified procurement partners can request alternative vial strengths, additional replicates of a single component, unlabeled or private-label presentation, or a KPV-weighted configuration for oral delivery formulation work. Contact our corporate sales desk with your target composition and kit count to scope the run.',
    },
    {
      q: 'How is wholesale Gut & Mucosal Panel packaged and shipped to preserve compound integrity?',
      a: 'Kits ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers holding the shipment in the frozen or refrigerated range through transit. Each vial retains its individual identity label inside the tray so component traceability survives handling. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Gut & Mucosal Panel is assembled around the epithelial barrier rather than around a receptor family, which is why its three components look mechanistically unrelated on paper. The distinctive property of the tray is that one of its components has genuinely demonstrated oral bioavailability in a peer-reviewed delivery study — Xiao and colleagues showed KPV retaining activity when delivered in hyaluronic acid functionalised nanoparticles, which is uncommon for a peptide of any length. Thymosin Alpha-1 brings the opposite profile: an extensively characterised immunological mechanism with an approved-product record in more than thirty countries under the name Zadaxin, though not in the United States.',
    qualityAssurance:
      'Two qualifications belong on this panel. BPC-157, despite a large publication count, has no identified receptor and the overwhelming majority of its literature originates from one research group — volume of papers is not the same as independent replication, and study designs should account for that. Thymosin Alpha-1 requires a naming caution of its own: it is a 28-residue acetylated peptide and is routinely confused with thymalin and with thymosin beta-4, which are different substances entirely despite the shared word. Each vial ships with a batch-specific certificate of analysis showing the actual chromatogram and observed mass, and endotoxin is reported per vial given the immunological endpoints these compounds are used against.',
  },
};

const GUT_MUCOSAL_PANEL_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Gut & Mucosal Panel al por mayor?',
      a: 'Cada vial se libera con ≥99.0% de pureza por área HPLC y confirmación de identidad por LC-MS. La timosina alfa-1 se verifica específicamente por su acetilación N-terminal, que forma parte de la molécula y no es un artefacto de procesamiento — un lote sin acetilar es un compuesto distinto y aun así superaría un ensayo de pureza. KPV se confirma contra un estándar de referencia sintético de tripéptido, y BPC-157 se libera por masa intacta y confirmación de secuencia.',
    },
    {
      q: '¿Está aprobado Gut & Mucosal Panel para uso terapéutico o consumo humano?',
      a: 'No. Gut & Mucosal Panel se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ningún componente del kit se suministra con indicación terapéutica alguna.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Gut & Mucosal Panel al por mayor?',
      a: 'La cantidad mínima de pedido es un kit completo de 3 viales — BPC-157 5 mg, KPV 10 mg, timosina alfa-1 10 mg. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios de inmunología gastrointestinal y mucosa, y marcas de distribución. Hay disponibilidad de múltiples kits y de configuraciones mixtas para socios calificados. No atendemos consultas minoristas ni de vial individual.',
    },
    {
      q: '¿En qué forma física se suministra Gut & Mucosal Panel al por mayor?',
      a: 'Tres viales etiquetados por separado con polvo liofilizado blanco. KPV y timosina alfa-1 se suministran a 10 mg mientras que BPC-157 va a 5 mg, reflejando cómo se consume cada uno: KPV es un tripéptido de tres residuos donde un miligramo representa una cantidad molar grande y el trabajo de formulación lo consume rápido, mientras que la timosina alfa-1 con 28 residuos necesita el llenado mayor para alcanzar cobertura molar comparable.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Gut & Mucosal Panel?',
      a: 'Almacene la bandeja sellada a -20°C (-4°F) hasta 36 meses, siendo aceptable el almacenamiento breve entre 2°C y 8°C (36°F a 46°F) y una ventana de 14 días una vez reconstituido entre 2°C y 8°C. KPV es el más robusto de los tres en solución — un tripéptido tiene pocos enlaces que hidrolizar — mientras que la timosina alfa-1 es la más exigente, ya que su extremo amino acetilado y sus 28 residuos la convierten en el componente donde primero aparecen productos de degradación en un cromatograma repetido.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Gut & Mucosal Panel?',
      a: 'Los tres componentes abordan la biología mucosa desde tres direcciones distintas. La timosina alfa-1 es la mejor caracterizada, actuando por señalización de receptores tipo Toll en células dendríticas según establecieron Romani y colaboradores. KPV es el tripéptido carboxi-terminal de la hormona estimulante de melanocitos alfa, estudiado como modulador de la vía NF-kappa-B y notable por conservar actividad en formatos de nanopartículas de administración oral. BPC-157 no tiene receptor identificado alguno; su literatura se organiza en torno a lecturas de óxido nítrico y angiogénesis y no a una interacción de unión definida, y esa laguna debe orientar cómo se posiciona en un estudio.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Gut & Mucosal Panel al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas de vial, réplicas adicionales de un solo componente, presentación sin marca o de marca privada, o una configuración con predominio de KPV para trabajo de formulación oral. Contacte a nuestra mesa de ventas corporativas con su composición objetivo y número de kits para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Gut & Mucosal Panel al por mayor para preservar la integridad del compuesto?',
      a: 'Los kits se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío en rango congelado o refrigerado durante el tránsito. Cada vial conserva su etiqueta de identidad individual dentro de la bandeja, de modo que la trazabilidad por componente sobrevive a la manipulación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Gut & Mucosal Panel se ensambla en torno a la barrera epitelial y no a una familia de receptores, y por eso sus tres componentes parecen mecanísticamente no relacionados sobre el papel. La propiedad distintiva de la bandeja es que uno de sus componentes ha demostrado biodisponibilidad oral genuina en un estudio de administración revisado por pares — Xiao y colaboradores mostraron a KPV conservando actividad al administrarse en nanopartículas funcionalizadas con ácido hialurónico, algo poco común para un péptido de cualquier longitud. La timosina alfa-1 aporta el perfil opuesto: un mecanismo inmunológico extensamente caracterizado con historial de producto aprobado en más de treinta países bajo el nombre Zadaxin, aunque no en Estados Unidos.',
    qualityAssurance:
      'Dos matices corresponden a este panel. BPC-157, pese a un elevado número de publicaciones, no tiene receptor identificado y la abrumadora mayoría de su literatura proviene de un solo grupo de investigación — el volumen de artículos no equivale a replicación independiente, y los diseños de estudio deben tenerlo en cuenta. La timosina alfa-1 exige una advertencia de nomenclatura propia: es un péptido acetilado de 28 residuos y se confunde rutinariamente con la timalina y con la timosina beta-4, que son sustancias completamente distintas pese a compartir la palabra. Cada vial se envía con certificado de análisis específico del lote que muestra el cromatograma real y la masa observada, y la endotoxina se reporta por vial dadas las variables inmunológicas frente a las que se usan estos compuestos.',
  },
};

const INCRETIN_AMYLIN_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Incretin + Amylin?',
      a: 'Both vials are released at ≥99.0% HPLC area purity with LC-MS identity confirmation and full peptide mapping, appropriate to two chains above 4400 daltons. Both carry lipidated side chains that dominate their chromatographic behaviour, so retention time alone is a weak identity signal here and the release relies on observed intact mass and the mapping data rather than elution position.',
    },
    {
      q: 'Is Incretin + Amylin approved for therapeutic use or human consumption?',
      a: 'No. Incretin + Amylin is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. No component of the kit is supplied under any therapeutic indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Incretin + Amylin?',
      a: 'The minimum order quantity is one complete kit of 2 vials — Retatrutide 10 mg and Cagrilintide 5 mg. 99 Purity Wholesale supplies bulk quantities to research institutions, metabolic and receptor pharmacology laboratories, and distribution brands. Multi-kit and mixed-configuration procurement is available for qualified partners. We do not fulfill retail or single-vial inquiries.',
    },
    {
      q: 'What physical form is wholesale Incretin + Amylin supplied in?',
      a: 'Two separately labelled vials of white lyophilized powder — Retatrutide at 10 mg and Cagrilintide at 5 mg. Both are large lipidated analogs above 4400 daltons, making this the heaviest two-vial panel in the range by molecular weight. Lipidated peptides of this class can appear slightly translucent or glassy rather than fully opaque after lyophilization, which is a normal cake appearance and not a defect.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Incretin + Amylin?',
      a: 'Store the sealed tray at -20°C (-4°F) for up to 36 months, with short-term holding at 2°C to 8°C (36°F to 46°F) acceptable and reconstituted material used within 14 days at 2°C to 8°C. Both components are surface-active because of their fatty acid side chains, so they will concentrate at the air-liquid interface if a vial is shaken. Swirl to dissolve and avoid vortexing, and expect visible foaming to indicate the peptide has been driven to the surface rather than dispersed.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Incretin + Amylin?',
      a: 'The two components target receptor systems with no structural relationship. Retatrutide is a triple agonist engaging the GIP, GLP-1 and glucagon receptors — three class B G protein-coupled receptors within one family. Cagrilintide acts at the amylin receptors, which are not conventional standalone receptors at all: they are heterodimers formed when the calcitonin receptor associates with a receptor activity-modifying protein, and Cao and colleagues resolved the structural basis for that phenotype in 2022. Pairing them tests whether a class B agonist and a heterodimer-dependent agonist interact.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Incretin + Amylin?',
      a: 'Yes. Qualified procurement partners can request alternative vial strengths, additional replicates of a single component, unlabeled or private-label presentation, or matched Retatrutide replicates for extended dose-ranging arms. Contact our corporate sales desk with your target composition and kit count to scope the run.',
    },
    {
      q: 'How is wholesale Incretin + Amylin packaged and shipped to preserve compound integrity?',
      a: 'Kits ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers holding the shipment in the frozen or refrigerated range through transit. Each vial retains its individual identity label inside the tray so component traceability survives handling. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Incretin + Amylin is the smallest panel in this range by vial count and the most demanding by receptor pharmacology. The reason to run these two together is that amylin receptors are constructed rather than encoded — the same calcitonin receptor produces three different amylin receptor phenotypes depending on which receptor activity-modifying protein it partners with, which means a Cagrilintide result depends on the receptor complement of the model system in a way a Retatrutide result does not. Any laboratory pairing them needs to characterise that complement first, and the tray is sized on the assumption that Retatrutide will be consumed at roughly twice the rate across dose-ranging arms.',
    qualityAssurance:
      'A registry correction applies here and it is worth stating rather than repeating the sector default. The CAS number 141430-65-1 is widely attached to Cagrilintide across supplier listings; it resolves in PubChem to an unrelated benzenesulfonamide near 371 daltons, which cannot be a 4400 dalton lipidated peptide analog. The correct registry number is 1415456-99-3. We release Cagrilintide on observed intact mass rather than on a registry number for exactly this reason. Retatrutide is released with full peptide mapping, and both vials ship with batch-specific certificates of analysis showing the actual chromatogram, residual solvent and water content.',
  },
};

const INCRETIN_AMYLIN_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Incretin + Amylin al por mayor?',
      a: 'Ambos viales se liberan con ≥99.0% de pureza por área HPLC, confirmación de identidad por LC-MS y mapeo peptídico completo, apropiado para dos cadenas por encima de 4400 daltons. Ambas llevan cadenas laterales lipidadas que dominan su comportamiento cromatográfico, de modo que el tiempo de retención por sí solo es una señal de identidad débil aquí y la liberación se apoya en la masa intacta observada y los datos de mapeo en lugar de la posición de elución.',
    },
    {
      q: '¿Está aprobado Incretin + Amylin para uso terapéutico o consumo humano?',
      a: 'No. Incretin + Amylin se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ningún componente del kit se suministra con indicación terapéutica alguna.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Incretin + Amylin al por mayor?',
      a: 'La cantidad mínima de pedido es un kit completo de 2 viales — retatrutida 10 mg y cagrilintida 5 mg. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios de farmacología metabólica y de receptores, y marcas de distribución. Hay disponibilidad de múltiples kits y de configuraciones mixtas para socios calificados. No atendemos consultas minoristas ni de vial individual.',
    },
    {
      q: '¿En qué forma física se suministra Incretin + Amylin al por mayor?',
      a: 'Dos viales etiquetados por separado con polvo liofilizado blanco — retatrutida a 10 mg y cagrilintida a 5 mg. Ambos son análogos lipidados grandes por encima de 4400 daltons, lo que convierte a este en el panel de dos viales más pesado de la gama por peso molecular. Los péptidos lipidados de esta clase pueden verse ligeramente translúcidos o vítreos en lugar de completamente opacos tras la liofilización, apariencia normal de la torta y no un defecto.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Incretin + Amylin?',
      a: 'Almacene la bandeja sellada a -20°C (-4°F) hasta 36 meses, siendo aceptable el almacenamiento breve entre 2°C y 8°C (36°F a 46°F) y usando el material reconstituido en 14 días entre 2°C y 8°C. Ambos componentes son tensioactivos por sus cadenas laterales de ácido graso, así que se concentrarán en la interfase aire-líquido si se agita el vial. Gire suavemente para disolver y evite el vórtex; la formación visible de espuma indica que el péptido se ha desplazado a la superficie en lugar de dispersarse.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Incretin + Amylin?',
      a: 'Los dos componentes actúan sobre sistemas de receptores sin relación estructural. La retatrutida es un agonista triple que activa los receptores de GIP, GLP-1 y glucagón — tres receptores acoplados a proteína G de clase B dentro de una misma familia. La cagrilintida actúa en los receptores de amilina, que no son receptores independientes convencionales: son heterodímeros formados cuando el receptor de calcitonina se asocia con una proteína modificadora de la actividad del receptor, y Cao y colaboradores resolvieron la base estructural de ese fenotipo en 2022. Emparejarlos prueba si un agonista de clase B y uno dependiente de heterodímeros interactúan.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Incretin + Amylin al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas de vial, réplicas adicionales de un solo componente, presentación sin marca o de marca privada, o réplicas emparejadas de retatrutida para brazos extendidos de rango de dosis. Contacte a nuestra mesa de ventas corporativas con su composición objetivo y número de kits para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Incretin + Amylin al por mayor para preservar la integridad del compuesto?',
      a: 'Los kits se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío en rango congelado o refrigerado durante el tránsito. Cada vial conserva su etiqueta de identidad individual dentro de la bandeja, de modo que la trazabilidad por componente sobrevive a la manipulación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Incretin + Amylin es el panel más pequeño de esta gama por número de viales y el más exigente por farmacología de receptores. La razón para ejecutar estos dos juntos es que los receptores de amilina se construyen en lugar de codificarse — el mismo receptor de calcitonina produce tres fenotipos distintos de receptor de amilina según con qué proteína modificadora de la actividad se asocie, lo que significa que un resultado con cagrilintida depende del complemento de receptores del sistema modelo de una forma en que un resultado con retatrutida no. Cualquier laboratorio que los empareje debe caracterizar ese complemento primero, y la bandeja se dimensiona asumiendo que la retatrutida se consumirá a aproximadamente el doble de velocidad en brazos de rango de dosis.',
    qualityAssurance:
      'Aquí corresponde una corrección de registro y conviene declararla en vez de repetir el estándar del sector. El número CAS 141430-65-1 se asocia ampliamente a la cagrilintida en los listados de proveedores; en PubChem resuelve a una bencenosulfonamida no relacionada cercana a 371 daltons, que no puede ser un análogo peptídico lipidado de 4400 daltons. El número de registro correcto es 1415456-99-3. Liberamos la cagrilintida por masa intacta observada y no por número de registro exactamente por esta razón. La retatrutida se libera con mapeo peptídico completo, y ambos viales se envían con certificados de análisis específicos del lote que muestran el cromatograma real, el solvente residual y el contenido de agua.',
  },
};

const LONGEVITY_MITOCHONDRIAL_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Longevity & Mitochondrial?',
      a: 'Release differs by component because only two of the four are peptides. Epithalon and SS-31 are released at ≥99.0% HPLC area purity with LC-MS peptide identity confirmation. NAD+ is released as a cofactor on HPLC purity with UV spectral confirmation at 260 nanometres, the appropriate identity check for a dinucleotide. 5-Amino-1MQ is released as a quaternary ammonium small molecule with counter-ion identity stated, since the salt form is part of what is in the vial.',
    },
    {
      q: 'Is Longevity & Mitochondrial approved for therapeutic use or human consumption?',
      a: 'No. Longevity & Mitochondrial is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. No component of the kit is supplied under any therapeutic indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Longevity & Mitochondrial?',
      a: 'The minimum order quantity is one complete kit of 4 vials — Epithalon 10 mg, NAD+ 100 mg, SS-31 10 mg, 5-Amino-1MQ 50 mg. 99 Purity Wholesale supplies bulk quantities to research institutions, cellular ageing and mitochondrial research laboratories, and distribution brands. Multi-kit and mixed-configuration procurement is available for qualified partners. We do not fulfill retail or single-vial inquiries.',
    },
    {
      q: 'What physical form is wholesale Longevity & Mitochondrial supplied in?',
      a: 'Four separately labelled vials with markedly different fills — NAD+ at 100 mg, 5-Amino-1MQ at 50 mg, and Epithalon and SS-31 at 10 mg each. The spread reflects that NAD+ functions as a stoichiometric cofactor consumed in redox reactions rather than as a catalytic signaling molecule, so cofactor work needs an order of magnitude more material than peptide work. NAD+ is also the most hygroscopic component and will take up atmospheric moisture rapidly once the stopper is broken.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Longevity & Mitochondrial?',
      a: 'Store the sealed tray at -20°C (-4°F). The two peptides hold specification for up to 36 months. NAD+ is the limiting component and needs different handling: it is hygroscopic, degrades in alkaline solution, and should be reconstituted immediately before use rather than held as stock. 5-Amino-1MQ is the most stable of the four, being a small quaternary ammonium compound with a permanent positive charge and no hydrolysable backbone. Do not apply one storage rule across this tray.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Longevity & Mitochondrial?',
      a: 'These four components share a research theme and no mechanism whatsoever. Epithalon is a four-residue pineal tetrapeptide studied against telomerase and telomere length endpoints. NAD+ is not a signaling molecule at all — it is the redox cofactor that sirtuins and other enzymes consume. SS-31 is a four-residue peptide that binds cardiolipin in the inner mitochondrial membrane, a lipid interaction rather than a receptor interaction, as Birk and colleagues established. 5-Amino-1MQ is a small-molecule inhibitor of nicotinamide N-methyltransferase, an enzyme active site target.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Longevity & Mitochondrial?',
      a: 'Yes. Qualified procurement partners can request alternative vial strengths, additional replicates of a single component, unlabeled or private-label presentation, or an NAD+ heavy configuration for cofactor titration work. Contact our corporate sales desk with your target composition and kit count to scope the run.',
    },
    {
      q: 'How is wholesale Longevity & Mitochondrial packaged and shipped to preserve compound integrity?',
      a: 'Kits ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers holding the shipment in the frozen or refrigerated range through transit. Each vial retains its individual identity label inside the tray so component traceability survives handling. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Longevity & Mitochondrial is the most chemically heterogeneous panel in this range, and that heterogeneity is the point rather than a compromise. Only two of the four components are peptides. NAD+ is a dinucleotide cofactor near 663 daltons; 5-Amino-1MQ is a quaternary ammonium ion near 173 daltons carrying a permanent positive charge, the smallest entity in any panel here. Four vials, four separate release protocols, four different storage sensitivities. A laboratory studying cellular energetics ordinarily assembles this set across three or four suppliers with three or four different documentation standards, and the value of the tray is a single certificate set covering all four.',
    qualityAssurance:
      'An evidence note on Epithalon, since it is the component most often oversold. The 2025 Biogerontology report by Al-Dulaimi and colleagues is the strongest recent evidence that Epithalon lengthens telomeres in human cell lines, and it carries a published Correction issued the same year — a correction, not a retraction, but investigators citing it should cite the corrected version. Much of the remaining Epithalon literature originates from a single research programme and is published in journals with limited independent replication. We supply the compound with an accurate certificate of analysis and decline to represent that evidence base as stronger than it is. Each vial ships with its own batch-specific certificate matched to its release protocol.',
  },
};

const LONGEVITY_MITOCHONDRIAL_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Longevity & Mitochondrial al por mayor?',
      a: 'La liberación difiere por componente porque solo dos de los cuatro son péptidos. Epitalón y SS-31 se liberan con ≥99.0% de pureza por área HPLC y confirmación de identidad peptídica por LC-MS. NAD+ se libera como cofactor por pureza HPLC con confirmación espectral UV a 260 nanómetros, la verificación de identidad apropiada para un dinucleótido. 5-Amino-1MQ se libera como molécula pequeña de amonio cuaternario con identidad de contraión declarada, ya que la forma salina es parte de lo que contiene el vial.',
    },
    {
      q: '¿Está aprobado Longevity & Mitochondrial para uso terapéutico o consumo humano?',
      a: 'No. Longevity & Mitochondrial se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ningún componente del kit se suministra con indicación terapéutica alguna.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Longevity & Mitochondrial al por mayor?',
      a: 'La cantidad mínima de pedido es un kit completo de 4 viales — epitalón 10 mg, NAD+ 100 mg, SS-31 10 mg, 5-Amino-1MQ 50 mg. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios de envejecimiento celular e investigación mitocondrial, y marcas de distribución. Hay disponibilidad de múltiples kits y de configuraciones mixtas para socios calificados. No atendemos consultas minoristas ni de vial individual.',
    },
    {
      q: '¿En qué forma física se suministra Longevity & Mitochondrial al por mayor?',
      a: 'Cuatro viales etiquetados por separado con llenados marcadamente distintos — NAD+ a 100 mg, 5-Amino-1MQ a 50 mg, y epitalón y SS-31 a 10 mg cada uno. La diferencia refleja que NAD+ funciona como cofactor estequiométrico consumido en reacciones redox y no como molécula señalizadora catalítica, por lo que el trabajo con cofactores necesita un orden de magnitud más de material que el trabajo con péptidos. NAD+ es además el componente más higroscópico y absorberá humedad atmosférica rápidamente una vez roto el tapón.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Longevity & Mitochondrial?',
      a: 'Almacene la bandeja sellada a -20°C (-4°F). Los dos péptidos mantienen especificación hasta 36 meses. NAD+ es el componente limitante y requiere manipulación distinta: es higroscópico, se degrada en solución alcalina y debe reconstituirse inmediatamente antes de usarse en lugar de mantenerse como solución madre. 5-Amino-1MQ es el más estable de los cuatro, al ser un compuesto pequeño de amonio cuaternario con carga positiva permanente y sin esqueleto hidrolizable. No aplique una sola regla de almacenamiento a toda la bandeja.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Longevity & Mitochondrial?',
      a: 'Estos cuatro componentes comparten un tema de investigación y ningún mecanismo en absoluto. El epitalón es un tetrapéptido pineal de cuatro residuos estudiado frente a variables de telomerasa y longitud telomérica. NAD+ no es una molécula señalizadora — es el cofactor redox que consumen las sirtuinas y otras enzimas. SS-31 es un péptido de cuatro residuos que une cardiolipina en la membrana mitocondrial interna, una interacción lipídica y no con receptor, según establecieron Birk y colaboradores. 5-Amino-1MQ es un inhibidor de molécula pequeña de la nicotinamida N-metiltransferasa, una diana en sitio activo enzimático.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Longevity & Mitochondrial al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas de vial, réplicas adicionales de un solo componente, presentación sin marca o de marca privada, o una configuración con predominio de NAD+ para trabajo de titulación de cofactores. Contacte a nuestra mesa de ventas corporativas con su composición objetivo y número de kits para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Longevity & Mitochondrial al por mayor para preservar la integridad del compuesto?',
      a: 'Los kits se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío en rango congelado o refrigerado durante el tránsito. Cada vial conserva su etiqueta de identidad individual dentro de la bandeja, de modo que la trazabilidad por componente sobrevive a la manipulación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Longevity & Mitochondrial es el panel químicamente más heterogéneo de esta gama, y esa heterogeneidad es el objetivo y no un compromiso. Solo dos de los cuatro componentes son péptidos. NAD+ es un cofactor dinucleótido cercano a 663 daltons; 5-Amino-1MQ es un ion de amonio cuaternario cercano a 173 daltons con carga positiva permanente, la entidad más pequeña de cualquier panel de esta gama. Cuatro viales, cuatro protocolos de liberación distintos, cuatro sensibilidades de almacenamiento distintas. Un laboratorio que estudia energética celular normalmente reúne este conjunto entre tres o cuatro proveedores con tres o cuatro estándares de documentación, y el valor de la bandeja es un único conjunto de certificados que cubre los cuatro.',
    qualityAssurance:
      'Una nota de evidencia sobre el epitalón, ya que es el componente que más se exagera. El informe de 2025 en Biogerontology de Al-Dulaimi y colaboradores es la evidencia reciente más sólida de que el epitalón alarga telómeros en líneas celulares humanas, y lleva una Corrección publicada el mismo año — una corrección, no una retractación, pero quienes lo citen deben citar la versión corregida. Buena parte de la literatura restante sobre epitalón proviene de un solo programa de investigación y se publica en revistas con replicación independiente limitada. Suministramos el compuesto con un certificado de análisis exacto y nos negamos a presentar esa base de evidencia como más sólida de lo que es. Cada vial se envía con su propio certificado específico del lote acorde a su protocolo de liberación.',
  },
};

const MELANOCORTIN_REPRODUCTIVE_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Melanocortin & Reproductive?',
      a: 'Every vial is released at ≥99.0% HPLC area purity with LC-MS identity confirmation, and this panel receives the most stringent mass verification of any tray in the range. Melanotan-II and PT-141 differ by approximately one dalton, so their release requires high-resolution mass measurement rather than nominal mass — a nominal-mass instrument cannot separate them and a purity chromatogram certainly cannot. Both observed masses are printed on the certificates so the two vials can be told apart on paper.',
    },
    {
      q: 'Is Melanocortin & Reproductive approved for therapeutic use or human consumption?',
      a: 'No. Melanocortin & Reproductive is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. No component of the kit is supplied under any therapeutic indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Melanocortin & Reproductive?',
      a: 'The minimum order quantity is one complete kit of 3 vials — Melanotan-II 10 mg, PT-141 10 mg, Kisspeptin-10 10 mg. 99 Purity Wholesale supplies bulk quantities to research institutions, reproductive endocrinology and melanocortin receptor laboratories, and distribution brands. Multi-kit and mixed-configuration procurement is available for qualified partners. We do not fulfill retail or single-vial inquiries.',
    },
    {
      q: 'What physical form is wholesale Melanocortin & Reproductive supplied in?',
      a: 'Three separately labelled vials of white lyophilized powder at 10 mg each. Two of the three — Melanotan-II and PT-141 — are cyclic peptides closed by a lactam bridge rather than linear chains, which affects how they behave in solution and why they resist enzymatic trimming. Kisspeptin-10 is a linear decapeptide near 1302 daltons and is the only conventional linear peptide in the tray.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Melanocortin & Reproductive?',
      a: 'Store the sealed tray at -20°C (-4°F) for up to 36 months, with short-term holding at 2°C to 8°C (36°F to 46°F) acceptable and a 14-day working window once reconstituted at 2°C to 8°C. Kisspeptin-10 is the least stable in solution of the three because it is linear and unprotected, while the lactam-bridged cyclic structures of Melanotan-II and PT-141 give both markedly better solution stability. Label reconstituted aliquots immediately — two of these three are visually and chromatographically near-identical once out of the vial.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Melanocortin & Reproductive?',
      a: 'Two of the three act on melanocortin receptors and one acts far upstream of them. Melanotan-II is a broad melanocortin receptor agonist with activity across several subtypes; PT-141 is its close relative studied as a more melanocortin-4 weighted agent. Kisspeptin-10 is unrelated to both — it acts at KISS1R, also catalogued as GPR54, the receptor whose loss of function de Roux and Seminara independently identified in 2003 as a cause of hypogonadotropic hypogonadism. That places Kisspeptin at the hypothalamic level while the melanocortin pair acts through a separate receptor family.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Melanocortin & Reproductive?',
      a: 'Yes. Qualified procurement partners can request alternative vial strengths, additional replicates of a single component, unlabeled or private-label presentation, or a Kisspeptin-only replicate set without the melanocortin pair. Contact our corporate sales desk with your target composition and kit count to scope the run.',
    },
    {
      q: 'How is wholesale Melanocortin & Reproductive packaged and shipped to preserve compound integrity?',
      a: 'Kits ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers holding the shipment in the frozen or refrigerated range through transit. Each vial retains its individual identity label inside the tray so component traceability survives handling. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Melanocortin & Reproductive presents the tightest identification problem of any panel in this range, and that is worth understanding before the tray is opened. Melanotan-II and PT-141 are approximately one dalton apart — PT-141 is the deamidated form of Melanotan-II, with the carboxy-terminal amide replaced by a free acid. One dalton is within the noise of a nominal-mass instrument and invisible on a purity chromatogram. A laboratory that mislabels an aliquot from this tray has no routine way to recover the assignment, which is why both observed high-resolution masses are documented and why we recommend the two melanocortin vials never be open on the bench simultaneously.',
    qualityAssurance:
      'Melanocortin receptor pharmacology carries a well-documented selectivity problem, and the field has responded to it. Weirath and Haskell-Luevano published a 2024 review recommending specific tool compounds for melanocortin receptor work precisely because non-selective agonists have produced results attributed to the wrong receptor subtype. Melanotan-II is a broad agonist, not a selective tool, and any study attributing an observation to a single subtype using it alone is unsupported. We state this rather than describe the compound as selective. Every vial ships with a batch-specific certificate showing observed high-resolution mass, chromatogram, residual solvent and water content.',
  },
};

const MELANOCORTIN_REPRODUCTIVE_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Melanocortin & Reproductive al por mayor?',
      a: 'Cada vial se libera con ≥99.0% de pureza por área HPLC y confirmación de identidad por LC-MS, y este panel recibe la verificación de masa más estricta de toda la gama. Melanotan-II y PT-141 difieren en aproximadamente un dalton, así que su liberación exige medición de masa de alta resolución y no masa nominal — un instrumento de masa nominal no puede separarlos y un cromatograma de pureza ciertamente tampoco. Ambas masas observadas se imprimen en los certificados para que los dos viales puedan distinguirse sobre el papel.',
    },
    {
      q: '¿Está aprobado Melanocortin & Reproductive para uso terapéutico o consumo humano?',
      a: 'No. Melanocortin & Reproductive se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ningún componente del kit se suministra con indicación terapéutica alguna.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Melanocortin & Reproductive al por mayor?',
      a: 'La cantidad mínima de pedido es un kit completo de 3 viales — Melanotan-II 10 mg, PT-141 10 mg, kisspeptina-10 10 mg. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios de endocrinología reproductiva y receptores de melanocortina, y marcas de distribución. Hay disponibilidad de múltiples kits y de configuraciones mixtas para socios calificados. No atendemos consultas minoristas ni de vial individual.',
    },
    {
      q: '¿En qué forma física se suministra Melanocortin & Reproductive al por mayor?',
      a: 'Tres viales etiquetados por separado con polvo liofilizado blanco de 10 mg cada uno. Dos de los tres — Melanotan-II y PT-141 — son péptidos cíclicos cerrados por un puente lactámico y no cadenas lineales, lo que afecta su comportamiento en solución y explica por qué resisten el recorte enzimático. La kisspeptina-10 es un decapéptido lineal cercano a 1302 daltons y el único péptido lineal convencional de la bandeja.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Melanocortin & Reproductive?',
      a: 'Almacene la bandeja sellada a -20°C (-4°F) hasta 36 meses, siendo aceptable el almacenamiento breve entre 2°C y 8°C (36°F a 46°F) y una ventana de trabajo de 14 días una vez reconstituido entre 2°C y 8°C. La kisspeptina-10 es la menos estable en solución de las tres por ser lineal y desprotegida, mientras que las estructuras cíclicas con puente lactámico de Melanotan-II y PT-141 les dan a ambas una estabilidad en solución notablemente mejor. Etiquete las alícuotas reconstituidas de inmediato — dos de estas tres son casi idénticas visual y cromatográficamente fuera del vial.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Melanocortin & Reproductive?',
      a: 'Dos de los tres actúan sobre receptores de melanocortina y uno actúa muy corriente arriba de ellos. Melanotan-II es un agonista amplio de receptores de melanocortina con actividad en varios subtipos; PT-141 es su pariente cercano estudiado como agente con mayor peso sobre melanocortina-4. La kisspeptina-10 no guarda relación con ninguno — actúa en KISS1R, catalogado también como GPR54, el receptor cuya pérdida de función de Roux y Seminara identificaron independientemente en 2003 como causa de hipogonadismo hipogonadotrópico. Eso sitúa a la kisspeptina en el nivel hipotalámico mientras el par de melanocortina actúa por una familia de receptores separada.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Melanocortin & Reproductive al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas de vial, réplicas adicionales de un solo componente, presentación sin marca o de marca privada, o un conjunto replicado solo de kisspeptina sin el par de melanocortina. Contacte a nuestra mesa de ventas corporativas con su composición objetivo y número de kits para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Melanocortin & Reproductive al por mayor para preservar la integridad del compuesto?',
      a: 'Los kits se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío en rango congelado o refrigerado durante el tránsito. Cada vial conserva su etiqueta de identidad individual dentro de la bandeja, de modo que la trazabilidad por componente sobrevive a la manipulación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Melanocortin & Reproductive plantea el problema de identificación más ajustado de toda la gama, y conviene entenderlo antes de abrir la bandeja. Melanotan-II y PT-141 distan aproximadamente un dalton — PT-141 es la forma desamidada de Melanotan-II, con la amida carboxi-terminal sustituida por un ácido libre. Un dalton está dentro del ruido de un instrumento de masa nominal y es invisible en un cromatograma de pureza. Un laboratorio que etiquete mal una alícuota de esta bandeja no tiene forma rutinaria de recuperar la asignación, por lo cual documentamos ambas masas observadas de alta resolución y recomendamos que los dos viales de melanocortina nunca estén abiertos en la mesa a la vez.',
    qualityAssurance:
      'La farmacología de receptores de melanocortina arrastra un problema de selectividad bien documentado, y el campo ha respondido. Weirath y Haskell-Luevano publicaron en 2024 una revisión que recomienda compuestos herramienta específicos para el trabajo con receptores de melanocortina precisamente porque los agonistas no selectivos han producido resultados atribuidos al subtipo de receptor equivocado. Melanotan-II es un agonista amplio, no una herramienta selectiva, y cualquier estudio que atribuya una observación a un solo subtipo usándolo en solitario carece de respaldo. Lo declaramos en lugar de describir el compuesto como selectivo. Cada vial se envía con certificado específico del lote que muestra masa observada de alta resolución, cromatograma, solvente residual y contenido de agua.',
  },
};

const METABOLIC_ACTIVATION_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Metabolic Activation?',
      a: 'Release differs by component because only one of the four is a peptide. MOTS-c is released at ≥99.0% HPLC area purity with LC-MS peptide identity confirmation. SLU-PP-332 and 5-Amino-1MQ are released as small molecules on HPLC purity with structural confirmation, and the 5-Amino-1MQ certificate states the counter-ion because the salt form is real mass in the vial. NAD+ is released on HPLC purity with UV confirmation at 260 nanometres, the correct identity check for a dinucleotide.',
    },
    {
      q: 'Is Metabolic Activation approved for therapeutic use or human consumption?',
      a: 'No. Metabolic Activation is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. No component of the kit is supplied under any therapeutic indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Metabolic Activation?',
      a: 'The minimum order quantity is one complete kit of 4 vials — SLU-PP-332 10 mg, 5-Amino-1MQ 50 mg, NAD+ 100 mg, MOTS-c 10 mg. 99 Purity Wholesale supplies bulk quantities to research institutions, metabolic and mitochondrial research laboratories, and distribution brands. Multi-kit and mixed-configuration procurement is available for qualified partners. We do not fulfill retail or single-vial inquiries.',
    },
    {
      q: 'What physical form is wholesale Metabolic Activation supplied in?',
      a: 'Four separately labelled vials with fills spanning tenfold — NAD+ at 100 mg, 5-Amino-1MQ at 50 mg, and SLU-PP-332 and MOTS-c at 10 mg each. The two 10 mg vials will look nearly empty and that is expected. NAD+ is markedly hygroscopic and takes up atmospheric moisture within minutes of the stopper being broken, so weigh what you need in one operation rather than returning to the vial.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Metabolic Activation?',
      a: 'Store the sealed tray at -20°C (-4°F). MOTS-c holds specification for up to 36 months as a lyophilized peptide. Do not apply one rule across this tray: NAD+ is hygroscopic, degrades in alkaline solution, and should be reconstituted immediately before use rather than kept as stock. SLU-PP-332 is a solid organic small molecule and is the least demanding of the four. 5-Amino-1MQ carries a permanent positive charge with no hydrolysable backbone, making it exceptionally stable in solution.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Metabolic Activation?',
      a: 'Four components, four distinct target classes. SLU-PP-332 is a synthetic pan-agonist at the estrogen-related receptors, a family of orphan nuclear receptors — it acts on transcription, not on a cell surface receptor, and Billon and colleagues characterised it as producing an ERR-alpha dependent aerobic exercise response. 5-Amino-1MQ inhibits nicotinamide N-methyltransferase at the enzyme active site. NAD+ is neither receptor ligand nor inhibitor; it is the redox cofactor that sirtuins and PARP enzymes consume stoichiometrically. MOTS-c is encoded within mitochondrial DNA rather than the nuclear genome and translocates to the nucleus under metabolic stress.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Metabolic Activation?',
      a: 'Yes. Qualified procurement partners can request alternative vial strengths, additional replicates of a single component, unlabeled or private-label presentation, or a SLU-PP-332 replicate set without the cofactor vials. Contact our corporate sales desk with your target composition and kit count to scope the run.',
    },
    {
      q: 'How is wholesale Metabolic Activation packaged and shipped to preserve compound integrity?',
      a: 'Kits ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers holding the shipment in the frozen or refrigerated range through transit. Each vial retains its individual identity label inside the tray so component traceability survives handling. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Metabolic Activation is the only kit in this catalog built around a nuclear receptor rather than a cell surface target. SLU-PP-332 acts on the estrogen-related receptors, which have no known endogenous ligand — they are orphan receptors, so the compound is a genuine chemical tool rather than a hormone analog. That places it in a different experimental category from every peptide in this range: a laboratory reading transcriptional output on a timescale of hours will design around it very differently than around a receptor agonist producing a signal in minutes. The other three components probe the same metabolic question through enzyme inhibition, cofactor supply and mitochondrial-encoded signaling, giving four independent points of intervention on one system.',
    qualityAssurance:
      'One sourcing note specific to SLU-PP-332. It is a recent compound, first described in 2023, and it entered anti-doping detection literature quickly — a 2026 Drug Testing and Analysis paper characterised its in-vitro metabolites specifically for detection purposes. That means reference data exists in the public record for anyone verifying identity independently, which is unusual for a compound this new and worth using. We release it as a small molecule with structural confirmation rather than forcing it through a peptide workflow that would confirm nothing relevant. Each of the four vials ships with a certificate matched to its own chemistry, and the NAD+ certificate reports water content because a hygroscopic cofactor\'s stated mass means little without it.',
  },
};

const METABOLIC_ACTIVATION_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Metabolic Activation al por mayor?',
      a: 'La liberación difiere por componente porque solo uno de los cuatro es un péptido. MOTS-c se libera con ≥99.0% de pureza por área HPLC y confirmación de identidad peptídica por LC-MS. SLU-PP-332 y 5-Amino-1MQ se liberan como moléculas pequeñas por pureza HPLC con confirmación estructural, y el certificado de 5-Amino-1MQ declara el contraión porque la forma salina es masa real en el vial. NAD+ se libera por pureza HPLC con confirmación UV a 260 nanómetros, la verificación de identidad correcta para un dinucleótido.',
    },
    {
      q: '¿Está aprobado Metabolic Activation para uso terapéutico o consumo humano?',
      a: 'No. Metabolic Activation se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ningún componente del kit se suministra con indicación terapéutica alguna.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Metabolic Activation al por mayor?',
      a: 'La cantidad mínima de pedido es un kit completo de 4 viales — SLU-PP-332 10 mg, 5-Amino-1MQ 50 mg, NAD+ 100 mg, MOTS-c 10 mg. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios de investigación metabólica y mitocondrial, y marcas de distribución. Hay disponibilidad de múltiples kits y de configuraciones mixtas para socios calificados. No atendemos consultas minoristas ni de vial individual.',
    },
    {
      q: '¿En qué forma física se suministra Metabolic Activation al por mayor?',
      a: 'Cuatro viales etiquetados por separado con llenados que abarcan diez veces — NAD+ a 100 mg, 5-Amino-1MQ a 50 mg, y SLU-PP-332 y MOTS-c a 10 mg cada uno. Los dos viales de 10 mg parecerán casi vacíos, y es lo esperado. NAD+ es marcadamente higroscópico y absorbe humedad atmosférica en minutos tras romperse el tapón, así que pese lo necesario en una sola operación en lugar de volver al vial.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Metabolic Activation?',
      a: 'Almacene la bandeja sellada a -20°C (-4°F). MOTS-c mantiene especificación hasta 36 meses como péptido liofilizado. No aplique una sola regla a toda la bandeja: NAD+ es higroscópico, se degrada en solución alcalina y debe reconstituirse inmediatamente antes de usarse en lugar de guardarse como solución madre. SLU-PP-332 es una molécula orgánica pequeña sólida y es la menos exigente de las cuatro. 5-Amino-1MQ lleva carga positiva permanente sin esqueleto hidrolizable, lo que lo hace excepcionalmente estable en solución.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Metabolic Activation?',
      a: 'Cuatro componentes, cuatro clases de diana distintas. SLU-PP-332 es un pan-agonista sintético de los receptores relacionados con estrógenos, una familia de receptores nucleares huérfanos — actúa sobre la transcripción, no sobre un receptor de superficie celular, y Billon y colaboradores lo caracterizaron como productor de una respuesta aeróbica de ejercicio dependiente de ERR-alfa. 5-Amino-1MQ inhibe la nicotinamida N-metiltransferasa en el sitio activo enzimático. NAD+ no es ligando de receptor ni inhibidor; es el cofactor redox que sirtuinas y enzimas PARP consumen estequiométricamente. MOTS-c está codificado dentro del ADN mitocondrial y no en el genoma nuclear, y se transloca al núcleo bajo estrés metabólico.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Metabolic Activation al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas de vial, réplicas adicionales de un solo componente, presentación sin marca o de marca privada, o un conjunto replicado de SLU-PP-332 sin los viales de cofactores. Contacte a nuestra mesa de ventas corporativas con su composición objetivo y número de kits para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Metabolic Activation al por mayor para preservar la integridad del compuesto?',
      a: 'Los kits se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío en rango congelado o refrigerado durante el tránsito. Cada vial conserva su etiqueta de identidad individual dentro de la bandeja, de modo que la trazabilidad por componente sobrevive a la manipulación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Metabolic Activation es el único kit de este catálogo construido en torno a un receptor nuclear y no a una diana de superficie celular. SLU-PP-332 actúa sobre los receptores relacionados con estrógenos, que no tienen ligando endógeno conocido — son receptores huérfanos, así que el compuesto es una herramienta química genuina y no un análogo hormonal. Eso lo sitúa en una categoría experimental distinta de todo péptido de esta gama: un laboratorio que lea salida transcripcional en una escala de horas diseñará de forma muy distinta que en torno a un agonista de receptor que produce señal en minutos. Los otros tres componentes exploran la misma cuestión metabólica mediante inhibición enzimática, suministro de cofactor y señalización codificada por mitocondria, dando cuatro puntos independientes de intervención en un sistema.',
    qualityAssurance:
      'Una nota de abastecimiento específica de SLU-PP-332. Es un compuesto reciente, descrito por primera vez en 2023, y entró rápido en la literatura de detección antidopaje — un artículo de 2026 en Drug Testing and Analysis caracterizó sus metabolitos in vitro específicamente con fines de detección. Eso significa que existen datos de referencia en el registro público para quien verifique identidad de forma independiente, algo inusual en un compuesto tan nuevo y que conviene aprovechar. Lo liberamos como molécula pequeña con confirmación estructural en lugar de forzarlo por un flujo peptídico que no confirmaría nada relevante. Cada uno de los cuatro viales se envía con certificado acorde a su propia química, y el de NAD+ reporta contenido de agua porque la masa declarada de un cofactor higroscópico significa poco sin ese dato.',
  },
};

const METABOLIC_SUPPORT_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Metabolic Support?',
      a: 'All three vials are released at ≥99.0% HPLC area purity with LC-MS identity confirmation. Retatrutide receives full peptide mapping appropriate to a lipidated chain above 4700 daltons whose fatty acid side chain dominates its chromatographic behaviour, making retention time a weak identity signal on its own. AOD9604 is checked specifically for the position-one tyrosine that separates it from the unmodified growth hormone 176-191 fragment — a difference of exactly 16 daltons.',
    },
    {
      q: 'Is Metabolic Support approved for therapeutic use or human consumption?',
      a: 'No. Metabolic Support is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. No component of the kit is supplied under any therapeutic indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Metabolic Support?',
      a: 'The minimum order quantity is one complete kit of 3 vials — Retatrutide 10 mg, AOD9604 5 mg, MOTS-c 10 mg. 99 Purity Wholesale supplies bulk quantities to research institutions, metabolic and endocrine research laboratories, and distribution brands. Multi-kit and mixed-configuration procurement is available for qualified partners. We do not fulfill retail or single-vial inquiries.',
    },
    {
      q: 'What physical form is wholesale Metabolic Support supplied in?',
      a: 'Three separately labelled vials of lyophilized powder. Retatrutide is a lipidated analog and its cake can appear slightly glassy rather than fully opaque, which is normal for this class. AOD9604 contains two cysteines forming a disulfide loop that reducing conditions will open. MOTS-c is the only component here encoded in mitochondrial rather than nuclear DNA, and at 16 residues it is the shortest chain in the tray.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Metabolic Support?',
      a: 'Store the sealed tray at -20°C (-4°F) for up to 36 months, with short-term holding at 2°C to 8°C (36°F to 46°F) acceptable and reconstituted material used within 14 days at 2°C to 8°C. Retatrutide is surface-active because of its fatty acid side chain and will concentrate at the air-liquid interface if shaken — swirl to dissolve, and treat visible foaming as a sign the peptide has moved to the surface rather than dispersed.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Metabolic Support?',
      a: 'The three components act at three different cellular locations, which is the design of the kit. Retatrutide is a triple agonist at the GIP, GLP-1 and glucagon receptors — three class B G protein-coupled receptors on the cell surface. AOD9604 acts at adipose tissue as a fragment of the growth hormone molecule itself, and published work reports its lipolytic activity persisting in beta-3 adrenergic receptor knockout models, meaning it does not require that receptor. MOTS-c acts from inside the cell: encoded in mitochondrial DNA, it translocates to the nucleus under metabolic stress to change nuclear gene expression.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Metabolic Support?',
      a: 'Yes. Qualified procurement partners can request alternative vial strengths, additional replicates of a single component, unlabeled or private-label presentation, or a Retatrutide-weighted configuration for extended dose-ranging. Contact our corporate sales desk with your target composition and kit count to scope the run.',
    },
    {
      q: 'How is wholesale Metabolic Support packaged and shipped to preserve compound integrity?',
      a: 'Kits ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers holding the shipment in the frozen or refrigerated range through transit. Each vial retains its individual identity label inside the tray so component traceability survives handling. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Metabolic Support is arranged by cellular location rather than by mechanism family, and that is what makes it useful as an experimental set. One component acts at the plasma membrane, one at adipose tissue independent of the growth hormone receptor, and one from within the mitochondrion. A laboratory seeing an effect with all three but not with Retatrutide alone has localised that effect away from the receptor surface — an inference no single-compound arm supports. Retatrutide is filled at double the AOD9604 quantity because it is the component with the deepest published dose-ranging record and consumes fastest across replicate arms.',
    qualityAssurance:
      'A naming hazard applies to one component here and it deserves stating. AOD9604 and the unmodified human growth hormone 176-191 fragment are sold interchangeably across the sector and they are not the same molecule — AOD9604 carries a tyrosine substituted at position one, giving a formula one oxygen heavier and a mass 16 daltons above the unmodified fragment. Sixteen daltons is invisible on a purity chromatogram and unmistakable on a mass spectrum, so we release this component on LC-MS with the observed mass printed. Retatrutide and MOTS-c ship with peptide mapping and intact mass confirmation respectively, each with its own batch-specific certificate reporting chromatogram, residual solvent and water content.',
  },
};

const METABOLIC_SUPPORT_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Metabolic Support al por mayor?',
      a: 'Los tres viales se liberan con ≥99.0% de pureza por área HPLC y confirmación de identidad por LC-MS. La retatrutida recibe mapeo peptídico completo apropiado para una cadena lipidada de más de 4700 daltons cuya cadena lateral de ácido graso domina su comportamiento cromatográfico, haciendo del tiempo de retención una señal de identidad débil por sí sola. AOD9604 se verifica específicamente por la tirosina en posición uno que lo separa del fragmento 176-191 sin modificar de la hormona del crecimiento — una diferencia de exactamente 16 daltons.',
    },
    {
      q: '¿Está aprobado Metabolic Support para uso terapéutico o consumo humano?',
      a: 'No. Metabolic Support se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ningún componente del kit se suministra con indicación terapéutica alguna.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Metabolic Support al por mayor?',
      a: 'La cantidad mínima de pedido es un kit completo de 3 viales — retatrutida 10 mg, AOD9604 5 mg, MOTS-c 10 mg. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios de investigación metabólica y endocrina, y marcas de distribución. Hay disponibilidad de múltiples kits y de configuraciones mixtas para socios calificados. No atendemos consultas minoristas ni de vial individual.',
    },
    {
      q: '¿En qué forma física se suministra Metabolic Support al por mayor?',
      a: 'Tres viales etiquetados por separado con polvo liofilizado. La retatrutida es un análogo lipidado y su torta puede verse ligeramente vítrea en lugar de completamente opaca, lo cual es normal en esta clase. AOD9604 contiene dos cisteínas que forman un bucle disulfuro que las condiciones reductoras abrirán. MOTS-c es el único componente aquí codificado en ADN mitocondrial y no nuclear, y con 16 residuos es la cadena más corta de la bandeja.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Metabolic Support?',
      a: 'Almacene la bandeja sellada a -20°C (-4°F) hasta 36 meses, siendo aceptable el almacenamiento breve entre 2°C y 8°C (36°F a 46°F) y usando el material reconstituido en 14 días entre 2°C y 8°C. La retatrutida es tensioactiva por su cadena lateral de ácido graso y se concentrará en la interfase aire-líquido si se agita — gire suavemente para disolver, y trate la espuma visible como señal de que el péptido se ha desplazado a la superficie en lugar de dispersarse.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Metabolic Support?',
      a: 'Los tres componentes actúan en tres localizaciones celulares distintas, y ese es el diseño del kit. La retatrutida es un agonista triple de los receptores de GIP, GLP-1 y glucagón — tres receptores acoplados a proteína G de clase B en la superficie celular. AOD9604 actúa en tejido adiposo como fragmento de la propia molécula de hormona del crecimiento, y el trabajo publicado reporta que su actividad lipolítica persiste en modelos con supresión del receptor adrenérgico beta-3, es decir, no requiere ese receptor. MOTS-c actúa desde dentro de la célula: codificado en ADN mitocondrial, se transloca al núcleo bajo estrés metabólico para cambiar la expresión génica nuclear.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Metabolic Support al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas de vial, réplicas adicionales de un solo componente, presentación sin marca o de marca privada, o una configuración con predominio de retatrutida para rango de dosis extendido. Contacte a nuestra mesa de ventas corporativas con su composición objetivo y número de kits para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Metabolic Support al por mayor para preservar la integridad del compuesto?',
      a: 'Los kits se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío en rango congelado o refrigerado durante el tránsito. Cada vial conserva su etiqueta de identidad individual dentro de la bandeja, de modo que la trazabilidad por componente sobrevive a la manipulación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Metabolic Support se organiza por localización celular y no por familia mecanística, y eso es lo que lo hace útil como conjunto experimental. Un componente actúa en la membrana plasmática, otro en tejido adiposo independientemente del receptor de hormona del crecimiento, y otro desde dentro de la mitocondria. Un laboratorio que observe un efecto con los tres pero no con retatrutida sola ha localizado ese efecto lejos de la superficie del receptor — una inferencia que ningún brazo de compuesto único respalda. La retatrutida se llena al doble de la cantidad de AOD9604 porque es el componente con el registro publicado de rango de dosis más profundo y el que se consume más rápido en brazos replicados.',
    qualityAssurance:
      'Un riesgo de nomenclatura aplica a un componente aquí y merece declararse. AOD9604 y el fragmento 176-191 sin modificar de la hormona del crecimiento humana se venden de forma intercambiable en el sector y no son la misma molécula — AOD9604 lleva una tirosina sustituida en la posición uno, dando una fórmula con un oxígeno más y una masa 16 daltons por encima del fragmento sin modificar. Dieciséis daltons son invisibles en un cromatograma de pureza e inconfundibles en un espectro de masas, así que liberamos este componente por LC-MS con la masa observada impresa. Retatrutida y MOTS-c se envían con mapeo peptídico y confirmación de masa intacta respectivamente, cada uno con certificado específico del lote que reporta cromatograma, solvente residual y contenido de agua.',
  },
};

const NAD_ANTIOXIDANT_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale NAD+ & Antioxidant?',
      a: 'Only one of the three is a signaling peptide, so release differs accordingly. MOTS-c is released at ≥99.0% HPLC area purity with LC-MS peptide identity confirmation. NAD+ is released on HPLC purity with UV spectral confirmation at 260 nanometres. Glutathione is released with a free thiol assay in addition to HPLC purity, because the reduced and oxidised forms are chemically distinct species and a purity chromatogram alone will not tell you which one is in the vial.',
    },
    {
      q: 'Is NAD+ & Antioxidant approved for therapeutic use or human consumption?',
      a: 'No. NAD+ & Antioxidant is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. No component of the kit is supplied under any therapeutic indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale NAD+ & Antioxidant?',
      a: 'The minimum order quantity is one complete kit of 3 vials — NAD+ 100 mg, Glutathione 600 mg, MOTS-c 10 mg. 99 Purity Wholesale supplies bulk quantities to research institutions, redox biology and mitochondrial research laboratories, and distribution brands. Multi-kit and mixed-configuration procurement is available for qualified partners. We do not fulfill retail or single-vial inquiries.',
    },
    {
      q: 'What physical form is wholesale NAD+ & Antioxidant supplied in?',
      a: 'Three separately labelled vials with the widest fill range in this catalog — glutathione at 600 mg, NAD+ at 100 mg, and MOTS-c at 10 mg, a sixtyfold span. The 600 mg glutathione fill is the largest single-vial quantity we supply. Both NAD+ and glutathione are hygroscopic and will take up atmospheric moisture quickly once opened; MOTS-c behaves as a conventional lyophilized peptide.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for NAD+ & Antioxidant?',
      a: 'Store the sealed tray at -20°C (-4°F). MOTS-c holds specification for up to 36 months. The two redox components need different care: glutathione oxidises on contact with air and its free thiol is the whole point of the molecule, so reconstitute under minimal headspace and use promptly rather than holding stock solution. NAD+ is hygroscopic and degrades in alkaline conditions. Neither redox component should be treated on the peptide storage schedule.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for NAD+ & Antioxidant?',
      a: 'None of the three shares a mechanism. Glutathione is a tripeptide but not a signaling one — its cysteine thiol is the reactive group, and it functions as the cell\'s principal thiol redox buffer and as substrate for glutathione peroxidases and transferases. NAD+ is a dinucleotide cofactor consumed stoichiometrically by sirtuins and PARP enzymes; it is a substrate, not a regulator. MOTS-c is the only conventional signaling peptide present, encoded within mitochondrial DNA and shown to translocate to the nucleus under metabolic stress to alter nuclear gene expression.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale NAD+ & Antioxidant?',
      a: 'Yes. Qualified procurement partners can request alternative vial strengths, additional replicates of a single component, unlabeled or private-label presentation, or additional glutathione at bulk gram quantities. Contact our corporate sales desk with your target composition and kit count to scope the run.',
    },
    {
      q: 'How is wholesale NAD+ & Antioxidant packaged and shipped to preserve compound integrity?',
      a: 'Kits ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers holding the shipment in the frozen or refrigerated range through transit. Each vial retains its individual identity label inside the tray so component traceability survives handling. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'NAD+ & Antioxidant is a redox chemistry kit that happens to contain one peptide, and reading it as a peptide kit will lead a study design astray. Glutathione at 600 mg is supplied at that quantity because redox buffering is a stoichiometric business — you are titrating a pool, not occupying receptors, and a milligram of a buffer goes nowhere near as far as a milligram of an agonist. The same logic sets NAD+ at 100 mg. MOTS-c at 10 mg is the only component where a small quantity is sufficient, because it acts through gene expression rather than by being consumed. Three components, three completely different quantity logics on one tray.',
    qualityAssurance:
      'A specification point that matters more here than on any peptide tray: glutathione exists as a reduced form carrying a free thiol and an oxidised disulfide-linked dimer, and they are different chemical species with different behaviour. A certificate reporting only HPLC purity does not tell you the ratio, which is why we run a free thiol assay and report the reduced fraction explicitly. Buying glutathione on purity alone is buying an unknown. NAD+ likewise ships with water content reported, since a hygroscopic cofactor\'s stated mass is meaningless without it. MOTS-c ships with conventional peptide documentation including observed intact mass and sequence confirmation.',
  },
};

const NAD_ANTIOXIDANT_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de NAD+ & Antioxidant al por mayor?',
      a: 'Solo uno de los tres es un péptido de señalización, así que la liberación difiere en consecuencia. MOTS-c se libera con ≥99.0% de pureza por área HPLC y confirmación de identidad peptídica por LC-MS. NAD+ se libera por pureza HPLC con confirmación espectral UV a 260 nanómetros. El glutatión se libera con un ensayo de tiol libre además de la pureza HPLC, porque las formas reducida y oxidada son especies químicamente distintas y un cromatograma de pureza por sí solo no indica cuál está en el vial.',
    },
    {
      q: '¿Está aprobado NAD+ & Antioxidant para uso terapéutico o consumo humano?',
      a: 'No. NAD+ & Antioxidant se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ningún componente del kit se suministra con indicación terapéutica alguna.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para NAD+ & Antioxidant al por mayor?',
      a: 'La cantidad mínima de pedido es un kit completo de 3 viales — NAD+ 100 mg, glutatión 600 mg, MOTS-c 10 mg. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios de biología redox e investigación mitocondrial, y marcas de distribución. Hay disponibilidad de múltiples kits y de configuraciones mixtas para socios calificados. No atendemos consultas minoristas ni de vial individual.',
    },
    {
      q: '¿En qué forma física se suministra NAD+ & Antioxidant al por mayor?',
      a: 'Tres viales etiquetados por separado con el rango de llenado más amplio de este catálogo — glutatión a 600 mg, NAD+ a 100 mg y MOTS-c a 10 mg, una diferencia de sesenta veces. El llenado de 600 mg de glutatión es la mayor cantidad en un solo vial que suministramos. Tanto NAD+ como glutatión son higroscópicos y absorberán humedad atmosférica rápidamente una vez abiertos; MOTS-c se comporta como un péptido liofilizado convencional.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de NAD+ & Antioxidant?',
      a: 'Almacene la bandeja sellada a -20°C (-4°F). MOTS-c mantiene especificación hasta 36 meses. Los dos componentes redox requieren cuidados distintos: el glutatión se oxida al contacto con el aire y su tiol libre es la razón de ser de la molécula, así que reconstitúyalo con espacio de cabeza mínimo y úselo de inmediato en lugar de guardar solución madre. NAD+ es higroscópico y se degrada en condiciones alcalinas. Ninguno de los dos componentes redox debe seguir el calendario de almacenamiento de péptidos.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para NAD+ & Antioxidant?',
      a: 'Ninguno de los tres comparte mecanismo. El glutatión es un tripéptido pero no de señalización — su tiol de cisteína es el grupo reactivo, y funciona como principal tampón redox tiólico de la célula y como sustrato de glutatión peroxidasas y transferasas. NAD+ es un cofactor dinucleótido consumido estequiométricamente por sirtuinas y enzimas PARP; es sustrato, no regulador. MOTS-c es el único péptido señalizador convencional presente, codificado dentro del ADN mitocondrial y con translocación demostrada al núcleo bajo estrés metabólico para alterar la expresión génica nuclear.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de NAD+ & Antioxidant al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas de vial, réplicas adicionales de un solo componente, presentación sin marca o de marca privada, o glutatión adicional en cantidades a granel de gramos. Contacte a nuestra mesa de ventas corporativas con su composición objetivo y número de kits para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía NAD+ & Antioxidant al por mayor para preservar la integridad del compuesto?',
      a: 'Los kits se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío en rango congelado o refrigerado durante el tránsito. Cada vial conserva su etiqueta de identidad individual dentro de la bandeja, de modo que la trazabilidad por componente sobrevive a la manipulación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'NAD+ & Antioxidant es un kit de química redox que da la casualidad de contener un péptido, y leerlo como kit peptídico desviará el diseño del estudio. El glutatión a 600 mg se suministra en esa cantidad porque el tamponamiento redox es un asunto estequiométrico — se titula un fondo, no se ocupan receptores, y un miligramo de tampón rinde muchísimo menos que un miligramo de agonista. La misma lógica fija NAD+ en 100 mg. MOTS-c a 10 mg es el único componente donde una cantidad pequeña basta, porque actúa por expresión génica y no por consumo. Tres componentes, tres lógicas de cantidad completamente distintas en una bandeja.',
    qualityAssurance:
      'Un punto de especificación que importa aquí más que en cualquier bandeja peptídica: el glutatión existe como forma reducida con tiol libre y como dímero oxidado unido por disulfuro, y son especies químicas distintas con comportamiento distinto. Un certificado que reporta solo pureza HPLC no indica la proporción, por lo cual ejecutamos un ensayo de tiol libre y reportamos explícitamente la fracción reducida. Comprar glutatión solo por pureza es comprar una incógnita. NAD+ igualmente se envía con contenido de agua reportado, ya que la masa declarada de un cofactor higroscópico carece de sentido sin ese dato. MOTS-c se envía con documentación peptídica convencional que incluye masa intacta observada y confirmación de secuencia.',
  },
};

const NEURO_CORE_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Neuro Core?',
      a: 'Both vials are released at ≥99.0% HPLC area purity with LC-MS identity confirmation. The release explicitly records whether the amino terminus is free or acetylated, because both compounds are sold in acetylated and unacetylated presentations across the sector and the two differ by 42 daltons — a real molecular difference that a purity assay will not surface. The vials in this kit are the unacetylated parent peptides.',
    },
    {
      q: 'Is Neuro Core approved for therapeutic use or human consumption?',
      a: 'No. Neuro Core is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. No component of the kit is supplied under any therapeutic indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Neuro Core?',
      a: 'The minimum order quantity is one complete kit of 2 vials — Semax 10 mg and Selank 10 mg. 99 Purity Wholesale supplies bulk quantities to research institutions, neuroscience laboratories, and distribution brands. Multi-kit and mixed-configuration procurement is available for qualified partners. We do not fulfill retail or single-vial inquiries.',
    },
    {
      q: 'What physical form is wholesale Neuro Core supplied in?',
      a: 'Two separately labelled vials of white lyophilized powder at 10 mg each. Both are short chains — Semax is seven residues near 814 daltons and Selank seven residues near 752 daltons — so the cakes are thin and the vials will look sparsely filled. That is normal for a low-fill lyophilizate of a short peptide and is not a short-fill.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Neuro Core?',
      a: 'Store the sealed tray at -20°C (-4°F) for up to 36 months, with short-term holding at 2°C to 8°C (36°F to 46°F) acceptable and a 14-day window once reconstituted at 2°C to 8°C. Both peptides terminate in a Pro-Gly-Pro tail specifically designed to resist exopeptidase trimming, which makes them unusually stable in solution for chains this short. That stability does not extend to freeze-thaw cycling, so aliquot on first reconstitution rather than re-freezing the vial.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Neuro Core?',
      a: 'The two share a structural design and nothing else. Semax is built on ACTH(4-10), a fragment of adrenocorticotropic hormone, and a 2025 British Journal of Pharmacology report identified the mu opioid receptor gene Oprm1 as a target through which it drives deubiquitination in a rodent model. Selank is built on tuftsin, a tetrapeptide released from the immunoglobulin heavy chain, and its literature centres on GABAergic and cytokine endpoints rather than opioid signaling. Both carry the same C-terminal Pro-Gly-Pro tripeptide grafted on to slow enzymatic degradation — the same engineering solution applied to two unrelated parent molecules.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Neuro Core?',
      a: 'Yes. Qualified procurement partners can request alternative vial strengths, additional replicates of a single component, unlabeled or private-label presentation, or the acetylated presentations substituted for either vial. Contact our corporate sales desk with your target composition and kit count to scope the run.',
    },
    {
      q: 'How is wholesale Neuro Core packaged and shipped to preserve compound integrity?',
      a: 'Kits ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers holding the shipment in the frozen or refrigerated range through transit. Each vial retains its individual identity label inside the tray so component traceability survives handling. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Neuro Core is the cleanest structure-activity comparison available in this catalog, and that is the reason to buy the pair rather than either alone. Semax and Selank were developed by the same research programme using an identical stabilisation strategy — graft a Pro-Gly-Pro tail onto a bioactive fragment — but applied to parent sequences from completely different biology, one hormonal and one immunological. Hold the modification constant and vary the parent, and you have a controlled experiment on what the tail contributes versus what the parent contributes. Panikratova and colleagues studied both compounds within a single functional connectomic framework, which is unusual and gives a published comparison point.',
    qualityAssurance:
      'One point of caution on the evidence base. Much of the Semax and Selank literature originates from a single Russian research programme and appears in journals with limited independent replication outside that programme — a real constraint on how strongly conclusions can be drawn. The 2025 British Journal of Pharmacology paper on Semax is a notable exception, published in a major international pharmacology journal with an identified molecular target. We say this rather than presenting a long reference list as though every entry carried equal weight. Both vials ship with batch-specific certificates showing observed intact mass, chromatogram, residual solvent and water content, with the amino terminal state stated explicitly.',
  },
};

const NEURO_CORE_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Neuro Core al por mayor?',
      a: 'Ambos viales se liberan con ≥99.0% de pureza por área HPLC y confirmación de identidad por LC-MS. La liberación registra explícitamente si el extremo amino es libre o acetilado, porque ambos compuestos se venden en presentaciones aceti-ladas y sin acetilar en todo el sector y las dos difieren en 42 daltons — una diferencia molecular real que un ensayo de pureza no revela. Los viales de este kit son los péptidos parentales sin acetilar.',
    },
    {
      q: '¿Está aprobado Neuro Core para uso terapéutico o consumo humano?',
      a: 'No. Neuro Core se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ningún componente del kit se suministra con indicación terapéutica alguna.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Neuro Core al por mayor?',
      a: 'La cantidad mínima de pedido es un kit completo de 2 viales — Semax 10 mg y Selank 10 mg. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios de neurociencia, y marcas de distribución. Hay disponibilidad de múltiples kits y de configuraciones mixtas para socios calificados. No atendemos consultas minoristas ni de vial individual.',
    },
    {
      q: '¿En qué forma física se suministra Neuro Core al por mayor?',
      a: 'Dos viales etiquetados por separado con polvo liofilizado blanco de 10 mg cada uno. Ambos son cadenas cortas — Semax tiene siete residuos y ronda los 814 daltons y Selank siete residuos cerca de 752 daltons — así que las tortas son delgadas y los viales parecerán escasamente llenos. Es normal en un liofilizado de bajo llenado de un péptido corto y no indica llenado incompleto.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Neuro Core?',
      a: 'Almacene la bandeja sellada a -20°C (-4°F) hasta 36 meses, siendo aceptable el almacenamiento breve entre 2°C y 8°C (36°F a 46°F) y una ventana de 14 días una vez reconstituido entre 2°C y 8°C. Ambos péptidos terminan en una cola Pro-Gly-Pro diseñada específicamente para resistir el recorte por exopeptidasas, lo que los hace inusualmente estables en solución para cadenas tan cortas. Esa estabilidad no se extiende al ciclado de congelación, así que fraccione en alícuotas en la primera reconstitución en lugar de recongelar el vial.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Neuro Core?',
      a: 'Los dos comparten un diseño estructural y nada más. Semax se construye sobre ACTH(4-10), un fragmento de la hormona adrenocorticotrópica, y un informe de 2025 en British Journal of Pharmacology identificó el gen del receptor opioide mu, Oprm1, como diana por la cual impulsa la desubiquitinación en un modelo roedor. Selank se construye sobre la tuftsina, un tetrapéptido liberado de la cadena pesada de inmunoglobulina, y su literatura se centra en variables GABAérgicas y de citoquinas en lugar de señalización opioide. Ambos llevan el mismo tripéptido C-terminal Pro-Gly-Pro injertado para ralentizar la degradación enzimática — la misma solución de ingeniería aplicada a dos moléculas parentales no relacionadas.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Neuro Core al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas de vial, réplicas adicionales de un solo componente, presentación sin marca o de marca privada, o las presentaciones aceti-ladas en sustitución de cualquiera de los viales. Contacte a nuestra mesa de ventas corporativas con su composición objetivo y número de kits para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Neuro Core al por mayor para preservar la integridad del compuesto?',
      a: 'Los kits se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío en rango congelado o refrigerado durante el tránsito. Cada vial conserva su etiqueta de identidad individual dentro de la bandeja, de modo que la trazabilidad por componente sobrevive a la manipulación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Neuro Core es la comparación estructura-actividad más limpia disponible en este catálogo, y esa es la razón para adquirir el par en lugar de cualquiera por separado. Semax y Selank fueron desarrollados por el mismo programa de investigación usando una estrategia de estabilización idéntica — injertar una cola Pro-Gly-Pro en un fragmento bioactivo — pero aplicada a secuencias parentales de biología completamente distinta, una hormonal y otra inmunológica. Mantenga constante la modificación y varíe el parental, y tendrá un experimento controlado sobre qué aporta la cola frente a qué aporta el parental. Panikratova y colaboradores estudiaron ambos compuestos dentro de un mismo marco conectómico funcional, lo cual es inusual y ofrece un punto de comparación publicado.',
    qualityAssurance:
      'Un punto de cautela sobre la base de evidencia. Buena parte de la literatura de Semax y Selank proviene de un solo programa de investigación ruso y aparece en revistas con replicación independiente limitada fuera de ese programa — una restricción real sobre la fuerza de las conclusiones. El artículo de 2025 en British Journal of Pharmacology sobre Semax es una excepción notable, publicado en una revista internacional de farmacología de primer nivel y con una diana molecular identificada. Lo decimos en lugar de presentar una lista larga de referencias como si cada entrada tuviera el mismo peso. Ambos viales se envían con certificados específicos del lote que muestran masa intacta observada, cromatograma, solvente residual y contenido de agua, con el estado del extremo amino declarado explícitamente.',
  },
};

const RECOVERY_SLEEP_STRESS_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Recovery, Sleep & Stress?',
      a: 'All three vials are released at ≥99.0% HPLC area purity with LC-MS identity confirmation. Oxytocin receives the closest attention: it contains a disulfide bridge between two cysteines that defines its ring structure, so its release confirms correct disulfide formation rather than intact mass alone — a reduced, linearised batch has the same amino acid composition and a mass two daltons higher, and it is a different molecule. DSIP and Selank are linear chains released on intact mass and sequence confirmation.',
    },
    {
      q: 'Is Recovery, Sleep & Stress approved for therapeutic use or human consumption?',
      a: 'No. Recovery, Sleep & Stress is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. No component of the kit is supplied under any therapeutic indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Recovery, Sleep & Stress?',
      a: 'The minimum order quantity is one complete kit of 3 vials — DSIP 5 mg, Selank 10 mg, Oxytocin 10 mg. 99 Purity Wholesale supplies bulk quantities to research institutions, neuroscience and behavioural research laboratories, and distribution brands. Multi-kit and mixed-configuration procurement is available for qualified partners. We do not fulfill retail or single-vial inquiries.',
    },
    {
      q: 'What physical form is wholesale Recovery, Sleep & Stress supplied in?',
      a: 'Three separately labelled vials of white lyophilized powder — DSIP at 5 mg, Selank and Oxytocin at 10 mg each. Oxytocin is the only cyclic component, closed by a disulfide bridge rather than running as an open chain, which is why it behaves differently on reconstitution. DSIP is a nine-residue linear chain and the smallest fill in the tray.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Recovery, Sleep & Stress?',
      a: 'Store the sealed tray at -20°C (-4°F) for up to 36 months, with short-term holding at 2°C to 8°C (36°F to 46°F) acceptable and reconstituted material used within 14 days at 2°C to 8°C. Keep reducing agents away from the oxytocin vial entirely — its disulfide bridge is structural, and a reducing buffer will open the ring and produce a linear peptide that assays as pure. Selank\'s Pro-Gly-Pro tail gives it the best solution stability of the three.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Recovery, Sleep & Stress?',
      a: 'The three components sit at very different levels of mechanistic certainty, and that gap is the most useful thing about this tray. Oxytocin acts at the oxytocin receptor, a class A G protein-coupled receptor characterised in depth — Jurek and Neumann\'s 2018 Physiological Reviews survey traces its signaling from receptor to behaviour. Selank is a tuftsin analog studied against GABAergic and cytokine endpoints. DSIP has no identified receptor at all: first described in 1977, it was still being called an unresolved riddle in a 2006 Journal of Neurochemistry review, and that remains the honest position today.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Recovery, Sleep & Stress?',
      a: 'Yes. Qualified procurement partners can request alternative vial strengths, additional replicates of a single component, unlabeled or private-label presentation, or an oxytocin-only replicate set for receptor binding work. Contact our corporate sales desk with your target composition and kit count to scope the run.',
    },
    {
      q: 'How is wholesale Recovery, Sleep & Stress packaged and shipped to preserve compound integrity?',
      a: 'Kits ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers holding the shipment in the frozen or refrigerated range through transit. Each vial retains its individual identity label inside the tray so component traceability survives handling. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Recovery, Sleep & Stress spans the full range from a fully characterised receptor system to one that has resisted characterisation for nearly fifty years, and a laboratory should design around that difference rather than treat the three as equivalent. Oxytocin comes with a defined receptor, a resolved signaling map, and decades of independent replication across many groups — an experiment using it has a positive control built in. DSIP comes with none of that. It was isolated in 1977 and no receptor has been identified since, which means a DSIP arm is exploratory work, not confirmatory work, and results from it need correspondingly cautious interpretation.',
    qualityAssurance:
      'The evidence disclosure on this tray concerns DSIP and it is substantial. Nearly five decades after its isolation, DSIP has no identified receptor, no confirmed endogenous role, and a literature that reviewers have repeatedly described as unresolved. We supply it because laboratories legitimately want to investigate it, and we release it to the same ≥99.0% purity standard as everything else — but purity and mechanistic validity are separate questions, and a certificate of analysis speaks only to the first. Oxytocin sits at the opposite pole with an exceptionally well-mapped receptor system. Each vial ships with a batch-specific certificate, and the oxytocin certificate confirms disulfide integrity explicitly.',
  },
};

const RECOVERY_SLEEP_STRESS_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Recovery, Sleep & Stress al por mayor?',
      a: 'Los tres viales se liberan con ≥99.0% de pureza por área HPLC y confirmación de identidad por LC-MS. La oxitocina recibe la mayor atención: contiene un puente disulfuro entre dos cisteínas que define su estructura anular, así que su liberación confirma la formación correcta del disulfuro y no solo la masa intacta — un lote reducido y linealizado tiene la misma composición de aminoácidos y una masa dos daltons mayor, y es una molécula distinta. DSIP y Selank son cadenas lineales liberadas por masa intacta y confirmación de secuencia.',
    },
    {
      q: '¿Está aprobado Recovery, Sleep & Stress para uso terapéutico o consumo humano?',
      a: 'No. Recovery, Sleep & Stress se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ningún componente del kit se suministra con indicación terapéutica alguna.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Recovery, Sleep & Stress al por mayor?',
      a: 'La cantidad mínima de pedido es un kit completo de 3 viales — DSIP 5 mg, Selank 10 mg, oxitocina 10 mg. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios de neurociencia e investigación conductual, y marcas de distribución. Hay disponibilidad de múltiples kits y de configuraciones mixtas para socios calificados. No atendemos consultas minoristas ni de vial individual.',
    },
    {
      q: '¿En qué forma física se suministra Recovery, Sleep & Stress al por mayor?',
      a: 'Tres viales etiquetados por separado con polvo liofilizado blanco — DSIP a 5 mg, Selank y oxitocina a 10 mg cada uno. La oxitocina es el único componente cíclico, cerrado por un puente disulfuro en lugar de correr como cadena abierta, y por eso se comporta de forma distinta al reconstituirse. DSIP es una cadena lineal de nueve residuos y el llenado más pequeño de la bandeja.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Recovery, Sleep & Stress?',
      a: 'Almacene la bandeja sellada a -20°C (-4°F) hasta 36 meses, siendo aceptable el almacenamiento breve entre 2°C y 8°C (36°F a 46°F) y usando el material reconstituido en 14 días entre 2°C y 8°C. Mantenga los agentes reductores completamente lejos del vial de oxitocina — su puente disulfuro es estructural, y un tampón reductor abrirá el anillo y producirá un péptido lineal que se analizará como puro. La cola Pro-Gly-Pro de Selank le da la mejor estabilidad en solución de las tres.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Recovery, Sleep & Stress?',
      a: 'Los tres componentes se sitúan en niveles muy distintos de certeza mecanística, y esa brecha es lo más útil de esta bandeja. La oxitocina actúa en el receptor de oxitocina, un receptor acoplado a proteína G de clase A caracterizado en profundidad — la revisión de 2018 de Jurek y Neumann en Physiological Reviews traza su señalización desde el receptor hasta la conducta. Selank es un análogo de tuftsina estudiado frente a variables GABAérgicas y de citoquinas. DSIP no tiene receptor identificado alguno: descrito por primera vez en 1977, todavía se lo calificaba de enigma sin resolver en una revisión de 2006 en Journal of Neurochemistry, y esa sigue siendo la posición honesta hoy.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Recovery, Sleep & Stress al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas de vial, réplicas adicionales de un solo componente, presentación sin marca o de marca privada, o un conjunto replicado solo de oxitocina para trabajo de unión a receptor. Contacte a nuestra mesa de ventas corporativas con su composición objetivo y número de kits para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Recovery, Sleep & Stress al por mayor para preservar la integridad del compuesto?',
      a: 'Los kits se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío en rango congelado o refrigerado durante el tránsito. Cada vial conserva su etiqueta de identidad individual dentro de la bandeja, de modo que la trazabilidad por componente sobrevive a la manipulación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Recovery, Sleep & Stress abarca todo el rango desde un sistema de receptores plenamente caracterizado hasta uno que ha resistido la caracterización durante casi cincuenta años, y un laboratorio debe diseñar en torno a esa diferencia en lugar de tratar los tres como equivalentes. La oxitocina viene con receptor definido, mapa de señalización resuelto y décadas de replicación independiente por muchos grupos — un experimento que la use lleva un control positivo incorporado. DSIP no viene con nada de eso. Se aisló en 1977 y no se ha identificado receptor desde entonces, lo que significa que un brazo con DSIP es trabajo exploratorio y no confirmatorio, y sus resultados requieren una interpretación correspondientemente cautelosa.',
    qualityAssurance:
      'La divulgación de evidencia en esta bandeja concierne a DSIP y es sustancial. Casi cinco décadas después de su aislamiento, DSIP no tiene receptor identificado, ni papel endógeno confirmado, y una literatura que los revisores han descrito repetidamente como no resuelta. Lo suministramos porque los laboratorios legítimamente quieren investigarlo, y lo liberamos al mismo estándar de ≥99.0% de pureza que todo lo demás — pero pureza y validez mecanística son cuestiones separadas, y un certificado de análisis solo habla de la primera. La oxitocina ocupa el polo opuesto con un sistema de receptores excepcionalmente bien mapeado. Cada vial se envía con certificado específico del lote, y el de oxitocina confirma explícitamente la integridad del disulfuro.',
  },
};

const REPAIR_TRIO_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Repair Trio?',
      a: 'All three vials are released at ≥99.0% HPLC area purity, but GHK-Cu requires an extra step the other two do not. It is a copper complex, so its release includes copper content determination alongside peptide purity — the coordinated metal is part of the molecule, and a batch carrying the correct peptide with the wrong copper stoichiometry passes an HPLC purity assay while being an incorrectly loaded complex. BPC-157 and TB-500 are released on intact mass and sequence confirmation.',
    },
    {
      q: 'Is Repair Trio approved for therapeutic use or human consumption?',
      a: 'No. Repair Trio is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. No component of the kit is supplied under any therapeutic indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Repair Trio?',
      a: 'The minimum order quantity is one complete kit of 3 vials — BPC-157 5 mg, TB-500 5 mg, GHK-Cu 50 mg. 99 Purity Wholesale supplies bulk quantities to research institutions, tissue repair and dermal research laboratories, and distribution brands. Multi-kit and mixed-configuration procurement is available for qualified partners. We do not fulfill retail or single-vial inquiries.',
    },
    {
      q: 'What physical form is wholesale Repair Trio supplied in?',
      a: 'Three separately labelled vials. Two are white lyophilized powder; the GHK-Cu vial is visibly different — copper-complexed GHK is deep blue, and that colour is the coordinated copper rather than a dye or a contaminant. A pale or colourless GHK-Cu cake indicates under-loaded copper and is a genuine quality signal you can read by eye before any assay. GHK-Cu is filled at 50 mg against 5 mg for the two repair peptides.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Repair Trio?',
      a: 'Store the sealed tray at -20°C (-4°F) for up to 36 months, with short-term holding at 2°C to 8°C (36°F to 46°F) acceptable and reconstituted material used within 14 days at 2°C to 8°C. GHK-Cu needs one additional precaution the others do not: avoid chelating buffers entirely. EDTA and similar agents will strip the coordinated copper and leave behind free GHK tripeptide, which is a different molecule with different behaviour and will still read as pure on a chromatogram.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Repair Trio?',
      a: 'Three components, three separate mechanistic footings. TB-500 corresponds to the actin-binding region of thymosin beta-4 and its studied action is sequestration of monomeric actin — a physically defined interaction. GHK-Cu is a copper-carrying tripeptide, and Pickart and Margolina\'s gene expression work is what distinguishes it: the copper is not incidental, it is central to the complex\'s activity in matrix-related research. BPC-157 sits apart from both. It is a synthetic sequence from a gastric juice protein with no identified receptor, and its literature is organised around nitric oxide and angiogenic readouts rather than a defined binding event.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Repair Trio?',
      a: 'Yes. Qualified procurement partners can request alternative vial strengths, additional replicates of a single component, unlabeled or private-label presentation, or a GHK-Cu heavy configuration for matrix formulation work. Contact our corporate sales desk with your target composition and kit count to scope the run.',
    },
    {
      q: 'How is wholesale Repair Trio packaged and shipped to preserve compound integrity?',
      a: 'Kits ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers holding the shipment in the frozen or refrigerated range through transit. Each vial retains its individual identity label inside the tray so component traceability survives handling. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Repair Trio contains the only metal-complexed compound in this catalog, and that single fact changes how the tray should be handled. GHK-Cu is not a peptide with a copper impurity; it is a coordination complex where the copper ion is a structural component. That means it interacts with buffer chemistry in ways no other product here does, it can be read visually for quality, and it requires an analytical step — copper content — that has no counterpart in peptide release. Pair it with two conventional repair peptides at 5 mg each and a laboratory gets a matrix-focused arm and two cytoskeletal and signaling arms from one lot.',
    qualityAssurance:
      'Two things belong on the record for this tray. BPC-157 has no identified receptor despite a large publication count, and the overwhelming majority of that literature comes from a single research group — volume is not independent replication, and study designs should weight it accordingly. TB-500 is a labelling matter: the material supplied is the Ac-LKKTETQ fragment, not full-length thymosin beta-4, so conclusions drawn from full-length protein studies do not transfer without qualification. GHK-Cu is the best-supported component here, with independent groups reporting on both its gene expression effects and its dermal applications. All three ship with batch-specific certificates; the GHK-Cu certificate reports copper content.',
  },
};

const REPAIR_TRIO_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Repair Trio al por mayor?',
      a: 'Los tres viales se liberan con ≥99.0% de pureza por área HPLC, pero GHK-Cu requiere un paso adicional que los otros dos no. Es un complejo de cobre, así que su liberación incluye determinación del contenido de cobre junto a la pureza peptídica — el metal coordinado es parte de la molécula, y un lote con el péptido correcto pero la estequiometría de cobre equivocada supera un ensayo de pureza HPLC siendo un complejo mal cargado. BPC-157 y TB-500 se liberan por masa intacta y confirmación de secuencia.',
    },
    {
      q: '¿Está aprobado Repair Trio para uso terapéutico o consumo humano?',
      a: 'No. Repair Trio se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ningún componente del kit se suministra con indicación terapéutica alguna.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Repair Trio al por mayor?',
      a: 'La cantidad mínima de pedido es un kit completo de 3 viales — BPC-157 5 mg, TB-500 5 mg, GHK-Cu 50 mg. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios de reparación tisular e investigación dérmica, y marcas de distribución. Hay disponibilidad de múltiples kits y de configuraciones mixtas para socios calificados. No atendemos consultas minoristas ni de vial individual.',
    },
    {
      q: '¿En qué forma física se suministra Repair Trio al por mayor?',
      a: 'Tres viales etiquetados por separado. Dos contienen polvo liofilizado blanco; el vial de GHK-Cu es visiblemente distinto — el GHK complejado con cobre es azul intenso, y ese color es el cobre coordinado y no un colorante ni un contaminante. Una torta de GHK-Cu pálida o incolora indica cobre insuficientemente cargado y es una señal de calidad genuina que puede leerse a simple vista antes de cualquier ensayo. GHK-Cu se llena a 50 mg frente a 5 mg de los dos péptidos de reparación.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Repair Trio?',
      a: 'Almacene la bandeja sellada a -20°C (-4°F) hasta 36 meses, siendo aceptable el almacenamiento breve entre 2°C y 8°C (36°F a 46°F) y usando el material reconstituido en 14 días entre 2°C y 8°C. GHK-Cu necesita una precaución adicional que los otros no: evite por completo los tampones quelantes. El EDTA y agentes similares arrancarán el cobre coordinado y dejarán tripéptido GHK libre, que es una molécula distinta con comportamiento distinto y que aun así se leerá como pura en un cromatograma.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Repair Trio?',
      a: 'Tres componentes, tres bases mecanísticas separadas. TB-500 corresponde a la región de unión a actina de la timosina beta-4 y su acción estudiada es el secuestro de actina monomérica — una interacción físicamente definida. GHK-Cu es un tripéptido portador de cobre, y el trabajo de expresión génica de Pickart y Margolina es lo que lo distingue: el cobre no es incidental, es central para la actividad del complejo en investigación relacionada con matriz. BPC-157 se aparta de ambos. Es una secuencia sintética de una proteína del jugo gástrico sin receptor identificado, y su literatura se organiza en torno a lecturas de óxido nítrico y angiogénesis y no a un evento de unión definido.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Repair Trio al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas de vial, réplicas adicionales de un solo componente, presentación sin marca o de marca privada, o una configuración con predominio de GHK-Cu para trabajo de formulación de matriz. Contacte a nuestra mesa de ventas corporativas con su composición objetivo y número de kits para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Repair Trio al por mayor para preservar la integridad del compuesto?',
      a: 'Los kits se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío en rango congelado o refrigerado durante el tránsito. Cada vial conserva su etiqueta de identidad individual dentro de la bandeja, de modo que la trazabilidad por componente sobrevive a la manipulación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Repair Trio contiene el único compuesto complejado con metal de este catálogo, y ese solo hecho cambia cómo debe manejarse la bandeja. GHK-Cu no es un péptido con una impureza de cobre; es un complejo de coordinación donde el ion cobre es un componente estructural. Eso significa que interactúa con la química de tampones de formas que ningún otro producto aquí hace, que puede leerse visualmente para calidad, y que exige un paso analítico — contenido de cobre — sin contraparte en la liberación peptídica. Combínelo con dos péptidos de reparación convencionales a 5 mg cada uno y un laboratorio obtiene un brazo enfocado en matriz y dos brazos citoesqueléticos y de señalización desde un mismo lote.',
    qualityAssurance:
      'Dos cuestiones deben constar para esta bandeja. BPC-157 no tiene receptor identificado pese a un elevado número de publicaciones, y la abrumadora mayoría de esa literatura procede de un solo grupo de investigación — el volumen no es replicación independiente, y los diseños de estudio deben ponderarlo. TB-500 es una cuestión de etiquetado: el material suministrado es el fragmento Ac-LKKTETQ, no timosina beta-4 de longitud completa, así que las conclusiones de estudios de la proteína completa no se transfieren sin matices. GHK-Cu es el componente mejor respaldado aquí, con grupos independientes reportando tanto sus efectos sobre expresión génica como sus aplicaciones dérmicas. Los tres se envían con certificados específicos del lote; el de GHK-Cu reporta el contenido de cobre.',
  },
};

const REPRODUCTIVE_HPG_AXIS_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Reproductive / HPG-Axis?',
      a: 'Both vials are released at ≥99.0% HPLC area purity with LC-MS identity confirmation. Gonadorelin needs particular care at the amino terminus: it begins with pyroglutamate, a cyclised glutamine residue, and a batch in which that cyclisation is incomplete contains a different molecule that is 17 daltons heavier and chromatographically close. Our release confirms the pyroglutamate is formed. Kisspeptin-10 is a linear decapeptide released on intact mass and sequence confirmation.',
    },
    {
      q: 'Is Reproductive / HPG-Axis approved for therapeutic use or human consumption?',
      a: 'No. Reproductive / HPG-Axis is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. No component of the kit is supplied under any therapeutic indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Reproductive / HPG-Axis?',
      a: 'The minimum order quantity is one complete kit of 2 vials — Gonadorelin 10 mg and Kisspeptin-10 10 mg. 99 Purity Wholesale supplies bulk quantities to research institutions, reproductive endocrinology laboratories, and distribution brands. Multi-kit and mixed-configuration procurement is available for qualified partners. We do not fulfill retail or single-vial inquiries.',
    },
    {
      q: 'What physical form is wholesale Reproductive / HPG-Axis supplied in?',
      a: 'Two separately labelled vials of white lyophilized powder at 10 mg each. Gonadorelin is a ten-residue chain near 1182 daltons; Kisspeptin-10 is also ten residues but near 1302 daltons, so the two are unusually close in both length and mass for compounds acting at different receptors. Label discipline matters here — same fill, same appearance, similar mass, different target.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Reproductive / HPG-Axis?',
      a: 'Store the sealed tray at -20°C (-4°F) for up to 36 months, with short-term holding at 2°C to 8°C (36°F to 46°F) acceptable and reconstituted material used within 14 days at 2°C to 8°C. Gonadorelin\'s pyroglutamate amino terminus and C-terminal amide together protect both ends against exopeptidase attack, which gives it better solution stability than an unprotected decapeptide. Kisspeptin-10 is unprotected at the amino terminus and is the shorter-lived of the two in solution.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Reproductive / HPG-Axis?',
      a: 'The two sit at consecutive levels of one axis, which is the whole design. Kisspeptin-10 acts at KISS1R, also catalogued as GPR54 — the receptor whose loss of function de Roux and Seminara independently identified in 2003 as a cause of hypogonadotropic hypogonadism, establishing kisspeptin signaling as an upstream gatekeeper. Gonadorelin sits one level down: it is not an analog of gonadotropin releasing hormone, it is native GnRH itself, the natural decapeptide. So one vial drives the release of what the other vial contains — a directly sequential relationship no other kit here offers.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Reproductive / HPG-Axis?',
      a: 'Yes. Qualified procurement partners can request alternative vial strengths, additional replicates of a single component, unlabeled or private-label presentation, or additional Gonadorelin replicates for pulsatile exposure protocols. Contact our corporate sales desk with your target composition and kit count to scope the run.',
    },
    {
      q: 'How is wholesale Reproductive / HPG-Axis packaged and shipped to preserve compound integrity?',
      a: 'Kits ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers holding the shipment in the frozen or refrigerated range through transit. Each vial retains its individual identity label inside the tray so component traceability survives handling. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Reproductive / HPG-Axis is a two-level kit rather than a two-compound kit, and the distinction matters for how an experiment is designed. Gonadorelin is native GnRH, not a superagonist analog like the compounds used in long-acting formulations, and that identity carries a specific consequence: the GnRH receptor responds very differently to pulsatile versus continuous exposure, with sustained occupancy producing receptor desensitisation rather than sustained output. An experiment that leaves gonadorelin in the well continuously will observe the opposite of what an intermittent protocol observes. Pairing it with the upstream kisspeptin arm lets a laboratory ask whether an effect originates above or at the GnRH level.',
    qualityAssurance:
      'A naming clarification worth making, because the sector is loose about it. Gonadorelin is the native gonadotropin releasing hormone decapeptide — it is not leuprolide, goserelin, triptorelin or any of the substituted superagonists, all of which carry amino acid replacements that dramatically extend receptor occupancy and produce opposite functional outcomes under sustained exposure. Citing superagonist literature for gonadorelin will mislead a study design. We supply the native sequence and state so explicitly. Both vials ship with batch-specific certificates reporting observed intact mass, chromatogram, residual solvent and water content, with the gonadorelin certificate confirming pyroglutamate formation at the amino terminus.',
  },
};

const REPRODUCTIVE_HPG_AXIS_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Reproductive / HPG-Axis al por mayor?',
      a: 'Ambos viales se liberan con ≥99.0% de pureza por área HPLC y confirmación de identidad por LC-MS. La gonadorelina requiere cuidado particular en el extremo amino: comienza con piroglutamato, un residuo de glutamina ciclado, y un lote en el que esa ciclación es incompleta contiene una molécula distinta 17 daltons más pesada y cromatográficamente próxima. Nuestra liberación confirma que el piroglutamato está formado. La kisspeptina-10 es un decapéptido lineal liberado por masa intacta y confirmación de secuencia.',
    },
    {
      q: '¿Está aprobado Reproductive / HPG-Axis para uso terapéutico o consumo humano?',
      a: 'No. Reproductive / HPG-Axis se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ningún componente del kit se suministra con indicación terapéutica alguna.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Reproductive / HPG-Axis al por mayor?',
      a: 'La cantidad mínima de pedido es un kit completo de 2 viales — gonadorelina 10 mg y kisspeptina-10 10 mg. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios de endocrinología reproductiva, y marcas de distribución. Hay disponibilidad de múltiples kits y de configuraciones mixtas para socios calificados. No atendemos consultas minoristas ni de vial individual.',
    },
    {
      q: '¿En qué forma física se suministra Reproductive / HPG-Axis al por mayor?',
      a: 'Dos viales etiquetados por separado con polvo liofilizado blanco de 10 mg cada uno. La gonadorelina es una cadena de diez residuos cercana a 1182 daltons; la kisspeptina-10 también tiene diez residuos pero ronda los 1302 daltons, de modo que las dos son inusualmente cercanas en longitud y masa para compuestos que actúan en receptores distintos. La disciplina de etiquetado importa aquí — mismo llenado, misma apariencia, masa similar, diana distinta.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Reproductive / HPG-Axis?',
      a: 'Almacene la bandeja sellada a -20°C (-4°F) hasta 36 meses, siendo aceptable el almacenamiento breve entre 2°C y 8°C (36°F a 46°F) y usando el material reconstituido en 14 días entre 2°C y 8°C. El extremo amino de piroglutamato de la gonadorelina y su amida C-terminal protegen juntos ambos extremos frente al ataque de exopeptidasas, lo que le da mejor estabilidad en solución que a un decapéptido desprotegido. La kisspeptina-10 está desprotegida en el extremo amino y es la de vida más corta en solución de las dos.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Reproductive / HPG-Axis?',
      a: 'Los dos ocupan niveles consecutivos de un mismo eje, y ese es todo el diseño. La kisspeptina-10 actúa en KISS1R, catalogado también como GPR54 — el receptor cuya pérdida de función de Roux y Seminara identificaron independientemente en 2003 como causa de hipogonadismo hipogonadotrópico, estableciendo la señalización por kisspeptina como guardián corriente arriba. La gonadorelina se sitúa un nivel más abajo: no es un análogo de la hormona liberadora de gonadotropinas, es la propia GnRH nativa, el decapéptido natural. Así, un vial impulsa la liberación de lo que contiene el otro vial — una relación directamente secuencial que ningún otro kit aquí ofrece.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Reproductive / HPG-Axis al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas de vial, réplicas adicionales de un solo componente, presentación sin marca o de marca privada, o réplicas adicionales de gonadorelina para protocolos de exposición pulsátil. Contacte a nuestra mesa de ventas corporativas con su composición objetivo y número de kits para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Reproductive / HPG-Axis al por mayor para preservar la integridad del compuesto?',
      a: 'Los kits se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío en rango congelado o refrigerado durante el tránsito. Cada vial conserva su etiqueta de identidad individual dentro de la bandeja, de modo que la trazabilidad por componente sobrevive a la manipulación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Reproductive / HPG-Axis es un kit de dos niveles y no de dos compuestos, y la distinción importa para diseñar un experimento. La gonadorelina es GnRH nativa, no un análogo superagonista como los compuestos usados en formulaciones de acción prolongada, y esa identidad acarrea una consecuencia específica: el receptor de GnRH responde de forma muy distinta a exposición pulsátil frente a continua, produciendo la ocupación sostenida desensibilización del receptor en lugar de salida sostenida. Un experimento que deje gonadorelina en el pocillo de forma continua observará lo contrario de lo que observa un protocolo intermitente. Emparejarla con el brazo de kisspeptina corriente arriba permite a un laboratorio preguntar si un efecto se origina por encima del nivel de GnRH o en él.',
    qualityAssurance:
      'Una aclaración de nomenclatura que conviene hacer, porque el sector es laxo al respecto. La gonadorelina es el decapéptido nativo de la hormona liberadora de gonadotropinas — no es leuprolida, goserelina, triptorelina ni ninguno de los superagonistas sustituidos, todos los cuales llevan reemplazos de aminoácidos que extienden drásticamente la ocupación del receptor y producen resultados funcionales opuestos bajo exposición sostenida. Citar literatura de superagonistas para la gonadorelina desviará el diseño de un estudio. Suministramos la secuencia nativa y lo declaramos explícitamente. Ambos viales se envían con certificados específicos del lote que reportan masa intacta observada, cromatograma, solvente residual y contenido de agua, y el de gonadorelina confirma la formación de piroglutamato en el extremo amino.',
  },
};

const SKIN_COSMETIC_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Skin & Cosmetic?',
      a: 'Each component takes a different release path. GHK-Cu is released with copper content determination alongside ≥99.0% HPLC purity, because the coordinated metal is structural. Glutathione is released with a free thiol assay in addition to purity, since the reduced and oxidised forms are chemically distinct and a chromatogram alone will not distinguish which is in the vial. SNAP-8 is a conventional lyophilized peptide released at ≥99.0% HPLC with LC-MS identity and acetylation confirmation.',
    },
    {
      q: 'Is Skin & Cosmetic approved for therapeutic use or human consumption?',
      a: 'No. Skin & Cosmetic is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. No component of the kit is supplied under any therapeutic indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Skin & Cosmetic?',
      a: 'The minimum order quantity is one complete kit of 3 vials — GHK-Cu 50 mg, Glutathione 600 mg, SNAP-8 10 mg. 99 Purity Wholesale supplies bulk quantities to research institutions, dermal formulation and cosmetic science laboratories, and distribution brands. Multi-kit and mixed-configuration procurement is available for qualified partners. We do not fulfill retail or single-vial inquiries.',
    },
    {
      q: 'What physical form is wholesale Skin & Cosmetic supplied in?',
      a: 'Three separately labelled vials spanning a sixtyfold fill range — glutathione at 600 mg, GHK-Cu at 50 mg, SNAP-8 at 10 mg. Only two are white: the GHK-Cu cake is deep blue from its coordinated copper, and a pale one signals under-loaded copper before any assay is run. Both GHK-Cu and glutathione are hygroscopic. SNAP-8 behaves as a standard lyophilized peptide.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Skin & Cosmetic?',
      a: 'Store the sealed tray at -20°C (-4°F) for up to 36 months, with short-term holding at 2°C to 8°C (36°F to 46°F) acceptable. Two components need care beyond the standard schedule: glutathione oxidises on air contact and its free thiol is the functional group, so reconstitute under minimal headspace and use promptly. GHK-Cu must be kept away from chelating buffers entirely — EDTA and similar agents strip the coordinated copper and leave free GHK tripeptide, a different molecule that still reads as pure.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Skin & Cosmetic?',
      a: 'Three components, three separate chemistries with nothing shared between them. GHK-Cu is a copper coordination complex studied against matrix and gene expression endpoints, where the metal is central rather than incidental. Glutathione works through its cysteine thiol as the cell\'s principal thiol redox buffer and as substrate for glutathione peroxidases — it is a tripeptide but not a signaling one. SNAP-8 is an eight-residue analog of the SNAP-25 amino terminal fragment, studied for its interaction with SNARE complex assembly, the machinery Fasshauer and colleagues classified structurally in 1998.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Skin & Cosmetic?',
      a: 'Yes. Qualified procurement partners can request alternative vial strengths, additional replicates of a single component, unlabeled or private-label presentation, or bulk glutathione at gram quantities for formulation screening. Contact our corporate sales desk with your target composition and kit count to scope the run.',
    },
    {
      q: 'How is wholesale Skin & Cosmetic packaged and shipped to preserve compound integrity?',
      a: 'Kits ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers holding the shipment in the frozen or refrigerated range through transit. Each vial retains its individual identity label inside the tray so component traceability survives handling. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Skin & Cosmetic is a formulation kit, and its fill sizes reflect that rather than following any receptor logic. Glutathione at 600 mg is supplied at that quantity because formulation screening burns through a redox buffer quickly — you are titrating a pool across concentration series, not occupying binding sites. GHK-Cu at 50 mg suits matrix work at working concentrations. SNAP-8 at 10 mg is sufficient because it acts on a protein assembly interaction rather than being consumed. Three components, three fill logics, and a molecular weight spread of more than threefold between the tripeptide and the octapeptide.',
    qualityAssurance:
      'Two specification points that ordinary purity certificates do not cover. Glutathione exists as a reduced free-thiol form and an oxidised disulfide dimer; these are different chemical species and an HPLC purity figure does not tell you the ratio, which is why we run a free thiol assay and report the reduced fraction. GHK-Cu likewise needs copper content stated, because correct peptide with incorrect copper loading passes purity while being a differently loaded complex. SNAP-8 needs neither, but its acetylation state is confirmed since the unacetylated form circulates under the same name. All three ship with batch-specific certificates matched to their own chemistry.',
  },
};

const SKIN_COSMETIC_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Skin & Cosmetic al por mayor?',
      a: 'Cada componente sigue una vía de liberación distinta. GHK-Cu se libera con determinación de contenido de cobre junto a ≥99.0% de pureza HPLC, porque el metal coordinado es estructural. El glutatión se libera con un ensayo de tiol libre además de la pureza, ya que las formas reducida y oxidada son químicamente distintas y un cromatograma por sí solo no distingue cuál está en el vial. SNAP-8 es un péptido liofilizado convencional liberado con ≥99.0% HPLC y confirmación de identidad y acetilación por LC-MS.',
    },
    {
      q: '¿Está aprobado Skin & Cosmetic para uso terapéutico o consumo humano?',
      a: 'No. Skin & Cosmetic se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ningún componente del kit se suministra con indicación terapéutica alguna.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Skin & Cosmetic al por mayor?',
      a: 'La cantidad mínima de pedido es un kit completo de 3 viales — GHK-Cu 50 mg, glutatión 600 mg, SNAP-8 10 mg. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios de formulación dérmica y ciencia cosmética, y marcas de distribución. Hay disponibilidad de múltiples kits y de configuraciones mixtas para socios calificados. No atendemos consultas minoristas ni de vial individual.',
    },
    {
      q: '¿En qué forma física se suministra Skin & Cosmetic al por mayor?',
      a: 'Tres viales etiquetados por separado con un rango de llenado de sesenta veces — glutatión a 600 mg, GHK-Cu a 50 mg, SNAP-8 a 10 mg. Solo dos son blancos: la torta de GHK-Cu es azul intenso por su cobre coordinado, y una pálida señala cobre insuficiente antes de ejecutar cualquier ensayo. Tanto GHK-Cu como glutatión son higroscópicos. SNAP-8 se comporta como un péptido liofilizado estándar.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Skin & Cosmetic?',
      a: 'Almacene la bandeja sellada a -20°C (-4°F) hasta 36 meses, siendo aceptable el almacenamiento breve entre 2°C y 8°C (36°F a 46°F). Dos componentes requieren cuidado más allá del calendario estándar: el glutatión se oxida al contacto con el aire y su tiol libre es el grupo funcional, así que reconstitúyalo con espacio de cabeza mínimo y úselo de inmediato. GHK-Cu debe mantenerse totalmente alejado de tampones quelantes — el EDTA y agentes similares arrancan el cobre coordinado y dejan tripéptido GHK libre, una molécula distinta que aun así se lee como pura.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Skin & Cosmetic?',
      a: 'Tres componentes, tres químicas separadas sin nada en común entre ellas. GHK-Cu es un complejo de coordinación de cobre estudiado frente a variables de matriz y expresión génica, donde el metal es central y no incidental. El glutatión actúa mediante su tiol de cisteína como principal tampón redox tiólico de la célula y como sustrato de glutatión peroxidasas — es un tripéptido pero no de señalización. SNAP-8 es un análogo de ocho residuos del fragmento amino-terminal de SNAP-25, estudiado por su interacción con el ensamblaje del complejo SNARE, la maquinaria que Fasshauer y colaboradores clasificaron estructuralmente en 1998.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Skin & Cosmetic al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas de vial, réplicas adicionales de un solo componente, presentación sin marca o de marca privada, o glutatión a granel en cantidades de gramos para cribado de formulaciones. Contacte a nuestra mesa de ventas corporativas con su composición objetivo y número de kits para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Skin & Cosmetic al por mayor para preservar la integridad del compuesto?',
      a: 'Los kits se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío en rango congelado o refrigerado durante el tránsito. Cada vial conserva su etiqueta de identidad individual dentro de la bandeja, de modo que la trazabilidad por componente sobrevive a la manipulación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Skin & Cosmetic es un kit de formulación, y sus tamaños de llenado lo reflejan en lugar de seguir una lógica de receptores. El glutatión a 600 mg se suministra en esa cantidad porque el cribado de formulaciones consume rápido un tampón redox — se titula un fondo en series de concentración, no se ocupan sitios de unión. GHK-Cu a 50 mg se ajusta al trabajo de matriz a concentraciones de uso. SNAP-8 a 10 mg basta porque actúa sobre una interacción de ensamblaje proteico en lugar de consumirse. Tres componentes, tres lógicas de llenado, y un rango de peso molecular de más de tres veces entre el tripéptido y el octapéptido.',
    qualityAssurance:
      'Dos puntos de especificación que los certificados de pureza ordinarios no cubren. El glutatión existe como forma reducida de tiol libre y como dímero oxidado disulfuro; son especies químicas distintas y una cifra de pureza HPLC no indica la proporción, por lo cual ejecutamos un ensayo de tiol libre y reportamos la fracción reducida. GHK-Cu igualmente necesita declarar el contenido de cobre, porque el péptido correcto con carga de cobre incorrecta supera la pureza siendo un complejo cargado de forma distinta. SNAP-8 no necesita ninguno de los dos, pero su estado de acetilación se confirma ya que la forma sin acetilar circula bajo el mismo nombre. Los tres se envían con certificados específicos del lote acordes a su propia química.',
  },
};

const VASCULAR_IMMUNE_PROTECTION_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Vascular, Immune & Protection?',
      a: 'All three vials are released at ≥99.0% HPLC area purity with LC-MS identity confirmation. VIP receives peptide mapping rather than intact mass alone — at 28 residues it is the component where deletion sequences co-elute closest to the target. Thymosin Alpha-1 is checked specifically for N-terminal acetylation, which is part of the molecule and not a processing artefact; an unacetylated batch is a different compound that still passes a purity assay. ARA-290 is released on intact mass and sequence confirmation.',
    },
    {
      q: 'Is Vascular, Immune & Protection approved for therapeutic use or human consumption?',
      a: 'No. Vascular, Immune & Protection is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. No component of the kit is supplied under any therapeutic indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Vascular, Immune & Protection?',
      a: 'The minimum order quantity is one complete kit of 3 vials — VIP 5 mg, ARA-290 16 mg, Thymosin Alpha-1 10 mg. 99 Purity Wholesale supplies bulk quantities to research institutions, vascular biology and immunology laboratories, and distribution brands. Multi-kit and mixed-configuration procurement is available for qualified partners. We do not fulfill retail or single-vial inquiries.',
    },
    {
      q: 'What physical form is wholesale Vascular, Immune & Protection supplied in?',
      a: 'Three separately labelled vials of white lyophilized powder. The ARA-290 fill is 16 mg, an unconventional figure that reflects an eleven-residue peptide sized to a working molar quantity rather than rounded to a marketing number. VIP at 5 mg is the smallest fill despite being the longest chain at 28 residues, and Thymosin Alpha-1 sits between them at 10 mg across 28 residues.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Vascular, Immune & Protection?',
      a: 'Store the sealed tray at -20°C (-4°F) for up to 36 months, with short-term holding at 2°C to 8°C (36°F to 46°F) acceptable and reconstituted material used within 14 days at 2°C to 8°C. VIP is the most demanding component: it is a long, highly basic peptide that adsorbs to ordinary polypropylene surfaces, so low-bind labware and a shorter working window are advisable for that vial specifically. Thymosin Alpha-1 shows degradation products first on a repeat chromatogram among the three.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Vascular, Immune & Protection?',
      a: 'Three components, three distinct receptor systems. VIP acts at VPAC1 and VPAC2, class B G protein-coupled receptors it shares with the related peptide PACAP — receptor selectivity between the two subtypes is an active research question rather than a settled one. ARA-290 is derived from the tertiary structure of erythropoietin but deliberately lacks erythropoietic activity; Brines and colleagues designed it to engage the innate repair receptor, a heteromer of the erythropoietin receptor with the beta common receptor. Thymosin Alpha-1 acts through Toll-like receptor signaling in dendritic cells, as Romani and colleagues established.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Vascular, Immune & Protection?',
      a: 'Yes. Qualified procurement partners can request alternative vial strengths, additional replicates of a single component, unlabeled or private-label presentation, or a VIP-weighted configuration for receptor selectivity work. Contact our corporate sales desk with your target composition and kit count to scope the run.',
    },
    {
      q: 'How is wholesale Vascular, Immune & Protection packaged and shipped to preserve compound integrity?',
      a: 'Kits ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers holding the shipment in the frozen or refrigerated range through transit. Each vial retains its individual identity label inside the tray so component traceability survives handling. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Vascular, Immune & Protection contains the clearest example of deliberate activity-stripping in this catalog. ARA-290 was engineered from erythropoietin\'s tertiary structure specifically to retain tissue-protective signaling while removing the erythropoietic effect — the design goal was to separate two activities that the parent hormone couples together. For a laboratory, that makes it a genuinely useful tool rather than a hormone substitute: it addresses the innate repair receptor without the confound of red cell effects. Pair it with a VPAC-directed peptide and a Toll-like receptor active thymic peptide and one tray covers three separate arms of vascular and immune signaling.',
    qualityAssurance:
      'A naming caution belongs on this tray. Thymosin Alpha-1 is a 28-residue acetylated peptide and is routinely conflated with thymalin, a polypeptide extract, and with thymosin beta-4, an actin-binding protein — three genuinely different substances sharing part of a name. Citing across them will corrupt a study design. VIP raises a separate point: it shares its VPAC receptors with PACAP, and selectivity between VPAC1 and VPAC2 remains an open research question, so attributing an observation to one subtype using VIP alone is not supported. Each vial ships with a batch-specific certificate reporting chromatogram, observed mass, residual solvent and water content, with endotoxin reported per vial given the immunological endpoints involved.',
  },
};

const VASCULAR_IMMUNE_PROTECTION_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Vascular, Immune & Protection al por mayor?',
      a: 'Los tres viales se liberan con ≥99.0% de pureza por área HPLC y confirmación de identidad por LC-MS. VIP recibe mapeo peptídico y no solo masa intacta — con 28 residuos es el componente donde las secuencias con deleciones coeluyen más cerca del objetivo. La timosina alfa-1 se verifica específicamente por acetilación N-terminal, que forma parte de la molécula y no es un artefacto de procesamiento; un lote sin acetilar es un compuesto distinto que aun así supera un ensayo de pureza. ARA-290 se libera por masa intacta y confirmación de secuencia.',
    },
    {
      q: '¿Está aprobado Vascular, Immune & Protection para uso terapéutico o consumo humano?',
      a: 'No. Vascular, Immune & Protection se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ningún componente del kit se suministra con indicación terapéutica alguna.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Vascular, Immune & Protection al por mayor?',
      a: 'La cantidad mínima de pedido es un kit completo de 3 viales — VIP 5 mg, ARA-290 16 mg, timosina alfa-1 10 mg. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios de biología vascular e inmunología, y marcas de distribución. Hay disponibilidad de múltiples kits y de configuraciones mixtas para socios calificados. No atendemos consultas minoristas ni de vial individual.',
    },
    {
      q: '¿En qué forma física se suministra Vascular, Immune & Protection al por mayor?',
      a: 'Tres viales etiquetados por separado con polvo liofilizado blanco. El llenado de ARA-290 es de 16 mg, una cifra poco convencional que refleja un péptido de once residuos dimensionado a una cantidad molar de trabajo en lugar de redondeado a una cifra comercial. VIP a 5 mg es el llenado más pequeño pese a ser la cadena más larga con 28 residuos, y la timosina alfa-1 se sitúa entre ambos con 10 mg en 28 residuos.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Vascular, Immune & Protection?',
      a: 'Almacene la bandeja sellada a -20°C (-4°F) hasta 36 meses, siendo aceptable el almacenamiento breve entre 2°C y 8°C (36°F a 46°F) y usando el material reconstituido en 14 días entre 2°C y 8°C. VIP es el componente más exigente: es un péptido largo y muy básico que se adsorbe a superficies de polipropileno común, por lo que se recomienda material de baja unión y una ventana de trabajo más corta para ese vial en particular. La timosina alfa-1 es la primera de las tres en mostrar productos de degradación en un cromatograma repetido.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Vascular, Immune & Protection?',
      a: 'Tres componentes, tres sistemas de receptores distintos. VIP actúa en VPAC1 y VPAC2, receptores acoplados a proteína G de clase B que comparte con el péptido relacionado PACAP — la selectividad de receptor entre ambos subtipos es una cuestión de investigación activa y no resuelta. ARA-290 deriva de la estructura terciaria de la eritropoyetina pero carece deliberadamente de actividad eritropoyética; Brines y colaboradores lo diseñaron para activar el receptor de reparación innata, un heterómero del receptor de eritropoyetina con el receptor beta común. La timosina alfa-1 actúa por señalización de receptores tipo Toll en células dendríticas, según establecieron Romani y colaboradores.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Vascular, Immune & Protection al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas de vial, réplicas adicionales de un solo componente, presentación sin marca o de marca privada, o una configuración con predominio de VIP para trabajo de selectividad de receptor. Contacte a nuestra mesa de ventas corporativas con su composición objetivo y número de kits para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Vascular, Immune & Protection al por mayor para preservar la integridad del compuesto?',
      a: 'Los kits se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío en rango congelado o refrigerado durante el tránsito. Cada vial conserva su etiqueta de identidad individual dentro de la bandeja, de modo que la trazabilidad por componente sobrevive a la manipulación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Vascular, Immune & Protection contiene el ejemplo más claro de eliminación deliberada de actividad de este catálogo. ARA-290 fue diseñado a partir de la estructura terciaria de la eritropoyetina específicamente para conservar la señalización protectora de tejidos eliminando el efecto eritropoyético — el objetivo de diseño era separar dos actividades que la hormona parental acopla. Para un laboratorio, eso lo convierte en una herramienta genuinamente útil y no en un sustituto hormonal: aborda el receptor de reparación innata sin el factor de confusión de los efectos sobre glóbulos rojos. Combínelo con un péptido dirigido a VPAC y un péptido tímico activo sobre receptores tipo Toll y una bandeja cubre tres brazos separados de señalización vascular e inmunitaria.',
    qualityAssurance:
      'Una advertencia de nomenclatura corresponde a esta bandeja. La timosina alfa-1 es un péptido acetilado de 28 residuos y se confunde rutinariamente con la timalina, un extracto polipeptídico, y con la timosina beta-4, una proteína de unión a actina — tres sustancias genuinamente distintas que comparten parte del nombre. Citar entre ellas corromperá el diseño de un estudio. VIP plantea un punto aparte: comparte sus receptores VPAC con PACAP, y la selectividad entre VPAC1 y VPAC2 sigue siendo una cuestión abierta, así que atribuir una observación a un subtipo usando VIP en solitario no está respaldado. Cada vial se envía con certificado específico del lote que reporta cromatograma, masa observada, solvente residual y contenido de agua, con endotoxina reportada por vial dadas las variables inmunológicas implicadas.',
  },
};

const SENESCENCE_STACK_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale Senescence Stack?',
      a: 'Both vials are released at ≥99.0% HPLC area purity with LC-MS identity confirmation, but FOXO4-DRI requires an analysis the other does not. It is a D-retro-inverso peptide, meaning every residue is the D-enantiomer and the sequence runs in reverse — so an all-L batch would carry an identical molecular mass and co-elute on an ordinary achiral column while being a completely different compound. Our release therefore includes chiral amino acid analysis, not purity and mass alone.',
    },
    {
      q: 'Is Senescence Stack approved for therapeutic use or human consumption?',
      a: 'No. Senescence Stack is supplied strictly as a Research Use Only (RUO) material for in-vitro laboratory investigation. It is not approved, indicated, or intended for human consumption, medical treatment, diagnostic procedures, veterinary application, or cosmetic use. No component of the kit is supplied under any therapeutic indication.',
    },
    {
      q: 'What is the minimum order quantity for wholesale Senescence Stack?',
      a: 'The minimum order quantity is one complete kit of 2 vials — FOXO4-DRI 10 mg and Epithalon 10 mg. 99 Purity Wholesale supplies bulk quantities to research institutions, cellular senescence and ageing research laboratories, and distribution brands. Multi-kit and mixed-configuration procurement is available for qualified partners. We do not fulfill retail or single-vial inquiries.',
    },
    {
      q: 'What physical form is wholesale Senescence Stack supplied in?',
      a: 'Two separately labelled vials of white lyophilized powder at 10 mg each, and the two could hardly be further apart in scale. FOXO4-DRI is a 46-residue chain above 5300 daltons; Epithalon is a four-residue tetrapeptide near 390 daltons — roughly a fourteenfold difference in molecular weight at identical milligram fills. A 10 mg Epithalon vial therefore holds about fourteen times the molar quantity of the FOXO4-DRI vial beside it.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for Senescence Stack?',
      a: 'Store the sealed tray at -20°C (-4°F) for up to 36 months, with short-term holding at 2°C to 8°C (36°F to 46°F) acceptable and reconstituted material used within 14 days at 2°C to 8°C. The two behave very differently in solution. FOXO4-DRI\'s all-D backbone makes it resistant to proteolytic degradation — that resistance is the entire point of the retro-inverso design. Epithalon is an unprotected L-amino acid tetrapeptide with a high proportion of exposed backbone and is far more hydrolysis-prone, so reconstitute only what an experiment consumes.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for Senescence Stack?',
      a: 'The two components approach cellular ageing from opposite ends and share no target. FOXO4-DRI works by disrupting a protein-protein interaction: Baar and colleagues designed it in 2017 to interfere with FOXO4 binding to p53, and Bourgeois and colleagues showed in 2025 that the disordered p53 transactivation domain is the actual binding site. Displacing p53 from that interaction drives nuclear exclusion and selective apoptosis in senescent cells. Epithalon does the opposite kind of work entirely — it is a pineal tetrapeptide studied against telomerase upregulation and telomere length endpoints, a transcriptional and chromosomal question rather than a protein interaction one.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale Senescence Stack?',
      a: 'Yes. Qualified procurement partners can request alternative vial strengths, additional replicates of a single component, unlabeled or private-label presentation, or additional FOXO4-DRI replicates without the Epithalon vial. Contact our corporate sales desk with your target composition and kit count to scope the run.',
    },
    {
      q: 'How is wholesale Senescence Stack packaged and shipped to preserve compound integrity?',
      a: 'Kits ship in light-blocking, vacuum-sealed secondary packaging with temperature-stability buffers holding the shipment in the frozen or refrigerated range through transit. Each vial retains its individual identity label inside the tray so component traceability survives handling. We ship nationwide across all 50 US states and internationally via express couriers with discrete, border-optimized clearance and full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'Senescence Stack pairs a senolytic with a compound studied for the opposite intervention, and a laboratory should design around that tension rather than assume the two point the same direction. FOXO4-DRI clears senescent cells; Epithalon is investigated for extending replicative capacity. Those are not complementary in any simple sense, and an experiment running both arms is asking whether removal and extension interact, not stacking two versions of the same effect. FOXO4-DRI is also the largest peptide in this catalog at 46 residues, which puts it in a different synthesis and handling class than the short chains that dominate this range — an all-D 46-mer is a demanding solid-phase build, and that shows up in both cost and batch-to-batch variability.',
    qualityAssurance:
      'Two evidence disclosures belong on this page. First, senolysis is not uniformly beneficial in the published record: a 2023 Circulation report by Born and colleagues found that eliminating senescent cells promoted pulmonary hypertension development and progression in their model. Context matters, and a page selling a senolytic that omits this is selling an incomplete picture. Second, the strongest recent Epithalon telomere work carries a published Correction issued the same year, so investigators citing it should cite the corrected version. On the analytical side, the FOXO4-DRI certificate reports chiral amino acid analysis alongside purity and observed mass, because on an achiral column an all-L impostor is invisible.',
  },
};

const SENESCENCE_STACK_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de Senescence Stack al por mayor?',
      a: 'Ambos viales se liberan con ≥99.0% de pureza por área HPLC y confirmación de identidad por LC-MS, pero FOXO4-DRI exige un análisis que el otro no. Es un péptido D-retro-inverso, es decir, cada residuo es el enantiómero D y la secuencia corre en sentido inverso — de modo que un lote todo-L tendría una masa molecular idéntica y coeluiría en una columna aquiral ordinaria siendo un compuesto completamente distinto. Nuestra liberación incluye por tanto análisis quiral de aminoácidos, no solo pureza y masa.',
    },
    {
      q: '¿Está aprobado Senescence Stack para uso terapéutico o consumo humano?',
      a: 'No. Senescence Stack se suministra estrictamente como material de Uso Exclusivo de Investigación (RUO) para estudios de laboratorio in-vitro. No está aprobado, indicado ni destinado al consumo humano, tratamiento médico, procedimientos de diagnóstico, aplicación veterinaria ni uso cosmético. Ningún componente del kit se suministra con indicación terapéutica alguna.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para Senescence Stack al por mayor?',
      a: 'La cantidad mínima de pedido es un kit completo de 2 viales — FOXO4-DRI 10 mg y epitalón 10 mg. 99 Purity Wholesale abastece a granel a instituciones de investigación, laboratorios de senescencia celular e investigación del envejecimiento, y marcas de distribución. Hay disponibilidad de múltiples kits y de configuraciones mixtas para socios calificados. No atendemos consultas minoristas ni de vial individual.',
    },
    {
      q: '¿En qué forma física se suministra Senescence Stack al por mayor?',
      a: 'Dos viales etiquetados por separado con polvo liofilizado blanco de 10 mg cada uno, y los dos difícilmente podrían estar más separados en escala. FOXO4-DRI es una cadena de 46 residuos por encima de 5300 daltons; el epitalón es un tetrapéptido de cuatro residuos cercano a 390 daltons — aproximadamente catorce veces de diferencia en peso molecular con llenados idénticos en miligramos. Un vial de 10 mg de epitalón contiene por tanto unas catorce veces la cantidad molar del vial de FOXO4-DRI que tiene al lado.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de Senescence Stack?',
      a: 'Almacene la bandeja sellada a -20°C (-4°F) hasta 36 meses, siendo aceptable el almacenamiento breve entre 2°C y 8°C (36°F a 46°F) y usando el material reconstituido en 14 días entre 2°C y 8°C. Los dos se comportan de forma muy distinta en solución. El esqueleto todo-D de FOXO4-DRI lo hace resistente a la degradación proteolítica — esa resistencia es todo el propósito del diseño retro-inverso. El epitalón es un tetrapéptido de aminoácidos L sin proteger con una alta proporción de esqueleto expuesto y es mucho más propenso a la hidrólisis, así que reconstituya solo lo que consuma el experimento.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para Senescence Stack?',
      a: 'Los dos componentes abordan el envejecimiento celular desde extremos opuestos y no comparten diana. FOXO4-DRI actúa alterando una interacción proteína-proteína: Baar y colaboradores lo diseñaron en 2017 para interferir con la unión de FOXO4 a p53, y Bourgeois y colaboradores mostraron en 2025 que el dominio de transactivación desordenado de p53 es el sitio real de unión. Desplazar a p53 de esa interacción provoca exclusión nuclear y apoptosis selectiva en células senescentes. El epitalón hace un trabajo de tipo completamente opuesto — es un tetrapéptido pineal estudiado frente a variables de sobrerregulación de telomerasa y longitud telomérica, una cuestión transcripcional y cromosómica y no de interacción proteica.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de Senescence Stack al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar concentraciones alternativas de vial, réplicas adicionales de un solo componente, presentación sin marca o de marca privada, o réplicas adicionales de FOXO4-DRI sin el vial de epitalón. Contacte a nuestra mesa de ventas corporativas con su composición objetivo y número de kits para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía Senescence Stack al por mayor para preservar la integridad del compuesto?',
      a: 'Los kits se envían en empaque secundario opaco y sellado al vacío, con amortiguadores de estabilidad térmica que mantienen el envío en rango congelado o refrigerado durante el tránsito. Cada vial conserva su etiqueta de identidad individual dentro de la bandeja, de modo que la trazabilidad por componente sobrevive a la manipulación. Enviamos a los 50 estados de EE. UU. y a nivel internacional mediante mensajería express con despacho aduanero discreto y optimizado, con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'Senescence Stack empareja un senolítico con un compuesto estudiado para la intervención opuesta, y un laboratorio debe diseñar en torno a esa tensión en vez de asumir que ambos apuntan en la misma dirección. FOXO4-DRI elimina células senescentes; el epitalón se investiga para extender la capacidad replicativa. Eso no es complementario en ningún sentido simple, y un experimento que ejecute ambos brazos pregunta si la eliminación y la extensión interactúan, no apila dos versiones del mismo efecto. FOXO4-DRI es además el péptido más grande de este catálogo con 46 residuos, lo que lo sitúa en una clase de síntesis y manipulación distinta de las cadenas cortas que dominan esta gama — un 46-mero todo-D es una construcción exigente en fase sólida, y eso se refleja tanto en el costo como en la variabilidad entre lotes.',
    qualityAssurance:
      'Dos advertencias de evidencia corresponden a esta página. Primera, la senólisis no es uniformemente beneficiosa en el registro publicado: un informe de 2023 en Circulation de Born y colaboradores encontró que eliminar células senescentes promovía el desarrollo y la progresión de hipertensión pulmonar en su modelo. El contexto importa, y una página que venda un senolítico omitiendo esto vende un cuadro incompleto. Segunda, el trabajo reciente más sólido sobre epitalón y telómeros lleva una Corrección publicada el mismo año, así que quienes lo citen deben citar la versión corregida. En el plano analítico, el certificado de FOXO4-DRI reporta análisis quiral de aminoácidos junto a pureza y masa observada, porque en una columna aquiral un impostor todo-L es invisible.',
  },
};

const PATHWAY_GENETIC_OPTIMIZATION_TEST_EN: ProductContent = {
  faqs: [
    {
      q: 'What is the verified purity and analytical testing protocol for wholesale PATHWAY™ Genetic Optimization Test?',
      a: 'PATHWAY™ Genetic Optimization Test is not a chemical compound, so HPLC purity does not apply to it. Quality assurance instead sits with the analysing laboratory: samples are processed by TruLab Dx, a CLIA-certified partner laboratory. One point worth stating plainly — CLIA certification is a Centers for Medicare and Medicaid Services program that regulates laboratory operations, and it does not evaluate whether a given test\'s health claims are clinically valid. Those are two separate questions, and only the first is certified.',
    },
    {
      q: 'Is PATHWAY™ Genetic Optimization Test approved for therapeutic use or human consumption?',
      a: 'No. PATHWAY™ Genetic Optimization Test is not approved for therapeutic use, and it is not a medical test. It is a wellness and education tool and is explicitly not a diagnostic — it is not intended to diagnose, treat, cure, or prevent any disease. It is not for clinical, veterinary, or cosmetic use, and its report does not deliver medical findings or replace professional advice.',
    },
    {
      q: 'What is the minimum order quantity for wholesale PATHWAY™ Genetic Optimization Test?',
      a: 'The minimum order quantity is one complete kit, which covers a single sample collection. 99 Purity Wholesale supplies this product in volume to wellness clinics, practitioner groups, and distribution brands who want a genetic wellness panel alongside a consultation. Multi-kit procurement is available for qualified partners. Unlike the research compounds in this catalog, this item is not sold by vial count.',
    },
    {
      q: 'What physical form is wholesale PATHWAY™ Genetic Optimization Test supplied in?',
      a: 'The kit is a sample collection package, not a vial of material. It contains a sterile buccal swab for cheek-cell collection, a stabilizing collection tube, a step-by-step instruction card, a registration code that links the sample to the user account, and prepaid return packaging. Collection takes a few minutes: avoid eating, drinking or brushing teeth for the short window noted on the card, rub the swab firmly against the inside of the cheek, seal it in the tube, register the code, and mail it back.',
    },
    {
      q: 'What are the recommended storage conditions and stability limits for PATHWAY™ Genetic Optimization Test?',
      a: 'Store the sealed kit at normal room temperature, 15°C to 30°C (59°F to 86°F). Do not refrigerate or freeze it — this is the opposite of every other product in this catalog, and treating it like a peptide will damage it. The collection tube contains a stabilizing buffer designed to preserve buccal cell DNA at ambient temperature during return transit, which is precisely why cold chain handling is unnecessary and freeze-thaw is harmful. Once a swab is sealed in the tube, mail it back promptly rather than storing it.',
    },
    {
      q: 'What is the primary molecular target or mechanism of action researched for PATHWAY™ Genetic Optimization Test?',
      a: 'There is no molecular target and no mechanism of action, because nothing is introduced into a biological system. PATHWAY™ reads existing DNA sequence variants from cheek cells and reports across seven areas: recovery and inflammatory signaling, cognition and neurotransmitter processing, longevity and cellular maintenance, stress and HPA-axis response, metabolism and insulin signaling, food sensitivity, and micronutrient handling. The output is a wellness and education report offering lifestyle, nutrition and supplement considerations. It is explicitly not a diagnostic, and it is not intended to diagnose, treat, cure, or prevent any disease.',
    },
    {
      q: 'Can I request custom concentrations, vial sizes, or formulations for wholesale PATHWAY™ Genetic Optimization Test?',
      a: 'Yes. Qualified procurement partners can request co-branded or unbranded kit presentation, custom insert cards, and volume configurations for clinic or practitioner distribution. Because this is a collection kit rather than a compound, concentration and vial size do not apply. Contact our corporate sales desk with your intended presentation and kit count to scope the run.',
    },
    {
      q: 'How is wholesale PATHWAY™ Genetic Optimization Test packaged and shipped to preserve compound integrity?',
      a: 'Kits ship at ambient temperature in sealed retail packaging with prepaid return materials included. No cold chain is required — the collection tube holds a stabilizing buffer that preserves buccal cell DNA at room temperature through return transit, so refrigeration and temperature-controlled couriers are unnecessary and freezing is harmful. We ship nationwide across all 50 US states with full delivery assurance.',
    },
  ],
  dossier: {
    applicationProfile:
      'PATHWAY™ Genetic Optimization Test is the one item in this catalog that is not a research compound, and it belongs to a different procurement conversation entirely. Where every other product here is bought by the kit for bench work, this is a single at-home collection kit whose value sits in the report rather than in the contents. Wellness clinics and practitioner groups are the natural buyers — organisations that want a genetic wellness panel to sit alongside a consultation rather than a vial to sit in a freezer. Because it ships at room temperature and contains no controlled or research material, it also has none of the cold chain, customs, or handling constraints that shape how the rest of this catalog moves.',
    qualityAssurance:
      'The honest framing of what this product does and does not establish matters more here than anywhere else in the catalog. PATHWAY™ reports genetic variants, and a variant is a correlation in a population, not a determination about an individual. The report offers lifestyle, nutrition and supplement considerations — it does not deliver medical findings, and the page states plainly that PATHWAY is a wellness and education tool rather than a diagnostic. On the laboratory side, TruLab Dx holds CLIA certification, which regulates how a laboratory operates: personnel qualifications, quality control, proficiency testing and record keeping. It does not certify that the health claims attached to a test are clinically valid. Both facts are stated here rather than left implied.',
  },
};

const PATHWAY_GENETIC_OPTIMIZATION_TEST_ES: ProductContent = {
  faqs: [
    {
      q: '¿Cuál es la pureza verificada y el protocolo de análisis de PATHWAY™ Genetic Optimization Test al por mayor?',
      a: 'PATHWAY™ Genetic Optimization Test no es un compuesto químico, así que la pureza por HPLC no le aplica. El aseguramiento de calidad recae en el laboratorio que analiza: las muestras las procesa TruLab Dx, un laboratorio asociado con certificación CLIA. Un punto que conviene declarar con claridad — la certificación CLIA es un programa de los Centros de Servicios de Medicare y Medicaid que regula las operaciones de laboratorio, y no evalúa si las afirmaciones de salud de una prueba son clínicamente válidas. Son dos cuestiones separadas, y solo la primera está certificada.',
    },
    {
      q: '¿Está aprobado PATHWAY™ Genetic Optimization Test para uso terapéutico o consumo humano?',
      a: 'No. PATHWAY™ Genetic Optimization Test no está aprobado para uso terapéutico y no es una prueba médica. Es una herramienta de bienestar y educación y explícitamente no un diagnóstico — no está destinado a diagnosticar, tratar, curar ni prevenir enfermedad alguna. No es para uso clínico, veterinario ni cosmético, y su informe no entrega hallazgos médicos ni sustituye el consejo profesional.',
    },
    {
      q: '¿Cuál es la cantidad mínima de pedido para PATHWAY™ Genetic Optimization Test al por mayor?',
      a: 'La cantidad mínima de pedido es un kit completo, que cubre una sola recolección de muestra. 99 Purity Wholesale suministra este producto en volumen a clínicas de bienestar, grupos de profesionales y marcas de distribución que quieren un panel genético de bienestar junto a una consulta. Hay disponibilidad de múltiples kits para socios calificados. A diferencia de los compuestos de investigación de este catálogo, este artículo no se vende por número de viales.',
    },
    {
      q: '¿En qué forma física se suministra PATHWAY™ Genetic Optimization Test al por mayor?',
      a: 'El kit es un paquete de recolección de muestras, no un vial de material. Contiene un hisopo bucal estéril para recolectar células de mejilla, un tubo de recolección estabilizador, una tarjeta de instrucciones paso a paso, un código de registro que vincula la muestra con la cuenta del usuario, y empaque de devolución prepagado. La recolección toma unos minutos: evite comer, beber o cepillarse los dientes durante el breve intervalo indicado en la tarjeta, frote el hisopo firmemente contra el interior de la mejilla, séllelo en el tubo, registre el código y envíelo de vuelta.',
    },
    {
      q: '¿Cuáles son las condiciones de almacenamiento y los límites de estabilidad de PATHWAY™ Genetic Optimization Test?',
      a: 'Almacene el kit sellado a temperatura ambiente normal, de 15°C a 30°C (59°F a 86°F). No lo refrigere ni lo congele — es lo contrario de todos los demás productos de este catálogo, y tratarlo como un péptido lo dañará. El tubo de recolección contiene un tampón estabilizador diseñado para preservar el ADN de células bucales a temperatura ambiente durante el transporte de retorno, y precisamente por eso la cadena de frío es innecesaria y la congelación es perjudicial. Una vez sellado el hisopo en el tubo, envíelo de vuelta pronto en lugar de almacenarlo.',
    },
    {
      q: '¿Cuál es la diana molecular principal o el mecanismo de acción investigado para PATHWAY™ Genetic Optimization Test?',
      a: 'No hay diana molecular ni mecanismo de acción, porque no se introduce nada en un sistema biológico. PATHWAY™ lee variantes de secuencia de ADN existentes en células de mejilla y reporta sobre siete áreas: recuperación y señalización inflamatoria, cognición y procesamiento de neurotransmisores, longevidad y mantenimiento celular, estrés y respuesta del eje HPA, metabolismo y señalización de insulina, sensibilidad alimentaria y manejo de micronutrientes. La salida es un informe de bienestar y educación con consideraciones de estilo de vida, nutrición y suplementación. Explícitamente no es un diagnóstico, y no está destinado a diagnosticar, tratar, curar ni prevenir enfermedad alguna.',
    },
    {
      q: '¿Puedo solicitar concentraciones, tamaños de vial o formulaciones personalizadas de PATHWAY™ Genetic Optimization Test al por mayor?',
      a: 'Sí. Los socios de adquisición calificados pueden solicitar presentación del kit con marca compartida o sin marca, tarjetas de inserción personalizadas y configuraciones por volumen para distribución en clínicas o consultas. Al tratarse de un kit de recolección y no de un compuesto, la concentración y el tamaño de vial no aplican. Contacte a nuestra mesa de ventas corporativas con la presentación deseada y el número de kits para cotizar la corrida.',
    },
    {
      q: '¿Cómo se empaca y envía PATHWAY™ Genetic Optimization Test al por mayor para preservar la integridad del compuesto?',
      a: 'Los kits se envían a temperatura ambiente en empaque minorista sellado con materiales de devolución prepagados incluidos. No se requiere cadena de frío — el tubo de recolección contiene un tampón estabilizador que preserva el ADN de células bucales a temperatura ambiente durante el transporte de retorno, así que la refrigeración y los mensajeros con control de temperatura son innecesarios y la congelación es perjudicial. Enviamos a los 50 estados de EE. UU. con garantía total de entrega.',
    },
  ],
  dossier: {
    applicationProfile:
      'PATHWAY™ Genetic Optimization Test es el único artículo de este catálogo que no es un compuesto de investigación, y pertenece a una conversación de adquisición completamente distinta. Donde cualquier otro producto aquí se compra por kits para trabajo de laboratorio, este es un solo kit de recolección domiciliaria cuyo valor reside en el informe y no en el contenido. Las clínicas de bienestar y los grupos de profesionales son los compradores naturales — organizaciones que quieren un panel genético de bienestar junto a una consulta y no un vial en un congelador. Al enviarse a temperatura ambiente y no contener material controlado ni de investigación, tampoco tiene ninguna de las restricciones de cadena de frío, aduanas o manipulación que condicionan cómo se mueve el resto del catálogo.',
    qualityAssurance:
      'El encuadre honesto de lo que este producto establece y lo que no importa aquí más que en ninguna otra parte del catálogo. PATHWAY™ reporta variantes genéticas, y una variante es una correlación poblacional, no una determinación sobre un individuo. El informe ofrece consideraciones de estilo de vida, nutrición y suplementación — no entrega hallazgos médicos, y la página declara con claridad que PATHWAY es una herramienta de bienestar y educación y no un diagnóstico. En el plano del laboratorio, TruLab Dx posee certificación CLIA, que regula cómo opera un laboratorio: cualificación del personal, control de calidad, pruebas de competencia y mantenimiento de registros. No certifica que las afirmaciones de salud asociadas a una prueba sean clínicamente válidas. Ambos hechos se declaran aquí en vez de dejarse implícitos.',
  },
};

const PRODUCT_CONTENT: Record<string, { en: ProductContent; es: ProductContent }> = {
  '5-amino-1mq-spray': {
    en: FIVE_AMINO_1MQ_SPRAY_EN,
    es: FIVE_AMINO_1MQ_SPRAY_ES,
  },
  'tirzepatide-spray': {
    en: TIRZEPATIDE_SPRAY_EN,
    es: TIRZEPATIDE_SPRAY_ES,
  },
  'semaglutide-spray': {
    en: SEMAGLUTIDE_SPRAY_EN,
    es: SEMAGLUTIDE_SPRAY_ES,
  },
  'retatrutide-spray': {
    en: RETATRUTIDE_SPRAY_EN,
    es: RETATRUTIDE_SPRAY_ES,
  },
  'thymosin-alpha-1-spray': {
    en: THYMOSIN_ALPHA_1_SPRAY_EN,
    es: THYMOSIN_ALPHA_1_SPRAY_ES,
  },
  'tesamorelin-spray': {
    en: TESAMORELIN_SPRAY_EN,
    es: TESAMORELIN_SPRAY_ES,
  },
  'tesamorelin-ipamorelin-spray': {
    en: TESAMORELIN_IPAMORELIN_SPRAY_EN,
    es: TESAMORELIN_IPAMORELIN_SPRAY_ES,
  },
  'tb-500-spray': {
    en: TB_500_SPRAY_EN,
    es: TB_500_SPRAY_ES,
  },
  'snap-8-spray': {
    en: SNAP_8_SPRAY_EN,
    es: SNAP_8_SPRAY_ES,
  },
  'sermorelin-spray': {
    en: SERMORELIN_SPRAY_EN,
    es: SERMORELIN_SPRAY_ES,
  },
  'ss-31-spray': {
    en: SS_31_SPRAY_EN,
    es: SS_31_SPRAY_ES,
  },
  'mots-c-spray': {
    en: MOTS_C_SPRAY_EN,
    es: MOTS_C_SPRAY_ES,
  },
  'melanotan-1-spray': {
    en: MELANOTAN_1_SPRAY_EN,
    es: MELANOTAN_1_SPRAY_ES,
  },
  'll-37-spray': {
    en: LL_37_SPRAY_EN,
    es: LL_37_SPRAY_ES,
  },
  'lipo-c-spray': {
    en: LIPO_C_SPRAY_EN,
    es: LIPO_C_SPRAY_ES,
  },
  'l-carnitine-spray': {
    en: L_CARNITINE_SPRAY_EN,
    es: L_CARNITINE_SPRAY_ES,
  },
  'klow-spray': {
    en: KLOW_SPRAY_EN,
    es: KLOW_SPRAY_ES,
  },
  'kisspeptin-spray': {
    en: KISSPEPTIN_SPRAY_EN,
    es: KISSPEPTIN_SPRAY_ES,
  },
  'ipamorelin-spray': {
    en: IPAMORELIN_SPRAY_EN,
    es: IPAMORELIN_SPRAY_ES,
  },
  'igf-1-lr3-spray': {
    en: IGF_1_LR3_SPRAY_EN,
    es: IGF_1_LR3_SPRAY_ES,
  },
  'hcg-spray': {
    en: HCG_SPRAY_EN,
    es: HCG_SPRAY_ES,
  },
  'h-frag-spray': {
    en: H_FRAG_SPRAY_EN,
    es: H_FRAG_SPRAY_ES,
  },
  'glutathione-spray': {
    en: GLUTATHIONE_SPRAY_EN,
    es: GLUTATHIONE_SPRAY_ES,
  },
  'glow-spray': {
    en: GLOW_BLEND_SPRAY_EN,
    es: GLOW_BLEND_SPRAY_ES,
  },
  'ghrp-6-spray': {
    en: GHRP_6_SPRAY_EN,
    es: GHRP_6_SPRAY_ES,
  },
  'ghrp-2-spray': {
    en: GHRP_2_SPRAY_EN,
    es: GHRP_2_SPRAY_ES,
  },
  'dihexa-spray': {
    en: DIHEXA_SPRAY_EN,
    es: DIHEXA_SPRAY_ES,
  },
  'cjc-1295-ipamorelin-spray': {
    en: CJC_1295_IPAMORELIN_SPRAY_EN,
    es: CJC_1295_IPAMORELIN_SPRAY_ES,
  },
  'cjc-1295-dac-spray': {
    en: CJC_1295_DAC_SPRAY_EN,
    es: CJC_1295_DAC_SPRAY_ES,
  },
  'cjc-1295-no-dac-spray': {
    en: CJC_1295_NO_DAC_SPRAY_EN,
    es: CJC_1295_NO_DAC_SPRAY_ES,
  },
  'cagrilintide-spray': {
    en: CAGRILINTIDE_SPRAY_EN,
    es: CAGRILINTIDE_SPRAY_ES,
  },
  'bpc-157-tb-500-spray': {
    en: BPC_157_TB_500_SPRAY_EN,
    es: BPC_157_TB_500_SPRAY_ES,
  },
  'ara-290-spray': {
    en: ARA_290_SPRAY_EN,
    es: ARA_290_SPRAY_ES,
  },
  'aod9604-spray': {
    en: AOD9604_SPRAY_EN,
    es: AOD9604_SPRAY_ES,
  },
  'ahk-cu-spray': {
    en: AHK_CU_SPRAY_EN,
    es: AHK_CU_SPRAY_ES,
  },
  'bioregulator-core-panel': {
    en: BIOREGULATOR_CORE_PANEL_EN,
    es: BIOREGULATOR_CORE_PANEL_ES,
  },
  'bioregulator-full-master-set': {
    en: BIOREGULATOR_FULL_MASTER_SET_EN,
    es: BIOREGULATOR_FULL_MASTER_SET_ES,
  },
  'bioregulator-cardiovascular': {
    en: BIOREGULATOR_CARDIOVASCULAR_EN,
    es: BIOREGULATOR_CARDIOVASCULAR_ES,
  },
  'bioregulator-hepatic-digestive': {
    en: BIOREGULATOR_HEPATIC_DIGESTIVE_EN,
    es: BIOREGULATOR_HEPATIC_DIGESTIVE_ES,
  },
  'bioregulator-immune-thymic': {
    en: BIOREGULATOR_IMMUNE_THYMIC_EN,
    es: BIOREGULATOR_IMMUNE_THYMIC_ES,
  },
  'bioregulator-neuro-pineal': {
    en: BIOREGULATOR_NEURO_PINEAL_EN,
    es: BIOREGULATOR_NEURO_PINEAL_ES,
  },
  'bioregulator-respiratory': {
    en: BIOREGULATOR_RESPIRATORY_EN,
    es: BIOREGULATOR_RESPIRATORY_ES,
  },
  'bioregulator-urogenital': {
    en: BIOREGULATOR_UROGENITAL_EN,
    es: BIOREGULATOR_UROGENITAL_ES,
  },
  'senescence-stack': {
    en: SENESCENCE_STACK_EN,
    es: SENESCENCE_STACK_ES,
  },
  'pathway-genetic-optimization-test': {
    en: PATHWAY_GENETIC_OPTIMIZATION_TEST_EN,
    es: PATHWAY_GENETIC_OPTIMIZATION_TEST_ES,
  },
  'metabolic-activation': {
    en: METABOLIC_ACTIVATION_EN,
    es: METABOLIC_ACTIVATION_ES,
  },
  'metabolic-support': {
    en: METABOLIC_SUPPORT_EN,
    es: METABOLIC_SUPPORT_ES,
  },
  'nad-antioxidant': {
    en: NAD_ANTIOXIDANT_EN,
    es: NAD_ANTIOXIDANT_ES,
  },
  'neuro-core': {
    en: NEURO_CORE_EN,
    es: NEURO_CORE_ES,
  },
  'recovery-sleep-stress': {
    en: RECOVERY_SLEEP_STRESS_EN,
    es: RECOVERY_SLEEP_STRESS_ES,
  },
  'repair-trio': {
    en: REPAIR_TRIO_EN,
    es: REPAIR_TRIO_ES,
  },
  'reproductive-hpg-axis': {
    en: REPRODUCTIVE_HPG_AXIS_EN,
    es: REPRODUCTIVE_HPG_AXIS_ES,
  },
  'skin-cosmetic': {
    en: SKIN_COSMETIC_EN,
    es: SKIN_COSMETIC_ES,
  },
  'vascular-immune-protection': {
    en: VASCULAR_IMMUNE_PROTECTION_EN,
    es: VASCULAR_IMMUNE_PROTECTION_ES,
  },
  'advanced-nootropic': {
    en: ADVANCED_NOOTROPIC_EN,
    es: ADVANCED_NOOTROPIC_ES,
  },
  'advanced-repair-immune': {
    en: ADVANCED_REPAIR_IMMUNE_EN,
    es: ADVANCED_REPAIR_IMMUNE_ES,
  },
  'body-composition-kit': {
    en: BODY_COMPOSITION_KIT_EN,
    es: BODY_COMPOSITION_KIT_ES,
  },
  'classic-secretagogue': {
    en: CLASSIC_SECRETAGOGUE_EN,
    es: CLASSIC_SECRETAGOGUE_ES,
  },
  'extended-gh-igf': {
    en: EXTENDED_GH_IGF_EN,
    es: EXTENDED_GH_IGF_ES,
  },
  'gh-secretagogue': {
    en: GH_SECRETAGOGUE_EN,
    es: GH_SECRETAGOGUE_ES,
  },
  'gut-mucosal-panel': {
    en: GUT_MUCOSAL_PANEL_EN,
    es: GUT_MUCOSAL_PANEL_ES,
  },
  'incretin-amylin': {
    en: INCRETIN_AMYLIN_EN,
    es: INCRETIN_AMYLIN_ES,
  },
  'longevity-mitochondrial': {
    en: LONGEVITY_MITOCHONDRIAL_EN,
    es: LONGEVITY_MITOCHONDRIAL_ES,
  },
  'melanocortin-reproductive': {
    en: MELANOCORTIN_REPRODUCTIVE_EN,
    es: MELANOCORTIN_REPRODUCTIVE_ES,
  },
};

/** Returns bespoke page content for a slug, or null when the templated copy should be used. */
export function getProductContent(slug: string, isEs: boolean): ProductContent | null {
  const entry = PRODUCT_CONTENT[slug.toLowerCase()];
  if (!entry) return null;
  return isEs ? entry.es : entry.en;
}
