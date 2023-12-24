import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <><header className='bg-white-100 border-b p-3 lg:px-5 lg:py-6'>
        <div className='flex flex-col md:flex md:justify-between'>
            <h2 className='text-2xl text-center text-sky-900 leading-6'>
                Residencia <br />
                 <small className='text-md text-sky-600 font-bold leading-7'>Vida Plena</small>
            </h2>
            <input 
            type='search'
            placeholder='Ingresar busqueda'
            className='rounded-lg w-11/12 m-2 lg:w-1/2 block p-3 border'/>
            <div className='flex items-center gap-4'>
                <Link className='/templates'>Templates</Link>
                <Link className='/list-users'>Residentes</Link>
                <button className='text-white bg-sky-600 rounded-md font-bold p-2 md:p-3'>Cerrar Sesión</button>
            </div>
        </div>
      </header>
    </>
  )
}
