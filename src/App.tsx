import { useState } from "react";
import Rating from "./components/Rating";
import ThankYou from "./components/ThankYou";

function App() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [selectedRating, setSelectedRating] = useState<number>(0);
  
  function handleRatingSelected(rating: number) {
    setSelectedRating(rating);
  }

  return (
    <div className="App font-overpass">
      {isSubmitted ? (
        <ThankYou selectedRating={selectedRating} />
      ) : (
        <Rating
          setIsSubmitted={setIsSubmitted}
          onRatingSelected={handleRatingSelected}
        />
      )}
    </div>
  );
}

export default App;
