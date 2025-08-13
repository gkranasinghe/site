import Image from "next/image";
import Link from "next/link";
import QrCircle from "../components/QrCircle";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function HomePage() {
  const qrValue = "https://site-ashen-omega.vercel.app/";

  return (
    <section className="hero hero--tight">
      {/* Left: photo */}
      <div className="hero-photo">
        <Image
          src="/profile.jpg"
          width={540}
          height={540}
          alt="Profile picture"
          className="hero-avatar"
          priority
        />
      </div>

      {/* Right: text + QR + socials */}
      <div className="hero-text">
        <h1 className="hero-name">Ruwini Wijesinghe</h1>
        <h2 className="hero-subtitle">
Director Marketing</h2>
        <h3 className="hero-subtitle">
Tourtub (Private) Limited</h3>
        <p className="hero-desc">
Accomplished, senior marketing professional with travel and retail marketing experience, encompassing strategic planning, qualitative & quantitative research, interactive marketing, creative development, media planning & buying, database/direct marketing, public relations, sales promotion, and visual merchandising, with the ability and skill set to provide creative, innovative, enthusiastic and forward-thinking leadership in a team environment. Focused on achieving continuous, improved business performance and best-in-class marketing.
        </p>

        <div className="qr-and-social">
          <div className="qr-card">
            <QrCircle value={qrValue} />
          </div>

          <div className="social-links">
            <Link href="https://wa.me/61455177988" target="_blank" aria-label="WhatsApp" className="social">
              <FaWhatsapp size={22} /><span>WhatsApp</span>
            </Link>
            <Link href="https://www.instagram.com/visit.sri.lanka/?igsh=MXYzenRxOXhhcWRmZA%3D%3D#" target="_blank" aria-label="Instagram" className="social">
              <FaInstagram size={22} /><span>Instagram</span>
            </Link>
            <Link href="https://facebook.com/TourtubCeylon" target="_blank" aria-label="Facebook" className="social">
              <FaFacebook size={22} /><span>Facebook</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
