import React from 'react'
import { Card, CardBody, CardFooter, CardImg, CardText, CardTitle } from 'react-bootstrap'

const reviews =[
    {
        img: 'imgs/review1.png',
        r_title: '2021 Cadillac Escalade',
        r_des: 'The 2021 Escalade is a technological showcase and a worthy claimant of the flagship American luxury vehicle title.',
        reviewer_img: 'imgs/reviewer1.png',
        reviewer_name: 'Hironaka Hiroe',
        reviewer_desig: 'Chief Editor',
        reviewer_total_review: 98,
        reviewer_rating: 4.91
    },
    {
        img: 'imgs/review2.png',
        r_title: '2021 Hyundai Elantra',
        r_des: 'If developing a car was a marathon technological showcase, Hyundai didn’t run the last mile with the 2021 Elantra. ',
        reviewer_img: 'imgs/reviewer2.png',
        reviewer_name: 'Debashis Bhuiyan',
        reviewer_desig: 'News Editor',
        reviewer_total_review: 93,
        reviewer_rating: 4.65
    },
    {
        img: 'imgs/review3.png',
        r_title: '2021 Mercedes-Benz GLA250',
        r_des: 'The new entry point into Mercedes-Benz’s SUV lineup is bigger and improved, but still features a frustrating powertrain. ',
        reviewer_img: 'imgs/reviewer3.png',
        reviewer_name: 'Lew Silverton',
        reviewer_desig: 'Chief Editor',
        reviewer_total_review: 35,
        reviewer_rating: 4.55
    }
]

function RecentReviews() {
  return (
    <div className=' container py-4'>
        <h2 className=' fs-3 fw-bold text-center mb-3'>Recent reviews</h2>
        <div className=' d-flex flex-column flex-lg-row gap-5 gap-lg-0'>
            {reviews.map(({img, r_title, r_des, reviewer_img, reviewer_name, reviewer_desig, reviewer_total_review, reviewer_rating},i)=>(
                <Card key={i} className=' border-0'>
                    <CardBody>
                        <CardImg src={img} className=' rounded-4 mb-2'/>
                        <CardTitle className=' fw-bold fs-4'>{r_title}</CardTitle>
                        <CardText className=' text-muted'>{r_des}</CardText>
                    </CardBody>
                    <CardFooter className=' border-0 bg-white d-flex justify-content-between m-2'>
                        <div className=' d-flex align-items-center gap-3'>
                            <img src={reviewer_img} alt="" className='reviewer_img'/>
                            <div>
                                <h4 className=' fs-6 fw-bold mb-1'>{reviewer_name}</h4>
                                <p className=' mb-0'>{reviewer_desig}</p>
                            </div>
                        </div>
                        <div className=' d-flex gap-1'>
                            <i class="bi bi-star-fill text-warning"></i>
                            <span className=' fw-bold'>{reviewer_rating}</span>
                            <span className=' text-muted'>({reviewer_total_review})</span>
                        </div>
                    </CardFooter>
                </Card>
            ))}
        </div>
    </div>
  )
}

export default RecentReviews