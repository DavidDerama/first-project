"use client";
import Link from "next/link";
import Content from "./Content";
import { usePathname } from "next/navigation";
import { GoogleDialog } from "./ContinueWithGoogle";
import ProfileDropdown from "./ProfileDropdown";
import useUser from "@/hooks/useUser";

export default function Navbar() {
  const pathname = usePathname();

  const { data: user, isFetching } = useUser();

  if (pathname !== "/auth") {
    return (
      <nav className="bg-black text-white">
        <Content>
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl">
              Landing Page
            </Link>
            {!isFetching && (
              <div className="flex gap-3 items-center">
                {!user?.id ? <GoogleDialog /> : <ProfileDropdown />}
              </div>
            )}
          </div>
        </Content>
      </nav>
    );
  }
}
