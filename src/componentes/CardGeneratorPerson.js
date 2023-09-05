import React  from "react";
import Person from "./Person";
import './Card.css';
import Slider from "react-slick";

const CardGeneratorPerson = () => {
    let cards = [];
    for(let e=1; e<11; e++){

        cards.push(<Person personId={e}/>);
    };

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
        <Slider {...settings} className="slider">
            {cards}
        </Slider>
    );
};


export default CardGeneratorPerson;