let isContentVisible = true;

const  hiddenTitle = document.querySelector('.collapsible__action--hidden'),
        visibleTitle = document.querySelector('.collapsible__action--visible'),
        content = document.querySelector('.collapsible__content'),

        contentHidden = [
            { opacity: 1 },
            { opacity: 0 }
        ],
        contentShown = [
            { opacity: 0 },
            { opacity: 1 }
        ];

document.querySelector('.collapsible__action--hidden').style.display = 'none';

document.querySelector('.collapsible__button').onclick = () => {
    if (isContentVisible) {
        visibleTitle.style.display = 'none';
        hiddenTitle.style.display = 'block';
        content.animate(contentHidden, 100);
        setTimeout(() => {
            content.style.display = 'none';
        }, 90);
    }  else {
        visibleTitle.style.display = 'block';
        hiddenTitle.style.display = 'none';
        content.style.display = 'block';
        content.animate(contentShown, 100);
    }
    isContentVisible = !isContentVisible;
}