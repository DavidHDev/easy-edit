(() => {
    document.designMode = 'on';
    const indicator = document.createElement('div');
    indicator.innerHTML = `<span class="indicator">Editing Page - Press ESC to quit!</span>`;
    document.body.appendChild(indicator);
    document.addEventListener('keyup', e => {
        if (e.key === 'Escape') {
            document.designMode = 'off';
            indicator.remove();
            document.removeEventListener('keyup', e);
        }
    });
})();