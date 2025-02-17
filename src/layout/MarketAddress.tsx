function MarketAddress() {
  return (
    <section className="px-7.5 mt-7.5 grid md:grid-rows-2 gap-y-7.5 md:gap-y-15 md:px-15 lg:grid-cols-2 lg:grid-rows-1 lg:gap-x-15 lg:min-h-96">
      <div className='py-15 px-7.5 cursor-pointer lg:flex lg:items-center animate-borders'>
        <h3 className='font-ogg text-[40px] text-center md:text-6xl'>256 Canal St. New York, NY</h3>
      </div>
      <div className='bg-[url(./assets/img/74921c6bf0abf767666c52a6af3c001c58643587_group-11.jpg)] bg-center bg-no-repeat hidden md:block z-1'>
        <div className="w-full h-full cursor-pointer animate-borders"></div>
      </div>
    </section>
  );
}

export default MarketAddress;