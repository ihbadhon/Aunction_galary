import { useState } from "react";
import Auction from "./Auction";
import Favourite_item from "./Favourite_item";

const DivC = () => {
  const [item, SetItem] = useState([]);
  const [sum, SetSum] = useState(0);
  const [idd, Setidd] = useState(null);

  // if (flagg) console.log("testingnlkljk");

  const handleId = (data) => {
    const flag = item.find((e) => e.id === data.id);
    if (!flag) {
      SetItem((prev) => [...prev, data]);
      SetSum((prev) => prev + data.currentBidPrice);
      // console.log(sum);
    }
  };
  // const [booked, SetBooked] = useState(false);

  const handleFavourite = (data) => {
    SetItem((prev) => prev.filter((e) => e.id != data.id));
    SetSum((prev) => prev - data.currentBidPrice);
    // SetBooked((prev) => !prev);
  };

  const handleBookmarked = (id) => {
    Setidd(id);
  };

  return (
    <div>
      <div className="grid grid-cols-[3fr_1fr] pt-20 pr-10 pb-10  gap-5 bg-[#DCE5F3] ">
        <div className="flex justify-center ml-10 bg-white pt-8 rounded-2xl">
          <Auction
            // key={handleId}
            handleId={handleId}
            handleFavourite={handleFavourite}
            id={idd}
          ></Auction>
        </div>
        <div>
          <div className="flex flex-col gap-3 border-1 p-3 border-[#d8dde4] bg-white rounded-2xl">
            <div className="text-center text-[#0E2954] font-bold text-2xl">
              Favourite Items
            </div>
            <div>
              {/* will be if condition */}
              {item.length ? (
                <div>
                  {item.map((single) => (
                    <Favourite_item
                      props={single}
                      key={single.id}
                      handleFavourite={handleFavourite}
                      handleBookmarked={handleBookmarked}
                    ></Favourite_item>
                  ))}

                  {""}
                </div>
              ) : (
                <div className="w-8/12 m-auto">
                  <h1 className="text-center text-[#0E2954] font-bold text-1xl">
                    No favourite yet
                  </h1>
                  <p className="text-sm text-center">
                    click the heart icon on any item to add it to your favourite
                  </p>
                </div>
              )}
              {/* <h1>no favourite yet</h1><p>click the heart icon on any item to add it to your favourite</p> */}
            </div>

            <div className="flex justify-between">
              <div>Total bids amount</div>
              <div>${sum}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivC;
