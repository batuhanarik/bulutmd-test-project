import { Input } from "react-daisyui";
const Filter = ({onChangeText}) => {
  return (
    <div>
      <div className="flex max-sm:flex-col component-preview my-3 justify-between max-sm:justify-center items-center font-sans">
        <Input
          onChange={(event)=>{onChangeText(event.target.value)}}
          placeholder="Film / Dizi / Oyuncu ara"
          className="w-3/12 ml-8 max-sm:mx-auto max-sm:w-11/12 max-sm:mb-3"
        />
        
        <select className="select select-accent max-sm:mx-auto max-sm:w-11/12 text-center text-xl border-l-blue-400 mr-12">
          <option defaultValue={'Sırala'}>
            Sırala
          </option>
          <option>Yeniye Göre Sırala</option>
          <option>Eskiye Göre Sırala</option>
          <option>Puana Göre Sırala</option>
          <option>Rastgele Sırala</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
