 let myChart = document.getElementById('myChart').getContext('2d');

        let casesChart = new Chart (myChart, {
            type: 'bar',
            data:{
                labels:['Total Cases', 'Total Deaths', 'Total Recovered'],
                datasets:[{
                label:'countryName',
               
                data:[
                                       
                ],
                backgroundColor:['green','red', 'blue'],
                borderWidth:2,
                borderColor:'#000',
                hoverBorderWidth:3,
                hoverBorderColor:'#fff'
            }]
            },
            options:{
                title:{
                    display:true,
                    text:'Largest Cities',
                    fontSize:25
                },
                legend:{
                    position:'right',
                    labels:{
                        fontColor:'#000'
                    }
                },
                layout:{
                    padding:{
                        left:10,
                        right:0,
                        bottom:10,
                        top:10
                    }
                }
            }
        });



 function updateChart(totalCasesNum, totalDeathsNum, recoveredCasesNum, countryName){
 getGlobalCoronoStats (function(data){
 
    data = data.data;
        let worldTotalCases =  data.confirmed;
        let worldTotalDeaths = data.deaths;
        let worldTotalRecovered = data.recovered;

        let C_totlaCases_P = totalCasesNum / worldTotalCases * 100 ;
        let C_totlaCases_D = totalDeathsNum / worldTotalDeaths * 100;
        let C_totlaCases_R = recoveredCasesNum / worldTotalRecovered * 100;

     casesChart.data.datasets[0].data = [C_totlaCases_P, C_totlaCases_D, C_totlaCases_R];
     casesChart.data.datasets[0].label = countryName;
       casesChart.options.title.text = countryName;

     casesChart.update();
 });
 }

 

 