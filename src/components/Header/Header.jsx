import React from 'react'
import './header.css'

const header = {
  logo: [
    {
      id: 202,
      brandName: 'Punot',
      url: 'https:www.google.com',
    },
  ],
  menus: [
    {
      id: 1701,
      menuName: 'Home',
      url: 'https:www.google.com',
    },
    {
      id: 1702,
      menuName: 'About',
      url: 'https:www.google.com',
    },
    {
      id: 1703,
      menuName: 'Service',
      url: 'https:www.google.com',
    },
    {
      id: 1704,
      menuName: 'Projects',
      url: 'https:www.google.com',
    },
    {
      id: 1705,
      menuName: 'Testimonial',
      url: 'https:www.google.com',
    },
    {
      id: 1706,
      menuName: 'Blog',
      url: 'https:www.google.com',
    },
    {
      id: 1707,
      menuName: 'Contact',
      url: 'https:www.google.com',
    },
  ],
}
const Header = () => {
  //header logo;
  const brandName = header.logo.map((logo) => (
    <p key={logo.id}>{logo.brandName}</p>
  ))

  //header menu;
  const menu = header.menus.map((menu) => (
    <li key={menu.id} className="header__link">
      {menu.menuName}
    </li>
  ))
  return (
    <nav className="header__container">
      <div href="" className="header__logo">
        {brandName}
      </div>
      <ul className="header__menu">{menu}</ul>
    </nav>
  )
}

export default Header
