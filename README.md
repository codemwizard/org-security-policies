# Organization Security Policies

This repository contains the authoritative security policies, coding standards,
and AI governance rules for all software developed by the organization.

## Scope
These policies apply to:
- All production systems
- All environments
- All human-written and AI-generated code

## Governance
- Policies are versioned and immutable once released
- All application repositories must reference a tagged policy version
- Exceptions must follow the formal exception process

This repository is the single source of truth for secure development governance.

org-security-policies/
│
├── README.md
│
├── secure-coding/
│   ├── Secure_Coding_Policy.md
│   ├── AI_Secure_Coding_Policy.md
│
├── standards/
│   ├── Logging_Standard.md
│   ├── Secrets_Management_Standard.md
│   ├── Database_Transaction_Standard.md
│
├── ai-enforcement/
│   ├── AI_Lint_Rules.md
│   ├── Allowed_AI_Tools.md
│
├── compliance-mapping/
│   ├── ISO27002_Control_Mapping.md
│   ├── OWASP_ASVS_Mapping.md
│
├── exceptions/
│   └── Exception_Request_Template.md
│
└── approvals/
    └── APPROVAL_LOG.md
