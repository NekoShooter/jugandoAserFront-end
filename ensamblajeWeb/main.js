const signals= {};
const connect = {};

connect ['.navbar-email'] ='.desktop-menu';
connect ['.menu'] ='.mobile-menu';
connect ['.navbar-shopping-cart'] ='.product-detail-shopping-cart';
const productInfo = connect ['.product-detail-close'] = '.product-detail-info';


function connections(connect_ref){
    for(let SLOT in connect_ref){
      const SIGNAL = connect_ref[SLOT];
      const slot = document.querySelector(`${SLOT}`);
      signals[SIGNAL] = document.querySelector(`${SIGNAL}`);
      
      showEventListener(slot, signals[SIGNAL], SIGNAL);}}


function showEventListener(slot, signal, exception, __function__ = undefined){
    slot.addEventListener('click', ()=>{
        signal.classList.toggle('visible');
        for(let s in signals)
            if(s != exception) signals[s].classList.add('visible');
            
        if(typeof(__function__) == 'function')  __function__();}); }


const bicis = ['https://m.media-amazon.com/images/I/81-L-Q-0Q1L._AC_SX569_.jpg',
               'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
               'https://http2.mlstatic.com/D_NQ_NP_671487-MLM50849732725_072022-O.webp',
               'https://resources.claroshop.com/medios-plazavip/mkt/5bd8e4bf90990_1jpg.jpg'];


function products(){
    const productos = new Array();
    for(let img of bicis)
        productos.push({['name']:'Bike', ['price']:120, ['img']:img});
    return productos;}


function connectProductRender(selector, product){
    const img = document.querySelector('.img-product-detail-info');
    const slot = document.querySelector(`.${selector}`);

    showEventListener(slot, signals[productInfo], productInfo,()=>{
        signals[productInfo].classList.remove('visible');
        img.setAttribute('src', product.img);});}


function productRender(arr){
    let idx = 0;
    const contenedor = document.querySelector('.cards-container');
    
    for(const product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.classList.add(`N${idx}`);
        
        const img = document.createElement('img');
        img.setAttribute('src', product.img);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const div = document.createElement('div');
        div.innerHTML =`<p>\$${product.price}</p><p>${product.name}</p>`;

        const figure = document.createElement('figure');
        figure.innerHTML = '<img src="./icons/bt_add_to_cart.svg">';

        productInfo.append(div,figure);
        productCard.append(img,productInfo);
        contenedor.appendChild(productCard);

        connectProductRender(`N${idx}`,product);
        idx++;}}

/* main */

connections(connect);
productRender(products());