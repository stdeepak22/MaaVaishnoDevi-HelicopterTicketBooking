setInterval(function () {
    console.log(document.title);
    if (!!document.onmousedown) {
        console.log('onmousedown');
        document.onmousedown = null;
    }
    if (!!document.onmouseup) {
        console.log('onmouseup');
        document.onmouseup = null;
    }
    if (!!document.oncontextmenu) {
        console.log('oncontextmenu');
        document.oncontextmenu = null;
    }
}, 1000);