import { useForm } from 'react-hook-form';
import { useState } from 'react';
import TicketsTable from '../components/TicketsTable';

interface TicketFormData {
  customerName: string;
  phone: string;
  carModel: string;
  licensePlate: string;
  carColor: string;
  customerAddress: string;
  service: string;
  notes: string;
}

export default function NewTicket() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<TicketFormData>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: TicketFormData) => {
    console.log('Novo atendimento:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Novo Atendimento</h1>

      {submitted && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
          ✓ Atendimento criado com sucesso!
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Nome do Cliente
          </label>
          <input
            type="text"
            {...register('customerName', { required: 'Nome é obrigatório' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            placeholder="João Silva"
          />
          {errors.customerName && (
            <span className="text-red-600 text-sm">{errors.customerName.message}</span>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Telefone
          </label>
          <input
            type="tel"
            {...register('phone', { required: 'Telefone é obrigatório' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            placeholder="(11) 99999-9999"
          />
          {errors.phone && (
            <span className="text-red-600 text-sm">{errors.phone.message}</span>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Placa do Carro
          </label>
          <input
            type="text"
            {...register('licensePlate', { required: 'Placa é obrigatória' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            placeholder="ABC-1234"
          />
          {errors.licensePlate && (
            <span className="text-red-600 text-sm">{errors.licensePlate.message}</span>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Cor do Carro
          </label>
          <input
            type="text"
            {...register('carColor', { required: 'Cor é obrigatória' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            placeholder="Preto"
          />
          {errors.carColor && (
            <span className="text-red-600 text-sm">{errors.carColor.message}</span>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Endereço do Cliente
          </label>
          <input
            type="text"
            {...register('customerAddress', { required: 'Endereço é obrigatório' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            placeholder="Rua Exemplo, 123"
          />
          {errors.customerAddress && (
            <span className="text-red-600 text-sm">{errors.customerAddress.message}</span>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Modelo do Carro
          </label>
          <input
            type="text"
            {...register('carModel', { required: 'Modelo é obrigatório' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            placeholder="Toyota Corolla"
          />
          {errors.carModel && (
            <span className="text-red-600 text-sm">{errors.carModel.message}</span>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Tipo de Serviço
          </label>
          <select
            {...register('service', { required: 'Serviço é obrigatório' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
          >
            <option value="">Selecione um serviço</option>
            <option value="basico">Lavagem Básica</option>
            <option value="completo">Lavagem Completa</option>
            <option value="premium">Lavagem Premium</option>
            <option value="detalhamento">Detalhamento</option>
          </select>
          {errors.service && (
            <span className="text-red-600 text-sm">{errors.service.message}</span>
          )}
        </div>





        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Observações
          </label>
          <textarea
            {...register('notes')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            placeholder="Informações adicionais..."
            rows={4}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Criar Atendimento
        </button>
      </form>
        <TicketsTable />
      </div>
    </div>
  );
}
