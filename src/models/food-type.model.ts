export enum FoodType {
  VEGETARIAN = 'Veg',
  NON_VEGETARIAN = 'Non-Veg',
  VEGAN = 'Vegan',
  PESCATARIAN = 'Pescatarian',
  GLUTEN_FREE = 'Gluten-Free',
  HALAL = 'Halal',
  KOSHER = 'Kosher',
  PALEO = 'Paleo',
  LOW_CARB = 'Low-Carb',
  DIABETIC = 'Diabetic',
}

// Utility function to retrieve the display name for a given FoodType
export const getFoodTypeDisplayName = (foodType: FoodType): string => {
  return foodType;
};
