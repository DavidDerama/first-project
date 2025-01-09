"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { supabaseBrowser } from "@/lib/supabase/client";
import { FcGoogle } from "react-icons/fc";
import useUser from "@/hooks/useUser";

export function GoogleDialog() {
  const { data: user } = useUser();
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
    <Dialog>
      <DialogTrigger asChild>
        <Button>Sign In</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center mb-1">
            Sign In
          </DialogTitle>
        </DialogHeader>
        <Button
          className="rounded-full text-base font-bold py-5 flex gap-3 items-center"
          onClick={handleLoginWithGoogle}
        >
          <FcGoogle />
          Continue with google
        </Button>
      </DialogContent>
    </Dialog>
  );
}
