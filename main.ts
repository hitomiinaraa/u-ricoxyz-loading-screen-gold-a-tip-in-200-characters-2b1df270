import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The tip is the entry: one line, 86 characters, no trailing newline.
const line =
  "Compiling… 47 warnings. Zero errors. The warnings are just the code flirting with you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
