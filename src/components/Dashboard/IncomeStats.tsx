import { Card } from '@chakra-ui/react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';

// Define the type for a single data point
interface RevenueData {
    name: string;
    income: number;
}

// Format values as "$120K", "$100K", etc.
const valueFormatter = (value: number): string => {
    return `$${value / 1000}K`;
};

// Update the data to represent income values
const data: RevenueData[] = [
    { name: 'Jan', income: 120000 },
    { name: 'Feb', income: 100000 },
    { name: 'Mar', income: 80000 },
    { name: 'Apr', income: 60000 },
    { name: 'May', income: 40000 },
    { name: 'Jun', income: 20000 },
    { name: 'Jul', income: 0 },
];

export default function Page() {
    return (
        <Card.Root
            width="744px"
            height="405px"
            bg="white"
            p={6}
        >
            <Card.Title pb="0" color="black" fontWeight="700" fontSize="18px">
                Income Statistics
            </Card.Title>
            <Card.Body>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        {/* X-Axis for months */}
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />

                        {/* Y-Axis for income with custom ticks */}
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tickFormatter={valueFormatter}
                            domain={[0, 120000]}
                            ticks={[0, 20000, 40000, 60000, 80000, 100000, 120000]}
                        />

                        {/* Bar for income */}
                        <Bar dataKey="income" fill="#009E4D" background={{ fill: '#EEEFF1' }} />
                    </BarChart>
                </ResponsiveContainer>
            </Card.Body>
        </Card.Root>
    );
}
