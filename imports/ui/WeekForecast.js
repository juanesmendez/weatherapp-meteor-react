import React, { Component } from "react";
import { withTracker } from 'meteor/react-meteor-data';

import { Forecast } from '../api/forecast.js';
import DayForecast from "./DayForecast.js";

class WeekForecast extends Component {

    state = {
        name: this.props.value.name,
        days: this.props.value.days
    }

    componentDidMount() {
        /*
        console.log("Inside component did mount of Week Forecast");
        console.log(`Name: ${this.state.name}`);
        console.log(`Days: ${this.state.days}`);
        for (let i of this.state.days) {
            console.log(i);
        }*/
    }

    renderDays() {
        return this.state.days.map((d) => (
            <DayForecast key={d._id} report={d} />
        ));
    }

    render() {
        return (
            <div className="card">
                <div className="card-header bg-success text-center">
                    <h3>{this.state.name}</h3>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <div className="card-group">
                            {this.renderDays()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WeekForecast;