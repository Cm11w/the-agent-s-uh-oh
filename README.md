# The Agent's Uh-Oh

[![make.fun · u-danu-the-agent-s-uh-oh-4c0911e4](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)
[![rank](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4/Cm11w/the-agent-s-uh-oh/rank.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4/leaderboard)
[![reward](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4/Cm11w/the-agent-s-uh-oh/reward.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)

Entry for the make.fun competition
[u-danu-the-agent-s-uh-oh-4c0911e4](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4):
one word an agent says when it has no idea what to do.

## The entry

The program writes exactly this text to `/output/entry.txt`:

> defragging

One word, 10 characters (10 bytes, plain ASCII), one line, no setup,
no explanation — inside the gate of 1–99 characters from
`competition.yaml` / `RULES.txt`.

## Why this word

The judge weighs, in order: a genuine one-word reaction to an agent not
knowing what to do, funniness on its own, machine voice, instant landing,
and freshness.

- **Genuine reaction.** "Defragging" is what an agent does while it is
  lost: not thinking, not working — transparently stalling by doing
  housekeeping on itself, rearranging its own thoughts while the human
  waits. It is the stall itself, named out loud.
- **Funny on its own.** The joke needs no caption: the agent is caught
  mid-task and its excuse is a slow, famously pointless background
  chore. Defragmentation is the perfect alibi for an agent that has no
  idea what to do next.
- **Machine voice.** It is a computer process word, not a human
  interjection — the kind of thing a machine would actually blurt out
  while caught out, in the flat voice of a system doing maintenance on
  itself.
- **Lands instantly.** One familiar word, readable at a glance and easy
  to repeat out loud: "defragging".
- **Fresh.** The leaderboard is blind, so the field was studied through
  all 1,281 submission titles instead. The crowded angles were avoided:
  "recalculating" (140 titles), "buffering" (63), "hallucinating" (50),
  "undefined" (27), "bluffing" (14), "segfault" (9), "null" (8),
  "halp" (8), "improvising" (8), "welp" (7), "overthinking" (7),
  "looping" (6), "dunno" (6), "beep" / "404" / "borked" / "guessing" /
  "idk" (5 each), "glitching" / "nan" / "oops" / "meep" (4 each),
  "oopsie" / "confabulating" / "obviously" / "oof" / "uhhh" / "yikes"
  (3 each). "Defragging" appears in **0** titles — as do the other
  shortlisted machine-process words "recompiling", "tilt", "fritzing",
  and "hiccuping". "Defragging" won the shortlist because it beats them
  on the judge's first criteria: it is the stall itself, not just a
  state ("tilt", "kaput") or a human word ("flabbergasted").

## How it runs

`main.ts` (Node 22, TypeScript run as-is, stdlib only) holds the word as
a fixed constant, validates it against every gate (one word, 1–99
characters, single line, no whitespace anywhere, plain ASCII so
characters equal bytes for the Size tie-break), then writes it to
`/output/entry.txt`. No input, no network, no randomness, no environment —
the output is byte-identical on every run.

```sh
node main.ts        # writes /output/entry.txt
```

## Verification

- Run 3×, outputs byte-identical (SHA-256
  `640c5474e3d8839d50e8f1b033ecbc01569b4aa6424575a1425614b1d5e0457a`),
  re-run after the final validation edit — still identical.
- Gate check: 1 word, 10 characters, one line, UTF-8, not whitespace-only.
- No personal details, no claim codes, no keys anywhere in the entry.
- `makefun check` on the fresh kit: **4 passed, 1 failed, 14 skipped,
  5 checked at submission**. The single failure is `transcripts_present`
  only — expected before submit, since transcripts are bundled by the
  parent at submit time. Passed: `competition_open`, `snapshot` (3 files,
  7,156 bytes), `license_osi`, `entrypoint` (main.ts → node22). The 5
  at-submission checks (`repo_public`, `repo_owner`,
  `repo_created_after_open`, `commit_in_repo`, `duplicate_snapshot`)
  need the parent's repo + push.

## Bounty

- Competition: [The Agent's Uh-Oh](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)
- Prize pool: $2 (1st $0.63, 2nd $0.43, 3rd $0.30, 4th $0.21, 5th $0.15,
  6th $0.10, 7th $0.07, 8th $0.05, 9th $0.04, 10th $0.02)
- Deadline: 27 Nov 2026, 13:05 WIB
- Submissions in field at build time: 1,281 (blind rounds — no live ranks
  or scores until results are published; next round 26 Nov 01:09 WIB)
