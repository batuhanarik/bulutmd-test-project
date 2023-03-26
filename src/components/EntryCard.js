const EntryCard = ({ cardInfo, idx }) => {
  return (
    <div key={idx} className="my-4 mx-10 text-center">
      <div className="card mx-auto bg-transparent sm:w-full">
        <figure>
          <img
            className="rounded-xl w-80 h-80"
            src={`${cardInfo.images["Poster Art"].url}`}
            alt="img"
          />
        </figure>
      </div>
      <span className="text-2xl place-content-center w-80 overflow-hidden overflow-ellipsis whitespace-nowrap inline-block">{cardInfo.releaseYear} - {cardInfo.title}</span>
    </div>
  );
};

export default EntryCard;
