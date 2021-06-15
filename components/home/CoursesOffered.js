import { CoursesCard } from '../coursesCard'
import { CourseDetails } from '../../constants/coursesDetails'
import styles from '../layout.module.css'

export const CoursesOffered = () => {
  return (
      <div className={'flex flex-col items-center'}>
            <div className={'flex flex-row justify-center items-center'}>
                <text className={`text-3xl subpixel-antialiased font-semibold ${styles.colorLearnBlue}`}>
                    Courses
                </text>
                <text className={'mx-2 text-3xl subpixel-antialiased font-normal text-gray-500'}>
                    Offered
                </text>
            </div>
            <br/>
            <div className={'flex flex-row flex-wrap mx-4 justify-center items-start'}>
                {CourseDetails.slice(0, 3).map(details => (<CoursesCard
                    { ...details} key={details.id}/>))}
            </div>
            <div className={'flex flex-row flex-wrap mx-4 justify-center items-start'}>
                {CourseDetails.slice(3, 6).map(details => (<CoursesCard
                    { ...details} key={details.id}/>))}
            </div>
            <div className={'flex flex-row flex-wrap mx-4 justify-center items-start'}>
                {CourseDetails.slice(6, 7).map(details => (<CoursesCard
                    { ...details} key={details.id}/>))}
            </div>
        </div>
  )
}
export default CoursesOffered

