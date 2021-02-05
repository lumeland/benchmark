# Static site generators comparison

Benchmark for Lume static site generator and comparison with other generators.

## Instructions

The directory `ssg` contains all static site generators to test. Make sure you have all installed:

- Lume (Deno) [See instructions](https://lumeland.github.io/)
- Eleventy (Node) [See instructions](https://www.11ty.dev/)
- Jekyll (Ruby) [See instructions](https://jekyllrb.com/)
- Hugo (Go) [See instructions](https://gohugo.io/)

If you want to add or remove any generator, edit the `config.js`.

To test if all generators work fine, run `deno run --unstable -A cli.js --generate` to generate the content. Then you can go to the directory of every generator to test the build.

To run the benchmark: `deno run --unstable -A cli.js`. You can add some options:

- `--pages` To generate different number of pages. By default is `1000`.
- `--runs` How many times are run every build in order to have more accurate and stable results. By default is `10`.

## Latest results

### Small sites (100 pages)

```
deno run --unstable -A cli.js --pages 100

SITES WITH 100 PAGES:
(10 runs)

┌───────┬────────────┬─────────┬──────────────┐
│ (idx) │    name    │ seconds │   duration   │
├───────┼────────────┼─────────┼──────────────┤
│   0   │    hugo    │  0.384  │  ▓▓░░░░░░░░  │
│   1   │    lume    │  0.776  │  ▓▓▓▓░░░░░░  │
│   2   │   jekyll   │  1.491  │  ▓▓▓▓▓▓▓▓░░  │
│   3   │  eleventy  │  1.957  │  ▓▓▓▓▓▓▓▓▓▓  │
└───────┴────────────┴─────────┴──────────────┘
```

### Medium sites (1,000 pages)

```
deno run --unstable -A cli.js --pages 1000

SITES WITH 1000 PAGES:
(10 runs)

┌───────┬────────────┬─────────┬──────────────┐
│ (idx) │    name    │ seconds │   duration   │
├───────┼────────────┼─────────┼──────────────┤
│   0   │    hugo    │  0.998  │  ▓▓▓░░░░░░░  │
│   1   │    lume    │  1.686  │  ▓▓▓▓▓▓░░░░  │
│   2   │   jekyll   │  2.355  │  ▓▓▓▓▓▓▓▓░░  │
│   3   │  eleventy  │  2.889  │  ▓▓▓▓▓▓▓▓▓▓  │
└───────┴────────────┴─────────┴──────────────┘
```

### Big sites (10,000 pages)

```
deno run --unstable -A cli.js --pages 10000

SITES WITH 10000 PAGES:
(10 runs)

┌───────┬────────────┬─────────┬──────────────┐
│ (idx) │    name    │ seconds │   duration   │
├───────┼────────────┼─────────┼──────────────┤
│   0   │    hugo    │  7.636  │  ▓▓▓░░░░░░░  │
│   1   │   jekyll   │ 15.874  │  ▓▓▓▓▓▓▓░░░  │
│   2   │    lume    │ 18.208  │  ▓▓▓▓▓▓▓▓░░  │
│   3   │  eleventy  │ 23.482  │  ▓▓▓▓▓▓▓▓▓▓  │
└───────┴────────────┴─────────┴──────────────┘
```