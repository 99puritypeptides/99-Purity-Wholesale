# Phase 2: City Pages Implementation Plan

This plan outlines the architectural updates required to expand your Next.js application to support City-level SEO pages, perfectly matching your SEO structure roadmap.

## User Review Required

> [!IMPORTANT]
> The current codebase handles **Phase 1** perfectly but requires these updates to support **Phase 2**. Please review the proposed architecture below. If you approve, I will begin writing the code to support City pages. Once the code is ready, you can start generating City JSON data (just like you did for States) and they will automatically populate!

## Proposed Changes

### Data Layer

#### [NEW] `src/data/cities.json`
- We will create a new JSON file to house city-specific data (e.g. `metaTitle`, `metaDesc`, `bodyP1`, etc.).
- Each city object will have a `stateSlug` field to link it hierarchically to its parent state.

### Routing & Page Rendering

#### [MODIFY] `src/app/[locale]/locations/[...slug]/page.tsx`
- **`generateStaticParams`**: Update to also loop through `cities.json` and generate the 3-level deep routes (`[countrySlug, stateSlug, citySlug]`).
- **Page Component Logic**: Add logic to detect if the route is a State page (`slug.length === 2`) or a City page (`slug.length === 3`).
- **City Page View**: Render a specialized view for City pages with localized content, matching the "City Page" requirements in your PDF.

### Internal Linking & UI

#### [MODIFY] `src/components/layout/Footer.tsx`
- Add a new "Top Cities" column next to the states column in the footer.

#### [MODIFY] `src/app/[locale]/locations/[...slug]/page.tsx` (State View)
- Add a new section: **"Cities We Serve in [State]"**.
- This section will map over `cities.json`, find all cities belonging to the current state, and create internal links to them (`/locations/united-states/[state]/[city]`). This perfectly satisfies the "Every State links to City" requirement.

## Verification Plan
1. Ensure the app builds successfully with the new routing logic.
2. Verify that `/locations/united-states/california/los-angeles` renders correctly.
3. Verify that the California state page contains a link to Los Angeles.
4. Verify breadcrumbs output `Home > Locations > United States > California > Los Angeles`.
