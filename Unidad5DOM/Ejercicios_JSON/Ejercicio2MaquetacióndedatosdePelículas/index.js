datos={
  "Search": [
    {
      "Title": "Star Wars: Episode IV - A New Hope",
      "Year": "1977",
      "imdbID": "tt0076759",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: Episode V - The Empire Strikes Back",
      "Year": "1980",
      "imdbID": "tt0080684",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTkxNGFlNDktZmJkNC00MDdhLTg0MTEtZjZiYWI3MGE5NWIwXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: Episode VI - Return of the Jedi",
      "Year": "1983",
      "imdbID": "tt0086190",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNWEwOTI0MmUtMGNmNy00ODViLTlkZDQtZTg1YmQ3MDgyNTUzXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: Episode VII - The Force Awakens",
      "Year": "2015",
      "imdbID": "tt2488496",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: Episode I - The Phantom Menace",
      "Year": "1999",
      "imdbID": "tt0120915",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BODVhNGIxOGItYWNlMi00YTA0LWI3NTctZmQxZGUwZDEyZWI4XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: Episode III - Revenge of the Sith",
      "Year": "2005",
      "imdbID": "tt0121766",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: Episode II - Attack of the Clones",
      "Year": "2002",
      "imdbID": "tt0121765",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTgxMjY2YzUtZmVmNC00YjAwLWJlODMtNDBhNzllNzIzMjgxXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Rogue One: A Star Wars Story",
      "Year": "2016",
      "imdbID": "tt3748528",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: Episode VIII - The Last Jedi",
      "Year": "2017",
      "imdbID": "tt2527336",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg"
    },
    {
      "Title": "Star Trek",
      "Year": "2009",
      "imdbID": "tt0796366",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_SX300.jpg"
    }
  ],
  "totalResults": "4947",
  "Response": "True"
}
const divContenedor = document.getElementById('contenedor-peliculas');
let divAcutal=null;
let i=0;
for(const item of datos.Search){
    i++;
    console.log(item.Title);
    let divP1 = document.createElement('div');
    divP1.classList.add('clase-'+i);
    divP1.style.display='flex';
    divP1.style.flexDirection='column';
    divContenedor.style.display='flex';
    divContenedor.appendChild(divP1);
    let hTitulo=document.createElement('h2');
    hTitulo.classList.add('clase-'+i);
    hTitulo.innerText=item.Title;
    hTitulo.style.fontWeight='bold';
    divP1.appendChild(hTitulo);
    let sYear = document.createElement('span');
    sYear.classList.add('clase-'+i);
    sYear.innerText='Year: '+item.Year;
    divP1.appendChild(sYear);
    let sImdbId = document.createElement('span');
    sImdbId.classList.add('clase-'+i);
    sImdbId.innerText='IMDB ID : '+item.imdbID;
    divP1.appendChild(sImdbId);
    let sType = document.createElement('span');
    sType.classList.add('clase-'+i);
    sType.innerText='tipo: '+item.Type;
    divP1.appendChild(sType);
    let imgPortada = document.createElement('img');
    imgPortada.classList.add('clase-'+i);
    imgPortada.src=item.Poster;
    imgPortada.alt=item.Title;
    imgPortada.style.height='21.875rem';
    imgPortada.style.width='100%';
    imgPortada.style.objectFit = 'cover'
    imgPortada.style.marginTop='auto';
    divP1.appendChild(imgPortada);
    divP1.style.maxWidth='15.625rem';
    divP1.style.margin='auto';
}
divContenedor.style.flexWrap = 'wrap';
divContenedor.style.gap='1.25rem';
document.getElementById('tituloBody').style.textAlign='center';
document.getElementById('tituloBody').style.fontFamily='arial';
document.getElementById('tituloBody').style.backgroundColor='#fff';
document.getElementById('tituloBody').style.color='#000000';
document.getElementById('tituloBody').style.maxWidth='40rem';
document.getElementById('tituloBody').style.borderRadius='10px';
document.getElementById('tituloBody').style.margin='20px auto';
document.getElementById('tituloBody').style.padding='10px';
document.body.style.backgroundColor='#000000';
document.body.style.color='#fff';