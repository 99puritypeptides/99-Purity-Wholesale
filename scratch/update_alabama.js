const fs = require('fs');
const path = require('path');

const locationsPath = path.join(__dirname, '../src/data/locations.json');
const locationsData = JSON.parse(fs.readFileSync(locationsPath, 'utf-8'));

const alabamaIndex = locationsData.findIndex(loc => loc.slug === 'alabama');

if (alabamaIndex !== -1) {
  const alabama = locationsData[alabamaIndex];
  
  // 1. Remove exaggerated claims from intro
  alabama.intro = "99 Purity Wholesale supplies research peptides to licensed professionals and research laboratories in Alabama. We deliver domestic, COA-verified products to B2B accounts statewide.";
  alabama.introEs = "99 Purity Wholesale suministra péptidos de investigación a profesionales y laboratorios de investigación en Alabama. Entregamos productos nacionales verificados por COA a cuentas B2B en todo el estado.";

  // 2. Refined Contact Sales sections (bodyP1, bodyP2, bodyP3)
  alabama.bodyP1 = "Alabama's research infrastructure splits across two centers rather than one. In Birmingham, Southern Research — an independent nonprofit contract research organization founded in 1941 and historically affiliated with UAB — has spent decades in drug discovery and development work, and the city's recent designation as a federal biotech Tech Hub site has pulled in additional investment around that base. In Huntsville, the HudsonAlpha Institute for Biotechnology occupies a 152-acre campus inside Cummings Research Park and focuses on genomics and genetic research. Between them, and alongside UAB's own biomedical programs, these two cities account for most of the state's institutional research activity, with Auburn University and the University of Alabama contributing additional academic research capacity from Auburn and Tuscaloosa.";
  
  alabama.bodyP2 = "99 Purity Wholesale supplies B2B accounts in Alabama — compounding pharmacies, wellness practices, and independent labs — from a domestic distribution network with no overseas sourcing to reconcile and no customs step to explain to a state board auditor. Every order shipped into Alabama carries a batch-matched Certificate of Analysis from independent third-party testing, and that documentation is available to review before an order is placed, not just after it arrives.";
  
  alabama.bodyP3 = "Fulfillment to Alabama runs 2 to 4 business days via priority carrier, with tiered pricing for higher-volume accounts and Net-30 terms available once an account has an order history with us.";
  
  // Ensure we don't have unsupported procurement claims in the body text
  alabama.bodyP4 = "";
  alabama.bodyP5 = "";

  // 3. Who We Serve
  alabama.researchInstitutions = "Southern Research in Birmingham and the HudsonAlpha Institute for Biotechnology in Huntsville are two significant points of Alabama's applied-research base, working in drug discovery/development and genomics respectively. Around them sits a layer of independent contract labs and clinical research operations that support the state's broader medical and pharmaceutical sector.";
  
  alabama.universities = "The University of Alabama at Birmingham carries the state's largest biomedical research footprint. Auburn University and the University of Alabama each maintain their own research programs spanning pharmaceutical sciences and the life sciences more broadly.";
  
  alabama.biotechOverview = "Alabama's biotech presence is concentrated rather than distributed — Huntsville's genomics cluster and Birmingham's drug-discovery and clinical-research base carry most of the activity, with the balance made up of hospital-affiliated research programs and a growing wellness and functional-medicine sector across the state's larger metro areas.";
  
  alabama.industriesWeSupply = "Our B2B accounts in Alabama span licensed compounding pharmacies, medical spas and wellness practices, and independent research labs, concentrated in Birmingham, Huntsville, Montgomery, Mobile, and Tuscaloosa.";

  // Fast Domestic Fulfillment
  alabama.logisticsDetails = "Alabama sits inside our Southeast distribution band, which keeps transit predictable rather than something a buyer has to plan around. Because everything ships from within the U.S., there's no customs paperwork, no import inspection delay, and no point in the process where a shipment can stall at a border. For a compounding pharmacy running on a fixed reorder cycle, that predictability matters more than raw shipping speed — a delivery window you can plan against beats a faster one you can't count on.";

  // FAQs
  alabama.localFaqs = [
    {
      "q": "How long does shipping to Alabama typically take?",
      "a": "Standard priority shipping to Birmingham, Huntsville, Montgomery, Mobile, and Tuscaloosa runs 2 to 4 business days from order confirmation, consistent with our Southeast regional distribution band."
    },
    {
      "q": "Does 99 Purity Wholesale work with Alabama compounding pharmacies specifically?",
      "a": "Yes — compounding pharmacies are one of our core account types nationally, including in Alabama. As with any B2B account, we require EIN verification, a completed wholesale application, and a signed research-use declaration, and it remains the buyer's responsibility to confirm the intended use complies with their own state board and licensing requirements."
    },
    {
      "q": "Are your compounds tied to any Alabama research institution?",
      "a": "No. We are an independent B2B wholesale supplier and do not have partnerships, affiliations, or supply agreements with UAB, Southern Research, HudsonAlpha, Auburn University, or any other Alabama institution. Any reference to Alabama's research landscape on this page is background context, not a claim of institutional relationship."
    },
    {
      "q": "Is buying research peptides in bulk legal for a licensed Alabama business?",
      "a": "99 Purity Wholesale sells exclusively under a Research Use Only (RUO) framework to verified B2B accounts, and our compounds are not FDA-approved for human or veterinary use. Whether a specific purchase, storage, and use pattern complies with Alabama law and any relevant board regulations is a determination the buyer's organization needs to make — we're not positioned to give that legal sign-off, and this page shouldn't be read as one."
    },
    {
      "q": "Do you ship to all five major Alabama metro areas, or just Birmingham and Huntsville?",
      "a": "All of them. Birmingham and Huntsville have the largest concentration of research-oriented accounts given the institutions based there, but our distribution network serves B2B accounts throughout Montgomery, Mobile, and Tuscaloosa on the same terms."
    },
    {
      "q": "What documentation comes with an Alabama order?",
      "a": "Every shipment includes a batch-matched Certificate of Analysis from independent third-party testing (HPLC purity, MS molecular-weight confirmation). Buyers can also look up the COA library directly before ordering to check a specific batch."
    },
    {
      "q": "Can an Alabama account get Net-30 terms?",
      "a": "Net-30 is available to established accounts with an order history; new accounts typically start on standard payment terms (ACH, wire, or corporate card) and can transition once that history is in place."
    }
  ];
  
  // Write the file back
  fs.writeFileSync(locationsPath, JSON.stringify(locationsData, null, 2));
  console.log('Successfully updated Alabama content in locations.json');
} else {
  console.log('Alabama not found');
}
