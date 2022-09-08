 const dogImage = document.getElementById('dogImage')
 const click = document.getElementById('clickme')
 const getRandomDog = () =>{
    fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(json => {
        console.log(json.message)
        dogImage.innerHTML = `<img src="${json.message}">`
    })
 }
 click.onclick = () =>{
    getRandomDog()
 }