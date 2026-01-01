# Logging Standard

## 1. Approved Libraries

Primary:
- pino

Fallback (only if pino is unavailable):
- winston

No other logging libraries are permitted.

## 2. Requirements

1. Logs SHALL be structured (JSON).
2. Logs SHALL include:
   - timestamp
   - level
   - service name
   - correlation ID
3. Logs SHALL NOT include:
   - secrets
   - tokens
   - passwords
   - raw payloads unless explicitly approved

## 3. Severity Levels

- DEBUG (non-production only)
- INFO
- WARN
- ERROR
- FATAL

## 4. Console Logging

`console.log`, `console.warn`, `console.error` are PROHIBITED.

