import { Card } from '@chakra-ui/react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';

// Define the type for a single data point
interface RevenueData {
    date: string;
    Revenue: number;
}

// Define the valueFormatter function with a parameter type
const valueFormatter = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(value);
};

const data = [
    {
        name: 'Jan',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Feb',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Mar',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Apr',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'May',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Jun',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Jul',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Aug',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },

];

export default function Page() {
    return (
        <Card.Root
            width="744px"
            height="405px"
            bg='white'
            p={12}
        >
            <Card.Title pb="0" color={'black'} font-weight="700">
                Income statistics
            </Card.Title>
            <Card.Body>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart height={40} data={data}>
                        <XAxis dataKey="name" axisLine={false} tickLine={false}/>
                        <YAxis axisLine={false} tickLine={false}/>
                        <Bar dataKey="uv" fill="#009E4D" background={{ fill: '#EEEFF1' }}/>
                    </BarChart>
                </ResponsiveContainer>
            </Card.Body>
        </Card.Root>

    );
}
