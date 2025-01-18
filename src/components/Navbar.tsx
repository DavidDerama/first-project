"use client";
import Link from "next/link";
import Content from "./Content";
import { usePathname } from "next/navigation";
import { GoogleDialog } from "./GoogleDialog";
import ProfileDropdown from "./ProfileDropdown";
import useUser from "@/hooks/useUser";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  const { data: user, isFetching } = useUser();

  if (pathname !== "/auth") {
    return (
      <nav className="bg-[light] text-light shadow-md fixed top-0 w-screen bg-white">
        <Content>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-dark font-bold text-xl">
              <Image alt="logo" height={40} width={40} src="/icon.png" />
              <h2>LateControl</h2>
            </div>
            {!isFetching && (
              <div className="flex gap-6 items-center">
                <Link href={"/"} className="px-2 text-dark">
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
