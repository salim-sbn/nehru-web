import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import { AllKeys } from '../../constants/coursesKey'
import { CourseDescription } from '../../constants/coursesDetails'
import PropTypes from 'prop-types'

export async function getStaticPaths () {
  return {
    paths: AllKeys.map(key => ({
      params: {
        id: key
      }
    })),
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  return {
    props: {
      params
    }
  }
}

const Courses = ({ params }) => {
  const info = params.id.toUpperCase().replaceAll('-',' ').replaceAll('_','.')
  return (
        <Layout>
            <Head>
                <title>{`Nehru Institute | ${info}`}</title>
            </Head>
            <div className={'grid grid-cols-1 md:grid-cols-2'}>
                <div className={'bg-white px-4'}>
                    <br/>
                    <text className={`text-3xl subpixel-antialiased font-semibold ${styles.colorLearnBlue}`}>
                        {info}
                    </text>
                    {/* <br/> */}
                    <br/>
                    <br/>
                    <text className={'text-gray-700 font-light'}>
                        {CourseDescription[params.id].description}
                    </text>
                    <br/>
                    <br/>
                    <text className={`text-3xl subpixel-antialiased font-semibold ${styles.colorLearnBlue}`}>
                        Why? {' '}
                    </text>
                    <text className={'text-3xl subpixel-antialiased font-normal text-gray-500'}>
                        Nehru Institute of Information Technology for {info}
                    </text>
                    <br/>
                    <br/>
                    <text className={'text-gray-700 font-light'}>
                                      A college education teaches discipline to a student. 
                                      They understand the concept of teamwork, understand the importance of communication and go 
                                      through a comprehensive learning. 
                                      Attending a college paves the way for a better career. 
                                      Many students when they enter college are often confused about what they want to do in life,
                                      but by the time they step out all their doubts get clarified.
                                      <br/>Nehru Institute of Information Technology, Araria inculcates skills in their students by 
                                      imparting quality education and by creating a vibrant learning atmosphere through a lot of
                                      extra-curricular activities.<br/>College Education teaches you how to do analytical thinking; 
                                      how to understand the complexities and above all how to communicate your innovative ideas to your colleagues 
                                      and peers which people who never went to college can never excel in!
                    </text>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                <div className={'flex flex-row items-center justify-center w-100'}>
                    <Link href={'/register'} key={'register'}>
                        <button className={`${styles.learnBlue} text-white text-4xl h2 p-2 px-4 m-2 rounded-lg transition duration-500 ease-in-out transform hover:scale-105 shadow`}>
                            Register For Queries
                        </button>
                    </Link>
                </div>
                </div>
                <div className={'flex flex-col items-center'}>
                    <br/>
                    <img src="/svgs/teaching.svg" alt={'teaching'} className={'p-4'}/>
                </div>
            </div>
        </Layout>
  )
}

Courses.propTypes = {
  params: PropTypes.objectOf(PropTypes.string)
}

export default Courses
