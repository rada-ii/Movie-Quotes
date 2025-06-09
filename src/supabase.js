import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://rnrznggmebsqbzphahmx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJucnpuZ2dtZWJzcWJ6cGhhaG14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0MjI3NDgsImV4cCI6MjA2NDk5ODc0OH0.wMQGPovGIsWZTWwUmqjBgaeYKfF7W3qsjgBLtHYXu70"
);

export default supabase;
