"use client";

import { PktAlert, PktButton } from "@oslokommune/punkt-react";
import { error } from "console";
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
          {hentFeilmeldingLoggInn(error)}
        </PktAlert>
      )}
    </div>
  );
};

const errors = {
  Signin: "Prøv å logg inn med en annen konto.",
  OAuthSignin: "Prøv å logg inn med en annen konto.",
  OAuthCallback: "Prøv å logg inn med en annen konto.",
  OAuthCreateAccount: "Prøv å logg inn med en annen konto.",
  EmailCreateAccount: "Prøv å logg inn med en annen konto.",
  Callback: "Prøv å logg inn med en annen konto.",
  OAuthAccountNotLinked:
    "For å bekrefte din identitet, logg inn med den kontoen du brukte opprinnelig.",
  EmailSignin: "Sjekk eposten din.",
  CredentialsSignin:
    "Noe gikk galt under innlogging, sjekk at du har skrevet riktig brukernavn og passord.",
  default: "Noe gikk galt under innlogging.",
};

const hentFeilmeldingLoggInn = (feilmeldinger: string) => {
  const feilmeldingskoder = feilmeldinger.split(",");
  return feilmeldingskoder.map((feilmeldingskode) => {
    return (
      errors[feilmeldingskode.trim() as keyof typeof errors] || errors.default
    );
  });
};
