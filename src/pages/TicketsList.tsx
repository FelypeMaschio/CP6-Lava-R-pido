import TicketsTable from '../components/TicketsTable';

export default function TicketsList() {
  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Lista de Atendimentos</h1>
      <TicketsTable />
    </div>
  );
}
