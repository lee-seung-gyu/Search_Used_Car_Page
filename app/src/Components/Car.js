import React, { Component } from 'react';
import PopUp from './PopUp.js';
import '../css/Car.css';

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popup_open:false,
      id:this.props.id,
      img_src:this.props.img_src,
      car_name:this.props.car_name,
      provider:this.props.provider,
      color:this.props.color,
      produce_date:this.props.produce_date,
      receiving_date:this.props.receiving_date,
      price:this.props.price,
      accident:this.props.accident,
      displacement:this.props.displacement,
      distance_driven:this.props.distance_driven,
      fuel:this.props.fuel,
      transmission:this.props.transmission,
    }
  }
  seeDetail=()=>{
    const {popup_open}= this.state;
    this.setState({
      popup_open:!popup_open
    })
  }
  closePopUp=()=>{
    this.setState({
      popup_open:false
    })
  }

  render() {
    const {popup_open,id,img_src,car_name,provider,color,produce_date
      ,receiving_date,price,accident,displacement,distance_driven
      ,fuel,transmission}=this.state;
      return(
        <div id="car_component">
          <div><img src={img_src} alt="이미지"></img></div>
          
          <div id="desc">
          <div id="left">
          <div><span>차량명:</span><span>{car_name}</span></div>
          <div><span>제조사:</span><span>{provider}</span></div>
          <div><span>색깔:</span><span>{color}</span></div>
          </div>
          <div id="right">
          <div><span>가격:</span><span>{price}</span></div>
          <div><span>사고유무:</span><span>{accident}</span></div>
          <div><span>주행거리:</span><span>{distance_driven}</span></div>
          </div>
          
          </div>
          <button onClick={this.seeDetail}>상세보기</button>
          {
            popup_open==true? <PopUp id={id} car_name={car_name}
            provider={provider}  color={color} produce_date={produce_date}
            receiving_date={receiving_date} price={price} accident={accident} 
            displacement={displacement} distance_driven={distance_driven} fuel={fuel} 
            transmission={transmission} closePopUp={this.closePopUp}></PopUp>:null
          }
        </div>
    );
  }
}

export default Car;