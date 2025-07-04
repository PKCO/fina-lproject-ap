function showFrame(frameId) {

    document.querySelectorAll('iframe').forEach(frame => {
        frame.classList.remove('active-frame');
    });
    
    document.getElementById(`${frameId}-frame`).classList.add('active-frame');
    
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        if (button.querySelector('span').textContent.toLowerCase() === frameId || 
            (frameId === 'google' && button.querySelector('span').textContent === 'Gemini')) {
            button.classList.add('active');
        }
    });
}

document.querySelector('.theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    this.querySelector('i').classList.toggle('fa-sun');
    this.querySelector('i').classList.toggle('fa-moon');
});

document.addEventListener('DOMContentLoaded', function() {
    showFrame('jarvis');
});