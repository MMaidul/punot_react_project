import React from 'react'
import Button from '../../UI/Button/Button'
import './Hero.css'

const hero = [
  {
    id: 1746,
    img: 'url(/src/assets/img/banner/banner.jpg)',
    subTitle: 'welcome to our agency',
    title: 'Gain the beautiful result',
  },
]

const Hero = () => {
  const heroJSON = hero.map((hero) => <HeroSection key={hero.id} hero={hero} />)
  return <div>{heroJSON}</div>
}

const HeroSection = ({ hero }) => {
  const { img, subTitle, title } = hero
  const imgBackground = {
    background: img,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <div className="hero__container" style={imgBackground}>
      <h4 className="hero__subTitle">{subTitle}</h4>
      <h1 className="hero__title">{title}</h1>
      <div className="hero__btn">
        <div style={{ marginRight: '2rem' }}>
          <Button text="Learn More" variant="warning" />
        </div>
        <Button text="Contact Us" variant="outline_warning" />
      </div>
    </div>
  )
}

export default Hero
