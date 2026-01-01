# Secure Coding Policy

## 1. Purpose

This policy establishes mandatory secure coding requirements for all software
developed, maintained, or generated (human or AI) by the organization.

Its objective is to prevent security vulnerabilities, financial loss, data
corruption, regulatory non-compliance, and operational risk.

## 2. Scope

This policy applies to:
- All production and non-production systems
- All Node.js, JavaScript, and TypeScript code
- All APIs, background jobs, and internal services
- All AI-generated code without exception

## 3. Normative References

This policy is based on:
- ISO/IEC 27001:2022
- ISO/IEC 27002:2022 — Control 8.28 (Secure Coding)
- OWASP Top 10 (latest)
- OWASP ASVS Level 2 (minimum)

Where conflicts exist, the stricter requirement SHALL apply.

## 4. Mandatory Secure Coding Principles

The following principles are NON-NEGOTIABLE:

1. Least Privilege
2. Explicit Validation
3. Fail Securely
4. Defense in Depth
5. Immutability of Financial Records
6. Deterministic Behavior
7. Auditability by Design

## 5. Prohibited Practices

The following are STRICTLY FORBIDDEN:
- Hardcoded secrets, credentials, tokens, or passwords
- Use of `any` type in TypeScript
- Dynamic SQL string construction
- `SELECT *` queries
- Silent error swallowing
- Console logging in production
- Unbounded database queries
- Implicit type coercion
- Default credentials or fallback secrets

## 6. Dependency Management

1. Dependencies SHALL be declared explicitly.
2. `npm audit` (or equivalent) SHALL pass with zero critical or high issues.
3. Dependencies SHALL be pinned via lockfiles.
4. Unmaintained or deprecated packages SHALL NOT be used.

## 7. Database Security

1. All SQL SHALL use parameterized queries.
2. All multi-step database operations SHALL run inside transactions.
3. All SELECT queries SHALL include explicit column lists.
4. All SELECT queries SHALL include LIMIT clauses.
5. Financial data SHALL be immutable once committed.

## 8. Error Handling

1. Generic `Error` SHALL NOT be thrown.
2. Errors SHALL be typed and classified.
3. Errors SHALL include correlation identifiers.
4. Internal errors SHALL NOT leak implementation details.

## 9. Logging and Monitoring

1. Structured logging is mandatory.
2. Logging library SHALL be:
   - Primary: **pino**
   - Fallback (only if pino is not possible): **winston**
3. Console logging is prohibited.
4. Logs SHALL NOT contain secrets or PII.

## 10. Compliance

Violations of this policy block production deployment.

Exceptions require documented approval and expiry.
