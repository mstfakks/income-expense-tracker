"use client";
import { usePathname, useRouter } from "next/navigation";
import MainButton from "../shared/main-button";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { handleToggleDrawer } from "@/redux/features/uiSlice";

const pages = [
  {
    id: 1,
    pageName: "Ana Sayfa",
    url: "/",
  },
  {
    id: 2,
    pageName: "Gelir Gider",
    url: "/income-expense",
  },
  {
    id: 3,
    pageName: "Kategoriler",
    url: "/categories",
  },
  {
    id: 4,
    pageName: "Raporlar",
    url: "/reports",
  },
];

const LeftSidebar = () => {
  const router = useRouter();
  const { isDrawerOpen } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch()
  const path = usePathname()

  console.log('path', path);
  

  const handleClick = (url: string) => {
    router.push(url);
    dispatch(handleToggleDrawer(false))
  };

  return ( 
    <aside      
      className={`bg-slate-800 text-white min-h-screen fixed top-0 left-0 transition-transform duration-300 transform ${
        isDrawerOpen ? "translate-x-0 w-64" : "-translate-x-full"
      } lg:translate-x-0 lg:w-64 z-10 overflow-x-hidden`}
    >
      <ul className="mt-10 space-y-4 ">
        {pages.map((item) => (
          <li className="p-2 block w-full" key={item.id}>
            <MainButton
              onClick={() => handleClick(item.url)}
              additionalClassName={`text-lg border-opacity-0 w-full hover:border-opacity-100 transition-colors hover:border-white hover:shadow-md hover:shadow-white ${item.url === path && 'border-white shadow-md shadow-white border-opacity-100'}`}
            >
              {item.pageName}
            </MainButton>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default LeftSidebar;
