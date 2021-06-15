import { CourseDetails } from '../constants/coursesDetails'
import ClassDetailsLayout from '../components/classDetailsLayout'

export const Degree = () => {
  return (
        <ClassDetailsLayout classDetails={CourseDetails[5].classDetails} classTitle={CourseDetails[5].title} ind={5}/>
  )
}
export default Degree
