import { useEffect, useState } from "react";
import Category from "./Category";

const Auction = ({ handleId, handleFavourite, id }) => {
  const [items, Setitems] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => Setitems(data));
  }, []);
  return (
    <div className="w-11/12 pb-18 rounded-2xl">
      <div className="mb-5">
        <h1 className="font-bold text-1xl text-gray-600">Action galary</h1>
        <p className="text-sm">Discover and bid on extraordinary items</p>
      </div>

      <div className="items grid grid-cols-1">
        <div className="grid grid-cols-[6fr_2fr_2fr_1fr] mb-5">
          <div className="item">items</div>
          <div className="current-bid">Current Bid</div>
          <div className="time-left">Time Left</div>
          <div className="bid-now">Bid Now</div>
        </div>

        {/* {console.log(items)} */}

        {items.map((item) => {
          {
            return (
              <Category
                handleId={handleId}
                handleFavourite={handleFavourite}
                key={item.id}
                props={item}
                id={id}
                // isbooked={isbooked}
              ></Category>
            );
            // console.log(item);
          }
        })}
      </div>
    </div>
  );
};

export default Auction;
