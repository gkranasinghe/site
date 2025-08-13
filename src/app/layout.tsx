import "./globals.css";
import { Poppins } from "next/font/google";
import Link from "next/link";

export const metadata = {
  title: "Your Name",
  description: "Profile + Links",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header className="topbar">
          <div className="brand">
            <span className="brand-dot" />
            <div className="brand-text">
              <strong>Ruwini Wijesinghe</strong>
              <span className="brand-sub">Director Marketing</span>
            </div>
          </div>
          <nav className="topnav">
            <Link className="nav-btn" href="#">Resume</Link>
            <Link className="nav-btn" href="#">Research</Link>
            <Link className="nav-btn" href="#">Outreach</Link>
            <Link className="nav-btn" href="/links">Personal</Link>
          </nav>
        </header>
        <main className="page">{children}</main>
      </body>
    </html>
  );
}
