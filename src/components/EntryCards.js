import EntryCard from "./EntryCard";

const EntryCards = ({ entries }) => {
    const entries2 = entries();
  return (
    <div>
      {entries2.map((entry, idx) => {
        return <EntryCard key={idx} cardInfo={entry} />;
      })}
    </div>
  );
};

export default EntryCards;
