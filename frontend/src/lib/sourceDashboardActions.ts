export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "ai-assistant",
    "label": "AI Assistant",
    "description": "Run source-derived AI assistant workflows and prompts.",
    "href": "/features/ai-tools",
    "sourceProjects": [
      "AIAMLTransactionMonitoring",
      "AIAntiFraud",
      "AICustoms",
      "AIVendorRiskPerformanceScorer",
      "AIVisualQAInspector"
    ],
    "examples": [
      "backend/routes/ai",
      "backend/services/ai",
      "backend/services/openrouter",
      "backend/src/routes/ai",
      "backend/src/routes/gapNoEsgControversyNewsScannerAi",
      "backend/src/routes/gapNoSupplyChainNetworkNTierRiskAnalysisAi"
    ],
    "count": 5
  },
  {
    "id": "customers",
    "label": "Customers",
    "description": "Open customer, client, patient, member, or lead workflows.",
    "href": "/features",
    "sourceProjects": [
      "AICustoms"
    ],
    "examples": [
      "client/src/pages/TradeTools"
    ],
    "count": 1
  }
];
