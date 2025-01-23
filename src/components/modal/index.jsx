import React from 'react'

export default function Modal({children ,cname,trigger}) {
  return (
    <div>
          { trigger?
            <div className="overlay-style">
                <div className={`modal-upload ${cname}`}>
                   {children}
                </div> 
                
            </div>
         : <div></div>
        }
    </div>
  )
}