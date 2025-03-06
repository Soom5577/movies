window.addEventListener('resize', function() {
    if (window.innerWidth <= 230) {
        document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=230, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    } else {
        document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }
});
