const baseURL = 'https://statsapi.mlb.com/api/v1/';


// example: /schedule?sportId=1&startDate=07/01/2018&endDate=07/01/2018

export const getGames = async (date) => {
  const params = `?sportId=1&startDate=${date}&endDate=${date}`
  const res = await fetch(`${baseURL}schedule` + params)
  if (!res.ok) {
    throw new Error('Invalid.');
  }
  const games = await res.json();
  return games.dates[0].games;
}
