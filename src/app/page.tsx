"use client";

import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function HomePage() {
  const qrUrl = "https://site-ashen-omega.vercel.app/";

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

      <hr className="flyer-rule" />

      {/* Bio */}
      <div className="flyer-bio">
        <p>
          Accomplished senior marketing professional with extensive travel and retail
          experience. Expertise encompasses strategic planning, qualitative &amp;
          quantitative research, interactive marketing, creative development, media
          planning &amp; buying, database/direct marketing, public relations, sales
          promotion, and visual merchandising.
        </p>
        <p>
          Proven ability to provide creative, innovative, and forward-thinking
          leadership in team environments. Focused on achieving continuous business
          performance improvement and best-in-class marketing execution.
        </p>
      </div>

      <hr className="flyer-rule" />

      {/* Tourtub logo + QR */}
      <div className="brandqr">
        <div className="card card-logo">
          <Image
            src="/tourtub-logo.jpg"
            alt="Tourtub logo"
            width={220}
            height={220}
            className="logo-img"
            priority
          />
        </div>

        <div className="card card-qr" aria-label="QR code to website">
          <div className="qr-wrap">
            <QRCode value={qrUrl} size={146} style={{ width: "146px", height: "146px" }} />
          </div>
        </div>
      </div>

      {/* Social pills */}
      <div className="social-pills">
        <Link
          href="https://wa.me/61455177988"
          target="_blank"
          className="pill"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="ico" />
          <span>+61 455 177 988</span>
        </Link>

        <Link
          href="https://instagram.com/visit.sri.lanka"
          target="_blank"
          className="pill"
          aria-label="Instagram"
        >
          <FaInstagram className="ico" />
          <span>@visit.sri.lanka</span>
        </Link>

        <Link
          href="https://facebook.com/TourtubCeylon"
          target="_blank"
          className="pill"
          aria-label="Facebook"
        >
          <FaFacebook className="ico" />
          <span>TourtubCeylon</span>
        </Link>
      </div>
    </section>
  );
}
