import { useState } from 'react';

interface Ticket {
  id: number;
  customerName: string;
  phone: string;
  carModel: string;
  service: string;
  date: string;
  status: 'pendente' | 'em-andamento' | 'concluído';
}

const initialTickets: Ticket[] = [
  {
    id: 1,
    customerName: 'João Silva',
    phone: '(11) 99999-9999',
    carModel: 'Toyota Corolla',
    service: 'Lavagem Completa',
    date: '2024-11-02',
    status: 'concluído',
  },
  {
    id: 2,
    customerName: 'Maria Santos',
    phone: '(11) 98888-8888',
    carModel: 'Honda Civic',
    service: 'Lavagem Básica',
    date: '2024-11-02',
    status: 'em-andamento',
  },
  {
    id: 3,
    customerName: 'Pedro Oliveira',
    phone: '(11) 97777-7777',
    carModel: 'Ford Focus',
    service: 'Detalhamento',
    date: '2024-11-02',
    status: 'pendente',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'concluído':
      return 'bg-green-100 text-green-800';
    case 'em-andamento':
      return 'bg-yellow-100 text-yellow-800';
    case 'pendente':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function TicketsTable() {
  const [tickets] = useState<Ticket[]>(initialTickets);

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Quadro de Atendimentos</h2>

      {tickets.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-600 text-lg">Nenhum atendimento registrado.</p>
        </div>
      ) : (
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-6 py-3 text-left">ID</th>
                <th className="px-6 py-3 text-left">Cliente</th>
                <th className="px-6 py-3 text-left">Telefone</th>
                <th className="px-6 py-3 text-left">Carro</th>
                <th className="px-6 py-3 text-left">Serviço</th>
                <th className="px-6 py-3 text-left">Data</th>
                <th className="px-6 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-800">#{ticket.id}</td>
                  <td className="px-6 py-4 text-gray-700">{ticket.customerName}</td>
                  <td className="px-6 py-4 text-gray-700">{ticket.phone}</td>
                  <td className="px-6 py-4 text-gray-700">{ticket.carModel}</td>
                  <td className="px-6 py-4 text-gray-700">{ticket.service}</td>
                  <td className="px-6 py-4 text-gray-700">{ticket.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(ticket.status)}`}>
                      {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
