import Image from 'next/image';
import Link from 'next/link';

export default function LoginTemplate() {
  return (
    <div className="flex justify-center items-center h-screen bg-white px-6 relative">
      <Link href="/" className="absolute top-4 left-6">
        <Image className='hover:scale-110 duration-500'
        src="/img/logo.png" alt='Logo' width={40} height={40}
        />
      </Link>
      <div className="w-full max-w-sm bg-white p-8 border border-black rounded-lg shadow-lg">
        <h2 className="text-3xl text-center font-lulo text-black mb-6">
          Login
        </h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              className="mt-1 block w-full px-4 py-2 border border-black text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label htmlFor="senha" className="block text-sm font-medium text-black">
              Senha
            </label>
            <input
              id="senha"
              type="password"
              placeholder="Digite sua senha"
              className="mt-1 block w-full px-4 py-2 border border-black text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 bg-black text-white font-bold rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
            >
              Entrar
            </button>
          </div>
        </form>
        <div className="mt-4 text-center text-sm text-black">
          <span>Não tem uma conta? </span>
          <Link href="/signup" className="font-medium text-blue-500 hover:text-blue-700">
            Crie sua conta
          </Link>
        </div>
      </div>
    </div>
  );
}
