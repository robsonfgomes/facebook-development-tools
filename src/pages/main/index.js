import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './style.css';

export default class Main extends Component {  
    
state = {
    products: [],
    productInfo: {},
    page: 1,
}

//Executado sempre que o component é exibido na página
componentDidMount() {        
    this.loadProducts();
}

//Usado arrow funtions pois é uma função própria, assim
//não se perde o contexto do "this"
loadProducts = async (page = 1) => {    
    const response = await api.get(`/products?page=${page}`);    
    
    const { docs, ...productInfo } = response.data;

    this.setState({ products: docs, productInfo, page });    
}

prevPage = () => {
    //Recuperando as variáveis do estado
    const { page, productInfo } = this.state;

    if (page == 1) return;

    const pageNumber = page - 1;    

    this.loadProducts(pageNumber);
}

nextPage = () => {
    //Recuperando as variáveis do estado
    const { page, productInfo } = this.state;

    if (page == productInfo.pages) return;

    const pageNumber = page + 1;    

    this.loadProducts(pageNumber);
}

render() {
    const { products, page, productInfo } = this.state;

    return (
        <div>
            <Header />
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <Link to={`/products/${product._id}`}>See more</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page == 1} onClick={this.prevPage}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button disabled={page == productInfo.pages} onClick={this.nextPage}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </div>
    )
}
}