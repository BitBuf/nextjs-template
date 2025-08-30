/*
 * See /license-header.js to update this file header.
 *
 * Copyright (c) 2025 [YOUR NAME HERE]. All Rights Reserved.
 */

import { fileURLToPath } from "node:url";
import createJiti from "jiti";

const jiti = createJiti(fileURLToPath(import.meta.url));

await jiti('./src/env/server.ts');
await jiti('./src/env/client.ts');

const nextConfig = {
  /* config options here */
};

export default nextConfig;
