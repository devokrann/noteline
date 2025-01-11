export const getRandomColor = () => {
  // Generate a random integer between 0 and 255 for each color component (R, G, B)
  const randomValue = () => Math.floor(Math.random() * 256);

  // Convert each value to a two-digit hex string
  const toHex = (value: number) => value.toString(16).padStart(2, '0');

  const red = randomValue();
  const green = randomValue();
  const blue = randomValue();

  // Concatenate the hex strings for R, G, and B, prefixed with #
  return `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
};
