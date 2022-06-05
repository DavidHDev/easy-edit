(() => {
    document.designMode = 'on';
    const indicator = document.createElement('div');
    indicator.setAttribute('id', 'easyedit');

    if (!document.getElementById('easyedit')) {
        indicator.innerHTML = `<span style="position: fixed; left: 50%; transform: translateX(-50%); bottom: 2em; border-radius: 10px; background: #12e78e; font-weight: 500; color: #16161a; transform-origin: 0 50%; white-space: nowrap; z-index: 100; padding: .5em 1em;">Editing Page - Press ESC to quit!</span>`;
        document.body.appendChild(indicator);
    }

    document.addEventListener('keyup', e => {
        if (e.key === 'Escape') {
            document.designMode = 'off';
            indicator.remove();
            document.removeEventListener('keyup', e);
        }
    });
})();