import { useEffect } from "react";

type OrderingInputProps = {
  inputName: string;
  inputClassName: string;
  min?: number;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  hidden?: boolean;
  isInputValid: boolean;
  setIsInputValid: React.Dispatch<React.SetStateAction<boolean>>;
};

const OrderingInputText = (props: OrderingInputProps) => {
  const {
    inputName,
    inputClassName,
    min = 3,
    value,
    setValue,
    hidden = false,
    isInputValid,
    setIsInputValid,
  } = props;
  const labelClassName = `basket-ordering-${inputClassName}`;

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (event.target.value.length > min - 1 && !isInputValid) {
      setIsInputValid(true);
    }

    if (event.target.value.length < min && isInputValid) {
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

  useEffect(() => {
    if (hidden) {
      setIsInputValid(true);
      setValue("");
    }
  }, [hidden]);

  return (
    <label
      className={labelClassName}
      style={{
        opacity: hidden ? 0.3 : 1,
        pointerEvents: hidden ? "none" : "all",
      }}
    >
      <span className="basket-ordering-input__name">{inputName}</span>
      <input
        required
        className={`basket-ordering__input${isInputValid ? "" : " _notValid"}`}
        type="text"
        name=""
        id=""
        value={value}
        onChange={handleChangeValue}
        placeholder={inputName}
        onBlur={handleInputBlur}
      />
      <span
        className={`basket-ordering-input__message${
          isInputValid ? "" : " _notValid"
        }`}
      >
        Заповніть поле. Мінімум 3 символи
      </span>
    </label>
  );
};

export default OrderingInputText;
