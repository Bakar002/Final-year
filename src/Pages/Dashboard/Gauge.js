import React from 'react';
import GaugeComponent from 'react-gauge-component';

const Gauge = ({ value, text, color, size = 200 }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <GaugeComponent
        id="gauge-component"
        arc={{
          subArcs: [
            {
              limit: 15,
              color: '#EA4228', // Red for critical
              showTick: true,
            },
            {
              limit: 37,
              color: '#F5CD19', // Yellow for caution
              showTick: true,
            },
            {
              limit: 58,
              color: '#5BE12C', // Green for safe
              showTick: true,
            },
            {
              limit: 75,
              color: '#F5CD19', // Yellow for caution
              showTick: true,
            },
            { color: '#EA4228' }, // Red for critical
          ],
        }}
        value={value}
        pointer={{ type: 'arrow', elastic: true }}
        size={size}
      />
      <div className="mt-4 text-lg font-semibold text-center" style={{ color }}>
        {text}
      </div>
    </div>
  );
};

export default Gauge;
