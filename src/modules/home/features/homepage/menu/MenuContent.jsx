import Carousel from '../../../../shared/components/ui/Carousel';

// import MenuContentItem from './MenuContentItem';

// import gpu from '../../../../../assets/images/menu/gpu.png';
// import psu from '../../../../../assets/images/menu/psu.png';
// import storage from '../../../../../assets/images/menu/nvmd.png';
// import glaptop from '../../../../../assets/images/menu/gamelaptop.png';
// import cpu from '../../../../../assets/images/menu/cpu.png';
// import caseA from '../../../../../assets/images/menu/case.png';

export default function MenuContent() {
  const imgUrl = [
    'https://dlcdnwebimgs.asus.com/gain/60C2EC39-0310-4C66-84EA-E910F9686B6A/fwebp',
    'https://files.pccasegear.com/UserFiles/amd-rtg-q4-22-1265.jpg',
    'https://pbs.twimg.com/media/E3CnZYdVcAElyps.jpg',
    'https://9meters.com/nitropack_static/eKbrFKoVYkaMxmikCJhDVCrzNwUDlcnj/assets/images/optimized/rev-392e0e3/9meters.com/wp-content/uploads/image-6-20241027-062303.png',
  ];
  return (
    <div className="grid xl:grid-cols-[2fr_1fr] gap-4">
      <div className="block">
        <Carousel imgUrl={imgUrl} />
      </div>
      <div className="block bg-slate-100 rounded-xl py-10"></div>
    </div>
  );
}
