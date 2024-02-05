import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Home.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, filterItem } from '../redux/productSlice';


function Home() {

    const dispatch = useDispatch()

    const { allProducts, loading } = useSelector(state => state.productSlice)

    useEffect(() => {
        dispatch(fetchProducts())

    }, [])


    return (
        <div style={{ width: '100vw', height: 'auto' }}>

            <Carousel>

                <Carousel.Item interval={500}>
                    <img src="https://i.postimg.cc/tRNq2C2V/carousel5.jpg" alt="Sorry...!" style={{ width: '100%', height: '250px' }} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://i.postimg.cc/vZj2yb2Y/carousel7.jpg" alt="Sorry...!" style={{ width: '100%', height: '250px' }} />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://i.postimg.cc/2yD4m8ZZ/carousel2.webp" alt="Sorry...!" style={{ width: '100%', height: '250px' }} />
                </Carousel.Item>

            </Carousel>

            <div className='d-flex justify-content-center align-items-center flex-wrap gap-2 mt-5'>
                <Button onClick={() => dispatch(filterItem("men's clothing"))} className='category_icon' variant='warning'>men's clothing</Button>
                <Button onClick={() => dispatch(filterItem("jewelery"))} className='category_icon' variant='warning'>jewelery</Button>
                <Button onClick={() => dispatch(filterItem("electronics"))} className='category_icon' variant='warning'>electronics</Button>
                <Button onClick={() => dispatch(filterItem("women's clothing"))} className='category_icon' variant='warning'>women's clothing</Button>
                <Button onClick={() => dispatch(fetchProducts())} className='category_icon' variant='warning'>All</Button>
            </div>


            <div className='d-flex justify-content-center align-items-center gap-3 mt-5 flex-wrap mb-5'>

                {
                    allProducts.length > 0 ? allProducts.map(item => (
                        <Card style={{ width: '18rem', height: '30rem' }} className='card_body'>
                            <Card.Img variant="top" src={item.image} style={{ width: '100%', height: '200px' }} />
                            <Card.Body style={{ height: '13rem' }} className='text-center'>
                                <Card.Title style={{ height: '3rem' }} className='mt-3'>{item.title.length > 25 ? item.title.slice(0, 25) + "..." : item.title}</Card.Title>
                                <Card.Text className='mt-2'><h3>$ {item.price}</h3></Card.Text>


                                <i className="fa-regular fa-star-half-stroke text-warning"></i>
                                <i className="fa-regular fa-star-half-stroke text-warning"></i>
                                <i className="fa-regular fa-star-half-stroke text-warning"></i>

                                <Card.Text className='mt-2'><h5>{item.rating.rate}</h5></Card.Text>

                                <Button variant="warning" className='btn_view'>View</Button>
                            </Card.Body>
                        </Card>

                    )) :
                        loading &&
                        <div className='d-flex align-items-center'>
                            <i class="fa-solid fa-spinner fa-spin fa-5x" style={{ color: 'orange' }}></i>
                        </div>

                }

            </div>

        </div>

    )
}

export default Home