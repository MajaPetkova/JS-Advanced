function attachEventsListeners() {
    let days = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds')

    let rationsObj = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };

    document.getElementById('daysBtn').addEventListener('click', onConvert);
    document.getElementById('hoursBtn').addEventListener('click', onConvert);
    document.getElementById('minutesBtn').addEventListener('click', onConvert);
    document.getElementById('secondsBtn').addEventListener('click', onConvert);

    function convert(value, unit) {
        let days = value / rationsObj[unit];
        return {
            days: days,
            hours: days * rationsObj.hours,
            minutes: days * rationsObj.minutes,
            seconds: days * rationsObj.seconds
        }
    }

    function onConvert(ev) {
        let input = ev.target.parentElement.querySelector('input[type="text"]')
        let time = convert(Number(input.value), input.id)
        days.value = time.days;
        hoursInput.value = time.hours;
        minutesInput.value = time.minutes;
        secondsInput.value = time.seconds
    }
}