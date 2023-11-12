const btnGitHub = document.getElementById('btn-github');
const btnLinkedin = document.getElementById('btn-linkedin');

btnGitHub.addEventListener('click', () => {
    newWindow('https://github.com/GuilhermeEduardo23');
})

btnLinkedin.addEventListener('click', () => {
    newWindow('https://www.linkedin.com/in/guilherme-eduardo-rodrigues-da-silva/');
})

function newWindow(url) {
    window.open(url);
}

/* Integração API GitHub */

function getProjects() {
    const url = 'https://api.github.com/users/GuilhermeEduardo23/repos';
    var loadingElement = document.getElementById('loading');

    fetch(url, {
        method: 'GET'
    })
        .then((response) => response.json())
        .then((response) => {
            loadingElement.style.display = 'none'
            showProjects(response)
        })
        .catch((err) => {
            console.log(err)
        })
}

function showProjects(data) {
    var listElement = document.getElementById('my-projectslist');

    for(let i = 0; i < data.length; i++) {
        let a = document.createElement('a');
        a.href = data[i]['clone_url'];
        a.target = '_blank';
        a.title = data[i]['description'];
        let linkText = document.createTextNode(data[i]['name']);
        a.appendChild(linkText);
        listElement.appendChild(a);
    }
}

getProjects();