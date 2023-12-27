import Image from "next/image";
import Link from "next/link";
import Sidenav from "./sidenav/page";

export default function Home() {
  return (
    <div>
      <nav>
        <Sidenav />
      </nav>
    </div>
  );
}
