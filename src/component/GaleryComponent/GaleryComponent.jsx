import React, {Component,Fragment} from 'react'
import {getAllData} from "../../utils/api"
import CardGalery from './CardGalery';

class GaleryComponent extends Component{
  state={
    dataPost:[]
  }
  componentDidMount(){
    this.getData();
  }
  getData= async ()=>{
      let response = await getAllData();
      console.log(response)
      this.setState({
        dataPost:response.data
      })
  }
  render(){
    const dataAll= this.state.dataPost
    return (
      <Fragment>
        {
          dataAll.map((result) => {
            return <CardGalery key={result.id} item={result} />
          })
        }
      </Fragment>
    )
  }
}

export default GaleryComponent;