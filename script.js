let mainContainer = document.querySelector(".main-container")
let submitButton = document.querySelector("button")
let userInput = document.querySelector("input")
let fieldset = document.querySelector('fieldset')


function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function addColor(){
    let checkedColor = document.querySelector('input[name="color"]:checked').value;
    
    [...mainContainer.children].forEach((el)=>{
        el.addEventListener("mouseenter", ()=>{
        if(checkedColor==="black" || checkedColor==="white"){
            console.log("BLACK||WHITE")
            el.style.backgroundColor = checkedColor
        }
        else if(checkedColor==="warm"){
            let warm_colors = ["#FA5C5C", "#FD8A6B", "#FEC288", "#FBEF76"]
            let randomIndex = getRandomIntInclusive(0,warm_colors.length-1)
            console.log(warm_colors[randomIndex])
            el.style.backgroundColor = warm_colors[randomIndex]
        }
    })
    })

    console.log("---", checkedColor)
}


function createGrid(num){
    if(num>100) {
        alert("Grid limit exceeded! Default to 16x16 grid")
        createGrid(16)
        return 
    }

    //GridCreation process
    for(let i = 0 ;i < num*num; i++){
        let divCreated = document.createElement("div")
        divCreated.style.border = "1px solid black"
        divCreated.style.width   = `${500/num}px`
        divCreated.style.height = `${500/num}px`
        mainContainer.appendChild(divCreated)
    }
}

submitButton.addEventListener("click", ()=>{
    mainContainer.innerHTML =""
    console.log(userInput.value)
    numSquares = userInput.value
    createGrid(numSquares)
    userInput.value = ""
})


// Main Function Call
createGrid(16)
addColor()
fieldset.addEventListener("click", addColor)

