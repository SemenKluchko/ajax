;

const FILM_KEY = 'Favorite films';

function createList(movie) {
	$("#result").append(`
	<img class="poster" src="${movie.Poster}" alt="Poster"></img>
	<p><b>Film name:</b><span> ${movie.Title}.</span></p>
	<button class="details-btn btn btn-outline-secondary" type="button" id="button-addon2">Details</button>
	<button class="favorite-btn btn btn-outline-secondary" type="button" id="button-addon2">Add to favorite!</button>
	<div class="details">
	<p class="imdbID">${movie.imdbID}.</p>
	<p><b>Type:</b> ${movie.Type}.</p>
	<p><b>Year:</b> ${movie.Year}.</p>
	</div>
	<hr />
	`)
}



function addToFavirote(film) {
	const filmData = window.localStorage.getItem(FILM_KEY);
	const filmDataList = JSON.parse(filmData || JSON.stringify([]));

	filmDataList.push(film);

	const filmDataToString = JSON.stringify(filmDataList);

	window.localStorage.setItem(FILM_KEY, filmDataToString);
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
			$('.favorite-btn').on('click', function() {
				const currentFilm = $(this).next().find('.imdbID').text();
				addToFavirote(currentFilm);
			})
			$('.details-btn').on('click', function() {
				$(this).siblings('.details').toggleClass('active');
			})
		})
		.catch((error) => {
			console.log(error)
			$("#result").html(`Movie is not find!`);
		})
		
})
