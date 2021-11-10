import React, { Component, Fragment } from 'react'

class OperationCounter extends Component{
  state={
    order:3,
    message:""
  }

  handleCounterChanged=(params)=>{
    this.props.onCounterChanged(params);
    console.log(this.props.onHell,"on Hell");
  }
  handlePlus = () => {
    let plus=this.state.order+1;
    this.setState({
        order: plus,
        message: ""
      })
    this.handleCounterChanged(plus)
  }
  //cara penulisan kedua
  // handlePlus = () => {
  //   this.setState({
  //       order: this.state.order + 1,
  //       message: ""
  //     },()=>{
  //         this.handleCounterChanged(this.state.order)
  //       }
  //   )
  // }
  //Cara Penulisan Pertama
    // handleSubstract = () => {
    //   if (this.state.order > 0) {
    //     this.setState({
    //       order: this.state.order - 1,
    //       message: ""
    //     },()=>{
    //       this.handleCounterChanged(this.state.order)
    //     })
    //   } else {
    //     this.setState({
    //       message: "Your Number Order is Zero"
    //     })
    //   }
    // }
    //Cara Penulisan Kedua, terdapat kelemahan yaitu redudansi variable dan berulang pengendalian
      handleSubstract=()=>{
        let substract=this.state.order-1
        if(substract>=0){
          this.setState({
            order:substract,
            message:"",
          })
          this.handleCounterChanged(substract)
        }else{
          this.setState({
            message:"Your Number Order is Zero"
          })
        }
      }
    
  render(){
    return(
      // tanda kurung ini bisa digunakan untuk mendeklarasikan fragment
        <>
        <p>{this.state.message}</p>
        <button onClick={this.handleSubstract}>Minus</button>
        <input type="text"  defaultValue={this.state.order} />
        <button onClick={this.handlePlus}>Plus</button>
        </>
    )
  }
}

export default OperationCounter;