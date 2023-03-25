import { Input } from "react-daisyui";
const Filter = ({onChangeText,onChangeSortValue}) => {
  return (
    <div>
      <div className="flex max-sm:flex-col component-preview my-3 justify-between max-sm:justify-center items-center font-sans">
        <Input
          onChange={(event)=>{onChangeText(event.target.value)}}
          placeholder="Film / Dizi / Oyuncu ara"
          className="w-3/12 ml-8 max-sm:mx-auto max-sm:w-11/12 max-sm:mb-3"
        />
        
        <select defaultValue={'descending'} onChange={(event)=>{onChangeSortValue(event.target.value)}} className="select select-accent max-sm:mx-auto max-sm:w-11/12 text-center text-xl border-l-blue-400 mr-12">
          <option value={'descending'}>Yeniye Göre Sırala</option>
          <option value={'ascending'}>Eskiye Göre Sırala</option>
          <option value={'random'}>Rastgele Sırala</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
