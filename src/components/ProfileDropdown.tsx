"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";

import useUser from "@/hooks/useUser";
import { supabaseBrowser } from "@/lib/supabase/client";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function ProfileDropdown() {
  const { data: user } = useUser();
  const queryClient = useQueryClient();
  const router = useRouter();

  async function signOut() {
    const supabase = supabaseBrowser();
    await supabase.auth.signOut();
    router.refresh();
    queryClient.clear();
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {user?.img_url ? (
          <Image
            alt="User Image"
            src={`https://lh3.googleusercontent.com/a/ACg8ocIFY4MS96hiY9ZOEGQFGVFNdpOqvpY4DTrRNIOhcUu1eDoZ8g=s96-c`}
            width={35}
            height={35}
            className="rounded-full border-2 border-transparent hover:border-white"
          />
        ) : (
          <Button className="bg-transparent">{user?.display_name}</Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={signOut}>Sign Out</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
