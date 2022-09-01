function solve(steps, length, speed) {
    let metersHour = speed * 1000;
    let distance = steps * length;
    let time = (distance / metersHour) * 3600;
    let secPlus = Math.floor(distance / 500) * 60;

    let hours = Math.trunc((time + secPlus) / 3600).toFixed(0).padStart(2, 0);
    let minutes = Math.trunc((time + secPlus) / 60).toFixed(0).padStart(2, 0);
    let seconds = ((time + secPlus) % 60).toFixed(0).padStart(2, 0);

    console.log(`${hours}:${minutes}:${Math.ceil(seconds)}`)

}
solve(4000, 0.60, 5)