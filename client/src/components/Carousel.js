import Carousel from 'react-bootstrap/Carousel';

const CustomCarousel=({data})=>{
    console.log('carousel data is ',data)

    return(

        <div>
      <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="img-fluid"
          src={data[0].ImageUrl}
          alt="First slide"
          
        />
        <Carousel.Caption>
          <h3>{data[0].Title}</h3>
          <p> {data[0].Description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-80"
          src={data[1].ImageUrl}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>{data[1].Title}</h3>
          <p> {data[1].Description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-80"
          src={data[2].ImageUrl}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>{data[2].Title}</h3>
          <p>
          {data[2].Description}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    

);
}

export default CustomCarousel;