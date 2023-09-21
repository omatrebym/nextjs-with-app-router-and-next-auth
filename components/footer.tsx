"use client";

import { PktFooterSimple } from "@oslokommune/punkt-react";

export default function Footer() {
  return (
    <PktFooterSimple
      links={[
        {
          href: "https://inntauing.bymoslo.no/",
          text: "Inntauing",
        },
      ]}
    />
  );
}
