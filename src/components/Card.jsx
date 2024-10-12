import { useState } from "react";
import { MdOutlineDownloadDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import {motion} from "framer-motion"

export const Card = ({ item ,index, deleteCard, reference, handleToggleComplete }) => {
  console.log(item);

  return (
    <>
      <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} whileTap={{cursor:PointerEvent}} dragMomentum={12000}  className=" relative w-[230px] min-h-[270px] p-7 rounded-[40px]  bg-[#00000075] text-gray-400 overflow-hidden">
        <p className="flex gap-2">
          <span
            className={`text-xl w-[50px] h-8 flex items-center select-none justify-center rounded-full  font-semibold ${
              item.completed ? "bg-[#00800055]" : "bg-[#ff000055]"
            }`}
          >
            {index+1}
          </span>
        </p>
        <p className="text-sm mt-3 break-words min-h-[100%] overflow-y-auto pb-10">{item.todo}</p>

        <div
          className={`footer absolute bottom-0  w-full p-2 left-0 px-7 ${
            item.completed ? "bg-[#00800055]" : "bg-[#ff000055]"
          }`}
        >
          <div className="flex items-center justify-between mb-2 ">
            <button onClick={()=>handleToggleComplete(item.id)} className="w-9 h-9 bg-[#00000075] flex items-center justify-center rounded-full ">
              <MdOutlineDownloadDone 
                className="text-2xl"
              />
            </button>

            {/* We have update every card id and passes this id to deleteCard prop to delete that particular card */}
            <button onClick={()=>deleteCard(item.id)} className="w-9 h-9 bg-[#00000075] flex items-center justify-center rounded-full">
              <RxCross2 className="text-2xl" />
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};
