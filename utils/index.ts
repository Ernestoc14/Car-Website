export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': '620e7b4c35msh85deae73d14589cp1e3be7jsnc7196bcee00c',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
    headers: headers,
  });

  const result = await response.json();
  return result;
}