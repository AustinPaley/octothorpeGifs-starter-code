// Global Variables

const userId = 2
let ul = document.createElement("UL")
let gifContainer = document.querySelector('#gifscontainer')
gifContainer.appendChild(ul)
let form = document.querySelector("#new-gif-input")


form.addEventListener('keydown', (e) => {
  if (e.which == 13 || e.keyCode == 13){
    e.preventDefault()
    debugger
    fetch(`https://fetch-message-in-the-bottle.herokuapp.com/api/v2/gifs`, {
    method: "POST",
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({url: e.currentTarget.value, user_id: 2})
    })
  }
})

//

//The FETCH //
fetch ('https://fetch-message-in-the-bottle.herokuapp.com/api/v2/gifs')
.then(response => response.json())
.then(jsondata => jsondata.forEach( msgObj => {generalHolder(msgObj)} ))

//

//General Holding Function
function generalHolder(msgObj){
let newDiv = document.createElement("div")
newDiv.innerHTML += `<img src= "${msgObj.url}">`
ul.appendChild(newDiv)
}
//

//POST FUNCTION
// function patchData(e){
//
// }
//
