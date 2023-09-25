"use client";

import { PktHeader } from "@oslokommune/punkt-react";
import { signOut, useSession } from "next-auth/react";

export default function Header() {
  const { data: session, status } = useSession();

  return (
    <PktHeader
      fixed
      user={
        status === "authenticated"
          ? {
              name: session?.user?.name ?? "Ikke innlogget",
              shortname: forkortNavn(session?.user?.name) ?? "NN",
            }
          : undefined
      }
      serviceName="Klagebehandling"
      canChangeRepresentation={false}
      logOut={() => signOut()}
    />
  );
}

function forkortNavn(navn?: string | null) {
  if (!navn) return "NN";
  const navnArray = navn.split(" ");
  if (navnArray.length === 1) return navnArray[0][0];
  const fornavn = navnArray[0];
  const etternavn = navnArray[navnArray.length - 1];
  return fornavn[0] + etternavn[0];
}
