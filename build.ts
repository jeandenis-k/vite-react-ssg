import { readdir, readFile, writeFile } from "fs/promises";
import { resolve } from "path";

async function main() {
  const template = await readFile("./dist/static/index.html", {
    encoding: "utf8",
  });
  const { render } = require("./dist/server/entry-ssg.js");

  for (const file of await readdir("./src/pages")) {
    const name = file.replace(/\.tsx$/, "").toLowerCase();
    const url = name === "home" ? "/" : `/${name}`;

    await writeFile(
      resolve(__dirname, `dist/static${url === "/" ? "/index" : url}.html`),
      template.replace("<!--app-html-->", render(url))
    );
  }
}

main();
