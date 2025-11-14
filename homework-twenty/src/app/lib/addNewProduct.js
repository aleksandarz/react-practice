
export const addNewProduct = (title, description, price) => {
    fetch(`${process.env.NEXT_PUBLIC_PRODUCT_API_URL}/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: title,
      description: description,
      price: price,
    })
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
}