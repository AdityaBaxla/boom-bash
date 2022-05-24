
const countriesAPI = 'https://restcountries.com/v2/all'

// const read = async () => {
//     const response = await fetch(countriesAPI)
//     country = []
//     const uff =  await response.json()
//     for (let i = 0; i < uff.length ; i++) {
//         country.push(uff[i].name)
//     }
//     console.log(country)
//     return country
// }
// let number 
// const countries = read()

// console.log(country)

// const cont = []
// for ( i = 0; i < countries.length; i++) {
//     cont.push(countries[i])
// }

// console.log(countries)
// console.log(cont)
const gridHead = document.createElement('div')
gridHead.className = 'grid-container'
document.body.appendChild(gridHead)

const button = document.getElementById('mybtn')

button.onclick = () => {            //when button pressed call the generate number function
    generateNumbers()
}

const generateNumbers = () => {        //generate numbers from one to input specified

    var num = parseInt(document.getElementById('num').value)
  
    const removeElem = document.getElementsByClassName('grid-container')
        removeElem[0].innerHTML =''
    if (num > 9999 ) {
        let node = document.createElement('div')
        node.textContent = "PLEASE INPUT A SMALLER NUMBER"
        node.id = 'temp'
        document.getElementsByClassName("grid-container")[0].appendChild(node)
        return;
    }
    for (let i = 1; i <= num; i++ ) {
        number = document.createElement('div')
        number.className = 'grid-item'
        number.style.fontSize = '25px'
        number.textContent = i.toString()
        let fact = 0
        for (j = 1; j <= (i/2); j++) {
            if ( i % j === 0) {
                fact++
            }
        }
        number.style.color = 'white'
        if ( fact === 1) {
            number.style.backgroundColor = '#7D3C98'
        }else if ( i % 2 === 0) {
            number.style.backgroundColor = '#90EE90'
        } else {
            number.style.backgroundColor = '#EC7063'
        }
        
        
        //gridAdd = document.getElementsByClassName('grid-container')
        document.getElementsByClassName("grid-container")[0].appendChild(number)   
    }
    
}

