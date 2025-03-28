export const selectProductModuleState = (state) => state.product;

export const selectProductById = (state, productId) =>
  selectProductModuleState(state).entities[productId];

export const selectProductNameById = (state, productId) =>
  selectProductModuleState(state).entities[productId]?.name;

export const selectProductPriceById = (state, productId) => 
  selectProductModuleState(state).entities[productId]?.price;

export const selectProductIngredientsById = (state, productId) =>
  selectProductModuleState(state).entities[productId]?.ingredients;

export const selectProductIds = (state) => selectProductModuleState(state).ids;

export const selectIsProductsLoading = (state) =>
  selectProductModuleState(state).isLoading;
