const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://swapi.dev/api';

export async function fetchData(resource: string) {
  const response = await fetch(`${BASE_URL}/${resource}/`);
  const data = await response.json();
  return data.results;
}

export default fetchData;
