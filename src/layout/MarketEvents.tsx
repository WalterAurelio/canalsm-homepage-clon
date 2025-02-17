import Decor from "../components/Decor"

function MarketEvents() {
  return (
    <section className="p-7.5 md:relative">
      <div className="my-15 lg:grid lg:grid-cols-3">
        <p className="block text-center text-6xl lg:my-auto">活動</p>
        <h2 className="font-ogg text-6xl text-center my-16 leading-16 md:text-[100px] md:leading-24 lg:m-0">Market Events</h2>
        <p className="block text-center text-6xl lg:my-auto">活動</p>
      </div>

      <div className="font-apercu-mono text-center px-7.5 mb-16">
        <Decor isAnimated />
        <div className="md:grid md:grid-cols-3">
          <div className="py-15 px-5">
            <p className="mb-4 text-xs">09/21</p>
            <p>Small Business Retail Pop Up Weekend!</p>
          </div>
          <div className="md:hidden"><Decor /></div>
          <div className="py-15 px-5">
            <p className="mb-4 text-xs">02/07</p>
            <p>New Balance x Paperboy Paris by Greenhouse @ Canal Street Market</p>
          </div>
          <div className="md:hidden"><Decor /></div>
          <div className="py-15 px-5">
            <p className="mb-4 text-xs">12/11</p>
            <p>Hack City 12/11</p>
          </div>
        </div>
        <Decor isAnimated reversed />
      </div>

      <div className="md:w-full md:flex md:justify-center">
        <button type="button" className="font-apercu-mono lowercase border-1 w-full py-5 hover:bg-black hover:text-white cursor-pointer transition-all md:w-45 md:absolute md:bottom-17 bg-white">
          See all
        </button>
      </div>
    </section>
  )
}
export default MarketEvents