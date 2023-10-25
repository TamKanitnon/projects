const tabs = document.querySelector('.tabs');
const btns = document.querySelectorAll('.button');
const articles = document.querySelectorAll('.content');

tabs.addEventListener('click', e => {
    const buttonEl = e.target; // e is click touch element
    const id = buttonEl.dataset.id;
    const contentEl = document.getElementById(id);

    // console.log(buttonEl);
    // console.log(contentEl);

    if(id) {
        // Remove all '.live' for clear before add '.live' to one target.
        btns.forEach(btn => {
            btn.classList.remove('live');
        });
        articles.forEach(article => {
            article.classList.remove('live');
        });

        // Add '.live' to one target at we want to show.
        buttonEl.classList.add('live');
        contentEl.classList.add('live');
    }
});