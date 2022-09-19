import React from 'react'
import classes from './SectionTitle.module.css'

const SectionTitle = (props) => {
  const { subTitle, title, desc } = props.aboutTitle
  return (
    <div className={classes.section__title}>
      <h4 className={classes.subTitle}>{subTitle}</h4>
      <h1 className={classes.title}>{title}</h1>
      <p className={classes.desc}>{desc}</p>
    </div>
  )
}

export default SectionTitle
