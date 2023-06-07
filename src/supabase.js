import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://tdhowsyvcexqsuzujjci.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkaG93c3l2Y2V4cXN1enVqamNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU1ODg0NzQsImV4cCI6MjAwMTE2NDQ3NH0.lj2DbbdXjh4v8pjmECwVe5MsI7dTdjs-oG7KC_abbEY"
);

console.log(supabase);
// const supabaseUrl = "https://tdhowsyvcexqsuzujjci.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkaG93c3l2Y2V4cXN1enVqamNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU1ODg0NzQsImV4cCI6MjAwMTE2NDQ3NH0.lj2DbbdXjh4v8pjmECwVe5MsI7dTdjs-oG7KC_abbEY";

export default supabase;
