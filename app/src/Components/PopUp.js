import React, { Component } from 'react';
import '../css/PopUp.css';
import ImageComp from './ImageComp.js';

class PopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id:this.props.id,
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

  closePopUp=()=>{
    this.props.closePopUp();
  }

  render() {
    const {id,car_name,provider,color,produce_date
        ,receiving_date,price,accident,displacement,distance_driven
        ,fuel,transmission}=this.state;
    return(
      <div id="popup">
        <div><ImageComp id={id}></ImageComp></div>
        <div id="desc">

          <div id="left">
            <div><span>아이디</span><span>{id}</span></div>
            <div><span>차량명</span><span>{car_name}</span></div>
            <div><span>제조사</span><span>{provider}</span></div>
            <div><span>색깔</span><span>{color}</span></div>
            <div><span>제조일</span><span>{produce_date}</span></div>
            <div><span>입고일</span><span>{receiving_date}</span></div>
            <div><span>가격</span><span>{price}</span></div>
            <div><span>사고유무</span><span>{accident}</span></div>
          </div>

          <div id="right">
            <div><span>배기량</span><span>{displacement}</span></div>
            <div><span>주행거리</span><span>{distance_driven}</span></div>
            <div><span>연료</span><span>{fuel}</span></div>
            <div><span>변속기</span><span>{transmission}</span></div>
            <div><span>판매자</span><span>박승학 딜러</span></div>
            <div><span>판매처</span><span>경기도이치오토월드</span></div>
            <div><span>판매자 연락처</span><span>010-2508-7298</span></div>
            <div><span>구매신청</span><span>문자전송</span></div>
          </div>
      
        </div>

        <button onClick={this.closePopUp}>닫기</button>

      </div>
    );
  }
}

export default PopUp;