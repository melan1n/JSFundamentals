function solve() {
    let submitBtn = document.getElementsByTagName('button')[0];
    let searchBtn = document.getElementsByTagName('button')[1];

    let users = [];
    let tableBody = document.getElementsByTagName('tbody')[0];

    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();

        let user = {};
        user.userName = document.getElementsByClassName('user-info')[0].children[1].value;
        user.email = document.getElementsByClassName('user-info')[0].children[5].value;
        user.topics = [];

        let topics = document.getElementsByClassName('topics')[0];
        let science = topics.children[2];
        if (science.checked) {
            user.topics.push(science.value);
        }
        ;

        let cooking = topics.children[4];
        if (cooking.checked) {
            user.topics.push(cooking.value);
        }
        ;

        let art = topics.children[6];
        if (art.checked) {
            user.topics.push(art.value);
        }
        ;

        let sport = topics.children[8];
        if (sport.checked) {
            user.topics.push(sport.value);
        }
        ;

        users.push(user);

        let userRow = document.createElement('tr');

        let colUsername = document.createElement('td');
        colUsername.textContent = user.userName;
        userRow.appendChild(colUsername);

        let colEmail = document.createElement('td');
        colEmail.textContent = user.email;
        userRow.appendChild(colEmail);

        let colTopics = document.createElement('td');
        colTopics.textContent = user.topics.join(' ');
        userRow.appendChild(colTopics);

        tableBody.appendChild(userRow);

        document.getElementsByClassName('user-info')[0].children[1].value = '';
        document.getElementsByClassName('user-info')[0].children[3].value = '';
        document.getElementsByClassName('user-info')[0].children[5].value = '';
        science.checked = false;
        art.checked = false;
        sport.checked = false;
        cooking.checked = false;

        console.log(users);
    })

    searchBtn.addEventListener('click', () => {
        let token = document.getElementsByTagName('input')[7].value;

        console.log(token);
    })
}