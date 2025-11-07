import { Rocket, Server, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium mb-4">
              <Rocket size={14} /> Shipping fast, with reliability
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Full‑Stack Developer
              <span className="text-indigo-600"> & DevOps Engineer</span>
            </h1>
            <p className="mt-5 text-gray-700 text-lg leading-relaxed">
              I design, build, and operate modern web applications end‑to‑end — from
              clean, accessible UIs to resilient, observable cloud infrastructure.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-md shadow hover:bg-indigo-700 transition-colors">
                <Code2 size={18} /> View Projects
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-gray-300 px-5 py-2.5 rounded-md hover:border-gray-400 transition-colors text-gray-800">
                <Server size={18} /> Get in touch
              </a>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-700">
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-500" /> React, TypeScript, Node.js</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-500" /> FastAPI, PostgreSQL, MongoDB</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-purple-500" /> Docker, Kubernetes, Terraform</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber-500" /> CI/CD, Observability, SRE</li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[2px] shadow-lg">
              <div className="w-full h-full rounded-2xl bg-white grid place-content-center">
                <div className="text-center p-8">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-indigo-600 text-white shadow mb-4">
                    <Rocket />
                  </div>
                  <p className="text-gray-800 font-semibold">Building robust systems</p>
                  <p className="text-gray-500 text-sm">Performance • Security • DX</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white border border-black/5 rounded-xl px-4 py-3 shadow-sm">
              <p className="text-sm font-medium text-gray-800">99.9% uptime</p>
              <p className="text-xs text-gray-500">CI/CD, blue‑green deploys</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
