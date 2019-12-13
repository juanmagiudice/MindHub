$(function() {
	let dataHouse;
	fetch('https://api.propublica.org/congress/v1/113/house/members.json', {
		headers: { 'X-API-Key': 'dRWpqNQPS4OMZ9tTM9YVUMVbmNby7SMMjSL8zl7m' }
	})
		.then(res => res.json())
		.then(data => {
			dataHouse = data.results[0].members;
			console.log(dataHouse);
			app.members = dataHouse;
		})
		.catch(err => console.log(err));
});
let app = new Vue({
	el: '#app',
	data: {
		members: []
	}
});
