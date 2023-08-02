const radarChart1 = document.getElementById('myChart');



const data={
    labels:[
        ['Creativity', 'HTML','SpringBoot'], 
        ['Comunication' , 'CSS','PHP'], 
        ['Poblem Solving', 'JavaScript','Django'], 
        ['Team Work', 'Bootstrap','MySQL'], 
        ['Curiosity' ,'React','NodeJS'], 
        ['Ants','Figma','Git']
    ],
    datasets:[{
        label:'Personal Skills',
        data:[70, 75, 50, 80, 100, 90],
        fill:true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    },{
        label:'FRONTEND',
        data:[90, 70, 70, 60, 30, 20],
        fill:true,
        backgroundColor: 'rgba(99,75,138,0.2)',
        borderColor: 'rgb(99, 75, 138)',
        pointBackgroundColor: 'rgb(99, 75, 138)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(99, 75, 138)'

    },
    {
        label:'BACKEND',
        data:[50, 20, 40, 50, 60, 30],
        fill:true,
        backgroundColor: 'rgba(221,120,12,0.2)',
        borderColor: 'rgb(221,120,12)',
        pointBackgroundColor: 'rgb(221, 120, 12)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(221,120, 12)'

    }]
};






//
//
new Chart(radarChart1, {
  type: 'radar',
  data: data,
  options: {
    scale: {
        ticks: {
            display:false,
            maxTicksLimit:6,
            
        }
    },
    
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        r: {
            pointLabels:{
                color:'black',
                font:{
                    size:15,
                }
            },
            grid: {
                color: 'gray'
            },
            angleLines: {
                color: 'gray'
            },
            ticks: {
                display:false,
            }
        }
    },
    beforeFit: function (scale) {
        if (scale.chart.config.data.labels.length === 3) {
            var pointLabelFontSize = Chart.helpers.getValueOrDefault(scale.options.pointLabels.fontSize, Chart.defaults.global.defaultFontSize);
            scale.height *= (2 / 1.5)
            scale.height -= pointLabelFontSize;
        }
    },
    afterFit: function (scale) {
        if (scale.chart.config.data.labels.length === 3) {
            var pointLabelFontSize = Chart.helpers.getValueOrDefault(scale.options.pointLabels.fontSize, Chart.defaults.global.defaultFontSize);
            scale.height += pointLabelFontSize;
            scale.height /= (2 / 1.5);
        }
    },            
    plugins: {
        legend:{
            labels:{
                color:'rgb(255,255,255)',

            }
        }
        
    }
}
});


////
//SEGUNDO RADARCHART PARA SM CON EL CONSTRUCTOR Y MI ID MYCHART2

