export const getProducts: (product: any) => Promise<any> = async product => {
  const res = await fetch(`/api/products/${product}`);
  return res.json();
};
