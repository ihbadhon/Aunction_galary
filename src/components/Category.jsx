import { useEffect, useState } from "react";
import bookmarblack from "../assets/bookmarkblack.png";
import bookmarwhite from "../assets/bookmarkwhite.png";

const Category = ({ handleId, handleFavourite, props, id }) => {
  const [idd, Setidd] = useState([]);

  useEffect(() => {
    if (id != null) Setidd((prev) => prev.filter((e) => e !== id));
    console.log("badhon");
  }, [id]);

  const booked = () => {
    if (idd.includes(props.id)) {
      handleFavourite(props);
      Setidd((prev) => prev.filter((e) => e !== props.id));
    } else Setidd((prev) => [...prev, props.id]);

    handleId(props);
  };

  const isbooked = idd.includes(props.id);

  return (
    <div className="grid grid-cols-[6fr_2fr_2fr_1fr] mb-4 border-b-[1px] border-[#d8dde4] p-1">
      {/* {console.log(props.id)} */}
      <div className=" flex gap-5  overflow-hidden">
        <div className="w-15 h-10">
          <img
            src={props.image}
            alt={props.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="title">{props.title}</div>
      </div>
      <div className="div">${props.currentBidPrice}</div>
      <div className="div">{props.timeLeft} left</div>
      <div className="div">
        <button
          className="cursor-pointer"
          onClick={() => {
            booked();
          }}
        >
          {/* {idd.includes(id)} */}
          {isbooked ? (
            <img src={bookmarblack} alt="" />
          ) : (
            <img src={bookmarwhite} alt="" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Category;
