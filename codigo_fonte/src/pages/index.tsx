import Image from "next/image";
import logoSvg from "img/abacate.svg";
import alimentos from "img/alimentos.svg";
import wave from "img/wave.svg";
import checkIcon from "img/check.svg";
import dcomp from "img/dcomp_ufs.png";
import { useState } from "react";
import Link from 'next/link';


export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
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
          left: 0,
          top: 0,
          right: 0,
          zIndex: -1,
          backgroundColor: "#BEEBC2",
          height: "90vh",
        }}
      >
        <div>
          <Image
            src={alimentos}
            alt="prato"
            className="mr-4 w-full "
            style={{
              position: "absolute",
              top: 120,
              height: "110vh",
              zIndex: 1,
            }}
          />
          <Image
            src={wave}
            alt="wave"
            className="mr-4 w-full"
            style={{
              position: "absolute",
              top: "26vh",
              height: "100vh",
              zIndex: 1,
            }}
          />
        </div>

        <div className="relative m-auto">
          <div
            className="absolute flex h-full  items-center"
            style={{

              width: "40vw",
              top: "40vh",
              left: "10vw"
            }}
          >
            <div>
              <span
                className="font-open-sans text-lg md:text-2xl lg:text-5xl font-light text-black"
                style={{ lineHeight: "1.5" }}
              >
                EcoDiet: Nutrição Inteligente para um Futuro Saudável!
              </span>

            </div>
          </div>
        </div>
      </div>
      {/* Fim da Página 1 */}

      {/** Começo da Página 2 */}
      <div style={{ display: "flex", justifyContent: "space-between", minHeight: "100vh", backgroundColor: "white" }}>
  <div className="flex flex-col md:flex-row items-center">
    {/** Vídeo */}
    <div className="flex-1 md:flex md:items-center">
    <div style={{ padding: "20px" }}>
      <video autoPlay loop muted>
        <source src="img/atendimento.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
    </div>
    </div>

    {/** Texto */}
    <div className="flex-1 md:flex md:items-center">
    <div className="text-black poppins-semibold text-center md:text-left" style={{ padding: "20px" }}>
      <h2 className="text-[50px]">O que o EcoDiet tem a oferecer</h2>
      <p className="text-[30px]">
        EcoDiet é um software de nutrição para melhorar seus atendimentos e pesquisas da área. O que o EcoDiet oferece:
      </p>

      <ul>
        <li style={{ display: "flex", alignItems: "center" }}>
          <Image src={checkIcon} alt="Check" style={{ marginRight: "10px" }} />
          <span className="text-[20px]">Gerenciamento de atendimentos e acompanhamentos</span>
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <Image src={checkIcon} alt="Check" style={{ marginRight: "10px" }} />
          <span className="text-[20px]">Histórico de evolução do paciente</span>
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <Image src={checkIcon} alt="Check" style={{ marginRight: "10px" }} />
          <span className="text-[20px]">Cadastro de alimentos</span>
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <Image src={checkIcon} alt="Check" style={{ marginRight: "10px" }} />
          <span className="text-[20px]">Suporte às tabelas TACO e IBGE</span>
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <Image src={checkIcon} alt="Check" style={{ marginRight: "10px" }} />
          <span className="text-[20px]">Criação de preparações</span>
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <Image src={checkIcon} alt="Check" style={{ marginRight: "10px" }} />
          <span className="text-[20px]">Registro de recordatório, prescrições, bioimpedância e exames</span>
        </li>
      </ul>
      </div>
    </div>
  </div>
</div>

      {/** Fim da Página 2 */}


      {/** Começo da Página 3 */}
      <div style={{ marginTop: "" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#BEEBC2",
            minHeight: "100vh",
          }}
        >
          <div className="flex flex-col md:flex-row items-center">
  <div className="flex-1 md:flex md:items-center">
    {/** Texto */}
    <div className="text-[#2c7b35] poppins-semibold text-center md:text-left" style={{ padding: "20px" }}>
      <h2 className="text-[60px]">Criação de projetos de pesquisa</h2>
      <p className="text-[30px]">
        Um diferencial de mercado é o nosso módulo de pesquisa, que possibilita a criação de projetos utilizando filtros
        para que o processo demorado de levantamento dos dados seja evitado. Após o projeto ser criado já é possível ver
        automaticamente os dados no Dashboard.
      </p>
    </div>
  </div>

  <div className="flex-1 md:flex md:items-center">
    {/** Imagem */}
    <div style={{ padding: "20px" }}>
      <video autoPlay loop muted>
        <source src="img/Projeto.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
    </div>
  </div>
</div>
        </div>
      </div>
      {/** Fim da Página 3 */}


      {/** Começo da Página 4 */}
      <div style={{ marginTop: "" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            minHeight: "100vh",
          }}
        >
          <div className="flex flex-col md:flex-row items-center">

            {/** Imagem */}
            <div className="flex-1 md:flex md:items-center">
            <div style={{ padding: "20px" }}>
              <video autoPlay loop muted>
                <source src="img/Paciente.mp4" type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
              </video>
            </div>
            </div>

            {/** Texto */}
            <div className="flex-1 md:flex md:items-center">
            <div
              className="text-black poppins-semibold text-center md:text-left"
              style={{ padding: "20px" }}
            >
              <h2 className="text-[60px]">Fidelização do paciente</h2>
              <p className="text-[30px]">
                O EcoDiet é uma ferramenta que não apenas simplifica a vida dos pacientes, mas também os fideliza por meio de suas funcionalidades intuitivas e eficazes. Algumas delas incluem:
              </p>
              <ul>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <Image src={checkIcon} alt="Check" style={{ marginRight: "10px" }} />
                  <span className="text-[20px]">Acesso à todas prescrições</span>
                </li>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <Image src={checkIcon} alt="Check" style={{ marginRight: "10px" }} />
                  <span className="text-[20px]">Histórico de evolução contínua.</span>
                </li>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <Image src={checkIcon} alt="Check" style={{ marginRight: "10px" }} />
                  <span className="text-[20px]">Chat integrado para dúvidas com o nutricionista</span>
                </li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
      {/** Fim da Página 4 */}


      {/* Começo da Página 5 */}
      <div style={{ marginTop: "" }}>
        <div
          style={{
            position: "relative",
            backgroundColor: "#BEEBC2",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {/* Conteúdo da quinta página */}
          <p className="text-[#2c7b35] text-center" style={{ fontFamily: "Poppins Semibold", fontSize: "50px", marginBottom: "20px" }}>Confira o nosso Pitch</p>
          <iframe
            width="70%"
            height="70%"
            src="https://www.youtube.com/embed/Q05-eG66gEs?vq=hd1080"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {/* Fim da Página 5 */}

      {/* Footer */}
      <footer className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center" style={{ backgroundColor: "#5d7d60", color: "white", textAlign: "center", height: "145px" }}>
  <span className="text-xl md:text-2xl lg:text-3xl">Contato: ecodiet@dcomp.ufs.br</span>
  <Image
    src={dcomp}
    alt="dcomp"
    className="w-24 md:w-auto h-auto"
  />
</footer>

      
    </div>
    
  );
}
