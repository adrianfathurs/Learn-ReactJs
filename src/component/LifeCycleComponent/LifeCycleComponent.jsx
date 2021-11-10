import React, {Component} from 'react'

class LifeCycleComponent extends Component{
  constructor(props){
    super(props)
    this.state={
      count:1
    }
    console.log("Ini Constructor");
  }
  static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromProps")
    return null
  }
  componentDidMount(){
    console.log("componentDidMount")
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log("shouldComponent Update")
    if(nextState.count>10){
      console.log("shouldComponent Update Berhenti Menampilkan element")
      return false
    }else{
      console.log("shouldComponent Update Lanjut Menampilkan element")
      return true;
    }
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("getSnapshotBeforeUpdate")
    return null
  }
  componentDidUpdate(prevProps,prevState,snapshot){
    console.log("component Did Update", prevProps,prevState,snapshot)
  }
  componentWillUnmount(){
    console.log("component Will Unmount")
  }
  counterFunc=()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  subStractFunc=()=>{
    this.setState({
      count:this.state.count-1
    })
  }
  render(){
    const number=this.state.count;
    return (
      <div>
        <h4>{number}</h4>
        <button onClick={this.counterFunc}> Tambah kan Number</button>
        <button onClick={this.subStractFunc}> Tambah kan Number</button>
      </div>
    )
  }
}
export default LifeCycleComponent;