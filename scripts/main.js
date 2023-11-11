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