let weatherData = [
    { district: 'Thrissur', temperature: '32' },
    { district: 'Kottayam', temperature: '29' },
    { district: 'Palakkad', temperature: '34' },
    { district: 'Ernakulam', temperature: '33' },
    { district: 'Thrissur', temperature: '29' },
    { district: 'Kottayam', temperature: '30' },
    { district: 'Palakkad', temperature: '37' },
    { district: 'Ernakulam', temperature: '30' }
]
//print each district with highest temperture
let wd = {}
for (let data of weatherData) {
    let district = data.district
    let currentTemp = data.temperature
    if (district in wd) {
        let oldTemp = wd[district]
        if (oldTemp > currentTemp) {
            wd[district] = oldTemp
        }
        else {
            wd[district] = currentTemp
        }
    }
    else {
        wd[district] = currentTemp
    }
}
console.log(wd)