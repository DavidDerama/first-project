"use client";
import React from "react";
import Image from "next/image";
import { supabaseBrowser } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function page() {
  function handleLoginWithGoogle() {
    const supabase = supabaseBrowser();
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: location.origin + "/auth/callback",
      },
    });
  }
  return (
    <main className="flex w-screen h-screen justify-center items-center bg-white dark:bg-dark">
      <section className="w-[460px] flex flex-col px-2">
        <h2 className="text-4xl font-bold text-center">Sign In</h2>
        <Button
          className="w-4/5 mx-auto mt-10 mb-7 rounded-lg text-xl font-bold py-6 flex gap-3 items-center border-dark_input_border bg-light text-dark dark:bg-black dark:text-light hover:text-dark hover:bg-light hover:opacity-80"
          onClick={handleLoginWithGoogle}
        >
          <FcGoogle />
          Continue with google
        </Button>
        <div className="flex gap-2 items-center mx-auto">
          <Image alt="logo" height={40} width={24} src="/icon.png" />
          <h2 className="text-base text-light font-bold">LateControl</h2>
        </div>
        <p className="text-center text-sm mt-5 w-4/5 mx-auto text-light_label dark:text-dark_label">
          By clicking continue, you agree to our{" "}
          <Link href="../" className="hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="../" className="hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
