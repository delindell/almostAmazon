import util from '../helpers/util.js'
import bookData from '../helpers/data/bookData.js'
import cart from './cart.js'

const makeStore = () => {
    const book = bookData.getBook();
    let domString = '';
    domString += `<h2>${book.name}</h2>`;
    domString += '<button class="btn btn-dark" id="add-to-cart-button">Add To Cart</button>'
    util.printToDom('store-container', domString);
    document.getElementById('add-to-cart-button').addEventListener('click', addToCartEvent);
};



const addToCartEvent = () => {
    const book = bookData.getBook();
    cart.addToCart(book);
};

export default { makeStore };