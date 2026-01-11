# AI Lint Rules (Authoritative)

## Scope\
These rules apply to:\
- All AI-generated code\
- All AI-assisted code changes\
- All repositories consuming this policy

## Stop-Ship Rules (Non-Negotiable)

1\. AI MUST NOT introduce `any` types.\
2\. AI MUST NOT use `console.log`, `console.error`, or equivalents.\
3\. AI MUST generate or update tests for all new logic.\
4\. AI MUST comply with Logging_Standard.md and Database_Transaction_Standard.md.\
5\. AI MUST NOT disable or bypass lint, type, or test checks.

## Verification Rule (Critical)

If AI cannot verify that:\
- Tests exist\
- Lint rules pass\
- Type checking is strict

It MUST stop and request human review.

## Legacy Code Rule

Legacy code is permitted to exist.\
Any modification to legacy code MUST fully comply with these rules.

Violations are build-breaking.
