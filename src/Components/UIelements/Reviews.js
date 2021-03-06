/* NPM packages */

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSTransition } from 'react-transition-group';
import { faStar } from '@fortawesome/free-solid-svg-icons';

/* CSS */

import styles from './Reviews.module.css';

class Reviews extends Component {
  state = {
    showReviews: false,
    averageReviewRating: null,
    stars: [1, 2, 3, 4, 5],
  };

  componentDidMount = () => {
    let { reviews } = this.props;

    let averageRating =
      reviews.length > 0
        ? reviews.reduce((a, b) => {
            return a + b.rating;
          }, 0) / reviews.length
        : 0;
    this.setState({ averageReviewRating: averageRating });
  };

  render() {
    let { reviews } = this.props;

    return (
      <div
        className={styles.reviewcontainer}
        onClick={() =>
          this.setState((prevState) => ({
            showReviews: !prevState.showReviews,
          }))
        }>
        {this.state.averageReviewRating &&
          this.state.stars.map((star, index) => {
            let colour =
              star <= this.state.averageReviewRating ? '#f1c40f' : null;
            return (
              <span key={`star${star}`} style={{ color: `${colour}` }}>
                <FontAwesomeIcon icon={faStar} />
              </span>
            );
          })}
        &nbsp; ({reviews.length})<span>&nbsp;Click for review details</span>
        {reviews.length === 0 && (
          <span>(0) Be the first to review this product</span>
        )}
        <CSSTransition
          in={this.state.showReviews}
          timeout={400}
          classNames='reviews'
          unmountOnExit>
          <div>
            {reviews.map((review, index) => {
              let stars = this.state.stars.map((star, index) => {
                let colour = star <= review.rating ? '#f1c40f' : null;
                return (
                  <span key={`review${index}`} style={{ color: `${colour}` }}>
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                );
              });
              return (
                <div key={`reviewer${index}`}>
                  <hr className={styles.reviewdivider} />
                  {stars} by {review.firstName}
                  <br />
                  {review.comment}
                </div>
              );
            })}
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default Reviews;
