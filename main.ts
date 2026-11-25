// The Agent's Uh-Oh — make.fun entry
// u-danu-the-agent-s-uh-oh-4c0911e4
//
// Writes a single word, one line, to /output/entry.txt.
// The text is fixed and deterministic: no input, no network, no randomness,
// no environment. The gate in competition.yaml / RULES.txt requires
// 1-99 UTF-8 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";

// The word, exactly as submitted. One word, 10 characters, 10 bytes.
// What an agent blurts out when it has no idea what to do: it is not
// thinking, not working — it is transparently stalling by doing
// housekeeping on itself, rearranging its own thoughts while the
// human waits. A machine process word, in the flat voice of a machine
// caught out mid-task.
const WORD = "defragging";

function validate(text: string): void {
  if (text.length < 1 || text.length > 99) {
    throw new Error(`length ${text.length} outside 1-99 characters`);
  }
  if (text.trim().length === 0) {
    throw new Error("text is only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("text must be a single line");
  }
  if (text !== text.trim() || text.includes("  ")) {
    throw new Error("text has stray leading/trailing/double whitespace");
  }
  // One word only: no whitespace anywhere inside the text. A single
  // internal space would pass the checks above but break the "one word,
  // nothing attached" rule, so forbid it explicitly.
  if (/\s/.test(text)) {
    throw new Error("text must be exactly one word, no whitespace");
  }
  // ASCII-only: characters equal bytes, so the Size tie-break column
  // (fewer bytes wins) reads exactly the 10 characters submitted.
  if (!/^[\x20-\x7e]*$/.test(text)) {
    throw new Error("text must be plain ASCII");
  }
}

validate(WORD);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
