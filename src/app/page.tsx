import Image from "next/image";
import { LinkButton } from "@/components/LinkButton";
import { Badge } from "@/components/Badge";

export default function Home() {
  return (
    <main className="min-h-dvh">
      <section className="max-w-[700px] mx-auto px-6 py-8 sm:py-12">
        {/* Unified Linktree-style container */}
        <div className="card p-6 sm:p-8 max-w-[620px] mx-auto">
          <div className="text-center">
            <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full bg-black flex items-center justify-center">
              <Image src="/vercel.svg" alt="Logo" width={80} height={80} className="invert" />
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight">Sham Estate</h1>
            <p className="mt-2 text-ink-muted">Real Estate Beratung & Verkauf – schnell, transparent, persönlich.</p>
            {/* Socials inside the container */}
            <div className="mt-3 flex justify-center gap-5">
              <a href="https://www.instagram.com/sham_estate?igsh=cWRsM21jeDZpZmxr&utm_source=qr" target="_blank" rel="noopener" aria-label="Instagram" className="hover:opacity-80" title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--brand)" }}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61565148659371#" target="_blank" rel="noopener" aria-label="Facebook" className="hover:opacity-80" title="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--brand)" }}>
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.91h-2.3V22c4.78-.76 8.44-4.92 8.44-9.94Z"/>
                </svg>
              </a>
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
              <Badge>+3 Jahre Erfahrung</Badge>
              <Badge>Kundenzufriedenheit</Badge>
              <Badge>Authentizität</Badge>
            </div>
          </div>

          <div className="mt-6">
            <LinkButton
              variant="primary"
              href="https://www.sham-estate.com/leistungen"
              label="Kostenloses Erstgespräch buchen"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>}
            />
            <div className="mt-3 grid gap-3">
              <LinkButton href="https://www.sham-estate.com" label="Website" icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>} />
              <LinkButton href="https://www.sham-estate.com/category/all-products" label="E‑Book sichern" icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5V5.5A2.5 2.5 0 0 1 6.5 3H19a2 2 0 0 1 2 2v15H6.5A2.5 2.5 0 0 1 4 17.5"/><path d="M4 5.5A2.5 2.5 0 0 1 6.5 8H21"/></svg>} />
            </div>
          </div>
        </div>

        <footer className="mt-6 text-center text-sm text-ink-muted">
          <div className="flex justify-center gap-4">
            <a className="text-brand hover:underline" href="/impressum">Impressum</a>
            <a className="text-brand hover:underline" href="/datenschutz">Datenschutz</a>
          </div>
      </footer>
      </section>

    </main>
  );
}
