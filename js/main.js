$(document).ready(() => {
  $('#search-form').on('submit', (e) => {
    let searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();
  });
});

function getMovies(searchText) {
  axios.get('http://www.omdbapi.com/?s=' + searchText + '&apikey=40b275ef')
  .then((response) => {
    console.log(response);
    let movies = response.data.Search;
    let output = '';
    $.each(movies, (index, movie) => {
      output+=`
      <div class="card col-8 mx-auto col-sm-6 mx-sm-0 col-md-3">
        <div class="card-body text-center">
          <img class="card-img" src="${movie.Poster}">
          <h5 class="card-title">${movie.Title}</h5>
          <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details </a>
        </div>
      </div>
      `
    });

    $('#movies').html(output);
  })
  .catch((err) => {
  console.log(err);
  });  
};
