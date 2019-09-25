import React, { Component } from "react";
import { withTracker } from 'meteor/react-meteor-data';

import Forecast from '../api/forecast.js';
import WeekForecast from './WeekForecast';

class MonthForecast extends Component {

    renderWeeks() {
        return this.props.forecast.map((w) => (
            //console.log(w);
            <WeekForecast key={w.name} value={w} />
        ));
        /*
        return this.props.forecast.map((d) => (
            <MonthForecast key={d._id} report={d} />
        ));*/
    }

    render() {
        return (
            <div className="container-float">
                <div className="row justify-content-center">
                    <h1 className="text-primary">September Forecast</h1>
                </div>
                <div className="row">
                    <div class="col-12">
                        {this.renderWeeks()}
                    </div>
                </div>

            </div>
        );
    }
}

export default withTracker(() => {
    return {
        forecast: Forecast.find({}).fetch(),
    };
})(MonthForecast);