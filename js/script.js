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
