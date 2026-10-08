export const pageImages = [
  {
    "src": "/images/library/power-spray-1.webp",
    "alt": "Water jet nozzle spraying inside a drain pipe"
  },
  {
    "src": "/images/library/pipe-blueprint-4.webp",
    "alt": "Rotating water jets cleaning the inside wall of a pipe"
  },
  {
    "src": "/images/library/sonic-blast-8.webp",
    "alt": "Illustration of a jet nozzle clearing buildup from a drain line"
  },
  {
    "src": "/images/library/root-macro-action-37.webp",
    "alt": "Water jets working through tree roots inside a sewer pipe"
  },
  {
    "src": "/images/library/recurring-clogs-clean-sweep-41.webp",
    "alt": "Jetting hose and nozzle inside a clean drain pipe"
  }
];
export function pageImage(key: string) {
  let hash = 0;
  for (const char of key) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return pageImages[hash % pageImages.length];
}

