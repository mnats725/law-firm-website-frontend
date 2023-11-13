import "./zakaz-call.css";

export const ZakazCall = () => {
  return (
    <div className="zakaz-call">
      <input
        type="tel"
        name="phone_number"
        list="tel-list"
        placeholder=" +7 (___) ___ __ __"
        pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
      ></input>
      <button>Заказать звонок</button>
    </div>
  );
};
