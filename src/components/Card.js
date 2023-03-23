import { useNavigate } from "react-router-dom";

const Card = ({subText,naviUrl}) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>{navigate(`/entries/${naviUrl}`)}} className="my-5 mx-10 cursor-pointer  text-center">
      <div className="card w-68 h-68 bg-transparent sm:w-full">
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
