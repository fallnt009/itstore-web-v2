import NavBarMenuList from './menu/NavBarMenuList';
import NavBarCategoryContent from './contents/category/NavBarCategoryContent';

export default function NavBarMenu() {
  return (
    <>
      <div className="flex justify-start gap-5">
        <NavBarMenuList />
      </div>
      <div className="mt-3">
        <NavBarCategoryContent />
      </div>
    </>
  );
}
