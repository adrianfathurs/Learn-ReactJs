import React from 'react'
import './YoutubeCard.css'
const youtubeCard = (props) => {
  return(
    <div className="youtube-card">
      <div className="img-thumb">
        <img src={props.items.image} alt=""/>
        <p className="time">07.20</p>
      </div>
      <p className="title">{props.items.title}</p>
      <p className="desc">Desc Here</p>
    </div>
  )
}

youtubeCard.defaultProps = {
  items:{
    image:'https://www.freecodecamp.org/news/content/images/2020/04/Copy-of-Copy-of-Travel-Photography.png',
    title: 'Tutorial Framework Javascript'
  }
}

export default youtubeCard;