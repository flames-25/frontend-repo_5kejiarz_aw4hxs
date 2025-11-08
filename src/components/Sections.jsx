import { motion } from 'framer-motion';
import { CalendarDays, Cpu, Users, BookOpen } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-semibold text-white sm:text-4xl">
          About the Club
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="mt-4 text-violet-100/90">
          We explore quantum algorithms, complexity, and hardware through talks, workshops, and collaborative projects. All backgrounds welcome.
        </motion.p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {[{
          icon: BookOpen,
          title: 'Workshops',
          desc: 'Intro to qubits, quantum circuits, Qiskit, and error correction.'
        }, {
          icon: Cpu,
          title: 'Research Sprints',
          desc: 'Hands-on teams exploring simulation, VQE, and circuit optimization.'
        }].map((item, i) => (
          <motion.div key={item.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <item.icon className="h-6 w-6 text-violet-300" />
            <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-violet-100/90">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function EventsSection() {
  const events = [
    { date: 'Oct 21', title: 'Quantum 101: Qubits & Circuits', detail: 'Kickoff workshop with live demos.' },
    { date: 'Nov 05', title: 'Variational Algorithms Night', detail: 'VQE and QAOA hands-on session.' },
    { date: 'Nov 18', title: 'Hardware Tour', detail: 'Visit our optics lab and cryo setup overview.' }
  ];

  return (
    <section id="events" className="relative mx-auto max-w-6xl px-6 py-20">
      <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-semibold text-white sm:text-4xl">
        Events
      </motion.h2>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {events.map((e, idx) => (
          <motion.div key={e.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-5 backdrop-blur">
            <div className="text-xs font-medium tracking-wider text-violet-300">{e.date}</div>
            <div className="mt-2 text-white">{e.title}</div>
            <div className="mt-1 text-sm text-violet-100/90">{e.detail}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function ProjectsSection() {
  const projects = [
    { name: 'QAOA Playground', tag: 'algorithms' },
    { name: 'Noisy Simulator', tag: 'tooling' },
    { name: 'Quantum Error Visualizer', tag: 'education' },
    { name: 'Photon Routing Demo', tag: 'hardware' }
  ];

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-20">
      <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-semibold text-white sm:text-4xl">
        Projects
      </motion.h2>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div key={p.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="relative z-10">
              <div className="text-white">{p.name}</div>
              <div className="text-xs uppercase tracking-wider text-violet-300/90">{p.tag}</div>
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{
              background: 'radial-gradient(200px 120px at 30% 20%, rgba(168,85,247,0.25), transparent 60%)'
            }} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function TeamSection() {
  const people = [
    { name: 'Avery', role: 'President' },
    { name: 'Sam', role: 'Research Lead' },
    { name: 'Riley', role: 'Workshops' },
    { name: 'Noah', role: 'Operations' }
  ];

  return (
    <section id="team" className="relative mx-auto max-w-6xl px-6 py-20">
      <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-semibold text-white sm:text-4xl">
        Team
      </motion.h2>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {people.map((p, i) => (
          <motion.div key={p.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
            <div className="mx-auto h-14 w-14 rounded-full bg-gradient-to-br from-violet-400/40 to-fuchsia-400/30" />
            <div className="mt-3 text-white">{p.name}</div>
            <div className="text-sm text-violet-100/90">{p.role}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
