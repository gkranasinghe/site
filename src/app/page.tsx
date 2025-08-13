import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function HomePage() {
  return (
    <section className="flyer">
      {/* Photo */}
      <div className="flyer-photo">
        <Image
          src="/profile.jpg"
          width={520}
          height={520}
          alt="Profile picture"
          className="flyer-avatar"
          priority
        />
      </div>

      {/* Headings */}
      <div className="flyer-headings">
        <h1 className="flyer-name">Ruwini Wijesinghe</h1>
        <h2 className="flyer-title">Director Marketing</h2>
        <h3 className="flyer-company">Tourtub (Private) Limited</h3>
      </div>

      {/* Divider */}
      <hr className="flyer-rule" />

      {/* Bio */}
      <div className="flyer-bio">
        <p>
          Accomplished senior marketing professional with extensive travel and retail experience.
          Expertise encompasses strategic planning, qualitative &amp; quantitative research,
          interactive marketing, creative development, media planning &amp; buying,
          database/direct marketing, public relations, sales promotion, and visual merchandising.
        </p>
        <p>
          Proven ability to provide creative, innovative, and forward-thinking leadership in team
          environments. Focused on achieving continuous business performance improvement and
          best-in-class marketing execution.
        </p>
      </div>

      {/* Divider */}
      <hr className="flyer-rule" />
{/* QR above socials (optional) */}
<div className="flyer-qr">
  <img src="/qr.png" alt="QR code" className="qr-img" />
</div>

      {/* Socials */}
      <div className="flyer-socials">
        <Link href="https://wa.me/947XXXXXXXX" target="_blank" className="social-btn" aria-label="WhatsApp">
          <FaWhatsapp size={22} /><span>WhatsApp</span>
        </Link>
        <Link href="https://instagram.com/yourusername" target="_blank" className="social-btn" aria-label="Instagram">
          <FaInstagram size={22} /><span>Instagram</span>
        </Link>
        <Link href="https://facebook.com/yourusername" target="_blank" className="social-btn" aria-label="Facebook">
          <FaFacebook size={22} /><span>Facebook</span>
        </Link>
      </div>
    </section>
  );
}
