import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "p36jw1qe",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});