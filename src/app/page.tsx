import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import QrCircle from "../components/QrCircle";

export default function HomePage() {
  const qrValue = process.env.NEXT_PUBLIC_QR_VALUE ?? "http://localhost:3000/links";

  return (
    <section className="hero">
      <div className="hero-photo">
        <Image
          src="/profile.jpg"
          width={520}
          height={520}
          alt="Profile picture"
          className="hero-avatar"
          priority
        />
      </div>

      <div className="hero-text">
        <h1 className="hero-name">Ruwini Wijesinghe</h1>
        <h2 className="hero-subtitle">Director Marketing</h2>
        <p className="hero-desc">
Accomplished, senior marketing professional with travel and retail marketing experience, encompassing strategic planning, qualitative & quantitative research, interactive marketing, creative development, media planning & buying, database/direct marketing, public relations, sales promotion, and visual merchandising, with the ability and skill set to provide creative, innovative, enthusiastic and forward-thinking leadership in a team environment. Focused on achieving continuous, improved business performance and best-in-class marketing.
        </p>

        <div className="bubbles single-bubble">
          <QrCircle value={qrValue} />
        </div>
                {/* Social links */}
        <div className="social-links">
          <Link href="https://wa.me/947XXXXXXXX" target="_blank" aria-label="WhatsApp">
            <FaWhatsapp size={32} />
          </Link>
          <Link href="https://instagram.com/yourusername" target="_blank" aria-label="Instagram">
            <FaInstagram size={32} />
          </Link>
          <Link href="https://facebook.com/yourusername" target="_blank" aria-label="Facebook">
            <FaFacebook size={32} />
          </Link>
        </div>
      </div>
    </section>
  );
}
