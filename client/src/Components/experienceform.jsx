import React from 'react'

const Experienceform = ({data, onChange,setResumeData}) => {
    const addExperience = () => {
        const newExperience={
            company: "",
            position: "",
            start_date: "",
            end_date: "",
            description: "",
            is_current: false,
        };
        onChange(prev=>[...prev,newExperience]);
    }
    const removeExperience = (index) => {
        const updated=data.filter((_,i)=>i!==index);
        onChange(updated);
    }
    const updateExperience = (index, field, value) => {
        const updated = [...data];
        updated[index] = { ...updated[index], [field]: value };
        onChange(updated);
    }
  return (
    <div classNmae='space-y-4'>
        <div className='flex items-center justify-between'>
            <div>
                <h3 classNmae='flex items-center gap-2 text-lg font-semibold text-gray-900'>Professional Experience</h3>
                <p className='text-sm text-gray-500'>Add your work experience for you resume here</p>
            </div>
            <button className='flexitems-center gap-2 px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disabled:opacity-50'>
              <Plus className='size-4'/>
              Add Experience  
            </button>       
        </div>
    </div>
  )
}

export default Experienceform
