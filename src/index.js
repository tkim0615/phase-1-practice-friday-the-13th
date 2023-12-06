const watchedButton = document.getElementById('watched')
const detailImageElement = document.getElementById('detail-image')
const titleElement = document.getElementById('title')
const yearReleasedElement = document.getElementById('year-released')
const descriptionElement = document.getElementById('description')
const bloodForm = document.getElementById('blood-form')
const bloodAmountELement = document.getElementById('amount')
 let currentMovie 

addBloodAmount()
toggleButton()
fetchGet()
    .then(r => r.json())
    .then(movieList =>{
        movieList.forEach(movie =>{
            renderMovieImage(movie)  
        })
        renderMovieDetail(movieList[0])
    })
function renderMovieImage(movie){
    const movieImageELement = document.createElement('img')
    const movieListNav = document.getElementById('movie-list')
    movieImageELement.src = movie.image
    movieListNav.append(movieImageELement)

    movieImageELement.addEventListener('click', () =>{
        renderMovieDetail(movie)
    })}
function renderMovieDetail(movie){
    currentMovie = movie
    //grab title, year, descp, watched, blood amt, image set text concents
    detailImageElement.src = movie.image
    titleElement.textContent = movie.title
    yearReleasedElement.textContent = movie.year_released
    descriptionElement.textContent = movie.description
    watchedButton.textContent = movie.watched? 'Watched': "Unwatched"   
    bloodAmountELement.textContent = movie.blood_amount
}
function toggleButton(){
    watchedButton.addEventListener('click', () =>{
        currentMovie.watched = !currentMovie.watched
        watchedButton.textContent = currentMovie.watched? 'Watched': 'Unwatched'
    })}
function addBloodAmount(){
    bloodForm.addEventListener('submit', e =>{
        e.preventDefault()
        currentMovie.blood_amount += Number(e.target[0].value)
        bloodAmountELement.textContent = currentMovie.blood_amount
    bloodForm.reset()
    })}
function fetchGet(){
    return fetch('http://127.0.0.1:4001/movies')
}
