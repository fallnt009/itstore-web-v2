//Home
exports.HOME = '/';
//AUTH LOGIN & REGISTER
exports.LOGIN = '/auth/login';
exports.REGISTER = '/auth/register';

//NEW & SALES
exports.NEW_PRODUCT = '/products/newarrivals';
exports.SALES_PRODUCT = '/products/bestdeals';

//LIST & INFO
exports.PRODUCT_LIST = '/products/categories/:categorySlug/:subCategorySlug';
exports.PRODUCT_INFO =
  '/products/categories/:categorySlug/:subCategorySlug/:productSlug';

//LIST & INFO FOR NAVIGATION
exports.PRODUCT_LIST_NAV = (categorySlug, subCategorySlug) =>
  `/products/categories/${categorySlug}/${subCategorySlug}`;
exports.PRODUCT_INFO_NAV = (categorySlug, subCategorySlug, productSlug) =>
  `/products/categories/${categorySlug}/${subCategorySlug}/${productSlug}`;

//CART
exports.MY_CART = '/mycart';

//CHECKOUT
exports.CHECKOUT_DETAIL = '/checkout/details';
exports.CHECKOUT_SERVICES = '/checkout/services';
exports.CHECKOUT_PAYMENT = '/checkout/payment';

//STATUS
exports.ORDER_SUCCESS = (orderNumber) => `/order/success/${orderNumber}`;
exports.ORDER_DETAIL = (orderNumber) => `/order/detail/${orderNumber}`;
exports.ORDER_HISTORY = '/order/history';

//PROFILE
exports.MY_PROFILE = (userId) => `/profile/${userId}`;

//Wishlist
exports.MY_WISHLIST = '/mywishlist';

//help center
exports.HELP_CENTER = '/help-center';
exports.TRACKING_ORDER = '/tracking-order';
exports.PAYMENT_PROOF = '/payment-proof';

//Payment Transaction
exports.PAYMENT_SELECT = '/payment/select/';

//
exports.BANK_TRANSFER_PAYMENT = '/payment/btransfer';
exports.QR_PAYMENT = '/payment/qr';

//Payment Status
exports.PAYMENT_AWATING = '/payment/await/success';
