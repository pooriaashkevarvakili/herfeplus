export const data = {
    labels: [
        'دوره',
        'کارگاه',
        'تمرین',
        'آزمون',


    ],

    datasets: [
        {
            label: 'Data One',
            backgroundColor: '#00CECE',
            data: [48, 62, 58, 87],
            fontFamily: 'IRANSans',


        }
    ]
}


export const options = {
    responsive: true,
    layout: {
        padding: {
            left: 20
        },
    },
    labels: {
        // This more specific font property overrides the global property
        font: {
            size: 14
        }
    },
    maintainAspectRatio: false, options: {
        scales: {
            r: {
                ticks: {
                    backdropPadding: {
                        x: 10,
                        y: 4
                    }
                }
            }
        },
        plugins: {

            tooltip: {
                rtl: true,


                titleFont: {
                    family: 'IRANSans-X',
                    size: 14,
                    weight: 400
                },

                bodyFont: {
                    family: 'IRANSans-X',
                    size: 14,
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
                radius: 30
            },
            line: {
                tension: 0.5
            }
        },
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 14
                    }
                }
            }
        }
    }

}
