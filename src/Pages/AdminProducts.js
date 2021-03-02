/* NPM packages */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

/* CSS */

import styles from './Admin.module.css';

/* Action creators */

import { logUserOut } from '../Actions/users.js';

class AdminProducts extends Component {
  editProduct = (id) => {};

  deleteProduct = (id) => {};

  createProduct = () => {
    this.props.history.push('/admin/create');
  };

  chosenCategory = (category) => {};

  logOut = () => {
    this.props.logOut();
    this.props.history.push('/');
  };

  render() {
    console.log(this.props.categories);
    let { categories } = this.props;
    let categoryNames = Object.keys(categories);
    console.log(categories, categoryNames);
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
            <button>{cat}</button>
          ))}
        </div>
        <div className={styles.productlist}>
          <div className={styles.productitem}>
            <span>ID: 32879741</span>
            <span>Name: Vitus bike</span>
            <span>Price: £599</span>
            <span>SubCategory: Road Bikes</span>
            <span>Brand: Vitus</span>
            <div className={styles.buttoncontainer}>
              <button className={styles.editbtn}>Edit</button>
              <button className={styles.deletebtn}>Delete</button>
            </div>
          </div>
          <div className={styles.productitem}>d</div>
          <div className={styles.productitem}>d</div>
          <div className={styles.productitem}>d</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    categories: state.products.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // deleteItem:,
    // editItem:
    logOut: () => dispatch(logUserOut()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AdminProducts)
);
