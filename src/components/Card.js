import { useNavigate } from "react-router-dom";

const Card = ({subText,naviUrl}) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>{navigate(`/entries/${naviUrl}`)}} className="my-4 mx-10 cursor-pointer  text-center">
      <div className="card mx-auto w-3/5 bg-transparent sm:w-full">
        <figure>
          <img
            className="object-cover rounded-xl"
            src="https://upload.wikimedia.org/wikipedia/en/e/eb/Wolfcreek.png"
            alt="Shoes"
          />
        </figure>
      </div>
      <span className="text-2xl place-content-center">{subText}</span>
    </div>
  );
};

export default Card;
