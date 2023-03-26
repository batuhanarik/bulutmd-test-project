import EntryCard from "./EntryCard";

const EntryCards = ({ filteredEntries }) => {
    console.log(filteredEntries);
  return (
    <div className="flex flex-wrap m-3 mb-16 justify-center">
      {filteredEntries.map((entry, idx) => {
        return <EntryCard key={idx} cardInfo={entry} />;
      })}
    </div>
  );
};

export default EntryCards;
