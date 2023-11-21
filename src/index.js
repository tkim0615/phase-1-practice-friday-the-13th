const titleElement = document.getElementById('title')
    const yearReleasedElement = document.getElementById('year-released')
    const  descriptionElement = document.getElementById('description')
    const watchedElement = document.getElementById('watched')
    const detailImageElement = document.getElementById('detail-image')


fetch('http://127.0.0.1:4000/movies')
.then(resp => resp.json())
.then(movies => {
    //////////////////////////////////////////////beginning of forEach interation
    movies.forEach(movie => {
//challenge 1
        const imgElement = document.createElement('img')
        const movieListElement = document.getElementById('movie-list')
        imgElement.src = movie.image

        movieListElement.appendChild(imgElement)


//challenge 3 eventlistener. showing details of movie clicked. Inside forEach iterator
        imgElement.addEventListener('click', (e) => {
                displayMovieDetail(movie)
        })
// challenge 4
     


    })
    //////////////////////////////////////////////////end of forEach iteration
    watchedElement.addEventListener('click', (e) => {
        e.target.textContent == 'UNWATCHED' ? e.target.textContent = 'WATCH' : e.target.textContent = 'UNWATCHED';
        
    })
    //challenge 5
    const bloodForm = document.getElementById('blood-form')
    bloodForm.addEventListener('submit', (e) =>{
        e.preventDefault()
        const bloodAmountElement = document.getElementById('amount')
        let bloodCount = Number(bloodAmountElement.textContent)
        const bloodAmountInputElement = document.getElementById('blood-amount')
        let bloodInputCount = Number(bloodAmountInputElement.value)

        let sumBloodCount = bloodInputCount + bloodCount
         
        bloodAmountElement.textContent = sumBloodCount

        bloodForm.reset()

    })


        //challenge 2 refactored
        displayMovieDetail(movies[0])

    //challenge 2 can take in any movie object
    function displayMovieDetail(movie){


    detailImageElement.src = movie.image
    titleElement.textContent = movie.title
    yearReleasedElement.textContent = movie.release_year
    descriptionElement.textContent = movie.description
    watchedElement.textContent = movie.watched ? 'WATCHED' : 'UNWATCHED';
    const bloodAmountElement = document.getElementById('amount')
    bloodAmountElement.textContent = 0



    }
    
 


})