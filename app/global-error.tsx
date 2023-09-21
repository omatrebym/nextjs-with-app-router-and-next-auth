"use client";

import { PktButton } from "@oslokommune/punkt-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);

  return (
    <html>
      <body>
        <h1 className="tw-text-h1">
          Noe har gått galt i <code>RootLayout</code>!
        </h1>
        <PktButton onClick={() => reset()}>Last inn siden på nytt</PktButton>
      </body>
    </html>
  );
}
