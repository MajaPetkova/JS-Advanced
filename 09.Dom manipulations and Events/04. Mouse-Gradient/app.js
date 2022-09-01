function attachGradientEvents() {
    // let gradientEl = document.getElementById('gradient');
    // let resultEl = document.getElementById('result');

    // const gradientMauseHandler = (e) => {
    //     let percent = Math.floor((e.offsetX / e.target.offsetWidth) * 100);
    //     // console.log(percent)
    //     resultEl.textContent = percent + '%'
    // }
    // gradientEl.addEventListener('mousemove', gradientMauseHandler)

    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onMove);
    const result = document.getElementById('result');

    function onMove(evt) {
        const box = evt.target;
        const offset = Math.floor(evt.offsetX / box.clientWidth * 100)
        result.textContent = `${offset}%`
    }
}