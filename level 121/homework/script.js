const friendList = document.getElementById("friend-list");

const render = (users) => {
    for (let user of users) {
        friendList.innerHTML += `
        <li>
            <p>${user.name}</p>
            <p>${user.username}</p>
            <p>${user.email}</p>
        </li>
        `
    }
}

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const users = await response.json();

        render(users)
    } catch(erorr) {
        console.log(erorr, "Eroorr!!");
    }

}



fetchData("https://jsonplaceholder.typicode.com/users");