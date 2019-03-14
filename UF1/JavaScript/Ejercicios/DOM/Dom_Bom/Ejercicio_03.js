const post = document.getElementById("your-post");
const postsDiv = document.getElementById('added-posts');

const addPost = (title, text) => {
    const containerNone = document.createElement('div');
  
    const titleNode = document.createTextNode(title);
    const textNode = document.createTextNode(text);

    containerNone.appendChild(titleNode);
    containerNone.appendChild(textNode);

    postsDiv.appendChild(containerNone);
}


const onSubmit = () => {
    const postElements = post.elements;

    const title = postElements[0].value;
    const text = postElements[1].value;

    addPost(title, text);
}