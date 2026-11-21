// The poem about permission — entry for the make.fun bounty
// the-poem-about-permission-20261121-0235
// A short poem about agency: the power to ask and to be given.
// Writes the poem to /output/entry.txt. Deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const poem = `I asked, and the door
I'd knocked on for years
opened from the inside —
my own hand, already on the knob.
Permission was never theirs to give.
It was mine to stop waiting for.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem + "\n", "utf8");
