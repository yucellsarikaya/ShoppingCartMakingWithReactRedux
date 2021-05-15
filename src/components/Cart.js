import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'


const Cart = props => {
  const totolPrice = props.cart.reduce((total, item) => (total += item.price), 0)
  return (
    <div>
      <h2>
        <Link to="/">Kitap Listesi</Link> <span>Sepetim</span>
      </h2>
      <h3>Toplam Sepet Tutarı: {totolPrice.toFixed(2)}</h3>
      {
        props.cart.map(book => (
          <div className="book" key={book.id}>
            <img
              src={book.image}
              alt={book.name}
            />
            <div>
              <h4>{book.name}</h4>
              <p>Yazar: {book.author}</p>
              <p>Fiyat: &#8378; {book.price}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Cart);
