'use strict'

//printing graph
let myChart = document.getElementById('myChart').getContext('2d');


Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#000';

let casesChart = new Chart(myChart, {
    type: 'horizontalBar',
    data: {
        labels: ['Cases%', 'Deaths%', 'Recovered%'],
        datasets: [{
            label: 'countryName',
            data: [
            ],
            backgroundColor: ['green', 'red', 'blue'],
            borderWidth: 2,
            borderColor: '#000',
            hoverBorderWidth: 3,
            hoverBorderColor: '#fff'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Country Name',
            fontSize: 25
        },
        legend: {
            display: false,
            position: 'right',
            labels: {
                fontColor: '#000'
            }
        },
        layout: {
            padding: {
                left: 14,
                right: 0,
                bottom: 10,
                top: 10
            }
        }
    }
});

// updatechart function which is taking values from API_getData.js/print document function to calculate perecentage
function updateChart(totalCasesNum, totalDeathsNum, recoveredCasesNum, countryName) {
    getGlobalCoronoStats(function (data) {

        data = data.data;
        let worldTotalCases = data.confirmed;
        let worldTotalDeaths = data.deaths;
        let worldTotalRecovered = data.recovered;

        let C_totlaCases_P = (totalCasesNum / worldTotalCases * 100).toFixed(2);
        let C_totlaCases_D = (totalDeathsNum / worldTotalDeaths * 100).toFixed(2);
        let C_totlaCases_R = (recoveredCasesNum / worldTotalRecovered * 100).toFixed(2);

        //these 3 values are going to update on chart // chart work similarly to JSON format or like objects

        casesChart.data.datasets[0].data = [C_totlaCases_P, C_totlaCases_D, C_totlaCases_R]; //updating chart values sending array of 3 values
        casesChart.data.datasets[0].label = countryName;    // updating country name labels
        casesChart.options.title.text = countryName;

        casesChart.update();// this is chart method to update values to chart
    });
}





