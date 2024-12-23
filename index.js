document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
        const src = img.getAttribute('src');
        const modal = document.createElement('div');
        modal.classList.add('modal');

        const largeImage = document.createElement('img');
        largeImage.src = src;
        largeImage.alt = img.alt;

        modal.appendChild(largeImage);
        document.body.appendChild(modal);

        modal.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
    });
});
