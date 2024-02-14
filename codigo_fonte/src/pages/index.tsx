import Image from "next/image";
import logoSvg from "img/abacate.svg";
import alimentos from "img/alimentos.svg";
import wave from "img/wave.svg";
import dcomp from "img/dcomp_ufs.png";

export default function Home() {
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
                style={{ lineHeight: "50px" }}
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
            position: "relative",
            backgroundColor: "white",
            height: "100vh",
          }}
        >
          {/* Conteúdo da segunda página */}
        </div>
      </div>
      {/* Fim da Página 2 */}

      {/* Começo da Página 3 */}
      <div style={{ marginTop: "" }}>
        <div
          style={{
            position: "relative",
            backgroundColor: "#BEEBC2",
            height: "100vh",
          }}
        >
          {/* Conteúdo da terceira página */}
        </div>
      </div>
      {/* Fim da Página 3 */}

      {/* Começo da Página 4 */}
      <div style={{ marginTop: "" }}>
        <div
          style={{
            position: "relative",
            backgroundColor: "white",
            height: "100vh",
          }}
        >
          {/* Conteúdo da quarta página */}
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
          }}
        >
          {/* Conteúdo da quinta página */}
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
