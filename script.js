async function getWeatherData() {
  const res = await fetch(
    `http://api.weatherstack.com/current?access_key=de1799218853d59e8cfa7413e2f4d0f1&query=New York`
  );
  const data = await res.json();
  console.log(data);
}
