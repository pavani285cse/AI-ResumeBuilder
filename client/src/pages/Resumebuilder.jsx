import React, { useState,useEffect } from 'react'
import { dummyResumeData } from '../assets/assets'
import { ArrowLeftIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
const Resumebuilder = () => {
  const [resumeData,setResumeData]=useState({
    _id: '',
    title:'',
    personal_info:'',
    experience:[],
    education:[],
    skills:[],
    projects:[],
    template: "classic",
    public: false,
  })
  const loadExistingResume = async(resumeId) => {
    const resume=dummyResumeData.find(resume=> resume._id === resumeId)
    if(resume){
      setResumeData(resume)
      document.title=resume.title
    }
  }
  useEffect(()=>{
    loadExistingResume()
  },[])
  return (
    <div>
      <div>
        <Link to={'/app'} className='inline-flex gap-2 items-center text text-slate-500 hover:text-slate-700 transition-all'>
          <ArrowLeftIcon className='size-4'/>Back to Dashboard
        </Link>
      </div>
    </div>
  )
}

export default Resumebuilder
