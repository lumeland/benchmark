import { join } from "https://deno.land/std@0.83.0/path/mod.ts";
import generate from "./generator.js";

export default class Runner {
  constructor(options = {}) {
    this.options = options;
    this.cwd = join(Deno.cwd(), "ssg", this.options.name);
  }

  get name() {
    return this.options.name;
  }

  async generate(num) {
    const path = join(this.cwd, this.options.content);
    return generate(path, num);
  }

  async build() {
    return this.runCommand(this.options.build, this.cwd);
  }

  async clear() {
    const path = join(this.cwd, this.options.output);

    try {
      return await Deno.remove(path, { recursive: true });
    } catch (err) {}
  }

  async runCommand(cmd, cwd) {
    const process = Deno.run({
      cmd,
      cwd,
      stdout: "null",
    });

    await process.status();
    process.close();
  }
}
