"use client";

import { PktButton } from "@oslokommune/punkt-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);

  return (
    <div>
      <h1 className="tw-text-h1">Noe har gått galt!</h1>
      <PktButton onClick={() => reset()}>Last inn siden på nytt</PktButton>
    </div>
  );
}
