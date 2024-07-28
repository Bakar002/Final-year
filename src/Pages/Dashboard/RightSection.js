import React from 'react';
// import Gauge from './Gauge';
import LineGraph from './LineGraph';
import Gauge from 'react-gauge-component'; // Assuming react-gauge-component is installed

const gaugeData = [
  { value: 70, text: '70%', color: '#FF0000', label: 'Engine Oil' },
  { value: 50, text: '50%', color: '#00FF00', label: 'Engine Coolant' },
  { value: 50, text: '50%', color: '#00FF00', label: 'Engine Coolant' },


];

const lineGraphData = [
  {
    id: 'Speed',
    color: 'hsl(252, 70%, 50%)',
    data: [
      { x: '1', y: 50 },
      { x: '2', y: 80 },
      { x: '3', y: 60 },
      { x: '4', y: 100 },
      { x: '5', y: 80 },
    ],
  },
  {
    id: 'RPM',
    color: 'hsl(100, 70%, 50%)',
    data: [
      { x: '1', y: 2000 },
      { x: '2', y: 2500 },
      { x: '3', y: 2200 },
      { x: '4', y: 3000 },
      { x: '5', y: 2800 },
    ],
  },
];

const RightSection = () => {
  return (
    <div className=" flex flex-col gap-4">
      <div className=" flex gap-2  ">
        {gaugeData.map((gauge, index) => (
          <div key={index} className="bg-black rounded-2xl flex items-center justify-center py-16 w-max h-auto">
<Gauge
              id={`gauge-${index}`} // Add unique ID for proper rendering
              value={gauge.value} // Pass the value for the gauge
              min={0} // Set minimum value (optional)
              max={100} // Set maximum value (optional)
              size={50} // Adjust size as needed
              colors={[gauge.color]} // Use gauge.color for a single color
              units={gauge.text} // Display text with percentage
              label={gauge.label} // Display label for the parameter
              pointer={{ type: 'arrow' }} // Use arrow pointer type
            />


          </div>
        ))}
          {/* <div className="flex-1 bg-black rounded-3xl p-2 py-10">
       
        <Gauge
  value={50}
  type="radial"
  labels={{
    tickLabels: {
      type: "inner",
      ticks: [
        { value: 20 },
        { value: 40 },
        { value: 60 },
        { value: 80 },
        { value: 100 }
      ]
    }
  }}
  arc={{
    colorArray: ['#5BE12C','#EA4228'],
    subArcs: [{limit: 10}, {limit: 30}, {}, {}, {}],
    padding: 0.01,
    width: 0.08
  }}
  pointer={{
    elastic: true,
    animationDelay: 0
  }}
/>
</div> */}
      </div> 
     {/* <div className='flex flex-col p-10'>
      <div className=" bg-black rounded-3xl p-2 py-5">
        <LineGraph data={[lineGraphData[0]]} />
      </div>
      <div className=" bg-white rounded-3xl p-2 py-5">
        <LineGraph data={[lineGraphData[1]]} />
      </div>
      </div> */}
    </div>
  );
};

export default RightSection;
