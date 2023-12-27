import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav>
        <Link key={"invoices"} href={"/dashboard/invoices"}>
          Profile
        </Link>
        <Link key={"sidenav"} href={"/dashboard/sidenav"}>
          sidenave
        </Link>
        {/* <Link>My Docs</Link> */}
      </nav>
      {children}
    </section>
  );
}
