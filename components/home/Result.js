import { allResults } from "../../constants/results";

export const Results = () => {
  return (
    <div className={'flex flex-col items-center'}>
    <div className={`m-4 bg-white rounded bordered shadow
    transition duration-500 ease-in-out 
    transform hover:-translate-y-1 hover:scale-105
    `} style={{ width: '90vw' }}>
            <div className={'flex flex-col rounded-t  px-4 p-2 bg-red-800'}>
                <text
                    className={'text-2xl font-middle text-center text-white cursor-default hover:underline'}>Results</text>
            </div>
        <div className={'flex flex-col flex-wrap  px-4 p-2'} style={{overflow:'scroll',maxHeight:300}}>
            {(allResults).map(i => (<a href={i.path} key={i.title} download>
                <div className={'flex flex-row items-center justify-between mx-2 w-100'}>
                    <text className={'font-light text-gray-700 cursor-default hover:underline'}>
                        {i.title}
                    </text>
                </div>
            </a>))}
        </div>
    </div>
    </div>
  )
}
export default Results;
