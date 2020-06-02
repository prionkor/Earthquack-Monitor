import React from 'react';
import { Marker } from '@react-google-maps/api';

function styleFeature(mag) {
    var low = [151, 83, 34];   // color of mag 1.0
    var high = [5, 69, 54];  // color of mag 6.0 and above
    var minMag = 1.0;
    var maxMag = 6.0;

    // fraction represents where the value sits between the min and max
    var fraction = (Math.min(mag, maxMag) - minMag) /
        (maxMag - minMag);

    var color = interpolateHsl(low, high, fraction);

    return {
      icon: {
        path: window.google.maps.SymbolPath.CIRCLE,
        strokeWeight: 0.5,
        strokeColor: 'transparent',
        fillColor: color,
        fillOpacity: .2, // 2/mag
        // while an exponent would technically be correct, quadratic looks nicer
        scale: Math.pow(mag, 2)
      },
      zIndex: Math.floor(mag)
    };
  }

  function interpolateHsl(lowHsl, highHsl, fraction) {
    var color = [];
    for (var i = 0; i < 3; i++) {
      // Calculate color based on the fraction.
      color[i] = (highHsl[i] - lowHsl[i]) * fraction + lowHsl[i];
    }

    return 'hsl(' + color[0] + ',' + color[1] + '%,' + color[2] + '%)';
  }

export default ({ onHover, onBlur, position, magnitude, clusterer }) => {
  const markerProps = styleFeature(magnitude);
  return <Marker
    onMouseOver={onHover}
    onMouseOut={onBlur}
    position={position}
    clusterer={clusterer}
    {...markerProps}
  />
}