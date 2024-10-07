//Home
exports.HOME = '/';
//AUTH LOGIN & REGISTER
exports.LOGIN = '/auth/login';
exports.REGISTER = '/auth/register';

//NEW & SALES
exports.NEW_PRODUCT = '/product/newarrivals';
exports.SALES_PRODUCT = '/product/bestdeals';

//LIST & INFO
exports.PRODUCT_LIST = '/categories/:categorySlug/:subCategorySlug';
exports.PRODUCT_INFO =
  '/categories/:categorySlug/:subCategorySlug/:productSlug';

//LIST & INFO FOR NAVIGATION
exports.PRODUCT_LIST_NAV = (categorySlug, subCategorySlug) =>
  `/categories/${categorySlug}/${subCategorySlug}`;
exports.PRODUCT_INFO_NAV = (categorySlug, subCategorySlug, productSlug) =>
  `/categories/${categorySlug}/${subCategorySlug}/${productSlug}`;

//CART
exports.MY_CART = '/mycart';

//CHECKOUT
exports.CHECKOUT_DETAIL = '/checkout/details';
exports.CHECKOUT_SERVICES = '/checkout/services';
exports.CHECKOUT_PAYMENT = '/checkout/payment';

//PAYMENT
exports.PAYMENT_TRANSFER = '/checkout/banktransfer';

//STATUS
exports.ORDER_SUCCESS = (orderNumber) => `/order/success/${orderNumber}`;
exports.ORDER_DETAIL = (orderNumber) => `/order/detail/${orderNumber}`;
