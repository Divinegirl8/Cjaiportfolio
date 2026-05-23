
const FilledButton:React.FC<{text: string, bgColor: string, color: string, wdt : string}> = ({text,bgColor,color,wdt}) =>{
  return(
    <>
    <div style={{backgroundColor:bgColor, color:color, width:wdt}}  className={`border-[0.25px] rounded-[8px] text-[14px] border-[#62646C]  h-11 text-center py-[9px] cursor-pointer`}>
                 {text}
        
    </div>

    </>
  )
}

export default FilledButton;