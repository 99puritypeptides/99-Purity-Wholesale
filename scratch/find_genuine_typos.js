const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Run cspell and capture JSON or full list
try {
  const output = execSync('npx cspell "src/data/locations.json" "src/data/cities.json" --words-only --unique', { encoding: 'utf8' });
  const words = output.split('\n').map(w => w.trim()).filter(Boolean);
  
  // Whitelist of valid terms
  const validPeptidesAndScience = new Set([
    'ipamorelin', 'semaglutide', 'tirzepatide', 'retatrutide', 'cagrilintide',
    'bpc', 'ghrp', 'semax', 'selank', 'dihexa', 'dsip', 'adamax', 'epithalon',
    'mots', 'nad', 'thymalin', 'aod', 'amino', 'hplc', 'biocontainment',
    'biosecurity', 'biomanufacturing', 'biopharmaceutical', 'datasheet',
    'lyophilized', 'reconstitution', 'aliquot', 'mass-spectrometry', 'spectrometry',
    'upsells', 'deprioritized', 'deprioritize', 'endotoxin', 'spectrometry',
    'chromatography', 'peptides', 'peptide'
  ]);

  // Whitelist of Spanish terms
  const validSpanish = new Set([
    'proveedor', 'péptidos', 'ofreciendo', 'compuestos', 'metabólicos',
    'regenerativos', 'nivel', 'colaboramos', 'profesionales', 'entregar',
    'productos', 'verificados', 'estados', 'unidos', 'sudeste', 'sudoeste',
    'norte', 'sur', 'este', 'oeste', 'montaña', 'noreste', 'medio'
  ]);

  // Whitelist of known proper nouns & institutions
  const validProperNouns = new Set([
    'uams', 'bentonville', 'torrey', 'genentown', 'anschutz', 'groton', 'storrs',
    'scripps', 'moffitt', 'manoa', 'feinberg', 'moines', 'markey', 'danforth',
    'bozeman', 'sandia', 'westchester', 'wexner', 'omrf', 'omrf\'s', 'ohsu', 'ohsu\'s',
    'upmc', 'cellicon', 'musc', 'brookings', 'larner', 'morgridge', 'biodesign',
    'unmc\'s', 'unmc', 'rahway', 'pharma', 'alabama', 'alaska', 'arizona', 'arkansas',
    'california', 'colorado', 'connecticut', 'delaware', 'florida', 'georgia', 'hawaii',
    'idaho', 'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana', 'maine',
    'maryland', 'massachusetts', 'michigan', 'minnesota', 'mississippi', 'missouri',
    'montana', 'nebraska', 'nevada', 'new', 'hampshire', 'jersey', 'mexico', 'york',
    'north', 'carolina', 'dakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania',
    'rhode', 'island', 'south', 'tennessee', 'texas', 'utah', 'vermont', 'virginia',
    'washington', 'west', 'wisconsin', 'wyoming', 'and'
  ]);

  console.log("Checking unknown words against filters...\n");
  const potentialTypos = [];

  for (const word of words) {
    const lower = word.toLowerCase();
    if (
      !validPeptidesAndScience.has(lower) &&
      !validSpanish.has(lower) &&
      !validProperNouns.has(lower)
    ) {
      potentialTypos.push(word);
    }
  }

  console.log(`Found ${potentialTypos.length} words that need human review:`);
  potentialTypos.forEach(w => console.log(`- ${w}`));

} catch (err) {
  console.log("Error running script:", err.stdout || err.message);
}
