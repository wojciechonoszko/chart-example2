// npm install chart.js --save - chart.js library installation

import Chart from 'chart.js/auto';

//import { getRelativePosition } from 'chart.js/helpers';

 const ctx = document.getElementById('myChart');

const fiveDaysBtn = document.querySelector('.show-five-days-button');
const fiveDaysList = document.querySelector('.five-days-list');
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


function getWeatherFiveDays() {
  //const url = `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=88007012f79caf118a2a9709acbfec32&units=metric&lang=en`
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=London&cnt=40&appid=192616cb441ff9a67bbb9f3f5782e997&units=metric&lang=en`
  return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      
      return response.json();
  }).then(response => {
    // console.log(response);
    // console.log(response.list[0].main.temp);
    // console.log(response.list[1].main.humidity);
    // console.log(response.list[2].main.pressure);
    // console.log(response.list[3].wind.speed);
    
   
    const chartDataTemp = response.list.map((element) =>  temperature.push(element.main.temp) );
    const chartDataHum = response.list.map((element) => humidity.push(element.main.humidity));
    const chartDataPress = response.list.map((element) =>  pressure.push(element.main.pressure) );
    const chartDataWind = response.list.map((element) => speed.push(element.wind.speed));

   
  })
};
getWeatherFiveDays();

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
            display: false,
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
              text: 'Dates',
              color: "white",
              
              font: {               
                size: 20
              }
            },
           
            ticks: {
              font: {
                size: 17
              },
              color: 'white',
            },
            grid: {
              color: 'white'
            }
          },
    y: {
        display: true,
        title: {
          display: true,
          text: 'Values',
          color: 'white',
          font: {
            size: 20
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





