function hexToRgb(hex: string) {
  const cleanHex = hex.startsWith("#") ? hex.slice(1) : hex;
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}
export const applyOpacity = (colorHex: string, opacity: number) => {
  const rgb = hexToRgb(colorHex);
  const alpha = opacity / 100;
  return `rgba(${rgb}, ${alpha})`;
};
