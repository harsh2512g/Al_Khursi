import ScrollReveal from "../ScrollReveal";

const Expertise = () => {
    return (
        <div className="flex flex-col gap-12 max-w-[1366px] place-items-center ">

            <div className="flex flex-col sm:flex-row items-center max-sm:gap-8">
                <div className="flex sm:w-1/2 gap-8 justify-center">
                    <img className='shadow-lg rounded-2xl sm:max-w-[500px]' src="/assets/images/prime1.png" alt="Ultimate Medical Knowledge Hub" />
                </div>
                <div className="flex flex-col sm:w-1/2 gap-1 sm:gap-4 sm:ml-20">
                    <div className="flex w-fit rounded-xl p-1 bg-customBlue">
                        <img src="/assets/images/skillsIcon1.svg" alt="Knowledge Hub icon" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex w-3/4">
                            <ScrollReveal delay={200} className="text-sm sm:text-4xl font-bold leading-[50px]">Prime Patient Care</ScrollReveal>
                        </div>
                        <div className="flex ml-5">
                            <ul className="space-y-2 sm:space-y-3 list-disc">
                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">Seamless Registration & Management: </strong>
                                        Prime streamlines admissions, OPD/IPD management, and transfers—all in one place.
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">Specialized Care Modules: </strong>
                                        Tailored maternity, dental, and emergency features to provide top-notch care.
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">Prime EHR: </strong>
                                        Instant access to centralized, secure patient records anytime, anywhere.
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">Prime Telehealth: </strong>
                                        Virtual consultations that extend care beyond hospital walls.
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">Engage & Empower: </strong>
                                        Patient portals and education tools to keep patients in charge of their health.
                                    </li>
                                </ScrollReveal>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row-reverse items-center gap-8">
                <div className="flex sm:w-1/2 gap-8 justify-center">
                    <img className='shadow-lg rounded-2xl sm:max-w-[500px]' src="/assets/images/prime2.png" alt="Prime Clinical Excellence" />
                </div>
                <div className="flex flex-col sm:w-1/2 gap-1 sm:gap-4">
                    <div className="flex w-fit rounded-xl p-1 bg-customBlue">
                        <img src="/assets/images/skillsIcon2.svg" alt="Smarter Learning icon" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex w-3/4">
                            <ScrollReveal delay={200} className="text-sm sm:text-4xl font-bold leading-[50px]">Prime Clinical Excellence</ScrollReveal>
                        </div>
                        <div className="flex ml-5">
                            <ul className="space-y-2 sm:space-y-3 list-disc">
                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">Integrated Lab & Radiology:</strong> Prime’s LIMS and DICOM tools simplify diagnostics and reporting.
                                    </li>
                                </ScrollReveal>

                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">Effortless OT Management:</strong> Streamline surgeries and post-op care with Prime’s smart scheduling.
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">AI-Driven Decisions:</strong> Prime’s CDSS offers data-backed insights for every clinical decision.
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">Specialty-Specific:</strong> Customizable modules for pediatrics, cardiology, oncology, and more.
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">Consultations & Packages:</strong> Create unique health packages and manage doctor-patient interactions efficiently.
                                    </li>
                                </ScrollReveal>


                            </ul>

                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center max-sm:gap-8">
                <div className="flex sm:w-1/2 gap-8 rounded-2xl justify-center">
                    <img className='shadow-lg rounded-2xl sm:max-w-[500px]' src="/assets/images/prime3.png" alt="Prime Financials" />
                </div>
                <div className="flex flex-col sm:w-1/2 gap-1 sm:gap-4 sm:ml-20">
                    <div className="flex w-fit rounded-xl p-1 bg-customBlue">
                        <img src="/assets/images/skillsIcon3.svg" alt="Engaging Learning icon" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex w-3/4">
                            <ScrollReveal delay={200} className="text-sm sm:text-4xl font-bold leading-[50px]">Prime Financials</ScrollReveal>
                        </div>
                        <div className="flex ml-5">
                            <ul className="space-y-2 sm:space-y-3 list-disc">
                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">Automated Billing & RCM:</strong> Prime simplifies billing, revenue tracking, and invoicing—all automated.
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">Insurance Made Simple:</strong> Streamline claims and reimbursements effortlessly with Prime’s insurance manager.
                                    </li>
                                </ScrollReveal>
                                <ScrollReveal delay={300} className="text-xs sm:text-lg font-normal leading-7 text-secondaryContent">
                                    <li>
                                        <strong className="font-bold">Financial Insights:</strong> Generate real-time financial reports and manage budgets with Prime's analytics.
                                    </li>
                                </ScrollReveal>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Expertise;
