import Image from "next/image";
import logoSvg from "img/abacate.svg";
import alimentos from "img/alimentos.svg";
import wave from "img/wave.svg";
import checkIcon from "img/check.svg";
import dcomp from "img/dcomp_ufs.png";


export default function Home() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <title>EcoDiet</title>
      <nav className="fixed top-0 left-0 w-full h-20 bg-[#BEEBC2] z-50">
        <div className="max-w-6xl mx-auto h-full flex items-center justify-between px-4">
          <div className="flex items-center">
            <Image src={logoSvg} alt="abacate" className="mr-2" />
            <p>
              <span
                style={{
                  color: "#3DAA49",
                  fontFamily: "Poppins Semibold",
                  fontSize: "30px",
                }}
              >
                Eco
              </span>
              <span
                style={{
                  color: "black",
                  fontFamily: "Poppins Regular",
                  fontSize: "30px",
                }}
              >
                Diet
              </span>
            </p>
          </div>
          <span>Equipe</span>
        </div>
      </nav>

      {/* Página 1 */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          zIndex: -1,
          backgroundColor: "#BEEBC2",
          height: "100vh",
        }}
      >
        <div>
          <Image
            src={alimentos}
            alt="prato"
            className="mr-4 w-full"
            style={{
              position: "absolute",
              top: 120,
              height: "100vh",
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

        <div className="relative m-auto w-full max-w-6xl">
          <div
            className="absolute left-0 top-0 flex h-full w-full items-center justify-center"
            style={{
              height: "400px",
              width: "700px",
              left: "-150px",
              top: "200px",
            }}
          >
            <div>
              <span
                className="font-open-sans text-70 font-light text-black"
                style={{ lineHeight: "80px" }}
              >
                EcoDiet: Nutrição Inteligente para um Futuro Saudável!
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Fim da Página 1 */}

      {/* Começo da Página 2 */}
      <div style={{ marginTop: "100vh" }}>
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "white",
    }}
  >
    {/* Imagem */}
    <div style={{ flex: 1, padding: "0 20px" }}>
  <video autoPlay loop muted>
    <source src="img/atendimento.mp4" type="video/mp4" />
    Seu navegador não suporta a tag de vídeo.
  </video>
</div>
    
    {/* Texto */}
    <div className="text-black poppins-semibold" style={{ flex: 1, padding: "0 20px" }}>
      <h2 className="text-[60px]">O que o EcoDiet tem a oferecer</h2>
      <p className="text-[30px]">EcoDiet é um software de nutrição para melhorar seus atendimentos e pesquisas da área. O que o EcoDiet oferece:</p>
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
      {/* Fim da Página 2 */}

      {/* Começo da Página 3 */}
      <div style={{ marginTop: "" }}>
        <div
          style={{
            display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
            backgroundColor: "#BEEBC2",
            height: "100vh",
          }}
        >
    {/* Texto */}
    <div className="text-[#2c7b35] poppins-semibold" style={{ flex: 1, padding: "0 20px" }}>
      <h2 className="text-[60px]">Criação de projetos de pesquisa</h2>
      <p className="text-[30px]">Um diferencial de mercado é o nosso módulo de pesquisa, que possibilita a criação de projetos utizando filtros 
      para que o processo demorado de levantamento dos dados seja evitado. Após o projeto ser criado já é possível ver 
      automaticamente os dados no Dashboard.</p>

    

    </div>
    {/* Imagem */}
    <div style={{ flex: 1, padding: "0 20px" }}>
  <video autoPlay loop muted>
    <source src="img/Projeto.mp4" type="video/mp4" />
    Seu navegador não suporta a tag de vídeo.
  </video>
</div>
        </div>
      </div>
      {/* Fim da Página 3 */}

      {/* Começo da Página 4 */}
      <div style={{ marginTop: "" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "white",
            height: "100vh",
          }}
        >
          {/* Imagem */}
    <div style={{ flex: 1, padding: "0 20px" }}>
  <video autoPlay loop muted>
    <source src="img/Paciente.mp4" type="video/mp4" />
    Seu navegador não suporta a tag de vídeo.
  </video>
</div>

          {/* Texto */}
    <div className="text-black poppins-semibold" style={{ flex: 1, padding: "0 20px" }}>
      <h2 className="text-[60px]">Fidelização do paciente</h2>
      <p className="text-[30px]">O EcoDiet é uma ferramenta que não apenas simplifica a vida dos pacientes, mas também os fideliza por meio de suas funcionalidades intuitivas e eficazes. Algumas delas incluem:</p>
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
      {/* Fim da Página 4 */}

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
    <p className="text-[#2c7b35]" style={{ fontFamily: "Poppins Semibold", fontSize: "50px", marginBottom: "20px" }}>Confira o nosso Pitch</p>
    <iframe
      width="70%"
      height="70%"
      src="https://www.youtube.com/embed/FC6kzHebnJs?vq=hd1080"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</div>
{/* Fim da Página 5 */}

      {/* Footer */}
      <footer className="flex justify-center items-center" style={{ backgroundColor: "#5d7d60", color: "white", textAlign: "center", height: "100px" }}>
  <Image
    src={dcomp}
    alt="dcomp"
    className="w-auto h-full"
  />
</footer>
    </div>
  );
}
