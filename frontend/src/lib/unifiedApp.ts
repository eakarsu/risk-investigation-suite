import {
  Activity,
  BarChart3,
  Bell,
  Blocks,
  Database,
  Bot,
  CalendarCheck,
  ClipboardCheck,
  ClipboardList,
  FileSearch,
  FileText,
  Files,
  Gavel,
  Landmark,
  LayoutDashboard,
  LucideIcon,
  Plug,
  Scale,
  ShieldCheck,
  UserRound,
  Users,
  Workflow,
} from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type FeatureDefinition = {
  title: string;
  href: string;
  category: string;
  summary: string;
  bullets: string[];
};

export type PageDefinition = {
  title: string;
  eyebrow: string;
  subtitle: string;
  category: string;
  summary: string;
  bullets: string[];
  metrics: Array<{ label: string; value: string; note: string }>;
};

export type FeatureContext = {
  sourceOwners: string[];
  operatingQueues: string[];
  outputs: string[];
  relatedRoutes: Array<{ label: string; href: string }>;
};

const features = [
  {
    slug: 'cases',
    title: 'Cases',
    href: '/cases',
    category: 'Investigation Operations',
    icon: FileSearch,
    summary: 'Investigation cases, ownership, severity, status, evidence, and disposition.',
    bullets: ['Case intake', 'Severity', 'Disposition'],
    metrics: [{ label: 'Open Cases', value: '326', note: 'Active' }, { label: 'Critical', value: '28', note: 'Escalated' }, { label: 'Due Today', value: '41', note: 'Need action' }],
  },
  {
    slug: 'fraud-alerts',
    title: 'Fraud Alerts',
    href: '/fraud-alerts',
    category: 'Fraud Operations',
    icon: ShieldCheck,
    summary: 'Fraud alerts, anomaly signals, triage, scoring, and analyst review.',
    bullets: ['Alerts', 'Scoring', 'Triage'],
    metrics: [{ label: 'Alerts', value: '1.4K', note: 'This week' }, { label: 'High Risk', value: '83', note: 'Review' }, { label: 'False Positive', value: '18%', note: 'Current' }],
  },
  {
    slug: 'aml-monitoring',
    title: 'AML Monitoring',
    href: '/aml-monitoring',
    category: 'Financial Crime',
    icon: Activity,
    summary: 'Transaction monitoring, watchlists, sanctions hits, SAR prep, and review queues.',
    bullets: ['Transactions', 'Watchlists', 'SAR prep'],
    metrics: [{ label: 'Alerts', value: '612', note: 'Open' }, { label: 'Watchlist Hits', value: '27', note: 'Escalated' }, { label: 'SAR Drafts', value: '11', note: 'In progress' }],
  },
  {
    slug: 'claims-investigation',
    title: 'Claims Investigation',
    href: '/claims-investigation',
    category: 'Claims Risk',
    icon: FileText,
    summary: 'Claims review, evidence packets, estimate variance, liability, and settlement risk.',
    bullets: ['Claims review', 'Evidence', 'Settlement risk'],
    metrics: [{ label: 'Claims', value: '238', note: 'Open' }, { label: 'Suspect', value: '32', note: 'Flagged' }, { label: 'Settlement Holds', value: '19', note: 'Need review' }],
  },
  {
    slug: 'evidence',
    title: 'Evidence',
    href: '/evidence',
    category: 'Investigation Operations',
    icon: Files,
    summary: 'Evidence intake, chain of custody, document review, media, notes, and exhibits.',
    bullets: ['Evidence intake', 'Chain of custody', 'Exhibits'],
    metrics: [{ label: 'Evidence Items', value: '7.8K', note: 'Tracked' }, { label: 'Missing Links', value: '48', note: 'Open' }, { label: 'Reviewed', value: '72%', note: 'Current' }],
  },
  {
    slug: 'entity-resolution',
    title: 'Entity Resolution',
    href: '/entity-resolution',
    category: 'Intelligence',
    icon: Users,
    summary: 'Identity matching, relationship graphs, duplicate resolution, and entity risk context.',
    bullets: ['Identity matching', 'Relationship graphs', 'Duplicates'],
    metrics: [{ label: 'Entities', value: '4.6K', note: 'Indexed' }, { label: 'Matches', value: '312', note: 'Review' }, { label: 'Conflicts', value: '39', note: 'Open' }],
  },
  {
    slug: 'vendor-risk',
    title: 'Vendor Risk',
    href: '/vendor-risk',
    category: 'Third Party Risk',
    icon: ClipboardCheck,
    summary: 'Vendor risk scoring, performance, compliance evidence, remediation, and reviews.',
    bullets: ['Risk scoring', 'Performance', 'Remediation'],
    metrics: [{ label: 'Vendors', value: '684', note: 'Tracked' }, { label: 'High Risk', value: '46', note: 'Flagged' }, { label: 'Reviews Due', value: '38', note: 'This month' }],
  },
  {
    slug: 'credit-risk',
    title: 'Credit Risk',
    href: '/credit-risk',
    category: 'Portfolio Risk',
    icon: BarChart3,
    summary: 'Credit risk review, exposure, score movement, exceptions, and approval decisions.',
    bullets: ['Exposure', 'Score movement', 'Exceptions'],
    metrics: [{ label: 'Exposures', value: '$18.4M', note: 'Flagged' }, { label: 'Exceptions', value: '64', note: 'Review' }, { label: 'Approvals', value: '22', note: 'Pending' }],
  },
  {
    slug: 'case-workflows',
    title: 'Case Workflows',
    href: '/case-workflows',
    category: 'Investigation Operations',
    icon: Workflow,
    summary: 'Workflow templates, assignments, approvals, escalations, and operating queues.',
    bullets: ['Assignments', 'Approvals', 'Escalations'],
    metrics: [{ label: 'Workflows', value: '31', note: 'Active' }, { label: 'Approvals', value: '57', note: 'Pending' }, { label: 'Escalations', value: '14', note: 'Open' }],
  },
  {
    slug: 'reports',
    title: 'Reports',
    href: '/reports',
    category: 'Intelligence Layer',
    icon: BarChart3,
    summary: 'Risk, investigation, fraud, AML, claims, vendor, and portfolio reporting.',
    bullets: ['Risk reports', 'Fraud reports', 'AML reports'],
    metrics: [{ label: 'Dashboards', value: '37', note: 'Published' }, { label: 'Reports Due', value: '8', note: 'This week' }, { label: 'Saved Views', value: '23', note: 'Active' }],
  },
  {
    slug: 'compliance',
    title: 'Compliance',
    href: '/compliance',
    category: 'Governance',
    icon: ShieldCheck,
    summary: 'Investigation controls, AML compliance, case audit, evidence retention, and review evidence.',
    bullets: ['Controls', 'Retention', 'Evidence'],
    metrics: [{ label: 'Controls', value: '238', note: 'Mapped' }, { label: 'Passing', value: '89%', note: 'Current' }, { label: 'Findings', value: '21', note: 'Open' }],
  },
  {
    slug: 'audit-readiness',
    title: 'Audit Readiness',
    href: '/audit-readiness',
    category: 'Governance',
    icon: ClipboardList,
    summary: 'Audit trail, case chronology, evidence completeness, findings, and remediation.',
    bullets: ['Audit trail', 'Chronology', 'Remediation'],
    metrics: [{ label: 'Audit Items', value: '514', note: 'Collected' }, { label: 'Gaps', value: '26', note: 'Open' }, { label: 'Ready', value: '82%', note: 'Score' }],
  },
  {
    slug: "bond-risk-assessment",
    title: "Bond Risk Assessment",
    href: "/bond-risk-assessment",
    category: "Bail Bond Risk",
    icon: Workflow,
    summary: "Defendant risk, court history, employment, residence, and appearance likelihood.",
    bullets: ["Bond Risk Assessment queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Bond Risk Assessment", value: "28", note: 'Active' },
      { label: 'Review', value: "5", note: 'Needs attention' },
      { label: 'Due Soon', value: "3", note: 'Next 14 days' },
    ],
  },
  {
    slug: "court-appearance-monitoring",
    title: "Court Appearance Monitoring",
    href: "/court-appearance-monitoring",
    category: "Bail Bond Risk",
    icon: Workflow,
    summary: "Upcoming hearings, reminders, exceptions, and missed appearance risk.",
    bullets: ["Court Appearance Monitoring queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Court Appearance Monitoring", value: "39", note: 'Active' },
      { label: 'Review', value: "6", note: 'Needs attention' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "surety-packet",
    title: "Surety Packet",
    href: "/surety-packet",
    category: "Bail Bond Risk",
    icon: Workflow,
    summary: "Collateral, indemnitor, risk notes, documents, and approval status.",
    bullets: ["Surety Packet queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Surety Packet", value: "50", note: 'Active' },
      { label: 'Review', value: "7", note: 'Needs attention' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: 'documents',
    title: 'Documents',
    href: '/documents',
    category: 'Core Platform',
    icon: Files,
    summary: 'Case files, evidence packets, SAR drafts, claims files, risk reports, and audit artifacts.',
    bullets: ['Case files', 'Evidence packets', 'SAR drafts'],
    metrics: [{ label: 'Documents', value: '3.4K', note: 'Tracked' }, { label: 'In Review', value: '156', note: 'Open' }, { label: 'Uploaded', value: '244', note: 'This month' }],
  },
  {
    slug: 'notifications',
    title: 'Notifications',
    href: '/notifications',
    category: 'Core Platform',
    icon: Bell,
    summary: 'Case, alert, AML, claims, vendor, evidence, compliance, and audit alerts.',
    bullets: ['Alert notices', 'Case alerts', 'Compliance alerts'],
    metrics: [{ label: 'Unread', value: '74', note: 'Needs review' }, { label: 'Critical', value: '18', note: 'Escalated' }, { label: 'Resolved', value: '628', note: 'This week' }],
  },
  {
    slug: 'integrations',
    title: 'Integrations',
    href: '/integrations',
    category: 'Core Platform',
    icon: Plug,
    summary: 'Core banking, claims, SIEM, case management, vendor, records, and watchlist connector health.',
    bullets: ['Transaction sync', 'Claims sync', 'Watchlists'],
    metrics: [{ label: 'Connectors', value: '19', note: 'Configured' }, { label: 'Warnings', value: '7', note: 'Need attention' }, { label: 'Last Sync', value: '2m', note: 'Risk data' }],
  },
  {
    slug: 'profiles',
    title: 'Profiles',
    href: '/profiles',
    category: 'Core Platform',
    icon: UserRound,
    summary: 'Investigator profiles, role permissions, queues, escalation groups, and review coverage.',
    bullets: ['Investigators', 'Role permissions', 'Queues'],
    metrics: [{ label: 'Users', value: '104', note: 'Active' }, { label: 'Queues', value: '16', note: 'Configured' }, { label: 'Access Reviews', value: '8', note: 'Open' }],
  },
] as const;

const aiFeatures = [
  {
    slug: 'ai-assistant',
    title: 'AI Assistant',
    href: '/features/ai-assistant',
    category: 'Intelligence Layer',
    icon: Bot,
    summary: 'Investigation assistant for alert triage, case summaries, evidence review, SAR drafts, and risk rationales.',
    bullets: ['Triage support', 'Drafting', 'Review guidance'],
    metrics: [
      { label: 'Sessions', value: '148', note: 'Last 24 hours' },
      { label: 'Drafts', value: '226', note: 'Generated' },
      { label: 'Escalations', value: '17', note: 'Expert review' },
    ],
  },
  {
    slug: 'ai-tools',
    title: 'AI Tools',
    href: '/features/ai-tools',
    category: 'Intelligence Layer',
    icon: Activity,
    summary: 'Targeted AI tools for fraud scoring, AML monitoring, claims anomaly review, entity resolution, and vendor risk scoring.',
    bullets: ['Scoring', 'Review automation', 'Exception detection'],
    metrics: [
      { label: 'Runs', value: '374', note: 'Last 24 hours' },
      { label: 'Signals', value: '96', note: 'New alerts' },
      { label: 'Accepted', value: '131', note: 'Reviewer accepted' },
    ],
  },
] as const;

const allFeatures = [...features, ...aiFeatures];

export const primaryNav: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'All Features', href: '/features', icon: Blocks },
  { label: 'Documents', href: '/documents', icon: Files },
  { label: 'Source Tables', href: '/source-tables', icon: Database },
  { label: 'Profiles', href: '/profiles', icon: UserRound },
];

export const featureNav: NavItem[] = allFeatures.map((feature) => ({
  label: feature.title,
  href: feature.href,
  icon: feature.icon,
}));

export const featureCatalog: FeatureDefinition[] = allFeatures.map((feature) => ({
  title: feature.title,
  href: feature.href,
  category: feature.category,
  summary: feature.summary,
  bullets: [...feature.bullets],
}));

export const featureFamilies = [
  { name: 'Investigation Operations', features: ['Cases', 'Evidence', 'Case Workflows'] },
  { name: 'Fraud Operations', features: ['Fraud Alerts'] },
  { name: 'Financial Crime', features: ['AML Monitoring'] },
  { name: 'Claims Risk', features: ['Claims Investigation'] },
  { name: 'Third Party Risk', features: ['Vendor Risk'] },
  { name: 'Portfolio Risk', features: ['Credit Risk'] },
  { name: 'Governance', features: ['Compliance', 'Audit Readiness'] },
  { name: 'Core Platform', features: ['Documents', 'Notifications', 'Integrations', 'Profiles'] },
  { name: 'Bail Bond Risk', features: ["Bond Risk Assessment","Court Appearance Monitoring","Surety Packet"] },
  { name: 'Intelligence Layer', features: ['AI Assistant', 'AI Tools'] },
];

function toPage(feature: (typeof allFeatures)[number]): PageDefinition {
  return {
    title: feature.title,
    eyebrow: feature.category,
    subtitle: feature.summary,
    category: feature.category,
    summary: `${feature.title} is normalized from source applications into one merged suite workflow.`,
    bullets: [...feature.bullets],
    metrics: [...feature.metrics],
  };
}

export const pageRegistry: Record<string, PageDefinition> = Object.fromEntries(
  features.map((feature) => [feature.slug, toPage(feature)]),
);

export const aiFeatureRegistry: Record<string, PageDefinition> = Object.fromEntries(
  aiFeatures.map((feature) => [feature.slug, toPage(feature)]),
);

export const featureContexts: Record<string, FeatureContext> = Object.fromEntries(
  allFeatures.map((feature) => [
    feature.title,
    {
      sourceOwners: ['AIAntiFraud', 'AIAMLTransactionMonitoring where applicable'],
      operatingQueues: [`${feature.title} records`, `${feature.title} approvals`, `${feature.title} exceptions`],
      outputs: [`${feature.title} dashboard`, `${feature.title} export`, `${feature.title} audit trail`],
      relatedRoutes: [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'All Features', href: '/features' },
        { label: 'Reports', href: '/reports' },
      ],
    },
  ]),
);
