import { useState, useEffect } from 'react';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors">
      <div className="mx-auto max-w-5xl px-6 py-8 md:px-8">
        <header className="flex flex-col gap-4 border-b border-slate-200 pb-6 dark:border-slate-700 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-indigo-600 dark:text-indigo-400">Mauricio Stalcar</p>
            <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">IT Support &amp; Access Management Specialist</p>
          </div>
          <div className="flex items-center gap-6">
            <nav className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400 md:gap-6">
              <a href="#profile" className="transition hover:text-slate-900 dark:hover:text-slate-100">Profile</a>
              <a href="#skills" className="transition hover:text-slate-900 dark:hover:text-slate-100">Skills</a>
              <a href="#experience" className="transition hover:text-slate-900 dark:hover:text-slate-100">Experience</a>
              <a href="#contact" className="transition hover:text-slate-900 dark:hover:text-slate-100">Contact</a>
            </nav>
            <button
              onClick={toggleDarkMode}
              className="rounded-full p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </header>

        <main className="space-y-8 py-8">
          <section className="rounded-[32px] bg-white px-6 py-10 shadow-[0_28px_70px_rgba(15,23,42,0.08)] dark:bg-slate-800 dark:shadow-[0_28px_70px_rgba(0,0,0,0.3)] md:px-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600 dark:text-indigo-400">IT Support &amp; Access Management</p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">Mauricio Stalcar</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              IT Support and Access Management specialist with 2 years of experience at Accenture,
              working in enterprise cloud environments such as Azure and GCP. AWS Certified Cloud Practitioner
              with a growing focus on cybersecurity and access control systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:mau.stalcar@gmail.com"
                className="inline-flex rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                Email me
              </a>
              <a
                href="https://linkedin.com/in/maustalcar/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              >
                LinkedIn
              </a>
            </div>
          </section>

          <section id="profile" className="rounded-[32px] bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] dark:bg-slate-800 dark:shadow-[0_18px_45px_rgba(0,0,0,0.3)]">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Profile</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              IT Support and Access Management specialist with 2 years of experience at Accenture, supporting enterprise cloud environments.
              Experienced in identity and access management, authentication troubleshooting, and incident resolution across Azure and GCP.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-700">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Location</p>
                <p className="mt-2 text-base font-semibold text-slate-900 dark:text-slate-100">Argentina</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-700">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Email</p>
                <p className="mt-2 text-base font-semibold text-slate-900 dark:text-slate-100">mau.stalcar@gmail.com</p>
              </div>
            </div>
          </section>

          <section id="skills" className="grid gap-6 md:grid-cols-2">
            <article className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Technical skills</h3>
              <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
                <li>Identity &amp; Access Management</li>
                <li>Authentication and authorization troubleshooting</li>
                <li>RBAC and user access provisioning</li>
                <li>System, network, and access issue resolution</li>
                <li>Incident management and root cause analysis</li>
              </ul>
            </article>
            <article className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Cloud &amp; tools</h3>
              <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
                <li>AWS • Microsoft Azure • Google Cloud Platform</li>
                <li>Windows and Linux</li>
                <li>Virtual machine deployment and configuration</li>
                <li>Incident ticketing systems</li>
              </ul>
            </article>
          </section>

          <section id="experience" className="rounded-[32px] bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] dark:bg-slate-800 dark:shadow-[0_18px_45px_rgba(0,0,0,0.3)]">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Experience</h2>
            <div className="mt-6 rounded-[28px] border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Accenture</p>
                  <p className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">IT Support / Access Management</p>
                </div>
                <p className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-600 dark:border-slate-600 dark:text-slate-400">Jan 2024 – Jan 2026</p>
              </div>
              <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-300">
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
            <article className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Certifications</h3>
              <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
                <li>AWS Certified Cloud Practitioner</li>
                <li>AWS re/Start Graduate</li>
                <li>IBM Cybersecurity Fundamentals</li>
              </ul>
            </article>
            <article className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Languages</h3>
              <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
                <li>Spanish — Native</li>
                <li>English — Professional</li>
              </ul>
            </article>
          </section>
        </main>

        <footer className="py-6 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>Built with React, Vite, and Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
