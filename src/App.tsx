import img from "./assets/Logo.png";
import img2 from "./assets/Img.png";
import img3 from "./assets/Img (1).png";
import img4 from "./assets/Vector.png";
import icon from "./assets/Icon.png";
import icon1 from "./assets/Icon (1).png";
import img5 from "./assets/Img (2).png";
import insta from "./assets/instagram 1.png";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="header">
        <img src={img} alt="" />
        <div className="divtool">
          <p>Início</p>
          <p>Sobre</p>
          <p>Serviços</p>
          <p>Depoimentos</p>
          <p>Contato</p>
        </div>
      </div>

      <div className="divbox">
        <div className="divP">
          <h5>Saúde natural para os seus cabelos</h5>
          <p>
            Um salão exclusivo em São Paulo, especializado em tratamentos
            naturais.
          </p>
          <button>Agendar um horário</button>
        </div>
        <img src={img2} alt="" />
      </div>

      <div className="divbox2">
        <img src={img3} alt="" />
        <div className="divP2">
          <h5>Sobre nós</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin
            quis bibendum diam. Sed consequat nisl laoreet eros ultricies
            pellentesque. Nullam in est porta, pellentesque massa vitae,
            vehicula risus. In placerat, felis vitae sodales dictum, lacus quam
            pretium mi, ut pretium urna turpis eu dui. Vestibulum id ullamcorper
            nibh. Donec luctus, nunc finibus elementum suscipit, tortor augue
            vulputate sapien, vitae feugiat enim augue sed. Quisque id aliquam
            elit. Suspendisse congue pharetra maximus. Duis rutrum velit a leo
            euismod dictum. Sed sodales est efficitur arcu tincidunt tincidunt.
            Curabitur fringilla, risus at feugiat feugiat, nisl nulla tincidunt
            tellus, elementum elementum lorem nisl eleifend dolor. Nullam eget
            dui at sem ullamcorper luctus.
          </p>
        </div>
      </div>

      <div className="divbox3">
        <div className="divServ">
          <h5>Serviços</h5>
          <p>
            Com mais de 10 anos no mercado, o Beautysalon já conquistou clientes
            de inúmeros países com seus tratamentos exclusivos e totalmente
            naturais
          </p>
        </div>

        <div className="divServ2">
          <div className="divLid">
            <img src={img4} alt="" />
            <h6>Terapia capilar</h6>
            <p>
              Terapia completa para couro cabeludo e fios, protegendo todos os
              tipos de cabelos, inclusive os longos e finos.
            </p>
          </div>
          <div className="divLid">
            <img src={icon} alt="" />
            <h6>Cortes</h6>
            <p>
              Terapia completa para couro cabeludo e fios, protegendo todos os
              tipos de cabelos, inclusive os longos e finos.
            </p>
          </div>
          <div className="divLid">
            <img src={icon1} alt="" />
            <h6>Tratamentos</h6>
            <p>
              Terapia completa para couro cabeludo e fios, protegendo todos os
              tipos de cabelos, inclusive os longos e finos.
            </p>
          </div>
        </div>
      </div>

      <div className="divbox4">
        <div className="divD">
          <h4>Depoimentos de quem já passou por aqui</h4>
        </div>
        <div className="divH">
          <div className="divB">
            <p>
              {" "}
              Eu sou cliente do Beautysalon há 5 anos e não troco por nada!
              Certamente meu cabelo mudou muito depois que comecei a tratar
              somente com produtos naturais e veganos. São profissionais
              incríveis e qualificados.{" "}
            </p>
            <img src={img5} alt="" /> <span>Wanessa Souza</span>
          </div>
          <div className="divB">
            <p>
              {" "}
              Eu sou cliente do Beautysalon há 5 anos e não troco por nada!
              Certamente meu cabelo mudou muito depois que comecei a tratar
              somente com produtos naturais e veganos. São profissionais
              incríveis e qualificados.{" "}
            </p>
            <img src={img5} alt="" /> <span>Luna Falcão</span>
          </div>
        </div>
      </div>

      <div className="divbox5">
        <div className="divS">
          <h4>Entre em contato com a gente!</h4>
          <p>
            Entre em contato com a Beautysalon, queremos tirar suas dúvidas,
            ouvir suas críticas e sugestões.
          </p>
          <button>Entrar em contato</button>
        </div>
        <div className="divS2">
          <p>11 99845-6754</p>
          <p>R. Amauri Souza, 346</p>
          <p>contato@beautysalon.com</p>
        </div>
      </div>

      <div className="divbox6">
        <div className="divLast">
          <h2>
            beauty <span>salon</span>.
          </h2>
          <p>©2021 Beautysalon.</p>
          <p>Todos os direitos reservados.</p>
        </div>
        <div className="divLast2">
          <img src={insta} alt="" />
          <img src={insta} alt="" />
          <img src={insta} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
