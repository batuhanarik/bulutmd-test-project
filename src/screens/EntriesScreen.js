import { useState } from "react";
import EntryCards from "../components/EntryCards";
import Filter from "../components/Filter";
import Footer from "../components/Footer";
import NaviBar from "../components/Navi";
const EntriesScreen = ({ entries }) => {
  //Dizi ya da film aramak için kullanılan state
  const [filterText, setFilterText] = useState("");
  //Sıralama için kullanılan state, değerleri : default,ascending,descending,random
  const [sortValue, setSortValue] = useState("descending");

  //FilterText State'ini setlemek için kullanılan fonksiyon
  const handleFilterText = (filterText) => {
    setFilterText(filterText);
  };
  const handleSortValue = (sortValue) => {
    setSortValue(sortValue);
  };


  const sortEntries = (a, b) => {
    switch (sortValue) {
      case "descending":
        return b.releaseYear - a.releaseYear;
      case "ascending":
        return a.releaseYear - b.releaseYear;
      case "random":
        let randNum = Math.floor(Math.random() * 30) + 1;
        if (randNum <= 10) return -1;
        else if (randNum > 10 && randNum <= 20) return 0;
        else return 1;
      default:
        return 0;
    }
  };

  return (
    <div className="overflow-x-hidden">
      <NaviBar />
      <Filter
        onChangeSortValue={handleSortValue}
        onChangeText={handleFilterText}
      />
      <div className="">
        <EntryCards
          filteredEntries={entries.sort(sortEntries).filter((entry, idx) => {
            if (filterText.length > 2)
              return entry.title
                .toLowerCase()
                .includes(filterText.toLocaleLowerCase());
            return idx < 18;
          })}
        />
      </div>
      <Footer />
    </div>
  );
};
const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export default EntriesScreen;
