import MainButton from "../shared/main-button";

const Header = () => {
  return (
    <header className="bg-white  shadow-lg p-4 lg:px-8 lg:py-4 lg:sticky lg:top-0 lg:z-20 flex justify-between">
      <MainButton
        additionalClassName={`
                lg:hidden 
                relative 
                left-0 
                border-none 
                p-2 
                rounded-full
                px-2
                hover:bg-slate-400                                
              `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
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
  );
};

export default Header
