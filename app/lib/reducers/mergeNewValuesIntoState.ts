export function mergeNewValuesIntoState<T>(
  state: Partial<T>,
  newValues: Partial<T>,
) {
  return {
    ...state,
    ...newValues,
  };
}
