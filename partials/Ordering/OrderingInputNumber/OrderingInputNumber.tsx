import "./styles.scss";

type OrderingInputProps = {
  name: string;
  inputName: string;
  inputClassName: string;
  value: string;
  min: number;
  setValue: (value: any, name: any) => void;
  isInputValid: boolean;
  setIsInputValid: (value: any, name: any) => void;
};

const OrderingInputNumber = (props: OrderingInputProps) => {
  const {
    name,
    inputName,
    inputClassName,
    min,
    value,
    setValue,
    isInputValid,
    setIsInputValid,
  } = props;
  const labelClassName = `basket-ordering-${inputClassName}`;

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filteredValue = event.target.value.replace(/[^0-9]/g, "");
    setValue(filteredValue, name);
    if (filteredValue.length > min - 1 && !isInputValid) {
      setIsInputValid(true, name);
    }
    if (filteredValue.length < min && isInputValid) {
      setIsInputValid(false, name);
    }
  };

  const handleInputBlur = () => {
    if (value.length < min) {
      setIsInputValid(false, name);
      return;
    }
    setIsInputValid(true, name);
  };

  return (
    <label className={labelClassName}>
      <span className="basket-ordering-input__name">{inputName}</span>
      <input
        className={`basket-ordering__input${isInputValid ? "" : " _notValid"}`}
        type="text"
        name={name}
        id=""
        value={value}
        onChange={handleChangeValue}
        placeholder="0987777777"
        onBlur={handleInputBlur}
        maxLength={10}
      />
      <span
        className={`basket-ordering-input__message${
          isInputValid ? "" : " _notValid"
        }`}
      >
        Заповніть поле. 10 символів
      </span>
    </label>
  );
};

export default OrderingInputNumber;
