import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
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
        <div className="ml-16 text-white">
          <h1 className="text-4xl">LightWatts, sua conta de luz agradece.</h1>
          <h3 className="text-2xl">Controle a Light que te preocupa.</h3>
        </div>
      </section>
      <article className="text-black mt-16 ml-16 mb-16">
        <h1 className="text-4xl font-lulo">POR QUE EXISTIMOS?</h1>
        <p className="text-lg mt-4 w-2/3 text-justify">
          Nossa missão é ajudar você a economizar energia de forma inteligente, monitorando o consumo dos seus aparelhos eletrônicos em tempo real. Acreditamos que pequenas mudanças no uso diário dos dispositivos podem gerar grandes economias ao final do mês. Com o nosso sistema de gerenciamento, você terá um controle completo sobre o consumo de cada equipamento em sua casa, identificando desperdícios e tomando decisões mais conscientes.
        </p>
      </article>
      <section className="flex mt-28 w-screen bg-gray-100 p-8">
        <div>
          <Link href="/auth/signup">
            <h1 className="text-3xl ml-9 font-lulo font-bold w-2/3 hover:underline"
            >Faça parte de uma vida mais econômica</h1>
          </Link>
          <p className="ml-9 w-1/2 text-2xl mt-5"
          >Aqui, ninguém será o vilão da sua história, então fique tranquilo!</p>
          <Link href="/auth/signup">
            <p className="loginlink text-xl w-32 mt-5 ml-9"
            >↪︎ Saiba mais</p>
          </Link>
        </div>
        <Image className="mr-24" src="/img/tomada.jpg" alt="Tomada" width={500} height={300} />
      </section>
      <section className="flex bg-black opacity-90 p-8">
        <Image className="ml-8" src="/img/girl_in_phone.jpg" alt="Garota no celular" width={500} height={500} />
        <div className="ml-20 space-y-5">
          <Link href="/fale-conosco">
            <h1 className="text-white text-3xl font-lulo hover:underline">
              Entre em contato conosco caso haja alguma pendência.</h1>
          </Link>
          <p className="text-white text-xl">Se houver alguma pendência ou dúvida, não hesite em nos contatar. Estamos à disposição para ajudar e resolver qualquer questão o mais rápido possível.</p>
          <Link href="/fale-conosco">
            <p className="sectionlink text-xl text-white w-32 mt-5"
            >↪︎ Saiba mais</p>
          </Link>
        </div>
      </section>
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center px-6 lg:px-0">
          <h3 className="text-5xl font-bold text-gray-800 mb-16">Depoimentos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Depoimento 1 */}
            <blockquote className="bg-white p-8 shadow-xl rounded-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <p className="text-lg text-gray-700 mb-6">
                "Economizei 30% na minha conta de luz usando o LightWatts! A plataforma é intuitiva e fácil de usar."
              </p>
              <div className="flex items-center justify-center gap-4">
                <cite className="text-gray-900 font-semibold">João Silva</cite>
              </div>
            </blockquote>

            {/* Depoimento 2 */}
            <blockquote className="bg-white p-8 shadow-xl rounded-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <p className="text-lg text-gray-700 mb-6">
                "Agora tenho controle total sobre o consumo de energia da minha casa. LightWatts realmente faz a diferença!"
              </p>
              <div className="flex items-center justify-center gap-4">
                <cite className="text-gray-900 font-semibold">Maria Oliveira</cite>
              </div>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}
