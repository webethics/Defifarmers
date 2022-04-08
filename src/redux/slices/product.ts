import { createSlice } from '@reduxjs/toolkit';
import { sum, map, filter, uniqBy, includes } from 'lodash';
import { store } from '../store';
// utils
import axios from 'axios';
import { CartItem, Product, ProductState } from '../../@types/products';
import axiosService from 'utils/axios';

// ----------------------------------------------------------------------

const initialState: ProductState = {
  isLoading: false,
  isLoaded: false,
  error: false,
  updatingMyCollection: false,
  products: [],
  myCollection: [],
  product: null,
  sortBy: null,
  accountAddress: null,
  filters: {
    category: [],
    collections: [],
    country: [],
    co2offset: [],
    colors: [],
    auctionType: [],
    auctionStatus: [],
    priceRange: [0, 100],
    rating: '',
    paymentType: ' ',
    forAuction: true,
  },
};

const slice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET PRODUCTS
    getProductsSuccess(state, action) {
      state.isLoading = false;
      state.products = action.payload;
      state.isLoaded = true;
    },

    // GET PRODUCT
    getProductSuccess(state, action) {
      state.isLoading = false;
      state.product = action.payload;
    },

    //  SORT & FILTER PRODUCTS
    sortByProducts(state, action) {
      state.sortBy = action.payload;
    },

    filterProducts(state, action) {
      state.filters.category = action.payload.category;
      state.filters.country = action.payload.country;
      state.filters.co2offset = action.payload.co2offset;
      state.filters.auctionType = action.payload.auctionType;
      state.filters.auctionStatus = action.payload.auctionStatus;
      state.filters.paymentType = action.payload.paymentType;
      state.filters.priceRange = action.payload.priceRange;
      state.filters.collections = action.payload.collections;
    },

    updateProduct(state, action) {
      const {
        treeData,
        index,
        currenetBid,
        BasePrice,
        lastBid,
        fraud,
      } = action.payload;

      // [ ...state.posts.filter(p => p !== post), { ...post, status: 1 } ] };
      state.products[index].auctionType = treeData.auctionType;
      state.products[index].paymentType = treeData.paymentType;
      state.products[index].forAuction = treeData.forAuction;
      state.products[index].basePrice = BasePrice;
      state.products[index].currenetBid = currenetBid;
      state.products[index].duration = treeData.duration;
      state.products[index].startedAt = treeData.startedAt;
    },

    updateMyCollection(state, action) {
      const data = action.payload.collection;
      const checkRoleExistence = (tokenId) =>
        state.myCollection.some((product, index) => {
          if (product.tokenId == tokenId) {
            return true;
          }
        });

      if (checkRoleExistence(data.tokenId)) {
        state.myCollection.some((product, index) => {
          if (product.tokenId == data.tokenId) {
            state.myCollection[index] = {
              ...state.myCollection[index],
              ...data,
            };
            return true;
          }
        });
      } else {
        state.myCollection = [...state.myCollection, data];
      }
    },

    removeMyCollection(state, action) {
      const data = action.payload.collection;
      const checkRoleExistence = (tokenId) =>
        state.myCollection.some((product, index) => {
          if (product.tokenId == tokenId) {
            return true;
          }
        });

      if (checkRoleExistence(data.tokenId)) {
        state.myCollection.some((product, index) => {
          if (product.tokenId == data.tokenId) {
            state.myCollection.splice(index, 1);
            state.myCollection = [...state.myCollection];
            return true;
          }
        });
      }
    },

    clearMyCollection(state, action) {
      state.myCollection = action.payload.collection;
    },

    saveAccount(state, action) {
      state.accountAddress = action.payload;
    },

    updateMyCollectionStatus(state, action) {
      state.updatingMyCollection = action.payload.status;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const {
  sortByProducts,
  filterProducts,
  updateProduct,
  updateMyCollection,
  updateMyCollectionStatus,
  clearMyCollection,
  removeMyCollection,
  saveAccount,
} = slice.actions;

// ----------------------------------------------------------------------

export function getProducts(products) {
  return async () => {
    const { dispatch } = store;
    dispatch(slice.actions.startLoading());
    try {
      const response = await axiosService.get('/getAllTree');

      dispatch(slice.actions.getProductsSuccess(response.data.data.trees));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getProduct(name: string) {
  return async () => {
    const { dispatch } = store;
    dispatch(slice.actions.startLoading());
    try {
      const response: { data: { product: Product } } = await axios.get(
        '/api/products/product',
        {
          params: { name },
        }
      );
      dispatch(slice.actions.getProductSuccess(response.data.product));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
