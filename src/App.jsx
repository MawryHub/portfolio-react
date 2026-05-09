function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-8 md:px-8">
        <header className="flex flex-col gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-indigo-600">Mauricio Stalcar</p>
            <p className="text-lg font-semibold text-slate-900">IT Support &amp; Access Management Specialist</p>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm text-slate-600 md:gap-6">
            <a href="#profile" className="transition hover:text-slate-900">Profile</a>
            <a href="#skills" className="transition hover:text-slate-900">Skills</a>
            <a href="#experience" className="transition hover:text-slate-900">Experience</a>
            <a href="#contact" className="transition hover:text-slate-900">Contact</a>
          </nav>
        </header>

        <main className="space-y-8 py-8">
          <section className="rounded-[32px] bg-white px-6 py-10 shadow-[0_28px_70px_rgba(15,23,42,0.08)] md:px-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">IT Support &amp; Access Management</p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Mauricio Stalcar</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              IT Support and Access Management specialist with 2 years of experience at Accenture,
              working in enterprise cloud environments such as Azure and GCP. AWS Certified Cloud Practitioner
              with a growing focus on cybersecurity and access control systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:mau.stalcar@gmail.com"
                className="inline-flex rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Email me
              </a>
              <a
                href="https://linkedin.com/in/maustalcar/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                LinkedIn
              </a>
            </div>
          </section>

          <section id="profile" className="rounded-[32px] bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-semibold text-slate-900">Profile</h2>
            <p className="mt-4 text-slate-600">
              IT Support and Access Management specialist with 2 years of experience at Accenture, supporting enterprise cloud environments.
              Experienced in identity and access management, authentication troubleshooting, and incident resolution across Azure and GCP.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Location</p>
                <p className="mt-2 text-base font-semibold text-slate-900">Argentina</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Email</p>
                <p className="mt-2 text-base font-semibold text-slate-900">mau.stalcar@gmail.com</p>
              </div>
            </div>
          </section>

          <section id="skills" className="grid gap-6 md:grid-cols-2">
            <article className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold text-slate-900">Technical skills</h3>
              <ul className="mt-4 space-y-3 text-slate-600">
                <li>Identity &amp; Access Management</li>
                <li>Authentication and authorization troubleshooting</li>
                <li>RBAC and user access provisioning</li>
                <li>System, network, and access issue resolution</li>
                <li>Incident management and root cause analysis</li>
              </ul>
            </article>
            <article className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold text-slate-900">Cloud &amp; tools</h3>
              <ul className="mt-4 space-y-3 text-slate-600">
                <li>AWS • Microsoft Azure • Google Cloud Platform</li>
                <li>Windows and Linux</li>
                <li>Virtual machine deployment and configuration</li>
                <li>Incident ticketing systems</li>
              </ul>
            </article>
          </section>

          <section id="experience" className="rounded-[32px] bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
            <h2 className="text-2xl font-semibold text-slate-900">Experience</h2>
            <div className="mt-6 rounded-[28px] border border-slate-200 bg-slate-50 p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Accenture</p>
                  <p className="mt-2 text-xl font-semibold text-slate-900">IT Support / Access Management</p>
                </div>
                <p className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-600">Jan 2024 – Jan 2026</p>
              </div>
              <ul className="mt-6 space-y-3 text-slate-600">
                <li>Managed user access and permissions across Azure and GCP enterprise environments.</li>
                <li>Resolved authentication and authorization issues to improve access reliability.</li>
                <li>Diagnosed system, network, and access problems for technical support requests.</li>
                <li>Investigated Windows and Linux system issues, including connectivity failures.</li>
                <li>Used ticketing systems to triage incidents, prioritize requests, and meet SLAs.</li>
                <li>Collaborated with cross-functional teams to resolve complex technical issues.</li>
              </ul>
            </div>
          </section>

          <section id="contact" className="grid gap-6 md:grid-cols-2">
            <article className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold text-slate-900">Certifications</h3>
              <ul className="mt-4 space-y-3 text-slate-600">
                <li>AWS Certified Cloud Practitioner</li>
                <li>AWS re/Start Graduate</li>
                <li>IBM Cybersecurity Fundamentals</li>
              </ul>
            </article>
            <article className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold text-slate-900">Languages</h3>
              <ul className="mt-4 space-y-3 text-slate-600">
                <li>Spanish — Native</li>
                <li>English — Professional</li>
              </ul>
            </article>
          </section>
        </main>

        <footer className="py-6 text-center text-sm text-slate-500">
          <p>Built with React, Vite, and Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
