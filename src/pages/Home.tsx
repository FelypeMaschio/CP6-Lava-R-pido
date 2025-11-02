import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full">
      {/* Seção Principal */}
      <div className="text-center py-16 bg-blue-600 text-white rounded-lg shadow-xl mb-12">
        <h1 className="text-6xl font-extrabold mb-4">
          Lava Rápido: Seu Carro Brilhando!
        </h1>
        <p className="text-2xl font-light mb-8">
          Serviços de lavagem e detalhamento com a máxima qualidade e cuidado.
        </p>
        <Link
          to="/new-ticket"
          className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition duration-300 shadow-lg"
        >
          Agende seu Atendimento Agora
        </Link>
      </div>

      {/* Seção de Depoimentos */}
      <div className="py-12">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
          O que nossos clientes dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
            <p className="text-gray-600 italic mb-4">
              "O melhor lava rápido da cidade! Meu carro ficou impecável, parecendo novo. Atendimento rápido e de qualidade."
            </p>
            <p className="font-semibold text-blue-600">- Ana Paula, Honda Civic</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
            <p className="text-gray-600 italic mb-4">
              "Serviço premium de verdade. O detalhamento interno superou minhas expectativas. Recomendo a todos!"
            </p>
            <p className="font-semibold text-blue-600">- Roberto Carlos, Toyota Corolla</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
            <p className="text-gray-600 italic mb-4">
              "Preço justo e serviço excelente. A equipe é muito atenciosa e profissional. Voltarei com certeza!"
            </p>
            <p className="font-semibold text-blue-600">- Fernanda Lima, Ford Ka</p>
          </div>
        </div>
      </div>

      {/* Seção de Fotos (Fictícias) */}
      <div className="py-12">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
          Nossos Resultados
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/300x200?text=Carro+Limpo+1"
              alt="Carro Limpo 1"
              className="w-full h-auto object-cover transform hover:scale-105 transition duration-500"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/300x200?text=Carro+Limpo+2"
              alt="Carro Limpo 2"
              className="w-full h-auto object-cover transform hover:scale-105 transition duration-500"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/300x200?text=Carro+Limpo+3"
              alt="Carro Limpo 3"
              className="w-full h-auto object-cover transform hover:scale-105 transition duration-500"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/300x200?text=Carro+Limpo+4"
              alt="Carro Limpo 4"
              className="w-full h-auto object-cover transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
