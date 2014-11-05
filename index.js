function main() {
    var bodyEl = document.getElementsByTagName('body')[0];
    addIftachStuff(bodyEl);
    addAvivStuff(bodyEl);
};

function addIftachStuff(bodyEl) {
    var d = document.createElement('h3');
    d.textContent = 'Aviv Ben-Yosef was here before me';
    bodyEl.appendChild(d);
}
