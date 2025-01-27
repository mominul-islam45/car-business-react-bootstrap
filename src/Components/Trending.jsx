import React from 'react'
import {Card, Button} from 'react-bootstrap'

const trending = [
    {
        img: 'imgs/audi-s4.png',
        title: 'Used 2019 Audi S4 Premium Plus',
        miles: '11 475 Miles',
        transmission: 'AWD',
        cylinder: '4-Cylinder Turbo',
        price: '$41,400',
        seller: 'Bestseller'
    },
    {
        img: 'imgs/subaru-forester.png',
        title: '2013 Subaru Forester Premium Plus',
        miles: '40 475 Miles',
        transmission: 'AWD',
        cylinder: '4-Cylinder Turbo',
        price: '$22,500',
        seller: 'Bestseller'
    },
    {
        img: 'imgs/bmw-x3.png',
        title: 'Used 2010 BMW X3 Sport package',
        miles: '20 850 Miles',
        transmission: 'AWD',
        cylinder: '4-Cylinder Turbo',
        price: '$39,200',
        seller: 'Bestseller'
    }
]

function Trending() {
  return (
    <>
        <div className=' container py-3'>
            <h3 className='text-center fs-2 fw-bold pb-3'>Trending near you</h3>
            <div className='d-flex flex-column flex-md-row justify-content-center align-items-stretch gap-5 gap-md-4'>
                {trending.map(({img, title, miles, transmission, cylinder, price, seller})=>(
                    <Card className=' border-0 card'>
                        <Card.Img src={img} className=' rounded-4'/>
                        <Card.Body>
                            <Card.Title className='fw-bold'>{title}</Card.Title>
                            <Card.Subtitle className=' text-muted mt-1'>{miles}</Card.Subtitle>
                            <Card.Text className=' text-muted mt-3'>{transmission} . {cylinder}</Card.Text>
                            <div className='d-flex gap-2'>
                                <Button className='btn-1'>{price}</Button>
                                <Button className='btn-2'>{seller}</Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    </>
  )
}

export default Trending