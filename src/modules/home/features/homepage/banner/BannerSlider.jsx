import BannerSlide from '../../../components/BannerSlide';

export default function BannerSlider() {
  const imageUrl = [
    [
      'https://www.asus.com/events/eventES/eventspic/1589_1900.jpg',
      'https://www.asus.com/events/eventES/eventspic/1679_1900.jpg',
      'https://dlcdnwebimgs.asus.com/gain/BC348486-48C5-496A-912F-A5B38BF12B66/fwebp',
    ],
    [
      'https://i0.wp.com/pczone.ie/wp-content/uploads/2021/08/Intel-11th-Gen-Banner.jpg?resize=980%2C380&ssl=1',
      'https://www.gigabyte.com/FileUpload/Global/KeyFeature/1527/innergigabyteimages/banner.jpg',
      'https://www.stormforcegaming.co.uk/wp-content/uploads/2022/09/221478800-C_2022_Ryzen7000Launch-SocialBanners_1024x512.jpg',
    ],
  ];

  return (
    <div className="my-10 ">
      <BannerSlide imgUrl={imageUrl} />
    </div>
  );
}
