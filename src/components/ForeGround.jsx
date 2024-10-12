import { useEffect, useRef, useState } from "react";
import { Card } from "./Card";
import { IoMdAdd } from "react-icons/io";

export const ForeGround = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  const mainRef = useRef(null);

  // Retrieve data from localStorage on initial render or set Default
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("docsData"); // to get data from localstorage
    return savedData
      ? JSON.parse(savedData)
      : [
          {
            id: 1,
            todo: "Welcome to my Docs application I hope you'll like this. Something surprise for you, try to drag the docs",
            completed: false,
          },
        ];
  });

  // sync local Storage with data state whenever it changes
  useEffect(() => {
    localStorage.setItem("docsData", JSON.stringify(data)); //* save to localStorage
  }, [data]);

  //* Deleting the card with there id.
  const deleteCard = (id) => {
    // Filter out the card with the matching id
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData); // Update state with filtered data
  };

  //* Adding the docs when the form will submit.
  const formSubmit = (e) => {
    e.preventDefault();
    // Access the input value using ref
    const newDoc = inputRef.current.value;
    const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;

    if (newDoc.trim()) setData([...data, { id: newId, todo: newDoc }]);

    setIsOpen(false);
  };


  //* Toggle task completed or not
  const handleToggleComplete = (id) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setData(updatedData);
  };

  return (
    <>
      <div
        ref={mainRef}
        className=" overflow-x-hidden relative z-[4] w-full min-h-screen"
      >
        <div className="w-full h-full flex flex-wrap gap-5 px-10 py-20">
          {data.map((item, index) => (
            <Card
              reference={mainRef}
              item={item}
              key={index}
              index={index}
              deleteCard={deleteCard}
              handleToggleComplete={handleToggleComplete}
            />
          ))}
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="text-[100px] bg-black text-green-500 fixed bottom-[100px] right-[50px]  rounded-full"
        >
          <IoMdAdd />
        </button>
        {IsOpen && (
          <>
            <div
              onClick={() => setIsOpen(false)}
              className={`absolute top-0  flex items-center justify-center w-full h-full  backdrop-blur-[5px]`}
            ></div>
            <div className="p-10 rounded-[10px] bg-[#0f06067f] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]   ">
              {/* Form to add docs */}
              <form
                onSubmit={(e) => formSubmit(e)}
                className="flex flex-col gap-5 items-center justify-center"
              >
                <input
                  type="text"
                  placeholder="Enter your docs.."
                  ref={inputRef}
                  autoFocus
                  className="px-3 py-2 rounded-md outline-none border-4 focus:border-blue-500 font-semibold "
                />
                <button className="px-3 py-2 bg-blue-500 hover:bg-blue-600 rounded-md font-semibold text-white">
                  Add Docs
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </>
  );
};
