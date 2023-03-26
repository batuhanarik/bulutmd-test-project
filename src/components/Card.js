import { useNavigate } from "react-router-dom";

const Card = ({cardInfo,naviUrl}) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>{navigate(`/entries/${naviUrl}`)}} className="my-4 mx-10 cursor-pointer text-center">
      <div className="card mx-auto w-4/5 bg-transparent">
        <figure>
          <img
            className="w-64 h-64 sm:w-64 sm:h-64 md:w-96 md:h-96 lg:w-96 lg:h-96  xl:w-96 xl:h-96 2xl:h-96 2xl:w-96 object-cover rounded-xl"
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
