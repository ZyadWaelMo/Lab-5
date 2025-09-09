const searchInput = document.querySelector(`.searchInput`)
const searchBtn = document.querySelector(`.searchBtn`)
const searchContent = document.querySelector(`.searchContent`)

// https://api.github.com/users/${username}

// searchBtn.addEventListener('click', function () {

//     const userName = searchInput.value
//     const url = `https://api.github.com/users/${userName}`

//     fetch(url)
//         .then(response => response.json())
//         .then(function (data) {
//             searchContent.innerHTML = `
//         <h2>${data.name}</h2>
//         <img src="${data.avatar_url}" alt="${data.name}" width="150">
//         <p>Company: ${data.company}</p>
//         <p>Location: ${data.location}</p>
//         <p>Repositories: ${data.public_repos}</p>
//         <p>Bio: ${data.bio}</p>
//         <p>Followers: ${data.followers}</p>
//         <p>Following: ${data.following}</p>
//         `
//         })
// })


// Using Fetch

searchBtn.addEventListener('click', async function () {

    const userName = searchInput.value
    const url = `https://api.github.com/users/${userName}`
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('User Not Found')
        }


        const data = await response.json()
        searchContent.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${data.avatar_url}" alt="${data.name}" width="150">
        <p>Company: ${data.company}</p>
        <p>Location: ${data.location}</p>
        <p>Repositories: ${data.public_repos}</p>
        <p>Bio: ${data.bio}</p>
        <p>Followers: ${data.followers}</p>
        <p>Following: ${data.following}</p>
        `
    }
    catch (error) {
        searchContent.innerHTML = error.message
    }
})

// Using XMLHttp Request



// searchBtn.addEventListener('click', function () {

//     const userName = searchInput.value

//     let request = new XMLHttpRequest()
//     request.open(`Get`, `https://api.github.com/users/${userName}`)
//     request.send()
//     console.log('request >> ', request)
//     request.onreadystatechange = function () {
//         if (this.readyState === 4 && this.status === 200) {
//             const data = JSON.parse(this.responseText)
//             console.log('user data :>> ', data);
//             if (data) {
                
//                 searchContent.innerHTML = `
//             <h2>${data.name}</h2>
//             <img src="${data.avatar_url}" alt="${data.name}" width="150">
//             <p>Company: ${data.company}</p>
//             <p>Location: ${data.location}</p>
//             <p>Repositories: ${data.public_repos}</p>
//             <p>Bio: ${data.bio}</p>
//             <p>Followers: ${data.followers}</p>
//             <p>Following: ${data.following}</p>
//             `
//             }
//         }
//     }
// })

