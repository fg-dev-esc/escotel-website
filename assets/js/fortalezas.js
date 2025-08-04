// JS específico para tabs de industrias en fortalezas.html

document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.industry-tab');
    const contents = document.querySelectorAll('.industry-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(`${targetTab}-content`).classList.add('active');
        });
    });
});
