"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function HomePage() {
  return (
    <section className="flyer">
      {/* Profile photo (gold border) */}
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

      {/* Social pills — directly under the photo */}
      <div className="social-pills social-pills--under-photo">
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

      {/* Headings */}
      <div className="flyer-headings">
        <h1 className="flyer-name">Ruwini Wijesinghe</h1>
        <h2 className="flyer-title">Senior Travel Consultant</h2>
        <h3 className="flyer-company">Tourtub (Private) Limited</h3>
      </div>

      <hr className="flyer-rule" />

      {/* Bio (tailored for Senior Travel Consultant) */}
      <div className="flyer-bio">
        <p>
          Experienced Senior Travel Consultant with a proven track record in designing and
          delivering exceptional travel experiences. Skilled in itinerary planning, destination
          research, client relationship management, and coordinating complex travel arrangements
          with precision and attention to detail.
        </p>
        <p>
          Adept at providing personalized recommendations, securing competitive travel deals, and
          ensuring seamless end-to-end service. Recognized for combining in-depth destination
          knowledge with strong communication skills to exceed client expectations and build
          long-term loyalty.
        </p>
      </div>

      <hr className="flyer-rule" />

      {/* Centered Tourtub logo (gold border) */}
      <div className="brand-logo">
        <div className="card card-logo">
          <Image
            src="/tourtub-logo.jpg"  // ensure this file exists in /public
            alt="Tourtub logo"
            width={220}
            height={220}
            className="logo-img"
            priority
          />
        </div>
      </div>
    </section>
  );
}
