"use client";

import { Provider } from "react-redux";
import { useEffect, useState } from "react";
import store from "../../store";
import { setCartFromStorage } from "../../store/customSlice";

const loadCartFromStorage = (): any[] => {
  try {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      return JSON.parse(savedCart);
    }
    return [];
  } catch (error) {
    console.error("Error loading cart from localStorage", error);
    return [];
  }
};

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const initialCart = loadCartFromStorage();
    store.dispatch(setCartFromStorage(initialCart));
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return null;
  }

  return <Provider store={store}>{children}</Provider>;
}
