import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'



export default function ModalLogin({isOpen,onClose}) {

  const [email,setEmail] =useState('');
  const [password,setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if([email,password].includes('')){

    }
    }

  return (
    <>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10"onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 text-center"
                  >
                    Crear Tarea
                  </Dialog.Title>
                  <div className="mt-2">

                    <form className='mb-5' onSubmit={handleSubmit}>
                      <label className='font-bold w-full text-sm uppercase ' htmlFor='nombre'>Email</label>
                      <input className='w-full border rounded-sm p-2 mb-4 mt-1' placeholder='Nombre de la tarea' id='nombre' 
                      value={email}
                      onChange={e=>setNombre(e.target.value)}/>

                        <label className='font-bold w-full text-sm uppercase ' htmlFor='password'>Password</label>
                      <input className='w-full border rounded-sm p-2 mb-4 mt-1' placeholder='Nombre de la tarea' id='password' 
                      value={password}
                      onChange={e=>setNombre(e.target.value)}/>
            
                    </form>      
              
                  </div>

                  <div className="mt-4">
                    <button
                  
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      Cerrar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}