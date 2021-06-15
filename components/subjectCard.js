import Link from 'next/link'
import style from './layout.module.css'
import TypeProps from 'prop-types'

export const SubjectCard = ({ bg, link, title }) => {
  return (
        <Link href={link || '/'}>
            <div className={`m-4 card-subject ${bg} shadow flex flex-col p-4 py-6 justify-start h-40 rounded  
                            transition duration-500 ease-in-out 
                            transform hover:-translate-y-1 hover:scale-105
                            `} style={{ width: '30rem' ,height:'15rem' }}>
                <text
                    className={`text-2xl font-semibold cursor-default hover:underline mx-4 m-2 ${style.colorLearnBlue}`}>
                    {title || 'Maths'}
                </text>
            </div>
        </Link>)
}
SubjectCard.propTypes = {
  bg: TypeProps.string,
  link: TypeProps.string,
  title: TypeProps.string
}
