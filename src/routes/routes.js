//Home
exports.HOME = '/';
//AUTH LOGIN & REGISTER
exports.AUTH = '/auth';
exports.LOGIN = 'login';
exports.REGISTER = 'register';

//NEW & SALES
exports.NEW_PRODUCT = '/products/newarrivals';
exports.SALES_PRODUCT = '/products/bestdeals';

//LIST & INFO
exports.PRODUCT_LIST = '/products/categories/:categorySlug/:subCategorySlug';
exports.PRODUCT_INFO =
  '/products/categories/:categorySlug/:subCategorySlug/:productSlug';

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
exports.ORDER_HISTORY = '/order/history';

//PROFILE
exports.MY_PROFILE = '/profile/:userId';

//Wishlist
exports.MY_WISHLIST = '/mywishlist';
//Help Center
exports.HELP_CENTER = '/help-center';

exports.TRACKING_ORDER = '/tracking-order';
exports.PAYMENT_PROOF = '/payment-proof';

//Payment Transaction
//
exports.BANK_TRANSFER_PAYMENT = '/payment/btransfer';
exports.QR_PAYMENT = '/payment/qr';
