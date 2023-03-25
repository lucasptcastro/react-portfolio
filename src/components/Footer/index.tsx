import React from "react";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import "./style.css";

const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <div className="social-medias">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/lucas-peixoto-2625441a0/"
                target="_blank"
              >
                {<AiFillLinkedin style={{ height: "30px", width: "30px" }} />}
              </a>
            </li>
            <li>
              <a href="https://github.com/lucasptcastro" target="_blank">
                {<AiOutlineGithub style={{ height: "30px", width: "30px" }} />}
              </a>
            </li>
            <li>
              <a href="https://instagram.com/lucasptcastro" target="_blank">
                {
                  <AiOutlineInstagram
                    style={{ height: "30px", width: "30px" }}
                  />
                }
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
