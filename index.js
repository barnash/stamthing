function main() {
    var bodyEl = document.getElementsByTagName('body')[0];
    addIftachStuff(bodyEl);
};

function addIftachStuff(bodyEl) {
    var d = document.createElement('h3');
    d.textContent = 'Iftach is the man';
    bodyEl.appendChild(d);
}
