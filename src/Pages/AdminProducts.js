/* NPM packages */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

/* CSS */

import styles from './Admin.module.css';

/* Action creators */

import { logUserOut } from '../Actions/users.js';
import { getProducts } from '../Actions/products.js';

class AdminProducts extends Component {
  componentDidMount = () => {
    let { displayCategory } = this.props;
    displayCategory('cycle');
  };

  editProduct = (id) => {};

  deleteProduct = (id) => {};

  createProduct = () => {
    this.props.history.push('/admin/create');
  };

  chosenCategory = (cat) => {
    let { displayCategory } = this.props;
    displayCategory(cat);
  };

  logOut = () => {
    this.props.logOut();
    this.props.history.push('/');
  };

  render() {
    let { categories, products } = this.props;
    let categoryNames = Object.keys(categories);

    return (
      <div className={styles.adminproducts}>
        <header className={styles.title}>
          <p>ADMIN SECTION</p>

          <button
            onClick={() => this.createProduct()}
            className={styles.createbtn}>
            Create product
          </button>
          <button onClick={() => this.logOut()} className={styles.logoutbtn}>
            Log out
          </button>
        </header>
        <div className={styles.categorybtns}>
          <p>CATEGORIES</p>
          {categoryNames.map((cat) => (
            <button onClick={() => this.chosenCategory(cat)}>{cat}</button>
          ))}
        </div>
        <div className={styles.productlist}>
          {products.map((product, index) => {
            return (
              <div key={index} className={styles.productitem}>
                <span>Name: {product.name}</span>
                <span>Price: £{product.price}</span>
                <span>Category: {product.subcategory}</span>
                <span>Brand: {product.brand}</span>
                <div className={styles.buttoncontainer}>
                  <button className={styles.editbtn}>Edit</button>
                  <button className={styles.deletebtn}>Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    categories: state.products.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayCategory: (cat) => dispatch(getProducts(cat)),
    logOut: () => dispatch(logUserOut()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AdminProducts)
);
