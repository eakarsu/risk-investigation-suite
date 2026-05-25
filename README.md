# Risk Investigation Suite

Wave:
- Wave 03 - Legal, Compliance, Government, and Risk

Source candidates represented:
- `AIAntiFraud`
- `AIAMLTransactionMonitoring`
- `AIInsuranceClaimsAdjuster`
- `AIForensicAccountingInvestigator`
- `AICreditRiskAssessmentAgent`
- `AIVendorRiskPerformanceScorer`
- `AIConsumerComplaintResolutionAgent`

This suite merges domain capabilities into one feature-first application:
- one login
- one combined dashboard
- one sidebar with all suite features
- PostgreSQL-backed feature state, entity records, documents, notifications, and audit log
- role behavior for admin, manager, and analyst users

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/risk-investigation-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:3720`

Seeded users:
- `admin@risk-investigation.local / admin123`
- `manager@risk-investigation.local / manager123`
- `analyst@risk-investigation.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/risk-investigation-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:3720 npm run smoke
```

## Completion Scope

Implemented feature groups:
- Investigation Operations
- Fraud Operations
- Financial Crime
- Claims Risk
- Third Party Risk
- Portfolio Risk
- Governance
- Core Platform

This is a Wave 03 suite created without modifying any original source project.
