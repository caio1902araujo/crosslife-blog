export const API_URL  = process.env.REACT_APP_BASE_URL;

export function MOST_ACCESSED_NEWS_GET(){
  return {
    url: `${API_URL}/news/access-counter`,
    options: {
      method: 'GET',
      cache: 'no-store'
    }
  }
}

export function ALL_NEWS_GET(query){
  const queryString = Object.keys(query).map(key => key + '=' + query[key]).join('&');

  return {
    url: `${API_URL}/news?${queryString}`,
    options: {
      method: 'GET',
      cache: 'no-store'
    }
  }
}

export function RELATED_NEWS_GET(category){
  return {
    url: `${API_URL}/news?category=${category}&limit=4`,
    options: {
      method: 'GET',
      cache: 'no-store'
    }
  }
}

export function NEWS_GET(title){
  return {
    url: `${API_URL}/news/${title}`,
    options: {
      method: 'GET',
      cache: 'no-store'
    }
  }
}

export function AUTHOR_GET(username){
  return {
    url: `${API_URL}/presentation/author/${username}`,
    options: {
      method: 'GET',
      cache: 'no-store'
    }
  }
}