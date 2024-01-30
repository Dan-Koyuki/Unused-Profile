import React from 'react'
import { ContactItem, DetailsContainer, ItemContainer, ItemDescription, ItemTitle, ResumeBackground, ResumeContact, ResumeContainer, ResumeName, ResumeTitle } from '../../styles/Resume'

const Resume = () => {
  return (
    <ResumeBackground>
      <ResumeContainer>
        <ResumeName>IRWANTO DANANG BAHTIAR</ResumeName>
        <ResumeTitle>Aspiring Web Developer</ResumeTitle>
        <ResumeContact>
          <ContactItem>dankoyuki@gmail.com</ContactItem>
          <ContactItem>+62 821-1642-4576</ContactItem>
          <ContactItem>Majengka, West Java</ContactItem>
          <ContactItem>Placeholder</ContactItem>
          <ContactItem>Placeholder2</ContactItem>
          <ContactItem>Placeholder3</ContactItem>
        </ResumeContact>
        <DetailsContainer>
          <ItemContainer>
            <ItemTitle>WORK EXPERIENCE</ItemTitle>
            <ItemTitle>PROJECTS</ItemTitle>
          </ItemContainer>
          <ItemContainer>
            <ItemTitle>{`CAREER\nOBJECTIVE`}</ItemTitle>
            <ItemDescription>Aspiring software engineer with a passion for coding and a keen interest in web and mobile development.</ItemDescription>
            <ItemDescription>Eager to leverage my skills and education in Informatics to contribute to dynamic projects, solve complex problems, and create innovative solutions.</ItemDescription>
            <ItemDescription>Committed to continuous learning and growth in the fast-paced world of technology.</ItemDescription>
            <ItemTitle>EDUCATION</ItemTitle>
            <ItemDescription>Pursuing Bachelor of Informatic</ItemDescription>
            <ItemDescription>Informatic Engineering</ItemDescription>
            <ItemDescription>State Islamic University of Sunan Gunung Djati</ItemDescription>
            <ItemDescription>2021 - Current</ItemDescription>
            <ItemDescription>Bandung, West Java</ItemDescription>
            <ItemTitle>SKILLS</ItemTitle>
          </ItemContainer>
        </DetailsContainer>
      </ResumeContainer>
    </ResumeBackground>
  )
}

export default Resume