import { parse } from "https://deno.land/std@0.83.0/flags/mod.ts";
import {
  bench,
  runBenchmarks,
} from "https://deno.land/std@0.83.0/testing/bench.ts";
import runners from "./config.js";

async function cli(args) {
  const options = parse(args, {
    default: {
      pages: 1000,
      runs: 10,
    },
  });

  const command = options._[0];

  //Only build
  if (command === "build") {
    for (const runner of runners) {
      console.log("Building", runner.name);
      await runner.clear();
      await runner.build();
    }
    return;
  }

  //Only generate
  if (command === "generate") {
    for (const runner of runners) {
      console.log("Generating", runner.name);
      await runner.generate(options.pages);
    }
    return;
  }

  //Bench
  for (const runner of runners) {
    await runner.generate(options.pages);

    bench({
      name: runner.name,
      runs: options.runs,
      async func(b) {
        await runner.clear();
        b.start();
        await runner.build();
        b.stop();
      },
    });
  }

  const results = await runBenchmarks();

  console.log("");
  console.log(`SITES WITH ${options.pages} PAGES:`);
  console.log(`(${options.runs} runs)`);
  console.log("");

  const final = results.results.map((res) => ({
    name: res.name,
    seconds: Math.round(res.measuredRunsAvgMs) / 1000,
  }));

  final.sort((a, b) => a.seconds - b.seconds);

  const slower = final[final.length - 1].seconds;

  final.forEach((data) => {
    const percentage = Math.round((data.seconds / slower) * 10);
    data.speed = "▓".repeat(percentage) + "░".repeat(10 - percentage);
  })

  console.table(final);
  console.log("");
}

if (import.meta.main) {
  cli(Deno.args);
}
