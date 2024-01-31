import React, { useState } from "react";
import {
  Container,
  StyledSkill,
  StyledTab,
  TabButton,
} from "../../styles/Skill";
import { StyledTitle } from "../../styles/About";
import { framework, Language, PL, Tools } from "../Utils/Skill";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Skill = () => {
  const [isTab, setIsTab] = useState("F");

  return (
    <StyledSkill>
      <StyledTitle>
        <h2>Skill (Placeholder)</h2>
      </StyledTitle>
      <StyledTab>
        <TabButton active={isTab === "PL"} onClick={() => setIsTab("PL")}>
          Programming Language
        </TabButton>
        <TabButton active={isTab === "F"} onClick={() => setIsTab("F")}>
          Framework
        </TabButton>
        <TabButton active={isTab === "T"} onClick={() => setIsTab("T")}>
          Utility
        </TabButton>
        <TabButton active={isTab === "L"} onClick={() => setIsTab("L")}>
          Language
        </TabButton>
      </StyledTab>
      <Container>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          grabCursor={true}
          centeredSlides={true}
        >
          {isTab === "PL"
          ? PL.map((language) => (
            <SwiperSlide key={language.id}>
              <img src={language.image} alt={language.name} />
            </SwiperSlide>
            ))
          : isTab === "F"
          ? framework.map((frame) => (
            <SwiperSlide key={frame.id}>
              <img src={frame.image} alt={frame.name} />
            </SwiperSlide>
            ))
          : isTab === "T"
          ? Tools.map((frame) => (
            <SwiperSlide key={frame.id}>
              <img src={frame.image} alt={frame.name} />
            </SwiperSlide>
            ))
          : isTab === "L"
          ? Language.map((frame) => (
            <SwiperSlide key={frame.id}>
              <img src={frame.image} alt={frame.name} />
            </SwiperSlide>
            ))
          : null}
        </Swiper>
      </Container>
    </StyledSkill>
  );
};

export default Skill;
