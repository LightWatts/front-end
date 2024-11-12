import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-white w-screen p-3 pl-7 shadow-md sticky top-0 z-50">
      <header>
        <nav className="flex items-center text-black text-lg font-headerfont">
          <ul id="ulheader" className="flex items-center space-x-8 ">
            <li>
              <Link href="/">
                <Image
                  src="/img/logo.png"
                  alt="Logo LightWatts"
                  width={60}
                  height={60}
                />
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/">Página Inicial</Link>
            </li>
            <li className="nav-item">
              <Link href="/sobre">A LightWatts</Link>
            </li>
            <li className="nav-item">
              <Link href="/fale-conosco">Fale conosco</Link>
            </li>
          </ul>
          <ul className="ml-auto pr-20">
            <li className="loginlink">
              <Link className="text-xl" href="/auth/login">Login ▷</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
