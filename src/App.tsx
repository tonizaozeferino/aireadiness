import { Shield, TrendingUp, CheckCircle, ArrowRight, Zap, Scale, FileCheck, Target, Clock, Award, BookCheck } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-sky-700" />
            <span className="text-xl font-bold text-slate-900">ARC Assessment</span>
          </div>
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-lg font-medium transition-colors duration-200">
            Erstgespräch vereinbaren
          </button>
        </nav>
      </header>

      <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2UyZThmMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-sky-900 leading-tight mb-6">
              Innovation trifft Rechtssicherheit: Das AI Readiness & Compliance Assessment
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-10 leading-relaxed">
              Machen Sie Ihr Unternehmen fit für die KI-Ära – profitabel, operativ umsetzbar und rechtlich abgesichert.
            </p>
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-2">
              <span>Jetzt Erstgespräch vereinbaren</span>
              <ArrowRight className="w-5 h-5" />
            </button>
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
            Das <strong>AI Readiness & Compliance (ARC) Assessment</strong> ist ein integriertes Joint-Offer von Strachwitz Consulting und 2fink Consulting. Wir haben die Lösung entwickelt, die beide Welten vereint – und Ihnen die Sicherheit gibt, die Sie für mutige Entscheidungen brauchen.
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-lg text-xl font-semibold transition-all duration-200 shadow-xl hover:shadow-2xl inline-flex items-center justify-center space-x-3">
              <span>Kostenloses Vorgespräch buchen</span>
              <ArrowRight className="w-6 h-6" />
            </button>
            <button className="bg-white hover:bg-slate-50 text-slate-900 px-10 py-5 rounded-lg text-xl font-semibold transition-all duration-200 shadow-xl hover:shadow-2xl border-2 border-slate-900">
              Mehr erfahren
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-300 text-xl mb-2">
            <strong className="text-white">Strachwitz Consulting & 2fink Consulting</strong>
          </p>
          <p className="text-slate-400 text-lg">
            Wir machen Innovation sicher.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
