import Image from "next/image";
import { mainFetch } from "@/app/lib/mainFetch";

const ProductDetails = async ({ params }) => {
  const { slug } = await params;
  console.log(slug);

  const data = await mainFetch(slug);
  if (!data || data.id === undefined) {
    return <h2>404 - Product with {slug} doesn't exist</h2>
  }

  return (
    <>
      <div>
        <div>
          {data.images.map((image) => (
            <Image
              className="rounded mb-3 shadow-lg"
              key={image}
              src={image}
              alt={data.title}
              width={325}
              height={325}/>
          ))}
        </div>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <p>Price - {data.price}</p>
      </div>
    </>
  );
}

export default ProductDetails;