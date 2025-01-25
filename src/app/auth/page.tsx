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
      <section className="w-[460px] flex flex-col px-2 relative">
        <div className="flex justify-center items-center absolute -top-14 left-1/2 -translate-x-1/2">
          <Image alt="logo" height={40} width={38} src="/icon.png" />
        </div>
        <h2 className="text-4xl font-bold text-center">Sign In</h2>
        <Button
          className="w-4/5 mx-auto mt-8 mb-2 rounded-lg text-lg font-bold py-6 flex gap-3 items-center border-dark_input_border  bg-black text-light  hover:bg-black hover:text-light border  hover:opacity-85"
          onClick={handleLoginWithGoogle}
        >
          <FcGoogle />
          Continue with google
        </Button>
        <p className="text-center text-sm mt-5 w-4/5 mx-auto text-light_label dark:text-dark_label">
          By clicking continue, you agree to our <br />
          <Link
            href="../"
            className="underline hover:text-light_paragraph dark:hover:text-dark_paragraph"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="../"
            className="underline hover:text-light_paragraph dark:hover:text-dark_paragraph"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
