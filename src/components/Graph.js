import React from 'react'
import Chart from 'chart.js'

class Graph extends React.Component {
	constructor() {
		super();
		this.state = {
			chartCurrency: "USD",
			timeRates: {}
		}
	}

	componentDidMount() {
		let dates = ["2014-05-03", "2015-05-03", "2016-05-03", "2017-05-03"];
		let promises = [];
		dates.forEach((date) => {
			promises.push(fetch(`http://api.fixer.io/${date}`))
		})
		Promise.all(promises)
			.then((responsesArray) => {
				let jsonPromises = []
				responsesArray.forEach((response) => {
					jsonPromises.push(response.json());
				})
				return Promise.all(jsonPromises);
			})
			.then((responseObjectsArray) => {
				return responseObjectsArray.map((response) => {		
					let reducedRes = {};
					reducedRes[response.date] = response.rates[this.state.chartCurrency];
					return reducedRes;
				})
			})
			.then((timeRates) => {
				this.setState({
					timeRates: timeRates
				})
			})
  }

  render() {
	  let ctx = "myChart";
		var data = {
		    labels: ["January", "February", "March", "April", "May", "June", "July"],
		    datasets: [
		        {
		            label: "My First dataset",
		            fill: false,
		            lineTension: 0.1,
		            backgroundColor: "rgba(75,192,192,0.4)",
		            borderColor: "rgba(75,192,192,1)",
		            borderCapStyle: 'butt',
		            borderDash: [],
		            borderDashOffset: 0.0,
		            borderJoinStyle: 'miter',
		            pointBorderColor: "rgba(75,192,192,1)",
		            pointBackgroundColor: "#fff",
		            pointBorderWidth: 1,
		            pointHoverRadius: 5,
		            pointHoverBackgroundColor: "rgba(75,192,192,1)",
		            pointHoverBorderColor: "rgba(220,220,220,1)",
		            pointHoverBorderWidth: 2,
		            pointRadius: 1,
		            pointHitRadius: 10,
		            data: [65, 59, 80, 81, 56, 55, 40],
		            spanGaps: false,
		        }
		    ]
		};
		var myLineChart = new Chart(ctx, {
		    type: 'line',
		    data: data
		});

		return (<canvas id="myChart"></canvas>)  	
  }




}


export default Graph
