function main() {
    var bodyEl = document.getElementsByTagName('body')[0];
    addIftachStuff(bodyEl);
    addAvivStuff(bodyEl);
};

function addIftachStuff(bodyEl) {
    var d = document.createElement('h3');
    d.textContent = 'Iftach is the man';
    bodyEl.appendChild(d);
}

function addAvivStuff(bodyEl) {
    var d = document.createElement('h1');
    d.textContent = 'My name is Inigo Montoya (this was done after Iftach)';
    bodyEl.insertBefore(d, bodyEl.firstChild);
}
