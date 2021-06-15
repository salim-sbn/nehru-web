import { CourseDetails } from '../constants/coursesDetails'
import ClassDetailsLayout from '../components/classDetailsLayout'

export const UGCourse = () => {
  return (
        <ClassDetailsLayout classDetails={CourseDetails[0].classDetails} classTitle={CourseDetails[0].title} ind={0}/>
  )
}
export default UGCourse
