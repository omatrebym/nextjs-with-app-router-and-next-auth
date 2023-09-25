"use client";

import { PktAlert, PktButton } from "@oslokommune/punkt-react";
import { signIn, useSession } from "next-auth/react";
import { RedirectType, redirect, useSearchParams } from "next/navigation";

export const LoggInnKnapp = () => {
  const { data: session } = useSession();
  const params = useSearchParams();

  const handleSignIn = async () => {
    await signIn("onelogin", {
      callbackUrl: "/",
      redirect: true,
    });
  };

  if (session) redirect("/", RedirectType.replace);

  const error = params.get("error");

  return (
    <div>
      <PktButton className="tw-mb-4" onClick={handleSignIn}>
        Logg inn
      </PktButton>
      {error && (
        <PktAlert skin="error" title="Feil ved innlogging">
          {error}
        </PktAlert>
      )}
    </div>
  );
};
