import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

export default nextConfig;

// Enable Cloudflare bindings (env, secrets) during `next dev`.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
void initOpenNextCloudflareForDev();
