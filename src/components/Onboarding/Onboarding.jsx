import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import backgroundImage from '../../assets/formBg.png'
function Onboarding({ visible,handleClick }) {
    const [onboardingData, setOnBoardData] = useState({
        fullname: '',
        nickname: '',
        email: '',
        phoneNo: '',
        gender: '',
        profilePhoto: '',
        techstack: '',
        acknowledgement: true,
    })
    const handleSubmit = e => {
        e.preventDefault();
        handleClick();
        alert(JSON.stringify(onboardingData))
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setOnBoardData({
            ...onboardingData,
            [name]: type === 'checkbox' ? checked : value
        })
        console.log(onboardingData)
    }
    return !visible ? null : (
        <>
                <div className='flex fixed inset-0 backdrop-blur-sm bg-white overflow-y-scroll z-30'>
                    <div className="flex-[1] p-3 hidden bg-formBg md:bg-no-repeat md:bg-cover md:grid md:grid-rows-[1fr] md:h-full">
                        <div className='md:grid-col-1 md:justify-center md:items-center row-span-1'>
                            <img className='hidden md:grid md:object-cover sm:h-full sm:w-full' src={backgroundImage} alt="" />
                        </div>
                    </div>
                    <div className="flex-[2] p-3 pl-5">
                        <nav className="flex justify-end">
                            <div className="w-[100px] h-auto ">
                                <img src={logo} alt="sytycc logo" />
                            </div>
                        </nav>
                        <h2 className="font-semibold uppercase leading-5 my-6 text-center py-3">Onboarding Form</h2>
                        <p className='text-left my-3 leading-3 py-3'>Kindly fill the form below to get onboard</p>

                        <form className="w-full text-sm" onSubmit={handleSubmit}>
                            <h3 className="font-semibold">Personal Information</h3>

                            <div className="container mt-6">
                                <label className='block mb-2' htmlFor="fullname">Full Name</label>
                                <input required onChange={handleChange} className='border rounded-lg bg-[#F9FAFB] p-4 w-full sm:w-[60%] ' type="text" name="fullname" value={onboardingData.fullname} placeholder="Enter Full Name" />
                            </div>
                            <div className="container mt-6">
                                <label className='block mb-2' htmlFor="nickname">&lt;Hey! My CodeName’s YellowPaw! What's Yours?&gt;</label>
                                <input required onChange={handleChange} className='border rounded-lg bg-[#F9FAFB] p-4 w-full sm:w-[60%] ' type="text" name="nickname" value={onboardingData.nickname} placeholder="Your answer" />
                            </div>
                            <div className="container mt-6">
                                <label className='block mb-2' htmlFor="email">Email</label>
                                <input required onChange={handleChange} className='border rounded-lg bg-[#F9FAFB] p-4 w-full sm:w-[60%] ' type="email" name="email" value={onboardingData.email} placeholder="stanxxxx14@gmail.com" />
                            </div>
                            <div className="container mt-6">
                                <label className='block mb-2' htmlFor="phoneNo">Phone Number</label>
                                <input required onChange={handleChange} className='border rounded-lg bg-[#F9FAFB] p-4 w-full sm:w-[60%] ' type="tel" name="phoneNo" value={onboardingData.phoneNo} placeholder="0803 XXXXX 475" />
                            </div>
                            <div className="container mt-6">
                                <h6 className='my-3'>Gender</h6>
                                <div className='text-left mx-8 inline'>
                                    <input required
                                        type="radio"
                                        onChange={handleChange}
                                        name="gender"
                                        id="male"
                                        value='male'
                                        checked={onboardingData.gender === 'male'}
                                    />
                                    <label htmlFor="male" className='ml-2'>Male</label>
                                </div>
                                <div className='mx-8 inline'>
                                    <input required
                                        type="radio"
                                        onChange={handleChange}
                                        name="gender"
                                        id="female"
                                        value='female'
                                        checked={onboardingData.gender === 'female'}
                                    />
                                    <label htmlFor="female" className='ml-2'>Female</label>
                                </div>
                            </div>

                            <div className="container mt-6">
                                <label className='block mb-2' htmlFor="profilePhoto">Kindly upload a clear photo of yourself  *</label>
                                <input required onChange={handleChange} className='border rounded-lg bg-[#F9FAFB] p-4 w-full sm:w-[60%] ' type="file" name="profilePhoto" value={onboardingData.profilePhoto} placeholder="Kindly upload a clear photo of yourself *" />
                            </div>
                            <div className="container mt-6">
                                <label className='block mb-2' htmlFor="techstack">Your Tech Stack </label>
                                <div className="border rounded-lg bg-[#F9FAFB] p-4 w-full sm:w-[60%] ">
                                    <select required onChange={handleChange} name="techstack" id="techstack" value={onboardingData.techstack}>
                                        <option value="" >- Select Stack - </option>
                                        <option value="node">Node</option>
                                        <option value="c#">C#</option>
                                        <option value="react">React</option>
                                        <option value="java">Java</option>
                                        <option value="flutter">Flutter</option>
                                    </select>
                                </div>
                            </div>
                            <div className="container mt-6 my-5">
                                <input required onChange={handleChange} type="checkbox" name="acknowledgement" id="acknowledgement" />
                                <label className='mx-4 ' htmlFor='acknowledgement'>I hereby promise to  abide by the ethics of SYTYCC</label>
                            </div>
                            <button className='py-3 text-white px-10 text-left bg-[#06113C] rounded' type='submit'>Submit</button>

                        </form>
                    </div>
                </div>
        </>
    )
}

export default Onboarding



