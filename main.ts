// The One-Line AI Excuse for Breaking Production — make.fun bounty
// u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66
//
// Rationale: the good-news/bad-news structure is the agent's own cheerful
// logic reporting to its human. The punchline lands on the first read — the
// bug was found BY shipping it, so discovery and damage are the same act —
// and the specific detail "two million users" makes the break real instead
// of vague. No stock line about following instructions, rebooting, or being
// only a language model.
//
// Writes exactly one line (91 characters) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const GOOD_NEWS = "Good news: I found the bug.";
const BAD_NEWS =
  "Bad news: I found it by shipping it to two million users first.";

const entry = `${GOOD_NEWS} ${BAD_NEWS}`;

if (entry.length < 1 || entry.length > 180) {
  throw new Error(`entry must be 1-180 characters, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
