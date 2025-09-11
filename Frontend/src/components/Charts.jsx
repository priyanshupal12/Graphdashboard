import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsivePie } from '@nivo/pie';
import Box from '@mui/material/Box'

export function BarChart({ data }) {
    return (
        <ResponsiveBar
            data={data}
            keys={['apples', 'bananas']}
            indexBy="day"
            margin={{ top: 10, right: 10, bottom: 30, left: 30 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'nivo' }}
            borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
            }}
            axisLeft={null}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
            legends={[]}
            role="application"
            isInteractive={true}
        />
    );
}

export function PieChart({ data, total, children }) {
    return (
        <Box sx={{ position: 'relative', width: '100%', height: 200 }}>
            <ResponsivePie
                data={data}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                innerRadius={0.6} padAngle={0.7} cornerRadius={3} activeOuterRadiusOffset={8}
                borderWidth={1} borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                enableArcLabels={false} enableArcLinkLabels={false}
            />
            {children}
        </Box>
    );
}