export function axialToPixel(q, r, size) {
    const x = size * 3/2 * q;
    const y = size * Math.sqrt(3) * (r + q / 2);
    return { x, y };
  }
  
export function pixelToAxial(x, y, size) {
    const q = (2/3 * x) / size;
    const r = (-x / 3 + Math.sqrt(3) / 3 * y) / size;
    return { q: Math.round(q), r: Math.round(r) };
  }
  