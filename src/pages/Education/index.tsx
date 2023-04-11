import Navbar from "../../components/Navbar/index";
import "./style.css";
import { Card, Row, Col, Divider, Space, Typography, List } from "antd";
import { AiOutlineFolder, AiOutlineLink } from "react-icons/ai";
import { TbExternalLink } from "react-icons/tb";

const Education: React.FC = () => {
  return (
    <>
      <div className="navbar">
        <Navbar />
        <hr />
      </div>

      <div className="content">
        <Row gutter={16} className="certifieds-title">
          <Col>
            <h4>Certificados</h4>
          </Col>
        </Row>

        <Row gutter={[16, 20]}>
          <Col className="devlinks-rocketseat" span={12}>
            <Card className="bg-[#5272ffa1] w-[40rem]">
              <Row className="flex justify-between items-center">
                <Col>
                  <AiOutlineFolder size={30} className="text-white" />
                </Col>
                <Col>
                  <AiOutlineLink size={30} className="text-white" />
                </Col>
              </Row>
              <Row>
                <Typography.Title level={5}>DevLinks</Typography.Title>
              </Row>
              <Row>
                <Typography.Text></Typography.Text>
              </Row>
              <Row>
                <ul className="flex flex-row gap-5 text-4xl">
                  <li>
                    <p>#Fundamentos da programação web</p>
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
                    <p>#Git</p>
                  </li>
                  <li>
                    <p>#Github</p>
                  </li>
                </ul>
              </Row>

              {/* <p className="card-title">DevLinks</p>
              <Divider />
              <div className="institution">
                <h4>Instituição:</h4>
                <p>Rocketseat</p>
              </div>
              <div className="date">
                <h4>Data:</h4>
                <p>03/2023</p>
              </div> */}
            </Card>
          </Col>
          <Col className="especializar-rocketseat" span={12}>
            <Card>
              <p className="card-title">Especializar</p>
              <Divider />
              <div className="institution">
                <h4>Instituição:</h4>
                <p>Rocketseat</p>
              </div>
              <div className="date">
                <h4>Data:</h4>
                <p>03/2023</p>
              </div>
            </Card>
          </Col>
          <Col className="python3-cursoemvideo" span={12}>
            <Card>
              <p className="card-title">Python3</p>
              <Divider />
              <div className="institution">
                <h4>Instituição:</h4>
                <p>Curso Em Video</p>
              </div>
              <div className="date">
                <h4>Data:</h4>
                <p>08/2020</p>
              </div>
            </Card>
          </Col>
          <Col className="university" span={12}>
            <Card>
              <p className="card-title">
                Análise e Desenvolvimento de Sistemas
              </p>
              <Divider />
              <div className="institution">
                <h4>Instituição:</h4>
                <p>UNP</p>
              </div>
              <div className="date">
                <h4>Data:</h4>
                <p>07/2022</p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Education;
