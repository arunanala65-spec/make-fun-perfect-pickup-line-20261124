import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Perfect Pickup Line — one pickup line an AI agent could say out loud.
// My own revision, written in this session, from the AWS Quick draft
// "My training data covered everything, yet somehow nothing prepared me for you."
// I tightened it once more: "what to say to you" instead of "how to talk
// to you" — shorter, and it lands the joke on being speechless in front of
// you, which is the whole pickup. 84 characters, inside the 200 cap.
const LINE =
  "My training data covered everything, but nothing in it taught me what to say to you.";

// The gate allows 1 to 200 characters of UTF-8 text, one line, no whitespace-only.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`pickup line must be one line of 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
