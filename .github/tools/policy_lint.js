import fs from "fs";

const requiredFiles = [
  "secure-coding/Secure_Coding_Policy.md",
  "secure-coding/AI_Secure_Coding_Policy.md",
  "ai-enforcement/AI_Lint_Rules.md",
  "VERSION",
  "approvals/APPROVAL_LOG.md"
];

let failed = false;

for (const file of requiredFiles) {
  if (!fs.existsSync(file)) {
    console.error(`❌ Missing required policy file: ${file}`);
    failed = true;
  }
}

const aiRules = fs.readFileSync(
  "ai-enforcement/AI_Lint_Rules.md",
  "utf8"
);

const requiredSections = [
  "Stop-Ship",
  "Verification Rule",
  "Legacy"
];

for (const section of requiredSections) {
  if (!aiRules.includes(section)) {
    console.error(`❌ AI_Lint_Rules.md missing required section: ${section}`);
    failed = true;
  }
}

if (failed) {
  process.exit(1);
}

console.log("✅ Policy integrity checks passed");
