/*
 * See /license-header.js to update this file header.
 *
 * Copyright (c) 2025 [YOUR NAME HERE]. All Rights Reserved.
 */

import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const schema = {
  APP_URL: z.url(),
};

export const serverEnv = createEnv({
  server: schema,
  experimental__runtimeEnv: process.env,
});
