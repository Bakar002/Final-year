import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const LineGraph = ({ data }) => {
  return (
    <div style={{ height: '400px', padding: '20px', backgroundColor: '#1e1e2e', borderRadius: '8px' }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 60, right: 60, bottom: 60, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 8,
          tickPadding: 10,
          tickRotation: 45,
          legend: 'Time',
          legendOffset: 50,
          legendPosition: 'middle',
          tickValues: 'every 2 hours', // Customize tick values if time-based
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 8,
          tickPadding: 10,
          tickRotation: 0,
          legend: 'Value',
          legendOffset: -50,
          legendPosition: 'middle',
          tickValues: 5, // Number of ticks on y-axis
        }}
        colors={{ scheme: 'nivo' }} // Use nivo color scheme for better contrast
        pointSize={8}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        enableSlices="x"
        areaOpacity={0.7}
        enableArea={true}
        areaBlendMode="multiply"
        curve="catmullRom" // Smooth curve for the lines
        animate={true} // Enable animations for smooth transitions
        motionConfig="wobbly" // Wobbly animation for playful interaction
        tooltip={({ point }) => (
          <div style={{ background: '#222', color: '#fff', padding: '5px 10px', borderRadius: '4px' }}>
            <strong>{point.serieId}</strong>
            <br />
            {point.data.xFormatted}: {point.data.yFormatted}
          </div>
        )}
        defs={[
          {
            id: 'gradientA',
            type: 'linearGradient',
            colors: [
              { offset: 0, color: '#ffafaf' },
              { offset: 100, color: '#ffafaf', opacity: 0 }
            ]
          },
          {
            id: 'gradientB',
            type: 'linearGradient',
            colors: [
              { offset: 0, color: '#a4f8a4' },
              { offset: 100, color: '#a4f8a4', opacity: 0 }
            ]
          }
        ]}
        fill={[
          { match: { id: 'speed' }, id: 'gradientA' },
          { match: { id: 'rpm' }, id: 'gradientB' }
        ]}
        gridXValues={5} // Optional: show fewer grid lines for clarity
        gridYValues={5} // Optional: show fewer grid lines for clarity
        theme={{
          axis: {
            ticks: {
              text: {
                fill: '#9e9e9e', // Axis tick text color
                fontSize: '14px',
              },
            },
            legend: {
              text: {
                fill: '#ffffff', // Axis legend text color
                fontSize: '16px',
                fontWeight: 'bold',
              },
            },
          },
          grid: {
            line: {
              stroke: '#444', // Grid line color
              strokeDasharray: '4 4', // Dotted grid lines
            },
          },
          tooltip: {
            container: {
              background: '#333', // Tooltip background
              color: '#ffffff', // Tooltip text color
              fontSize: '12px',
            },
          },
        }}
      />
    </div>
  );
};

export default LineGraph;
