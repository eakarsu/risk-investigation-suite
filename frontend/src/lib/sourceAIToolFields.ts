export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "bail-bond-risk-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve the Bail Bond Risk workflow and produce audit-ready next actions.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AIBailBondRiskAssessor"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste Bail Bond Risk source details, notes, records, or documents.",
      "placeholder": "Paste source context",
      "options": [],
      "required": true,
      "source": "AIBailBondRiskAssessor"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output format",
      "options": [
        "Action plan",
        "Executive summary",
        "Evidence table",
        "Checklist"
      ],
      "required": true,
      "source": "AIBailBondRiskAssessor"
    }
  ],
  "aiaml-transaction-monitoring-ai-adverse-media-screen-page-jhn0j4-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Adverse Media Screen Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdverseMediaScreenPage.js"
    }
  ],
  "aiaml-transaction-monitoring-ai-beneficial-owner-trace-page-170sjz-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Beneficial Owner Trace Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIBeneficialOwnerTracePage.js"
    }
  ],
  "aiaml-transaction-monitoring-ai-customer-risk-score-page-t83vr9-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Customer Risk Score Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AICustomerRiskScorePage.js"
    }
  ],
  "aiaml-transaction-monitoring-ai-edd-questionnaire-page-wwpfao-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Edd Questionnaire Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIEddQuestionnairePage.js"
    }
  ],
  "aiaml-transaction-monitoring-ai-executive-brief-page-7pgscw-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Executive Brief Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIExecutiveBriefPage.js"
    }
  ],
  "aiaml-transaction-monitoring-ai-false-positive-classifier-page-kg4ozn-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI False Positive Classifier Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFalsePositiveClassifierPage.js"
    }
  ],
  "aiaml-transaction-monitoring-ai-investigation-summary-page-p9sk4m-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Investigation Summary Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIInvestigationSummaryPage.js"
    }
  ],
  "aiaml-transaction-monitoring-ai-jurisdictional-risk-page-aoda0x-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Jurisdictional Risk Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIJurisdictionalRiskPage.js"
    }
  ],
  "aiaml-transaction-monitoring-ai-kyc-onboarding-prescreen-page-laasbv-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Kyc Onboarding Prescreen Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIKycOnboardingPrescreenPage.js"
    }
  ],
  "aiaml-transaction-monitoring-ai-kyc-refresh-summary-page-i0ck22-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Kyc Refresh Summary Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIKycRefreshSummaryPage.js"
    }
  ],
  "aiaml-transaction-monitoring-ai-network-analysis-page-1tonvc-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Network Analysis Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AINetworkAnalysisPage.js"
    }
  ],
  "aiaml-transaction-monitoring-ai-peer-group-compare-page-106uqu-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Peer Group Compare Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIPeerGroupComparePage.js"
    }
  ],
  "aiaml-transaction-monitoring-ai-regulatory-filing-draft-page-1rm2fo-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Regulatory Filing Draft Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIRegulatoryFilingDraftPage.js"
    }
  ],
  "aiaml-transaction-monitoring-ai-sanction-name-match-page-a9kgt9-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Sanction Name Match Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISanctionNameMatchPage.js"
    }
  ],
  "aiaml-transaction-monitoring-ai-sar-narrative-draft-page-k315wv-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Sar Narrative Draft Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISarNarrativeDraftPage.js"
    }
  ],
  "aiaml-transaction-monitoring-ai-source-of-funds-explain-page-fviwj-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Source Of Funds Explain Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AISourceOfFundsExplainPage.js"
    }
  ],
  "aiaml-transaction-monitoring-ai-transaction-anomaly-page-1gzr5e-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Transaction Anomaly Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AITransactionAnomalyPage.js"
    }
  ],
  "aiaml-transaction-monitoring-ai-typology-detect-page-pxam2q-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Typology Detect Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AITypologyDetectPage.js"
    }
  ],
  "aiaml-transaction-monitoring-ai-5cuwes-exact-ai": [
    {
      "name": "applicant_name",
      "label": "Applicant Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "claimed_amount_usd",
      "label": "Claimed Amount Usd",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "claimed_source",
      "label": "Claimed Source",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "customer_id",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_notes",
      "label": "Data Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "depth",
      "label": "Depth",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dob",
      "label": "Dob",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "entity_id",
      "label": "Entity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "evidence_notes",
      "label": "Evidence Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "filing_type",
      "label": "Filing Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "focus",
      "label": "Focus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "hints",
      "label": "Hints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "inv_id",
      "label": "Inv Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "peer_group",
      "label": "Peer Group",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "seed_id",
      "label": "Seed Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "signals_notes",
      "label": "Signals Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "suspicion",
      "label": "Suspicion",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "trigger",
      "label": "Trigger",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "aiaml-transaction-monitoring-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Adverse Media Screen Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdverseMediaScreenPage.js"
    },
    {
      "name": "applicant_name",
      "label": "Applicant Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "claimed_amount_usd",
      "label": "Claimed Amount Usd",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "claimed_source",
      "label": "Claimed Source",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "customer_id",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_notes",
      "label": "Data Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "depth",
      "label": "Depth",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dob",
      "label": "Dob",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "entity_id",
      "label": "Entity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "evidence_notes",
      "label": "Evidence Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "filing_type",
      "label": "Filing Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "focus",
      "label": "Focus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "hints",
      "label": "Hints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "inv_id",
      "label": "Inv Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "peer_group",
      "label": "Peer Group",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "seed_id",
      "label": "Seed Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "signals_notes",
      "label": "Signals Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "suspicion",
      "label": "Suspicion",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "trigger",
      "label": "Trigger",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "aiaml-transaction-monitoring-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Adverse Media Screen Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAdverseMediaScreenPage.js"
    },
    {
      "name": "applicant_name",
      "label": "Applicant Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "claimed_amount_usd",
      "label": "Claimed Amount Usd",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "claimed_source",
      "label": "Claimed Source",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "customer_id",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "data_notes",
      "label": "Data Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "depth",
      "label": "Depth",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "dob",
      "label": "Dob",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "entity_id",
      "label": "Entity Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "evidence_notes",
      "label": "Evidence Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "filing_type",
      "label": "Filing Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "focus",
      "label": "Focus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "hints",
      "label": "Hints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "inv_id",
      "label": "Inv Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "notes",
      "label": "Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "peer_group",
      "label": "Peer Group",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "period",
      "label": "Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "seed_id",
      "label": "Seed Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "signals_notes",
      "label": "Signals Notes",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "suspicion",
      "label": "Suspicion",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "trigger",
      "label": "Trigger",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-anti-fraud-ai-j615h1-exact-ai": [
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "credit_data",
      "label": "Credit Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "credit_score_id",
      "label": "Credit Score Id",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "customer_id",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "days_back = 14",
      "label": "Days Back = 14",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "days_back = 30",
      "label": "Days Back = 30",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "days_back = 7",
      "label": "Days Back = 7",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "hours_window = 1",
      "label": "Hours Window = 1",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "max_nodes = 50",
      "label": "Max Nodes = 50",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "merchant_category",
      "label": "Merchant Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "merchant_data",
      "label": "Merchant Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "merchant_id",
      "label": "Merchant Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "min_hits = 1",
      "label": "Min Hits = 1",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "min_merchants = 3",
      "label": "Min Merchants = 3",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "min_shared_attrs = 2",
      "label": "Min Shared Attrs = 2",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "min_total_amount = 1000",
      "label": "Min Total Amount = 1000",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "min_tx_count = 3",
      "label": "Min Tx Count = 3",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "pattern_data",
      "label": "Pattern Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "pattern_id",
      "label": "Pattern Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "transaction_data",
      "label": "Transaction Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "transaction_id",
      "label": "Transaction Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "user_id",
      "label": "User Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    }
  ],
  "ai-anti-fraud-gap-ai-explainability-risk-score-outputs-y38v9a-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Explainability Risk Score Outputs source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap_ai_explainability_risk_score_outputs.js"
    }
  ],
  "ai-anti-fraud-gap-ai-money-mule-cash-out-15pjoy-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Money Mule Cash Out source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap_ai_money_mule_cash_out.js"
    }
  ],
  "ai-anti-fraud-gap-ai-synthetic-identity-detection-dfhgbd-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Synthetic Identity Detection source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap_ai_synthetic_identity_detection.js"
    }
  ],
  "ai-anti-fraud-gap-ai-velocity-rule-learning-rapid-ft5gzj-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Velocity Rule Learning Rapid source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap_ai_velocity_rule_learning_rapid.js"
    }
  ],
  "ai-anti-fraud-ai-tools-1977ko-exact-ai": [
    {
      "name": "credit_score_id",
      "label": "Credit Score Id",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "customer_id",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "days_back",
      "label": "Days Back",
      "type": "text",
      "defaultValue": "30",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "graph_days_back",
      "label": "Graph Days Back",
      "type": "text",
      "defaultValue": "14",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "graph_max_nodes",
      "label": "Graph Max Nodes",
      "type": "number",
      "defaultValue": "50",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "merchant_id",
      "label": "Merchant Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "min_shared_attrs",
      "label": "Min Shared Attrs",
      "type": "number",
      "defaultValue": "2",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "mule_days_back",
      "label": "Mule Days Back",
      "type": "text",
      "defaultValue": "30",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "mule_min_total",
      "label": "Mule Min Total",
      "type": "number",
      "defaultValue": "1000",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "pattern_id",
      "label": "Pattern Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "ring_days_back",
      "label": "Ring Days Back",
      "type": "text",
      "defaultValue": "30",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "ring_min_merchants",
      "label": "Ring Min Merchants",
      "type": "number",
      "defaultValue": "3",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "rule_days_back",
      "label": "Rule Days Back",
      "type": "text",
      "defaultValue": "30",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "rule_min_hits",
      "label": "Rule Min Hits",
      "type": "number",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "transaction_id",
      "label": "Transaction Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "user_id",
      "label": "User Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "velocity_days_back",
      "label": "Velocity Days Back",
      "type": "text",
      "defaultValue": "7",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "velocity_hours",
      "label": "Velocity Hours",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "velocity_min_count",
      "label": "Velocity Min Count",
      "type": "number",
      "defaultValue": "3",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "velocity_user_id",
      "label": "Velocity User Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    }
  ],
  "ai-anti-fraud-alert-detail-1uo89q-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Alert Detail source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AlertDetail.js"
    }
  ],
  "ai-anti-fraud-gap-ai-explainability-risk-score-outputs-1jfd5w-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Explainability Risk Score Outputs source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapAiExplainabilityRiskScoreOutputs.js"
    }
  ],
  "ai-anti-fraud-gap-ai-money-mule-cash-out-1skwu9-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Money Mule Cash Out source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapAiMoneyMuleCashOut.js"
    }
  ],
  "ai-anti-fraud-gap-ai-synthetic-identity-detection-ayz882-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Synthetic Identity Detection source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapAiSyntheticIdentityDetection.js"
    }
  ],
  "ai-anti-fraud-gap-ai-velocity-rule-learning-rapid-3ldaij-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Velocity Rule Learning Rapid source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapAiVelocityRuleLearningRapid.js"
    }
  ],
  "ai-anti-fraud-source-workflow": [
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "credit_data",
      "label": "Credit Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "credit_score_id",
      "label": "Credit Score Id",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "customer_id",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "days_back = 14",
      "label": "Days Back = 14",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "days_back = 30",
      "label": "Days Back = 30",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "days_back = 7",
      "label": "Days Back = 7",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "hours_window = 1",
      "label": "Hours Window = 1",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "max_nodes = 50",
      "label": "Max Nodes = 50",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "merchant_category",
      "label": "Merchant Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "merchant_data",
      "label": "Merchant Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "merchant_id",
      "label": "Merchant Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "min_hits = 1",
      "label": "Min Hits = 1",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "min_merchants = 3",
      "label": "Min Merchants = 3",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "min_shared_attrs = 2",
      "label": "Min Shared Attrs = 2",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "min_total_amount = 1000",
      "label": "Min Total Amount = 1000",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "min_tx_count = 3",
      "label": "Min Tx Count = 3",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "pattern_data",
      "label": "Pattern Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "pattern_id",
      "label": "Pattern Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "transaction_data",
      "label": "Transaction Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "transaction_id",
      "label": "Transaction Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "user_id",
      "label": "User Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Explainability Risk Score Outputs source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap_ai_explainability_risk_score_outputs.js"
    },
    {
      "name": "days_back",
      "label": "Days Back",
      "type": "text",
      "defaultValue": "30",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "graph_days_back",
      "label": "Graph Days Back",
      "type": "text",
      "defaultValue": "14",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "graph_max_nodes",
      "label": "Graph Max Nodes",
      "type": "number",
      "defaultValue": "50",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "min_shared_attrs",
      "label": "Min Shared Attrs",
      "type": "number",
      "defaultValue": "2",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "mule_days_back",
      "label": "Mule Days Back",
      "type": "text",
      "defaultValue": "30",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "mule_min_total",
      "label": "Mule Min Total",
      "type": "number",
      "defaultValue": "1000",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "ring_days_back",
      "label": "Ring Days Back",
      "type": "text",
      "defaultValue": "30",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "ring_min_merchants",
      "label": "Ring Min Merchants",
      "type": "number",
      "defaultValue": "3",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "rule_days_back",
      "label": "Rule Days Back",
      "type": "text",
      "defaultValue": "30",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "rule_min_hits",
      "label": "Rule Min Hits",
      "type": "number",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "velocity_days_back",
      "label": "Velocity Days Back",
      "type": "text",
      "defaultValue": "7",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "velocity_hours",
      "label": "Velocity Hours",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "velocity_min_count",
      "label": "Velocity Min Count",
      "type": "number",
      "defaultValue": "3",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "velocity_user_id",
      "label": "Velocity User Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    }
  ],
  "ai-anti-fraud-ai-tools": [
    {
      "name": "amount",
      "label": "Amount",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "credit_data",
      "label": "Credit Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "credit_score_id",
      "label": "Credit Score Id",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "customer_id",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "days_back = 14",
      "label": "Days Back = 14",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "days_back = 30",
      "label": "Days Back = 30",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "days_back = 7",
      "label": "Days Back = 7",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "hours_window = 1",
      "label": "Hours Window = 1",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "max_nodes = 50",
      "label": "Max Nodes = 50",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "merchant_category",
      "label": "Merchant Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "merchant_data",
      "label": "Merchant Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "merchant_id",
      "label": "Merchant Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "min_hits = 1",
      "label": "Min Hits = 1",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "min_merchants = 3",
      "label": "Min Merchants = 3",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "min_shared_attrs = 2",
      "label": "Min Shared Attrs = 2",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "min_total_amount = 1000",
      "label": "Min Total Amount = 1000",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "min_tx_count = 3",
      "label": "Min Tx Count = 3",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "pattern_data",
      "label": "Pattern Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "pattern_id",
      "label": "Pattern Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "transaction_data",
      "label": "Transaction Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "transaction_id",
      "label": "Transaction Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "user_id",
      "label": "User Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/ai.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Explainability Risk Score Outputs source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap_ai_explainability_risk_score_outputs.js"
    },
    {
      "name": "days_back",
      "label": "Days Back",
      "type": "text",
      "defaultValue": "30",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "graph_days_back",
      "label": "Graph Days Back",
      "type": "text",
      "defaultValue": "14",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "graph_max_nodes",
      "label": "Graph Max Nodes",
      "type": "number",
      "defaultValue": "50",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "min_shared_attrs",
      "label": "Min Shared Attrs",
      "type": "number",
      "defaultValue": "2",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "mule_days_back",
      "label": "Mule Days Back",
      "type": "text",
      "defaultValue": "30",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "mule_min_total",
      "label": "Mule Min Total",
      "type": "number",
      "defaultValue": "1000",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "ring_days_back",
      "label": "Ring Days Back",
      "type": "text",
      "defaultValue": "30",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "ring_min_merchants",
      "label": "Ring Min Merchants",
      "type": "number",
      "defaultValue": "3",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "rule_days_back",
      "label": "Rule Days Back",
      "type": "text",
      "defaultValue": "30",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "rule_min_hits",
      "label": "Rule Min Hits",
      "type": "number",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "velocity_days_back",
      "label": "Velocity Days Back",
      "type": "text",
      "defaultValue": "7",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "velocity_hours",
      "label": "Velocity Hours",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "velocity_min_count",
      "label": "Velocity Min Count",
      "type": "number",
      "defaultValue": "3",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    },
    {
      "name": "velocity_user_id",
      "label": "Velocity User Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "client/src/pages/AITools.js"
    }
  ],
  "ai-customs-ai-1t15g4-exact-ai": [
    {
      "name": "consignee",
      "label": "Consignee",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "currency",
      "label": "Currency",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "declared_value",
      "label": "Declared Value",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "destination_country",
      "label": "Destination Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "document_type",
      "label": "Document Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "entity_name",
      "label": "Entity Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "entity_type",
      "label": "Entity Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "goods_description",
      "label": "Goods Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "hs_code",
      "label": "Hs Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "intended_use",
      "label": "Intended Use",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "material",
      "label": "Material",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "origin_country",
      "label": "Origin Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "product_name",
      "label": "Product Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "shipper",
      "label": "Shipper",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    }
  ],
  "ai-customs-ai-new-1mzes3-exact-ai": [
    {
      "name": "country_code",
      "label": "Country Code",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/aiNew.js"
    },
    {
      "name": "destination_country",
      "label": "Destination Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/aiNew.js"
    },
    {
      "name": "destinations",
      "label": "Destinations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/aiNew.js"
    },
    {
      "name": "eccn_number",
      "label": "Eccn Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/aiNew.js"
    },
    {
      "name": "origin",
      "label": "Origin",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/aiNew.js"
    },
    {
      "name": "product",
      "label": "Product",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/aiNew.js"
    },
    {
      "name": "product_description",
      "label": "Product Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/aiNew.js"
    },
    {
      "name": "shipment_id",
      "label": "Shipment Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/aiNew.js"
    },
    {
      "name": "trade_purpose",
      "label": "Trade Purpose",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/aiNew.js"
    }
  ],
  "ai-customs-gap-documents-lacks-ai-declaration-auto-generation-sxbwrr-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Documents Lacks AI Declaration Auto Generation source input context",
      "options": [],
      "required": false,
      "source": "src/routes/gap_documents_lacks_ai_declaration_auto_generation.js"
    }
  ],
  "ai-customs-gap-duties-lacks-ai-tariff-optimization-endpoint-1g0fr3-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Duties Lacks AI Tariff Optimization Endpoint source input context",
      "options": [],
      "required": false,
      "source": "src/routes/gap_duties_lacks_ai_tariff_optimization_endpoint.js"
    }
  ],
  "ai-customs-gap-sanctions-lacks-ai-risk-screening-agent-27niwk-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Sanctions Lacks AI Risk Screening Agent source input context",
      "options": [],
      "required": false,
      "source": "src/routes/gap_sanctions_lacks_ai_risk_screening_agent.js"
    }
  ],
  "ai-customs-gap-shipments-lacks-ai-delay-prediction-bpjjwu-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Shipments Lacks AI Delay Prediction source input context",
      "options": [],
      "required": false,
      "source": "src/routes/gap_shipments_lacks_ai_delay_prediction.js"
    }
  ],
  "ai-customs-sanctions-agent-k4rwfn-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Sanctions Agent source input context",
      "options": [],
      "required": false,
      "source": "src/routes/sanctionsAgent.js"
    }
  ],
  "ai-customs-cf-sanctions-screening-agent-981au6-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Sanctions Screening Agent source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/CfSanctionsScreeningAgent.jsx"
    }
  ],
  "ai-customs-cf-supply-chain-visibility-h3nu9v-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Supply Chain Visibility source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/CfSupplyChainVisibility.jsx"
    }
  ],
  "ai-customs-gap-documents-lacks-ai-declaration-auto-generation-8eqahv-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Documents Lacks AI Declaration Auto Generation source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapDocumentsLacksAiDeclarationAutoGeneration.jsx"
    }
  ],
  "ai-customs-gap-duties-lacks-ai-tariff-optimization-endpoint-4b1na8-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Duties Lacks AI Tariff Optimization Endpoint source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapDutiesLacksAiTariffOptimizationEndpoint.jsx"
    }
  ],
  "ai-customs-gap-sanctions-lacks-ai-risk-screening-agent-1ebsrw-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Sanctions Lacks AI Risk Screening Agent source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapSanctionsLacksAiRiskScreeningAgent.jsx"
    }
  ],
  "ai-customs-gap-shipments-lacks-ai-delay-prediction-17s4c0-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Shipments Lacks AI Delay Prediction source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapShipmentsLacksAiDelayPrediction.jsx"
    }
  ],
  "ai-customs-source-workflow": [
    {
      "name": "consignee",
      "label": "Consignee",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "currency",
      "label": "Currency",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "declared_value",
      "label": "Declared Value",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "destination_country",
      "label": "Destination Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "document_type",
      "label": "Document Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "entity_name",
      "label": "Entity Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "entity_type",
      "label": "Entity Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "goods_description",
      "label": "Goods Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "hs_code",
      "label": "Hs Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "intended_use",
      "label": "Intended Use",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "material",
      "label": "Material",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "origin_country",
      "label": "Origin Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "product_name",
      "label": "Product Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "shipper",
      "label": "Shipper",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "country_code",
      "label": "Country Code",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/aiNew.js"
    },
    {
      "name": "destinations",
      "label": "Destinations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/aiNew.js"
    },
    {
      "name": "eccn_number",
      "label": "Eccn Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/aiNew.js"
    },
    {
      "name": "origin",
      "label": "Origin",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/aiNew.js"
    },
    {
      "name": "product",
      "label": "Product",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/aiNew.js"
    },
    {
      "name": "product_description",
      "label": "Product Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/aiNew.js"
    },
    {
      "name": "shipment_id",
      "label": "Shipment Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/aiNew.js"
    },
    {
      "name": "trade_purpose",
      "label": "Trade Purpose",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/aiNew.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Documents Lacks AI Declaration Auto Generation source input context",
      "options": [],
      "required": false,
      "source": "src/routes/gap_documents_lacks_ai_declaration_auto_generation.js"
    }
  ],
  "ai-customs-ai-tools": [
    {
      "name": "consignee",
      "label": "Consignee",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "currency",
      "label": "Currency",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "declared_value",
      "label": "Declared Value",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "destination_country",
      "label": "Destination Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "document_type",
      "label": "Document Type",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "entity_name",
      "label": "Entity Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "entity_type",
      "label": "Entity Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "goods_description",
      "label": "Goods Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "hs_code",
      "label": "Hs Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "intended_use",
      "label": "Intended Use",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "material",
      "label": "Material",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "origin_country",
      "label": "Origin Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "product_name",
      "label": "Product Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "shipper",
      "label": "Shipper",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/ai.js"
    },
    {
      "name": "country_code",
      "label": "Country Code",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/aiNew.js"
    },
    {
      "name": "destinations",
      "label": "Destinations",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/aiNew.js"
    },
    {
      "name": "eccn_number",
      "label": "Eccn Number",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/aiNew.js"
    },
    {
      "name": "origin",
      "label": "Origin",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/aiNew.js"
    },
    {
      "name": "product",
      "label": "Product",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/aiNew.js"
    },
    {
      "name": "product_description",
      "label": "Product Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/aiNew.js"
    },
    {
      "name": "shipment_id",
      "label": "Shipment Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/aiNew.js"
    },
    {
      "name": "trade_purpose",
      "label": "Trade Purpose",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/routes/aiNew.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Documents Lacks AI Declaration Auto Generation source input context",
      "options": [],
      "required": false,
      "source": "src/routes/gap_documents_lacks_ai_declaration_auto_generation.js"
    }
  ],
  "ai-vendor-risk-performance-scorer-ai-analysis-ud1t8r-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Analysis source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAnalysis.js"
    }
  ],
  "ai-vendor-risk-performance-scorer-alert-detail-1fj8p7-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Alert Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AlertDetail.js"
    }
  ],
  "ai-vendor-risk-performance-scorer-audit-detail-1r22ib-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Audit Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AuditDetail.js"
    }
  ],
  "ai-vendor-risk-performance-scorer-audit-trail-gh3eym-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Audit Trail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AuditTrail.js"
    }
  ],
  "ai-vendor-risk-performance-scorer-cf-supply-chain-network-risk-identifying-single-points-clib2m-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Cf Supply Chain Network Risk Identifying Single Points source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CfSupplyChainNetworkRiskIdentifyingSinglePoints.jsx"
    }
  ],
  "ai-vendor-risk-performance-scorer-contact-detail-142eor-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Contact Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ContactDetail.js"
    }
  ],
  "ai-vendor-risk-performance-scorer-contract-detail-zxt5e-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Contract Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ContractDetail.js"
    }
  ],
  "ai-vendor-risk-performance-scorer-delivery-detail-1f9rbt-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Delivery Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/DeliveryDetail.js"
    }
  ],
  "ai-vendor-risk-performance-scorer-document-detail-50v967-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Document Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/DocumentDetail.js"
    }
  ],
  "ai-vendor-risk-performance-scorer-esg-detail-8e33xt-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the ESG Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ESGDetail.js"
    }
  ],
  "ai-vendor-risk-performance-scorer-gap-no-esg-controversy-news-scanner-ai-18wp7x-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Esg Controversy News Scanner AI source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoEsgControversyNewsScannerAi.jsx"
    }
  ],
  "ai-vendor-risk-performance-scorer-gap-no-supply-chain-network-n-tier-risk-w752ux-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Supply Chain Network N Tier Risk source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GapNoSupplyChainNetworkNTierRisk.jsx"
    }
  ],
  "ai-vendor-risk-performance-scorer-geopolitical-detail-a4c69w-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Geopolitical Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/GeopoliticalDetail.js"
    }
  ],
  "ai-vendor-risk-performance-scorer-report-detail-1s2cgy-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Report Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ReportDetail.js"
    }
  ],
  "ai-vendor-risk-performance-scorer-spend-detail-hs9kvg-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Spend Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/SpendDetail.js"
    }
  ],
  "ai-vendor-risk-performance-scorer-supplier-detail-1w5hjy-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Supplier Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/SupplierDetail.js"
    }
  ],
  "ai-vendor-risk-performance-scorer-watchlist-detail-18bmvo-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Watchlist Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/WatchlistDetail.js"
    }
  ],
  "ai-vendor-risk-performance-scorer-ai-1lp99l-exact-ai": [
    {
      "name": "alternate_suppliers",
      "label": "Alternate Suppliers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "annual_spend",
      "label": "Annual Spend",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "current_unit_price",
      "label": "Current Unit Price",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "dependent_skus",
      "label": "Dependent Skus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "recent_signals",
      "label": "Recent Signals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "supplier_id",
      "label": "Supplier Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "top_n",
      "label": "Top N",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    }
  ],
  "ai-vendor-risk-performance-scorer-gap-no-esg-controversy-news-scanner-ai-17rorf-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Esg Controversy News Scanner AI source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gapNoEsgControversyNewsScannerAi.js"
    }
  ],
  "ai-vendor-risk-performance-scorer-gap-no-supply-chain-network-n-tier-risk-analysis-ai-1qh3nx-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No Supply Chain Network N Tier Risk Analysis AI source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/gapNoSupplyChainNetworkNTierRiskAnalysisAi.js"
    }
  ],
  "ai-vendor-risk-performance-scorer-supply-chain-network-risk-d5yvzm-exact-ai": [
    {
      "name": "items = []",
      "label": "Items = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/supplyChainNetworkRisk.js"
    }
  ],
  "ai-vendor-risk-performance-scorer-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Analysis source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAnalysis.js"
    },
    {
      "name": "alternate_suppliers",
      "label": "Alternate Suppliers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "annual_spend",
      "label": "Annual Spend",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "current_unit_price",
      "label": "Current Unit Price",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "dependent_skus",
      "label": "Dependent Skus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "recent_signals",
      "label": "Recent Signals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "supplier_id",
      "label": "Supplier Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "top_n",
      "label": "Top N",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "items = []",
      "label": "Items = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/supplyChainNetworkRisk.js"
    }
  ],
  "ai-vendor-risk-performance-scorer-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Analysis source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIAnalysis.js"
    },
    {
      "name": "alternate_suppliers",
      "label": "Alternate Suppliers",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "annual_spend",
      "label": "Annual Spend",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "country",
      "label": "Country",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "current_unit_price",
      "label": "Current Unit Price",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "dependent_skus",
      "label": "Dependent Skus",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "recent_signals",
      "label": "Recent Signals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "supplier_id",
      "label": "Supplier Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "top_n",
      "label": "Top N",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    },
    {
      "name": "items = []",
      "label": "Items = []",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/supplyChainNetworkRisk.js"
    }
  ],
  "ai-visual-qa-inspector-ai-5cuwes-exact-ai": [
    {
      "name": "auditFindings",
      "label": "Audit Findings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "certifications",
      "label": "Certifications",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "defectSeries",
      "label": "Defect Series",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "defectStats",
      "label": "Defect Stats",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "historicalIncidents",
      "label": "Historical Incidents",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "historicalRate",
      "label": "Historical Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "imageUrl",
      "label": "Image Url",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "lookbackDays",
      "label": "Lookback Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "measurement",
      "label": "Measurement",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "onTimeDeliveryPct",
      "label": "On Time Delivery Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "parameterSeries",
      "label": "Parameter Series",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "processData",
      "label": "Process Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "productCategory",
      "label": "Product Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "productionParams",
      "label": "Production Params",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "productLine",
      "label": "Product Line",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recentDefects",
      "label": "Recent Defects",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "reworkRatePct",
      "label": "Rework Rate Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "subgroups",
      "label": "Subgroups",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "supplierName",
      "label": "Supplier Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target",
      "label": "Target",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-visual-qa-inspector-source-workflow": [
    {
      "name": "auditFindings",
      "label": "Audit Findings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "certifications",
      "label": "Certifications",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "defectSeries",
      "label": "Defect Series",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "defectStats",
      "label": "Defect Stats",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "historicalIncidents",
      "label": "Historical Incidents",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "historicalRate",
      "label": "Historical Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "imageUrl",
      "label": "Image Url",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "lookbackDays",
      "label": "Lookback Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "measurement",
      "label": "Measurement",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "onTimeDeliveryPct",
      "label": "On Time Delivery Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "parameterSeries",
      "label": "Parameter Series",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "processData",
      "label": "Process Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "productCategory",
      "label": "Product Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "productionParams",
      "label": "Production Params",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "productLine",
      "label": "Product Line",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recentDefects",
      "label": "Recent Defects",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "reworkRatePct",
      "label": "Rework Rate Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "subgroups",
      "label": "Subgroups",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "supplierName",
      "label": "Supplier Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target",
      "label": "Target",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-visual-qa-inspector-ai-tools": [
    {
      "name": "auditFindings",
      "label": "Audit Findings",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "certifications",
      "label": "Certifications",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "constraints",
      "label": "Constraints",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "defectSeries",
      "label": "Defect Series",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "defectStats",
      "label": "Defect Stats",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "historicalIncidents",
      "label": "Historical Incidents",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "historicalRate",
      "label": "Historical Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "imageUrl",
      "label": "Image Url",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "lookbackDays",
      "label": "Lookback Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "measurement",
      "label": "Measurement",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "onTimeDeliveryPct",
      "label": "On Time Delivery Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "parameterSeries",
      "label": "Parameter Series",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "processData",
      "label": "Process Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "productCategory",
      "label": "Product Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "productionParams",
      "label": "Production Params",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "productLine",
      "label": "Product Line",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "recentDefects",
      "label": "Recent Defects",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "reworkRatePct",
      "label": "Rework Rate Pct",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "subgroups",
      "label": "Subgroups",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "supplierName",
      "label": "Supplier Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "target",
      "label": "Target",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ]
};
