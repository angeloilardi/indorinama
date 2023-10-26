

const servicesIcons = [
  {
    icon: "/images/radio-minimalistic-svgrepo-com-1.svg",
    text: "Radio",
  },
  {
    icon: "/images/cinema-clapboard-svgrepo-com-1.svg",
    text: "Cinema",
  },
  {
    icon: "/images/digital-content-content-read-look-at-pictures-svgrepo-com-1.svg",
    text: "Digital",
  },
  {
    icon: "/images/influence 1.png",
    text: "Influencer",
  },
  {
    icon: "/images/flight-plane-svgrepo-com-1.svg",
    text: "Airport",
  },
  {
    icon: "/images/television-technology-entertainment-svgrepo-com-1.svg",
    text: "Television",
  },
  {
    icon: "/images/car-svgrepo-com-1.svg",
    text: "BTL",
  },
  {
    icon: "/images/news-paper-svgrepo-com-1.svg",
    text: "News paper",
  },
  {
    icon: "/images/billboard-1.png",
    text: "Outdoor",
  },
  {
    icon: "/images/wheel-svgrepo-com-1.svg",
    text: "Transit",
  },
  {
    icon: "/images/magazine-svgrepo-com-1.svg",
    text: "Magazine",
  },
];

const partnerIcons = [
  {
    icon: "/images/user-check-rounded-svgrepo-com-4.svg",
    text: "Happy Clients",
  },
  {
    icon: "/images/team-3-svgrepo-com-4.svg",
    text: "Qualified Team Members",
  },
  {
    icon: "/images/media-svgrepo-com-4.svg",
    text: "Media Options",
  },
  {
    icon: "/images/team-member-svgrepo-com-4.svg",
    text: "Vendor tie-ups",
  },
  {
    icon: "/images/marketing-mail-svgrepo-com-4.svg",
    text: "Compaigns",
  },
  {
    icon: "/images/chart-bar-vertical-svgrepo-com-4.svg",
    text: "Varticals",
  },
];

export default function Home() {
  return (
    <main className="max-w-[1440px]mx-auto bg-neutral-100">
      {/* Header */}
      <header>
        <nav className="flex max-w-[1240px] h-[80px] items-center justify-around border-b border-stone-950 border-opacity-10 mx-auto">
          <div>
            <h1 className="text-stone-950 text-[28px] font-semibold font-poppins inline-block">
              INDORINAMA
            </h1>
            <h2 className="text-stone-950 text-[9px] font-medium font-poppins tracking-tight">
              ADVERTISING & DIGITAL MARKETING
            </h2>
          </div>
          <div className="max-w-[407px]">
            <label
              htmlFor="price"
              className="block text-sm font-medium leading-6 text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2">
                <img src="/images/search-svgrepo-com-3.svg" alt="" />
              </div>
              <input
                type="text"
                name="price"
                id="price"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Search"
              />
              <div className="absolute inset-y-0 right-[10px] flex items-center">
                <button>
                  <img src="/images/location-svgrepo-com-2.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <p className="text-stone-950 font-poppins">INR(Rs)</p>
            <button className="w-10 h-10 bg-stone-950 rounded-full border border-stone-950">
              <img
                src="/images/cart-large-svgrepo-com-1.svg"
                alt=""
                className="mx-auto"
              />
            </button>
            <button className="w-[106px] h-10 bg-stone-950 rounded-md border border-stone-950 border-opacity-10">
              <p className="text-white text-base font-normal font-poppins">
                Log In
              </p>
            </button>
          </div>
        </nav>
      </header>

      {/* Cities */}
      <div className="w-[1013px] h-[139px] bg-white rounded-[20px] border border-stone-950 border-opacity-20 flex items-center mx-auto text-stone-950  justify-evenly">
        <div className="w-[108px] h-28 bg-white rounded flex flex-col gap-1">
          <img
            src="/images/gate-of-india-1.png"
            alt=""
            className="w-[71px] h-[71px]"
          />
          <p>Mumbai</p>
        </div>
        <div className="w-[108px] h-28 bg-white rounded flex flex-col gap-1">
          <div className="w-[71px] h-[71px] bg-sky-100 rounded-full flex justify-center items-center">
            <img src="/images/india-gate 1.png" alt="" className="" />
          </div>

          <p>Delhi-NCR</p>
        </div>
        <div className="w-[108px] h-28 bg-white rounded flex flex-col gap-1">
          <div className="w-[71px] h-[71px] bg-sky-100 rounded-full flex justify-center items-center">
            <img
              src="/images/f84490933229af9aec3c0d1b8fb86f18-removebg-preview 1.png"
              alt=""
              className=""
            />
          </div>

          <p>Bengaluru</p>
        </div>
        <div className="w-[108px] h-28 bg-white rounded flex flex-col gap-1">
          <div className="w-[71px] h-[71px] flex justify-center items-center">
            <img
              src="/images/india-gate-svgrepo-com-3.svg"
              alt=""
              className=""
            />
          </div>

          <p>Hyderabad</p>
        </div>
        <div className="w-[108px] h-28 bg-white rounded flex flex-col gap-1">
          <div className="w-[71px] h-[71px] flex justify-center items-center">
            <img
              src="/images/india-gate-svgrepo-com-3.svg"
              alt=""
              className=""
            />
          </div>

          <p>Chandigarh</p>
        </div>
        <div className="w-[108px] h-28 bg-white rounded flex flex-col gap-1">
          <div className="w-[71px] h-[71px] flex justify-center items-center">
            <img
              src="/images/india-gate-svgrepo-com-3.svg"
              alt=""
              className=""
            />
          </div>

          <p>Chennai</p>
        </div>
        <div className=" ">
          <div className="w-[108px] h-28 bg-stone-950 rounded justify-around flex flex-col items-center py-2">
            <p className="text-center text-white font-medium">
              View All Cities
            </p>
            <div className="w-[45px] h-[45px] bg-white rounded-full shadow relative">
              <img
                src="/images/Arrow - Left.svg"
                alt=""
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sell Old Phone */}
      <div className="max-w-[1240px] bg-rose-700 rounded-[20px] flex font-poppins px-[89px] justify-between mx-auto relative">
        <img
          src="/images/back-arrow.svg"
          alt=""
          className="absolute -left-7 top-1/2"
        />
        <div className="flex flex-col justify-center w-[446px]">
          <h3 className=" text-white text-[52px] font-semibold mb-3">
            Sell Old Phone
          </h3>
          <p className=" text-white text-xl font-medium mb-[61px]">
            From Your Doorstep or at any of our 200 stores Pan India
          </p>
          <button className="w-[187px] h-[54px] bg-white rounded-lg flex items-center justify-center gap-2.5">
            <p className="text-center text-stone-950 text-base font-medium">
              Sell Now
            </p>
            <img src="/images/back-button.svg" alt="" />
          </button>
        </div>

        <div className="flex gap-3.5 self-end mb-6">
          <img src="/images/ellipse-22.svg" alt="" />
          {/* <div className="w-[19px] h-[19px] rounded-full border border-white">
            <img src="/images/ellipse-26.svg" alt="" />
          </div> */}
          <img src="/images/ellipse-22.svg" alt="" />
          <img src="/images/ellipse-22.svg" alt="" />
          <img src="/images/ellipse-22.svg" alt="" />
        </div>
        <img src="/images/image 14.png" alt="" className="pt-8" />
        <img
          src="/images/next-arrow.svg"
          alt=""
          className="absolute -right-7 top-1/2"
        />
      </div>

      {/* Services banner */}
      <div className="mt-6 mb-4 flex justify-center font-poppins gap-3 items-center">
        <button className=" bg-stone-950 rounded-xl text-center text-white text-base font-semibold  px-4 py-2">
          Designing
        </button>
        <button className="text-stone-950 rounded-xl text-center bg-white text-base font-semibold px-4 py-2 border border-stone-300">
          Digital Marketing
        </button>
        <button className="text-stone-950 rounded-xl text-center bg-white text-base font-semibold px-4 py-2 border border-stone-300">
          Printing
        </button>
        <button className="text-stone-950 rounded-xl text-center bg-white text-base font-semibold px-4 py-2 border border-stone-300">
          Corporate Gifting
        </button>

        <button className="text-stone-950 rounded-xl text-center bg-white text-base font-semibold px-4 py-2 border border-stone-300">
          Packaging
        </button>
      </div>

      {/* Services */}
      <div className="w-[1240px] h-[304px] border border-slate-400 border-opacity-40 mx-auto flex flex-wrap gap-2.5 pl-[100px] items-center py-8">
        {servicesIcons.map((item, i) => {
          return (
            <a
              href=""
              key={i}
              className="flex flex-col rounded-lg border hover:border-stone-950 border-zinc-400 w-[165px] h-[114px] items-center justify-center bg-white"
            >
              <img src={item.icon} alt="" />
              <p className="text-stone-950">{item.text}</p>
            </a>
          );
        })}
        <div className="w-[165px] h-[114px] bg-gradient-to-b from-stone-950 to-stone-950 rounded-xl border border-zinc-700 justify-around flex flex-col items-center">
          <p className="text-center text-white font-medium">View More</p>
          <div className="w-[45px] h-[45px] bg-white rounded-full shadow relative">
            <img
              src="/images/Arrow - Left.svg"
              alt=""
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>

      {/* Trending Offers */}
      <div className="w-[1240px] h-[337px] relative bg-white border border-slate-400 border-opacity-40 mx-auto">
        <img
          src="/images/back-arrow.svg"
          alt=""
          className="absolute -left-7 top-1/2"
        />
        <div className="mx-auto text-center mt-5 mb-12">
          <div className="w-1.5 h-[35px] bg-stone-950 rounded-tr-md rounded-br-md inline-block mr-1.5 align-middle" />
          <h3 className="inline-block align-middle text-stone-950 text-[32px] font-medium">
            Trending Offers
          </h3>
        </div>

        <div className="flex font-poppins gap-5 ml-10 overflow-hidden">
          {/* Blue */}
          <div className="w-[329px] h-[186px] bg-gradient-to-r from-blue-900 to-blue-600 rounded-2xl flex flex-col pl-[100px] justify-evenly shrink-0">
            <div className="w-[73px] h-10 bg-stone-950 bg-opacity-20 rounded-[40px] flex justify-center items-center">
              <p className="text-white font-medium">BUS</p>
            </div>
            <div className="w-[191px] text-white text-lg font-medium">
              Save up to Rs 250 on bus tickets
            </div>
            <div className="text-white text-[11px] font-medium">
              Valid Till 30 Sep
            </div>
            <div className="flex gap-4">
              <div className="w-[73px] h-[27px] rounded border border-white text-center">
                <p className="text-white text-sm font-medium  align-middle inline-block">
                  First
                </p>
              </div>
              <div className="w-[23px] h-[23px] relative">
                <div className="w-[15px] h-[15px] left-0 top-0 absolute rounded-[1px] border border-white" />
                <div className="w-[15px] h-[15px] left-[7px] top-[6px] absolute bg-blue-700 rounded-[1px] border border-blue-700" />
                <div className="w-[15px] h-[15px] left-[8px] top-[8px] absolute bg-blue-700 rounded-[1px] border border-white" />
              </div>
            </div>
          </div>

          {/* Green */}
          <div className="w-[329px] h-[186px] bg-gradient-to-r from-cyan-900 to-emerald-400 rounded-2xl flex flex-col pl-[100px] justify-evenly shrink-0">
            <div className="w-[73px] h-10 bg-stone-950 bg-opacity-20 rounded-[40px] flex justify-center items-center">
              <p className="text-white font-medium">BUS</p>
            </div>
            <div className="w-[191px] text-white text-lg font-medium">
              Save up to Rs 250 on bus tickets
            </div>
            <div className="text-white text-[11px] font-medium">
              Valid Till 30 Sep
            </div>
            <div className="flex gap-4">
              <div className="w-[73px] h-[27px] rounded border border-white text-center">
                <p className="text-white text-sm font-medium  align-middle inline-block">
                  Superhit
                </p>
              </div>
              <div className="w-[23px] h-[23px] relative">
                <div className="w-[15px] h-[15px] left-0 top-0 absolute rounded-[1px] border border-white" />
                <div className="w-[15px] h-[15px] left-[7px] top-[6px] absolute bg-emerald-400 rounded-[1px] border border-emerald-400" />
                <div className="w-[15px] h-[15px] left-[8px] top-[8px] absolute bg-emerald-400 rounded-[1px] border border-white" />
              </div>
            </div>
          </div>

          {/* Red */}
          <div className="w-[329px] h-[186px] bg-gradient-to-r from-rose-950 to-red-500 rounded-2xl flex flex-col pl-[100px] justify-evenly shrink-0">
            <div className="w-[73px] h-10 bg-stone-950 bg-opacity-20 rounded-[40px] flex justify-center items-center">
              <p className="text-white font-medium">BUS</p>
            </div>
            <div className="w-[191px] text-white text-lg font-medium">
              Save up to Rs 250 on bus tickets
            </div>
            <div className="text-white text-[11px] font-medium">
              Valid Till 30 Sep
            </div>
            <div className="flex gap-4">
              <div className="w-[73px] h-[27px] rounded border border-white text-center">
                <p className="text-white text-sm font-medium  align-middle inline-block">
                  Superhit
                </p>
              </div>
              <div className="w-[23px] h-[23px] relative">
                <div className="w-[15px] h-[15px] left-0 top-0 absolute rounded-[1px] border border-white" />
                <div className="w-[15px] h-[15px] left-[7px] top-[6px] absolute bg-rose-700 rounded-[1px] border border-rose-700" />
                <div className="w-[15px] h-[15px] left-[8px] top-[8px] absolute bg-rose-700 rounded-[1px] border border-white" />
              </div>
            </div>
          </div>

          {/* Blue */}
          <div className="w-[329px] h-[186px] bg-gradient-to-r from-blue-900 to-blue-600 rounded-2xl flex flex-col pl-[100px] justify-evenly shrink-0">
            <div className="w-[73px] h-10 bg-stone-950 bg-opacity-20 rounded-[40px] flex justify-center items-center">
              <p className="text-white font-medium">BUS</p>
            </div>
            <div className="w-[191px] text-white text-lg font-medium">
              Save up to Rs 250 on bus tickets
            </div>
            <div className="text-white text-[11px] font-medium">
              Valid Till 30 Sep
            </div>
            <div className="flex gap-4">
              <div className="w-[73px] h-[27px] rounded border border-white text-center">
                <p className="text-white text-sm font-medium  align-middle inline-block">
                  First
                </p>
              </div>
              <div className="w-[23px] h-[23px] relative">
                <div className="w-[15px] h-[15px] left-0 top-0 absolute rounded-[1px] border border-white" />
                <div className="w-[15px] h-[15px] left-[7px] top-[6px] absolute bg-blue-700 rounded-[1px] border border-blue-700" />
                <div className="w-[15px] h-[15px] left-[8px] top-[8px] absolute bg-blue-700 rounded-[1px] border border-white" />
              </div>
            </div>
          </div>

          <img
            src="/images/next-arrow.svg"
            alt=""
            className="absolute -right-7 top-1/2"
          />
        </div>
      </div>

      {/* Our Latest Awards */}
      <section>
        <div className="mx-auto text-center mt-5 mb-16">
          <div className="w-1.5 h-[35px] bg-stone-950 rounded-tr-md rounded-br-md inline-block mr-1.5 align-middle" />
          <h3 className="inline-block align-middle text-stone-950 text-[32px] font-medium">
            Our Latest Awards
          </h3>
        </div>
        <div className="flex max-w-[1240px] relative gap-16 justify-center mx-auto mb-11">
          {/* Award Symbol 1 */}
          <img src="/images/x-338-award-symbol.svg" alt="" />
          {/* Award Badge 1 */}
          <div className="flex flex-col bg-[url('/images/vector-1.svg')] w-[136px] h-[170px] items-center bg-contain bg-no-repeat">
            <img
              src="/images/medal.svg"
              alt=""
              className="absolute -top-[25px]"
            />
            <p className="w-[72px] text-center text-stone-950 text-base font-medium mx-8 mt-8">
              Best Support
            </p>
            <div className="absolute top-[89px] bg-[url('/images/vector-2.svg')] w-[158px] h-[24px] text-center">
              <p className="text-center text-white text-sm font-medium inline-block">
                Summer
              </p>
            </div>
            <p className="text-center text-stone-950 text-xl font-semibold absolute top-[121px]">
              2023
            </p>
          </div>
          {/* Award Badge 2 */}
          <div className="flex flex-col bg-[url('/images/vector-1.svg')] w-[136px] h-[170px] items-center bg-contain bg-no-repeat">
            <img
              src="/images/medal.svg"
              alt=""
              className="absolute -top-[25px]"
            />
            <p className="w-[72px] text-center text-stone-950 text-base font-medium mx-8 mt-8">
              Best Support
            </p>
            <div className="absolute top-[89px] bg-[url('/images/vector-2.svg')] w-[158px] h-[24px] text-center">
              <p className="text-center text-white text-sm font-medium inline-block">
                Summer
              </p>
            </div>
            <p className="text-center text-stone-950 text-xl font-semibold absolute top-[121px]">
              2023
            </p>
          </div>
          {/* Award Badge 3 */}
          <div className="flex flex-col bg-[url('/images/vector-1.svg')] w-[136px] h-[170px] items-center bg-contain bg-no-repeat">
            <img
              src="/images/medal.svg"
              alt=""
              className="absolute -top-[25px]"
            />
            <p className="w-[72px] text-center text-stone-950 text-base font-medium mx-8 mt-8">
              Best Support
            </p>
            <div className="absolute top-[89px] bg-[url('/images/vector-2.svg')] w-[158px] h-[24px] text-center">
              <p className="text-center text-white text-sm font-medium inline-block">
                Summer
              </p>
            </div>
            <p className="text-center text-stone-950 text-xl font-semibold absolute top-[121px]">
              2023
            </p>
          </div>
          {/* Award Symbol 2 */}
          <img src="/images/vector.svg" alt="" />
        </div>
      </section>

      {/* Dowmload the app */}
      <section>
        <div className="w-[1240px] bg-rose-700 rounded-[20px] font-poppins flex flex-col justify-center items-start pl-24 py-4 mx-auto">
          <p className="text-white text-[52px] font-semibold mb-5">
            Download the App
          </p>
          <p className="w-[583px] text-white text-xl font-medium mb-6">
            Sell your old phone | Buy top-qulaity refurbished phones | Get your
            phone repaired
          </p>
          <div className="flex gap-5">
            <img src="/images/google play.svg" alt="" />
            <img src="/images/app store.svg" alt="" />
          </div>
        </div>
      </section>

      {/* What our clients say */}
      <section>
        <div className="mx-auto text-center mt-9 mb-10">
          <div className="w-1.5 h-[35px] bg-stone-950 rounded-tr-md rounded-br-md inline-block mr-1.5 align-middle" />
          <h3 className="inline-block align-middle text-stone-950 text-[32px] font-medium">
            What Our Clients Say
          </h3>
        </div>
        <div className="flex max-w-[1240px] mx-auto gap-5 relative">
          {/* Testimonials */}
          <img
            src="/images/back-arrow.svg"
            alt=""
            className="absolute -left-7 top-1/2"
          />

          {/* Testimonila card 1 */}
          <div className="w-[294.99px] h-[318px] bg-white rounded-[30px] shadow-[10px_10px_30px_0_rgba(0,0,0,0.1)] flex flex-col items-start px-9 py-5">
            <img src="/images/unnamed.svg" alt="" />
            <p className=" text-stone-950 text-[11.4px] font-medium mt-2.5">
              Cashify has been a Fantastic Startup that has brought so much
              value to the Indian customer.we are Proud to partner with them and
              help our Mi fans get better exchange value for our phones!
            </p>
            <p className="text-stone-950 text-[11.4px] font-medium my-5">
              Manu jain is a leading indian entrepreneur & VP of Xiaomi which is
              one of india,s Largest smartphone Brands.
            </p>
            <hr className=" w-full border border-stone-950 border-opacity-50"></hr>
            <div className="flex w-full">
              <img className="rounded-full" src="/images/Ellipse 15.svg" />
              <div className="flex flex-col ml-1 mt-3">
                <p className=" text-stone-950 text-sm font-medium">Manu Jain</p>
                <p className="text-zinc-400 text-[9px] font-medium">
                  VP & MD, Xiaomi India
                </p>
              </div>
              <img
                src="/images/group-62.svg"
                alt=""
                className="block ml-auto"
              />
            </div>
          </div>

          {/* testimonaila card 2 */}
          <div className="w-[294.99px] h-[318px] bg-white rounded-[30px] shadow-[10px_10px_30px_0_rgba(0,0,0,0.1)] flex flex-col items-start px-9 py-5">
            <img src="/images/unnamed.svg" alt="" />
            <p className=" text-stone-950 text-[11.4px] font-medium mt-2.5">
              Cashify has been a Fantastic Startup that has brought so much
              value to the Indian customer.we are Proud to partner with them and
              help our Mi fans get better exchange value for our phones!
            </p>
            <p className="text-stone-950 text-[11.4px] font-medium my-5">
              Manu jain is a leading indian entrepreneur & VP of Xiaomi which is
              one of india,s Largest smartphone Brands.
            </p>
            <hr className=" w-full border border-stone-950 border-opacity-50"></hr>
            <div className="flex w-full">
              <img className="rounded-full" src="/images/Ellipse 15.svg" />
              <div className="flex flex-col ml-1 mt-3">
                <p className=" text-stone-950 text-sm font-medium">Manu Jain</p>
                <p className="text-zinc-400 text-[9px] font-medium">
                  VP & MD, Xiaomi India
                </p>
              </div>
              <img
                src="/images/group-62.svg"
                alt=""
                className="block ml-auto"
              />
            </div>
          </div>

          {/* testimonaila card 3 */}
          <div className="w-[294.99px] h-[318px] bg-white rounded-[30px] shadow-[10px_10px_30px_0_rgba(0,0,0,0.1)] flex flex-col items-start px-9 py-5">
            <img src="/images/unnamed.svg" alt="" />
            <p className=" text-stone-950 text-[11.4px] font-medium mt-2.5">
              Cashify has been a Fantastic Startup that has brought so much
              value to the Indian customer.we are Proud to partner with them and
              help our Mi fans get better exchange value for our phones!
            </p>
            <p className="text-stone-950 text-[11.4px] font-medium my-5">
              Manu jain is a leading indian entrepreneur & VP of Xiaomi which is
              one of india,s Largest smartphone Brands.
            </p>
            <hr className=" w-full border border-stone-950 border-opacity-50"></hr>
            <div className="flex w-full">
              <img className="rounded-full" src="/images/Ellipse 15.svg" />
              <div className="flex flex-col ml-1 mt-3">
                <p className=" text-stone-950 text-sm font-medium">Manu Jain</p>
                <p className="text-zinc-400 text-[9px] font-medium">
                  VP & MD, Xiaomi India
                </p>
              </div>
              <img
                src="/images/group-62.svg"
                alt=""
                className="block ml-auto"
              />
            </div>
          </div>

          {/* testimonaila card 4 */}
          <div className="w-[294.99px] h-[318px] bg-white rounded-[30px] shadow-[10px_10px_30px_0_rgba(0,0,0,0.1)] flex flex-col items-start px-9 py-5">
            <img src="/images/unnamed.svg" alt="" />
            <p className=" text-stone-950 text-[11.4px] font-medium mt-2.5">
              Cashify has been a Fantastic Startup that has brought so much
              value to the Indian customer.we are Proud to partner with them and
              help our Mi fans get better exchange value for our phones!
            </p>
            <p className="text-stone-950 text-[11.4px] font-medium my-5">
              Manu jain is a leading indian entrepreneur & VP of Xiaomi which is
              one of india,s Largest smartphone Brands.
            </p>
            <hr className=" w-full border border-stone-950 border-opacity-50"></hr>
            <div className="flex w-full">
              <img className="rounded-full" src="/images/Ellipse 15.svg" />
              <div className="flex flex-col ml-1 mt-3">
                <p className=" text-stone-950 text-sm font-medium">Manu Jain</p>
                <p className="text-zinc-400 text-[9px] font-medium">
                  VP & MD, Xiaomi India
                </p>
              </div>
              <img
                src="/images/group-62.svg"
                alt=""
                className="block ml-auto"
              />
            </div>
            <img
              src="/images/next-arrow.svg"
              alt=""
              className="absolute -right-7 top-1/2"
            />
          </div>
        </div>
      </section>

      {/* Your Perfect Advertising Partner */}

      <section className="w-[1240px] h-[429px] bg-white rounded-[20px] border border-slate-400 border-opacity-40 mx-auto mt-8">
        <div className="mx-auto text-center mt-5 mb-6">
          <div className="w-1.5 h-[35px] bg-stone-950 rounded-tr-md rounded-br-md inline-block mr-1.5 align-middle" />
          <h3 className="inline-block align-middle text-stone-950 text-[32px] font-medium">
            Your Perfect Advertising Partner
          </h3>
        </div>
        <p className="w-[1047px] text-center text-zinc-800 text-base font-medium mx-24">
          Excellent Publicity is forever expanding your brand with high quality
          service that combines creativity with value pricing. We enjoy our work
          because, first - we admire the advertising world, and second, we know
          that our ideas and strategies make a difference. We play to win, with
          the primary goal of assisting our customers in promoting their
          successful brand campaigns.
        </p>
        <div className="flex gap-5 justify-center my-7">
          {partnerIcons.map((item, i) => {
            return (
              <div
                key={i}
                className="w-[113px] h-[121px] bg-white rounded-md border border-zinc-400 flex flex-col justify-center items-center py-[13px]"
              >
                <img src={item.icon} alt="" />
                <p className="text-center text-stone-950 text-[11px]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
        <button className="w-[235px] h-[54px] bg-stone-950 rounded-lg flex items-center justify-center gap-2 mx-auto my-[30px]">
          <p className="text-center text-white text-base font-medium">
            About us
          </p>
          <div className="w-6 h-6 bg-white rounded-full shadow relative">
            <img
              src="/images/Arrow - Left.svg"
              alt=""
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </button>
      </section>

      {/* Our Venture */}
      <section>
        <div className="mx-auto text-center mt-5 mb-16">
          <div className="w-1.5 h-[35px] bg-stone-950 rounded-tr-md rounded-br-md inline-block mr-1.5 align-middle" />
          <h3 className="inline-block align-middle text-stone-950 text-[32px] font-medium">
            Our Venture
          </h3>
        </div>
        <div className="flex w-full my-8 justify-center gap-2.5">
          <a href="" className="w-[90px]">
            <img
              src="/images/81e390941af600e0c1f3328958fee60b (1).png"
              alt=""
              className="rounded-[10px]"
            />
          </a>
          <a href="" className="w-[90px]">
            <img
              src="/images/Indorinama-story.png"
              alt=""
              className="rounded-[10px]"
            />
          </a>
          <a href="" className="w-[90px]">
            <img src="/images/indorinama-print-2.png" alt="" />
          </a>
          <a href="" className="w-[90px]">
            <img src="/images/Indorinama-bhopu.png" alt="" />
          </a>
          <a href="" className="w-[90px] h-[90px]">
            <img src="/images/Indorinama-corp-gift 2.png" alt="" />
          </a>
          <a href="" className="w-[90px] h-[90px]">
            <img src="/images/Indorinama-Packaging.png" alt="" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-stone-950 border-t border-stone-950 border-opacity-10 text-white">
        <div className="flex justify-around max-w-[1440px] pb-20">
          <div className="flex flex-col justify-center font-inter">
            <p className="text-white text-base font-normal capitalize leading-relaxed tracking-tight font-inter">
              Lorem Ipsum is simply dummy text of the
              <br />
              and typesetting industry. Lorem Ipsum is
              <br />
              dummy text of the printing.
            </p>
            <div className="flex gap-3.5 mt-8">
              <button className="w-8 h-8 bg-white rounded-full shadow relative">
                <img
                  src="/images/bxl-facebook.svg"
                  alt=""
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </button>
              <button className="w-8 h-8 bg-white rounded-full shadow relative">
                <img
                  src="/images/ci-instagram.svg"
                  alt=""
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </button>
              <button className="w-8 h-8 bg-white rounded-full shadow relative">
                <img
                  src="/images/akar-icons-linkedin-v-2-fill.svg"
                  alt=""
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </button>
              <button className="w-8 h-8 bg-white rounded-full shadow relative">
                <img
                  src="/images/ant-design-twitter-outlined.svg"
                  alt=""
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </button>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col mt-8 gap-6 font-roboto">
            <h3 className="text-2xl font-semibold capitalize">Quick Links</h3>

            <a href="" className="capitalize">
              Home
            </a>

            <a href="" className="capitalize">
              About Us
            </a>

            <a href="" className="capitalize">
              Blog
            </a>

            <a href="" className="capitalize">
              FAQ
            </a>

            <a href="" className="capitalize">
              Services
            </a>
          </div>

          {/* our offerings */}
          <div className="flex flex-col mt-8 gap-6 font-roboto">
            <h3 className="text-2xl font-semibold capitalize">Our Offerings</h3>

            <a href="" className="capitalize">
              radio
            </a>

            <a href="" className="capitalize">
              cinema Us
            </a>

            <a href="" className="capitalize">
              transit
            </a>

            <a href="" className="capitalize">
              outdoor
            </a>

            <a href="" className="capitalize">
              promotional offers
            </a>
          </div>

          {/* Contact us */}

          <div className="flex flex-col mt-8 gap-6 font-roboto">
            <h3 className="text-2xl font-semibold capitalize">Contact us</h3>
            <div className="flex gap-[15px]">
              <img src="/images/location-svgrepo-com-11.svg" alt="" />
              <p className="leading-relaxed">
                124 Brooklyn, New York <br />
                United States
              </p>
            </div>
            <div className="flex gap-[15px]">
              <img src="/images/call-192-svgrepo-com-1.svg" alt="" />
              <p className="leading-relaxed">+11 2 3456 7890</p>
            </div>
            <div className="flex gap-[15px]">
              <img src="/images/email-svgrepo-com-1.svg" alt="" />
              <p className="leading-relaxed">info@houzing.com</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
