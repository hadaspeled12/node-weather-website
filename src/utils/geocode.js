
const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?limit=1&access_token=pk.eyJ1IjoiaGFkYXNwZWxlZCIsImEiOiJja3J1eTRheDcwMWVyMnBwc2s2b3Y3MzFrIn0.CmMwWwW9h04x2z19-ikFIw'
    request({url, json: true}, (error, { body } = {}) => {
      if (error) {
        callback('Unable to connect to location services!', undefined)
      } else if (body.features.length === 0) { 
        callback('Unable to find location. Try another search!', undefined)
      } else {
        callback(undefined, {
            latitude: body.features[0].center[0],
            longtitude: body.features[0].center[1],
            location: body.features[0].place_name
        })
      }  
    })
  }

  module.exports = geocode