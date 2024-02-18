import { Fragment } from "react";
import { useState } from "react";
import Image from "next/image";
import logoSvg from "img/abacate.svg";
import Amintas from "img/Amintas.svg";
import Andrey from "img/Andrey.svg";
import Cristian from "img/Cristian.svg";
import Debora from "img/Debora.svg";
import Diego from "img/Diego.svg";
import Diva from "img/Diva.svg";
import Jorge from "img/Jorge.svg";
import Natan from "img/Natan.svg";
import Pedro from "img/Pedro.svg";
import Ricardo from "img/Ricardo.svg";
import Rogerio from "img/Rogerio.svg";
import Viviane from "img/Viviane.svg";
import Edilayne from "img/Edilayne.svg";
import dcomp from "img/dcomp_ufs.png";
import Link from 'next/link';

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div >
        <title>EcoDiet</title>
        <nav className="bg-[#BEEBC2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
          <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image src={logoSvg} alt="Abacate" className="block h-8 w-auto" />
              </div>
              <p className="ml-2 text-green-600 font-semibold text-lg md:text-xl lg:text-2xl">
                <span>Eco</span>
                <span className="text-white">Diet</span>
              </p>
            </div>
          </Link>
</div>

            <div className="hidden lg:block">
              <div className="flex space-x-2">
                <Link href="/equipe">
                <p className="text-green-600  hover:text-white pl-2 text-lg font-medium">Equipe</p>
                </Link>
                <Link href="https://app-ecodiet.vercel.app/">
                <p className="text-green-600  hover:text-white pl-2 text-lg font-medium">Conheça Nosso Site</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="ml-4 flex items-center md:ml-6">
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/equipe">
          <p className="text-green-600  hover:text-white block pl-2 text-base font-medium">Equipe</p>
          </Link>
          <Link href="https://app-ecodiet.vercel.app/">
            <p className="text-green-600  hover:text-white block pl-2 text-base font-medium">Conheça Nosso Site</p>
            </Link>
          </div>
        </div>
      )}
    </nav>

        {/* Página 1 */}
        <div
          style={{
            backgroundColor: "#BEEBC2",
          }}
        >
          <div className="flex flex-col items-center justify-center">
  {/* Grupo 1 */}
  <h2 className="mb-8 text-2xl font-bold text-center md:text-4xl lg:text-5xl text-[#2c7b35]">Equipe de Desenvolvimento</h2>
  <div className="flex flex-wrap justify-center mb-16">
  <Fragment>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "10px" }}>
                  <Image src={Amintas} alt="Amintas" className="mr-2" width={200} height={200} />
                  <p className="text-2xl md:text-3xl lg:text-3xl w-48" style={{ textAlign: "center" }}>Amintas Gomes de Moraes Neto</p>
                </div>
              </Fragment>
              <Fragment>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "10px" }}>
                  <Image src={Andrey} alt="Andrey" className="mr-2" width={200} height={200} />
                  <p className="text-2xl md:text-3xl lg:text-3xl w-48" style={{ textAlign: "center" }}>Andrey Fellipe Almeida Chagas</p>
                </div>
              </Fragment>
              <Fragment>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "10px" }}>
                  <Image src={Cristian} alt="Cristian" className="mr-2" width={200} height={200} />
                  <p className="text-2xl md:text-3xl lg:text-3xl w-48" style={{ textAlign: "center" }}>Cristian Di Giovanni</p>
                </div>
              </Fragment>
              <Fragment>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "10px" }}>
                  <Image src={Diego} alt="Diego" className="mr-2" width={200} height={200} />
                  <p className="text-2xl md:text-3xl lg:text-3xl w-48" style={{ textAlign: "center" }}>Diego Gomes de Santana</p>
                </div>
              </Fragment>
              <Fragment>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "10px" }}>
                  <Image src={Jorge} alt="Jorge" className="mr-2" width={200} height={200} />
                  <p className="text-2xl md:text-3xl lg:text-3xl w-48" style={{ textAlign: "center" }}>Jorge Lucas Mota Sousa</p>
                </div>
              </Fragment>
              <Fragment>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "10px" }}>
                  <Image src={Natan} alt="Natan" className="mr-2" width={200} height={200} />
                  <p className="text-2xl md:text-3xl lg:text-3xl w-48" style={{ textAlign: "center" }}>Natan da Silva Batista</p>
                </div>
              </Fragment>
              <Fragment>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "10px" }}>
                  <Image src={Pedro} alt="Pedro" className="mr-2" width={200} height={200} />
                  <p className="text-2xl md:text-3xl lg:text-3xl w-48" style={{ textAlign: "center" }}>Pedro Henrique Morais dos Santos</p>
                </div>
              </Fragment>
  </div>

  {/* Grupo 2 */}
  <h2 className="mb-8 text-2xl font-bold text-center md:text-4xl lg:text-5xl text-[#2c7b35]">Coordenação Técnica</h2>
  <div className="flex flex-wrap justify-center mb-16">
  <Fragment>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "10px" }}>
                  <Image src={Debora} alt="Débora" className="mr-2" width={200} height={200} />
                  <p className="text-2xl md:text-3xl lg:text-3xl w-48" style={{ textAlign: "center" }}>Débora Maria Coelho Nascimento</p>
                </div>
              </Fragment>
              <Fragment>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "10px" }}>
                  <Image src={Edilayne} alt="Edilayne" className="mr-2" width={200} height={200} />
                  <p className="text-2xl md:text-3xl lg:text-3xl w-48" style={{ textAlign: "center" }}>Edilayne Meneses Salgueiro</p>
                </div>
              </Fragment>
              <Fragment>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "10px" }}>
                  <Image src={Ricardo} alt="Ricardo" className="mr-2" width={200} height={200} />
                  <p className="text-2xl md:text-3xl lg:text-3xl w-48" style={{ textAlign: "center" }}>Ricardo José Paiva de Britto Salgueiro</p>
                </div>
              </Fragment>
              <Fragment>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "10px" }}>
                  <Image src={Rogerio} alt="Rogério" className="mr-2" width={200} height={200} />
                  <p className="text-2xl md:text-3xl lg:text-3xl w-48" style={{ textAlign: "center" }}>Rogério Patrício Chagas do Nascimento</p>
                </div>
              </Fragment>
  </div>

  {/* Grupo 3 */}
  <h2 className="mb-8 text-2xl font-bold text-center md:text-4xl lg:text-5xl text-[#2c7b35]">Consultoria de Nutrição</h2>
  <div className="flex flex-wrap justify-center mb-16">
  <Fragment>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "10px" }}>
                  <Image src={Diva} alt="Diva" className="mr-2" width={200} height={200} />
                  <p className="text-2xl md:text-3xl lg:text-3xl w-48" style={{ textAlign: "center" }}>Diva Aliete dos Santos Vieira</p>
                </div>
              </Fragment>
              <Fragment>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "10px" }}>
                  <Image src={Viviane} alt="Viviane" className="mr-2" width={200} height={200} />
                  <p className="text-2xl md:text-3xl lg:text-3xl w-48" style={{ textAlign: "center" }}>Viviane de Sousa Rocha</p>
                </div>
              </Fragment>
  </div>
</div>
        </div>
        {/* Fim da Página 1 */}
  
        {/* Footer */}
        <footer className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center" style={{ backgroundColor: "#5d7d60", color: "white", textAlign: "center", height: "145px" }}>
  <span className="text-xl md:text-2xl lg:text-3xl">Contato: ecodiet@dcomp.ufs.br</span>
  <Image
    src={dcomp}
    alt="dcomp"
    className="w-48 md:w-auto h-auto"
  />
</footer>
      </div>
    );
}
