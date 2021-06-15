import { CourseDetails } from '../constants/coursesDetails'
import ClassDetailsLayout from '../components/classDetailsLayout'

export const ClassVII = () => {
  return (
        <ClassDetailsLayout classDetails={CourseDetails[4].classDetails} classTitle={CourseDetails[4].title} ind={4}/>
  )
}
export default ClassVII
