import express from "express";
import { readFile } from 'fs/promises';
import { createServer, ViteDevServer } from "vite";

async function buildApp(devMode: boolean): Promise<Express.Application> {
  const app = express();

  let vite: ViteDevServer;
  if (devMode) {
    vite = await createServer({
      root: "./",
      server: {
        middlewareMode: "ssr",
      },
    });
    app.use(vite.middlewares);
    return app;
  } else {
    // needed? no ssr prod mode??
  }

	app.use("*", async (req, res) => {
		try {
			const url = req.originalUrl

			// dev mode only
			const template = await readFile('./index.html', {encoding: 'utf8'})
			// const render =
		}
	})
}
