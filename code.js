

let imgSource=document.querySelector('.image-fit')
const submitButton =  document.querySelector('#search-button')
const searchInput = document.querySelector('#search-input')
let titleName=document.querySelector('.title-name')
let genreValue=document.querySelector('.genre')
let ratingValue=document.querySelector('.rating')
let descriptionValue=document.querySelector('.description')
let posterValue=document.querySelector('.poster')
let noFound=document.querySelector('.not-found')

submitButton.addEventListener('click',function(e){
    e.preventDefault()
    let query=searchInput.value.split(' ').join('+');
    let url=`https://www.omdbapi.com/?t=${query}&apikey=59154c18`  
    fetch(url)
    .then(response => {

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); 
  })
    .then(data => {
 
    if(data.Response=='True'){
        noFound.innerHTML=''
        titleName.innerHTML=data.Title
        genreValue.innerHTML=data.Genre 
        ratingValue.innerHTML=data.imdbRating
        descriptionValue.innerHTML=data.Plot
        imgSource.src=data.Poster
    }
    else{
        noFound.innerHTML=data.Error
        imgSource.src=''
        titleName.innerHTML=''
        genreValue.innerHTML=''
        ratingValue.innerHTML=''
        descriptionValue.innerHTML=''
    }
  })
    .catch(error => {

    console.error('There was a problem with the fetch operation:', error);
  });
    
})

