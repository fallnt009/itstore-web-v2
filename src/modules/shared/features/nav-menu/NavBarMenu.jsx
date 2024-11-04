import NavBarMenuList from './menu/NavBarMenuList';
import NavBarMenuContent from './contents/NavBarMenuContent';

export default function NavBarMenu() {
  return (
    <div className="px-10">
      <div className="flex gap-5 py-4">
        <NavBarMenuList />
      </div>
      <div>
        <NavBarMenuContent />
      </div>
    </div>
  );
}
