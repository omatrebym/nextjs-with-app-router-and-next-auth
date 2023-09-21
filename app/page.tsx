import { LoggInnKnapp } from "@/components/logginnknapp";

export default function Home() {
  return (
    <div>
      <h1 className="tw-text-h1">Tester NextJS</h1>
      <h2 className="tw-text-h2">Enkel tittel</h2>
      <h3 className="tw-text-h3">Enkel undertittel</h3>
      <p>Et eller annet...</p>
      <LoggInnKnapp />
    </div>
  );
}
