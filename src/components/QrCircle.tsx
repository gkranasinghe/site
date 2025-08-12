"use client";
import QRCode from "react-qr-code";

export default function QrCircle({ value }: { value: string }) {
  return (
    <div className="bubble bubble-qr" aria-label="QR code">
      <div className="qr-inner">
        <QRCode value={value} size={96} style={{ width: "96px", height: "96px" }} />
      </div>
    </div>
  );
}
