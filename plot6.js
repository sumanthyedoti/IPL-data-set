

Highcharts.chart('runs', {
    title: {
    text: 'Shane Watson\'s highest runs in IPL seasons' 
    },
    subtitle: {
    text: ""
    },
    xAxis: {
            categories: Object.keys(totalRunsPerYear),
            labels: {
            style: {
                color: 'black',
                fontSize:'12px',
                fontWeight:""
            }
            }
    },
    yAxis: {
        title: {
            text: ''
        }
    },
    legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
    },
    series: [{
        name: "Runs",
        data: Object.values(totalRunsPerYear)
    }],

    responsive: {
    rules: [{
        condition: {
        maxWidth: 500
        },
        chartOptions: {
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
        }
        }
    }]
    }

});



 Highcharts.chart('strikeRate', {
    title: {
    text: 'Shane Watson\'s strike rate in IPL seasons' 
    },
    subtitle: {
    text: ""
    },
    xAxis: {
            categories: Object.keys(strikeRate),
            labels: {
            style: {
                color: 'black',
                fontSize:'12px',
                fontWeight:""
            }
            }
    },
    yAxis: {
        title: {
            text: ''
        }
    },
    legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
    },
    series: [{
        name: "Strike Rate",
        data:Object.values(strikeRate).map(a => Number(a))
    }],

    responsive: {
    rules: [{
        condition: {
        maxWidth: 500
        },
        chartOptions: {
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
        }
        }
    }]
    }

});


Highcharts.chart('econ', {
    title: {
    text: 'Shane Watson\'s bowling economy in IPL seasons' 
    },
    subtitle: {
    text: ""
    },
    xAxis: {
            categories: Object.keys(econ),
            labels: {
            style: {
                color: 'black',
                fontSize:'12px',
                fontWeight:""
            }
            }
    },
    yAxis: {
        title: {
            text: ''
        }
    },
    legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
    },
    series: [{
        name: "Bowling economy",
        data:Object.values(econ).map(a => Number(a))
    }],

    responsive: {
    rules: [{
        condition: {
        maxWidth: 500
        },
        chartOptions: {
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
        }
        }
    }]
    }

});
