window.onload = function() {
    const topics = document.querySelectorAll('.topic');

    topics.forEach(topic => {
        topic.addEventListener('click', function() {
            const info = this.querySelector('.info');
            info.classList.toggle('hidden');
        });
    });
};
