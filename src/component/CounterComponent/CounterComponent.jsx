import React,{Component,Fragment} from 'react'
import OperationCounter from './OperationCounter'
class CounterComponent extends Component{
  state={
    order:0
  }
  onHandleChange=(NewValue)=>{
    this.setState({
      order:NewValue
    })
  }
  render(){
    return(
      <Fragment>
          <h3>Angka Counter</h3>
          <h4>{this.state.order}</h4>
          <div>
            <OperationCounter onCounterChanged={(value)=>{this.onHandleChange(value)}} onHell="uttyy"></OperationCounter>
          </div>
      </Fragment> 
    );
  }
}

export default CounterComponent;