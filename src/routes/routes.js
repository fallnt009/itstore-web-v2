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
exports.PAYMENT_SELECT = '/payment/select';
//
exports.BANK_TRANSFER_PAYMENT = '/payment/btransfer';
exports.QR_PAYMENT = '/payment/qr';

//Payment Status
exports.PAYMENT_AWATING = '/payment/await/success';

//admin dashboard
exports.ADMIN_MAIN = '/admin';
exports.ADMIN_DASHBOARD = 'dashboard';
exports.ADMIN_PRODUCT = 'product';
exports.ADMIN_PRODUCT_CREATE = 'product/create';
exports.ADMIN_PRODUCT_EDIT = 'product/edit/:productId';
exports.ADMIN_ORDER = 'order';

exports.ADMIN_CATEGORY = 'category';
