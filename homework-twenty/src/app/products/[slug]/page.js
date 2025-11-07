import Image from "next/image";

const ProductDetails = async ({ params }) => {
  const { slug } = await params;
  console.log(slug);

  const response = await fetch(`https://dummyjson.com/products/${slug}`);
  const data = await response.json();
  console.log(data);

  return (
    <>
      <div className="flex flex-col gap-3 m-5">
        <div className="flex flex-row gap-2">
          {data.images.map((image) => (
            <Image
              className="rounded mb-3 shadow-lg"
              key={image}
              src={image}
              alt={data.title}
              width={325}
              height={325} />
          ))}
        </div>
        <h2 className="text-3xl">{data.title}</h2>
        <p>{data.description}</p>
        <p className="font-bold">Price - {data.price}</p>
      </div>
    </>
  );
}

export default ProductDetails;