'use client';

import { Box, Container, Divider } from '@chakra-ui/react';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { DateRangePicker, RangeKeyDict } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const lineChartData = {
  labels: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Ahad'],
  datasets: [
    {
      label: 'steps',
      data: [1000, 2000, 3000, 4000, 5000, 6000, 7000],
      borderColor: 'rgb(75,192,192)',
    },
    {
      label: 'tes',
      data: [500, 3000, 2500, 3500, 4500, 5500, 6500],
      borderColor: 'red',
    },
  ],
};

interface DateRangeState {
  startDate: Date | undefined;
  endDate: Date | undefined;
  key: string | undefined;
}

const StatisticsPage = () => {
  const options = {};
  const data = {};
  const [date, setDate] = useState<DateRangeState>({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const handleChange = (ranges: RangeKeyDict) => {
    const { selection } = ranges;
    setDate({
      startDate: selection.startDate,
      endDate: selection.endDate,
      key: selection.key,
    });
  };

  return (
    <Box>
      <Container maxW="6xl" mt="70px" centerContent>
        <DateRangePicker ranges={[date]} onChange={handleChange} />
        <Divider mt="25px" />
        <Box boxSize="1000px" mt="25px">
          <Line options={options} data={lineChartData} />
        </Box>
      </Container>
    </Box>
  );
};

export default StatisticsPage;
