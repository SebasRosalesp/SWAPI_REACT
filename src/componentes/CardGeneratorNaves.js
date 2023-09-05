import React  from "react";
import Nave from "./Naves";
import './Card.css';
import Slider from "react-slick";

const CardGeneratorNave = () => {
    let cards = [];
    let e = [2, 3, 5, 9, 10, 11];

    function mapeo(){
        e.map((x)=>cards.push(<Nave naveId={x}/>))
    } 
    mapeo();

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block"}}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
          />
        );
      }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        appendDots: dots => (
            <div
              style={{
                backgroundColor: "#293e48",
                borderRadius: "10px",
                padding: "10px",
                margin: '0 -1rem 1rem'
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={{
                width: "30px",
                color: "white",
                margin:'0 -1rem'
              }}
            >
              {i + 1}
            </div>
          )
      };
    return(
        <>
        <Slider {...settings} className="slider">
            {cards}
        </Slider>
        </>
        
    );
};

export default CardGeneratorNave;