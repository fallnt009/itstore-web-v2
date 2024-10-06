//Home
exports.HOME = '/';
//AUTH LOGIN & REGISTER
exports.AUTH = '/auth';
exports.LOGIN = 'login';
exports.REGISTER = 'register';

//NEW & SALES
exports.NEW_PRODUCT = '/product/newarrivals';
exports.SALES_PRODUCT = '/product/bestdeals';

//LIST & INFO
exports.PRODUCT_LIST = '/categories/:categorySlug/:subCategorySlug';
exports.PRODUCT_INFO =
  '/categories/:categorySlug/:subCategorySlug/:productSlug';

//CART
exports.MY_CART = '/mycart';

//CHECKOUT
exports.CHECKOUT_MAIN = '/checkout';
exports.CHECKOUT_DETAILS = 'details';
exports.CHECKOUT_SERVICES = 'services';
exports.CHECKOUT_PAYMENT = 'payment';
//Payment Portal
exports.CHECKOUT_TRANSFER = 'banktransfer';

//status
exports.ORDER_SUCCESS = '/order/success/:orderNumber';
exports.ORDER_DETAIL = '/order/detail/:orderNumber';
