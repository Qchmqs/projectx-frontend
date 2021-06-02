import React from 'react';
import { 
    BarChart, 
    CartesianGrid, 
    XAxis, 
    YAxis, 
    Tooltip, 
    ResponsiveContainer,
    Legend, 
    Bar
} from './../../../../components/recharts';

import colors from './../../../../colors';
import faker from 'faker/locale/en_US';

const data = [
    {name: 'tag_a', count: ( faker.random.number({ 'min': 10, 'max': 50 }))},
    {name: 'tag_b', count: ( faker.random.number({ 'min': 10, 'max': 50 }))},
    {name: 'tag_c', count: ( faker.random.number({ 'min': 10, 'max': 50 }))},
    {name: 'some_longer_tag_name', count: ( faker.random.number({ 'min': 10, 'max': 50 }))},
    {name: 'some longer tag name', count: ( faker.random.number({ 'min': 10, 'max': 50 }))},
    {name: 'tag_f', count: ( faker.random.number({ 'min': 10, 'max': 50 }))},
    {name: 'tag_g', count: ( faker.random.number({ 'min': 10, 'max': 50 }))},
    {name: 'tag_h', count: ( faker.random.number({ 'min': 10, 'max': 50 }))},
    {name: 'tag_i', count: ( faker.random.number({ 'min': 10, 'max': 50 }))},
    {name: 'tag_j', count: ( faker.random.number({ 'min': 10, 'max': 50 }))},
    {name: 'tag_k', count: ( faker.random.number({ 'min': 10, 'max': 50 }))},
    {name: 'tag_l', count: ( faker.random.number({ 'min': 10, 'max': 50 }))},
    {name: 'tag_m', count: ( faker.random.number({ 'min': 10, 'max': 50 }))},
    {name: 'tag_n', count: ( faker.random.number({ 'min': 10, 'max': 50 }))},
    {name: 'tag_o', count: ( faker.random.number({ 'min': 10, 'max': 50 }))},
    {name: 'tag_p', count: ( faker.random.number({ 'min': 10, 'max': 50 }))},
    {name: 'tag_q', count: ( faker.random.number({ 'min': 10, 'max': 50 }))},
    {name: 'tag_r', count: ( faker.random.number({ 'min': 10, 'max': 50 }))},
    {name: 'tag_s', count: ( faker.random.number({ 'min': 10, 'max': 50 }))},
    {name: 'tag_t', count: ( faker.random.number({ 'min': 10, 'max': 50 }))},
    {name: 'tag_u', count: ( faker.random.number({ 'min': 10, 'max': 50 }))},
    {name: 'tag_v', count: ( faker.random.number({ 'min': 10, 'max': 50 }))},
    {name: 'tag_w', count: ( faker.random.number({ 'min': 10, 'max': 50 }))},
    {name: 'tag_x', count: ( faker.random.number({ 'min': 10, 'max': 50 }))},
    {name: 'tag_y', count: ( faker.random.number({ 'min': 10, 'max': 50 }))},
    {name: 'tag_z', count: ( faker.random.number({ 'min': 10, 'max': 50 }))}
];

const SimpleBarChart = () => (
    <ResponsiveContainer width='100%' aspect={6.0/3.0}>
        <BarChart 
            data={data}
            margin={{top: 5, right: 30, left: 30, bottom: 5}}
        >
            <CartesianGrid strokeDasharray="5"/>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip  
                contentStyle={{
                    background: colors['900'],
                    border: `1px solid ${colors['900']}`,
                    color: colors['white']
                }}
            />
            <Legend wrapperStyle={{ color: colors['900'] }}/>
            <Bar dataKey="count" fill={ colors['primary'] } barSize={ 5 } />
            
        </BarChart>
    </ResponsiveContainer>

)

export { SimpleBarChart };
