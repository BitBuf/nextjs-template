/*
 * See /license-header.js to update this file header.
 *
 * Copyright (c) 2025 [YOUR NAME HERE]. All Rights Reserved.
 */

import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const schema = {
  NEXT_PUBLIC_CLIENT_APP_URL: z.url(),
};

export const clientEnv = createEnv({
  client: schema,
  runtimeEnv: {
    NEXT_PUBLIC_CLIENT_APP_URL: process.env.NEXT_PUBLIC_CLIENT_APP_URL,
  },
});
