import { Meteor } from 'meteor/meteor';

import Forecast from '../imports/api/forecast.js'

Meteor.startup(() => {
  // code to run on server at startup
  //console.log("fore",Forecast.find().fetch());
  if (Forecast.find().count() === 0) {
    Forecast.insert({
      "name": "Week 1",
      "days": [
        {
          "dayName": "Monday",
          "minTemp": 20,
          "maxTemp": 40,
          "status": "Mostly sunny"
        },
        {
          "dayName": "Tuesday",
          "minTemp": 30,
          "maxTemp": 37,
          "status": "Mostly sunny"
        },
        {
          "dayName": "Wednesday",
          "minTemp": 40,
          "maxTemp": 50,
          "status": "Sunny"
        },
        {
          "dayName": "Thursday",
          "minTemp": 20,
          "maxTemp": 25,
          "status": "Rainy"
        },
        {
          "dayName": "Friday",
          "minTemp": 20,
          "maxTemp": 28,
          "status": "Cloudy"
        },
        {
          "dayName": "Saturday",
          "minTemp": 20,
          "maxTemp": 23,
          "status": "Cloudy"
        },
        {
          "dayName": "Sunday",
          "minTemp": 17,
          "maxTemp": 24,
          "status": "Rainy"
        }
      ]
    });
    Forecast.insert({
      "name": "Week 2",
      "days": [
        {
          "dayName": "Monday",
          "minTemp": 35,
          "maxTemp": 40,
          "status": "Sunny"
        },
        {
          "dayName": "Tuesday",
          "minTemp": 12,
          "maxTemp": 20,
          "status": "Rainy"
        },
        {
          "dayName": "Wednesday",
          "minTemp": 34,
          "maxTemp": 39,
          "status": "Sunny"
        },
        {
          "dayName": "Thursday",
          "minTemp": 20,
          "maxTemp": 25,
          "status": "Rainy"
        },
        {
          "dayName": "Friday",
          "minTemp": 30,
          "maxTemp": 33,
          "status": "Sunny"
        },
        {
          "dayName": "Saturday",
          "minTemp": 20,
          "maxTemp": 23,
          "status": "Cloudy"
        },
        {
          "dayName": "Sunday",
          "minTemp": 17,
          "maxTemp": 24,
          "status": "Rainy"
        }
      ]
    });
    Forecast.insert({
      "name": "Week 3",
      "days": [
        {
          "dayName": "Monday",
          "minTemp": 10,
          "maxTemp": 12,
          "status": "Rainy"
        },
        {
          "dayName": "Tuesday",
          "minTemp": 17,
          "maxTemp": 20,
          "status": "Rainy"
        },
        {
          "dayName": "Wednesday",
          "minTemp": 15,
          "maxTemp": 16,
          "status": "Cloudy"
        },
        {
          "dayName": "Thursday",
          "minTemp": 20,
          "maxTemp": 25,
          "status": "Rainy"
        },
        {
          "dayName": "Friday",
          "minTemp": 20,
          "maxTemp": 28,
          "status": "Mostly sunny"
        },
        {
          "dayName": "Saturday",
          "minTemp": 20,
          "maxTemp": 23,
          "status": "Cloudy"
        },
        {
          "dayName": "Sunday",
          "minTemp": 19,
          "maxTemp": 21,
          "status": "Mostly sunny"
        }
      ]
    });
    Forecast.insert({
      "name": "Week 4",
      "days": [
        {
          "dayName": "Monday",
          "minTemp": 20,
          "maxTemp": 22,
          "status": "Cloudy"
        },
        {
          "dayName": "Tuesday",
          "minTemp": 30,
          "maxTemp": 37,
          "status": "Sunny"
        },
        {
          "dayName": "Wednesday",
          "minTemp": 40,
          "maxTemp": 50,
          "status": "Sunny"
        },
        {
          "dayName": "Thursday",
          "minTemp": 26,
          "maxTemp": 30,
          "status": "Mostly sunny"
        },
        {
          "dayName": "Friday",
          "minTemp": 20,
          "maxTemp": 28,
          "status": "Cloudy"
        },
        {
          "dayName": "Saturday",
          "minTemp": 8,
          "maxTemp": 23,
          "status": "Rainy"
        },
        {
          "dayName": "Sunday",
          "minTemp": 17,
          "maxTemp": 24,
          "status": "Rainy"
        }
      ]
    });
  }
});
