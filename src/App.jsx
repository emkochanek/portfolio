import { useState } from "react";
import { Mail, Linkedin, Headphones, FileText, Mic, PlayCircle, Award } from "lucide-react";

// ==== EDITABLE DATA ====
const PROFILE = {
  name: "Emily (Em) Kochanek",
  title: "Content & Product Marketing | Technical Storyteller | Podcast Producer",
  blurb:
    "Content marketing manager with technical editing chops, sales enablement writing experience, and a track record producing PodRocket and LaunchPod. I turn complex products into stories that drive pipeline and community.",
  email: "emilykochanek92@gmail.com",
  linkedin: "https://www.linkedin.com/in/em-kochanek-11582750/",
  resumeUrl: "#", // replace with hosted PDF link
  stats: [
    { label: "Audio streams since Aug '23", value: "597K+" },
    { label: "YouTube views since Mar '25", value: "91K+" },
    { label: "New YT subs (since Mar '25)", value: "600+" },
  ],
};

const HIGHLIGHTS = [
  {
    title: "Launched & produced LaunchPod",
    body:
      "Created a strategic TOFU podcast for PM leaders; moved 5 prospects into pipeline (1 closed).",
  },
  {
    title: "Scaled PodRocket video format",
    body:
      "Introduced YouTube video in Mar 2025; grew to 91K+ views and 600+ new subscribers.",
  },
  {
    title: "High-consumption episode formats",
    body:
      "Built panel & mailbag episodes with 80%+ avg. consumption, outperforming baseline by ~10%.",
  },
];

const FEATURED_EPISODES = [
  {
    title: "HTMX in 2025 | Carson Gross (PodRocket)",
    url: "https://youtu.be/kKAP6cUwOpo",
  },
  {
    title: "Vite, Frontend Tooling, and the Future | Evan You (PodRocket)",
    url: "https://youtu.be/YVeWo0aUduc",
  },
  {
    title: "JSX Over The Wire | Dan Abramov (PodRocket)",
    url: "https://youtu.be/RBph3T6Tqxo",
  },
  {
    title: "Audiomack's 42M Users: Growth Playbook | Charlie Kaplan (LaunchPod)",
    url: "https://open.spotify.com/episode/7eyCfVXT1ztOtYh34jErbn?si=d9ade42c1ea1497d",
  },
  {
    title: "$1M ARR x3: Adam Schoenfeld (LaunchPod)",
    url: "https://open.spotify.com/episode/5qEDnESXpkAG3TY6qC2Uhc?si=7495790e31054399",
  },
];

const WRITING = [
  {
    title: "The 4 Essentials of Killer Product Storytelling (LaunchPod Substack)",
    url: "https://stories.logrocket.com/p/the-4-essentials-of-killer-product",
  },
  { title: "React Intl: Internationalize your React apps (YouTube)", url: "https://youtu.be/03KfyER8NyY" },
  { title: "Build a React accordion from scratch (YouTube)", url: "https://youtu.be/4TRyTeHUmcM" },
  { title: "Three.js game tutorial (YouTube)", url: "https://youtu.be/7ISWLoQtNOc" },
];

// ==== UI COMPONENTS ====
const Card = ({ children }) => (
  <div className="rounded-2xl shadow-sm border p-6 bg-white/60 backdrop-blur-sm">
    {children}
  </div>
);

const Section = ({ title, icon, children }) => (
  <section className="space-y-4">
    <div className="flex items-center gap-2">
      {icon}
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
    {children}
  </section>
);

export default function Portfolio() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <main className="mx-auto max-w-5xl px-6 py-10 space-y-10">
        {/* HERO */}
        <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{PROFILE.name}</h1>
            <p className="text-slate-600 max-w-2xl">{PROFILE.title}</p>
            <p className="text-slate-700 max-w-3xl">{PROFILE.blurb}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href={PROFILE.linkedin} className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 hover:shadow-sm" target="_blank" rel="noreferrer">
              <Linkedin className="h-4 w-4"/>
              <span>LinkedIn</span>
            </a>
            <button onClick={copyEmail} className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 hover:shadow-sm">
              <Mail className="h-4 w-4"/>
              <span>{copied ? "Copied!" : "Email"}</span>
            </button>
            <a href={PROFILE.resumeUrl} className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 hover:shadow-sm" target="_blank" rel="noreferrer">
              <FileText className="h-4 w-4"/>
              <span>Resume</span>
            </a>
          </div>
        </header>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PROFILE.stats.map((s) => (
            <Card key={s.label}>
              <p className="text-3xl font-bold">{s.value}</p>
              <p className="text-sm text-slate-600">{s.label}</p>
            </Card>
          ))}
        </div>

        {/* HIGHLIGHTS */}
        <Section title="Highlights" icon={<Award className="h-5 w-5"/>}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {HIGHLIGHTS.map((h) => (
              <Card key={h.title}>
                <h3 className="font-semibold mb-2">{h.title}</h3>
                <p className="text-sm text-slate-700">{h.body}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* FEATURED EPISODES */}
        <Section title="Featured Episodes" icon={<Headphones className="h-5 w-5"/>}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FEATURED_EPISODES.map((ep) => (
              <Card key={ep.title}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold mb-1">{ep.title}</h3>
                    <a className="text-sm underline" href={ep.url} target="_blank" rel="noreferrer">
                      Listen / Watch
                    </a>
                  </div>
                  <PlayCircle className="h-6 w-6"/>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* WRITING */}
        <Section title="Writing & Tutorials" icon={<FileText className="h-5 w-5"/>}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WRITING.map((w) => (
              <Card key={w.title}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold mb-1">{w.title}</h3>
                    <a className="text-sm underline" href={w.url} target="_blank" rel="noreferrer">
                      View
                    </a>
                  </div>
                  <Mic className="h-6 w-6"/>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section title="Contact" icon={<Mail className="h-5 w-5"/>}>
          <Card>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <p className="text-slate-700">Open to Content Marketing, Product Marketing, and Podcast Production roles (remote-friendly).</p>
              <div className="flex items-center gap-3">
                <a href={`mailto:${PROFILE.email}`} className="underline">{PROFILE.email}</a>
                <span className="text-slate-400">•</span>
                <a href={PROFILE.linkedin} className="underline" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
          </Card>
        </Section>

        <footer className="py-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {PROFILE.name}
        </footer>
      </main>
    </div>
  );
}
