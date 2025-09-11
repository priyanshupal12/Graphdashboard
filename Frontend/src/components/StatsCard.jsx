import React from 'react';
import { Card, CardHeader, Box, Typography, CardContent } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';
import { green } from '@mui/material/colors';

export default function StatsCard({ title, value, delta, trendData }) {
    return (
        <Card>
            <CardHeader title={title} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2 }}>
                <Typography variant="h6">{value}</Typography>
                <Typography sx={{ bgcolor: green[700], color: green[100], borderRadius: 10, px: 1.5, py: 0.5 }}>{delta}</Typography>
            </Box>
            <Typography px={2}>Last 30 Days</Typography>
            <CardContent sx={{ height: 100 }}>
                <ResponsiveLine
                    data={trendData}
                    margin={{ top: 10, right: 10, bottom: 20, left: 30 }}
                    xScale={{ type: 'point' }}
                    yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
                    axisTop={null} axisRight={null} axisBottom={{ tickSize: 5, tickPadding: 5 }} axisLeft={null}
                    enableGridX={false} enableGridY={false} colors={{ scheme: 'nivo' }} enableArea useMesh
                />
            </CardContent>
        </Card>
    );
}