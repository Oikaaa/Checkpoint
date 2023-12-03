const list_group = document.getElementById('list-group')

fetch ('https://restcountries.com/v3.1/all')
    .then (function(response){
        return response.json()
    })
    .then (function(data){
        console.log(data)
        data.forEach(function(item, index){
            console.log(item.name.official)

            const liTag = document.createElement('li')
            liTag .innerText = item.name.official
            liTag.classList.add('list-group-item')

            list_group.appendChild(liTag)
        })
        
    })
    .catch (function(error){
        console.log(error)
    })