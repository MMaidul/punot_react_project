import React from 'react'
import Button from '../../UI/Button/Button'
import SectionTitle from '../../UI/SectionTitle/SectionTitle'
import './About.css'

const sectionJSON = {
  sectionTitle: [
    {
      id: 9898,
      subTitle: 'what we do',
      title: 'About us',
      desc:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit at eos debitis esse perferendis culpa repellat accusantium eligendi blanditiis quaerat.',
    },
  ],
  sectionContent: [
    {
      id: 6767,
      title: 'Welcome to our website',
      desc1:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis corrupti voluptas libero eaque magnam unde sed vitae labore asperiores enim! Sed, perferendis temporibus. Temporibus, porro',
      desc2:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis corrupti voluptas libero eaque magnam unde sed vitae labore asperiores enim! Sed, perferendis temporibus. Temporibus, porro',
      desc3:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis corrupti voluptas libero eaque magnam unde sed vitae labore asperiores enim! Sed, perferendis temporibus. Temporibus, porro',
    },
  ],
  img: [
    {
      id: 8799,
      img: '/src/assets/img/about/about.jpg',
    },
  ],
}

const AboutContainer = ({ container }) => {
  const { title, desc1, desc2, desc3 } = container
  return (
    <div className="about__container">
      <h1 className="title">{title}</h1>
      <p className="desc">{desc1}</p>
      <p className="desc">{desc2}</p>
      <p className="desc">{desc3}</p>
      <br />
      <Button text="Read More" variant="warning" />
    </div>
  )
}
const AboutImg = ({ image }) => {
  const { img } = image
  return (
    <div className="about__img">
      <img src={img} alt="" />
    </div>
  )
}
const About = () => {
  // section title;
  const sectionTitle = sectionJSON.sectionTitle.map((aboutTitle) => (
    <SectionTitle key={aboutTitle.id} aboutTitle={aboutTitle} />
  ))
  //section left container;
  const sectionContainer = sectionJSON.sectionContent.map((container) => (
    <AboutContainer key={container.id} container={container} />
  ))
  //section right img;
  const sectionImg = sectionJSON.img.map((image) => (
    <AboutImg key={image.id} image={image} />
  ))

  return (
    <>
      {sectionTitle}
      <div className="about__section">
        {sectionContainer}
        {sectionImg}
      </div>
    </>
  )
}

export default About
