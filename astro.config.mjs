import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://sprightly-ganache-f94564.netlify.app/",
  integrations: [preact()]
});