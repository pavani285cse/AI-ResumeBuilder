// export default function Features() {
//     return (
//         <>
//             <style>{`
//                 @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

//                 * {
//                     font-family: 'Poppins', sans-serif;
//                 }
//             `}</style>

//             <div className="relative mx-auto max-w-5xl px-4">
//                 {/* Green background glow */}
//                 <div className="absolute -z-50 size-[400px] -top-10 -left-20 aspect-square rounded-full bg-green-500/30 blur-3xl"></div>

//                 {/* Description */}
//                 <p className="text-slate-800 text-lg text-left max-w-3xl">
//                     Our AI Resume Builder helps you craft professional, ATS-friendly resumes in minutes — tailored to your career goals and job roles.
//                 </p>

//                 <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-10">
                    
//                     {/* Large Preview */}
//                     <div className="md:col-span-2">
//                         <img
//                             alt="AI resume builder preview"
//                             src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-4.png"
//                         />
//                     </div>

//                     {/* Feature Card */}
//                     <div className="md:col-span-1">
//                         <img
//                             alt="AI resume builder feature"
//                             className="hover:-translate-y-0.5 transition duration-300"
//                             src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-3.png"
//                         />

//                         <h3 className="text-[24px]/7.5 text-slate-800 font-medium mt-6">
//                             Smarter resumes with AI-powered insights
//                         </h3>

//                         <p className="text-slate-600 mt-2">
//                             Generate impactful resumes with role-based suggestions, real-time improvements, and modern templates.
//                         </p>

//                         <a
//                             href="/app"
//                             className="group flex items-center gap-2 mt-4 text-green-600 hover:text-green-700 transition"
//                         >
//                             Build your resume now
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="24"
//                                 height="24"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 className="size-5 group-hover:translate-x-0.5 transition duration-300"
//                                 aria-hidden="true"
//                             >
//                                 <path d="M7 7h10v10"></path>
//                                 <path d="M7 17 17 7"></path>
//                             </svg>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
// 
import React from "react";

export default function Features() {
  return (
    <section className="relative py-24 overflow-hidden bg-green-50">
      
      {/* Soft green glow */}
      <div className="absolute -top-40 -left-40 size-[500px] rounded-full bg-green-200/40 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 size-[500px] rounded-full bg-green-300/30 blur-3xl" />
        {/* Content */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Images */}
          <div className="relative flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="resume builder"
              className="w-64 rounded-2xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="working on resume"
              className="w-72 rounded-2xl shadow-xl absolute -bottom-10 -right-10"
            />
          </div>

          {/* Right Features */}
          <div className="space-y-6">
            
            {/* Feature 1 */}
            <div className="flex gap-4 p-6 rounded-xl border border-transparent hover:border-green-400 transition">
              <div className="size-10 flex items-center justify-center rounded-full bg-green-100 text-green-700">
                🔑
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">
                  AI Resume Insights
                </h4>
                <p className="text-slate-600 mt-1">
                  Smart suggestions, keyword matching, and role-based improvements.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4 p-6 rounded-xl border border-transparent hover:border-green-400 transition">
              <div className="size-10 flex items-center justify-center rounded-full bg-green-100 text-green-700">
                🛡️
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">
                  Secure & Private
                </h4>
                <p className="text-slate-600 mt-1">
                  Your resume data is protected with industry-grade security.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4 p-6 rounded-xl border border-transparent hover:border-green-400 transition">
              <div className="size-10 flex items-center justify-center rounded-full bg-green-100 text-green-700">
                ⬇️
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">
                  Download & Share
                </h4>
                <p className="text-slate-600 mt-1">
                  Export ATS-friendly PDFs and share instantly.
                </p>
              </div>
            </div>

          </div>
        </div>
    </section>
  );
}

