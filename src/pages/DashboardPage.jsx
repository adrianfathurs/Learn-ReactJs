import React from 'react'
import TitleComponents from '../component/TitleComponents'
import YoutubeCard from '../component/CardComponent/YoutubeCard'
import CounterComponent from '../component/CounterComponent/CounterComponent'
import LifeCycleComponent from '../component/LifeCycleComponent/LifeCycleComponent'
import GaleryComponent from '../component/GaleryComponent/GaleryComponent'

import './DashboardPage'


const loopingCard = () => {
  let list = [];
  let item = [
    {
      title: 'React JS',
      image: 'https://miro.medium.com/max/1400/1*CeuWv9fCjD1uTiTuKytnBQ.png'
    },
    {
      title: 'Vue JS',
      image: 'https://cdn.shortpixel.ai/spai/w_903+q_lossy+ret_img+to_webp/https://adinata.id/wp-content/uploads/2020/02/vuejs.jpeg'
    },
  ]
  for (let index = 0; index < item.length; index++) {
    list.push(<YoutubeCard key={index} items={item[index]} />)
  }

  return list;
}

class DashboardPage extends React.Component{
  state={
    showComponentLifeCycle:true
  }  
  componentDidMount(){
      setTimeout(() => {
        this.setState({
          showComponentLifeCycle:false
        })
      }, 12000);
    }
    render(){
      let youtubeLooping=[];
      youtubeLooping = loopingCard();
      return (
        <div>
          <TitleComponents name="Youtube Components"/>
          <hr/>
          <div>
            {youtubeLooping}
          </div>
          <TitleComponents name="Parent Notification using child Counter" />
          <hr/>
          <div>
            <CounterComponent/>
          </div>
          <TitleComponents name="Life Cycle React on Console" />
          <hr/>
          <div>{
            this.state.showComponentLifeCycle ? <LifeCycleComponent/> : null
          }
          </div>
          <TitleComponents name="JSON PLACEHOLDER (Dynamic Data)" />
          <hr/>
          <div>
            <GaleryComponent></GaleryComponent>
          </div>
        </div>
      );
    }
}
export default DashboardPage;