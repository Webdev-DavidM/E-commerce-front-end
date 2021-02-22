/* NPM packages */

import React, { Component } from 'react';
import { connect } from 'react-redux';

/* CSS */

import styles from './ShoppingBasket.module.css';

/* Components */

import CheckoutItem from '../Components/UIelements/CheckoutItem';

/* Action creators */

import { addToBasket } from '../Actions/products.js';

class ShoppingBasket extends Component {
  state = {
    error: '',
  };

  isUserSignedIn = () => {
    let token = JSON.parse(localStorage.getItem('userInfo'));
    if (!token) {
      this.setState({ error: 'Please sign in or create an account to buy' });
    } else {
      this.props.history.push('check-out');
    }
  };
  render() {
    let { basket, basketTotal } = this.props;

    let total = basketTotal();

    return (
      <div className={styles.shoppingbasket}>
        <h2>Your Shopping Basket</h2>
        {this.state.error !== '' && (
          <div className={styles.error}>{this.state.error}</div>
        )}
        <div className={styles.buttoncontainer}>
          {' '}
          <button
            className={styles.buttonshopping}
            onClick={() => this.props.history.push('/')}>
            Continue Shopping
          </button>
          <button
            disabled={basket.length === 0}
            onClick={() => this.isUserSignedIn()}
            className={styles.buttoncheckout}>
            Proceed to checkout
          </button>
          <br />
        </div>
        {basket.map((item, index) => {
          return (
            !item.token && (
              <div key={index}>
                <CheckoutItem
                  details={item}
                  key={index}
                  id={index}
                  localStorageKey={`item${index}`}
                />
                <hr></hr>
              </div>
            )
          );
        })}
        {basket.length === 0 && (
          <h2 style={{ color: '#e74c3c' }}>Basket empty </h2>
        )}
        <h1
          style={{ textAlign: 'right', marginRight: '4rem', color: '#27ae60' }}>
          Total price: £{total.Total}
        </h1>
        <button
          disabled={basket.length === 0}
          className={styles.buttoncheckout}
          onClick={() => this.isUserSignedIn()}>
          Proceed to checkout
        </button>
        {this.state.error !== '' && (
          <div className={styles.error}>{this.state.error}</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    basket: state.products.basket,
    basketTotal: () => {
      let Total = 0;
      if (state.products.basket.length !== 0) {
        Total = state.products.basket
          .map((product) => {
            return product.price * product.quantity;
          })
          .reduce((total, itemTotal) => {
            return total + itemTotal;
          });
      }

      return { Total };
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBasket: (item) => dispatch(addToBasket(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBasket);
