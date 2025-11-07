import { ExternalLink } from "lucide-react";

const items = [
  {
    title: "Cloud‑native Task Manager",
    description:
      "Microservices app with FastAPI, React, and event‑driven pipelines. Automated Canary + GitOps on Kubernetes.",
    tags: ["FastAPI", "React", "K8s", "ArgoCD", "Kafka"],
    link: "#",
  },
  {
    title: "Realtime Dev Analytics",
    description:
      "Developer productivity insights using OpenTelemetry, ClickHouse, and dashboards with latency SLOs.",
    tags: ["OpenTelemetry", "ClickHouse", "SLO"],
    link: "#",
  },
  {
    title: "Infra as Code Platform",
    description:
      "Reusable Terraform modules with secure defaults, CI checks, and ephemeral preview environments.",
    tags: ["Terraform", "GitHub Actions", "Security"],
    link: "#",
  },
];

function Tag({ children }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-700 border border-gray-200">
      {children}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured Projects</h2>
            <p className="text-gray-600 mt-1">Selection of full‑stack builds and DevOps work</p>
          </div>
          <a href="#" className="text-indigo-600 hover:text-indigo-700 text-sm">View all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <article key={p.title} className="group rounded-xl border border-black/5 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2 min-h-[56px]">{p.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <a
                className="mt-4 inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700"
                href={p.link}
              >
                Explore <ExternalLink size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
