"use client"
import { useAppDispatch, useAppSelector } from "@/redux/store";
import MainButton from "../shared/main-button";
import { handleToggleDrawer } from "@/redux/features/uiSlice";

const Header = () => {
  const dispatch = useAppDispatch()
  const { isDrawerOpen } = useAppSelector(state => state.ui)

  const handleChangeDrawer = () => {
    if(isDrawerOpen) {
      dispatch(handleToggleDrawer(false))
    } else {
      dispatch(handleToggleDrawer(true))
    }
  }

  const handleCloseDrawer = () => {
    if(isDrawerOpen) {
      dispatch(handleToggleDrawer(false))
    }
  }

  return (
    <>      
      <header className="bg-white shadow-lg p-4 lg:px-8 lg:py-4 lg:sticky lg:top-0 lg:z-20 flex justify-end ">
        <MainButton
          onClick={handleChangeDrawer}
          additionalClassName={`
                  lg:hidden                 
                  border-none 
                  hover:bg-gray-50
                  text-black                                                    
                `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </MainButton>
      </header>
      {isDrawerOpen && <div className="!fixed !inset-0 !flex !items-center !justify-end !bg-black !bg-opacity-50" onClick={handleCloseDrawer} />}
    </>
  );
};

export default Header
