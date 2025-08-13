import Image from "next/image";
import Link from "next/link";
import QrCircle from "../components/QrCircle";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

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
        <h2 className="hero-subtitle">Postdoctoral Research Fellow</h2>
        <p className="hero-desc">
          Passionate researcher exploring cutting-edge topics in biology, genetics,
          and computational analysis. Dedicated to bridging the gap between scientific
          research and real-world applications.
        </p>

        {/* QR */}
        <div className="bubbles single-bubble">
          <QrCircle value={qrValue} />
        </div>

        {/* Social icons (directly under QR for print + digital) */}
        <div className="social-links">
          <Link
            href="https://wa.me/947XXXXXXXX"
            target="_blank"
            aria-label="WhatsApp"
            className="social"
          >
            <FaWhatsapp size={32} />
            <span>WhatsApp</span>
          </Link>

          <Link
            href="https://instagram.com/yourusername"
            target="_blank"
            aria-label="Instagram"
            className="social"
          >
            <FaInstagram size={32} />
            <span>Instagram</span>
          </Link>

          <Link
            href="https://facebook.com/yourusername"
            target="_blank"
            aria-label="Facebook"
            className="social"
          >
            <FaFacebook size={32} />
            <span>Facebook</span>
          </Link>
        </div>
      </div>
    </section>
  );
}