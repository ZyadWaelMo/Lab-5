// Users     https://jsonplaceholder.typicode.com/users
// Posts     https://jsonplaceholder.typicode.com/posts
// Comments  https://jsonplaceholder.typicode.com/comments

// TODO  I. using .then() .catch() ( callback hell )

// throw new Error("Test the catch") will never be triggered XD


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then(response => response.json())
//     .then(posts => {
//         posts.forEach(post => {
//             console.log("Posts: ", post)

//             const postsContainer = document.createElement('div')
//             postsContainer.className = 'posts container post-card'
//             postsContainer.innerHTML = `<h2 class="mb-3">Post number: ${post.id}
//                                             </h2><p>Post Content: ${post.body}
//                                             </p><div class="comments "></div>`
//             document.body.appendChild(postsContainer)

//             // throw new Error("Test the catch");
//             fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
//                 .then(response => response.json())
//                 .then(post => {
//                     // throw new Error("Test the catch");
//                     fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
//                         .then((response) => response.json())
//                         .then(comments => {
//                             console.log("Comments: ", comments)


//                             const commentsContainer = postsContainer.querySelector('.comments')
//                             comments.forEach(comment => {
//                                 const commentSeparate = document.createElement('div')
//                                 commentSeparate.className = 'comment comment-card mb-2'
//                                 commentSeparate.innerHTML = `
//                                         <strong>Comment Number: ${comment.id}</strong>
//                                         <p>Comment Content: ${comment.body}</p>
//                                     `
//                                 commentsContainer.appendChild(commentSeparate)
//                             })
//                         })
//                         .catch(e => {
//                             commentsContainer.innerHTML = e.message
//                         })
//                 })
//                 .catch(e => {
//                     postsContainer.innerHTML = e.message
//                 })
//         })
//     })
//     .catch(e => {
//         postsContainer.innerHTML = e.message
//     })
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


// TODO  II. using Async/Await

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
async function asyncAwait() {
    try {
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const posts = await postsResponse.json()

        posts.forEach(async (post) => {

            console.log("Posts: ", post)

            const postsContainer = document.createElement('div')
            postsContainer.className = 'posts container post-card'
            postsContainer.innerHTML = `<h2 class="mb-3">Post number: ${post.id}
                                        </h2><p>Post Content: ${post.body}
                                        </p><div class="comments"></div>`;
            document.body.appendChild(postsContainer);

            try {

                const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
                const comments = await commentsResponse.json();

                console.log("Comments: ", comments);

                const commentsContainer = postsContainer.querySelector('.comments');

                comments.forEach(comment => {
                    const commentSeparate = document.createElement('div')
                    commentSeparate.className = 'comment comment-card mb-2'
                    commentSeparate.innerHTML = `<strong>Comment Number: ${comment.id}</strong>
                                                <p>Comment Content: ${comment.body}</p>`;
                    commentsContainer.appendChild(commentSeparate);

                    
                })
            } catch (e) {
                postsContainer.querySelector('.comments').innerHTML = e.message;
            }
        })
    } catch (e) {
        document.body.innerHTML = e.message;
    }
}
asyncAwait()

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
