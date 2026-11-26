import { mkdirSync, writeFileSync } from "node:fs";

const line = "Exceeds expectations: gives all feedback via regenerate, then asks why I never learn.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
