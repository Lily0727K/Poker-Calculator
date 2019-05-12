google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Card', 'UTG', 'HJ', 'CO', 'BU', 'SB'],
        ['A', 4.0, 3.91, 3.81, 3.72, 3.72],
        ['K', 4.0, 3.87, 3.74, 3.62, 3.55],
        ['Q', 4.0, 3.87, 3.74, 3.61, 3.5],
        ['J', 4.0, 3.86, 3.73, 3.6, 3.49],
        ['T', 4.0, 3.85, 3.7, 3.58, 3.44],
        [9, 4.0, 3.84, 3.69, 3.53, 3.4],
        [8, 4.0, 3.84, 3.67, 3.51, 3.37],
        [7, 4.0, 3.83, 3.67, 3.5, 3.3],
        [6, 4.0, 3.83, 3.66, 3.48, 3.29],
        [5, 4.0, 3.83, 3.66, 3.47, 3.26],
        [4, 4.0, 3.82, 3.65, 3.46, 3.25],
        [3, 4.0, 3.82, 3.65, 3.45, 3.22],
        [2, 4.0, 3.82, 3.65, 3.45, 3.21]
    ]);

    var options = {
        chart: {
            title: 'Card Removal Effect',
            subtitle: '6max Table',
            bars: 'vertical',
            vAxis: {format: 'decimal'},
            height: 400
        }
    };

    var chart = new google.charts.Bar(document.getElementById('chart_div'));
    chart.draw(data, google.charts.Bar.convertOptions(options));

    var btns = document.getElementById('btn-group');
    btns.onclick = function (e) {
        if (e.target.tagName === 'BUTTON') {
            options.bars = e.target.id;
            chart.draw(data, google.charts.Bar.convertOptions(options));
        }
    }
}
