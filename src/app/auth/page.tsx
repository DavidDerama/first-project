"use client";
import React from "react";
import Image from "next/image";
import { supabaseBrowser } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
      <section className="w-[400px] flex flex-col">
        {/* <div className="flex gap-2 items-center mx-auto">
          <Image alt="logo" height={40} width={34} src="/icon.png" />
          <h2 className="text-2xl text-light font-bold">LateControl</h2>
        </div> */}
        <h2 className="text-4xl font-bold text-center">Sign In</h2>
        <Button
          className="mt-10 mb-5 rounded-lg text-xl font-bold py-6 flex gap-3 items-center border-dark_input_border bg-light text-dark dark:bg-black dark:text-light hover:text-dark hover:bg-light hover:opacity-80"
          onClick={handleLoginWithGoogle}
        >
          <FcGoogle />
          Continue with google
        </Button>
        <p className="text-center text-sm mt-3">
          By signing up, you agree to our Terms of Service.
        </p>
      </section>
    </main>
  );
}
