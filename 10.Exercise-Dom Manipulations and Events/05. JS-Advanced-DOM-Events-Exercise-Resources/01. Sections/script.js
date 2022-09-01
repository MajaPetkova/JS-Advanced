function create(words) {
    let parentElement = document.getElementById('content');


    for (let el of words) {
        let div = document.createElement('div');
        let p = document.createElement('p');
        p.textContent = el;
        div.appendChild(p);
        p.style.display = 'none';
        div.addEventListener('click', function(ev) {
            ev.currentTarget.children[0].style.display = 'block'

        })
        parentElement.appendChild(div)
    }
}