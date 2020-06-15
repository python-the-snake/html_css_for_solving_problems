const post = document.querySelector('.post');
const likesEL = document.querySelector('.likes');
const heart = document.querySelector('.heart-icon');

likesEL.innerText = 'No likes yet';

let counter = 0;

post.addEventListener('dblclick', ( =>{
    counter++;

    if(counter === 1) likesEL.innerText = counter +' like';
    else likesEL.innerText = counter + ' like';

    heart.classList.add('animate-like');
    setTimeout(() => {
        heart.classList.remove('animate-like');
    }, 800);
});