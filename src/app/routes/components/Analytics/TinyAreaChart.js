import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {  
    ResponsiveContainer,
    AreaChart, 
    Area
} from 'recharts';

import colors from './../../../colors';

// const data = _.times(3, () => ({ pv: Math.random() * 1000 }));
// const data = {
//   {1,2}
// };

const data = [
	{
		name: 'Page A', uv: 4000, pv: 24, amt: 2400,
	},
	{
		name: 'Page B', uv: 3000, pv: 10, amt: 2210,
	},
	{
		name: 'Page C', uv: 2000, pv: 100, amt: 2290,
	},
	{
		name: 'Page D', uv: 2780, pv: 10, amt: 2000,
	},
	{
		name: 'Page E', uv: 1890, pv: 1113, amt: 2181,
	},
	{
		name: 'Page F', uv: 2390, pv: 13, amt: 2500,
	},
	{
		name: 'Page G', uv: 3490, pv: 99, amt: 2100,
	},
];

const TinyAreaChart = ({ height }) => (
    <ResponsiveContainer width='100%' height={ height }>
        <AreaChart data={data}>
            <Area dataKey='pv' stroke={ colors['primary'] } fill={ colors['primary-02'] } />
        </AreaChart>
    </ResponsiveContainer>
);
TinyAreaChart.propTypes = {
    height: PropTypes.number,
};
TinyAreaChart.defaultProps = {
    height: 25,
};

export { TinyAreaChart };
