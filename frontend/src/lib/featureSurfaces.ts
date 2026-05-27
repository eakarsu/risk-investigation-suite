export type FeatureSurfaceRow = {
  id: string;
  item: string;
  status: string;
  owner: string;
  nextStep: string;
};

export type FeatureSurface = {
  workItems: FeatureSurfaceRow[];
  quickActions: string[];
  controlChecks: Array<{ id: string; label: string; done: boolean }>;
  activityLog: Array<{ id: string; message: string; at: string }>;
};

const featureSeeds = [
  ['cases', 'Cases', 'Cases operating queue', 'Investigation Operations Lead', 'Review and assign next action'],
  ['fraud-alerts', 'Fraud Alerts', 'Fraud Alerts operating queue', 'Fraud Operations Lead', 'Review and assign next action'],
  ['aml-monitoring', 'AML Monitoring', 'AML Monitoring operating queue', 'Financial Crime Lead', 'Review and assign next action'],
  ['claims-investigation', 'Claims Investigation', 'Claims Investigation operating queue', 'Claims Risk Lead', 'Review and assign next action'],
  ['evidence', 'Evidence', 'Evidence operating queue', 'Investigation Operations Lead', 'Review and assign next action'],
  ['entity-resolution', 'Entity Resolution', 'Entity Resolution operating queue', 'Intelligence Lead', 'Review and assign next action'],
  ['vendor-risk', 'Vendor Risk', 'Vendor Risk operating queue', 'Third Party Risk Lead', 'Review and assign next action'],
  ['credit-risk', 'Credit Risk', 'Credit Risk operating queue', 'Portfolio Risk Lead', 'Review and assign next action'],
  ['case-workflows', 'Case Workflows', 'Case Workflows operating queue', 'Investigation Operations Lead', 'Review and assign next action'],
  ['reports', 'Reports', 'Reports operating queue', 'Intelligence Layer Lead', 'Review and assign next action'],
  ['compliance', 'Compliance', 'Compliance operating queue', 'Governance Lead', 'Review and assign next action'],
  ['audit-readiness', 'Audit Readiness', 'Audit Readiness operating queue', 'Governance Lead', 'Review and assign next action'],
  ["bond-risk-assessment","Bond Risk Assessment","Bond Risk Assessment review queue","Bail Bond Risk","Review source context and assign owner"],
  ["court-appearance-monitoring","Court Appearance Monitoring","Court Appearance Monitoring review queue","Bail Bond Risk","Confirm next action and update evidence"],
  ["surety-packet","Surety Packet","Surety Packet review queue","Bail Bond Risk","Confirm next action and update evidence"],
  ['documents', 'Documents', 'Documents operating queue', 'Core Platform Lead', 'Review and assign next action'],
  ['notifications', 'Notifications', 'Notifications operating queue', 'Core Platform Lead', 'Review and assign next action'],
  ['integrations', 'Integrations', 'Integrations operating queue', 'Core Platform Lead', 'Review and assign next action'],
  ['profiles', 'Profiles', 'Profiles operating queue', 'Core Platform Lead', 'Review and assign next action'],
  ['ai-assistant', 'AI Assistant', 'AI Assistant operating queue', 'Intelligence Layer Lead', 'Review and assign next action'],
  ['ai-tools', 'AI Tools', 'AI Tools operating queue', 'Intelligence Layer Lead', 'Review and assign next action'],
] as const;

function buildSurface(slug: string, title: string, item: string, owner: string, nextStep: string): FeatureSurface {
  return {
    workItems: [
      { id: `${slug}-1`, item, status: 'Open', owner, nextStep },
      { id: `${slug}-2`, item: `${title} exception review`, status: 'Review', owner: 'Operations', nextStep: 'Investigate exception and assign owner' },
      { id: `${slug}-3`, item: `${title} weekly operating queue`, status: 'Queued', owner: 'Team Lead', nextStep: 'Prioritize next actions' },
    ],
    quickActions: [`Create ${title} record`, `Export ${title} list`, `Review ${title} exceptions`],
    controlChecks: [
      { id: `${slug}-check-1`, label: `${title} owner assigned`, done: true },
      { id: `${slug}-check-2`, label: `${title} next step documented`, done: false },
      { id: `${slug}-check-3`, label: `${title} audit trail current`, done: true },
    ],
    activityLog: [
      { id: `${slug}-log-1`, message: `${title} queue refreshed`, at: '2026-05-24 09:00' },
      { id: `${slug}-log-2`, message: `${title} exception assigned`, at: '2026-05-24 11:30' },
    ],
  };
}

export const featureSurfaceBySlug: Record<string, FeatureSurface> = Object.fromEntries(
  featureSeeds.map(([slug, title, item, owner, nextStep]) => [
    slug,
    buildSurface(slug, title, item, owner, nextStep),
  ]),
);

export const featureSurfaces: Record<string, FeatureSurface> = Object.fromEntries(
  featureSeeds.map(([slug, title]) => [title, featureSurfaceBySlug[slug]]),
);
