/*
 * See /license-header.js to update this file header.
 *
 * Copyright (c) 2025 [YOUR NAME HERE]. All Rights Reserved.
 */

const { execSync } = require("child_process");

function run() {
    try {
        // Get the signature status code of the latest commit
        const output = execSync("git log -1 --pretty=%G? HEAD", {
            encoding: "utf-8",
        }).trim();

        // Allow only Good (G) or Good/Unknown validity (U)
        if (output !== "G" && output !== "U") {
            console.error(
                "❌ Commit must be signed! Found status:",
                output
            );
            process.exit(1);
        }

        console.log("✅ Commit is signed:", output);
    } catch (err) {
        console.error("❌ Failed to check commit signature:", err.message);
        process.exit(1);
    }
}

run();