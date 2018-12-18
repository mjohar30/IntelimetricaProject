var nombre = document.querySelector('#nombre')
var direccion = document.querySelector('#direccion')
var rating = document.querySelector('#rating')
var datos = document.querySelector('#datos')

fetch(' https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json')
    .then(data => data.json())
    .then(data => {
    var random = data[Math.floor(Math.random()*data.length)]
    console.log(random)
    
    nombre.innerHTML = `${random.name}`
    
    rating.innerHTML = ` <small class="text-muted">Rating: ${random.rating} </small> `
    
    direccion.innerHTML = `<p class="card-text"> La dirección del lugar es: </p>
    <p class="card-text">  ${random.address.street} </p>
    ${random.address.city} , ${random.address.state}
    `
    datos.innerHTML = ` <p class="card-text"> Para reservar, favor de comunicarse por estos medios: </p>
    <p class="card-text">  Teléfono: ${random.contact.phone} </p>
    <p class="card-text"> Sitio web: <a href= " ${random.contact.site}"> ${random.contact.site} </a> </p>
    <p class="card-text"> Email: ${random.contact.email} </p>
    `

  }).catch(err => {
    // Do something for an error here
  });