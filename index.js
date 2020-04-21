#!/usr/bin/env node

const fetch = require("node-fetch")

const weather = async () => {
    let res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=berlin&units=metric&appid=0b16818e5496a7924da53707d4f2dc0c")
    let data = await res.json()
    console.log(`        City: ${data.name}
        Temperature: ${Math.round(data.main.temp)}
        Max. Temperature: ${Math.round(data.main.temp_max)}°C
        Mix. Temperatur: ${Math.round(data.main.temp_min)}°C
        Realfeel: ${Math.round(data.main.feels_like)}°C
        Humidity: ${data.main.humidity}%
        `)

}

module.exports = { weather }

weather()