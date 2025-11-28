import { MouseEvent, useEffect, useState } from 'react';
import { Shield, TrendingUp, CheckCircle, ArrowRight, Zap, Scale, FileCheck, Target, Clock, Award, BookCheck, X, Settings } from 'lucide-react';

type Route = 'home' | 'impressum' | 'datenschutz' | 'cookies';

type CookieConsent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
};

const CONSENT_STORAGE_KEY = 'cookie-consent';
const CONSENT_VERSION = '1.0';

const getPathname = () => (typeof window !== 'undefined' ? window.location.pathname : '/');

const parseRoute = (pathname: string): Route => {
  const lower = pathname.toLowerCase();
  if (lower.startsWith('/impressum')) return 'impressum';
  if (lower.startsWith('/datenschutz')) return 'datenschutz';
  if (lower.startsWith('/cookies')) return 'cookies';
  return 'home';
};

function useRoute() {
  const [route, setRoute] = useState<Route>(() => parseRoute(getPathname()));

  useEffect(() => {
    const handlePopState = () => setRoute(parseRoute(getPathname()));
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (pathname: string) => {
    if (pathname !== getPathname()) {
      window.history.pushState({}, '', pathname);
    }
    setRoute(parseRoute(pathname));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { route, navigate };
}

function App() {
  const { route, navigate } = useRoute();
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.version === CONSENT_VERSION) {
          setConsent(parsed.consent);
          setShowBanner(false);
        } else {
          setShowBanner(true);
        }
      } catch {
        setShowBanner(true);
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  const saveConsent = (newConsent: CookieConsent) => {
    localStorage.setItem(
      CONSENT_STORAGE_KEY,
      JSON.stringify({ version: CONSENT_VERSION, consent: newConsent })
    );
    setConsent(newConsent);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    });
  };

  const acceptNecessary = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    });
  };

  const handleNav = (path: string) => (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    event.preventDefault();
    navigate(path);
  };

  const header = (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Shield className="w-8 h-8 text-sky-700" />
          <a
            href="/"
            onClick={handleNav('/')}
            className="text-xl font-bold text-slate-900 hover:text-sky-800 transition-colors duration-200"
          >
            ARC Assessment
          </a>
        </div>
        <a
          href="https://tidycal.com/antoniovonstrachwitz/arc-assessment-erstgespraech"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-lg font-medium transition-colors duration-200"
        >
          Erstgespräch vereinbaren
        </a>
      </nav>
    </header>
  );

  const footer = (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-300 text-xl mb-2">
          <strong className="text-white">Strachwitz Consulting</strong>
        </p>
        <p className="text-slate-400 text-lg mb-6">
          Wir machen Innovation sicher.
        </p>
        <div className="text-slate-400 text-sm">
          <p>Ihr Partner für nachhaltiges Wachstum im Mittelstand</p>
          <p>António Freiherr von Strachwitz</p>
          <p>Wüstenfelden 3</p>
          <p>97355 Castell</p>
          <p>Deutschland</p>
        </div>
        <div className="mt-6 flex justify-center space-x-6">
          <a
            href="/Impressum"
            onClick={handleNav('/Impressum')}
            className="text-slate-400 hover:text-white transition-colors duration-200"
          >
            Impressum
          </a>
          <a
            href="/Datenschutz"
            onClick={handleNav('/Datenschutz')}
            className="text-slate-400 hover:text-white transition-colors duration-200"
          >
            Datenschutz
          </a>
          <a
            href="/Cookies"
            onClick={handleNav('/Cookies')}
            className="text-slate-400 hover:text-white transition-colors duration-200"
          >
            Cookies
          </a>
          <button
            type="button"
            onClick={() => setShowSettings(true)}
            className="text-slate-400 hover:text-white transition-colors duration-200"
          >
            Cookie-Einstellungen
          </button>
        </div>
      </div>
    </footer>
  );

  const cookieBanner = showBanner && (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-slate-200 shadow-2xl z-50 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Cookie-Einstellungen</h3>
            <p className="text-slate-700 leading-relaxed">
              Wir verwenden Cookies, um Ihnen ein optimales Website-Erlebnis zu bieten. Technisch notwendige Cookies sind erforderlich für den Betrieb der Website.
              Statistik-, Marketing- und funktionale Cookies helfen uns, unser Angebot zu verbessern. Sie können Ihre Einwilligung jederzeit anpassen oder widerrufen.
              Weitere Informationen finden Sie in unserer{' '}
              <a
                href="/Datenschutz"
                onClick={handleNav('/Datenschutz')}
                className="text-sky-700 hover:text-sky-900 font-semibold underline"
              >
                Datenschutzerklärung
              </a>
              {' '}und{' '}
              <a
                href="/Cookies"
                onClick={handleNav('/Cookies')}
                className="text-sky-700 hover:text-sky-900 font-semibold underline"
              >
                Cookie-Richtlinie
              </a>
              .
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              type="button"
              onClick={() => setShowSettings(true)}
              className="px-6 py-3 bg-white border-2 border-slate-900 text-slate-900 rounded-lg font-semibold hover:bg-slate-50 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Settings className="w-4 h-4" />
              Einstellungen
            </button>
            <button
              type="button"
              onClick={acceptNecessary}
              className="px-6 py-3 bg-slate-200 text-slate-900 rounded-lg font-semibold hover:bg-slate-300 transition-colors duration-200"
            >
              Nur Notwendige
            </button>
            <button
              type="button"
              onClick={acceptAll}
              className="px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-200"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const cookieSettings = showSettings && (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-2xl font-bold text-slate-900">Cookie-Einstellungen</h2>
          <button
            type="button"
            onClick={() => setShowSettings(false)}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors duration-200"
            aria-label="Cookie-Einstellungen schließen"
          >
            <X className="w-6 h-6 text-slate-600" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <p className="text-slate-700 leading-relaxed">
            Wir verwenden Cookies und ähnliche Technologien, um Ihnen ein optimales Nutzungserlebnis zu bieten.
            Sie können Ihre Einwilligung für einzelne Cookie-Kategorien erteilen oder ablehnen.
          </p>

          <div className="space-y-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-1">Notwendige Cookies</h3>
                  <p className="text-sm text-slate-600">
                    Diese Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden.
                    Sie speichern z.B. Ihre Cookie-Einstellungen.
                  </p>
                </div>
                <div className="ml-4 mt-1">
                  <label className="inline-flex items-center cursor-not-allowed">
                    <input
                      type="checkbox"
                      checked={true}
                      disabled
                      className="w-5 h-5 text-sky-700 bg-slate-100 border-slate-300 rounded cursor-not-allowed"
                      aria-label="Notwendige Cookies (immer aktiv)"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-1">Statistik-Cookies</h3>
                  <p className="text-sm text-slate-600">
                    Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren,
                    indem Informationen anonym gesammelt und gemeldet werden.
                  </p>
                </div>
                <div className="ml-4 mt-1">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent.analytics}
                      onChange={(e) => setConsent({ ...consent, analytics: e.target.checked })}
                      className="w-5 h-5 text-sky-700 bg-white border-slate-300 rounded focus:ring-sky-500 cursor-pointer"
                      aria-label="Statistik-Cookies aktivieren"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-1">Marketing-Cookies</h3>
                  <p className="text-sm text-slate-600">
                    Diese Cookies werden verwendet, um Besuchern auf Webseiten zu folgen und relevante Werbung
                    zu präsentieren.
                  </p>
                </div>
                <div className="ml-4 mt-1">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent.marketing}
                      onChange={(e) => setConsent({ ...consent, marketing: e.target.checked })}
                      className="w-5 h-5 text-sky-700 bg-white border-slate-300 rounded focus:ring-sky-500 cursor-pointer"
                      aria-label="Marketing-Cookies aktivieren"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 mb-1">Funktionale Cookies</h3>
                  <p className="text-sm text-slate-600">
                    Diese Cookies ermöglichen erweiterte Funktionalität und Personalisierung, wie z.B.
                    Videos und Live-Chats.
                  </p>
                </div>
                <div className="ml-4 mt-1">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent.functional}
                      onChange={(e) => setConsent({ ...consent, functional: e.target.checked })}
                      className="w-5 h-5 text-sky-700 bg-white border-slate-300 rounded focus:ring-sky-500 cursor-pointer"
                      aria-label="Funktionale Cookies aktivieren"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              type="button"
              onClick={acceptNecessary}
              className="flex-1 px-6 py-3 bg-slate-200 text-slate-900 rounded-lg font-semibold hover:bg-slate-300 transition-colors duration-200"
            >
              Nur Notwendige
            </button>
            <button
              type="button"
              onClick={() => saveConsent(consent)}
              className="flex-1 px-6 py-3 bg-sky-700 text-white rounded-lg font-semibold hover:bg-sky-800 transition-colors duration-200"
            >
              Auswahl speichern
            </button>
            <button
              type="button"
              onClick={acceptAll}
              className="flex-1 px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-200"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const homePage = (
    <>
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-24 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-sky-900 leading-tight mb-6">
              Innovation trifft Rechtssicherheit: Das AI Readiness & Compliance Assessment
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-10 leading-relaxed">
              Machen Sie Ihr Unternehmen fit für die KI-Ära – profitabel, operativ umsetzbar und rechtlich abgesichert.
            </p>
            <a
              href="https://tidycal.com/antoniovonstrachwitz/arc-assessment-erstgespraech"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
            >
              <span>Jetzt Erstgespräch vereinbaren</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Die Herausforderung: Wachstum vs. Regulierung
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Sie wissen, dass Künstliche Intelligenz enorme Chancen für Ihre Effizienz und Ihren Umsatz bietet. Die Potenziale sind greifbar nah: automatisierte Prozesse, datengestützte Entscheidungen, personalisierte Kundenansprache. Doch oft scheitert die Umsetzung im Mittelstand an zwei entscheidenden Hürden, die viele Unternehmen zögern lassen.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Der Spagat zwischen Innovation und Regulierung wird zur echten Zerreißprobe. Einerseits drängt der Wettbewerb, andererseits wachsen die rechtlichen Anforderungen täglich. <span className="font-semibold text-white">Stillstand ist keine Option – aber blindes Vorpreschen kann teuer werden.</span>
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-3">Die operative Unsicherheit</h3>
                <p className="text-slate-300 leading-relaxed">
                  Wo lohnt sich KI wirklich? Welche Use Cases bringen sofortigen ROI? Wie trennen Sie Hype von echtem Mehrwert?
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Die rechtliche Bremse</h3>
                <p className="text-slate-300 leading-relaxed">
                  Ist das DSGVO-konform? Was bedeutet der neue EU AI Act für uns? Welche Dokumentationspflichten kommen auf uns zu?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-6 text-center">
            Unsere Lösung: Das ARC Assessment
          </h2>
          <p className="text-xl text-slate-700 mb-12 max-w-4xl mx-auto text-center leading-relaxed">
            Das <strong>AI Readiness & Compliance (ARC) Assessment</strong> ist ein integriertes Joint-Offer von Strachwitz Consulting. Wir haben die Lösung entwickelt, die beide Welten vereint – und Ihnen die Sicherheit gibt, die Sie für mutige Entscheidungen brauchen.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-sky-50 to-sky-100 p-8 rounded-2xl border-2 border-sky-200">
              <div className="bg-sky-700 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Operative Exzellenz</h3>
              <p className="text-slate-700 leading-relaxed">
                Wir identifizieren Ihre profitabelsten KI-Potenziale mit klarem Fokus auf ROI und Machbarkeit.
              </p>
            </div>
            <div className="bg-gradient-to-br from-sky-50 to-sky-100 p-8 rounded-2xl border-2 border-sky-200">
              <div className="bg-sky-700 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Juristische Fachexpertise</h3>
              <p className="text-slate-700 leading-relaxed">
                Sofortige Prüfung auf Herz und Nieren bezüglich DSGVO und EU AI Act – praxisnah und umsetzbar.
              </p>
            </div>
            <div className="bg-gradient-to-br from-sky-50 to-sky-100 p-8 rounded-2xl border-2 border-sky-200">
              <div className="bg-sky-700 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <FileCheck className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Klarer Fahrplan</h3>
              <p className="text-slate-700 leading-relaxed">
                Keine theoretischen Papiere, sondern ein konkreter Aktionsplan für Ihre nächsten Schritte.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-4 text-center">
            Unsere Pakete
          </h2>
          <p className="text-xl text-slate-700 mb-12 text-center max-w-4xl mx-auto leading-relaxed">
            Wählen Sie die Tiefe, die zu Ihrer aktuellen Situation passt. Beide Pakete beinhalten die operative Analyse Ihrer KI-Potenziale sowie die juristische Absicherung. Ob Sie einen ersten Überblick benötigen oder bereits konkrete Projekte umsetzen wollen – wir haben die passende Lösung für Ihren Reifegrad.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-sky-300">
              <div className="bg-sky-100 p-6 border-b-4 border-sky-600">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-sky-700 w-16 h-16 rounded-xl flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900 text-center">ARC „Compact"</h3>
                <p className="text-sky-700 text-center font-semibold">Der Schnelleinstieg</p>
              </div>
              <div className="p-8">
                <p className="text-slate-600 italic mb-6">
                  Ideal für Unternehmen, die schnell Klarheit brauchen und wissen wollen, ob ihre Ideen machbar sind.
                </p>

                <div className="space-y-5">
                  <div className="flex items-start space-x-3">
                    <div className="bg-sky-100 p-1.5 rounded-lg mt-0.5">
                      <span className="font-bold text-sky-700">01</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Operative Analyse</h4>
                      <p className="text-sm text-slate-600">Strachwitz Consulting: Identifikation von 3-5 konkreten KI-Use-Cases in Vertrieb & Operations mit erster Einschätzung des potenziellen ROI (Umsatzsteigerung/Effizienz).</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-sky-100 p-1.5 rounded-lg mt-0.5">
                      <span className="font-bold text-sky-700">02</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">DSGVO-Gap-Analyse</h4>
                      <p className="text-sm text-slate-600">2fink Consulting: Überprüfung des Status Quo Ihrer Datenverarbeitung im Hinblick auf die identifizierten Use Cases.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-sky-100 p-1.5 rounded-lg mt-0.5">
                      <span className="font-bold text-sky-700">03</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">EU AI Act Klassifizierung</h4>
                      <p className="text-sm text-slate-600">Einordnung Ihrer Vorhaben nach der KIVO (KI-Verordnung) in Risikoklassen mit klarer rechtlicher Bewertung.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-sky-100 p-1.5 rounded-lg mt-0.5">
                      <span className="font-bold text-sky-700">04</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Ampel-System & Roadmap</h4>
                      <p className="text-sm text-slate-600">Eine klare "Go / No-Go" Bewertung mit Handlungsempfehlungen in einer kompakten, sofort nutzbaren Roadmap.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-sky-300">
              <div className="bg-sky-100 p-6 border-b-4 border-sky-600">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-sky-700 w-16 h-16 rounded-xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900 text-center">ARC „Professional"</h3>
                <p className="text-sky-700 text-center font-semibold">Der Deep-Dive</p>
              </div>
              <div className="p-8">
                <p className="text-slate-600 italic mb-6">
                  Für Unternehmen, die bereits konkrete Daten verarbeiten wollen und eine tiefergehende, audit-sichere Prüfung benötigen.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3 text-lg">Operative Analyse & Strategie</h4>
                    <p className="text-sm text-sky-700 mb-2 font-semibold">Strachwitz Consulting</p>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-sky-700 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Detaillierte Analyse von 3-5 High-Impact Use Cases</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-sky-700 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Prüfung der Datenqualität und technischen Machbarkeit</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-sky-700 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Strategische Einordnung in Ihre Unternehmensziele</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-sky-700 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Bewertung der organisatorischen Voraussetzungen</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-3 text-lg">Security & Risk Assessment</h4>
                    <p className="text-sm text-sky-700 mb-2 font-semibold">2fink Consulting</p>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-sky-700 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Umfassende DSGVO-Analyse mit detaillierter Feststellung des Status Quo</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-sky-700 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Vertrags- & Prozess-Check: Prüfung vorhandener AV und VVT/RoPA</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-sky-700 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Detaillierte EU AI Act Klassifizierung</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-sky-700 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-700">Umfangreicher Maßnahmenplan zur vollen Compliance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-8 text-center">
            Warum diese Kombination?
          </h2>
          <p className="text-xl text-slate-700 mb-12 max-w-4xl mx-auto text-center leading-relaxed">
            Sie sparen Zeit und minimieren Risiken, indem Sie Strategie und Recht nicht getrennt voneinander betrachten. Unsere integrierte Herangehensweise verhindert kostspielige Nachbesserungen und gibt Ihnen von Anfang an die Sicherheit, dass Ihre KI-Projekte sowohl wirtschaftlich sinnvoll als auch rechtlich einwandfrei sind.
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-slate-200 flex items-center justify-center">
                <span className="text-slate-400 text-sm">Profilbild</span>
              </div>
              <h3 className="text-2xl font-bold text-sky-900 mb-2">
                António Freiherr von Strachwitz
              </h3>
              <p className="text-sky-700 font-semibold mb-4">Strachwitz Consulting</p>
              <p className="text-slate-700 leading-relaxed">
                Die operative Brille. Als Interim Manager schaue ich auf Machbarkeit, Umsatz und Prozesseffizienz. Ich sorge dafür, dass sich die KI-Investition rechnet und Sie messbare Ergebnisse sehen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-slate-200 flex items-center justify-center">
                <span className="text-slate-400 text-sm">Profilbild</span>
              </div>
              <h3 className="text-2xl font-bold text-sky-900 mb-2">
                Nicole Fink
              </h3>
              <p className="text-sky-700 font-semibold mb-4">2fink Consulting</p>
              <p className="text-slate-700 leading-relaxed">
                Die Expertin für "Strategy & Compliance". Nicole sorgt dafür, dass Ihre Innovationen nicht an regulatorischen Hürden scheitern. Sie übersetzt komplexe Gesetze in machbare Checklisten und praxistaugliche Prozesse.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Ihr Ergebnis nach dem Assessment
          </h2>
          <p className="text-xl mb-12 text-center max-w-3xl mx-auto text-slate-300">
            Unabhängig vom gewählten Paket halten Sie am Ende konkrete, umsetzbare Ergebnisse in den Händen. Keine vagen Empfehlungen, sondern klare Handlungsanweisungen, die Sie direkt in die Praxis umsetzen können.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3">Priorisierte KI-Projekte</h3>
              <p className="text-slate-300 leading-relaxed">
                Eine Liste wirtschaftlich sinnvoller KI-Projekte, nach ROI und Umsetzbarkeit priorisiert – damit Sie wissen, wo Sie anfangen.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3">Juristische Sicherheit</h3>
              <p className="text-slate-300 leading-relaxed">
                Die rechtliche Klarheit, welche Projekte unbedenklich sind und wo nachgebessert werden muss – inklusive konkreter Maßnahmen.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                <FileCheck className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3">Klarer Handlungsplan</h3>
              <p className="text-slate-300 leading-relaxed">
                Eine detaillierte Roadmap für die nächsten Schritte mit Zeitplan, Verantwortlichkeiten und Meilensteinen – sofort einsatzbereit.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold text-sky-400 mb-2">3-5</div>
              <div className="text-lg font-semibold mb-1">Use Cases</div>
              <div className="text-sm text-slate-400">Konkrete, auf Ihr Unternehmen zugeschnittene Anwendungsfälle</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-sky-400 mb-2">2</div>
              <div className="text-lg font-semibold mb-1">Experten-Perspektiven</div>
              <div className="text-sm text-slate-400">Operative Strategie und juristische Compliance vereint</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-sky-400 mb-2">1</div>
              <div className="text-lg font-semibold mb-1">Roadmap</div>
              <div className="text-sm text-slate-400">Ein klarer, umsetzbarer Plan für Ihre KI-Zukunft</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-12 text-center">
            Die Vorteile auf einen Blick
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-sky-50 p-6 rounded-xl border-2 border-sky-200">
              <h3 className="font-bold text-xl text-slate-900 mb-3">Zeitersparnis</h3>
              <p className="text-slate-700 leading-relaxed">
                Ein Assessment statt zweier separater Analysen. Sie erhalten operative und rechtliche Bewertung aus einer Hand, abgestimmt und konsistent.
              </p>
            </div>

            <div className="bg-sky-50 p-6 rounded-xl border-2 border-sky-200">
              <h3 className="font-bold text-xl text-slate-900 mb-3">Risikominimierung</h3>
              <p className="text-slate-700 leading-relaxed">
                Frühzeitige Erkennung von Compliance-Risiken, bevor Sie investieren. Vermeiden Sie teure Nachbesserungen oder gar Bußgelder.
              </p>
            </div>

            <div className="bg-sky-50 p-6 rounded-xl border-2 border-sky-200">
              <h3 className="font-bold text-xl text-slate-900 mb-3">ROI-Fokus</h3>
              <p className="text-slate-700 leading-relaxed">
                Konzentration auf KI-Projekte, die sich wirklich rechnen. Keine theoretischen Spielereien, sondern messbare Geschäftsergebnisse.
              </p>
            </div>

            <div className="bg-sky-50 p-6 rounded-xl border-2 border-sky-200">
              <h3 className="font-bold text-xl text-slate-900 mb-3">Praxistauglichkeit</h3>
              <p className="text-slate-700 leading-relaxed">
                Konkrete Checklisten und Maßnahmenpläne statt akademischer Gutachten. Sie können sofort loslegen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-sky-900 mb-6">
            Sind Sie bereit für sichere Innovation?
          </h2>
          <p className="text-xl text-slate-700 mb-8 leading-relaxed">
            Lassen Sie uns besprechen, welches Paket für Ihre aktuelle Unternehmensphase am besten geeignet ist. In einem unverbindlichen Vorgespräch analysieren wir Ihre spezifische Situation und zeigen Ihnen, wie das ARC Assessment Ihr Unternehmen voranbringen kann.
          </p>
          <p className="text-lg text-slate-700 mb-10 leading-relaxed">
            Wir erstellen Ihnen gerne ein individuelles Angebot, das exakt auf Ihre Bedürfnisse, Ihre Branche und Ihren Reifegrad zugeschnitten ist. Gemeinsam finden wir den optimalen Weg, um Ihre KI-Ambitionen sicher und profitabel umzusetzen.
          </p>
          <div className="flex justify-center">
            <a
              href="https://tidycal.com/antoniovonstrachwitz/arc-assessment-erstgespraech"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-lg text-xl font-semibold transition-all duration-200 shadow-xl hover:shadow-2xl inline-flex items-center justify-center space-x-3"
            >
              <span>Kostenloses Vorgespräch buchen</span>
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </>
  );

  const impressumPage = (
    <section className="bg-white pt-24 pb-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-sky-900 mb-8">Impressum</h1>
        <div className="space-y-8 text-slate-700 leading-relaxed">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">Angaben gem&auml;&szlig; &sect; 5 DDG</h2>
            <p>Ant&oacute;nio Freiherr von Strachwitz</p>
            <p>W&uuml;stenfelden 3</p>
            <p>97355 Castell</p>
            <p>Deutschland</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">Kontakt</h2>
            <p>
              Telefon:{' '}
              <a className="text-sky-700 hover:text-sky-900 font-semibold" href="tel:+4993253919963">
                +49 9325 391 99 63
              </a>
            </p>
            <p>
              E-Mail:{' '}
              <a className="text-sky-700 hover:text-sky-900 font-semibold" href="mailto:webmaster@strachwitzconsulting.com">
                webmaster@strachwitzconsulting.com
              </a>
            </p>
            <p>Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27a UStG: DE456847758</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">Inhaltlich verantwortlich gem&auml;&szlig; &sect; 18 Abs. 2 MStV</h2>
            <p>Ant&oacute;nio Freiherr von Strachwitz</p>
            <p>W&uuml;stenfelden 3, 97355 Castell, Deutschland</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Haftungsausschluss (Disclaimer)</h2>
            <div className="space-y-2">
              <h3 className="font-semibold text-slate-900">Haftung f&uuml;r Inhalte</h3>
              <p>
                Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs. 1 DDG f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 DDG
                sind wir als Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder gespeicherte fremde Informationen zu &uuml;berwachen oder nach Umst&auml;nden zu forschen,
                die auf eine rechtswidrige T&auml;tigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
                bleiben hiervon unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m&ouml;glich. Bei
                Bekanntwerden entsprechender Rechtsverletzungen entfernen wir diese Inhalte umgehend.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-slate-900">Haftung f&uuml;r Links</h3>
              <p>
                Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. F&uuml;r diese fremden Inhalte &uuml;bernehmen wir keine Gew&auml;hr;
                hierf&uuml;r ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e
                &uuml;berpr&uuml;ft; rechtswidrige Inhalte waren zu diesem Zeitpunkt nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Links umgehend.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf&auml;ltigung, Bearbeitung, Verbreitung
              und jede Art der Verwertung au&szlig;erhalb der Grenzen des Urheberrechts bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien
              dieser Seite sind nur f&uuml;r den privaten, nicht kommerziellen Gebrauch gestattet. Soweit Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet und Inhalte Dritter als solche gekennzeichnet. Sollten Sie dennoch eine Urheberrechtsverletzung bemerken, bitten wir um einen
              entsprechenden Hinweis; bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Inhalte umgehend.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">Verbraucherstreitbeilegung (&sect; 36 VSBG)</h2>
            <p>Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </div>
        </div>

        <div className="mt-12">
          <button
            type="button"
            onClick={handleNav('/')}
            className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-200"
          >
            Zur&uuml;ck zur Startseite
          </button>
        </div>
      </div>
    </section>
  );

  const datenschutzPage = (
    <section className="bg-white pt-24 pb-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-sky-900 mb-8">Datenschutzerkl&auml;rung</h1>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">1. Verantwortliche Stelle</h2>
            <p>Strachwitz Consulting</p>
            <p>Ant&oacute;nio Freiherr von Strachwitz</p>
            <p>W&uuml;stenfelden 3</p>
            <p>97355 Castell, Deutschland</p>
            <p>Telefon: <a className="text-sky-700 hover:text-sky-900 font-semibold" href="tel:+4993253919963">+49 9325 391 99 63</a></p>
            <p>E-Mail: <a className="text-sky-700 hover:text-sky-900 font-semibold" href="mailto:webmaster@strachwitzconsulting.com">webmaster@strachwitzconsulting.com</a></p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">2. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck von deren Verwendung</h2>
            <div className="space-y-2">
              <h3 className="font-semibold text-slate-900">Beim Besuch der Website</h3>
              <p>
                Beim Aufrufen unserer Website werden durch den von Ihrem Endger&auml;t verwendeten Browser automatisch Informationen an den Server unserer Website gesendet
                und tempor&auml;r in Logfiles gespeichert:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                <li>Verwendeter Browser und ggf. Betriebssystem</li>
              </ul>
              <p>Diese Daten verarbeiten wir, um Verbindung, komfortable Nutzung und Systemsicherheit zu gew&auml;hrleisten.</p>
              <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-slate-900">Bei Kontaktaufnahme per E-Mail</h3>
              <p>Bei Kontakt per E-Mail speichern wir die mitgeteilten Daten (z.&nbsp;B. Name, E-Mail-Adresse, Telefonnummer, Nachricht) zur Bearbeitung Ihrer Anfrage.</p>
              <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Ma&szlig;nahmen).</p>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">3. Weitergabe von Daten</h2>
            <p>Eine Weitergabe an Dritte erfolgt nur, wenn dies zur Vertragsabwicklung erforderlich ist oder Sie ausdr&uuml;cklich eingewilligt haben.</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">4. Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), L&ouml;schung (Art. 17), Einschr&auml;nkung (Art. 18),
              Daten&uuml;bertragbarkeit (Art. 20) sowie Widerspruch (Art. 21).
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">5. Beschwerderecht</h2>
            <p>
              Sie k&ouml;nnen sich bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde beschweren: Bayerisches Landesamt f&uuml;r Datenschutzaufsicht (BayLDA),
              Promenade 18, 91522 Ansbach.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">6. Speicherdauer</h2>
            <p>Personenbezogene Daten werden gel&ouml;scht, sobald der Verarbeitungszweck entf&auml;llt oder Sie Ihre Einwilligung widerrufen, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">7. SSL- bzw. TLS-Verschl&uuml;sselung</h2>
            <p>Diese Seite nutzt aus Sicherheitsgr&uuml;nden eine SSL- bzw. TLS-Verschl&uuml;sselung.</p>
          </div>
        </div>

        <div className="mt-12">
          <button
            type="button"
            onClick={handleNav('/')}
            className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-200"
          >
            Zur&uuml;ck zur Startseite
          </button>
        </div>
      </div>
    </section>
  );

  const cookiesPage = (
    <section className="bg-white pt-24 pb-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-sky-900 mb-6">Cookie- und Tracking-Hinweis</h1>
        <p className="text-slate-600 mb-8">(als Erg&auml;nzung zur Datenschutzerkl&auml;rung)</p>

        <div className="space-y-8 text-slate-700 leading-relaxed">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">Cookies</h2>
            <p>
              Unsere Website verwendet Cookies. Diese kleinen Textdateien werden auf Ihrem Endger&auml;t gespeichert und helfen, unser Angebot
              nutzerfreundlicher, effektiver und sicherer zu machen.
            </p>
            <p>Wir setzen folgende Kategorien ein:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Notwendige Cookies (z.&nbsp;B. Session-ID, Spracheinstellungen)</li>
              <li>Statistik-Cookies (z.&nbsp;B. Google Analytics, Matomo)</li>
              <li>Marketing-Cookies (z.&nbsp;B. Facebook Pixel, LinkedIn Insight Tag, Google Ads Remarketing)</li>
              <li>Funktionale Cookies (z.&nbsp;B. YouTube/Vimeo-Embeds, Google Maps, Fonts, Chat-Widgets)</li>
            </ul>
            <p>
              Rechtsgrundlage:<br />
              Technisch notwendige Cookies &rarr; Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)<br />
              Alle anderen Cookies &rarr; Art. 6 Abs. 1 lit. a DSGVO (Einwilligung via Cookie-Banner)
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">Cookie-Einwilligung</h2>
            <p>
              Beim ersten Besuch unserer Website zeigen wir ein Cookie-Banner, in dem Sie ausw&auml;hlen k&ouml;nnen, welche Cookies Sie zulassen m&ouml;chten.
              Sie k&ouml;nnen Ihre Einwilligung jederzeit &uuml;ber den Link &bdquo;Cookie-Einstellungen&ldquo; am Seitenende widerrufen oder &auml;ndern.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">Eingesetzte Tools und Dienste</h2>
            <p>Wir nutzen u. a. folgende Dienste, die Cookies setzen oder personenbezogene Daten verarbeiten k&ouml;nnen:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Google Analytics (Statistik/Tracking)</li>
              <li>Google Ads &amp; Remarketing (Marketing)</li>
              <li>Google Fonts (Darstellung von Schriften)</li>
              <li>Google reCAPTCHA (Spam-Schutz bei Formularen)</li>
              <li>YouTube / Vimeo (Videoeinbettungen)</li>
              <li>LinkedIn Insight Tag (Marketing/Tracking)</li>
              <li>Meta Pixel (Facebook/Instagram)</li>
              <li>X / Twitter Pixel</li>
              <li>Mailchimp / Brevo / Newsletter-Tool (nur falls Anmeldung erfolgt)</li>
              <li>Hosting-Provider (z.&nbsp;B. Vercel) &ndash; technisch notwendige Logfiles und Cookies</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">Speicherdauer</h2>
            <p>
              Session-Cookies &rarr; bis zum Schlie&szlig;en des Browsers<br />
              Permanente Cookies &rarr; zwischen 1 Tag und 2 Jahren (je nach Tool)
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">Widerruf &amp; Opt-Out</h2>
            <p>
              Sie k&ouml;nnen Cookies jederzeit &uuml;ber die Einstellungen Ihres Browsers l&ouml;schen oder blockieren. Zus&auml;tzlich k&ouml;nnen Sie Opt-Outs bei den
              Anbietern durchf&uuml;hren:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Google: <a className="text-sky-700 hover:text-sky-900 font-semibold" href="https://adssettings.google.com/">https://adssettings.google.com/</a></li>
              <li>Meta (Facebook/Instagram): <a className="text-sky-700 hover:text-sky-900 font-semibold" href="https://www.facebook.com/settings?tab=ads">https://www.facebook.com/settings?tab=ads</a></li>
              <li>LinkedIn: <a className="text-sky-700 hover:text-sky-900 font-semibold" href="https://www.linkedin.com/psettings/advertising/">https://www.linkedin.com/psettings/advertising/</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">Wichtiger Hinweis</h2>
            <p>
              Diese Cookie-Information erg&auml;nzt unsere vollst&auml;ndige Datenschutzerkl&auml;rung. F&uuml;r detaillierte Informationen zur Verarbeitung
              Ihrer personenbezogenen Daten besuchen Sie bitte unsere Datenschutzerkl&auml;rung.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <button
            type="button"
            onClick={handleNav('/')}
            className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-200"
          >
            Zur&uuml;ck zur Startseite
          </button>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      {header}
      {route === 'impressum' ? impressumPage : route === 'datenschutz' ? datenschutzPage : route === 'cookies' ? cookiesPage : homePage}
      {footer}
      {cookieBanner}
      {cookieSettings}
    </div>
  );
}

export default App;
