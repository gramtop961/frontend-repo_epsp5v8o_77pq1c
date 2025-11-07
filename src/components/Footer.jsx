export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 text-center text-sm text-gray-600">
      <p>
        © {year} Your Name — Built with React & Tailwind. Deployed with modern DevOps best practices.
      </p>
    </footer>
  );
}
