import ImageSlider from '../../../components/ImageSlider';

import AddToCartButton from '../../../components/button/AddToCartButton';
import WishlistButton from '../../../components/button/WishlistButton';
import ProductInfoBreadCrumb from './breadcrumb/ProductInfoBreadCrumb';

import ProductInfoPrice from './price/ProductInfoPrice';
import SpecContent from './spec/SpecContent';

export default function ProductInfoContent({ProductInfo}) {
  const {images, product, specTitle, specText} = ProductInfo;

  const {
    id,
    title,
    price,
    qtyInStock,
    description,
    ProductSubCategory,
    ProductDiscount,
  } = product;

  const brandName =
    ProductSubCategory?.BrandCategorySub?.BrandCategory?.Brand?.title || '';

  return (
    <div className="py-5 px-5 rounded-lg shadow-xl">
      <div className="py-2 ">
        <ProductInfoBreadCrumb
          data={ProductSubCategory?.BrandCategorySub}
          productName={title}
        />
      </div>
      <div className="grid lg:grid-cols-2 my-5 ">
        <div className="block pb-5">
          <ImageSlider images={images} />
        </div>
        {/* Title */}
        <div className="block mx-5 items-center text-gray-800">
          <div>
            <p className=" text-lg">{brandName}</p>
            <h1 className="text-2xl font-bold ">{title}</h1>
            {/* Brand */}
          </div>
          {/* Price */}
          <div className="my-2">
            <ProductInfoPrice discount={ProductDiscount} price={price} />
          </div>
          {/*Description box*/}
          <p className="pb-5">{description}</p>

          <div className="flex gap-5 py-2">
            <WishlistButton productId={id} title={title} />
            <AddToCartButton
              productId={id}
              inStock={qtyInStock}
              title={title}
            />
          </div>
        </div>
      </div>
      <div>
        <SpecContent title={specTitle} text={specText} />
      </div>
    </div>
  );
}
