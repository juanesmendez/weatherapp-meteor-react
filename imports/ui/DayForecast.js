import React, { Component } from 'react';


export default class DayForecast extends Component {

  checkImage() {
    console.log("Inside check Image");

    if (this.props.report.status === "Sunny") {
      console.log("Esta soleado");
      return <img src="https://pngriver.com/wp-content/uploads/2017/11/sun-transparent-png-images-free-download-Sun-PNG-Transparent-Image.png" alt="sun" height="100" width="130"></img>
    }

    if (this.props.report.status === "Rainy") {
      console.log("Esta soleado");
      return <img src="https://icon-library.net/images/rainy-icon/rainy-icon-1.jpg" alt="rainy" height="100" width="110"></img>
    }
    if (this.props.report.status === "Mostly sunny") {
      console.log("Esta soleado");
      return <img src="https://www.pngrepo.com/png/276664/170/cloudy-day-weather.png" alt="mostly sunny" height="100" width="110"></img>
    }
    if (this.props.report.status === "Cloudy") {
      console.log("Esta soleado");
      return <img src="https://image.flaticon.com/icons/svg/148/148828.svg" alt="cloudy" height="100" width="110"></img>
    }
    
  }

  render() {
    return (
      <div className="card">
        <div className="card-header text-center">
          <h5>{this.props.report.dayName}</h5>
        </div>
        <div className="card-body text-center">
          {this.checkImage()}
          <p>{this.props.report.status}</p>
          <h2>{this.props.report.maxTemp}</h2>
          <h5>{this.props.report.minTemp}</h5>
          
          
        </div>

      </div>

    );
  }
}