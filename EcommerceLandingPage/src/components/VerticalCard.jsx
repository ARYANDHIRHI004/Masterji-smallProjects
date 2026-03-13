import React from 'react'
import Button from './Button'

const VerticalCard = () => {
  return (
    <div className=" flex-4 min-w-70 h-80 w-60 m-auto bg-card rounded-2xl p-3 ">
      <div className="flex h-50 items-center">
        <img src={""} alt="" className="w-[35%]" />
        <div>
          <h1 className="text-4xl font-semibold"></h1>
          <h1 className="text-xl font-semibold"></h1>
          <div className="">
            {/* <Button button={{ name: "Shop Now" }} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerticalCard