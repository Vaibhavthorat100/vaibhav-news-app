const API_KEY = 'your_newsapi_key_here'; // 🔁 Replace this

export async function fetchNews(category: string) {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?category=${category}&language=en&pageSize=5&apiKey=${API_KEY}`
  );
  const data = await response.json();
  return data.articles;
}

export async function fetchNewsByKeyword(keyword: string) {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${keyword}&language=en&pageSize=5&apiKey=${API_KEY}`
  );
  const data = await response.json();
  return data.articles;
}
