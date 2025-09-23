const fs = require("fs");
const path = require("path");

const EN_FILE = path.join(__dirname, "i18n", "en.json"); // English reference
const LANG_DIR = path.join(__dirname, "i18n"); // Folder with all language JSONs

// Load JSON
function loadJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err.message);
    return null;
  }
}

// Flatten nested objects into dot notation keys
function flatten(obj, parent = "", res = {}) {
  for (let key in obj) {
    const prop = parent ? `${parent}.${key}` : key;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      flatten(obj[key], prop, res);
    } else {
      res[prop] = obj[key];
    }
  }
  return res;
}

// Extract placeholders like {{doctor}}, {{step}}
function extractPlaceholders(str) {
  const regex = /{{\s*[\w]+\s*}}/g;
  return str.match(regex) || [];
}

// Check translations
function checkTranslation(enFlat, langFlat, langName) {
  const missingKeys = [];
  const placeholderIssues = [];
  const emptyTranslations = [];

  for (const key in enFlat) {
    if (!(key in langFlat)) {
      missingKeys.push(key);
    } else {
      const val = langFlat[key];
      if (!val || (typeof val === "string" && val.trim() === "")) {
        emptyTranslations.push(key);
      }
      const enPlaceholders = extractPlaceholders(enFlat[key]);
      const langPlaceholders = extractPlaceholders(val);
      const diff = enPlaceholders.filter((p) => !langPlaceholders.includes(p));
      if (diff.length > 0) {
        placeholderIssues.push({ key, missing: diff });
      }
    }
  }

  console.log(`\n=== ${langName.toUpperCase()} ===`);
  if (missingKeys.length) {
    console.log("❌ Missing keys:", missingKeys);
  } else {
    console.log("✅ No missing keys");
  }

  if (emptyTranslations.length) {
    console.log("⚠️ Empty translations:", emptyTranslations);
  } else {
    console.log("✅ No empty translations");
  }

  if (placeholderIssues.length) {
    console.log("⚠️ Placeholder issues:", placeholderIssues);
  } else {
    console.log("✅ No placeholder issues");
  }
}

// Main
const enJson = loadJson(EN_FILE);
if (!enJson) process.exit(1);
const enFlat = flatten(enJson);

// Read all other language files
fs.readdirSync(LANG_DIR).forEach((file) => {
  if (file === "en.json" || !file.endsWith(".json")) return;
  const langJson = loadJson(path.join(LANG_DIR, file));
  if (langJson)
    checkTranslation(enFlat, flatten(langJson), file.replace(".json", ""));
});
