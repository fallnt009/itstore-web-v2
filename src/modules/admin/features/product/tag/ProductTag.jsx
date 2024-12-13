import ProductFormSelect from '../form/select/ProductFormSelect';
import ProductFormTable from '../form/table/ProductFormTable';
import ParginationIndicator from '../../../../shared/components/ui/ParginationIndicator';

export default function ProductTag({
  tag,
  page,
  error,
  bcsId,
  onSelectBrand,
  onChangePage,
  onSelectTag,
  tagError,
  brandError,
}) {
  const {items, brandItems, totalPages} = tag;

  const tagFilter = items?.filter((item) => item.id === bcsId)[0];

  const brandName = tagFilter?.BrandCategory?.Brand?.title || '';
  const subCategoryName = tagFilter?.SubCategory?.title || '';

  return (
    <section className="flex flex-col gap-2 py-5">
      <section className="flex items-center justify-between gap-2">
        <ProductFormSelect
          brands={brandItems}
          onChange={onSelectBrand}
          brandError={brandError}
        />
      </section>
      <header className="flex justify-between py-2">
        <h1 className="font-semibold">Select Tag</h1>
        {bcsId && (
          <p className="flex gap-5 font-semibold px-5 text-indigo-700">
            #{brandName} & {subCategoryName}
          </p>
        )}
      </header>
      {tagError ? (
        <div className="flex justify-center rounded-xl bg-slate-50 py-10">
          Someting Went Wrong!
        </div>
      ) : (
        <>
          <section
            className={`border rounded-xl bg-slate-100 overflow-auto ${
              error.bcsError ? 'border-red-500' : ''
            }`}
          >
            <ProductFormTable
              items={items}
              bcsId={bcsId}
              onSelectTag={onSelectTag}
            />
          </section>

          {error.bcsError && <p className="text-red-500">* {error.bcsError}</p>}
          <section className="flex justify-end">
            <ParginationIndicator
              page={page}
              totalPages={totalPages}
              handleChange={onChangePage}
            />
          </section>
        </>
      )}
    </section>
  );
}
