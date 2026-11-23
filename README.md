# post-x-promote-make-your-own-bounty-01

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/lince00/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/lince00/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

Entry for make.fun's "Promote make.fun's make-your-own-bounty post on X" bounty ($250, top 50 paid, entries close 26 Nov 2026 18:35 UTC / 27 Nov 01:35 WIB, results ~11 Dec 2026).

## The entry is the post

One post of our own on X from [@XL_coin](https://x.com/XL_coin), quoting make.fun's make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646), with a photo of its own attached (`photo.png` in this repo) and make.fun, @makefunai and our play code in its text. Places go by the post's score at the deadline — replies + reposts + quotes, highest first.

`POST.json` holds the post's address. It currently holds a placeholder (`status/0`); the real URL goes in once Lince posts from @XL_coin, before bundling and submitting.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) reads `POST.json` from the repository root, checks it is a JSON object with a `url` string, and writes the same bytes to the output directory. That is all it does — the house reads the post itself from X and scores its counts.
