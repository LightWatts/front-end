import CardSlider from "@/components/card";
import Footer from "@/components/footer";
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
        <h1 className="text-4xl font-lulo">POR QUE É LIGHTWATTS?</h1>
        <p className="text-lg mt-4 w-2/3 text-justify">
        Nosso nome é LightWatts porque acreditamos que a luz é sinônimo de clareza, eficiência e inovação. Queremos iluminar o caminho para um consumo de energia mais inteligente e sustentável, ajudando você a economizar watts de forma leve e eficiente. Com nossas soluções, seu lar fica mais econômico, sem perder o conforto, até porque economizar energia pode ser tão simples quanto acender uma luz.
        </p>
      </article>
      <section className="flex mt-28 text-black w-screen bg-gray-100 p-8">
        <div>
          <div className="ml-10">
            <Link href="/auth/signup">
              <h1 className="text-3xl font-lulo inline font-bold hover:underline">
                Faça parte de uma vida mais econômica
              </h1>
            </Link>
          </div>
          <p className="ml-10 w-3/4 text-xl mt-5 text-justify">
          Aqui, ninguém será o vilão da sua história, então relaxe! Economizar energia não exige sacrifícios extremos ou culpa. É uma jornada leve e consciente, onde pequenas mudanças consistentes podem reduzir sua conta de luz e beneficiar o planeta.
          </p>
          <Link href="/auth/signup">
            <p className="loginlink text-xl inline-block mt-8 ml-10">
              ↪︎ Saiba mais
            </p>
          </Link>
        </div>
        <Image className="mr-24" src="/img/tomada.jpg" alt="Tomada" width={500} height={300} />
      </section>
      <section className="flex bg-black opacity-90 p-8">
        <Image className="ml-8" src="/img/girl_in_phone.jpg" alt="Garota no celular" width={500} height={500} />
        <div className="ml-20 space-y-5">
          <Link href="/fale-conosco">
            <h1 className="text-white text-3xl inline font-lulo hover:underline">
              Entre em contato conosco caso haja alguma pendência.
            </h1>
          </Link>
          <p className="text-white text-xl text-justify">
            Se houver alguma pendência ou dúvida, não hesite em nos contatar. Estamos à disposição para ajudar e resolver qualquer questão o mais rápido possível.
          </p>
          <Link href="/fale-conosco">
            <p className="sectionlink text-xl text-white inline-block mt-8">
              ↪︎ Saiba mais
            </p>
          </Link>
        </div>
      </section>
      <CardSlider/>
      <Footer/>
    </div>
  );
}
