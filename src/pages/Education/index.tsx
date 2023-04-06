import Navbar from "../../components/Navbar/index";
import "./style.css";
import { Card, Row, Col, Divider, Space } from "antd";

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
            <Card>
              <p className="card-title">DevLinks</p>
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
