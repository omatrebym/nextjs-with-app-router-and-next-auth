"use client";

import { PktHeader } from "@oslokommune/punkt-react";

export default function Header() {
  return (
    <PktHeader
      fixed
      user={{
        name: "Ola Matre",
        shortname: "OM",
        lastLoggedIn: new Date(),
      }}
      serviceName="Klagebehandling"
      canChangeRepresentation={false}
    />
  );
}
