export default function BannerSlider() {
  const imageUrl = [
    {
      url: 'https://www.asus.com/events/eventES/eventspic/1589_1900.jpg',
    },
    {
      url: 'https://www.asus.com/events/eventES/eventspic/1679_1900.jpg',
    },
    {
      url: 'https://dlcdnwebimgs.asus.com/gain/BC348486-48C5-496A-912F-A5B38BF12B66/fwebp',
    },
    {
      url: 'https://i0.wp.com/pczone.ie/wp-content/uploads/2021/08/Intel-11th-Gen-Banner.jpg?resize=980%2C380&ssl=1',
    },
    {
      url: 'https://www.gigabyte.com/FileUpload/Global/KeyFeature/1527/innergigabyteimages/banner.jpg',
    },
    {
      url: 'https://www.stormforcegaming.co.uk/wp-content/uploads/2022/09/221478800-C_2022_Ryzen7000Launch-SocialBanners_1024x512.jpg',
    },
  ];

  //show 2 if sm respnsive (limit,pageCal,translate)

  return (
    <div className="pb-10 pt-10 relative w-full">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          // style={{
          //   transform:
          //     page === currentPage ? `translateX(-100%)` : `translateX(0%)`,
          // }}
        >
          <div className="flex">
            {imageUrl.map((item, index) => (
              <div className="p-4 flex-shrink-0" key={index}>
                <img
                  className="border rounded-md object-fill sm:h-[320px] sm:w-[400px] lg:w-[450px] lg:h-[200px]"
                  alt={`adsimg ${index}`}
                  src={item.url}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-2 gap-2">
        {/* {Array.from({length: page}, (_, index) => ( */}
        {/* <div
        key={index}
        // onClick={() => goToPage(index + 1)}
        className={`lg:p-1 p-2 rounded-full hover:bg-gray-400 cursor-pointer ${
          currentPage === index + 1 ? 'bg-gray-700 ' : 'bg-gray-400 '
        }`}
      ></div> */}
        <div
          // onClick={() => goToPage(index + 1)}
          className={`lg:p-1 p-2 rounded-full hover:bg-gray-400 cursor-pointer bg-gray-700`}
        ></div>
        {/* ))} */}
      </div>
    </div>
  );
}
