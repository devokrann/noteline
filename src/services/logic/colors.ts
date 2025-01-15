import { generateRandomHexColor } from '@/utilities/generators/color';

export const getCategoryColor = (categoryName: string) => {
  return generateRandomHexColor({
    seed: categoryName,
    minBrightness: 0.15,
    maxBrightness: 0.75,
  });
};
