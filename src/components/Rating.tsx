import { useState } from "react";
import star from "../assets/icon-star.svg";

function Rating({
  setIsSubmitted,
  onRatingSelected,
}: {
  setIsSubmitted: Function;
  onRatingSelected: Function;
}) {
  const [selectedRating, setSelectedRating] = useState<number>(0);

  function handleFormSubmitted(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitted(true);
  }
  function handleRatingClicked(rating: number) {
    setSelectedRating(rating);
    onRatingSelected(rating);
  }
  return (
    <form onSubmit={handleFormSubmitted} className="flex">
      <div className="p-[30px] text-white h-[400px] w-[400px] bg-[#232934] rounded-3xl">
        <img
          className="bg-[#353f47] rounded-full h-[48px] w-[48px] object-scale-down mb-[26px]"
          src={star}
          alt=""
        />
        <h1 className="mb-[16px] text-3xl font-bold">How did we do?</h1>
        <p className="mb-[26px] text-[#7c8798] tracking-tight">
          Please let us know how we did with your support request. All feed back
          is appreciated to help us improve our offering!
        </p>
        <div className="flex justify-between">
          {[1, 2, 3, 4, 5].map((rating, i) => (
            <button
              key={i}
              type="button"
              className="bg-[#262f38] h-[50px] w-[50px] rounded-full mb-[25px] cursor-pointer hover:bg-gray-400 focus:bg-[#fc7613]"
              onClick={() => handleRatingClicked(rating)}
            >
              {rating}
            </button>
          ))}
        </div>
        <button
          disabled={selectedRating === 0}
          className="bg-[#fc7613] h-[44px] rounded-full w-full uppercase tracking-widest hover:bg-white hover:text-[#fc7613] font-bold"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Rating;
