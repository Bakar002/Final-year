import React, { useState, useEffect } from 'react';
import { ResponsiveLine } from '@nivo/line';
import { format, parse, addHours, subHours, subDays, subWeeks, subMonths } from 'date-fns';

const LineGraph = ({ data }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('4-hour');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const parsedData = parseData(data);
    setFilteredData(filterDataByTimeframe(parsedData, selectedTimeframe));
  }, [data, selectedTimeframe]);

  const parseData = (data) =>
    data.map((series) => ({
      ...series,
      data: series.data.map((point) => ({
        x: addHours(parse(point.x, 'MM/dd/yyyy, hh:mm:ss a', new Date()), 5), // Adjust to PKT
        y: point.y,
      })),
    }));

  const filterDataByTimeframe = (parsedData, timeframe) => {
    const currentTime = new Date();

    const timeframeFilter = {
      '4-hour': subHours(currentTime, 4),
      '24-hour': subHours(currentTime, 24),
      '7-days': subWeeks(currentTime, 1),
      '30-days': subMonths(currentTime, 1),
      'year': subMonths(currentTime, 12),
    };

    return parsedData.map((series) => ({
      ...series,
      data: series.data.filter((point) => point.x >= timeframeFilter[timeframe]),
    }));
  };

  const handleTimeframeChange = (timeframe) => setSelectedTimeframe(timeframe);

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        {['4-hour', '24-hour', '7-days', '30-days', 'year'].map((time) => (
          <button
            key={time}
            onClick={() => handleTimeframeChange(time)}
            style={{
              padding: '10px 20px',
              borderRadius: '20px',
              border: selectedTimeframe === time ? '2px solid #007bff' : '1px solid #ccc',
              backgroundColor: selectedTimeframe === time ? '#007bff' : '#fff',
              color: selectedTimeframe === time ? '#fff' : '#333',
              cursor: 'pointer',
              transition: 'all 0.2s ease-in-out',
            }}
          >
            {time}
          </button>
        ))}
      </div>

      <div style={{ height: '400px' }}>
        <ResponsiveLine
          data={filteredData}
          margin={{ top: 50, right: 50, bottom: 80, left: 50 }}
          xScale={{ type: 'time', useUTC: false, format: '%Y-%m-%d %H:%M' }}
          yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false }}
          axisBottom={{
            orient: 'bottom',
            format: '%m/%d %H:%M',
            tickValues: 'every 1 hour',
            tickSize: 5,
            tickPadding: 10,
            legend: 'Time',
            legendOffset: 50,
            legendPosition: 'middle',
            rotate: -45,
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 10,
            legend: 'Speed (mph)',
            legendOffset: -40,
            legendPosition: 'middle',
          }}
          colors={{ scheme: 'set2' }}
          pointSize={8}
          pointColor={{ from: 'serieColor' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          curve="monotoneX"
          enableSlices="x"
          sliceTooltip={({ slice }) => (
            <div
              style={{
                background: 'white',
                padding: '9px 12px',
                border: '1px solid #ccc',
              }}
            >
              {slice.points.map((point) => (
                <div key={point.id} style={{ color: point.serieColor }}>
                  <strong>{point.serieId}</strong>: {point.data.y} at{' '}
                  {format(point.data.x, 'MM/dd/yyyy HH:mm')}
                </div>
              ))}
            </div>
          )}
          animate={true}
          motionConfig="wobbly"
          useMesh={true}
          enableArea={true}
          areaOpacity={0.2}
        />
      </div>
    </div>
  );
};

export default LineGraph;
