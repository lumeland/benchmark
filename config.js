import Runner from "./lib/runner.js";

const runners = new Set();

runners.add(
  new Runner({
    name: "lume",
    build: ["deno", "run", "-A", "--unstable", "https://deno.land/x/lume@v0.13.2/cli.js"],
    content: "pages",
    output: "_site",
  }),
);

runners.add(
  new Runner({
    name: "eleventy",
    build: ["npm", "run", "build"],
    content: "pages",
    output: "_site",
  }),
);

runners.add(
  new Runner({
    name: "jekyll",
    build: ["bundle", "exec", "jekyll", "build"],
    content: "_pages",
    output: "_site",
  }),
);

runners.add(
  new Runner({
    name: "hugo",
    build: ["hugo", "-D"],
    content: "content/pages",
    output: "public",
  }),
);

export default runners;
