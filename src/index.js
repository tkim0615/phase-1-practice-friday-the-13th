let currentMovie

fetch('http://127.0.0.1:3000/movies')
.then(resp => resp.json())
.then(movieList => {

    movieList.map(movie => {
    const imgElement = document.createElement('img')
    const movieListNav = document.querySelector('#movie-list')
    imgElement.src = movie.image
    movieListNav.appendChild(imgElement)

    imgElement.addEventListener('click', e => {
        displayMovieDetail(movie)
    })
    })

    //first movie to display detail when page loads
    displayMovieDetail(movieList[0])

    toggleButton()

    addBloodAmount()


})

const displayMovieDetail = movie => {
    currentMovie = movie
    const movieDetailImage = document.getElementById('detail-image')
    const movieDetailYearReleased = document.getElementById('year-released')
    const movieDetailDescription = document.getElementById('description')
    const movieDetailTitle = document.getElementById('title')
    const movieDetailWatched = document.getElementById('watched')
    const movieDetailBloodAmount = document.getElementById('amount')
    const bloodInputElement = document.getElementById('blood-amount')


    movieDetailImage.src = movie.image
    movieDetailYearReleased.textContent = movie.release_year
    movieDetailDescription.textContent = movie.description
    movieDetailTitle.textContent = movie.title
    movieDetailBloodAmount.textContent = currentMovie.blood_amount
    

    movieDetailWatched.textContent = movie.watched ? "Watched" : "Unwatched"
}

function toggleButton(){

    const movieDetailWatched = document.getElementById('watched')
    movieDetailWatched.addEventListener('click', e => {
        console.log(currentMovie.watched)
    currentMovie.watched = !currentMovie.watched
    movieDetailWatched.textContent = currentMovie.watched ? "Watched" : "Unwatched"
    }
    )
}


function addBloodAmount(){

    const bloodForm = document.getElementById('blood-form')
    bloodForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const movieDetailBloodAmount = document.getElementById('amount')

        const bloodInputElement = document.getElementById('blood-amount')
        currentMovie.blood_amount += Number(bloodInputElement.value)
        movieDetailBloodAmount.textContent = Number(currentMovie.blood_amount)


        bloodForm.reset()
        

    })


}













































// let currentMovie    //deliverbale 4 = when page loads,

// fetch('http://127.0.0.1:3000/movies')   //this fetch request in global scope happens whenever page loads. Each time it loads, it grabs the movie data
//     .then(resp => resp.json())               //and iterate the array and sending each element in array to the createImageMenu function which displays the menu of each movie
//     .then(movieArr => {

//         movieArr.map(eachMovie => {
//             createImageMenu(eachMovie) //function defined in outside scope
//         })

//         //challenge 2
//         renderMovieDetail(movieArr[0])

//         //challenge 4 function will be invoked whenever page loads/fetch happens (fetch get request loads as page load) this function sets up clickevent listerner ready for user to click
//         toggleWatchButton()   //why does the button stay when clicking diff movies and come back. when we do get fetch request, we are invoking this function. so this
//                             //is not refetching new version of data. we still have same fetched data so DOM tree stays same until we refresh page
//                             // we can persist this to save in the server but this is optimistic rendering so not persisting, not changing actual value of watched in data
//                             //since we did 1 fetch get request, it will keep this info until refreshed(initiaing new fetch request)
//         // challenge 5 blood button
//         retrieveBloodAmount()



//     })



//  function createImageMenu(movie){         //function in global scope to be used for map method
//     const navElement = document.querySelector(' #movie-list')
//     const image = document.createElement('img')
//     image.src = movie.image
//     navElement.appendChild(image)
//     ///challenge 3 writing evenlistener here since we have access to image element we had created and so can give functionality to it
//     image.addEventListener('click', () => {
//         renderMovieDetail(movie)

//     })
//  }


//  const renderMovieDetail = (movie) => {
//     currentMovie = movie     //whatever movies that comes in as argument to this function, we are setting it to currentMovie which was defined w/o value in global scope

//     const movieDetailImage = document.querySelector('img#detail-image')
//     const movieDetailTitle = document.querySelector('div h1#title')
//     const movieDetailYearReleased = document.querySelector('div h3#year-released')
//     const movieDetailDescription = document.getElementById('description')
//     const movieDetailWatched = document.getElementById('watched')
//     const movieDetailBloodAmount = document.getElementById('amount')
//     movieDetailImage.src = movie.image
//     movieDetailTitle.innerText = movie.title
//     movieDetailYearReleased.textContent = movie.release_year
//     movieDetailDescription.innerText = movie.description
//     movieDetailWatched.innerText = movie.watched ? "Watched" : "Unwatched"
//     movieDetailBloodAmount.textContent = movie.blood_amount
 

//  }

//  const toggleWatchButton = () => {
//     const movieDetailWatched = document.getElementById('watched')
//     movieDetailWatched.addEventListener('click', () => {

//         currentMovie.watched = !currentMovie.watched  // setting whatever opposite of what we have
//         movieDetailWatched.textContent = currentMovie.watched ? "Watched" : "Unwatched"

//     })

//  }


//  const retrieveBloodAmount = () => {
//     const bloodForm = document.getElementById('blood-form')
//     const movieDetailBlood = document.getElementById('amount')
//     const bloodInput = document.getElementById('blood-amount')

//     bloodForm.addEventListener('submit', (e) => {
//         e.preventDefault()

//         console.log(e)    //console log 'e' has target and target has 2 inputs. need to grab 1st input which is the input for blood and grab its value
//         currentMovie.blood_amount += Number(e.target[0].value)     // or this works too Number(bloodInput.value) 
//         movieDetailBlood.textContent = Number(currentMovie.blood_amount)
//         bloodForm.reset()
//     })
//  }

































































// const titleElement = document.getElementById('title')
//     const yearReleasedElement = document.getElementById('year-released')
//     const  descriptionElement = document.getElementById('description')
//     const watchedElement = document.getElementById('watched')
//     const detailImageElement = document.getElementById('detail-image')
//     let currentMovie

// fetch('http://127.0.0.1:3000/movies')
// .then(resp => resp.json())
// .then(movies => {
//     //////////////////////////////////////////////beginning of forEach iteration
//     movies.forEach(movie => {
// //challenge 1
//         const imgElement = document.createElement('img')
//         const movieListElement = document.getElementById('movie-list')
//         imgElement.src = movie.image

//         movieListElement.appendChild(imgElement)


// //challenge 3 eventlistener. showing details of movie clicked. Inside forEach iterator
//         imgElement.addEventListener('click', (e) => {
//                 displayMovieDetail(movie)
//         })
// // challenge 4
     


//     })
//     //////////////////////////////////////////////////end of forEach iteration
//     watchedElement.addEventListener('click', (e) => {
//         console.log(e.target)
//         currentMovie.watched = !currentMovie.watched;
//         e.target.textContent == 'UNWATCHED' ? e.target.textContent = 'WATCH' : e.target.textContent = 'UNWATCHED';

        
//     })
//     //challenge 5
//     const bloodForm = document.getElementById('blood-form')
//     bloodForm.addEventListener('submit', (e) =>{
//         e.preventDefault()
//         const bloodAmountElement = document.getElementById('amount')
//         let bloodCount = Number(bloodAmountElement.textContent)
//         const bloodAmountInputElement = document.getElementById('blood-amount')
//         let bloodInputCount = Number(bloodAmountInputElement.value)

//         let sumBloodCount = bloodInputCount + bloodCount
         
//         bloodAmountElement.textContent = sumBloodCount

//         bloodForm.reset()

//     })


//         //challenge 2 refactored
//         displayMovieDetail(movies[0])

//     //challenge 2 can take in any movie object
//     function displayMovieDetail(movie){
//         currentMovie = movie

//     detailImageElement.src = movie.image
//     titleElement.textContent = movie.title
//     yearReleasedElement.textContent = movie.release_year
//     descriptionElement.textContent = movie.description
//     watchedElement.textContent = movie.watched ? 'WATCHED' : 'UNWATCHED';
//     const bloodAmountElement = document.getElementById('amount')
//     bloodAmountElement.textContent = movie.blood_amount



//     }
    
 


// })