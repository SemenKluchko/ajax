;

function createList(movie) {
	$("#result").append(`
	<img class="poster" src="${movie.Poster}" alt="Poster"></img>
	<p><b>Film name:</b> ${movie.Title}.</p>
	<button class="details-btn btn btn-outline-secondary" type="button" id="button-addon2">Details</button>
	<div class="details">
		<p><b>Film ID:</b> ${movie.imdbID}.</p>
		<p><b>Type:</b> ${movie.Type}.</p>
		<p><b>Year:</b> ${movie.Year}.</p>
	</div>
	<hr />
	`)
}

$('.user-form').on('submit', (event) => {
	event.preventDefault();
	$("#result").empty();
	const film = $('#search-film').val();
	const type = $('#select option:selected').val();
	const link = `http://www.omdbapi.com/?s=${film}&type=${type}&apikey=5440cbea`;
	
	fetch(link)
		.then((response) => response.json())
		.then((responsed) => {
			for (let i = 0; i < responsed.Search.length; ++i) {
				const films = responsed.Search[i];
				createList(films);
			}
					$('.details-btn').on('click', function() {
						$(this).next().toggleClass('active');
					})
		})
		.catch((error) => {
			console.log(error)
			$("#result").html(`Movie is not find!`);
		})
		
})
