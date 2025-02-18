import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const STORAGE_KEY = "cart";

interface CartItem {
  _id: string;
  name: string;
  price: number;
  count: number;
}

interface CartState {
  list: CartItem[];
}

export const saveCartToStorage = (cart: CartItem[]) => {
  try {
    const cartCopy = JSON.parse(JSON.stringify(cart));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartCopy));
  } catch (error) {
    console.error("Error saving cart to localStorage", error);
  }
};

const initialState: CartState = {
  list: [],
};

interface ChangeCountActionT {
  _id: string;
  updatedCount: number;
}

interface RemoveCustomActionT {
  _id: string;
}

const customSlice = createSlice({
  name: "customs",
  initialState,
  reducers: {
    addCustom(state, action: PayloadAction<CartItem>) {
      state.list.push(action.payload);
      saveCartToStorage(state.list);
    },
    changeCount(state, action: PayloadAction<ChangeCountActionT>) {
      if (action.payload.updatedCount <= 0) {
        state.list = state.list.filter(
          (custom) => custom._id !== action.payload._id
        );
      } else {
        const changedCustom = state.list.find(
          (custom) => custom._id === action.payload._id
        );
        if (changedCustom) {
          changedCustom.count = action.payload.updatedCount;
        }
      }
      saveCartToStorage(state.list);
    },
    removeCustom(state, action: PayloadAction<RemoveCustomActionT>) {
      state.list = state.list.filter(
        (custom) => custom._id !== action.payload._id
      );
      saveCartToStorage(state.list);
    },
    clearBasket(state) {
      state.list = [];
      localStorage.removeItem(STORAGE_KEY);
    },
    setCartFromStorage(state, action: PayloadAction<CartItem[]>) {
      state.list = action.payload;
    },
  },
});

export const {
  addCustom,
  changeCount,
  removeCustom,
  clearBasket,
  setCartFromStorage,
} = customSlice.actions;

export default customSlice.reducer;
