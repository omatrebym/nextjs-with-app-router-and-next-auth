"use client";

import { PktHeader } from "@oslokommune/punkt-react";
import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session, status } = useSession();

  return (
    <PktHeader
      fixed
      user={
        status === "authenticated"
          ? {
              name: session?.user?.name ?? "Ikke innlogget",
              shortname:
                session?.user?.name
                  ?.split(" ")
                  .reduce((prev, curr) => prev + curr[0])
                  .toLocaleUpperCase() ?? "NN",
            }
          : undefined
      }
      serviceName="Klagebehandling"
      canChangeRepresentation={false}
    />
  );
}
