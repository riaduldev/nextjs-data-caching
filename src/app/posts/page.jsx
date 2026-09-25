/**
 * GET: 
 * POST:
 * UPDATE: PUT / PATCH
 * DELETE:
*/

const getPosts = async() => {
 const res = await fetch ("https://jsonplaceholder.typicode.com/posts");
 return res.json();
}

const getPosts2 = async() => {
 try {
    const res = await fetch ("https://jsonplaceholder.typicode.com/posts");
 return res.json();
 }
 catch (error) {
    throw new Error('Failed to fetch post')
 }
}


const getPosts3 = async() => {
 const res = await fetch ("https://jsonplaceholder.typicode.com/posts");
 if(!res.ok) {
    throw new Error('Failed to fetch post')
 }
 return res.json();
}

// const postPromise = async() => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     return res.json();
// }

const PostsPage = async() => {
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const posts = await res.json();

    // const posts = await postPromise();

    const posts = await getPosts();

    return (
        <div>
            <h1>Hello Posts: {posts.length}</h1>
        </div>
    );
};

export default PostsPage;