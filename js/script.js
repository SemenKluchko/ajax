;

function createList(movie) {
	$("#result").html(`
	<p>Film name: ${movie.Title}.</p>
	<p>Year: ${movie.Year}.</p>
	<p>IMDBid: ${movie.imdbID}.</p>
	<p>Genre: ${movie.Type}.</p>
	`)
}

$('.user-form').on('submit', (event) => {
	event.preventDefault();
	let film = $('#search-film').val();
	let type = $('#select option:selected').val();
	let link = `http://www.omdbapi.com/?s=${film}&type=${type}&apikey=5440cbea`;
	
	fetch(link)
		.then((response) => response.json())
		.then((responsed) => {
			for (let i = 0; i < responsed.Search.length; ++i) {
				createList(responsed.Search[i]);
			}
		})
		.catch((error) => {
			console.log(error)
			$("#result").html(`Movie is not find!`);
		})
})



// fetch('http://www.omdbapi.com/?apikey=5440cbea&t=')
// 	.then((response) => response.json())
// 	.then(() )

// console.log(film);

// http://www.omdbapi.com/?apikey=5440cbea&t=




// function render(post) {
// 	$("#root").html(`
// 	<article>
// 		<div>
// 			<p>Name: ${post.username} ${post.name}</p>
// 			<p>Email: <a href="mailto:${post.email}">${post.username}@april.biz</a></p>
// 			<p>Adress: ${post.address.street} ${post.address.suite} ${post.address.city} ${post.address.zipcode} ${post.address.geo.lat} ${post.address.geo.lng} </p>
// 			<p>Phone: Call me at <a href="tel:${post.phone}">${post.phone}</a></p>
// 			<p>Website: <a href="http://${post.website}" target="_blank">${post.website}</a></p>
// 			<p>Company: ${post.company.name}</p>
// 		</div>
// 	</article>
// 	`)
// }

// fetch('https://jsonplaceholder.typicode.com/users/1')
//   .then((response) => response.json())
//   .then((post) => render(post))
//   .catch((error) => {
//     console.log(error);
//   });
  