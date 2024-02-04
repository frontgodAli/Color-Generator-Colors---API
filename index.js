const colorInput=document.getElementById("color-input")
const getColor=document.getElementById("get-color")
const shemeSelect=document.getElementById("scheme-select")
const container=document.createElement("div")
container.classList.add("color-grid")

getColor.addEventListener("click",()=>{
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInput.value.substring(1)}&mode=${shemeSelect.value}`)
    .then(res=>res.json())
    .then(data=>{
        const colorsArray=data.colors
        const colorsHtml=colorsArray.map(color=>{
            return`<div style="background-color:${color.hex.value}"></div>
            <p class="color-text">${color.hex.value}</p>`
        }).join('')
        document.querySelector("main").append(container)
        document.querySelector(".color-grid").innerHTML=colorsHtml
    })
})
