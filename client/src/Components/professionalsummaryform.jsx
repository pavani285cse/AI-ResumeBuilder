import React from 'react'
import { Sparkles } from 'lucide-react'
const ProfessionalSummaryForm = ({data, onChange,setResumeData}) => {
  return (
    <div classNmae='space-y-4'>
        <div className='flex items-center justify-between'>
            <div>
                <h3 classNmae='flex items-center gap-2 text-lg font-semibold text-gray-900'>Professional Summary</h3>
                <p className='text-sm text-gray-500'>Add summary for you resume here</p>
            </div>
            <button className='flexitems-center gap-2 px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disabled:opacity-50'>
              <Sparkles className='size-4'/>
              AI Generate  
            </button>       
        </div>
        <div className='mt-6'>
          <textarea values={data || ""} onChange={(e)=>onChange(e.target.value)} rows={7} classNmae='w-full p-3 px-4 mt-2 border text-sm border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none' placeholder='Write a compelling professional summary that highlights your skills and experience'/>
          <p className='text-xs text-gray-500 max-w-4/5 mx-auto text-center'>Tip:Kepp it concise (3-4 sentences) focus on your most relevant achiivements and skills.</p>
          
        </div>
    </div>
  )
}

export default ProfessionalSummaryForm