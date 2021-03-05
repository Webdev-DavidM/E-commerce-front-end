import axios from 'axios';

export const getProducts = (category) => {
  return async (dispatch) => {
    dispatch({ type: 'PRODUCTS_REQUESTED' });
    try {
      let response = await axios(
        `${process.env.REACT_APP_BACK_END_URL}/products/${category}`
      );
      if (response.status === 200) {
        // Here I will check each products for reviews and give them an average review rating, products with no review
        // will receive a rating of 0, this will allow me to filter the best products if the user wants this to happen
        // via the bets reviews filter on the products screen

        let addRatingToProducts = response.data.map((product) => {
          if (product.reviews.length === 0) {
            return { ...product, rating: 0 };
          }
          if (product.reviews.length === 1) {
            return { ...product, rating: product.reviews[0].rating };
          } else {
            let length = product.reviews.length;
            let average = product.reviews.reduce((total, product) => {
              return total + product.rating;
            }, 0);
            let rating = average / length;
            return { ...product, rating: rating };
          }
        });
        dispatch({ type: 'PRODUCTS_SUCCESS', products: addRatingToProducts });
      }
    } catch (err) {
      dispatch({ type: 'PRODUCTS_FAIL', error: err.response });
    }
  };
};

export const returnAllProducts = () => {
  return async (dispatch) => {
    dispatch({ type: 'ALLPRODUCTS_STARTED' });
    try {
      let response = await axios(
        `${process.env.REACT_APP_BACK_END_URL}/products/all`
      );
      if (response.status === 200) {
        dispatch({
          type: 'ALLPRODUCTS_SUCCESS',
          products: response.data,
        });
      }
    } catch (err) {
      dispatch({
        type: 'ALLPRODUCTS_FAIL',
        error: err.response || err.message,
      });
    }
  };
};

export const getProduct = (id) => {
  return async (dispatch) => {
    dispatch({ type: 'PRODUCTS_REQUESTED' });
    try {
      let response = await axios(
        `${process.env.REACT_APP_BACK_END_URL}/products/product/${id}`
      );
      if (response.status === 200) {
        dispatch({ type: 'PRODUCT_SUCCESS', product: response.data });
      }
    } catch (err) {
      dispatch({ type: 'PRODUCTS_FAIL', error: err.response || err.message });
    }
  };
};

// I have used the rest operator below so I can separate the productId and the rest of the
// data which needs to be sent in the body //

export const submitReview = ({ productId, ...data }) => {
  return async (dispatch) => {
    dispatch({ type: 'REVIEW_SENT' });
    try {
      let response = await axios({
        method: 'post',
        url: `${process.env.REACT_APP_BACK_END_URL}/products/review/${productId}`,
        data: {
          data,
        },
      });
      if (response.status === 200) {
        dispatch({ type: 'REVIEW_SUCCESS', product: response.data });
      }
    } catch (err) {
      dispatch({ type: 'REVIEW_FAIL', error: err.response.data.error });
    }
  };
};

export const clearProducts = () => {
  return { type: 'CLEAR_PRODUCTS' };
};

export const searchProducts = (value) => {
  return { type: 'SEARCH_PRODUCTS', searchValue: value };
};

export const clearReviewStatus = () => {
  return { type: 'CLEAR_REVIEW_STATUS' };
};

export const selectedCategory = (category) => {
  return { type: 'CATEGORY_CHOSEN', category };
};

export const showDrop = (bool) => {
  return { type: 'SHOW_DROP_DOWN', bool };
};

export const showSide = (bool) => {
  return { type: 'SHOW_SIDE_MENU', bool };
};

export const showSubCategory = (bool) => {
  return { type: 'SHOW_SUB_CATEGORY', bool };
};

export const subCatToShow = (subcat) => {
  return { type: 'SUB_CAT_SELECTED', subcat };
};

export const chosenProduct = (id) => {
  return { type: 'CHOSEN_PRODUCT', id };
};

export const clearSelectedProduct = () => {
  return { type: 'CLEAR_SELECTED_PRODUCTS' };
};

export const addToBasket = (itemInfo) => {
  return { type: 'ADD_TO_BASKET', itemInfo };
};

export const updateToBasket = (noPos, quantity) => {
  return { type: 'UPDATE_BASKET', noPos, quantity };
};

export const clearReviewsFilter = (products) => {
  return { type: 'CLEAR_REVIEW_FILTER', products };
};

export const sortByBestReviews = (products) => {
  // This will sort the products which now having rating into order from top to bottom
  let addRatingToProducts = products.map((product) => {
    if (product.reviews.length === 0) {
      return { ...product, rating: 0 };
    }
    if (product.reviews.length === 1) {
      return { ...product, rating: product.rating };
    } else {
      let length = product.reviews.length;
      let average = product.reviews.reduce((a, b) => {
        return a + b.rating;
      }, 0);
      return { ...product, rating: average / length };
    }
  });
  let sortedProductsByRating = addRatingToProducts.sort((a, b) => {
    return a.rating < b.rating ? 1 : -1;
  });
  return { type: 'SORT_BY_BEST_REVIEWS', products: sortedProductsByRating };
};

export const sortViaPriceRange = (lower, higher) => {
  return { type: 'FILTER_PRICE_RANGE', lower, higher };
};

export const showInStock = () => {
  return { type: 'FILTERED_IN_STOCK' };
};

export const productBrands = (brands) => {
  return { type: 'FILTERED_BRANDS', brands };
};

export const chosenBrand = (brand) => {
  getProducts();
  return { type: 'CHOSEN_BRAND', brand };
};

export const deleteItemFromBasket = ({ id, size }) => {
  return { type: 'DELETE_ITEM_FROM_BASKET', id, size };
};

export const emptyBasket = (id) => {
  return { type: 'EMPTY_BASKET' };
};

export const resetFilterAll = (bool) => {
  return { type: 'RESET_ALL_FILTERS', bool };
};

export const updatePriceFilter = ({ price, higher }) => {
  return { type: 'UPDATE_PRICE_RANGE', price, higher };
};

/* Admin action creators to create, delete or edit a product below */

export const closeProductCreatedModal = () => {
  return { type: 'CLOSE_ADMIN_PRODUCT_MODAL' };
};

export const createProduct = ({ admin, formData }) => {
  return async (dispatch) => {
    dispatch({ type: 'CREATE_PRODUCT' });

    try {
      // httpbin allows me to see the formData that I will be sending to the server, this solves the problem
      // of not being able to see inside the formData in the browser usually
      // axios
      //   .post('https://httpbin.org/anything', formData)
      //   .then((res) => console.log(res))
      //   .catch((err) => console.log(err));
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          email: admin.email,
          token: admin.token,
        },
      };
      let res = await axios.post(
        `http://localhost:5000/adminuser/create`,
        formData,
        config
      );
      if (res.status === 201) {
        console.log(res.data);
        dispatch({ type: 'PRODUCT_CREATED_SUCCESS', productId: res.data._id });
      }
    } catch (err) {
      console.log(err.request.response || err.message.response);
      dispatch({
        type: 'PRODUCTS_CREATED_FAIL',
        error: err.response || err.message,
      });
    }
  };
};
