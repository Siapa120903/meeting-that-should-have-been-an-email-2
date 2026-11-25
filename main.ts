// The Meeting That Should Have Been an Email — improved entry, round 2.
// One joke, one line, at most 200 characters, written to
// $MAKEFUN_OUTPUT_DIR/entry.txt. No network, no randomness: the same
// bytes come out of every run, so the grader's two runs always agree.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "The meeting to discuss the email ended with one decision: send an " +
  "email about the meeting. The email has now asked for a meeting.";

// The gate only passes a 1..200 character, non-blank, single line to the
// judge, so squeeze the joke to one line and check it before writing.
function oneLine(text: string): string {
  const line = text.split(/\s+/).join(" ").trim();
  if (line.length < 1 || line.length > 200) {
    throw new Error(`joke must be 1-200 characters, got ${line.length}`);
  }
  return line;
}

const target = join(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", "entry.txt");
mkdirSync(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", { recursive: true });
writeFileSync(target, oneLine(JOKE) + "\n", "utf8");
