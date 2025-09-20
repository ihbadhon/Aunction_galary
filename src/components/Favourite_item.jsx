const Favourite_item = ({ props, handleFavourite, handleBookmarked }) => {
  //   console.log(props, "lajkdf");

  return (
    <div className="flex justify-start gap-5 border-b-1 pt-2 pb-2 border-[#d8dde4] rounded-2xl">
      <div className="img flex h-15 w-15 text-center justify-center items-center">
        <img className="" src={props.image} alt="" />
      </div>
      <div className="right grid grid-cols-1 w-full">
        <div className="flex justify-between">
          <div className="title ">{props.title}</div>
          <div className="">
            {" "}
            <button
              onClick={() => {
                handleBookmarked(props.id);
                handleFavourite(props);
              }}
            >
              <svg
                className="swap-on fill-current cursor-pointer w-5"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="price">${props.currentBidPrice}</div>
          <div className="bid">Bids: {props.bidsCount}</div>
        </div>
      </div>
    </div>
  );
};

export default Favourite_item;
