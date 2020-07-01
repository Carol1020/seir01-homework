// const fetchFact = function () {
//   // const url = 'https://api.nasa.gov/planetary/apod?api_key=uKaBDEd9n5S1fq4x9QmJEYhT3jUnItzzOdDhCrta';
//
//   const destination = 'https://api.nasa.gov/planetary/apod?api_key=';
//   const api_key = 'uKaBDEd9n5S1fq4x9QmJEYhT3jUnItzzOdDhCrta';
//   const url = destination + api_key;
//   $.ajax(url).done(function (info) {
//     $('h1').after(`<p class="date">Date: ${ info.date }</p>`);
//     $('.date').after(`<p class="explanation">Explanation: ${ info.explanation }</p>`);
//     $('#nebula').attr('src', `${ info.hdurl }`)
//
//     console.log(info)
//
//   })
// }
//
// fetchFact(); //run the function

const fetchFact = function () {
  const url = 'https://api.nasa.gov/planetary/apod?api_key=uKaBDEd9n5S1fq4x9QmJEYhT3jUnItzzOdDhCrta';

  fetch(url)
    .then(response => response.json())
    .then(info => {console.log(info)
      $('h1').after(`<p class="date">Date: ${ info.date }</p>`);
      $('.date').after(`<p class="explanation">Explanation: ${ info.explanation }</p>`);
      $('#nebula').attr('src', `${ info.hdurl }`);
    });



}
fetchFact();
