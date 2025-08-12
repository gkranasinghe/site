import Image from "next/image";
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
        <h2 className="hero-subtitle">Postdoctoral Research Fellow</h2>
        <p className="hero-desc">
          Passionate researcher exploring cutting-edge topics in biology, genetics,
          and computational analysis. Dedicated to bridging the gap between scientific
          research and real-world applications.
        </p>

        <div className="bubbles single-bubble">
          <QrCircle value={qrValue} />
        </div>
      </div>
    </section>
  );
}
