import Image from "next/image";
import { LinkButton } from "@/components/LinkButton";

export default function Home() {
  return (
    <main className="min-h-dvh">
      <section className="max-w-[700px] mx-auto px-6 py-8 sm:py-12">
        {/* Unified Linktree-style container */}
        <div className="card p-6 sm:p-8 max-w-[620px] mx-auto">
            <div className="text-center">
            <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
              <Image src="/images/profile-picture.jpeg" alt="Profilbild" width={96} height={96} className="h-full w-full object-cover" />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-semibold tracking-tight">Sham Estate</h1>
            <p className="mt-2 text-ink font-semibold">Real Estate Beratung & Verkauf – schnell, transparent, persönlich.<br/>Dein Weg zur 1. Kapitalanlage Immobilie</p>
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
          </div>

          <div className="mt-6">
            <LinkButton
              variant="primary"
              href="https://www.sham-estate.com/leistungen"
              label="Kostenloses Erstgespräch buchen"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.14a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92z"/></svg>}
            />
            <div className="mt-3 grid gap-3">
            <LinkButton href="https://www.sham-estate.com/product-page/free-starter-guide-chancen-und-risiken-bei-immobilien" label="Free Starter Guide - Chancen und Risiken bei Immobilien" icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6.253v13"/><path d="M12 6.253C10.832 5.477 9.546 5 8.25 5H6A2.25 2.25 0 0 0 3.75 7.25v10.5A2.25 2.25 0 0 0 6 20h2.25c1.296 0 2.582.477 3.75 1.253"/><path d="M12 6.253c1.168-.776 2.454-1.253 3.75-1.253H18A2.25 2.25 0 0 1 20.25 7.25v10.5A2.25 2.25 0 0 1 18 20h-2.25c-1.296 0-2.582.477-3.75 1.253"/></svg>} />
            <LinkButton href="https://www.sham-estate.com/product-page/verhandlungstipps-bei-einem-immobilienkauf" label="Verhandlungstipps für Käufer - So bekommst du den besten Preis" icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6.253v13"/><path d="M12 6.253C10.832 5.477 9.546 5 8.25 5H6A2.25 2.25 0 0 0 3.75 7.25v10.5A2.25 2.25 0 0 0 6 20h2.25c1.296 0 2.582.477 3.75 1.253"/><path d="M12 6.253c1.168-.776 2.454-1.253 3.75-1.253H18A2.25 2.25 0 0 1 20.25 7.25v10.5A2.25 2.25 0 0 1 18 20h-2.25c-1.296 0-2.582.477-3.75 1.253"/></svg>} />
            <LinkButton href="https://www.sham-estate.com/product-page/immo-checkliste-für-erstkäufer" label="Immo-Checkliste für Erstkäufer (interaktiver Guide)" icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6.253v13"/><path d="M12 6.253C10.832 5.477 9.546 5 8.25 5H6A2.25 2.25 0 0 0 3.75 7.25v10.5A2.25 2.25 0 0 0 6 20h2.25c1.296 0 2.582.477 3.75 1.253"/><path d="M12 6.253c1.168-.776 2.454-1.253 3.75-1.253H18A2.25 2.25 0 0 1 20.25 7.25v10.5A2.25 2.25 0 0 1 18 20h-2.25c-1.296 0-2.582.477-3.75 1.253"/></svg>} />
            <LinkButton href="https://www.sham-estate.com" label="Zu meiner Website" icon={<Image src="/images/se-logo.png" alt="Sham Estate" width={36} height={36} className="object-contain" />} />
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
