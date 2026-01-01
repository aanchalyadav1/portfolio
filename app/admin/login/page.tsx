"use client";
import { supabase } from "@/lib/supabase";

export default function Login() {
  async function login() {
    await supabase.auth.signInWithOtp({
      email: "yadavaanchal2005@gmail.com",
    });
    alert("Check your email to login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        onClick={login}
        className="px-6 py-3 bg-blue-600 rounded"
      >
        Login as Admin
      </button>
    </div>
  );
}
