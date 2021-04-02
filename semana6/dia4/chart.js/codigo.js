let ctx = document.getElementById('mitabla').getContext('2d');
let chart = new Chart(ctx, { // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Mi Grafica',
            backgroundColor: 'rgb(255, 99, 13)',

            borderColor: 'rgb(255, 99, 13)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});