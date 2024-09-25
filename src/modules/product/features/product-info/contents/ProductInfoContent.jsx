import {NumericFormat} from 'react-number-format';

import BreadCrumb from '../../../components/BreadCrumb';
import ImageSlider from '../../../components/ImageSlider';
import StockStatus from '../../../components/StockStatus';

import SpecContent from './spec/SpecContent';

export default function ProductInfoContent({ProductInfo}) {
  const {images, product, specTitle, specText} = ProductInfo;

  const {title, price, qtyInStock, ProductSubCategory} = product;
  const brandName =
    ProductSubCategory?.BrandCategorySub?.BrandCategory?.Brand?.title || '';

  return (
    <div className="py-5 px-20  rounded-lg shadow-xl">
      <div className="py-2 ">
        <BreadCrumb />
      </div>
      <div className="grid grid-cols-[2fr_3fr] items-center py-5 ">
        <div className="grid max-h-60vh ">
          <ImageSlider images={images} />
        </div>
        {/* Title */}
        <div className="grid px-20 items-center text-gray-600">
          <div>
            <h1 className="text-4xl font-semibold ">{title}</h1>
            {/* Brand */}
            <p className=" text-lg py-2 ">{brandName}</p>
          </div>
          {/* Price */}
          <div className="py-5 text-2xl  font-semibold ">
            <h1>
              <NumericFormat
                value={price}
                displayType="text"
                thousandSeparator=","
                suffix=" THB"
              />
            </h1>
          </div>
          {/*Description box*/}
          <div>{/* <ProductDescription description={description} /> */}</div>
          <div className="mt-5 py-4">
            <StockStatus qtyInStock={qtyInStock} />
          </div>

          <div className="py-2">
            {qtyInStock === 0 ? (
              <button
                type="button"
                className="p-2 px-4 border rounded-lg font-semibold text-white bg-gray-400 border-gray-400"
              >
                Add to Cart
              </button>
            ) : (
              <button
                type="button"
                // onClick={() => addCartItem(id)}
                className="p-2 px-4 border rounded-lg font-semibold text-white bg-indigo-600 hover:text-indigo-600 hover:bg-white border-indigo-600"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
      <div>
        <SpecContent title={specTitle} text={specText} />
      </div>
    </div>
  );
}
