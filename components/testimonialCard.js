import PropTypes from 'prop-types'

export const TestimonialCard = ({image}) => {
  return (
            <div className={`m-4 p-2 px-4 card-subject shadow flex flex-col justify-start  rounded  
                            transition duration-500 ease-in-out 
                            transform hover:-translate-y-1 
                            `} style={{ width: '90%' }}>
                      <img src={image || '/images/profile.jpeg'} height={'15vh'} width={'100%'} className={'testimonial-img'} alt={'student'}/>
               </div>
  )
}

TestimonialCard.propTypes = {
  image: PropTypes.string,}
