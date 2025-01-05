type Pages = string | number;

export function GenerateArray(count: number, currentPage: number): Pages[] {
  const pages: Pages[] = [];
  const maxPages = 4;

  if (count <= 7) {
    for (let i = 2; i < count; i++) {
      pages.push(i);
    }
  } else {
    if (currentPage <= maxPages) {
      for (let i = 2; i <= maxPages + 1; i++) {
        pages.push(i);
      }
    } else if (currentPage <= count - maxPages) {
      pages.push("...");
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pages.push(i);
      }
    } else {
      const startPage = count - maxPages;
      for (let i = startPage; i < count; i++) {
        pages.push(i);
      }
    }
    pages.push("...");
  }

  return pages;
}
