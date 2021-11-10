import React,{Fragment} from 'react'
import './CardGalery'
const CardGalery = (props) =>{
  
  return(
    <Fragment>
      <div className="youtube-card">
        <div className="img-thumb">
          <img src="https://placeimg.com/200/250/tech" alt="" />
          <p className="time">07.20</p>
        </div>
        <p className="title">{props.item.title}</p>
        <p className="desc">{props.item.body}</p>
      </div>
    </Fragment>
  )
}
export default CardGalery;