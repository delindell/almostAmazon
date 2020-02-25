import util from '../helpers/util.js'

const cartToDom = () => {
    let domString = '';
    domString += 'This is the cart';
    util.printToDom('cart-container', domString)
};

export default { cartToDom };