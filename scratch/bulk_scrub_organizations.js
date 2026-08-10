const fs = require('fs');
const path = require('path');

const locationsPath = path.join(__dirname, '../src/data/locations.json');
const citiesPath = path.join(__dirname, '../src/data/cities.json');

let locationsData = JSON.parse(fs.readFileSync(locationsPath, 'utf-8'));
let citiesData = JSON.parse(fs.readFileSync(citiesPath, 'utf-8'));

const institutions = [
  "Translational Genomics Research Institute",
  "The Mayo Clinic",
  "Mayo Clinic",
  "Arizona State University",
  "University of Arizona",
  "Biodesign Institute",
  "University of Arkansas",
  "Stanford University",
  "Yale University",
  "University of Connecticut",
  "University of Delaware",
  "The Delaware Biotechnology Institute",
  "Delaware Biotechnology Institute",
  "University of Florida",
  "University of Miami",
  "Florida State University",
  "Emory University",
  "Georgia Institute",
  "University of Hawaii",
  "Burns School of Medicine",
  "Boise State University",
  "Northwestern University",
  "University of Chicago",
  "Feinberg School of Medicine",
  "University of Illinois",
  "Purdue University",
  "Indiana University School of Medicine",
  "Indiana University",
  "University of Iowa",
  "Iowa State University",
  "Carver College",
  "College of Veterinary Medicine",
  "University of Kansas Medical Center",
  "Kansas Medical Center",
  "Kansas State University",
  "University of Kentucky",
  "University of Louisville",
  "Gluck Equine Research Center",
  "Tulane University",
  "Louisiana State University",
  "University of New England",
  "Johns Hopkins University",
  "National Institute",
  "University of Maryland",
  "Harvard University",
  "Broad Institute",
  "Massachusetts Institute",
  "University of Michigan",
  "Michigan State University",
  "Van Andel Institute",
  "Wayne State University",
  "University of Mississippi Medical Center",
  "Mississippi Medical Center",
  "Mississippi State University",
  "Washington University",
  "University of Missouri",
  "Montana State University",
  "University of Montana",
  "University of Nebraska Medical Center",
  "Nebraska Medical Center",
  "University of Nebraska",
  "University of Nevada",
  "Dartmouth College",
  "Hitchcock Medical Center",
  "Geisel School of Medicine",
  "Rutgers University",
  "University of New Mexico Health Sciences Center",
  "University of New Mexico Health Sciences",
  "New Mexico State University",
  "Rockefeller University",
  "University of Rochester",
  "Columbia University",
  "Cornell University",
  "Duke University Medical Center",
  "Duke University",
  "University of North Carolina",
  "North Carolina State University",
  "North Dakota State University",
  "University of North Dakota",
  "Ohio State University",
  "Wexner Medical Center",
  "The Cleveland Clinic",
  "Cleveland Clinic",
  "Case Western Reserve University",
  "University of Cincinnati",
  "University of Oklahoma Health Sciences Center",
  "University of Oklahoma Health Sciences",
  "Oklahoma State University",
  "Science University",
  "Gene Therapy Institute",
  "Oregon State University",
  "University of Pennsylvania",
  "University of Pittsburgh Medical Center",
  "University of Pittsburgh",
  "Pittsburgh Medical Center",
  "Perelman School of Medicine",
  "Brown University",
  "The Medical University",
  "Medical University",
  "Clemson University",
  "South Dakota State University",
  "Vanderbilt University Medical Center",
  "Vanderbilt University",
  "University of Tennessee",
  "The Texas Medical Center",
  "Texas Medical Center",
  "UT Southwestern Medical Center",
  "Southwestern Medical Center",
  "South Texas Medical Center",
  "Rice University",
  "University of Utah",
  "The Huntsman Cancer Institute",
  "Huntsman Cancer Institute",
  "University of Vermont",
  "Larner College",
  "University of Virginia",
  "Virginia Commonwealth University",
  "University of Washington",
  "West Virginia University",
  "Rockefeller Neuroscience Institute",
  "University of Wisconsin",
  "Morgridge Institute",
  "University of Wyoming",
  "Summerville Medical Center",
  "Trident Health Summerville Medical Center",
  "Grand Strand Medical Center",
  "University of South Florida",
  "University City",
  "Fitzsimons Army Medical Center",
  "University Hill",
  "Research Hospital",
  "Hospital Medical Center",
  "Research Institute",
  "College of Pharmacy",
  "Southern Research",
  "HudsonAlpha Institute for Biotechnology",
  "University of Alabama at Birmingham",
  "Auburn University",
  "University of Alabama",
  "UAB",
  "University of Alaska Fairbanks",
  "University of Alaska system",
  "Fairbanks and Anchorage campuses"
];

function getReplacement(name) {
  const lower = name.toLowerCase();
  if (lower.includes('school of medicine')) return 'top medical schools';
  if (lower.includes('hospital') || lower.includes('medical center') || lower.includes('clinic')) return 'major regional medical centers';
  if (lower.includes('institute') || lower.includes('research')) return 'prominent research institutes';
  if (lower.includes('university') || lower.includes('college')) return 'leading state universities';
  return 'major regional institutions';
}

function scrubText(text) {
  if (!text) return text;
  let newText = text;
  // Sort institutions by length descending so we replace longer names first
  institutions.sort((a, b) => b.length - a.length).forEach(inst => {
    // Escape regex characters just in case
    const safeInst = inst.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${safeInst}\\b`, 'gi');
    newText = newText.replace(regex, getReplacement(inst));
  });
  return newText;
}

function processData(data) {
  data.forEach(item => {
    ['bodyP1', 'bodyP2', 'bodyP3', 'institutionsServed', 'researchInstitutions', 'universities', 'biotechOverview', 'industriesWeSupply'].forEach(field => {
      item[field] = scrubText(item[field]);
    });
    if (item.localFaqs) {
      item.localFaqs.forEach(faq => {
        faq.a = scrubText(faq.a);
      });
    }
  });
}

processData(locationsData);
processData(citiesData);

fs.writeFileSync(locationsPath, JSON.stringify(locationsData, null, 2));
fs.writeFileSync(citiesPath, JSON.stringify(citiesData, null, 2));

console.log('Successfully scrubbed all specific organizations from the dataset.');
