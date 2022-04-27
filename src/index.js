// npm install chart.js --save - chart.js library installation

import Chart from 'chart.js/auto';

//import { getRelativePosition } from 'chart.js/helpers';

 const ctx = document.getElementById('myChart');

const chartShowBtn = document.querySelector('.chart-show-link');
const chartShowBtnCtn = document.querySelector('.chart-show-button-container');
const chartCloseBtn = document.querySelector('.chart-hide-link');
const chartContainer = document.querySelector('.chart-cnt');

function chartDisplay() {
  
  chartShowBtn.classList.toggle('is-closed');
  chartContainer.classList.toggle('is-closed');
  
}

 chartShowBtn.addEventListener('click', chartDisplay);
 chartCloseBtn.addEventListener('click', chartDisplay);


function getWeatherByCity() {
  //const url = `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=88007012f79caf118a2a9709acbfec32&units=metric&lang=en`
  const url2 = `https://api.openweathermap.org/data/2.5/forecast?q=London&cnt=40&appid=192616cb441ff9a67bbb9f3f5782e997&units=metric&lang=en`
  fetch(url2).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      
      return response.json();
  }).then(response => {
    console.log(response);
    console.log(response.list[0].main.temp);
    console.log(response.list[1].main.humidity);
    console.log(response.list[2].main.pressure);
    console.log(response.list[3].wind.speed);
    
    // console.log(response.main.temp);
    // console.log(response.main.humidity);
    // console.log(response.main.pressure);
    // console.log(response.wind.speed);
    const chartDataTemp = response.list.map((element) =>  temperature.push(element.main.temp) );
    const chartDataHum = response.list.map((element) => humidity.push(element.main.humidity));
    const chartDataPress = response.list.map((element) =>  pressure.push(element.main.pressure) );
    const chartDataWind = response.list.map((element) => speed.push(element.wind.speed));

    //temperature.push(element);    
    //console.log(chartData);
  })
};
getWeatherByCity();

const temperature = [];
console.log(temperature);
const humidity = [];
const pressure = [];
const speed = [];


const date = new Date();
const dates = [];
const datesInSeconds = [];
for(let i=0; i <= 4; i++){

// const month = date.getUTCMonth() + 1; //months from 1-12
// const day = date.getUTCDate();
// const year = date.getUTCFullYear();
const newdate = date.toLocaleString('en-us',{day: 'numeric', month:'short', year:'numeric'});
//const newdate = year + "/" + month + "/" + day;
dates.push(newdate);
date.setDate(date.getDate() + 1);
let dateInSeconds =(date.getTime()/1000).toFixed(0);
console.log(dateInSeconds);
datesInSeconds.push(dateInSeconds);
// console.log(newdate);
}
console.log(dates);
console.log(datesInSeconds);




let data = {
    //labels: ["January", "February", "March", "April", "May"],
    labels: dates,
    datasets: [
        {
            label: "Temperature, C°",
            
            
            
            //linia
            borderColor : 'rgba(255, 107, 9, 1)',
            pointBorderColor : 'rgba(255, 107, 9, 1)',
            borderWidth : 2,
            //kolor tla i legendy
            fill: false, //czy wypelnic zbior
            backgroundColor : 'rgba(236,115,87,0.1)', //wplywa tez na kolor w legendzie
            //ustawienia punktu
            pointStyle : 'rectRot',
            pointRadius : 4,
            pointBorderWidth: 1,
            pointBackgroundColor : 'rgba(255, 107, 9, 1)',
            //ustawienia punkut hover
            pointHoverRadius: 4,
            pointHoverBorderWidth: 3,
            pointHoverBackgroundColor: 'rgba(255,255,255,1)',
            pointHoverBorderColor: 'rgba(236,115,87,1)',
            //data: [10,16,13,16,20],
            data: temperature
        },
        {
            label: "Humidity, %",
            //linia
            borderColor : 'rgba(9, 6, 235, 1)',
            pointBorderColor : 'rgba(9, 6, 235, 1)',
            borderWidth : 2,
            //kolor tla i legendy
            fill: false, //czy wypelnic zbior
            //backgroundColor : 'rgba(236,115,87,0.1)', //wplywa tez na kolor w legendzie
            //ustawienia punktu
            pointStyle : 'rectRot',
            pointRadius : 4,
            pointBorderWidth: 1,
            pointBackgroundColor : 'rgba(9, 6, 235, 1)',
            //ustawienia punktu hover
            pointHoverRadius: 4,
            pointHoverBorderWidth: 3,
            pointHoverBackgroundColor: 'rgba(9, 6, 235, 1)',
            pointHoverBorderColor: 'rgba(9, 6, 235, 1)',
            data: humidity
        },
        {
            label: "Wind Speed, m/s",
            
            borderColor : 'rgba(31, 211, 221, 0.8)',
            pointBorderColor : 'rgba(31, 211, 221, 0.8)',
            borderWidth : 2,
            //kolor tla i legendy
            fill: false, //czy wypelnic zbior
            backgroundColor : 'rgba(31, 211, 221, 0.8)', //wplywa tez na kolor w legendzie
            //ustawienia punktu
            pointStyle : 'rectRot',
            pointRadius : 4,
            pointBorderWidth: 1,
            pointBackgroundColor : 'rgba(31, 211, 221, 0.8)',
            //ustawienia punkut hover
            pointHoverRadius: 4,
            pointHoverBorderWidth: 3,
            pointHoverBackgroundColor: 'rgba(31, 211, 221, 0.8)',
            pointHoverBorderColor: 'rgba(31, 211, 221, 0.8)',
            data: speed
            
        },
        {
          label: " Atmosphere Pressure, mmHg",
          
          borderColor : 'rgba(188, 25, 161, 0.8)',
          pointBorderColor : 'rgba(188, 25, 161, 0.8)',
          borderWidth : 2,
          //kolor tla i legendy
          fill: false, //czy wypelnic zbior
          backgroundColor : 'rgba(188, 25, 161, 0.8)', //wplywa tez na kolor w legendzie
          //ustawienia punktu
          pointStyle : 'rectRot',
          pointRadius : 4,
          pointBorderWidth: 1,
          pointBackgroundColor : 'rgba(188, 25, 161, 0.8)',
          //ustawienia punkut hover
          pointHoverRadius: 4,
          pointHoverBorderWidth: 3,
          pointHoverBackgroundColor: 'rgba(188, 25, 161, 0.8)',
          pointHoverBorderColor: 'rgba(188, 25, 161, 0.8)',
          data: pressure
          
      }
    ]
}

let options = {
  maintainAspectRatio: false,
  
  responsive: true, //responsywnosc
        hover: {
            mode: 'dataset' //jak pokazywac tooltipy po najechaniu na punkty wykresu
            //mode: 'label',
        },
    
    
    animations: {
      
        tension: {
          duration: 1500,
          easing: 'easeInCubic',
          from: 5,
          to: 0.15,
          loop: false,
          
        }
        
        },
    plugins: {
      
        title: {
            display: true,
            text: 'Chart Title EXAMPLE',
            color: 'violet',
            font: {
              size: 30
            }
        },
        
        legend: {
            position: 'top', //polozenie legendy
            display: true, // pokazuj legende
            labels: {
              color: 'violet',
              font: {
                size: 14
              },
              usePointStyle: true,
              pointStyle: 'rect'
            },
        }
        
    },
    
    
    
    
    scales: {
       
        x: {
            //type: 'linear',
            display: true,
            title: {
              display: true,
              text: 'Day of the year',
              color: "pink",
              
              font: {               
                size: 20
              }
            },
           
            ticks: {
              font: {
                size: 17
              },
              color: 'red',
            },
            grid: {
              color: 'white'
            }
          },
    y: {
        display: true,
        title: {
          display: true,
          text: 'MONTHS values',
          color: 'green',
          font: {
            size: 24
          }
        },
        ticks: {
          font: {
            size: 17
          },
          color: 'violet',
        },
        grid: {
          color: 'yellow'
        }
      },
      
    } 

};

let myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
})

// =============================================================================================================

// const ctx = document.querySelector('#myChart').getContext('2d');
// // ctx.height = 500;
// import { Chart, registerables } from 'chart.js';

// Chart.register(...registerables);

// // let chart;

// const chartShowBtn = document.querySelector('.chart-show-link');
// const chartCloseBtn = document.querySelector('.chart-hide-link');
// const chartContainer = document.querySelector('.chart-main-container');

// function chartDisplay() {
//   chartShowBtn.classList.toggle('is-closed');
//   chartContainer.classList.toggle('is-closed');
// }

// chartShowBtn.addEventListener('click', chartDisplay);
// chartCloseBtn.addEventListener('click', chartDisplay);

// const average = values => {
//   const sum = values.reduce((previous, current) => (current += previous));
//   const avg = sum / values.length;
//   return Number(avg.toFixed(1));
// };

// function getChartData(weather) {
//   let chartData = {};

//   chartData.days = weather.daysData.map(e => e.date.month + ' ' + e.date.day + ', ' + e.date.year);
//   chartData.humidity = weather.daysData
//     .map(e => e.forecasts.map(i => i.humidity))
//     .map(j => average(j));
//   chartData.pressure = weather.daysData
//     .map(e => e.forecasts.map(i => i.pressure))
//     .map(j => average(j));
//   chartData.temperature = weather.daysData
//     .map(e => e.forecasts.map(i => i.temperature))
//     .map(j => average(j));
//   chartData.speed = weather.daysData
//     .map(e => e.forecasts.map(i => i.windSpeed))
//     .map(j => average(j));

//   let chartMain = {
//     type: 'line',
//     data: {
//       labels: chartData.days,
//       datasets: [
//         {
//           label: ' — Temperature, C°',
//           backgroundColor: 'rgb(255, 107, 8)',
//           borderColor: 'rgb(255, 107, 8)',
//           data: chartData.temperature,
//           fill: false,
//         },
//         {
//           hidden: true,
//           label: ' —  Humidity, %    ',
//           backgroundColor: 'rgb(10, 6, 234)',
//           borderColor: 'rgb(10, 6, 234)',
//           data: chartData.humidity,
//           fill: false,
//         },
//         {
//           hidden: true,
//           label: '—  Speed, m/s',
//           backgroundColor: 'rgb(235, 155, 5)',
//           borderColor: 'rgb(235, 155, 5)',
//           data: chartData.speed,
//           fill: false,
//         },
//         {
//           hidden: true,
//           label: ' —  Pressure, m/m',
//           backgroundColor: 'rgb(5, 120, 6)',
//           borderColor: 'rgb(5, 120, 6)',
//           data: chartData.pressure,
//           fill: false,
//         },
//       ],
//     },
//     options: {
//       responsive: true,
//       maintainAspectRatio: false,
//       plugins: {
//         title: {
//           display: true,
//           text: 'AVERAGE:',
//           color: 'rgba(255, 255, 255, 0.54)',
//         },
//         legend: {
//           align: 'center',

//           labels: {
//             boxWidth: 12,
//             boxHeight: 12,
//             padding: 10,
//             font: {
//               size: 15,
//             },
//           },
//         },
//       },

//       scales: {
//         x: {
//           display: true,
//           title: {
//             display: true,
//             text: '',
//             color: '#911',
//             font: {
//               family: 'Comic Sans MS',
//               size: 20,
//               style: '',
//               lineHeight: 1.2,
//             },
//             padding: { top: 20, left: 0, right: 0, bottom: 0 },
//           },
//           grid: {
//             color: 'rgba(255, 255, 255, 0.54)',
//           },
//           ticks: {
//             color: 'rgba(255, 255, 255, 0.54)',
//           },
//         },
//         y: {
//           display: true,
//           title: {
//             display: true,
//             text: 'Value of indicators',
//             color: 'rgba(255, 255, 255, 0.54)',
//             font: {
//               family: 'Lato',
//               size: 14,
//               style: 'normal',
//               lineHeight: 1.2,
//             },
//             padding: { top: 30, left: 0, right: 0, bottom: 0 },
//           },
//           grid: {
//             color: 'rgba(255, 255, 255, 0.54)',
//           },
//           ticks: {
//             color: 'rgba(255, 255, 255, 0.54)',
//           },
//         },
//       },
//     },
//   };

//   return chartMain;
// }

// let weatherChart;

// export default function renderChart(weather) {
//   if (weatherChart) {
//     // если график уже существует, то обновляем ему данные
//     weatherChart.data.datasets = getChartData(weather).data.datasets; // просто дадим чарту новые датасеты, все остальные параметры не меняем
//     weatherChart.update(); // обновляем график
//   } else {
//     // если график не существует (например, первая загрузка), то создадим его
//     let chartData = getChartData(weather);
//     weatherChart = new Chart(ctx, chartData); // передаем канвас и полный объект параметров
//   }
//   return weatherChart;
// }


















// ====================================================================================================================

// const container = document.getElementById('myChart');
// const btn = document.getElementById('btn');

// const prepareChart = () => {
//     const DataSet = (size, value, label) => {

//         const generateValues = () =>
//             [...Array(size)]
//                 .fill(value)
//                 .map(v => v * Math.random());

//         const generateNumber = (min, max) =>
//             Math.random() * (max - min) + min;

//         const generateRGB = () =>
//             [...Array(size)]
//                 .map(v => [generateNumber(1, 255), generateNumber(1, 255), generateNumber(1, 255)]);

//         const generateLabels = () =>
//             [...Array(size).keys()]
//                 .map(v => `${label} NO. ${v + 1}`);

//         const generateColorsAndBorders = () => {
//             const arr = generateRGB();
//             return [
//                 arr.map(v => `rgba(${v[0]},${v[1]},${v[2]},0.2)`),
//                 arr.map(v => `rgba(${v[0]},${v[1]},${v[2]},1)`)
//             ]
//         };
//         const colorAndBorders = generateColorsAndBorders();

//         return {
//             labels: generateLabels(),
//             values: generateValues(),
//             colors: colorAndBorders[0],
//             borders: colorAndBorders[1]
//         };
//     };

//     const SIZE = 6;
//     const VALUE = 10;
//     const LABEL = 'SALARY';
//     const TITLE = 'SALARIES';
//     const data = DataSet(SIZE, VALUE, LABEL);

//     let chart = new Chart(container, {
//         type: 'bar',
//         data: {
//             labels: data.labels,
//             datasets: [{
//                 label: LABEL,
//                 data: data.values,
//                 backgroundColor: data.colors,
//                 borderColor: data.borders,
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             response: true,
//             maintainAspectRatio: false,
//             animation: {
//                 duration: 1000,
//                 onComplete: () => {
//                     btn.textContent = 'CHANGE DATA';
//                 }
//             },
//             legend: {
//                 display: false
//             },
//             title: {
//                 display: true,
//                 text: TITLE
//             }
//         }
//     });
    
//     function destroy() {
        
//         chart.destroy();
//     };
//     btn.addEventListener('click', (e) => {
//         btn.textContent = 'LOADING ...';
//         console.log(chart.id);

//         // if ((chart.id === 0) || (chart.id === 1)){
//         //     chart.destroy();
//         // }
//         destroy();
//         prepareChart();

//     });
    
    
// };



// function renderChart() {
//     let myChart = document.getElementById('myChart').getContext('2d');
//     console.log(myChart);
//     myChart.destroy();
//     myChart = new Chart(
//         document.getElementById('myChart')
//     )
// }


// window.addEventListener('load', prepareChart());





