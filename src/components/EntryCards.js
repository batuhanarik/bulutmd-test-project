import EntryCard from "./EntryCard";

const EntryCards = ({ filteredEntries }) => {
    console.log(filteredEntries);
  return (
    <div>
      {filteredEntries.map((entry, idx) => {
        return <EntryCard key={idx} cardInfo={entry} />;
      })}
    </div>
  );
};

export default EntryCards;
