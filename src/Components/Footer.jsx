import React from 'react'

function Footer() {
  return (
    <div className=' container py-4 d-flex flex-column-reverse flex-md-row justify-content-md-between text-center gap-4'>
        <div className=' d-flex flex-column flex-md-row gap-2 gap-md-3'>
            <h4 className=' fs-6 fw-bold'>Privacy Policy</h4>
            <h4 className=' fs-6 fw-bold'>Term of Use</h4>
            <p className=' fw-light'>© 2021 All rights reserved</p>
        </div>

        <div className=' d-flex justify-content-between justify-content-md-start gap-md-3'>
            <div className=' text-muted'>
                <i class="bi bi-globe-americas"></i> English
            </div>
            <div className=' text-muted'>
                ... USD
            </div>
        </div>
    </div>
  )
}

export default Footer