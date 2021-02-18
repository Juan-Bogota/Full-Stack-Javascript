// AJAX

//PROTOCOLO HTTP

const d = document;

const $button = d.getElementById('data');

d.addEventListener('click', (e)=>{
    if(e.target === $button){
        let xhr;
        (window.XMLHttpRequest)? xhr = new XMLHttpRequest() // objeto que va guardar nuestra informacion
        : xhr = new ActiveXObject('Microsoft.XMLHTTP') // IE 9 o menor
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
        xhr.addEventListener('load',(data)=>{
            const dataJson = JSON.parse(data.target.response);
            d.getElementById('list').innerHTML = "";
            dataJson.forEach(user => {
                let $li = d.createElement('li');
                $li.innerHTML = `
                <b> INFO ID: </b>${user.id}, <b>NAME:</b> ${user.name} 
                `
                d.getElementById('list').appendChild($li);
            });
        })
        xhr.send()
    }
})

const form = document.getElementById('form')
const characters = document.getElementById('characters')
const table = document.getElementById('table')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    getData(characters.children[characters.selectedIndex].value)
})

const getData = (id) => {
    let xhr
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsoft.XMLHTTP")

    if (id == undefined) {
        xhr.open('GET', 'marvel.php')

        xhr.addEventListener('load', (data) => {
            const dataJSON = JSON.parse(data.target.response)
            console.log(dataJSON)
        
        const fragment = document.createDocumentFragment()

        for (const heroes of dataJSON) {
            const option = document.createElement('OPTION')
            option.setAttribute('value', heroes.ID)
            option.textContent = heroes.Name
            fragment.appendChild(option)
        }

            characters.appendChild(fragment)
        })
    } else {
        xhr.open('GET', `marvel.php?id=${id}`)

        xhr.addEventListener('load', (data) => {
            const dataJSON = JSON.parse(data.target.response)
            console.log(dataJSON)

            const fragment = document.createDocumentFragment()

            for (const heroe of dataJSON) {
                const row = document.createElement('TR')
                const dataName = document.createElement('TD')
                const dataAlignment = document.createElement('TD')
                const dataHometown = document.createElement('TD')
                const dataGender = document.createElement('TD')
                const dataFighting = document.createElement('TD')
                dataName.textContent = heroe.Name
                dataAlignment.textContent = heroe.Alignment
                dataHometown.textContent = heroe.Hometown
                dataGender.textContent = heroe.Gender
                dataFighting.textContent = heroe.Fighting_Skills

                row.append(dataName)
                row.append(dataAlignment)
                row.append(dataHometown)
                row.append(dataGender)
                row.append(dataFighting)

                fragment.append(row)
            }

            if (table.children[1]) {
                table.removeChild(table.children[1])
            }
            table.append(fragment)
        })
    }

    xhr.send()
}

getData()