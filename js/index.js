var nombre = document.querySelector('#nombre')
var direccion = document.querySelector('#direccion')
var rating = document.querySelector('#rating')
var datos = document.querySelector('#datos')
<<<<<<< HEAD
var latitud, leng
=======
var lat, leng
>>>>>>> a859bf2d1b90a85c41a57d47a6ee3d497b064260

    fetch(' https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json')
    .then(data => data.json())
    .then(data => {
        var random = data[Math.floor(Math.random()*data.length)]
        console.log(random)
        
        nombre.innerHTML = `${random.name}`
        
        rating.innerHTML = ` <small class="text-muted">Rating: ${random.rating} </small> `
        
        direccion.innerHTML = `<p class="card-text"><strong> La dirección del lugar es: </strong> </p>
        <p class="card-text">  ${random.address.street} </p>
        ${random.address.city} , ${random.address.state}
        `
        datos.innerHTML = ` <p class="card-text"><strong> Para reservar, favor de comunicarse por estos medios: </strong> </p>
        <p class="card-text">  Teléfono: ${random.contact.phone} </p>
        <p class="card-text"> Sitio web: <a href= " ${random.contact.site}"> ${random.contact.site} </a> </p>
        <p class="card-text"> Email: ${random.contact.email} </p>
        `
<<<<<<< HEAD
        latitud = random.address.location.lat
        leng = random.address.location.lng
        console.log(latitud)
=======
        lat = random.address.location.lat
        leng = random.address.location.lng
        console.log(lat)
>>>>>>> a859bf2d1b90a85c41a57d47a6ee3d497b064260
        console.log(leng)
}).catch(err => {
    // Do something for an error here
});

function initMap() {
    var map;
     map = new google.maps.Map(document.getElementById('map'), {    
<<<<<<< HEAD
        center: {lat: latitud, lng: leng},
        zoom: 18
      });
      var marcador = {lat: latitud, lng: leng}
=======
        center: {lat: lat, lng: leng},
        zoom: 18
      });
      var marcador = {lat: lat, lng: leng}
>>>>>>> a859bf2d1b90a85c41a57d47a6ee3d497b064260
      marker = new google.maps.Marker({position: marcador, map: map});
    }

