import React from "react";
import Carousel from "react-bootstrap/Carousel";

const images = {
  carnaval: require("../assets/carnaval.jpg"),
  cubetazo: require("../assets/cubetazo.jpg"),
  frutal: require("../assets/frutal.jpg"),
  huevos: require("../assets/huevos.jpg"),
  pincher: require("../assets/pincher.jpg")
};
const img_dim = {
  width: 900,
  height: 900,
};

export class Slider extends React.Component {
  render() {
    return (
      // TODO: Check how to do this dynamic using a for, receiving a list with images.
      <div>
        <h3>Bestsellers...</h3>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="img-responsive caurosel-img"
              src={images.carnaval}
              alt="First slide"
              width={img_dim.width}
              height={img_dim.height}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-responsive  caurosel-img"
              src={images.cubetazo}
              alt="Second slide"
              width={img_dim.width}
              height={img_dim.height}
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-responsive caurosel-img"
              src={images.frutal}
              alt="Third slide"
              width={img_dim.width}
              height={img_dim.height}
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-responsive caurosel-img"
              src={images.huevos}
              alt="Third slide"
              width={img_dim.width}
              height={img_dim.height}
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-responsive caurosel-img"
              src={images.pincher}
              alt="Third slide"
              width={img_dim.width}
              height={img_dim.height}
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
