# Risk Investigation Merge Plan

Objective:
- Merge source capabilities into one application with one login, one sidebar, one dashboard, and feature-first navigation.

Source candidates:
- `AIAntiFraud`
- `AIAMLTransactionMonitoring`
- `AIInsuranceClaimsAdjuster`
- `AIForensicAccountingInvestigator`
- `AICreditRiskAssessmentAgent`
- `AIVendorRiskPerformanceScorer`
- `AIConsumerComplaintResolutionAgent`

Merged product model:
- Investigation Operations
- Fraud Operations
- Financial Crime
- Claims Risk
- Third Party Risk
- Portfolio Risk
- Governance
- Core Platform

Implementation pattern:
- Next.js frontend
- PostgreSQL persistence
- seeded role-based users
- protected routes
- smoke test coverage

Source-project rule:
- source projects are read-only inputs
- no source project folder is modified
