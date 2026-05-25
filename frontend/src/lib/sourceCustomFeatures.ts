import type { FeatureContext, FeatureDefinition, PageDefinition } from '@/lib/unifiedApp';
import type { FeatureEntitySet } from '@/lib/featureEntities';
import type { FeatureSurface } from '@/lib/featureSurfaces';

export const sourceCustomFeatureCatalog: FeatureDefinition[] = [
  {
    "title": "AIAML Transaction Monitoring Source Feature",
    "href": "/features/source-aiaml-transaction-monitoring",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIAMLTransactionMonitoring: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "22 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Anti Fraud Source Feature",
    "href": "/features/source-ai-anti-fraud",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIAntiFraud: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "14 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Customs Source Feature",
    "href": "/features/source-ai-customs",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AICustoms: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "15 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Vendor Risk Performance Scorer Source Feature",
    "href": "/features/source-ai-vendor-risk-performance-scorer",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIVendorRiskPerformanceScorer: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "22 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Visual QA Inspector Source Feature",
    "href": "/features/source-ai-visual-qa-inspector",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIVisualQAInspector: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "20 AI, prompt, tool, or workflow files captured"
    ]
  }
];

export const sourceCustomFeatureFamilies: Array<{ name: string; features: string[] }> = [
  {
    "name": "Source Project Features",
    "features": [
      "AIAML Transaction Monitoring Source Feature",
      "AI Anti Fraud Source Feature",
      "AI Customs Source Feature",
      "AI Vendor Risk Performance Scorer Source Feature",
      "AI Visual QA Inspector Source Feature"
    ]
  }
];

export const sourceCustomPageRegistry: Record<string, PageDefinition> = {
  "source-aiaml-transaction-monitoring": {
    "title": "AIAML Transaction Monitoring Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIAMLTransactionMonitoring, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIAMLTransactionMonitoring: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "22 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "22",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-anti-fraud": {
    "title": "AI Anti Fraud Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIAntiFraud, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIAntiFraud: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "14 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "14",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-customs": {
    "title": "AI Customs Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AICustoms, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AICustoms: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "15 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "15",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-vendor-risk-performance-scorer": {
    "title": "AI Vendor Risk Performance Scorer Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIVendorRiskPerformanceScorer, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIVendorRiskPerformanceScorer: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "22 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "22",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-visual-qa-inspector": {
    "title": "AI Visual QA Inspector Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIVisualQAInspector, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIVisualQAInspector: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "20 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "20",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  }
};

export const sourceCustomFeatureContexts: Record<string, FeatureContext> = {
  "AIAML Transaction Monitoring Source Feature": {
    "sourceOwners": [
      "AIAMLTransactionMonitoring"
    ],
    "operatingQueues": [
      "AI Adverse Media Screen Page",
      "AI Beneficial Owner Trace Page",
      "AI Customer Risk Score Page",
      "AI Edd Questionnaire Page"
    ],
    "outputs": [
      "AIAML Transaction Monitoring merged workflow register",
      "AIAML Transaction Monitoring API and route coverage map",
      "AIAML Transaction Monitoring AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Anti Fraud Source Feature": {
    "sourceOwners": [
      "AIAntiFraud"
    ],
    "operatingQueues": [
      "AI Helper",
      "AI",
      "Gap AI Explainability Risk Score Outputs",
      "Gap AI Money Mule Cash Out"
    ],
    "outputs": [
      "AI Anti Fraud merged workflow register",
      "AI Anti Fraud API and route coverage map",
      "AI Anti Fraud AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Customs Source Feature": {
    "sourceOwners": [
      "AICustoms"
    ],
    "operatingQueues": [
      "AI",
      "AI New",
      "Gap Documents Lacks AI Declaration Auto Generation",
      "Gap Duties Lacks AI Tariff Optimization Endpoint"
    ],
    "outputs": [
      "AI Customs merged workflow register",
      "AI Customs API and route coverage map",
      "AI Customs AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Vendor Risk Performance Scorer Source Feature": {
    "sourceOwners": [
      "AIVendorRiskPerformanceScorer"
    ],
    "operatingQueues": [
      "AI Analysis",
      "Alert Detail",
      "Audit Detail",
      "Audit Trail"
    ],
    "outputs": [
      "AI Vendor Risk Performance Scorer merged workflow register",
      "AI Vendor Risk Performance Scorer API and route coverage map",
      "AI Vendor Risk Performance Scorer AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Visual QA Inspector Source Feature": {
    "sourceOwners": [
      "AIVisualQAInspector"
    ],
    "operatingQueues": [
      "Openrouter",
      "Main",
      "AI Result Display",
      "Trend Tracker Detail"
    ],
    "outputs": [
      "AI Visual QA Inspector merged workflow register",
      "AI Visual QA Inspector API and route coverage map",
      "AI Visual QA Inspector AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  }
};

export const sourceCustomFeatureSurfaceBySlug: Record<string, FeatureSurface> = {
  "source-aiaml-transaction-monitoring": {
    "workItems": [
      {
        "id": "source-aiaml-transaction-monitoring-work-1",
        "item": "AI Adverse Media Screen Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIAdverseMediaScreenPage.js"
      },
      {
        "id": "source-aiaml-transaction-monitoring-work-2",
        "item": "AI Beneficial Owner Trace Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIBeneficialOwnerTracePage.js"
      },
      {
        "id": "source-aiaml-transaction-monitoring-work-3",
        "item": "AI Customer Risk Score Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AICustomerRiskScorePage.js"
      },
      {
        "id": "source-aiaml-transaction-monitoring-work-4",
        "item": "AI Edd Questionnaire Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIEddQuestionnairePage.js"
      },
      {
        "id": "source-aiaml-transaction-monitoring-work-5",
        "item": "AI Executive Brief Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIExecutiveBriefPage.js"
      },
      {
        "id": "source-aiaml-transaction-monitoring-work-6",
        "item": "AI False Positive Classifier Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIFalsePositiveClassifierPage.js"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-aiaml-transaction-monitoring-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-aiaml-transaction-monitoring-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-aiaml-transaction-monitoring-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-aiaml-transaction-monitoring-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-aiaml-transaction-monitoring-log-1",
        "message": "Deep-merge feature generated from AIAMLTransactionMonitoring",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-aiaml-transaction-monitoring-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-anti-fraud": {
    "workItems": [
      {
        "id": "source-ai-anti-fraud-work-1",
        "item": "AI Helper",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/aiHelper.js"
      },
      {
        "id": "source-ai-anti-fraud-work-2",
        "item": "AI",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/ai.js"
      },
      {
        "id": "source-ai-anti-fraud-work-3",
        "item": "Gap AI Explainability Risk Score Outputs",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/gap_ai_explainability_risk_score_outputs.js"
      },
      {
        "id": "source-ai-anti-fraud-work-4",
        "item": "Gap AI Money Mule Cash Out",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/gap_ai_money_mule_cash_out.js"
      },
      {
        "id": "source-ai-anti-fraud-work-5",
        "item": "Gap AI Synthetic Identity Detection",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/gap_ai_synthetic_identity_detection.js"
      },
      {
        "id": "source-ai-anti-fraud-work-6",
        "item": "Gap AI Velocity Rule Learning Rapid",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/gap_ai_velocity_rule_learning_rapid.js"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-anti-fraud-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-anti-fraud-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-anti-fraud-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-anti-fraud-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-anti-fraud-log-1",
        "message": "Deep-merge feature generated from AIAntiFraud",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-anti-fraud-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-customs": {
    "workItems": [
      {
        "id": "source-ai-customs-work-1",
        "item": "AI",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for src/routes/ai.js"
      },
      {
        "id": "source-ai-customs-work-2",
        "item": "AI New",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for src/routes/aiNew.js"
      },
      {
        "id": "source-ai-customs-work-3",
        "item": "Gap Documents Lacks AI Declaration Auto Generation",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for src/routes/gap_documents_lacks_ai_declaration_auto_generation.js"
      },
      {
        "id": "source-ai-customs-work-4",
        "item": "Gap Duties Lacks AI Tariff Optimization Endpoint",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for src/routes/gap_duties_lacks_ai_tariff_optimization_endpoint.js"
      },
      {
        "id": "source-ai-customs-work-5",
        "item": "Gap Sanctions Lacks AI Risk Screening Agent",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for src/routes/gap_sanctions_lacks_ai_risk_screening_agent.js"
      },
      {
        "id": "source-ai-customs-work-6",
        "item": "Gap Shipments Lacks AI Delay Prediction",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for src/routes/gap_shipments_lacks_ai_delay_prediction.js"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-customs-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-customs-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-customs-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-customs-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-customs-log-1",
        "message": "Deep-merge feature generated from AICustoms",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-customs-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-vendor-risk-performance-scorer": {
    "workItems": [
      {
        "id": "source-ai-vendor-risk-performance-scorer-work-1",
        "item": "AI Analysis",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIAnalysis.js"
      },
      {
        "id": "source-ai-vendor-risk-performance-scorer-work-2",
        "item": "Alert Detail",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AlertDetail.js"
      },
      {
        "id": "source-ai-vendor-risk-performance-scorer-work-3",
        "item": "Audit Detail",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AuditDetail.js"
      },
      {
        "id": "source-ai-vendor-risk-performance-scorer-work-4",
        "item": "Audit Trail",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AuditTrail.js"
      },
      {
        "id": "source-ai-vendor-risk-performance-scorer-work-5",
        "item": "Cf Supply Chain Network Risk Identifying Single Points",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/CfSupplyChainNetworkRiskIdentifyingSinglePoints.jsx"
      },
      {
        "id": "source-ai-vendor-risk-performance-scorer-work-6",
        "item": "Contact Detail",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/ContactDetail.js"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-vendor-risk-performance-scorer-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-vendor-risk-performance-scorer-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-vendor-risk-performance-scorer-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-vendor-risk-performance-scorer-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-vendor-risk-performance-scorer-log-1",
        "message": "Deep-merge feature generated from AIVendorRiskPerformanceScorer",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-vendor-risk-performance-scorer-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-visual-qa-inspector": {
    "workItems": [
      {
        "id": "source-ai-visual-qa-inspector-work-1",
        "item": "Openrouter",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for backend/services/openrouter.js"
      },
      {
        "id": "source-ai-visual-qa-inspector-work-2",
        "item": "Main",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/main.jsx"
      },
      {
        "id": "source-ai-visual-qa-inspector-work-3",
        "item": "AI Result Display",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/components/common/AIResultDisplay.jsx"
      },
      {
        "id": "source-ai-visual-qa-inspector-work-4",
        "item": "Trend Tracker Detail",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/components/TrendTracker/TrendTrackerDetail.jsx"
      },
      {
        "id": "source-ai-visual-qa-inspector-work-5",
        "item": "Severity Scorer Detail",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/components/SeverityScorer/SeverityScorerDetail.jsx"
      },
      {
        "id": "source-ai-visual-qa-inspector-work-6",
        "item": "Root Cause Detail",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/components/RootCause/RootCauseDetail.jsx"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-visual-qa-inspector-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-visual-qa-inspector-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-visual-qa-inspector-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-visual-qa-inspector-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-visual-qa-inspector-log-1",
        "message": "Deep-merge feature generated from AIVisualQAInspector",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-visual-qa-inspector-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  }
};

export const sourceCustomFeatureEntitiesBySlug: Record<string, FeatureEntitySet> = {
  "source-aiaml-transaction-monitoring": {
    "title": "AIAML Transaction Monitoring Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-aiaml-transaction-monitoring-entity-1",
        "name": "AI Adverse Media Screen Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-aiaml-transaction-monitoring-entity-2",
        "name": "AI Beneficial Owner Trace Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-aiaml-transaction-monitoring-entity-3",
        "name": "AI Customer Risk Score Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-aiaml-transaction-monitoring-entity-4",
        "name": "AI Edd Questionnaire Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-aiaml-transaction-monitoring-entity-5",
        "name": "AI Executive Brief Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-anti-fraud": {
    "title": "AI Anti Fraud Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-anti-fraud-entity-1",
        "name": "AI Helper",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-anti-fraud-entity-2",
        "name": "AI",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-anti-fraud-entity-3",
        "name": "Gap AI Explainability Risk Score Outputs",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-anti-fraud-entity-4",
        "name": "Gap AI Money Mule Cash Out",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-anti-fraud-entity-5",
        "name": "Gap AI Synthetic Identity Detection",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-customs": {
    "title": "AI Customs Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-customs-entity-1",
        "name": "AI",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-customs-entity-2",
        "name": "AI New",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-customs-entity-3",
        "name": "Gap Documents Lacks AI Declaration Auto Generation",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-customs-entity-4",
        "name": "Gap Duties Lacks AI Tariff Optimization Endpoint",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-customs-entity-5",
        "name": "Gap Sanctions Lacks AI Risk Screening Agent",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-vendor-risk-performance-scorer": {
    "title": "AI Vendor Risk Performance Scorer Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-vendor-risk-performance-scorer-entity-1",
        "name": "AI Analysis",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-vendor-risk-performance-scorer-entity-2",
        "name": "Alert Detail",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-vendor-risk-performance-scorer-entity-3",
        "name": "Audit Detail",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-vendor-risk-performance-scorer-entity-4",
        "name": "Audit Trail",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-vendor-risk-performance-scorer-entity-5",
        "name": "Cf Supply Chain Network Risk Identifying Single Points",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-visual-qa-inspector": {
    "title": "AI Visual QA Inspector Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-visual-qa-inspector-entity-1",
        "name": "Openrouter",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-visual-qa-inspector-entity-2",
        "name": "Main",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-visual-qa-inspector-entity-3",
        "name": "AI Result Display",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-visual-qa-inspector-entity-4",
        "name": "Trend Tracker Detail",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-visual-qa-inspector-entity-5",
        "name": "Severity Scorer Detail",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  }
};

export const sourceCustomFeatureLinksByProject: Record<string, string> = {
  "AIAMLTransactionMonitoring": "/features/source-aiaml-transaction-monitoring",
  "AIAntiFraud": "/features/source-ai-anti-fraud",
  "AICustoms": "/features/source-ai-customs",
  "AIVendorRiskPerformanceScorer": "/features/source-ai-vendor-risk-performance-scorer",
  "AIVisualQAInspector": "/features/source-ai-visual-qa-inspector"
};
