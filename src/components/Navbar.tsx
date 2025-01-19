"use client";
import Link from "next/link";
import Content from "./Content";
import ProfileDropdown from "./ProfileDropdown";
import useUser from "@/hooks/useUser";
import { Button } from "./ui/button";
import Image from "next/image";

const items = [
  {
    title: "Features",
    url: "#features",
  },
  {
    title: "Pricing",
    url: "#pricing",
  },
  {
    title: "FAQ",
    url: "#faq",
  },
];

export default function Navbar() {
  const { data: user, isFetching } = useUser();

  return (
    <nav className="bg-[light] shadow-md fixed top-0 w-screen bg-white dark:bg-[#121212]">
      <Content>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Image alt="logo" height={40} width={40} src="/icon.png" />
            <h2>LateControl</h2>
          </div>
          <div className="gap-5 sm:absolute sm:left-1/2 sm:-translate-x-1/2 hidden lg:flex">
            {items.map((item, index) => {
              return (
                <Link href={item.url} className="px-3 py-1" key={index}>
                  {item.title}
                </Link>
              );
            })}
          </div>
          <div className="flex gap-6 items-center">
            {isFetching ? (
              <></>
            ) : (
              <>
                {user?.id ? (
                  <Button className="bg-accent_custom hover:bg-accent_custom hover:opacity-75 rounded-lg">
                    <Link href={"/dashboard"} className="text-light">
                      Dashboard
                    </Link>
                  </Button>
                ) : (
                  <Button>
                    <Link href={"auth"}>Sign In</Link>
                  </Button>
                )}
              </>
            )}
            {user?.id && <ProfileDropdown />}
          </div>
        </div>
      </Content>
    </nav>
  );
}
