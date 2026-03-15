document.getElementById('testButton').addEventListener('click', function() {
    document.getElementById('message').innerText = 'Привет! Это сообщение из фaйла со скриптом.';
});

// Проверка заголовков (только если мы не на локальном файле)
if (window.location.protocol !== 'file:') {
    fetch(window.location.href, { method: 'HEAD' })
        .then(response => {
            console.log('Сайт работает на:', window.location.href);
            if (!response.headers.get('x-content-type-options')) {
                console.warn('X-Content-Type-Options не установлен. Это ограничение GitHub Pages.');
            }
        })
        .catch(err => {
            console.log('Не удалось проверить заголовки (но это нормально для GitHub Pages)');
        });
} else {
    console.log('Локальный запуск: пропускаем проверку заголовков');
}