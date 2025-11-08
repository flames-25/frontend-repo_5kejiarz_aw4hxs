export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10 text-center">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm text-white/70">© {new Date().getFullYear()} Quantum Computing Club • Made with superposition and snacks</p>
      </div>
    </footer>
  );
}
