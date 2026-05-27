export type EntityRecord = {
  id: string;
  name: string;
  status: string;
  owner: string;
  amount?: string;
  dueDate?: string;
  priority?: string;
};

export type FeatureEntitySet = {
  title: string;
  columns: string[];
  rows: EntityRecord[];
};

const COLUMNS = ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'];

const entitySeeds = [
  ['cases', 'Cases Records', 'Cases priority queue', 'Open', 'Cases exception list', 'Investigation Operations Lead', '$0'],
  ['fraud-alerts', 'Fraud Alerts Records', 'Fraud Alerts priority queue', 'Review', 'Fraud Alerts exception list', 'Fraud Operations Lead', '$0'],
  ['aml-monitoring', 'AML Monitoring Records', 'AML Monitoring priority queue', 'Action needed', 'AML Monitoring exception list', 'Financial Crime Lead', '$0'],
  ['claims-investigation', 'Claims Investigation Records', 'Claims Investigation priority queue', 'Open', 'Claims Investigation exception list', 'Claims Risk Lead', '$0'],
  ['evidence', 'Evidence Records', 'Evidence priority queue', 'Review', 'Evidence exception list', 'Investigation Operations Lead', '$0'],
  ['entity-resolution', 'Entity Resolution Records', 'Entity Resolution priority queue', 'Action needed', 'Entity Resolution exception list', 'Intelligence Lead', '$0'],
  ['vendor-risk', 'Vendor Risk Records', 'Vendor Risk priority queue', 'Open', 'Vendor Risk exception list', 'Third Party Risk Lead', '$0'],
  ['credit-risk', 'Credit Risk Records', 'Credit Risk priority queue', 'Review', 'Credit Risk exception list', 'Portfolio Risk Lead', '$0'],
  ['case-workflows', 'Case Workflows Records', 'Case Workflows priority queue', 'Action needed', 'Case Workflows exception list', 'Investigation Operations Lead', '$0'],
  ['reports', 'Reports Records', 'Reports priority queue', 'Open', 'Reports exception list', 'Intelligence Layer Lead', '$0'],
  ['compliance', 'Compliance Records', 'Compliance priority queue', 'Review', 'Compliance exception list', 'Governance Lead', '$0'],
  ['audit-readiness', 'Audit Readiness Records', 'Audit Readiness priority queue', 'Action needed', 'Audit Readiness exception list', 'Governance Lead', '$0'],
  ["bond-risk-assessment","Bond Risk Assessment Records","Bond Risk Assessment operating queue","Open","Bond Risk Assessment follow-up list","Bail Bond Risk","$0"],
  ["court-appearance-monitoring","Court Appearance Monitoring Records","Court Appearance Monitoring operating queue","Review","Court Appearance Monitoring follow-up list","Bail Bond Risk","$0"],
  ["surety-packet","Surety Packet Records","Surety Packet operating queue","Review","Surety Packet follow-up list","Bail Bond Risk","$0"],
  ['documents', 'Documents Records', 'Documents priority queue', 'Open', 'Documents exception list', 'Core Platform Lead', '$0'],
  ['notifications', 'Notifications Records', 'Notifications priority queue', 'Review', 'Notifications exception list', 'Core Platform Lead', '$0'],
  ['integrations', 'Integrations Records', 'Integrations priority queue', 'Action needed', 'Integrations exception list', 'Core Platform Lead', '$0'],
  ['profiles', 'Profiles Records', 'Profiles priority queue', 'Open', 'Profiles exception list', 'Core Platform Lead', '$0'],
  ['ai-assistant', 'AI Assistant Records', 'AI Assistant priority queue', 'Review', 'AI Assistant exception list', 'Intelligence Layer Lead', '$0'],
  ['ai-tools', 'AI Tools Records', 'AI Tools priority queue', 'Action needed', 'AI Tools exception list', 'Intelligence Layer Lead', '$0'],
] as const;

function buildSet(
  slug: string,
  title: string,
  firstName: string,
  firstStatus: string,
  secondName: string,
  owner: string,
  amount: string,
): FeatureEntitySet {
  return {
    title,
    columns: COLUMNS,
    rows: [
      { id: `${slug}-1`, name: firstName, status: firstStatus, owner, amount, dueDate: '2026-05-27', priority: 'High' },
      { id: `${slug}-2`, name: secondName, status: 'Review', owner: 'Operations', amount, dueDate: '2026-05-29', priority: 'Medium' },
      { id: `${slug}-3`, name: `${title.replace(' Records', '')} exception queue`, status: 'Queued', owner: 'Team Lead', amount: '$0', dueDate: '2026-05-30', priority: 'Medium' },
    ],
  };
}

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = Object.fromEntries(
  entitySeeds.map(([slug, title, firstName, firstStatus, secondName, owner, amount]) => [
    slug,
    buildSet(slug, title, firstName, firstStatus, secondName, owner, amount),
  ]),
);
