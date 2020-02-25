import util from '../helpers/util.js'
import bookData from '../helpers/data/bookData.js'

const makeStore = () => {
    const book = bookData.getBook();
    let domString = '';
    domString += `<h2>${book.name}</h2>`;
    domString += '<button class="btn btn-dark" id="add-to-cart-button">Add To Cart</button>'
    util.printToDom('store-container', domString);
    document.getElementById('add-to-cart-button').addEventListener('click', addToCartEvent);
};



const addToCartEvent = () => {
    console.log('added to cart')
    // let domString = '';
    // domString += 'This is the cart';
    // util.printToDom('cart-container', domString)
};

export default { makeStore };