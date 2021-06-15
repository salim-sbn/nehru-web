import Link from 'next/link'
import TypeProps from 'prop-types'

export const CoursesCard = ({ title, description, coursesList, link }) => {
  return (
        <div className={`m-4 bg-white rounded bordered shadow
        transition duration-500 ease-in-out 
        transform hover:-translate-y-1 hover:scale-105
        `} style={{ width: '25rem' }}>
            <Link href={link || '/'}>
                <div className={'flex flex-col rounded-t card-classes px-4 p-2'}>
                    <text
                        className={'text-2xl font-middle text-white cursor-default hover:underline'}>{title || 'Class X'}</text>
                    <p className={'font-light text-white cursor-default hover:underline'}>
                        {description || 'Nehru Institute of Information Technology'}
                    </p>
                </div>
            </Link>
            <div className={'flex flex-col flex-wrap  px-4 p-2'}>
                {(coursesList || [{
                //   courseName: 'Maths',
                //   link: '/class-x/maths/'
                }]).map(i => (<Link href={i.link} key={i.courseName}>
                    <div className={'flex flex-row items-center justify-between mx-2 w-100'}>
                        <text className={'font-light text-gray-700 cursor-default hover:underline'}>
                            {i.courseName}
                        </text>
                    </div>
                </Link>))}
            </div>
        </div>)
}
CoursesCard.propTypes = {
  title: TypeProps.string,
  description: TypeProps.string,
  coursesList: TypeProps.array,
  link: TypeProps.string
}
