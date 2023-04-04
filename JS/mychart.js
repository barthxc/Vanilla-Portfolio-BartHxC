const radarChart1 = document.getElementById('myChart');



const data={
    labels:[
        ['Creativity', 'HTML'], 
        ['Comunication' , 'CSS'], 
        ['Poblem Solving', 'JavaScript'], 
        ['Team Work', 'Java'], 
        ['Curiosity' ,'MySQL'], 
        ['Ants','Git']
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
        label:'Coding Skills',
        data:[90, 60, 30, 70, 40, 45],
        fill:true,
        backgroundColor: 'rgba(99,75,138,0.2)',
        borderColor: 'rgb(99, 75, 138)',
        pointBackgroundColor: 'rgb(99, 75, 138)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(99, 75, 138)'

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
                color:'gray',
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
                padding:10
            }
        }
        
    }
}
});


////
//SEGUNDO RADARCHART PARA SM CON EL CONSTRUCTOR Y MI ID MYCHART2

