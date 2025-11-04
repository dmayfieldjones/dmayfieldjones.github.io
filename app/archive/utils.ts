// Define categories based on actual article content
export const getArticleCategory = (id: string, title: string) => {
  // HAB.education related categories
  if (id.includes('balloon') || id.includes('hab') || id.includes('HAB')) {
    return 'HAB.education'
  }
  
  // Fallback for any future articles
  return 'General'
}

// Reading time based on actual word counts (225 words per minute)
export const getReadingTime = (id: string) => {
  const readingTimes: { [key: string]: string } = {
    '2024-01-15-introduction-to-high-altitude-balloon-education': '10 min read',
    '2024-02-20-data-collection-and-analysis-in-balloon-experiments': '15 min read',
    '2024-03-10-building-your-first-balloon-payload': '20 min read'
  }
  return readingTimes[id] || '5 min read'
}

