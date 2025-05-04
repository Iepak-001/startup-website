export const InputField=({labelName, placeholder, type})=>{
    return (
        <>

            <label for={id}>{labelName}</label>

            <input type={type} 
                placeholder={placeholder}
            />
        
        </>
    )
}