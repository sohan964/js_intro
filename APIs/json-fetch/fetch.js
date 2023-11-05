// JavaScript Object Notation  == JSON

const user = {
    id: 1, name: "shan", job: "bekar"
};
//object to JSON
const stringified = JSON.stringify(user)
console.log(stringified);

//JSON to Object
const userObj = JSON.parse(stringified);
console.log(userObj);



function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
}

function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json))
}

function loadUser2(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(user => displayUsers2(user))
}

function displayUsers2(users){
    const ul = document.getElementById('users-list');
    for(const user of users){
        console.log(user)
        const li = document.createElement('li');
        li.innerText = `Name: ${user.name} 
        Email: ${user.email} 
        
        `;
        ul.appendChild(li);
    }
}


//this is for post
function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(post => displayPost(post));
}

function displayPost(posts){


    const postContainer = document.getElementById('post-container');

    for(const post of posts){   
        console.log(post);
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h4>user: ${post.id}</h4>
        <h5>title: ${post.title}</h5>
        <p>Description: ${post.body}</p>
        `;
        postContainer.appendChild(div);
    }
}

loadPost();
//post end




