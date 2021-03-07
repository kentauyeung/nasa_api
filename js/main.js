const url = 'https://api.nasa.gov/planetary/apod?api_key=lYj89Zwnw8bd1ISjPVpMMlAiuzjwb3g3V6Cr5g4a&' + `${date}`
let date = document.querySelector('.date').value

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(`error ${err}`)
  })
