type Pages = string | number;

export function GenerateArray(count: number, currentPage: number): Pages[] {
  const pages: Pages[] = [];
  const maxPages = 4;

  if (count <= 7) {
    return Array.from({ length: count - 2 }, (_, i) => i + 2);
  }

  if (currentPage <= maxPages) {
    pages.push(...Array.from({ length: maxPages }, (_, i) => i + 2));
    pages.push("...");
  } else if (currentPage <= count - maxPages) {
    pages.push("...");
    pages.push(...Array.from({ length: 3 }, (_, i) => currentPage - 1 + i));
    pages.push("...");
  } else {
    pages.push("...");
    pages.push(
      ...Array.from({ length: maxPages }, (_, i) => count - maxPages + i)
    );
  }

  return pages;
}
