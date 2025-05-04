import IntegrateImage from "../assets/integrate.png"

export const  LongCards=(details)=>{


    return(
        <>

            <div className="flex flex-row gap-4 h-auto border-2 m-7 p-4 rounded-xl">
                <img src={IntegrateImage} alt="" className="h-20 flex-1"/>
                <div className="flex-5">
                    <p className="text-xl">Company name</p>
                    <p >Description</p>

                    <div className="flex flex-row justify-between">
                        <p className="text-sm">Founded</p>
                        <p className="text-sm">IPO</p>
                        <p className="text-sm">Startup-Stage</p>
                    </div>
                </div>
            </div>
        
        </>
    )
}