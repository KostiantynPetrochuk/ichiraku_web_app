import "./styles.scss";

type OrderingInputProps = {
  inputName: string;
  inputClassName: string;
  value: string;
  min: number;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  isInputValid: boolean;
  setIsInputValid: React.Dispatch<React.SetStateAction<boolean>>;
};

const OrderingInputNumber = (props: OrderingInputProps) => {
  const {
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

    setValue(filteredValue);
    if (filteredValue.length > min - 1 && !isInputValid) {
      setIsInputValid(true);
    }

    if (filteredValue.length < min && isInputValid) {
      setIsInputValid(false);
    }
  };

  const handleInputBlur = () => {
    if (value.length < min) {
      setIsInputValid(false);
      return;
    }
    setIsInputValid(true);
  };

  return (
    <label className={labelClassName}>
      <span className="basket-ordering-input__name">{inputName}</span>
      <input
        className={`basket-ordering__input${isInputValid ? "" : " _notValid"}`}
        type="text"
        name=""
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
