import React from 'react';
import { Bar } from 'react-chartjs-2';

function BarChartComponent() {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sample Dataset',
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.7)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    };

    return (
        <div>
            <h2>Bar Chart Example</h2>
            <Bar data={data} />
        </div>
    );
}

export default BarChartComponent;