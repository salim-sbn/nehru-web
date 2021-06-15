import { CourseDetails } from '../constants/coursesDetails'
import ClassDetailsLayout from '../components/classDetailsLayout'

export const Certificate = () => {
  return (
        <ClassDetailsLayout classDetails={CourseDetails[6].classDetails} classTitle={CourseDetails[6].title} ind={6}/>
  )
}
export default Certificate
