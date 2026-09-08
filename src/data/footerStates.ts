export type FooterState = [slug: string, name: string];

// Dedicated static state list for footer navigation links.
// Preserves exact footer state links while keeping the full cities.json dataset out of the global client bundle.
export const footerStates: FooterState[] = [
  ['alaska', 'Alaska'],
  ['arizona', 'Arizona'],
  ['california', 'California'],
  ['colorado', 'Colorado'],
  ['florida', 'Florida'],
  ['massachusetts', 'Massachusetts'],
  ['new-york', 'New York'],
  ['south-carolina', 'South Carolina'],
  ['texas', 'Texas'],
];
