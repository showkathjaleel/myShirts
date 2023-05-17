import React from 'react'
import CustomButton from './CustomButton'

const FilePicker = ({ file, setFile, readFile    }) => {
  return (
    <div className='filepicker-container'>
      <div className='flex-1 flex flex-col'>
        <input 
        type="file" 
        //only images
        accept='image/*' 
        id="file-upload" 
        onChange={(e)=>setFile(e.target.files[0])}/>
        <label htmlFor="file-upload" className='filepicker-label'>
          upload file
        </label>
    {/* truncate if name of file is big     */}
        <p className='mt-2 text-xs truncate'> 
          {file===''?'No file chosen': file.name}
        </p>

        <div className='mt-4 flex flex-wrap gap-3 '>
          <CustomButton 
          type='outline'
          title='Logo'
          handleClick={()=>readFile('logo')}
          customStyle='text-xs' />

         <CustomButton 
          type='filled'
          title='Full'
          handleClick={()=>readFile('full')}
          customStyle='text-xs' />

        </div>
      </div>
    </div>
  )
}

export default FilePicker