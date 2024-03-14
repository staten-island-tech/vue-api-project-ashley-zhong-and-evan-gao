<template>
  <div class="bar-chart">
    <h1>Bar </h1>
    <h1> djjkdfs</h1>
  </div>
  <div>
  <canvas id="myChart"></canvas>
</div>

</template>
<!-- <script src="path/to/chartjs/dist/chart.umd.js"></script> -->
<script>
import { ref, onMounted } from 'vue';
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { settings } from '@/stores/settings';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);


// const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });



// random code

// const data = {
//   labels: [
//     'Red',
//     'Blue',
//     'Yellow'
//   ],
//   datasets: [{
//     label: 'My First Dataset',
//     data: [300, 50, 100],
//     backgroundColor: [
//       'rgb(255, 99, 132)',
//       'rgb(54, 162, 235)',
//       'rgb(255, 205, 86)'
//     ],
//     hoverOffset: 4
//   }]
// };
// onMounted(() => {const config = {
//   type: 'pie',
//   data: data,
// };})

</script>

<style>
@media (min-width: 1024px) {
  .bar-chart {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}



</style>
