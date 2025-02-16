import { useEffect } from "react";

type OrderingInputProps = {
  name: string;
  inputName: string;
  inputClassName: string;
  min?: number;
  value: string;
  setValue: (value: any, inputName: any) => void;
  hidden?: boolean;
  isInputValid: boolean;
  setIsInputValid: (value: any, inputName: any) => void;
};

const OrderingInputText = (props: OrderingInputProps) => {
  const {
    name,
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
    const value = event.target.value;
    setValue(value, name);
    if (event.target.value.length > min - 1 && !isInputValid) {
      setIsInputValid(true, name);
    }
    if (event.target.value.length < min && isInputValid) {
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

  useEffect(() => {
    if (hidden) {
      setIsInputValid(true, name);
      setValue("", name);
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
        name={name}
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
