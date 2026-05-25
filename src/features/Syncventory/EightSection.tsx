const EightSection = () => {
    return(
        <div className="xl:px-20 px-7 xl:py-16 py-10">

        <h1 className="text-[#000000]  text-[25px] md:text-[32px] md:text-center font-[500] md:mb-6 max-lg:pt-5 max-lg:border-t max-lg:border-[#5A5A5A] ">
        Testing & Iteration
        </h1>


             <div>
                <span className="font-semibold">What Broke, What Worked, and What I Changed</span>
                     <p className="text-[#5A5A5A] text-[16px] leading-relaxed">
                     I ran three rounds of usability testing across the design process — once on low-fidelity prototypes to validate the core architecture, once on high-fidelity screens to stress
                    -test the key flows, and once with actual retailers during a closed beta to catch real-world edge cases.
                    </p>
                    </div>

                    <div>
                    <p className="text-[#5A5A5A] text-[16px] leading-relaxed mt-10">
                    The most valuable session was the second round, where I put the high-fidelity prototype in front of 15 business owners and watched them try to complete real tasks. I didn't
                    prompt. I didn't help. I watched.
                    </p>
                    </div>

                    
                    <div className="mt-10">
                    <span className="font-semibold">Key Findings & What Changed</span>

                   
                    <div className="flex flex-col md:flex-row gap-6 mt-10">

                        {/* Card 1 */}
                        <div className="max-w-[560px] bg-white overflow-hidden p-8 ">
                        <div className="mb-8">
                            <span className="inline-block bg-amber-100 text-amber-900 text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
                            Problem
                            </span>
                            <p className="text-base leading-relaxed text-gray-900">
                            The onboarding flow asked for too much information
                        upfront. Several retailers abandoned setup before
                        they'd seen any value from the product.
                            </p>
                        </div>
                        <div className="border-t border-gray-100 pt-8">
                            <span className="inline-block bg-teal-100 text-teal-900 text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
                            Solution
                            </span>
                            <p className="text-base leading-relaxed text-gray-900">
                            I redesigned onboarding to be progressive — collect
                        the minimum needed to get started, then surface
                        additional configuration contextually as users
                        explore features. Time to first value dropped
                        significantly.    </p>
                        </div>
                        </div>

                    {/* Card 2 */}
                    <div className="max-w-[560px] bg-white  overflow-hidden p-8">
                    <div className="mb-8">
                        <span className="inline-block bg-amber-100 text-amber-900 text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
                        Problem
                        </span>
                        <p className="text-base leading-relaxed text-gray-900">
                        Retailers were confused by the term "locations" —
                    some thought it referred to geographic regions,
                    others to storage areas within a single store.
                        </p>
                    </div>
                    <div className="border-t border-gray-100 pt-8">
                        <span className="inline-block bg-teal-100 text-teal-900 text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
                        Solution
                        </span>
                        <p className="text-base leading-relaxed text-gray-900">
                        Changed terminology to "stores" throughout the
                    platform. Added contextual icons and descriptions
                    at every point of first encounter. Confusion dropped
                    immediately in subsequent testing.
                        </p>
                    </div>
                    </div>

                        {/* Card 3 */}
                        <div className="max-w-[560px] bg-white  overflow-hidden p-8">
                        <div className="mb-8">
                            <span className="inline-block bg-amber-100 text-amber-900 text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
                            Problem
                            </span>
                            <p className="text-base leading-relaxed text-gray-900">
                            The analytics screens were displaying too much data simultaneously. Users could see numbers but didn't know what action to take — they felt the reports were "for accountants, not for me."    </p>
                        </div>
                        <div className="border-t border-gray-100 pt-8">
                            <span className="inline-block bg-teal-100 text-teal-900 text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
                            Solution
                            </span>
                            <p className="text-base leading-relaxed text-gray-900">
                            Introduced a plain-language insight layer above every
                        report. Each view opened with a single most-important
                        insight stated in plain English. Data tables remained
                        available for those who wanted depth, but meaning
                        came first.
                            </p>
                        </div>
                        </div>

</div>

                    </div>


                    
        </div>
    )
}

export default EightSection;