import React from 'react'

const brands = [
  {
    logo: 'imgs/subaru.png',
    name: 'Subaru',
    priceFrom: '$40k'
  },
  {
    logo: 'imgs/volks.png',
    name: 'Volkswagen',
    priceFrom: '$15k'
  },
  {
    logo: 'imgs/toyota.png',
    name: 'Toyota',
    priceFrom: '$27k'
  },
  {
    logo: 'imgs/mercedes.png',
    name: 'Mercedes-Benz',
    priceFrom: '$60k'
  },
  {
    logo: 'imgs/hyundai.png',
    name: 'Hyundai',
    priceFrom: '$30k'
  },
  {
    logo: 'imgs/infiniti.png',
    name: 'Infiniti',
    priceFrom: '$54k'
  }
];

function Best_CarMakes() {
  return (
    <>
      <div className='container py-5 px-lg-5'>
        <h2 className=' fs-2 fw-bold text-center mb-5'>Explore best selling car makes</h2>
        <div className='brandContainer row row-cols-2 row-cols-lg-3 row-gap-4'>
          {brands.map(({logo, name, priceFrom},i)=>(
            <div key={i} className='d-flex align-items-center gap-4 brand col'>
              <img className='bestCarMake' src={logo} alt="Brand Logo" />
              <div>
                <h4 className=' fs-5 fw-bold mb-1'>{name}</h4>
                <p className=' text-muted mb-1'>from {priceFrom}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )  
}

export default Best_CarMakes 