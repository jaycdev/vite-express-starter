import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    specPattern: ["**/*.cy.tsx", "**/*.cy.ts"]
  },

  e2e: {
    specPattern: ["**/*.e2e.tsx", "**/*.e2e.ts"]
  }
});
