const searchInput = document.querySelector('.d-flex');

searchInput.addEventListener('submit', function(e) {
     e.preventDefault()
     var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {

          const response = JSON.parse(xhttp.responseText);
          const photoData = response.photos.map(function(photos) {
               return photos;
          })

          const container = document.querySelector('#photos-div');
          container.innerHTML = '';

          const searchTitle = document.createElement('h2');
               searchTitle.classList.add('search-title');
               searchTitle.innerHTML = `
               ${searchValue[0].toUpperCase()}${searchValue.slice(1)} Images
               `
               container.appendChild(searchTitle)

          photoData.forEach(function(photo) {
               const photoDiv = document.createElement('div');
               photoDiv.classList.add('photo-div');
               photoDiv.innerHTML = `
               <img class="photo" src="${photo.src.original}">
               `
               container.appendChild(photoDiv)
          })

     }
     };
     const searchValue = document.querySelector('.form-control').value;
xhttp.open("GET", `https://api.pexels.com/v1/search?query=${searchValue}&per_page=9`, true);
xhttp.setRequestHeader('Authorization', "563492ad6f9170000100000116807af787844c2a86b1eafedae223fb")
xhttp.send();
});





