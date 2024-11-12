import Header from "@/components/header";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <section
        className="w-full flex flex-col justify-center mb-20"
        style={{
          minHeight: '75vh',
          backgroundImage: "url('/img/abajour.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="ml-16">
          <h1 className="text-4xl">LightWatts, sua conta de luz agradece.</h1>
          <h3 className="text-2xl">Controle a Light que te preocupa.</h3>
        </div>
      </section>
      <section className="text-black mt-16 ml-16">
        <h1 className="text-4xl font-lulo">POR QUE EXISTIMOS?</h1>
        <p className="text-lg mt-4 w-2/3 text-justify">
        Nossa missão é ajudar você a economizar energia de forma inteligente, monitorando o consumo dos seus aparelhos eletrônicos em tempo real. Acreditamos que pequenas mudanças no uso diário dos dispositivos podem gerar grandes economias ao final do mês. Com o nosso sistema de gerenciamento, você terá um controle completo sobre o consumo de cada equipamento em sua casa, identificando desperdícios e tomando decisões mais conscientes.
        </p>
      </section>
    </div>
  );
}
