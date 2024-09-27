// Dummy Data Start here
const posts = [
    {
        title:"This is Title 1",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eius quisquam dignissimos doloribus tempora. Placeat nisi, facere culpa nulla consequuntur sit doloribus beatae officiis iste impedit tempora, nobis eos nesciunt.",
    },
    {
        title:"This is Title 2",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eius quisquam dignissimos doloribus tempora. Placeat nisi, facere culpa nulla consequuntur sit doloribus beatae officiis iste impedit tempora, nobis eos nesciunt.",
    },
    {
        title:"This is Title 3",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eius quisquam dignissimos doloribus tempora. Placeat nisi, facere culpa nulla consequuntur sit doloribus beatae officiis iste impedit tempora, nobis eos nesciunt.",
    },
    {
        title:"This is Title 4",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eius quisquam dignissimos doloribus tempora. Placeat nisi, facere culpa nulla consequuntur sit doloribus beatae officiis iste impedit tempora, nobis eos nesciunt.",
    }
]

// Dummy Data end here
/* <div class="post">
            <h3 class="post-title">Heading</h3>
            <p class="post-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eius quisquam dignissimos doloribus tempora. Placeat nisi, facere culpa nulla consequuntur sit doloribus beatae officiis iste impedit tempora, nobis eos nesciunt.
            </p>
        </div> */

const postsElement = document.querySelector(".posts");
const loadAllData = () => {
    posts.map((post)=> {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h3 class="post-title">${post.title}</h3>
            <p class="post-body">${post.body}</p>
        `;
        postsElement.appendChild(postElement);

    });
};
loadAllData();

