const items = document.getElementById("items")
const templateCard = document.getElementById("template-card").content
const fragment = document.createDocumentFragment()




document.addEventListener("DOMContentLoaded", () => {
  fetchData()
})

const fetchData = async () => {
  try {
    const res = await fetch ("api.json")
    const data = await res.json() 
    //console.log(data)
    pintarCards(data)
  } catch (error) {
    console.log(error)
  }
}

const pintarCards = data => {
    data.forEach(producto => {
      templateCard.getElementById("supra1").textContent = producto.title
      const clone = templateCard.cloneNode(true)
      fragment.appendChild(clone)
    })
    items.appendChild(fragment)
}


const fullAlgaizer = document.querySelector("#fullAlgaizer")
fullAlgaizer.textContent= "DESDE JS CON TEXTCONTENT"
fullAlgaizer.innerHTML= " DESDE JS CON INNERHTML"
fullAlgaizer.classList.add ("bg-dark" , "text-primary")

const sumJs = document.getElementById("sumJs") 

const segundaDescripcion = document.createElement ("p")
segundaDescripcion.textContent = "SEGUNDA DESCRIPCION JS CON CREATE ELEMENT"

sumJs.appendChild(segundaDescripcion)

const especies = document.getElementById("especies")

const arregloEspecies = ["Suculentas" , "Philodendros" , "Pottus" , "Citricos"]


arregloEspecies.forEach (item => {
  console.log (item)
  const especie1 = document.createElement ("li")
  especie1.textContent = item
  especies.appendChild(especie1)
})
