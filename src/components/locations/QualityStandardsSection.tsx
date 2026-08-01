'use client';

import React from 'react';
import { Link } from '@/i18n/routing';
import { FadeIn } from '@/components/shared/Motion';
import { useLocale } from 'next-intl';

export default function QualityStandardsSection() {
  const locale = useLocale();
  const isEs = locale === 'es';

  if (isEs) {
    return (
      <>
        {/* Solid-Phase Peptide Synthesis (SPPS) - ES */}
        <section className="bg-white border border-black/5 rounded-[3rem] p-8 md:p-12 shadow-sm">
          <FadeIn>
            <h2 className="text-3xl font-absans font-bold text-black uppercase tracking-tight mb-6">
              Síntesis Avanzada de Péptidos en Fase Sólida (SPPS)
            </h2>
            <div className="prose prose-lg max-w-none text-black/70 font-archia font-medium leading-relaxed">
              <p className="mb-4">
                La integridad estructural de un péptido de investigación depende enteramente de la precisión de su síntesis. En 99 Purity Wholesale, nuestros compuestos se fabrican mediante síntesis de péptidos en fase sólida (SPPS) de última generación utilizando química FMOC (fluorenilmetiloxicarbonilo). Esta metodología representa el estándar de oro en ingeniería bioquímica, permitiendo el ensamblaje rápido y estrictamente controlado de cadenas largas de aminoácidos sin riesgo de reacciones secundarias no deseadas o errores de plegamiento estructural.
              </p>
              <p className="mb-4">
                A diferencia de los métodos anticuados de síntesis en fase líquida, la SPPS ancla el extremo C-terminal de la cadena peptídica en crecimiento a un soporte de resina insoluble. A medida que se introduce cada aminoácido subsiguiente, el grupo protector FMOC se retira temporalmente, lo que permite la formación de un enlace covalente altamente específico. Este ciclo se repite con meticulosa precisión hasta lograr la secuencia molecular exacta deseada. Para secuencias complejas como <Link href="/products/tirzepatide" className="text-[#13a7b7] hover:underline font-semibold">Tirzepatide</Link> (que consta de 39 aminoácidos individuales), este entorno controlado es la única manera de garantizar un perfil molecular intachable.
              </p>
              <p className="mb-4">
                Además, la estereoquímica desempeña un papel crucial en la afinidad de unión celular. Los receptores biológicos son muy sensibles a la disposición espacial de los átomos. Nuestros protocolos de síntesis utilizan estrictamente los L-isómeros biológicamente activos (a menos que la secuencia requiera específicamente un D-isómero), asegurando que el compuesto resultante imite a la perfección las señales biológicas endógenas. Tras la síntesis, el péptido se escinde de la resina y se somete a una rigurosa purificación para eliminar cadenas incompletas, aminoácidos libres y subproductos de síntesis como las sales de ácido trifluoroacético (TFA). El resultado es un compuesto estéril y de máxima pureza listo para la experimentación in vitro.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* Lyophilization & Cold Chain Integrity - ES */}
        <section className="bg-[#F8F8F6] border border-black/5 rounded-[3rem] p-8 md:p-12 shadow-sm">
          <FadeIn>
            <h2 className="text-3xl font-absans font-bold text-black uppercase tracking-tight mb-6">
              Protocolos de Liofilización y Estabilización Molecular
            </h2>
            <div className="prose prose-lg max-w-none text-black/70 font-archia font-medium leading-relaxed">
              <p className="mb-4">
                La pureza de un péptido en el punto de síntesis carece de valor si se degrada durante el transporte. Los péptidos en soluciones acuosas son sumamente susceptibles a la hidrólisis, la oxidación y la degradación enzimática rápida. Para detener estos procesos por completo, todos los compuestos distribuidos por 99 Purity Wholesale se someten a un minucioso proceso de liofilización (secado por congelación) antes de salir del laboratorio.
              </p>
              <p className="mb-4">
                La liofilización es un proceso termodinámico complejo. La solución purificada de péptidos se congela inicialmente a temperaturas ultrabajas, convirtiendo el contenido de agua en hielo sólido. A continuación se aplica un vacío profundo y la temperatura se eleva cuidadosamente. Esto permite que el hielo se sublime, pasando directamente del estado sólido al gaseoso sin transitar por la fase líquida. El producto resultante es una pastilla sólida porosa y estable, totalmente desprovista de humedad. Dado que la degradación biológica requiere agua como catalizador, este estado deshidratado sitúa eficazmente al péptido en suspensión temporal, permitiéndole permanecer altamente estable durante períodos prolongados, incluso a temperatura ambiente.
              </p>
              <p className="mb-4">
                Para proteger aún más la frágil estructura molecular durante las fases de congelación y secado, utilizamos Manitol de grado médico como lio-protector y agente de carga. El manitol forma una matriz amorfa alrededor del péptido, evitando la formación de cristales de hielo dañinos y garantizando una disolución rápida y completa cuando el investigador reconstituye el compuesto con <Link href="/products/bac-water" className="text-[#13a7b7] hover:underline font-semibold">agua bacteriostática</Link>. Para compuestos especialmente frágiles o rutas de tránsito extremas durante los meses de verano, nuestra red logística nacional mejora automáticamente los envíos a protocolos especializados de cadena de frío, utilizando embalajes isotérmicos y regulación térmica focalizada para garantizar que la integridad molecular nunca se vea comprometida.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* Strict "Research Use Only" (RUO) Compliance - ES */}
        <section className="bg-white border border-black/5 rounded-[3rem] p-8 md:p-12 shadow-sm">
          <FadeIn>
            <h2 className="text-3xl font-absans font-bold text-black uppercase tracking-tight mb-6">
              Cumplimiento Estricto de &quot;Solo para Uso en Investigación&quot; (RUO) y Normativa Federal
            </h2>
            <div className="prose prose-lg max-w-none text-black/70 font-archia font-medium leading-relaxed">
              <p className="mb-4">
                El <Link href="/compliance" className="text-[#13a7b7] hover:underline font-semibold">marco regulatorio</Link> que rige la distribución bioquímica en los Estados Unidos es complejo y de estricta aplicación. Es imperativo que los compradores institucionales comprendan la distinción entre los principios activos farmacéuticos (API) destinados al uso clínico y los productos químicos clasificados como &quot;Solo para Uso en Investigación&quot; (RUO). 99 Purity Wholesale opera exclusivamente bajo el marco de RUO.
              </p>
              <p className="mb-4">
                Conforme a las directrices establecidas por la Administración de Alimentos y Medicamentos (FDA) y otros organismos reguladores federales, los productos químicos RUO están destinados estrictamente a la investigación de laboratorio in vitro, pruebas analíticas y fines educativos. NO están diseñados para el consumo humano, uso diagnóstico, aplicaciones terapéuticas ni ensayos clínicos con sujetos humanos. Nuestros compuestos son productos bioquímicos puros sin formular que no han sido sometidos a los extensos ensayos clínicos de varios años requeridos para la aprobación de la FDA como medicamento o dispositivo médico.
              </p>
              <p className="mb-4">
                Debido a nuestro compromiso absoluto con el cumplimiento normativo, no vendemos al público general. Nuestro <Link href="/wholesale-application" className="text-[#13a7b7] hover:underline font-semibold">proceso de incorporación B2B</Link> requiere la verificación rigurosa de todos los clientes potenciales: solicitamos un Número de Identificación de Empleador (EIN) comercial válido, direcciones corporativas verificables y declaraciones juradas que confirmen el uso exclusivo en investigación. Cualquier indicio de uso indebido dará lugar a la cancelación inmediata y permanente de la cuenta mayorista. Al mantener este estándar inquebrantable, protegemos nuestra cadena de suministro, a nuestros socios institucionales y a la comunidad científica en general.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* The Criticality of Longitudinal Batch Consistency - ES */}
        <section className="bg-black text-white border border-black/5 rounded-[3rem] p-8 md:p-12 shadow-sm">
          <FadeIn>
            <h2 className="text-3xl font-absans font-bold text-white uppercase tracking-tight mb-6">
              La Importancia Crítica de la Consistencia de Lotes a Largo Plazo
            </h2>
            <div className="prose prose-lg max-w-none text-white/70 font-archia font-medium leading-relaxed">
              <p className="mb-4">
                En el ámbito de la investigación científica rigurosa, la variabilidad es el enemigo del progreso. Cuando un laboratorio universitario o una empresa privada de investigación emprende un estudio longitudinal de varios años — ya sea modelando vías metabólicas con <Link href="/products/retatrutide" className="text-[#1ed4e8] hover:underline font-semibold">Retatrutide</Link> o ensayos de reparación tisular con <Link href="/products/bpc-157" className="text-[#1ed4e8] hover:underline font-semibold">BPC-157</Link> — los compuestos químicos que utiliza deben permanecer absolutamente idénticos desde el primer día hasta el quinto año. Incluso una variación fraccionaria en la pureza del péptido, o la aparición de un nuevo subproducto de síntesis, puede introducir variables distorsionadoras que sesguen los resultados de los ensayos, invaliden conjuntos de datos y pongan en peligro años de costosa investigación y publicaciones revisadas por pares.
              </p>
              <p className="mb-4">
                Lamentablemente, los investigadores que adquieren compuestos a través de cadenas de suministro internacionales fragmentadas sufren a menudo la &quot;ruleta de lotes&quot;. Debido a que los intermediarios extranjeros cambian constantemente de fabricante en función del coste, el péptido recibido en enero puede tener un perfil de impurezas completamente distinto al recibido en junio. 99 Purity Wholesale elimina esta incertidumbre por completo.
              </p>
              <p className="mb-4">
                Nuestra red nacional de distribución se fundamenta en el principio incondicional de una estricta consistencia entre lotes. Mantenemos una supervisión directa y continua sobre los protocolos de síntesis, asegurando que los parámetros de química FMOC permanezcan estáticos en todas las fases de fabricación. Además, dado que cada lote es verificado de forma independiente por laboratorios estadounidenses antes de ingresar a nuestro inventario, detectamos y rechazamos cualquier desviación microscópica antes de que llegue a sus instalaciones. Al asociarse con nosotros, tiene la garantía de que la referencia química de su experimento permanecerá como una constante inalterable.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* Quality Control Protocols - ES */}
        <section className="space-y-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-absans font-bold text-black uppercase tracking-tight mb-6">
                El Mandato de Pureza al 99%: Nuestro Protocolo de Ensayos
              </h2>
              <p className="text-black/60 font-archia font-medium leading-relaxed">
                No nos basamos en meras afirmaciones del fabricante. Cada compuesto que ingresa en nuestra red de distribución nacional se somete a rigurosas pruebas independientes en Estados Unidos. Nuestro proceso de validación multinivel garantiza que reciba exactamente lo que solicitó, con la mayor pureza posible; consulte nuestra{' '}
                <Link href="/certificates-of-analysis" className="text-[#13a7b7] underline underline-offset-2 hover:text-black transition-colors">
                  biblioteca pública de Certificados de Análisis (COA)
                </Link>{' '}
                para comprobar cualquier lote antes de cursar su pedido.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-black/5 p-8 rounded-[2rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 text-[100px] font-absans font-bold text-black/5 group-hover:text-[#13a7b7]/10 transition-colors pointer-events-none leading-none -mt-4 -mr-4">01</div>
                <h3 className="text-xl font-absans font-bold text-black uppercase tracking-tight mb-4 relative z-10">Análisis HPLC</h3>
                <p className="text-black/60 font-archia text-sm leading-relaxed relative z-10">
                  La cromatografía líquida de alto rendimiento se utiliza para separar, identificar y cuantificar con precisión los componentes químicos del lote de péptidos, asegurando que la concentración del principio activo supere estrictamente nuestro umbral del 99%.
                </p>
              </div>

              <div className="bg-white border border-black/5 p-8 rounded-[2rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 text-[100px] font-absans font-bold text-black/5 group-hover:text-[#13a7b7]/10 transition-colors pointer-events-none leading-none -mt-4 -mr-4">02</div>
                <h3 className="text-xl font-absans font-bold text-black uppercase tracking-tight mb-4 relative z-10">Espectrometría de Masas</h3>
                <p className="text-black/60 font-archia text-sm leading-relaxed relative z-10">
                  La espectrometría de masas (MS) confirma el peso molecular exacto y la integridad estructural de la secuencia sintetizada. Esto elimina la posibilidad de cadenas incompletas o mutaciones estructurales durante el proceso de síntesis.
                </p>
              </div>

              <div className="bg-white border border-black/5 p-8 rounded-[2rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 text-[100px] font-absans font-bold text-black/5 group-hover:text-[#13a7b7]/10 transition-colors pointer-events-none leading-none -mt-4 -mr-4">03</div>
                <h3 className="text-xl font-absans font-bold text-black uppercase tracking-tight mb-4 relative z-10">Documentación de Lote</h3>
                <p className="text-black/60 font-archia text-sm leading-relaxed relative z-10">
                  Los datos analíticos resultantes se recopilan en un Certificado de Análisis (COA) transparente. Archivamos estos registros permanentemente y proporcionamos el COA específico junto con cada envío a granel.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Solid-Phase Peptide Synthesis (SPPS) - EN */}
      <section className="bg-white border border-black/5 rounded-[3rem] p-8 md:p-12 shadow-sm">
        <FadeIn>
          <h2 className="text-3xl font-absans font-bold text-black uppercase tracking-tight mb-6">
            Advanced Solid-Phase Peptide Synthesis (SPPS)
          </h2>
          <div className="prose prose-lg max-w-none text-black/70 font-archia font-medium leading-relaxed">
            <p className="mb-4">
              The structural integrity of a research peptide is determined entirely by the precision of its synthesis. At 99 Purity Wholesale, our compounds are manufactured utilizing state-of-the-art Solid-Phase Peptide Synthesis (SPPS) employing FMOC (Fluorenylmethyloxycarbonyl) chemistry. This methodology represents the gold standard in biochemical engineering, allowing for the rapid, highly controlled assembly of long amino acid chains without the risk of unwanted side reactions or structural folding errors.
            </p>
            <p className="mb-4">
              Unlike outdated liquid-phase synthesis methods, SPPS anchors the C-terminus of the growing peptide chain to an insoluble resin support. As each subsequent amino acid is introduced, the FMOC protecting group is temporarily removed, allowing for a highly specific covalent bond to form. This cycle is repeated with painstaking precision until the desired molecular sequence is achieved. For complex sequences like <Link href="/products/tirzepatide" className="text-[#13a7b7] hover:underline font-semibold">Tirzepatide</Link> (which consists of 39 distinct amino acids), this controlled environment is the only way to guarantee a flawless molecular profile.
            </p>
            <p className="mb-4">
              Furthermore, stereochemistry plays a crucial role in cellular binding affinity. Biological receptors are highly sensitive to the spatial arrangement of atoms. Our synthesis protocols strictly utilize the biologically active L-isomers (unless a specific D-isomer is required by the sequence), ensuring that the resulting compound perfectly mimics endogenous biological signals. Post-synthesis, the peptide is cleaved from the resin and subjected to rigorous purification to remove incomplete chains, free amino acids, and synthesis byproducts like trifluoroacetic acid (TFA) salts. The result is a sterile, highly pure compound ready for in-vitro experimentation.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Lyophilization & Cold Chain Integrity - EN */}
      <section className="bg-[#F8F8F6] border border-black/5 rounded-[3rem] p-8 md:p-12 shadow-sm">
        <FadeIn>
          <h2 className="text-3xl font-absans font-bold text-black uppercase tracking-tight mb-6">
            Lyophilization & Molecular Stabilization Protocols
          </h2>
          <div className="prose prose-lg max-w-none text-black/70 font-archia font-medium leading-relaxed">
            <p className="mb-4">
              A peptide&apos;s purity at the point of synthesis is irrelevant if it degrades during transit. Peptides in aqueous solutions are highly susceptible to hydrolysis, oxidation, and rapid enzymatic degradation. To completely arrest these processes, all compounds distributed by 99 Purity Wholesale undergo an exhaustive lyophilization (freeze-drying) process before they ever leave the laboratory.
            </p>
            <p className="mb-4">
              Lyophilization is a complex thermodynamic process. The purified peptide solution is first frozen to ultra-low temperatures, converting the water content into solid ice. A deep vacuum is then applied, and the temperature is carefully raised. This allows the ice to sublimate—transitioning directly from a solid to a gas without passing through the liquid phase. The resulting product is a stable, porous, solid &quot;cake&quot; completely devoid of moisture. Because biological degradation requires water as a catalyst, this dehydrated state effectively places the peptide in suspended animation, allowing it to remain highly stable for extended periods, even at room temperature.
            </p>
            <p className="mb-4">
              To further protect the fragile molecular structure during the freezing and drying phases, we utilize medical-grade Mannitol as a lyoprotectant and bulking agent. Mannitol forms an amorphous matrix around the peptide, preventing the formation of damaging ice crystals and ensuring rapid, complete dissolution when the researcher eventually reconstitutes the compound with <Link href="/products/bac-water" className="text-[#13a7b7] hover:underline font-semibold">bacteriostatic water</Link>. For particularly fragile compounds or extreme transit routes during peak summer months, our nationwide logistics network automatically upgrades shipments to specialized cold-chain protocols, utilizing insulated packaging and targeted thermal regulation to guarantee that molecular integrity is never compromised.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Strict "Research Use Only" (RUO) Compliance - EN */}
      <section className="bg-white border border-black/5 rounded-[3rem] p-8 md:p-12 shadow-sm">
        <FadeIn>
          <h2 className="text-3xl font-absans font-bold text-black uppercase tracking-tight mb-6">
            Strict &quot;Research Use Only&quot; (RUO) & Federal Compliance
          </h2>
          <div className="prose prose-lg max-w-none text-black/70 font-archia font-medium leading-relaxed">
            <p className="mb-4">
              The <Link href="/compliance" className="text-[#13a7b7] hover:underline font-semibold">regulatory landscape</Link> surrounding biochemical distribution in the United States is complex and rigidly enforced. It is imperative that institutional buyers understand the distinction between active pharmaceutical ingredients (APIs) intended for clinical use and chemicals designated as &quot;Research Use Only&quot; (RUO). 99 Purity Wholesale operates exclusively within the RUO framework.
            </p>
            <p className="mb-4">
              According to guidelines established by the Food and Drug Administration (FDA) and other federal regulatory bodies, RUO chemicals are intended strictly for in-vitro laboratory research, analytical testing, and educational purposes. They are explicitly NOT intended for human consumption, diagnostic use, therapeutic application, or clinical trials involving human subjects. Our compounds are raw, unformulated biochemicals that have not undergone the extensive, multi-year clinical trials required for FDA approval as a drug or medical device.
            </p>
            <p className="mb-4">
              Because we take regulatory compliance incredibly seriously, we do not sell to the general public. Our <Link href="/wholesale-application" className="text-[#13a7b7] hover:underline font-semibold">B2B onboarding process</Link> involves rigorous vetting of all prospective clients. We require valid Business Employer Identification Numbers (EIN), verifiable corporate addresses, and signed declarations affirming the intended research use of the compounds. Any indication that a buyer intends to misuse these chemicals will result in the immediate and permanent termination of their wholesale account. By maintaining this unwavering standard of compliance, we protect our supply chain, our institutional partners, and the broader scientific community.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* The Criticality of Longitudinal Batch Consistency - EN */}
      <section className="bg-black text-white border border-black/5 rounded-[3rem] p-8 md:p-12 shadow-sm">
        <FadeIn>
          <h2 className="text-3xl font-absans font-bold text-white uppercase tracking-tight mb-6">
            The Criticality of Longitudinal Batch Consistency
          </h2>
          <div className="prose prose-lg max-w-none text-white/70 font-archia font-medium leading-relaxed">
            <p className="mb-4">
              In the realm of rigorous scientific inquiry, variability is the enemy of progress. When a university laboratory or private research firm embarks on a multi-year longitudinal study — whether modeling metabolic pathways with <Link href="/products/retatrutide" className="text-[#1ed4e8] hover:underline font-semibold">Retatrutide</Link> or tissue-repair assays with <Link href="/products/bpc-157" className="text-[#1ed4e8] hover:underline font-semibold">BPC-157</Link> — the chemical compounds they utilize must remain absolutely identical from day one to year five. Even a fractional change in peptide purity, or the introduction of a new synthesis byproduct, can introduce confounding variables that skew assay results, invalidate data sets, and ultimately jeopardize years of expensive research and peer-reviewed publication.
            </p>
            <p className="mb-4">
              Unfortunately, researchers sourcing compounds through fragmented, international supply chains frequently encounter the &quot;batch roulette&quot; phenomenon. Because overseas brokers constantly switch manufacturers based on cost, the peptide received in January may have a completely different impurity profile than the one received in June. 99 Purity Wholesale eliminates this variable entirely.
            </p>
            <p className="mb-4">
              Our domestic distribution network is built on the foundational principle of strict batch consistency. We maintain direct, unbroken oversight over the synthesis protocols, ensuring that the FMOC chemistry parameters remain completely static across manufacturing runs. Furthermore, because every single batch is independently verified by third-party US laboratories before entering our inventory, we catch and reject any microscopic deviations before they ever reach your facility. When you establish a supply partnership with us, you are guaranteed that the chemical baseline of your experiment will remain an unwavering constant.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Quality Control Protocols - EN */}
      <section className="space-y-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-absans font-bold text-black uppercase tracking-tight mb-6">
              The 99% Purity Mandate: Our Testing Protocol
            </h2>
            <p className="text-black/60 font-archia font-medium leading-relaxed">
              We do not rely on manufacturer claims. Every compound that enters our national distribution network is subjected to rigorous, independent third-party testing within the United States. Our multi-tiered validation process guarantees that you receive exactly what you ordered, at the highest possible purity — browse our published{' '}
              <Link href="/certificates-of-analysis" className="text-[#13a7b7] underline underline-offset-2 hover:text-black transition-colors">
                Certificate of Analysis library
              </Link>{' '}
              to verify a specific batch before you order.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-black/5 p-8 rounded-[2rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 text-[100px] font-absans font-bold text-black/5 group-hover:text-[#13a7b7]/10 transition-colors pointer-events-none leading-none -mt-4 -mr-4">01</div>
              <h3 className="text-xl font-absans font-bold text-black uppercase tracking-tight mb-4 relative z-10">HPLC Analysis</h3>
              <p className="text-black/60 font-archia text-sm leading-relaxed relative z-10">
                High-Performance Liquid Chromatography is utilized to precisely separate, identify, and quantify the chemical components of the peptide batch, ensuring the concentration of the active compound strictly exceeds our 99% threshold.
              </p>
            </div>

            <div className="bg-white border border-black/5 p-8 rounded-[2rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 text-[100px] font-absans font-bold text-black/5 group-hover:text-[#13a7b7]/10 transition-colors pointer-events-none leading-none -mt-4 -mr-4">02</div>
              <h3 className="text-xl font-absans font-bold text-black uppercase tracking-tight mb-4 relative z-10">Mass Spectrometry</h3>
              <p className="text-black/60 font-archia text-sm leading-relaxed relative z-10">
                Mass Spectrometry (MS) confirms the exact molecular weight and structural integrity of the synthesized sequence. This eliminates the possibility of incomplete chains or structural mutations during the synthesis process.
              </p>
            </div>

            <div className="bg-white border border-black/5 p-8 rounded-[2rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 text-[100px] font-absans font-bold text-black/5 group-hover:text-[#13a7b7]/10 transition-colors pointer-events-none leading-none -mt-4 -mr-4">03</div>
              <h3 className="text-xl font-absans font-bold text-black uppercase tracking-tight mb-4 relative z-10">Batch Documentation</h3>
              <p className="text-black/60 font-archia text-sm leading-relaxed relative z-10">
                The resulting analytical data is compiled into a transparent Certificate of Analysis (COA). We archive these records permanently and provide the specific batch COA alongside every bulk shipment we deploy.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
