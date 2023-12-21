export const Alert = ({alert}) => {
  return (<>
     <div className={`flex alih-14 ${alert.error && 'from-cyan-50 to-cyan-100'} bg-gradient-to-r border border-red-300 text-center mb-6 p-3 rounded-lg uppercase  text-white font-bold text-sm`}>
        <p className="flex-row justify-content-center align-items-center mx-auto text-lg text-align-center font-medium  text-red-600 leading-5 ">{ alert.msg }</p> 
     </div>
  </>)
}
