import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            🚗 Lava Rápido
          </Link>
          <ul className="flex gap-6">
            <li>
              <Link to="/" className="hover:text-blue-200 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/new-ticket" className="hover:text-blue-200 transition">
                Novo Atendimento
              </Link>
            </li>
            <li>
              <Link to="/tickets" className="hover:text-blue-200 transition">
                Atendimentos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
