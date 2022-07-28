import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./Banner.css";
import "./styles.css";
import { Heading, Flex } from "@chakra-ui/react";
import { connectimg, content } from "../Data/Data";

const Banners = () => {
  return (
    <div className="Caro">
      <Slider className="slider-wrapper" autoplay={3000}>
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
              <Heading id="title" color="#6bf7fe">
                {item.title}
              </Heading>
              <p id="des">{item.description}</p>
              <button className="btn1">{item.button1}</button>
              <button className="btn2">{item.button2}</button>
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

{
  /* <Flex className="connect" gap={-10}>
<img
  src="https://fruitsandveggiesng.com/wp-content/uploads/2021/09/fv-instagram-logo.png"
  alt=""
/>
<img
  src="https://fruitsandveggiesng.com/wp-content/uploads/2021/09/fv-facebook-logo.png"
  alt=""
/>
<img
  src="https://fruitsandveggiesng.com/wp-content/uploads/2021/09/fv-twitter-logo.png"
  alt=""
/>
</Flex> */
}
