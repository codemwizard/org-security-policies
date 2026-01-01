# Database Transaction Standard

## 1. Scope

Applies to all database interactions.

## 2. Rules

1. Multi-step operations SHALL use BEGIN/COMMIT/ROLLBACK.
2. Partial success is prohibited.
3. Failures SHALL rollback all changes.
4. Isolation level SHALL be explicitly defined where applicable.

## 3. Financial Systems

Financial writes are immutable.
Corrections are additive, never destructive.
