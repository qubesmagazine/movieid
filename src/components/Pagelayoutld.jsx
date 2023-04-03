import React from "react";
import { Image } from "react-bootstrap";

export default function PagelayoutId({ src, alt, children, error }) {
  return (
    <div className="position-relative">
      <div className="posterBackDrop">
        <Image
          src={src}
          alt={alt}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div
        className="px-3 px-lg-4 py-4 mt-5"
        style={{ position: "relative", zIndex: 4 }}
      >
        {error && <p className="text-white mt-4 fs-5">{error.message}</p>}
        {children}
      </div>
    </div>
  );
}
