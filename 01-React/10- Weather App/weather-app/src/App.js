import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';
import './App.css';
import { getWeatherDataForCity } from './api';

function App() {
  const [city, setCity] = useState('London');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState(null);

  const loadWeather = useCallback(async (targetCity) => {
    setLoading(true);
    setError('');
    try {
      const result = await getWeatherDataForCity(targetCity || city);
      setData(result);
    } catch (e) {
      setError(e.message || 'Failed to load weather');
    } finally {
      setLoading(false);
    }
  }, [city]);

  useEffect(() => {
    loadWeather(city);
  }, [loadWeather, city]);

  const handleSearch = () => {
    if (!city || city.trim().length === 0) return;
    loadWeather(city.trim());
  };

  const handleRefresh = () => {
    if (!data?.location?.name) return;
    loadWeather(data.location.name);
  };

  const cardProps = useMemo(() => {
    if (!data) return null;
    const temperature = data?.weather?.current?.temperature_2m;
    const windSpeed = data?.weather?.current?.wind_speed_10m;
    const humidity = data?.weather?.current?.relative_humidity_2m;
    const locationLine = [
      data.location.name,
      data.location.admin1,
      data.location.country
    ].filter(Boolean).join(', ');
    return {
      temperature,
      windSpeed,
      humidity,
      locationLine
    };
  }, [data]);

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} />
      <Button value={loading ? 'Loading...' : 'Search'} onClick={handleSearch} />
      {error && <div style={{ color: 'red', margin: '10px' }}>{error}</div>}
      {cardProps && <Card {...cardProps} />}
      <Button value="Refresh" onClick={handleRefresh} />
    </div>
  );
}

export default App;