import React, { useEffect, useRef } from 'react';

export default function Modal({children ,cname,trigger, onClose}:any) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!trigger) return null;
  return (
    <div>
          { trigger?
            <div className="overlay-style">
                <div className={`modal-upload ${cname}`} ref={modalRef}>
                   {children}
                </div> 
                
            </div>
         : <div></div>
        }
    </div>
  )
}