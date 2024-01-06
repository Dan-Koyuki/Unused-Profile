import React from 'react';
import { StyledTitle } from '../../styles/About';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper CSS
import { portfolio } from '../Utils/Portfolio';
import { Navigation, Pagination, A11y, EffectCoverflow } from 'swiper/modules';
import { Container } from '../../styles/Portfolio';

const Project = () => {

  const handleVisit = (link) => {
    window.open(link)
  }

  return (
    <>
      <StyledTitle>
        <h2>Portfolio</h2>
      </StyledTitle>
      <Container>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1}
          navigation
          centeredSlides={true}
        >
          {portfolio.map(project => (
            <SwiperSlide key={project.id}>
              <h2>{project.name}</h2>
              <Swiper
                modules={[Navigation, A11y, Pagination, EffectCoverflow]}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                coverflowEffect={{
                  "rotate": 0,
                  "stretch": 0,
                  "depth": 1000,
                  "modifier": 1,
                  "slideShadows": true
                }}
              >
                {project.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img src={image} alt={`Project ${project.id} - Image ${index}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <h3>{project.desc}</h3>
              <h3>This Project is created using {project.frontend} along with {project.backend} as Backend.</h3>
              <button onClick={() => handleVisit(project.link)}>Visit</button>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
}
 
export default Project;
