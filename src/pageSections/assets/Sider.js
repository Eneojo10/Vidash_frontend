import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Sider({
  firstImage,
  firsthearder,
  firstP,
  secHeader,
  secImage,
  secP,
  thirdImage,
  thirdP,
  thirdHeader,
  forthImage,
  forthHeader,
  fourthP,
  fifthImage,
  fifthHeader,
  fifthP,
  sixthImage,
  SixhHeader,
  SixthP,
}) {
  return (
    <div>
      <div className="slider">
        <Carousel data-bs-theme="light" slide={true} fade interval={2000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              // src='duplex2.avif'
              src={firstImage}
              alt="First slide"
            />
            <Carousel.Caption className="text">
              <h5>{firsthearder}</h5>
              <p>{firstP}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={secImage}
              // src='flat6.avif'
              alt="Second slide"
            />
            <Carousel.Caption className="text">
              <h5>{secHeader}</h5>
              <p>{secP}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              //  src='flat5.jpeg'
              src={thirdImage}
              alt="Third slide"
            />
            <Carousel.Caption className="text">
              <h5>{thirdHeader}</h5>
              <p>{thirdP}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              //  src='flat5.jpeg'
              src={forthImage}
              alt="Forth slide"
            />
            <Carousel.Caption className="text">
              <h5>{forthHeader}</h5>
              <p>{fourthP}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              //  src='flat5.jpeg'
              src={fifthImage}
              alt="Fifth slide"
            />
            <Carousel.Caption className="text">
              <h5>{fifthHeader}</h5>
              <p>{fifthP}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              //  src='flat5.jpeg'
              src={sixthImage}
              alt="Sixth slide"
            />
            <Carousel.Caption className="text">
              <h5>{SixhHeader}</h5>
              <p>{SixthP}</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Sider;
