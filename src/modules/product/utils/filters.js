export default function filters(subCategorySlug) {
  let titles = [];

  switch (subCategorySlug) {
    case 'cpu':
      titles = ['Brand', 'Series', 'Socket'];
      break;
    case 'mainboard':
      titles = ['Brand', 'Chipset', 'Socket'];
      break;
    default:
      return titles;
  }
  return titles;
}
