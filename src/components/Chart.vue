<template>
  <canvas ref="myCanvas" width="600" height="600"></canvas>
</template>

<script>
import Chart from 'chart.js/auto';
export default {
    props: ['data', 'labels'],
mounted(){
        let canvas = this.$refs['myCanvas'];
        console.log(canvas);
        this.chart = new Chart(canvas, {
    type: 'line',
    data: {
        labels: [this.labels],
        datasets: [{
            labels: '# of Votes',
            data: this.data,

            }]
        },
    });
},
    data(){
        return {
            chart: null
        }
    },
    watch: {
        data(NewData, oldData){
            console.log(this.chart.data.datasets[0].data);
            this.chart.data.datasets[0].data = NewData;
            this.chart.draw();
        }
    }
}
</script>

<style>

</style>