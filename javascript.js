document.querySelector('.search-input').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const items = document.querySelectorAll('.playlist li');

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
            item.classList.add('show');
            item.classList.remove('no-show');
        } else {
            item.classList.add('no-show');
            item.classList.remove('show');
        }
    });
});
