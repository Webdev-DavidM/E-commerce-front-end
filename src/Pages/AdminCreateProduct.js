/* NPM packages */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/* CSS */

import styles from './AdminEditProduct.module.css';

/* Action creators */

import { createProduct } from '../Actions/products.js';

class AdminCreateProduct extends Component {
  state = {
    name: '',
    price: 0,
    imagesToDisplay: [],
    imagesArrayForMulter: [],
    brand: '',
    small: '',
    medium: '',
    large: '',
    category: '',
    subcategory: [],
    chosenSubCat: '',
    description: '',
    errors: [],
    colour: '',
  };

  handleSubmit = (e) => {
    this.setState({ errors: [] });
    e.preventDefault();
    let { createNewProduct, user } = this.props;
    const formData = new FormData();
    this.setState({ errors: [] });

    let readyToSubmit = true;

    if (this.state.name === '') {
      this.setState((prevState) => ({
        errors: [...prevState.errors, 'Please provide a value for name'],
      }));
      readyToSubmit = false;
    }
    if (
      this.state.small === '' ||
      !Number.isInteger(parseInt(this.state.small))
    ) {
      this.setState((prevState) => ({
        errors: [...prevState.errors, 'Please provide a value for small'],
      }));
      readyToSubmit = false;
    }
    if (
      this.state.medium === '' ||
      !Number.isInteger(parseInt(this.state.medium))
    ) {
      this.setState((prevState) => ({
        errors: [...prevState.errors, 'Please provide a value for medium'],
      }));
      readyToSubmit = false;
    }
    if (
      this.state.large === '' ||
      !Number.isInteger(parseInt(this.state.large))
    ) {
      this.setState((prevState) => ({
        errors: [...prevState.errors, 'Please provide a value for large'],
      }));
      readyToSubmit = false;
    }
    if (this.state.colour === '') {
      this.setState((prevState) => ({
        errors: [...prevState.errors, 'Please provide a value for colour'],
      }));
      readyToSubmit = false;
    }
    if (
      this.state.price === 0 ||
      !Number.isInteger(parseInt(this.state.price))
    ) {
      this.setState((prevState) => ({
        errors: [...prevState.errors, 'Please provide a value for price'],
      }));
      readyToSubmit = false;
    }

    if (this.state.imagesArrayForMulter.length === 0) {
      this.setState((prevState) => ({
        errors: [...prevState.errors, 'Please provide at least one image'],
      }));
      readyToSubmit = false;
    }

    if (this.state.brand === '') {
      this.setState((prevState) => ({
        errors: [...prevState.errors, 'Please provide a value for brand'],
      }));
      readyToSubmit = false;
    }

    if (
      this.state.stock === 0 ||
      !Number.isInteger(parseInt(this.state.price))
    ) {
      this.setState((prevState) => ({
        errors: [...prevState.errors, 'Please provide a value for stock'],
      }));
      readyToSubmit = false;
    }

    if (this.state.category === '') {
      this.setState((prevState) => ({
        errors: [...prevState.errors, 'Please provide a value for category'],
      }));
      readyToSubmit = false;
    }

    if (this.state.description === '') {
      this.setState((prevState) => ({
        errors: [...prevState.errors, 'Please provide a value for description'],
      }));
      readyToSubmit = false;
    }
    if (this.state.chosenSubCat === '') {
      this.setState((prevState) => ({
        errors: [...prevState.errors, 'Please provide a value for subcategory'],
      }));
    }
    if (readyToSubmit) {
      let stock =
        parseInt(this.state.small) +
        parseInt(this.state.medium) +
        parseInt(this.state.large);
      // Note you have to append each key/value pair individually
      formData.append('name', this.state.name);
      formData.append('price', this.state.price);
      formData.append('description', this.state.description);
      formData.append('size', this.state.size);
      formData.append('reviews', []);
      formData.append('category', this.state.category);
      formData.append('subcategory', this.state.chosenSubCat);
      formData.append('stock', stock);
      formData.append('colour', this.state.colour);
      formData.append('size', {
        small: this.state.small,
        medium: this.state.medium,
        large: this.state.large,
      });
      formData.append('brand', this.state.brand);
      formData.append('image', this.state.imagesArrayForMulter[0]);

      let data = {
        formData: formData,
        admin: { email: user.email, token: user.token },
      };
      createNewProduct(data);
    }
  };

  removeImage = (index) => {
    let imagesToDisplay = [...this.state.imagesToDisplay];
    let imagesToSendToMulter = [...this.state.imagesArrayForMulter];
    imagesToDisplay.splice(index, 1);
    imagesToSendToMulter.splice(index, 1);
    this.setState({
      imagesToDisplay: imagesToDisplay,
      imagesArrayForMulter: imagesToSendToMulter,
    });
  };

  updateCat = (e) => {
    if (e.target.value !== 'blank') {
      let subCats = Object.keys(this.props.categories[e.target.value]);
      let allSubCats = [];
      subCats.forEach((cat) => [
        this.props.categories[e.target.value][cat].forEach((subsubcat) => {
          return allSubCats.push(subsubcat);
        }),
      ]);
      console.log(allSubCats);
      this.setState({ category: e.target.value, subcategory: allSubCats });
    }
  };

  updateSubCat = (e) => {
    this.setState({ chosenSubCat: e.target.value });
  };

  handleChange = (e) => {
    if (e.target.files) {
      this.setState({
        imagesArrayForMulter: [
          ...this.state.imagesArrayForMulter,
          e.target.files[0],
        ],
      });
      const fileReader = new FileReader();
      fileReader.onload = () => {
        this.setState({
          imagesToDisplay: this.state.imagesToDisplay.concat(fileReader.result),
        });
      };
      fileReader.readAsDataURL(e.target.files[0]);
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  render() {
    let { categories } = this.props;
    let options = Object.keys(categories).map((category) => (
      <option name='category' value={category}>
        {category}
      </option>
    ));
    options.unshift(
      <option selected value='blank'>
        -- select an option --{' '}
      </option>
    );

    console.log(options);

    return (
      <>
        <div className={styles.editproductcontainer}>
          <h4>
            <button class={styles.gobackbtn}>
              <Link style={{ color: '#ecf0f1' }} to='/admin'>
                Go back
              </Link>{' '}
            </button>
          </h4>
          <h2>CREATE PRODUCT</h2>
          <div className={styles.editformcontainer}>
            <form onSubmit={this.handleSubmit} encType='multipart/form-data'>
              <label>
                Name:
                <input
                  name='name'
                  value={this.state.value}
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
              <label>
                Price
                <input
                  type='text'
                  name='price'
                  value={this.state.value}
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
              Please upload the images below
              <label for='uploadbtn' class={styles.uploadbtn}>
                {' '}
                Upload Images
              </label>
              <input
                style={{ display: 'none' }}
                onChange={(e) => this.handleChange(e)}
                id='uploadbtn'
                type='file'
                accept='.jpg, .png,.jpeg'
                multiple=''
              />
              <div class={styles.imagecontainer}>
                {this.state.imagesToDisplay.map((image, index) => (
                  <div
                    onClick={() => this.removeImage(index)}
                    className={styles.imagebtn}>
                    <div class={styles.imagehover}>X</div>
                    <img
                      style={{
                        height: '4rem',
                        width: '6rem',
                        padding: '0 0.5rem',
                      }}
                      src={image}
                      alt=''></img>
                  </div>
                ))}
              </div>
              <label>
                Brand
                <input
                  type='text'
                  name='brand'
                  value={this.state.value}
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
              <label>
                Colour
                <input
                  type='text'
                  name='colour'
                  value={this.state.value}
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
              <label>
                Stock :
                {this.state.small !== '' &&
                this.state.medium !== '' &&
                this.state.large !== ''
                  ? parseInt(this.state.small) +
                    parseInt(this.state.medium) +
                    parseInt(this.state.large)
                  : null}
                <br />
                Please enter amounts in each size below
                <div class={styles.sizecontainer}>
                  <div class={styles.smallcontainer}>
                    <span> Small </span>
                    <input
                      class={styles.sizeinput}
                      type='text'
                      name='small'
                      value={this.state.value}
                      onChange={(e) => this.handleChange(e)}
                    />
                    <span> Medium</span>
                    <input
                      class={styles.sizeinput}
                      type='text'
                      name='medium'
                      value={this.state.value}
                      onChange={(e) => this.handleChange(e)}
                    />
                    <span> Large </span>
                    <input
                      class={styles.sizeinput}
                      type='text'
                      name='large'
                      value={this.state.value}
                      onChange={(e) => this.handleChange(e)}
                    />
                  </div>
                </div>
              </label>
              <label>
                Category
                <br />
                <select
                  class={styles.dropdown}
                  value={this.state.category}
                  onChange={(e) => this.updateCat(e)}>
                  {options}
                </select>
              </label>
              <label>
                Subcategory
                <br />
                <select
                  class={styles.dropdown}
                  disabled={this.state.subcategory.length === 0}
                  value={this.state.chosenSubCat}
                  onChange={(e) => this.updateSubCat(e)}>
                  <option value='blank'>-- select an option -- </option>
                  {this.state.subcategory.map((subcategory) => (
                    <option name='subcategory' value={subcategory}>
                      {subcategory}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Description
                <input
                  type='text'
                  name='description'
                  value={this.state.value}
                  onChange={(e) => this.handleChange(e)}
                />
              </label>
              <input class={styles.submitbtn} type='submit' value='Submit' />
            </form>
            {this.state.errors &&
              this.state.errors.map((error) => (
                <p className={styles.error}>{error}</p>
              ))}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.products.categories,
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewProduct: (data) => dispatch(createProduct(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AdminCreateProduct)
);
