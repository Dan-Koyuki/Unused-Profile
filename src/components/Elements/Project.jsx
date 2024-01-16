import React, { useState } from "react";
import { StyledTitle } from "../../styles/About";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper CSS
import { portfolio } from "../Utils/Portfolio";
import { Pagination, A11y, EffectCoverflow } from "swiper/modules";
import { PortDesc, PortImg, PortfolioContainer, StyledSkill, StyledTab, TabButton } from "../../styles/Skill";

const Project = () => {
  const [isTab, setIsTab] = useState(1);

  const handleVisit = (link) => {
    window.open(link);
  };

  return (
    <StyledSkill>
      <StyledTitle>
        <h2>Portfolio</h2>
      </StyledTitle>
      <StyledTab>
        <Swiper
          modules={[Pagination, A11y]}
          slidesPerView={3}
          grabCursor={true}
        >
          {portfolio.map((project) => (
            <SwiperSlide key={project.id}>
              <TabButton
                active={isTab === project.id}
                onClick={() => setIsTab(project.id)}
              >
                {project.name}
              </TabButton>
            </SwiperSlide>
          ))}
        </Swiper>
      </StyledTab>
      {portfolio.map((project) =>
        project.id === isTab ? (
          <PortfolioContainer className={isTab === project.id ? 'active' : ''}>
            <PortDesc>
              <Swiper
                modules={[EffectCoverflow, Pagination, A11y]}
                effect={'coverflow'}
                centeredSlides={true}
                grabCursor={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2,
                  slideShadows: true,
                }}
                loop={true}
              >
                {project.images?.map((image, index) => (
                  <SwiperSlide key={index}>
                    <PortImg src={image} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </PortDesc>
            <PortDesc>
              <p>{project.desc}</p>
            </PortDesc>
          </PortfolioContainer>
        ) : null
      )}
    </StyledSkill>
  );
};

export default Project;
