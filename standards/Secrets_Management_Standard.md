# Secrets Management Standard

## 1. Principles

Secrets SHALL NEVER be stored in code or repositories.

## 2. Approved Storage

Secrets MUST be stored in:
- Environment variables (secured)
- Dedicated secret managers

## 3. Mandatory Controls

1. No fallback secrets allowed.
2. Application MUST fail to start if secrets are missing.
3. Secrets SHALL be rotated periodically.
4. Access SHALL be least-privileged.

## 4. Detection

Repositories SHALL be scanned for secrets continuously.
