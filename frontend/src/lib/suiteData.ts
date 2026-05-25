export type Metric = {
  label: string;
  value: string;
  note: string;
};

export const sourceSystems = [
  {
    name: 'AIAntiFraud',
    ownership: 'Fraud alerting, scoring, investigation triage, and case routing',
    coverage: ['Fraud alerts', 'Scoring', 'Triage', 'Case routing'],
  },
  {
    name: 'AIAMLTransactionMonitoring',
    ownership: 'AML transaction monitoring, watchlists, SAR preparation, and review workflows',
    coverage: ['AML monitoring', 'Watchlists', 'SAR drafts', 'Review'],
  },
  {
    name: 'AIInsuranceClaimsAdjuster',
    ownership: 'Claims investigation, evidence, adjudication, estimates, and settlement review',
    coverage: ['Claims', 'Evidence', 'Adjudication', 'Settlement'],
  },
  {
    name: 'AIVendorRiskPerformanceScorer',
    ownership: 'Third-party risk, vendor scorecards, compliance, and performance monitoring',
    coverage: ['Vendor risk', 'Scorecards', 'Compliance', 'Performance'],
  },
];

export const dashboardMetrics: Metric[] = [
  { label: 'Open Cases', value: '326', note: 'Active' },
  { label: 'Alerts', value: '1.4K', note: 'This week' },
  { label: 'Alerts', value: '612', note: 'Open' },
  { label: 'Claims', value: '238', note: 'Open' },
];

export const healthMetrics: Metric[] = [
  { label: 'Critical', value: '28', note: 'Escalated' },
  { label: 'Missing Links', value: '48', note: 'Open' },
  { label: 'Approvals', value: '57', note: 'Pending' },
  { label: 'AI Tool Runs', value: '374', note: 'Last 24 hours' },
];

export const dashboardModules = ['Case severity and deadlines', 'Fraud alert triage and scoring', 'AML monitoring and SAR drafts', 'Claims evidence and settlement risk', 'Entity resolution and evidence completeness', 'Vendor and credit risk review', 'Compliance controls and audit readiness'];

export const workflowHighlights = ['Case severity and deadlines', 'Fraud alert triage and scoring', 'AML monitoring and SAR drafts', 'Claims evidence and settlement risk', 'Entity resolution and evidence completeness'];
