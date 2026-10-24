// Old URL — permanently moved. Static export can't send a 301, so this page
// redirects via meta refresh and points its canonical at the new URL.
const NEW_PATH = "/best-property-dealer-in-rohini-sector-16/";

export const metadata = {
  title: "Best Property Dealer in Rohini Sector 16 | Baba Associates",
  alternates: {
    canonical: NEW_PATH,
  },
};

export default function OldSector16Redirect() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${NEW_PATH}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(NEW_PATH)});`,
        }}
      />
      <section className="px-6 pb-20 pt-40 text-center">
        <p>
          This page has moved to{" "}
          <a href={NEW_PATH} className="underline">
            Best Property Dealer in Rohini Sector 16
          </a>
          .
        </p>
      </section>
    </>
  );
}
