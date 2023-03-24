import { useState } from "react";
import EntryCards from "../components/EntryCards";
import Filter from "../components/Filter";
import Footer from "../components/Footer";
import NaviBar from "../components/Navi";

const EntriesScreen = ({ entries }) => {
  //Dizi ya da film aramak için kullanılan state
  const [filterText, setFilterText] = useState("");
  const handleFilterText = (filterText) => {
    setFilterText(filterText);
    console.log(filterText);
  };
  const filterEntries = () => {
    if (filterText.length > 2) {
      return entries.filter((entry) => {
        return entry.title.toLowerCase().includes(filterText.toLocaleLowerCase());
      });
    }
    return entries;
  };

  return (
    <div className="overflow-x-hidden">
      <NaviBar />
      <Filter onChangeText={handleFilterText} />
      <div className="">
        <EntryCards entries={filterEntries} />
      </div>
      <div className="sticky md:fixed">
        <Footer />
      </div>
    </div>
  );
};
export default EntriesScreen;
