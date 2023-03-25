import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer/index";
import Avatar from "../../assets/avatar.png";
import "./style.css";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <hr />

      <div className="content">
        <div className="resume-container">
          <div className="resume">
            <h4>Olá, sou Lucas!</h4>
            <p id="office">Desenvolvedor Full-Stack</p>
            <p>
              Experiência de alto nível em web design
              <br />
              e conhecimento em desenvolvimento,
              <br />
              produzindo trabalhos de qualidade
              <br />
            </p>
            <ul id="tecnologies">
              <li>
                <p>#Python</p>
              </li>
              <li>
                <p>#HTML</p>
              </li>
              <li>
                <p>#CSS</p>
              </li>
              <li>
                <p>#JavaScript</p>
              </li>
              <li>
                <p>#ReactJS</p>
              </li>
            </ul>
            <button id="btnContact">
              <a
                href="https://api.whatsapp.com/send?phone=5584991649669&text=Ol%C3%A1!%20Tudo%20bem%3F"
                target="_blank"
              >
                Contate-me
              </a>
            </button>
          </div>

          <div className="avatar">
            <img src={Avatar} height="600" width="600" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
