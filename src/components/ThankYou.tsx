import image from "../assets/illustration-thank-you.svg";

function ThankYou({ selectedRating }: { selectedRating: number }) {
  return (
    <div className="p-[30px] text-white h-[400px] w-[400px] bg-[#232934] rounded-3xl">
      <div className="flex flex-col items-center">
        <img src={image} alt="" className="object-scale-down mb-10 mt-1" />
        <p className="flex justify-center items-center pt-1 text-[#fc7613] h-[32px] w-[200px] rounded-full bg-[#393e45] mb-8 font-light">
          You selected {selectedRating} out of 5
        </p>
        <h1 className="mb-[16px] text-3xl">Thank you!</h1>
        <p className="mb-[26px] text-center text-[#7c8798] tracking-tight">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}

export default ThankYou;
