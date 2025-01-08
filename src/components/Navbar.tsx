"use client";
import Link from "next/link";
import Content from "./Content";
import { usePathname } from "next/navigation";
import { GoogleDialog } from "./ContinueWithGoogle";
import ProfileDropdown from "./ProfileDropdown";
import useUser from "@/hooks/useUser";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  const { data: user, isFetching } = useUser();

  if (pathname !== "/auth") {
    return (
      <nav className="bg-[#121212] text-light">
        <Content>
          <div className="flex justify-between items-center">
            <Image alt="logo" height={40} width={40} src="/icon.png" />
            {!isFetching && (
              <div className="flex gap-4 items-center">
                <Link href={"/"} className="px-2">
                  Landing
                </Link>
                <Link href={"/"} className="px-2">
                  Pricing
                </Link>
                <Button className="bg-accent_custom hover:bg-accent_custom hover:opacity-75">
                  <Link href={"/dashboard"}>Dashboard</Link>
                </Button>
                {!user?.id ? <GoogleDialog /> : <ProfileDropdown />}
              </div>
            )}
          </div>
        </Content>
      </nav>
    );
  }
}
