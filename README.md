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
SITES WITH 100 PAGES:
(10 runs)

┌───────┬────────────┬─────────┬──────────────┐
│ (idx) │    name    │ seconds │    speed     │
├───────┼────────────┼─────────┼──────────────┤
│   0   │    hugo    │  0.169  │  ▓░░░░░░░░░  │
│   1   │    lume    │  0.777  │  ▓▓▓▓▓░░░░░  │
│   2   │   jekyll   │  1.296  │  ▓▓▓▓▓▓▓▓░░  │
│   3   │  eleventy  │  1.668  │  ▓▓▓▓▓▓▓▓▓▓  │
└───────┴────────────┴─────────┴──────────────┘
```

### Medium sites (1000 pages)

```
SITES WITH 1000 PAGES:
(10 runs)

┌───────┬────────────┬─────────┬──────────────┐
│ (idx) │    name    │ seconds │    speed     │
├───────┼────────────┼─────────┼──────────────┤
│   0   │    hugo    │  0.867  │  ▓▓▓░░░░░░░  │
│   1   │    lume    │  1.634  │  ▓▓▓▓▓▓░░░░  │
│   2   │   jekyll   │  2.066  │  ▓▓▓▓▓▓▓▓░░  │
│   3   │  eleventy  │  2.582  │  ▓▓▓▓▓▓▓▓▓▓  │
└───────┴────────────┴─────────┴──────────────┘
```

### Big sites (10000 pages)

```
SITES WITH 10000 PAGES:
(10 runs)

┌───────┬────────────┬─────────┬──────────────┐
│ (idx) │    name    │ seconds │    speed     │
├───────┼────────────┼─────────┼──────────────┤
│   0   │    hugo    │ 10.519  │  ▓▓▓▓░░░░░░  │
│   1   │   jekyll   │  15.84  │  ▓▓▓▓▓▓░░░░  │
│   2   │    lume    │ 19.408  │  ▓▓▓▓▓▓▓░░░  │
│   3   │  eleventy  │ 27.011  │  ▓▓▓▓▓▓▓▓▓▓  │
└───────┴────────────┴─────────┴──────────────┘
```