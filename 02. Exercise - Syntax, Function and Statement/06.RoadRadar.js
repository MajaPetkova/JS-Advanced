function solve(num, area) {

    if (area === "motorway") {
        let limit = 130
        if (num > limit) {
            let dif = num - limit;

            if (dif <= 20) {
                console.log(`The speed is ${dif} km/h faster than the allowed speed of ${limit} - speeding `)
            } else if (dif > 20 && dif <= 40) {
                console.log(`The speed is ${dif} km/h faster than the allowed speed of ${limit} - excessive speeding`)
            } else {
                console.log(`The speed is ${dif} km/h faster than the allowed speed of ${limit} - reckless driving`)
            }

        } else {
            console.log(`Driving ${num} km/h in a ${limit} zone`)
        }
    } else if (area === "interstate") {
        let limit = 90;

        if (num > limit) {
            let dif = num - limit;
            if (dif <= 20) {
                console.log(`The speed is ${dif} km/h faster than the allowed speed of ${limit} - speeding `)
            } else if (dif > 20 && dif <= 40) {
                console.log(`The speed is ${dif} km/h faster than the allowed speed of ${limit} - excessive speeding`)
            } else {
                console.log(`The speed is ${dif} km/h faster than the allowed speed of ${limit} - reckless driving`)
            }

        } else {
            console.log(`Driving ${num} km/h in a ${limit} zone`)
        }
    } else if (area === "city") {
        let limit = 50;
        if (num > limit) {
            let dif = num - limit;
            if (dif <= 20) {
                console.log(`The speed is ${dif} km/h faster than the allowed speed of ${limit} - speeding `)
            } else if (dif > 20 && dif <= 40) {
                console.log(`The speed is ${dif} km/h faster than the allowed speed of ${limit} - excessive speeding`)
            } else {
                console.log(`The speed is ${dif} km/h faster than the allowed speed of ${limit} - reckless driving`)
            }
        } else {
            console.log(`Driving ${num} km/h in a ${limit} zone`)
        }
    } else if (area === "residential") {
        let limit = 20;
        if (num > limit) {
            let dif = num - limit;
            if (dif <= 20) {
                console.log(`The speed is ${dif} km/h faster than the allowed speed of ${limit} - speeding `)
            } else if (dif > 20 && dif <= 40) {
                console.log(`The speed is ${dif} km/h faster than the allowed speed of ${limit} - excessive speeding`)
            } else {
                console.log(`The speed is ${dif} km/h faster than the allowed speed of ${limit} - reckless driving`)
            }
        } else {
            console.log(`Driving ${num} km/h in a ${limit} zone`)
        }
    }

}
solve(40, "city")
solve(200, "motorway")