var contenido = document.querySelector('#contenido')

fetch(' https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json')
    .then(data => data.json())
    .then(data => {

    console.log(data[0]);
    contenido.innerHTML = 'data'

  }).catch(err => {
    // Do something for an error here
  });