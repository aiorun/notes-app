import React, {useState} from 'react'



const Aside = (props: any) => {

    return (
     <aside className="aside fixed py-6 px-2 inset-0 w-72 overflow-y-scroll">
<div>
              {props.notes.map((item: any) => (
                      <div
                        key={item}
                        className="flex items-center p-2 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 bg-gray-50 text-gray-900 sm:h-12 sm:w-12 p-2 rounded-full">
                          <hr aria-hidden="true" /> 
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                           {item}
                          </p>
                          <p className="fs-1 text-gray-300">
                            {new Date().toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))}

     </div>

</aside>
    )
}

export default Aside