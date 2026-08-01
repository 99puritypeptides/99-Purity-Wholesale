const fs = require('fs');
const path = require('path');

const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

function generateStateEntry(stateName) {
  const slug = stateName.toLowerCase().replace(/ /g, '-');
  return {
    "slug": slug,
    "city": stateName,
    "state": "United States",
    "region": "United States",
    "h1": `Wholesale Peptide Supplier in ${stateName} — Research-Grade Bulk Supply`,
    "metaTitle": `Wholesale Peptides ${stateName} | Bulk Research-Grade Supply`,
    "metaDesc": `99 Purity Wholesale supplies bulk research-grade peptides to licensed professionals in ${stateName}. ≥99% purity, batch COA verified, fast domestic shipping.`,
    "intro": `${stateName}'s premier supplier for wholesale peptides, offering top-tier metabolic and regenerative compounds. We partner with licensed professionals to deliver domestic, COA-verified products.`,
    "introEs": `El proveedor principal de péptidos al por mayor de ${stateName}, ofreciendo compuestos metabólicos y regenerativos de primer nivel. Colaboramos con profesionales para entregar productos verificados por COA.`,
    "popularProducts": [
      "Semaglutide",
      "Tirzepatide",
      "BPC-157",
      "Retatrutide",
      "TB-500",
      "Ipamorelin"
    ],
    "localKeywords": [
      `wholesale peptides ${stateName}`,
      `peptide supplier ${stateName}`,
      `bulk research peptides ${stateName}`,
      `GLP-1 peptides wholesale ${stateName}`
    ],
    "bodyP1": `${stateName} is home to a growing number of wellness clinics, compounding pharmacies, and medical research facilities that require consistent, verified domestic peptide supply.`,
    "bodyP2": `We fulfill wholesale peptide orders to institutions across ${stateName} from our U.S. domestic facility. Every batch is synthesized in America, independently tested, and shipped via priority carrier.`,
    "bodyP3": "Licensed professionals and research institutions can access our complete catalog of high-purity research compounds, completely bypassing international customs delays.",
    "bodyP4": `By sourcing directly from a U.S. domestic manufacturer like 99 Purity Wholesale, facilities in ${stateName} bypass the compliance ambiguities often associated with overseas suppliers.`,
    "bodyP5": "Our localized fulfillment model ensures that institutions can scale their research programs without worrying about supply chain bottlenecks.",
    "whyUs": [
      "U.S.-manufactured — synthesized domestically, not imported",
      "≥99% purity on every compound, verified by independent U.S. labs",
      "Batch-matched COA documentation with every shipment",
      `Fast domestic fulfillment to ${stateName}`,
      "Tiered wholesale pricing for B2B buyers"
    ],
    "institutionsServed": `We supply research peptides to licensed compounding pharmacies, functional medicine practices, medical spas, and independent research laboratories across ${stateName} and ${stateName}.`,
    "logisticsDetails": `Our domestic shipping network guarantees fast, priority delivery to ${stateName} and all across ${stateName}, completely bypassing international customs delays.`,
    "localFaqs": [
      {
        "q": `What is the standard delivery time for wholesale peptides to ${stateName}?`,
        "a": `Orders shipped to ${stateName} typically arrive within 2-4 business days via priority domestic carrier.`
      },
      {
        "q": "Are your research compounds verified by independent US-based labs?",
        "a": "Every batch supplied includes a batch-matched Certificate of Analysis from an independent, third-party U.S. laboratory verifying ≥99% purity."
      },
      {
        "q": `Is it legal to buy bulk research peptides in ${stateName}?`,
        "a": `Yes, provided the buyer is a licensed professional purchasing the compounds explicitly for in-vitro laboratory research and analytical testing, strictly avoiding human consumption.`
      }
    ]
  };
}

const unitedStatesEntry = {
  "slug": "united-states",
  "city": "United States",
  "state": "United States",
  "region": "United States",
  "h1": "Wholesale Peptide Supplier in United States — Research-Grade Bulk Supply",
  "metaTitle": "Wholesale Peptides United States | Bulk Research-Grade Supply",
  "metaDesc": "99 Purity Wholesale supplies bulk research-grade peptides to licensed professionals in United States. ≥99% purity, batch COA verified, fast domestic shipping.",
  "intro": "We supply research institutions and licensed professionals in United States with U.S.-manufactured research-grade peptides at wholesale pricing. Every batch includes independent third-party COA documentation.",
  "introEs": "Suministramos a instituciones de investigación y profesionales autorizados en United States péptidos de grado de investigación fabricados en EE. UU. a precios de mayorista. Cada lote incluye documentación COA de terceros independientes.",
  "popularProducts": [
    "Semaglutide",
    "Tirzepatide",
    "BPC-157",
    "Retatrutide",
    "TB-500",
    "Ipamorelin"
  ],
  "localKeywords": [
    "wholesale peptides United States",
    "peptide supplier United States",
    "bulk research peptides United States",
    "GLP-1 peptides wholesale United States"
  ],
  "bodyP1": "United States is home to a growing number of wellness clinics, compounding pharmacies, and medical research facilities that require consistent, verified domestic peptide supply.",
  "bodyP2": "We fulfill wholesale peptide orders to institutions across United States from our U.S. domestic facility. Every batch is synthesized in America, independently tested, and shipped via priority carrier.",
  "bodyP3": "Licensed professionals and research institutions can access our complete catalog of high-purity research compounds, completely bypassing international customs delays.",
  "bodyP4": "By sourcing directly from a U.S. domestic manufacturer like 99 Purity Wholesale, facilities in United States bypass the compliance ambiguities often associated with overseas suppliers.",
  "bodyP5": "Our localized fulfillment model ensures that institutions can scale their research programs without worrying about supply chain bottlenecks.",
  "whyUs": [
    "U.S.-manufactured — synthesized domestically, not imported",
    "≥99% purity on every compound, verified by independent U.S. labs",
    "Batch-matched COA documentation with every shipment",
    "Fast domestic fulfillment to United States",
    "Tiered wholesale pricing for B2B buyers"
  ],
  "institutionsServed": "We supply research peptides to licensed compounding pharmacies, functional medicine practices, medical spas, and independent research laboratories across United States and United States.",
  "logisticsDetails": "Our domestic shipping network guarantees fast, priority delivery to United States and all across United States, completely bypassing international customs delays.",
  "localFaqs": [
    {
      "q": "What is the standard delivery time for wholesale peptides to United States?",
      "a": "Orders shipped to United States typically arrive within 2-4 business days via priority domestic carrier."
    },
    {
      "q": "Are your research compounds verified by independent US-based labs?",
      "a": "Every batch supplied includes a batch-matched Certificate of Analysis from an independent, third-party U.S. laboratory verifying ≥99% purity."
    },
    {
      "q": "Is it legal to buy bulk research peptides in United States?",
      "a": "Yes, provided the buyer is a licensed professional purchasing the compounds explicitly for in-vitro laboratory research and analytical testing, strictly avoiding human consumption."
    }
  ]
};

const locationsData = [unitedStatesEntry, ...states.map(generateStateEntry)];

const targetPath = path.join(__dirname, '..', 'src', 'data', 'locations.json');
fs.writeFileSync(targetPath, JSON.stringify(locationsData, null, 2), 'utf8');
console.log(`Generated ${locationsData.length} locations and wrote to src/data/locations.json`);
