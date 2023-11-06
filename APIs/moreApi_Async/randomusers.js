//without async 
const loadUsers = () => {
        //it's from randomuser.me
    const url = 'https://randomuser.me/api/?results=5';
     fetch(url)
         .then(res => res.json())
         .then(user => console.log(user.results))
         .catch(error => console.log(error))
}

//with async method same task
const loadUserAsync = async() =>{
    const url = 'https://randomuser.me/api/?results=5';
    try{
        const res = await fetch(url);
    const data = await res.json();
    displayUsers(data.results);
    }
    catch(error){
        console.log(error);
    }
    
}

const displayUsers = (users) =>{
    const usersContainer = document.getElementById('users-container');
    for(const user of users){
        console.log(user);
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
            <img src="${user.picture.large}" alt="">
            <h3>Name: ${user.name.first} </h3>
            <p>Email: ${user.email} </p>
            <p>Location: ${user.location.city} </p>
        `;
        usersContainer.appendChild(userDiv);
    }
}
loadUsers();