// Users     https://jsonplaceholder.typicode.com/users
// Posts     https://jsonplaceholder.typicode.com/posts
// Comments  https://jsonplaceholder.typicode.com/comments

// TODO : sequentially
let userId = 1


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// async function sequentially() {
//     try {
//         let userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//         let user = await userResponse.json();
//         let postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
//         let posts = await postResponse.json();


//         console.log("user: ", user)
//         console.log("posts: ", posts)

//         const postsContainer = document.createElement('div')
//         postsContainer.className = 'posts container post-card'
//         postsContainer.innerHTML = `<h2 class="mb-3">user: ${JSON.stringify(user)}
//                                             </h2><p>posts: ${JSON.stringify(posts)}
//                                             </p><div class="comments "></div>`
//         document.body.appendChild(postsContainer)


//     } catch (err) {
//         console.log('Error :>> ', err);
//     }
// }
// sequentially() 
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


// TODO : in Parallel

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

async function inParallel() {
    try {
        let userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        let postsPromise = fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        
        let[userResponse, postsResponse] = await Promise.all([userPromise, postsPromise])
        
        let user = await userResponse.json();
        let posts = await postsResponse.json();


        console.log("user: ", user)
        console.log("posts: ", posts)

        const postsContainer = document.createElement('div')
        postsContainer.className = 'posts container post-card'
        postsContainer.innerHTML = `<h2 class="mb-3">user: ${JSON.stringify(user)}
                                            </h2><p>posts: ${JSON.stringify(posts)}
                                            </p><div class="comments "></div>`
        document.body.appendChild(postsContainer)


    } catch (err) {
        console.log('Error :>> ', err);
    }
}
inParallel() 
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

