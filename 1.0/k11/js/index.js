var url;
var kunciurl = 'true';

if (localStorage.getItem('url')) {
    url = localStorage.getItem('url');
} else {
    url = 'https://smkmigas-cbt.com/';
}

if (url) {
    document.getElementById('url').value = url;
} else {
    document.getElementById('url').value = '';
}

function run() {
    if (kunciurl === "true") {
        url = "https://smkmigas-cbt.com/";
    } else {
        url = document.getElementById('url').value;
    }
    
    localStorage.setItem('url',url);

    document.getElementById("content").innerHTML = '<iframe id="iframe" src="'+url+'?examkey=wHCVItIDQ0l7cwM50h4AYe5DTgHxWdEcmQtGoAqIJgNE7HkTBQoyxlYV1W3V70aLcU5jz4XKj2tnYRa9Ewp4mVyxMGnECtiIg1lU" frameborder="0"></iframe>';

}

setTimeout(function() {
    if (kunciurl === "true") {
        run()
    }
    document.getElementById('bg').style.display = 'none';
}, 3000);
