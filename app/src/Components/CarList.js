import React, { Component } from 'react';
import Car from './Car.js';

class CarList extends Component {
  constructor(props) {
    super(props);
    this.state={
      setCurrentCarList:this.props.setCurrentCarList,
      carNameInfo:this.props.carNameInfo,
      carColorInfo:this.props.carColorInfo
    }
  }

  render() {
    const {carList,carNameInfo,carColorInfo}=this.props;
    const carListRender=carList.map(data=>(<Car key={data.id} id={data.id} 
    img_src={"./images/"+carNameInfo[data.car_name]+"_"+carColorInfo[data.color]+".jpg"}
    car_name={data.car_name}
    provider={data.provider}  color={data.color} produce_date={data.produce_date}
    receiving_date={data.receiving_date} price={data.price} accident={data.accident} 
    displacement={data.displacement} distance_driven={data.distance_driven} fuel={data.fuel} 
    transmission={data.transmission} 
    ></Car>))
    
    return(
      <div>
        {
          carListRender
        }
      </div>
    );
  }
}

export default CarList;