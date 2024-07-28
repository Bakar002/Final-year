import React from 'react';
import GaugeComponent from 'react-gauge-component';

const Gauge = ({ value, text, color }) => {
  return (

      <GaugeComponent
        id="gauge-component4"
        arc={{



          subArcs: [
            {
              limit: 15,
              color: '#EA4228',
              showTick: true,
            },
            {
              limit: 37,
              color: '#F5CD19',
              showTick: true,
            },
            {
              limit: 58,
              color: '#5BE12C',
              showTick: true,
            },
            {
              limit: 75,
              color: '#F5CD19',
              showTick: true,
            },
            { color: '#EA4228' },
          ],
        }}
        value={50}
        pointer={{ type: 'arrow', elastic: true }}
      />

  );
};

export default Gauge;
