import Reacts from "react";
import Footer from "../../components/Footer/index";
import { Pie } from "@ant-design/plots";
import "./style.css";

const Index: React.FC = () => {
  const data = [
    {
      text: "Front-End",
      value: 0.3,
    },
    {
      text: "Back-End",
      value: 0.7,
    },
  ];

  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "text",
    legend: {
      layout: "horizontal",
      position: "bottom",
    },
    radius: 0.8,
    label: {
      type: "inner",
      offset: "-50%",
      style: {
        fill: "#fff",
        fontSize: 18,
        textAlign: "center",
      },
      content: ({ percent }: any) => `${(percent * 100).toFixed(0)}%`,
    },
  };
  return (
    <>
      <Pie {...config} />
    </>
  );
};

export default Index;
