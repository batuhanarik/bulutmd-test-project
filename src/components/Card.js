import { useNavigate } from "react-router-dom";

const Card = ({cardInfo,naviUrl}) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>{navigate(`/entries/${naviUrl}`)}} className="my-4 mx-10 cursor-pointer text-center">
      <div className="card mx-auto w-4/5 bg-transparent">
        <figure>
          <img
            className="w-80 h-72 object-cover rounded-xl"
            src={`${cardInfo.image}`}
            alt={`${cardInfo.type}`}
          />
        </figure>
      </div>
      <span className="text-2xl place-content-center">{cardInfo.type}</span>
    </div>
  );
};

export default Card;
