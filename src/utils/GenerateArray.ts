type Pages = string | number;

export function GenerateArray(count: number, number: number): Pages[] {
  const pages: Pages[] = [];
  const maxPages = 4;

  if (count <= 7) {
    for (let i = 2; i < count; i++) {
      pages.push(i);
    }
    return pages;
  }

  if (number <= maxPages) {
    for (let i = 2; i <= maxPages + 1; i++) {
      pages.push(i);
    }
    pages.push("...");
  } else if (number <= count - maxPages) {
    pages.push("...");
    for (let i = number - 1; i <= number + 1; i++) {
      pages.push(i);
    }
    pages.push("...");
  } else {
    pages.push("...");
    const startPage = count - maxPages;
    for (let i = startPage; i < count; i++) {
      pages.push(i);
    }
  }

  return pages;
}
