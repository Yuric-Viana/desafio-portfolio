const linkedin = document.getElementById('linkedin');
const insta = document.getElementById('insta');
const git = document.getElementById('github');
const email = document.getElementById('email');

mouseHover(linkedin, 'assets/icons/LinkedinLogo-hover.svg', 'assets/icons/ArrowUpRight-hover.svg')
mouseOut(linkedin, 'assets/icons/LinkedinLogo.svg', 'assets/icons/ArrowUpRight-hover.svg')

mouseHover(insta, 'assets/icons/InstagramLogo - hover.svg', 'assets/icons/ArrowUpRight - Copia.svg')
mouseOut(insta, 'assets/icons/InstagramLogo.svg', 'assets/icons/ArrowUpRight-hover.svg')

mouseHover(github, 'assets/icons/GithubLogo - hover.svg', 'assets/icons/ArrowUpRight-hover.svg')
mouseOut(github, 'assets/icons/GithubLogo.svg', 'assets/icons/ArrowUpRight-hover.svg')

mouseHover(email, 'assets/icons/EnvelopeSimple - hover.svg', 'assets/icons/ArrowUpRight.svg')
mouseOut(email, 'assets/icons/EnvelopeSimple.svg', 'assets/icons/ArrowUpRight-hover.svg')

function mouseHover(elemento, link, arrow) {
    elemento.addEventListener('mouseover', () => {
        elemento.querySelector('img').src = link;
        elemento.querySelector('.arrow').src = arrow; 
    })
}

function mouseOut(elemento, link, arrow) {
    elemento.addEventListener('mouseout', () => {
        elemento.querySelector('img').src = link;
        elemento.querySelector('.arrow').src = arrow; 
    })
}
