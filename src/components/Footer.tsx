import React from "react";
import Content from "./Content";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-light border-t-2 border-[#3c3c3c] py-4">
      <Content>
        <div className="flex flex-col sm:flex-row sm:gap-0 gap-3 sm:relative justify-between">
          <p className="text-lg font-bold">© LateControl</p>
          <ul className="flex gap-5 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
            <li>
              <Link href="/">Contact</Link>
            </li>
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Terms of Service</Link>
            </li>
          </ul>
          <p>Made By CodeMeThat</p>
        </div>
      </Content>
    </footer>
  );
}
