import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";

// I did this as a jpeg so it could go into the PDF
export function Logo() {
  return <StaticImage
    src="./sierra_lighting-full_logo-black-fs8.png"
    alt="Sierra Lighting Logo"
    className="plan__logo"
  />
}

export default Logo;