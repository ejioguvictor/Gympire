export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': "56ad7bb733msh58af4557274a081p1e43eajsncf1a309c7f0c",
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': "56ad7bb733msh58af4557274a081p1e43eajsncf1a309c7f0c",
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);

  const data = await response.json()

  return data;
}
