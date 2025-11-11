const GEOCODE_URL = 'https://geocoding-api.open-meteo.com/v1/search';
const WEATHER_URL = 'https://api.open-meteo.com/v1/forecast';

export async function geocodeCity(city) {
    const url = `${GEOCODE_URL}?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to geocode city');
    }
    const data = await response.json();
    if (!data || !data.results || data.results.length === 0) {
        throw new Error('City not found');
    }
    const { latitude, longitude, name, country, admin1 } = data.results[0];
    return { latitude, longitude, name, country, admin1 };
}

export async function getCurrentWeather(latitude, longitude) {
    const url = `${WEATHER_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,relative_humidity_2m,weather_code&timezone=auto`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch weather');
    }
    const data = await response.json();
    return data;
}

export async function getWeatherDataForCity(city) {
    const geo = await geocodeCity(city);
    const weather = await getCurrentWeather(geo.latitude, geo.longitude);
    return { location: geo, weather };
}