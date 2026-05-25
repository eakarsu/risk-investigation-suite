export const sourceProjectTools = [
  {
    "id": "aiaml-transaction-monitoring-source-workflow",
    "title": "AIAML Transaction Monitoring Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIAMLTransactionMonitoring.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIAMLTransactionMonitoring to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AIAML Transaction Monitoring source context",
    "outputLabel": "AIAML Transaction Monitoring source analysis",
    "signals": [
      "frontend/src/pages/AIAdverseMediaScreenPage",
      "frontend/src/pages/AIBeneficialOwnerTracePage",
      "frontend/src/pages/AICustomerRiskScorePage",
      "frontend/src/pages/AIEddQuestionnairePage",
      "frontend/src/pages/AIExecutiveBriefPage",
      "frontend/src/pages/AIFalsePositiveClassifierPage",
      "frontend/src/pages/AIInvestigationSummaryPage",
      "frontend/src/pages/AIJurisdictionalRiskPage"
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-ai-tools",
    "title": "AIAML Transaction Monitoring AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIAMLTransactionMonitoring.",
    "defaultPrompt": "Review AIAMLTransactionMonitoring AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AIAML Transaction Monitoring AI prompt or tool context",
    "outputLabel": "AIAML Transaction Monitoring AI tool response",
    "signals": [
      "frontend/src/pages/AIAdverseMediaScreenPage.js",
      "frontend/src/pages/AIBeneficialOwnerTracePage.js",
      "frontend/src/pages/AICustomerRiskScorePage.js",
      "frontend/src/pages/AIEddQuestionnairePage.js",
      "frontend/src/pages/AIExecutiveBriefPage.js",
      "frontend/src/pages/AIFalsePositiveClassifierPage.js",
      "frontend/src/pages/AIInvestigationSummaryPage.js",
      "frontend/src/pages/AIJurisdictionalRiskPage.js"
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-ai-adverse-media-screen-page-jhn0j4-exact-ai",
    "title": "AIAML Transaction Monitoring: AI Adverse Media Screen Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIAdverseMediaScreenPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Adverse Media Screen Page\" from AIAMLTransactionMonitoring. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Adverse Media Screen Page donor inputs",
    "outputLabel": "AI Adverse Media Screen Page AI response",
    "signals": [
      "frontend/src/pages/AIAdverseMediaScreenPage.js"
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-ai-beneficial-owner-trace-page-170sjz-exact-ai",
    "title": "AIAML Transaction Monitoring: AI Beneficial Owner Trace Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIBeneficialOwnerTracePage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Beneficial Owner Trace Page\" from AIAMLTransactionMonitoring. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Beneficial Owner Trace Page donor inputs",
    "outputLabel": "AI Beneficial Owner Trace Page AI response",
    "signals": [
      "frontend/src/pages/AIBeneficialOwnerTracePage.js"
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-ai-customer-risk-score-page-t83vr9-exact-ai",
    "title": "AIAML Transaction Monitoring: AI Customer Risk Score Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AICustomerRiskScorePage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Customer Risk Score Page\" from AIAMLTransactionMonitoring. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Customer Risk Score Page donor inputs",
    "outputLabel": "AI Customer Risk Score Page AI response",
    "signals": [
      "frontend/src/pages/AICustomerRiskScorePage.js"
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-ai-edd-questionnaire-page-wwpfao-exact-ai",
    "title": "AIAML Transaction Monitoring: AI Edd Questionnaire Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIEddQuestionnairePage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Edd Questionnaire Page\" from AIAMLTransactionMonitoring. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Edd Questionnaire Page donor inputs",
    "outputLabel": "AI Edd Questionnaire Page AI response",
    "signals": [
      "frontend/src/pages/AIEddQuestionnairePage.js"
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-ai-executive-brief-page-7pgscw-exact-ai",
    "title": "AIAML Transaction Monitoring: AI Executive Brief Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIExecutiveBriefPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Executive Brief Page\" from AIAMLTransactionMonitoring. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Executive Brief Page donor inputs",
    "outputLabel": "AI Executive Brief Page AI response",
    "signals": [
      "frontend/src/pages/AIExecutiveBriefPage.js"
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-ai-false-positive-classifier-page-kg4ozn-exact-ai",
    "title": "AIAML Transaction Monitoring: AI False Positive Classifier Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIFalsePositiveClassifierPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI False Positive Classifier Page\" from AIAMLTransactionMonitoring. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI False Positive Classifier Page donor inputs",
    "outputLabel": "AI False Positive Classifier Page AI response",
    "signals": [
      "frontend/src/pages/AIFalsePositiveClassifierPage.js"
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-ai-investigation-summary-page-p9sk4m-exact-ai",
    "title": "AIAML Transaction Monitoring: AI Investigation Summary Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIInvestigationSummaryPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Investigation Summary Page\" from AIAMLTransactionMonitoring. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Investigation Summary Page donor inputs",
    "outputLabel": "AI Investigation Summary Page AI response",
    "signals": [
      "frontend/src/pages/AIInvestigationSummaryPage.js"
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-ai-jurisdictional-risk-page-aoda0x-exact-ai",
    "title": "AIAML Transaction Monitoring: AI Jurisdictional Risk Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIJurisdictionalRiskPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Jurisdictional Risk Page\" from AIAMLTransactionMonitoring. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Jurisdictional Risk Page donor inputs",
    "outputLabel": "AI Jurisdictional Risk Page AI response",
    "signals": [
      "frontend/src/pages/AIJurisdictionalRiskPage.js"
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-ai-kyc-onboarding-prescreen-page-laasbv-exact-ai",
    "title": "AIAML Transaction Monitoring: AI Kyc Onboarding Prescreen Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIKycOnboardingPrescreenPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Kyc Onboarding Prescreen Page\" from AIAMLTransactionMonitoring. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Kyc Onboarding Prescreen Page donor inputs",
    "outputLabel": "AI Kyc Onboarding Prescreen Page AI response",
    "signals": [
      "frontend/src/pages/AIKycOnboardingPrescreenPage.js"
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-ai-kyc-refresh-summary-page-i0ck22-exact-ai",
    "title": "AIAML Transaction Monitoring: AI Kyc Refresh Summary Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIKycRefreshSummaryPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Kyc Refresh Summary Page\" from AIAMLTransactionMonitoring. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Kyc Refresh Summary Page donor inputs",
    "outputLabel": "AI Kyc Refresh Summary Page AI response",
    "signals": [
      "frontend/src/pages/AIKycRefreshSummaryPage.js"
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-ai-network-analysis-page-1tonvc-exact-ai",
    "title": "AIAML Transaction Monitoring: AI Network Analysis Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AINetworkAnalysisPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Network Analysis Page\" from AIAMLTransactionMonitoring. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Network Analysis Page donor inputs",
    "outputLabel": "AI Network Analysis Page AI response",
    "signals": [
      "frontend/src/pages/AINetworkAnalysisPage.js"
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-ai-peer-group-compare-page-106uqu-exact-ai",
    "title": "AIAML Transaction Monitoring: AI Peer Group Compare Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIPeerGroupComparePage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Peer Group Compare Page\" from AIAMLTransactionMonitoring. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Peer Group Compare Page donor inputs",
    "outputLabel": "AI Peer Group Compare Page AI response",
    "signals": [
      "frontend/src/pages/AIPeerGroupComparePage.js"
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-ai-regulatory-filing-draft-page-1rm2fo-exact-ai",
    "title": "AIAML Transaction Monitoring: AI Regulatory Filing Draft Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIRegulatoryFilingDraftPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Regulatory Filing Draft Page\" from AIAMLTransactionMonitoring. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Regulatory Filing Draft Page donor inputs",
    "outputLabel": "AI Regulatory Filing Draft Page AI response",
    "signals": [
      "frontend/src/pages/AIRegulatoryFilingDraftPage.js"
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-ai-sanction-name-match-page-a9kgt9-exact-ai",
    "title": "AIAML Transaction Monitoring: AI Sanction Name Match Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AISanctionNameMatchPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Sanction Name Match Page\" from AIAMLTransactionMonitoring. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Sanction Name Match Page donor inputs",
    "outputLabel": "AI Sanction Name Match Page AI response",
    "signals": [
      "frontend/src/pages/AISanctionNameMatchPage.js"
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-ai-sar-narrative-draft-page-k315wv-exact-ai",
    "title": "AIAML Transaction Monitoring: AI Sar Narrative Draft Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AISarNarrativeDraftPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Sar Narrative Draft Page\" from AIAMLTransactionMonitoring. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Sar Narrative Draft Page donor inputs",
    "outputLabel": "AI Sar Narrative Draft Page AI response",
    "signals": [
      "frontend/src/pages/AISarNarrativeDraftPage.js"
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-ai-source-of-funds-explain-page-fviwj-exact-ai",
    "title": "AIAML Transaction Monitoring: AI Source Of Funds Explain Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AISourceOfFundsExplainPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Source Of Funds Explain Page\" from AIAMLTransactionMonitoring. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Source Of Funds Explain Page donor inputs",
    "outputLabel": "AI Source Of Funds Explain Page AI response",
    "signals": [
      "frontend/src/pages/AISourceOfFundsExplainPage.js"
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-ai-transaction-anomaly-page-1gzr5e-exact-ai",
    "title": "AIAML Transaction Monitoring: AI Transaction Anomaly Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AITransactionAnomalyPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Transaction Anomaly Page\" from AIAMLTransactionMonitoring. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Transaction Anomaly Page donor inputs",
    "outputLabel": "AI Transaction Anomaly Page AI response",
    "signals": [
      "frontend/src/pages/AITransactionAnomalyPage.js"
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-ai-typology-detect-page-pxam2q-exact-ai",
    "title": "AIAML Transaction Monitoring: AI Typology Detect Page",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AITypologyDetectPage.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Typology Detect Page\" from AIAMLTransactionMonitoring. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Typology Detect Page donor inputs",
    "outputLabel": "AI Typology Detect Page AI response",
    "signals": [
      "frontend/src/pages/AITypologyDetectPage.js"
    ]
  },
  {
    "id": "aiaml-transaction-monitoring-ai-5cuwes-exact-ai",
    "title": "AIAML Transaction Monitoring: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIAMLTransactionMonitoring. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Applicant Name",
      "Claimed Amount Usd",
      "Claimed Source",
      "Context",
      "Country",
      "Customer Id",
      "Data Notes",
      "Depth"
    ]
  },
  {
    "id": "ai-anti-fraud-source-workflow",
    "title": "AI Anti Fraud Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIAntiFraud.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIAntiFraud to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Anti Fraud source context",
    "outputLabel": "AI Anti Fraud source analysis",
    "signals": [
      "server/aiHelper",
      "server/routes/ai",
      "server/routes/gap_ai_explainability_risk_score_outputs",
      "server/routes/gap_ai_money_mule_cash_out",
      "server/routes/gap_ai_synthetic_identity_detection",
      "server/routes/gap_ai_velocity_rule_learning_rapid",
      "client/src/pages/AIResults",
      "client/src/pages/AITools"
    ]
  },
  {
    "id": "ai-anti-fraud-ai-tools",
    "title": "AI Anti Fraud AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIAntiFraud.",
    "defaultPrompt": "Review AIAntiFraud AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Anti Fraud AI prompt or tool context",
    "outputLabel": "AI Anti Fraud AI tool response",
    "signals": [
      "server/aiHelper.js",
      "server/routes/ai.js",
      "server/routes/gap_ai_explainability_risk_score_outputs.js",
      "server/routes/gap_ai_money_mule_cash_out.js",
      "server/routes/gap_ai_synthetic_identity_detection.js",
      "server/routes/gap_ai_velocity_rule_learning_rapid.js",
      "client/src/pages/AIResults.js",
      "client/src/pages/AITools.js"
    ]
  },
  {
    "id": "ai-anti-fraud-ai-j615h1-exact-ai",
    "title": "AI Anti Fraud: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIAntiFraud. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Amount",
      "Credit Data",
      "Credit Score Id",
      "Customer Id",
      "Days Back = 14",
      "Days Back = 30",
      "Days Back = 7",
      "Hours Window = 1"
    ]
  },
  {
    "id": "ai-anti-fraud-gap-ai-explainability-risk-score-outputs-y38v9a-exact-ai",
    "title": "AI Anti Fraud: Gap AI Explainability Risk Score Outputs",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap_ai_explainability_risk_score_outputs.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Explainability Risk Score Outputs\" from AIAntiFraud. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Explainability Risk Score Outputs donor inputs",
    "outputLabel": "Gap AI Explainability Risk Score Outputs AI response",
    "signals": [
      "server/routes/gap_ai_explainability_risk_score_outputs.js"
    ]
  },
  {
    "id": "ai-anti-fraud-gap-ai-money-mule-cash-out-15pjoy-exact-ai",
    "title": "AI Anti Fraud: Gap AI Money Mule Cash Out",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap_ai_money_mule_cash_out.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Money Mule Cash Out\" from AIAntiFraud. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Money Mule Cash Out donor inputs",
    "outputLabel": "Gap AI Money Mule Cash Out AI response",
    "signals": [
      "server/routes/gap_ai_money_mule_cash_out.js"
    ]
  },
  {
    "id": "ai-anti-fraud-gap-ai-synthetic-identity-detection-dfhgbd-exact-ai",
    "title": "AI Anti Fraud: Gap AI Synthetic Identity Detection",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap_ai_synthetic_identity_detection.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Synthetic Identity Detection\" from AIAntiFraud. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Synthetic Identity Detection donor inputs",
    "outputLabel": "Gap AI Synthetic Identity Detection AI response",
    "signals": [
      "server/routes/gap_ai_synthetic_identity_detection.js"
    ]
  },
  {
    "id": "ai-anti-fraud-gap-ai-velocity-rule-learning-rapid-ft5gzj-exact-ai",
    "title": "AI Anti Fraud: Gap AI Velocity Rule Learning Rapid",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from server/routes/gap_ai_velocity_rule_learning_rapid.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Velocity Rule Learning Rapid\" from AIAntiFraud. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Velocity Rule Learning Rapid donor inputs",
    "outputLabel": "Gap AI Velocity Rule Learning Rapid AI response",
    "signals": [
      "server/routes/gap_ai_velocity_rule_learning_rapid.js"
    ]
  },
  {
    "id": "ai-anti-fraud-ai-tools-1977ko-exact-ai",
    "title": "AI Anti Fraud: AI Tools",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AITools.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Tools\" from AIAntiFraud. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Tools donor inputs",
    "outputLabel": "AI Tools AI response",
    "signals": [
      "Credit Score Id",
      "Customer Id",
      "Days Back",
      "Graph Days Back",
      "Graph Max Nodes",
      "Merchant Id",
      "Min Shared Attrs",
      "Mule Days Back"
    ]
  },
  {
    "id": "ai-anti-fraud-alert-detail-1uo89q-exact-ai",
    "title": "AI Anti Fraud: Alert Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/AlertDetail.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Alert Detail\" from AIAntiFraud. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Alert Detail donor inputs",
    "outputLabel": "Alert Detail AI response",
    "signals": [
      "client/src/pages/AlertDetail.js"
    ]
  },
  {
    "id": "ai-anti-fraud-gap-ai-explainability-risk-score-outputs-1jfd5w-exact-ai",
    "title": "AI Anti Fraud: Gap AI Explainability Risk Score Outputs",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapAiExplainabilityRiskScoreOutputs.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Explainability Risk Score Outputs\" from AIAntiFraud. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Explainability Risk Score Outputs donor inputs",
    "outputLabel": "Gap AI Explainability Risk Score Outputs AI response",
    "signals": [
      "client/src/pages/GapAiExplainabilityRiskScoreOutputs.js"
    ]
  },
  {
    "id": "ai-anti-fraud-gap-ai-money-mule-cash-out-1skwu9-exact-ai",
    "title": "AI Anti Fraud: Gap AI Money Mule Cash Out",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapAiMoneyMuleCashOut.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Money Mule Cash Out\" from AIAntiFraud. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Money Mule Cash Out donor inputs",
    "outputLabel": "Gap AI Money Mule Cash Out AI response",
    "signals": [
      "client/src/pages/GapAiMoneyMuleCashOut.js"
    ]
  },
  {
    "id": "ai-anti-fraud-gap-ai-synthetic-identity-detection-ayz882-exact-ai",
    "title": "AI Anti Fraud: Gap AI Synthetic Identity Detection",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapAiSyntheticIdentityDetection.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Synthetic Identity Detection\" from AIAntiFraud. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Synthetic Identity Detection donor inputs",
    "outputLabel": "Gap AI Synthetic Identity Detection AI response",
    "signals": [
      "client/src/pages/GapAiSyntheticIdentityDetection.js"
    ]
  },
  {
    "id": "ai-anti-fraud-gap-ai-velocity-rule-learning-rapid-3ldaij-exact-ai",
    "title": "AI Anti Fraud: Gap AI Velocity Rule Learning Rapid",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapAiVelocityRuleLearningRapid.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap AI Velocity Rule Learning Rapid\" from AIAntiFraud. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap AI Velocity Rule Learning Rapid donor inputs",
    "outputLabel": "Gap AI Velocity Rule Learning Rapid AI response",
    "signals": [
      "client/src/pages/GapAiVelocityRuleLearningRapid.js"
    ]
  },
  {
    "id": "ai-customs-source-workflow",
    "title": "AI Customs Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AICustoms.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AICustoms to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Customs source context",
    "outputLabel": "AI Customs source analysis",
    "signals": [
      "src/routes/ai",
      "src/routes/aiNew",
      "src/routes/gap_documents_lacks_ai_declaration_auto_generation",
      "src/routes/gap_duties_lacks_ai_tariff_optimization_endpoint",
      "src/routes/gap_sanctions_lacks_ai_risk_screening_agent",
      "src/routes/gap_shipments_lacks_ai_delay_prediction",
      "src/routes/sanctionsAgent",
      "client/src/main"
    ]
  },
  {
    "id": "ai-customs-ai-tools",
    "title": "AI Customs AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AICustoms.",
    "defaultPrompt": "Review AICustoms AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Customs AI prompt or tool context",
    "outputLabel": "AI Customs AI tool response",
    "signals": [
      "src/routes/ai.js",
      "src/routes/aiNew.js",
      "src/routes/gap_documents_lacks_ai_declaration_auto_generation.js",
      "src/routes/gap_duties_lacks_ai_tariff_optimization_endpoint.js",
      "src/routes/gap_sanctions_lacks_ai_risk_screening_agent.js",
      "src/routes/gap_shipments_lacks_ai_delay_prediction.js",
      "src/routes/sanctionsAgent.js",
      "client/src/main.jsx"
    ]
  },
  {
    "id": "ai-customs-ai-1t15g4-exact-ai",
    "title": "AI Customs: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AICustoms. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Consignee",
      "Country",
      "Currency",
      "Declared Value",
      "Description",
      "Destination Country",
      "Document Type",
      "Entity Name"
    ]
  },
  {
    "id": "ai-customs-ai-new-1mzes3-exact-ai",
    "title": "AI Customs: AI New",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/routes/aiNew.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI New\" from AICustoms. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI New donor inputs",
    "outputLabel": "AI New AI response",
    "signals": [
      "Country Code",
      "Destination Country",
      "Destinations",
      "Eccn Number",
      "Origin",
      "Product",
      "Product Description",
      "Shipment Id"
    ]
  },
  {
    "id": "ai-customs-gap-documents-lacks-ai-declaration-auto-generation-sxbwrr-exact-ai",
    "title": "AI Customs: Gap Documents Lacks AI Declaration Auto Generation",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/routes/gap_documents_lacks_ai_declaration_auto_generation.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Documents Lacks AI Declaration Auto Generation\" from AICustoms. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Documents Lacks AI Declaration Auto Generation donor inputs",
    "outputLabel": "Gap Documents Lacks AI Declaration Auto Generation AI response",
    "signals": [
      "src/routes/gap_documents_lacks_ai_declaration_auto_generation.js"
    ]
  },
  {
    "id": "ai-customs-gap-duties-lacks-ai-tariff-optimization-endpoint-1g0fr3-exact-ai",
    "title": "AI Customs: Gap Duties Lacks AI Tariff Optimization Endpoint",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/routes/gap_duties_lacks_ai_tariff_optimization_endpoint.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Duties Lacks AI Tariff Optimization Endpoint\" from AICustoms. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Duties Lacks AI Tariff Optimization Endpoint donor inputs",
    "outputLabel": "Gap Duties Lacks AI Tariff Optimization Endpoint AI response",
    "signals": [
      "src/routes/gap_duties_lacks_ai_tariff_optimization_endpoint.js"
    ]
  },
  {
    "id": "ai-customs-gap-sanctions-lacks-ai-risk-screening-agent-27niwk-exact-ai",
    "title": "AI Customs: Gap Sanctions Lacks AI Risk Screening Agent",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/routes/gap_sanctions_lacks_ai_risk_screening_agent.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Sanctions Lacks AI Risk Screening Agent\" from AICustoms. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Sanctions Lacks AI Risk Screening Agent donor inputs",
    "outputLabel": "Gap Sanctions Lacks AI Risk Screening Agent AI response",
    "signals": [
      "src/routes/gap_sanctions_lacks_ai_risk_screening_agent.js"
    ]
  },
  {
    "id": "ai-customs-gap-shipments-lacks-ai-delay-prediction-bpjjwu-exact-ai",
    "title": "AI Customs: Gap Shipments Lacks AI Delay Prediction",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/routes/gap_shipments_lacks_ai_delay_prediction.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Shipments Lacks AI Delay Prediction\" from AICustoms. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Shipments Lacks AI Delay Prediction donor inputs",
    "outputLabel": "Gap Shipments Lacks AI Delay Prediction AI response",
    "signals": [
      "src/routes/gap_shipments_lacks_ai_delay_prediction.js"
    ]
  },
  {
    "id": "ai-customs-sanctions-agent-k4rwfn-exact-ai",
    "title": "AI Customs: Sanctions Agent",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from src/routes/sanctionsAgent.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Sanctions Agent\" from AICustoms. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Sanctions Agent donor inputs",
    "outputLabel": "Sanctions Agent AI response",
    "signals": [
      "src/routes/sanctionsAgent.js"
    ]
  },
  {
    "id": "ai-customs-cf-sanctions-screening-agent-981au6-exact-ai",
    "title": "AI Customs: Cf Sanctions Screening Agent",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/CfSanctionsScreeningAgent.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Cf Sanctions Screening Agent\" from AICustoms. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Cf Sanctions Screening Agent donor inputs",
    "outputLabel": "Cf Sanctions Screening Agent AI response",
    "signals": [
      "client/src/pages/CfSanctionsScreeningAgent.jsx"
    ]
  },
  {
    "id": "ai-customs-cf-supply-chain-visibility-h3nu9v-exact-ai",
    "title": "AI Customs: Cf Supply Chain Visibility",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/CfSupplyChainVisibility.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Cf Supply Chain Visibility\" from AICustoms. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Cf Supply Chain Visibility donor inputs",
    "outputLabel": "Cf Supply Chain Visibility AI response",
    "signals": [
      "client/src/pages/CfSupplyChainVisibility.jsx"
    ]
  },
  {
    "id": "ai-customs-gap-documents-lacks-ai-declaration-auto-generation-8eqahv-exact-ai",
    "title": "AI Customs: Gap Documents Lacks AI Declaration Auto Generation",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapDocumentsLacksAiDeclarationAutoGeneration.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Documents Lacks AI Declaration Auto Generation\" from AICustoms. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Documents Lacks AI Declaration Auto Generation donor inputs",
    "outputLabel": "Gap Documents Lacks AI Declaration Auto Generation AI response",
    "signals": [
      "client/src/pages/GapDocumentsLacksAiDeclarationAutoGeneration.jsx"
    ]
  },
  {
    "id": "ai-customs-gap-duties-lacks-ai-tariff-optimization-endpoint-4b1na8-exact-ai",
    "title": "AI Customs: Gap Duties Lacks AI Tariff Optimization Endpoint",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapDutiesLacksAiTariffOptimizationEndpoint.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Duties Lacks AI Tariff Optimization Endpoint\" from AICustoms. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Duties Lacks AI Tariff Optimization Endpoint donor inputs",
    "outputLabel": "Gap Duties Lacks AI Tariff Optimization Endpoint AI response",
    "signals": [
      "client/src/pages/GapDutiesLacksAiTariffOptimizationEndpoint.jsx"
    ]
  },
  {
    "id": "ai-customs-gap-sanctions-lacks-ai-risk-screening-agent-1ebsrw-exact-ai",
    "title": "AI Customs: Gap Sanctions Lacks AI Risk Screening Agent",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapSanctionsLacksAiRiskScreeningAgent.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Sanctions Lacks AI Risk Screening Agent\" from AICustoms. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Sanctions Lacks AI Risk Screening Agent donor inputs",
    "outputLabel": "Gap Sanctions Lacks AI Risk Screening Agent AI response",
    "signals": [
      "client/src/pages/GapSanctionsLacksAiRiskScreeningAgent.jsx"
    ]
  },
  {
    "id": "ai-customs-gap-shipments-lacks-ai-delay-prediction-17s4c0-exact-ai",
    "title": "AI Customs: Gap Shipments Lacks AI Delay Prediction",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from client/src/pages/GapShipmentsLacksAiDelayPrediction.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap Shipments Lacks AI Delay Prediction\" from AICustoms. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap Shipments Lacks AI Delay Prediction donor inputs",
    "outputLabel": "Gap Shipments Lacks AI Delay Prediction AI response",
    "signals": [
      "client/src/pages/GapShipmentsLacksAiDelayPrediction.jsx"
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-source-workflow",
    "title": "AI Vendor Risk Performance Scorer Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIVendorRiskPerformanceScorer.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIVendorRiskPerformanceScorer to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Vendor Risk Performance Scorer source context",
    "outputLabel": "AI Vendor Risk Performance Scorer source analysis",
    "signals": [
      "frontend/src/pages/AIAnalysis",
      "frontend/src/pages/AlertDetail",
      "frontend/src/pages/AuditDetail",
      "frontend/src/pages/AuditTrail",
      "frontend/src/pages/CfSupplyChainNetworkRiskIdentifyingSinglePoints",
      "frontend/src/pages/ContactDetail",
      "frontend/src/pages/ContractDetail",
      "frontend/src/pages/DeliveryDetail"
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-ai-tools",
    "title": "AI Vendor Risk Performance Scorer AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIVendorRiskPerformanceScorer.",
    "defaultPrompt": "Review AIVendorRiskPerformanceScorer AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Vendor Risk Performance Scorer AI prompt or tool context",
    "outputLabel": "AI Vendor Risk Performance Scorer AI tool response",
    "signals": [
      "frontend/src/pages/AIAnalysis.js",
      "frontend/src/pages/AlertDetail.js",
      "frontend/src/pages/AuditDetail.js",
      "frontend/src/pages/AuditTrail.js",
      "frontend/src/pages/CfSupplyChainNetworkRiskIdentifyingSinglePoints.jsx",
      "frontend/src/pages/ContactDetail.js",
      "frontend/src/pages/ContractDetail.js",
      "frontend/src/pages/DeliveryDetail.js"
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-ai-analysis-ud1t8r-exact-ai",
    "title": "AI Vendor Risk Performance Scorer: AI Analysis",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AIAnalysis.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI Analysis\" from AIVendorRiskPerformanceScorer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI Analysis donor inputs",
    "outputLabel": "AI Analysis AI response",
    "signals": [
      "frontend/src/pages/AIAnalysis.js"
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-alert-detail-1fj8p7-exact-ai",
    "title": "AI Vendor Risk Performance Scorer: Alert Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AlertDetail.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Alert Detail\" from AIVendorRiskPerformanceScorer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Alert Detail donor inputs",
    "outputLabel": "Alert Detail AI response",
    "signals": [
      "frontend/src/pages/AlertDetail.js"
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-audit-detail-1r22ib-exact-ai",
    "title": "AI Vendor Risk Performance Scorer: Audit Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AuditDetail.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Audit Detail\" from AIVendorRiskPerformanceScorer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Audit Detail donor inputs",
    "outputLabel": "Audit Detail AI response",
    "signals": [
      "frontend/src/pages/AuditDetail.js"
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-audit-trail-gh3eym-exact-ai",
    "title": "AI Vendor Risk Performance Scorer: Audit Trail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/AuditTrail.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Audit Trail\" from AIVendorRiskPerformanceScorer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Audit Trail donor inputs",
    "outputLabel": "Audit Trail AI response",
    "signals": [
      "frontend/src/pages/AuditTrail.js"
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-cf-supply-chain-network-risk-identifying-single-points-clib2m-exact-ai",
    "title": "AI Vendor Risk Performance Scorer: Cf Supply Chain Network Risk Identifying Single Points",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/CfSupplyChainNetworkRiskIdentifyingSinglePoints.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Cf Supply Chain Network Risk Identifying Single Points\" from AIVendorRiskPerformanceScorer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Cf Supply Chain Network Risk Identifying Single Points donor inputs",
    "outputLabel": "Cf Supply Chain Network Risk Identifying Single Points AI response",
    "signals": [
      "frontend/src/pages/CfSupplyChainNetworkRiskIdentifyingSinglePoints.jsx"
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-contact-detail-142eor-exact-ai",
    "title": "AI Vendor Risk Performance Scorer: Contact Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/ContactDetail.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Contact Detail\" from AIVendorRiskPerformanceScorer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Contact Detail donor inputs",
    "outputLabel": "Contact Detail AI response",
    "signals": [
      "frontend/src/pages/ContactDetail.js"
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-contract-detail-zxt5e-exact-ai",
    "title": "AI Vendor Risk Performance Scorer: Contract Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/ContractDetail.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Contract Detail\" from AIVendorRiskPerformanceScorer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Contract Detail donor inputs",
    "outputLabel": "Contract Detail AI response",
    "signals": [
      "frontend/src/pages/ContractDetail.js"
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-delivery-detail-1f9rbt-exact-ai",
    "title": "AI Vendor Risk Performance Scorer: Delivery Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/DeliveryDetail.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Delivery Detail\" from AIVendorRiskPerformanceScorer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Delivery Detail donor inputs",
    "outputLabel": "Delivery Detail AI response",
    "signals": [
      "frontend/src/pages/DeliveryDetail.js"
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-document-detail-50v967-exact-ai",
    "title": "AI Vendor Risk Performance Scorer: Document Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/DocumentDetail.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Document Detail\" from AIVendorRiskPerformanceScorer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Document Detail donor inputs",
    "outputLabel": "Document Detail AI response",
    "signals": [
      "frontend/src/pages/DocumentDetail.js"
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-esg-detail-8e33xt-exact-ai",
    "title": "AI Vendor Risk Performance Scorer: ESG Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/ESGDetail.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"ESG Detail\" from AIVendorRiskPerformanceScorer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "ESG Detail donor inputs",
    "outputLabel": "ESG Detail AI response",
    "signals": [
      "frontend/src/pages/ESGDetail.js"
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-gap-no-esg-controversy-news-scanner-ai-18wp7x-exact-ai",
    "title": "AI Vendor Risk Performance Scorer: Gap No Esg Controversy News Scanner AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapNoEsgControversyNewsScannerAi.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Esg Controversy News Scanner AI\" from AIVendorRiskPerformanceScorer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Esg Controversy News Scanner AI donor inputs",
    "outputLabel": "Gap No Esg Controversy News Scanner AI AI response",
    "signals": [
      "frontend/src/pages/GapNoEsgControversyNewsScannerAi.jsx"
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-gap-no-supply-chain-network-n-tier-risk-w752ux-exact-ai",
    "title": "AI Vendor Risk Performance Scorer: Gap No Supply Chain Network N Tier Risk",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GapNoSupplyChainNetworkNTierRisk.jsx. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Supply Chain Network N Tier Risk\" from AIVendorRiskPerformanceScorer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Supply Chain Network N Tier Risk donor inputs",
    "outputLabel": "Gap No Supply Chain Network N Tier Risk AI response",
    "signals": [
      "frontend/src/pages/GapNoSupplyChainNetworkNTierRisk.jsx"
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-geopolitical-detail-a4c69w-exact-ai",
    "title": "AI Vendor Risk Performance Scorer: Geopolitical Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/GeopoliticalDetail.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Geopolitical Detail\" from AIVendorRiskPerformanceScorer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Geopolitical Detail donor inputs",
    "outputLabel": "Geopolitical Detail AI response",
    "signals": [
      "frontend/src/pages/GeopoliticalDetail.js"
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-report-detail-1s2cgy-exact-ai",
    "title": "AI Vendor Risk Performance Scorer: Report Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/ReportDetail.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Report Detail\" from AIVendorRiskPerformanceScorer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Report Detail donor inputs",
    "outputLabel": "Report Detail AI response",
    "signals": [
      "frontend/src/pages/ReportDetail.js"
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-spend-detail-hs9kvg-exact-ai",
    "title": "AI Vendor Risk Performance Scorer: Spend Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/SpendDetail.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Spend Detail\" from AIVendorRiskPerformanceScorer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Spend Detail donor inputs",
    "outputLabel": "Spend Detail AI response",
    "signals": [
      "frontend/src/pages/SpendDetail.js"
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-supplier-detail-1w5hjy-exact-ai",
    "title": "AI Vendor Risk Performance Scorer: Supplier Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/SupplierDetail.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Supplier Detail\" from AIVendorRiskPerformanceScorer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Supplier Detail donor inputs",
    "outputLabel": "Supplier Detail AI response",
    "signals": [
      "frontend/src/pages/SupplierDetail.js"
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-watchlist-detail-18bmvo-exact-ai",
    "title": "AI Vendor Risk Performance Scorer: Watchlist Detail",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from frontend/src/pages/WatchlistDetail.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Watchlist Detail\" from AIVendorRiskPerformanceScorer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Watchlist Detail donor inputs",
    "outputLabel": "Watchlist Detail AI response",
    "signals": [
      "frontend/src/pages/WatchlistDetail.js"
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-ai-1lp99l-exact-ai",
    "title": "AI Vendor Risk Performance Scorer: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIVendorRiskPerformanceScorer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Alternate Suppliers",
      "Annual Spend",
      "Category",
      "Country",
      "Current Unit Price",
      "Dependent Skus",
      "Recent Signals",
      "Supplier Id"
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-gap-no-esg-controversy-news-scanner-ai-17rorf-exact-ai",
    "title": "AI Vendor Risk Performance Scorer: Gap No Esg Controversy News Scanner AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/gapNoEsgControversyNewsScannerAi.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Esg Controversy News Scanner AI\" from AIVendorRiskPerformanceScorer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Esg Controversy News Scanner AI donor inputs",
    "outputLabel": "Gap No Esg Controversy News Scanner AI AI response",
    "signals": [
      "backend/src/routes/gapNoEsgControversyNewsScannerAi.js"
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-gap-no-supply-chain-network-n-tier-risk-analysis-ai-1qh3nx-exact-ai",
    "title": "AI Vendor Risk Performance Scorer: Gap No Supply Chain Network N Tier Risk Analysis AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/gapNoSupplyChainNetworkNTierRiskAnalysisAi.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Gap No Supply Chain Network N Tier Risk Analysis AI\" from AIVendorRiskPerformanceScorer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Gap No Supply Chain Network N Tier Risk Analysis AI donor inputs",
    "outputLabel": "Gap No Supply Chain Network N Tier Risk Analysis AI AI response",
    "signals": [
      "backend/src/routes/gapNoSupplyChainNetworkNTierRiskAnalysisAi.js"
    ]
  },
  {
    "id": "ai-vendor-risk-performance-scorer-supply-chain-network-risk-d5yvzm-exact-ai",
    "title": "AI Vendor Risk Performance Scorer: Supply Chain Network Risk",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/src/routes/supplyChainNetworkRisk.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"Supply Chain Network Risk\" from AIVendorRiskPerformanceScorer. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "Supply Chain Network Risk donor inputs",
    "outputLabel": "Supply Chain Network Risk AI response",
    "signals": [
      "Items = []"
    ]
  },
  {
    "id": "ai-visual-qa-inspector-source-workflow",
    "title": "AI Visual QA Inspector Source Workflow",
    "category": "Source Project Coverage",
    "description": "Source-derived workflow coverage extracted from AIVisualQAInspector.",
    "defaultPrompt": "Use the extracted routes, APIs, prompts, and tool files from AIVisualQAInspector to identify missing merged-suite capabilities and next implementation steps.",
    "inputLabel": "AI Visual QA Inspector source context",
    "outputLabel": "AI Visual QA Inspector source analysis",
    "signals": [
      "backend/services/openrouter",
      "frontend/src/main",
      "frontend/src/components/common/AIResultDisplay",
      "frontend/src/components/TrendTracker/TrendTrackerDetail",
      "frontend/src/components/SeverityScorer/SeverityScorerDetail",
      "frontend/src/components/RootCause/RootCauseDetail",
      "frontend/src/components/Reports/ReportDetail",
      "frontend/src/components/QualityInspector/QualityInspectorDetail"
    ]
  },
  {
    "id": "ai-visual-qa-inspector-ai-tools",
    "title": "AI Visual QA Inspector AI Tools",
    "category": "Source AI Tools",
    "description": "AI/API/prompt coverage extracted from AIVisualQAInspector.",
    "defaultPrompt": "Review AIVisualQAInspector AI prompts, APIs, and tool files. Convert them into concrete AI cards, inputs, outputs, and audit actions for this merged suite.",
    "inputLabel": "AI Visual QA Inspector AI prompt or tool context",
    "outputLabel": "AI Visual QA Inspector AI tool response",
    "signals": [
      "backend/services/openrouter.js",
      "frontend/src/main.jsx",
      "frontend/src/components/common/AIResultDisplay.jsx",
      "frontend/src/components/TrendTracker/TrendTrackerDetail.jsx",
      "frontend/src/components/SeverityScorer/SeverityScorerDetail.jsx",
      "frontend/src/components/RootCause/RootCauseDetail.jsx",
      "frontend/src/components/Reports/ReportDetail.jsx",
      "frontend/src/components/QualityInspector/QualityInspectorDetail.jsx"
    ]
  },
  {
    "id": "ai-visual-qa-inspector-ai-5cuwes-exact-ai",
    "title": "AI Visual QA Inspector: AI",
    "category": "Exact Donor AI Feature",
    "description": "Exact donor AI feature extracted from backend/routes/ai.js. Field names are preserved; the display title may be normalized.",
    "defaultPrompt": "Run the donor AI feature \"AI\" from AIVisualQAInspector. Preserve the same input semantics and use the structured fields exactly as provided.",
    "inputLabel": "AI donor inputs",
    "outputLabel": "AI AI response",
    "signals": [
      "Audit Findings",
      "Certifications",
      "Constraints",
      "Defect Series",
      "Defect Stats",
      "Historical Incidents",
      "Historical Rate",
      "Image Url"
    ]
  }
];
