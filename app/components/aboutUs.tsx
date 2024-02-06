"use client"
import Image from "next/image";
import aboutStyles from './css/about.module.css';
import ImageCard from "./about-ecx/imageCard";
import React, { SyntheticEvent, useState } from "react";


const AboutECX = () => {
  const [currentAboutSection, setCurrentAboutSection] = useState("who-we-are")

  const handleNavigation = (event: SyntheticEvent) => {
    const target = event.target as HTMLButtonElement
    const content = target.innerHTML.toLocaleLowerCase().replaceAll(" ", "-")
    setCurrentAboutSection(content)
  }

  return (
    <div id="about" className={aboutStyles.about}>
      <ImageCard color={
        currentAboutSection === "who-we-are" ? "dart" :
        currentAboutSection === "mission" ? "swift" : "ruby"
      }>
        <Image
          fill
          alt={
            currentAboutSection === "who-we-are" ? "who-we-are" :
            currentAboutSection === "mission" ? "mission" : "vision"
          }
          src={
            currentAboutSection === "who-we-are" ? "/about/who-we-are.jpg" :
            currentAboutSection === "mission" ? "/about/mission.jpg" : "/about/vision.jpg"
          }
        />
      </ImageCard>
      <div className={aboutStyles.about_content_ctn}>
        <h2 className={aboutStyles.about_title}>About ECX</h2>
        <nav className={`${aboutStyles.about_nav} ${aboutStyles[currentAboutSection]}`}>
          <button
            className={currentAboutSection==="aboutSection1"?aboutStyles.button_dart:""}
            onClick={handleNavigation}
          >
            Who we are
          </button>
          <button
            className={(currentAboutSection === "aboutSection2")?aboutStyles.button_swift:""}
            onClick={handleNavigation}
          >
            Mission
          </button>
          <button
            className={(currentAboutSection === "aboutSection3")?aboutStyles.button_ruby:""}
            onClick={handleNavigation}
          >
            Vision
          </button>
        </nav>
        <p className={aboutStyles.paragraph}>
          {currentAboutSection === "who-we-are" && <>
            ECX is a dynamic student-led team of dedicated individuals who are committed to making a positive impact by providing students with the skills needed to excel in their careers. 
            <span className={aboutStyles.lineBreak} />
            We offer a range of training programs tailored to different skill levels and interests, from soft-skills coaching to virtual and physical training on various technical skills, while providing a supportive and interactive learning environment.
          </>}
          {currentAboutSection === "mission" && <>
            Our mission at the Engineering Career Expo (ECX) is to empower and equip students with the necessary resources and guidance needed to enhance their technical expertise and cultivate soft skills to excel in their transition into the industry.
            <span className={aboutStyles.lineBreak} />
            We're proud to have made a positive impact on countless students over the last four years and are committed to continuing our mission of empowering others through education
          </>}
          {currentAboutSection === "vision" && <>
            At ECX, we envision a future where every student embraces a seamless transition from academia to industry—with empowered technical knowledge, mentorship, and opportunities.
            <span className={aboutStyles.lineBreak} />
            Our vision is to foster an ecosystem that not only bridges the gap between education and the professional realm but also fosters a culture of innovation, diversity, and continuous learning
          </>}
        </p>
      </div>

      <div className={`${aboutStyles.about_vector} ${aboutStyles.about_vector_ruby}`}>
        <Image
          src={"/about/vector-ruby.svg"}
          alt={"vector"}
          width={260}
          height={260}
        />
      </div>
      <div className={`${aboutStyles.about_vector} ${aboutStyles.about_vector_dart}`}>
        <Image
          src={"/about/vector-dart.svg"}
          alt={"vector"}
          width={260}
          height={260}
        />
      </div>
    </div>
  )
}

export default AboutECX;
