export const addItemToPool = (poolItems, poolItemToAdd) => {
  const existingPoolItem = poolItems.find(
    (poolItem) => poolItem.name === poolItemToAdd.name
  );

  if (existingPoolItem) {
    return poolItems;
  }

  return [...poolItems, { ...poolItemToAdd }];
};
