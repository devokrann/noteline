export const estimateReadTime = (
  text: string
): { words: number; time: number } => {
  // Remove extra whitespace and split into words
  const cleanText = text.trim();
  const words = cleanText.split(/\s+/).filter((word) => word.length > 0);
  const wordCount = words.length;
  const charCount = cleanText.length;

  // Average reading speed metrics
  const wordsPerMinute = 225;
  // Average reading speed in characters per minute
  const charsPerMinute = 1000;

  // Calculate reading time based on both words and characters
  const wordBasedTime = wordCount / wordsPerMinute;
  const charBasedTime = charCount / charsPerMinute;

  // Use the higher of the two estimates for a more conservative reading time
  const readTimeMinutes = Math.max(wordBasedTime, charBasedTime);

  // Round up to nearest 0.5 minutes
  const roundedTime = Math.ceil(readTimeMinutes * 2) / 2;

  // Return at least 1 minute for very short texts
  return {
    words: wordCount,
    time: Math.max(1, roundedTime),
  };
};
