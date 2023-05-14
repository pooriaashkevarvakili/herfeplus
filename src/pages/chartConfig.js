import { Tooltip } from "chart.js"

export const data = {
    labels: ['مشاهده دوره', 'مشاهده کارگاه', 'تمرین', 'آزمون'],
    datasets: [
        {
            backgroundColor: ['#7DE315', '#14A0C1', '#14A0C1', '#5159AC'],
            data: [50, 10, 20, 20]
        },

    ]
}

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {

        tooltip: {
            rtl: true,


            titleFont: {
                family: 'IRANSans-X',
                size: 12,
                weight: 400
            },

            bodyFont: {
                family: 'IRANSans-X',
                size: 12,
                weight: 500
            },
            padding: {
                top: 8,
                right: 8,
                bottom: 10,
                left: 8
            },

            yAlign: 'top'
        }
    },
    elements: {
        point: {
            radius: 0
        },
        line: {
            tension: 0.5
        }
    }


}
