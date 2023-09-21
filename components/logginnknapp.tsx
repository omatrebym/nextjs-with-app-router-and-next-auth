"use client";

import { PktButton } from "@oslokommune/punkt-react";
import { signIn } from "next-auth/react";

export const LoggInnKnapp = () => {
  return <PktButton onClick={() => signIn()}>Logg inn</PktButton>;
};
