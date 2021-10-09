import React, { Component } from 'react';
import '../css/ImageComp.css';

class ImageComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id:this.props.id,
        main:'./images/detail/'+this.props.id+"/front_left.jpg",
        front_left:'./images/detail/'+this.props.id+"/front_left.jpg",
        front_right:'./images/detail/'+this.props.id+"/front_right.jpg",
        back_left:'./images/detail/'+this.props.id+"/back_left.jpg",
        back_right:'./images/detail/'+this.props.id+"/back_right.jpg",
        wheel:'./images/detail/'+this.props.id+"/wheel.jpg",
        engine:'./images/detail/'+this.props.id+"/engine.jpg",
        front_seat1:'./images/detail/'+this.props.id+"/front_seat1.jpg",
        meter:'./images/detail/'+this.props.id+"/meter.jpg",
        automation:'./images/detail/'+this.props.id+"/automation.jpg",
        front_seat2:'./images/detail/'+this.props.id+"/front_seat2.jpg",
        front_seat3:'./images/detail/'+this.props.id+"/front_seat3.jpg",
        back_seat1:'./images/detail/'+this.props.id+"/back_seat1.jpg",
        navi:'./images/detail/'+this.props.id+"/navi.jpg",
        steering:'./images/detail/'+this.props.id+"/steering.jpg",
        navi_camera:'./images/detail/'+this.props.id+"/navi_camera.jpg",
        navi_use:'./images/detail/'+this.props.id+"/navi_use.jpg",
        control:'./images/detail/'+this.props.id+"/control.jpg",
        engine_start:'./images/detail/'+this.props.id+"/engine_start.jpg",
        top_mirror:'./images/detail/'+this.props.id+"/top_mirror.jpg",
        top_lamp:'./images/detail/'+this.props.id+"/top_lamp.jpg",  
      }
  }

  changeImg=(e)=>{
    var full_img_location='./images/detail/'+this.props.id+"/"+e.currentTarget.id+".jpg";
    document.getElementById("main").firstChild.setAttribute('src',full_img_location);
  }

  render() {

    return(
      <div id="image-comp">
          <div id="main"><img src={this.state.main}></img></div>
          
          <div id="img_list">
            <div onClick={this.changeImg} id="front_left"><img src={this.state.front_left} ></img></div>
            <div onClick={this.changeImg} id="front_right"><img src={this.state.front_right}></img></div>
            <div onClick={this.changeImg} id="back_left"><img src={this.state.back_left}></img></div>
            <div onClick={this.changeImg} id="back_right"><img src={this.state.back_right}></img></div>
            <div onClick={this.changeImg} id="wheel"><img src={this.state.wheel}></img></div>
            <div onClick={this.changeImg} id="engine"><img src={this.state.engine}></img></div>
            <div onClick={this.changeImg} id="front_seat1"><img src={this.state.front_seat1}></img></div>
            <div onClick={this.changeImg} id="meter"><img src={this.state.meter}></img></div>
            <div onClick={this.changeImg} id="automation"><img src={this.state.automation}></img></div>
            <div onClick={this.changeImg} id="front_seat2"><img src={this.state.front_seat2}></img></div>
            <div onClick={this.changeImg} id="front_seat3"><img src={this.state.front_seat3}></img></div>
            <div onClick={this.changeImg} id="back_seat1"><img src={this.state.back_seat1}></img></div>
            <div onClick={this.changeImg} id="navi"><img src={this.state.navi}></img></div>
            <div onClick={this.changeImg} id="steering"><img src={this.state.steering}></img></div>
            <div onClick={this.changeImg} id="navi_camera"><img src={this.state.navi_camera}></img></div>
            <div onClick={this.changeImg} id="navi_use"><img src={this.state.navi_use}></img></div>
            <div onClick={this.changeImg} id="control"><img src={this.state.control}></img></div>
            <div onClick={this.changeImg} id="engine_start"><img src={this.state.engine_start}></img></div>
            <div onClick={this.changeImg} id="top_mirror"><img src={this.state.top_mirror}></img></div>
            <div onClick={this.changeImg} id="top_lamp"><img src={this.state.top_lamp}></img></div>
            
          </div>
      </div>
    );
  }
}

export default ImageComp;