import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./Banner.css";
import "./styles.css";
import { Heading, Flex } from "@chakra-ui/react";
import { connectimg, content } from "../Data/Data";
import { Link } from "react-router-dom";

const Banners = () => {
  return (
    <div className="Caro">
      <Slider className="slider-wrapper" autoplay={10000}>
        {content.map((item, index) => (
          <div
            key={index}
            id={item.id}
            className="inner"
            style={{
              background: `url('${item.image}') no-repeat center center`,
            }}
          >
            <div className="innertext">
              <h4 className="mini">{item.mini}</h4>
              <h1 id="title">
                {item.title}
              </h1>
              <p id="des">{item.description}</p>
              <button className="btn1">
                <Link to="/contact">{item.button1} </Link>
              </button>
              <button className="btn2">
                <Link to="/products">{item.button2} </Link>
              </button>
            </div>
          </div>
        ))}
      </Slider>
      <Flex className="connect" gap={-10}>
        {connectimg.map((img) => {
          <img src={img.img} alt="" />;
        })}
      </Flex>
    </div>
  );
};

export default Banners;
