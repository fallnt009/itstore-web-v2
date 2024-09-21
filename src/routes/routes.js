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
