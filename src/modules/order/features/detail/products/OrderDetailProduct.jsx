import Image from '../../../components/Image';

export default function OrderDetailProduct({item}) {
  const {Product, qty, price} = item || {};

  const productImage = Product?.productImage;
  const productName = Product?.title;
  const productDesc = Product?.description;
  return (
    <div className="grid items-start grid-cols-[1fr_4fr] p-5 ">
      {/* product img */}
      <div className="grid w-full">
        <Image src={productImage} size="100px" />
      </div>
      <div className="grid">
        {/* product detail */}
        <div className="flex justify-between text-md text-stone-700">
          <div className="flex font-bold gap-5 justify-start ">
            {productName}
          </div>
          <div className="font-bold">{price} THB</div>
        </div>
        <div className="flex justify-between text-sm text-stone-500 ">
          <p>{productDesc}</p>
          <div className="">qty:{qty}</div>
        </div>
        <div className="flex gap-8 mt-5 items-center text-stone-500"></div>
      </div>
    </div>
  );
}
