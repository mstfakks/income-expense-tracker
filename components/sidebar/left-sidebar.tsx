"use client";
import { useRouter } from "next/navigation";
import MainButton from "../shared/main-button";

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

  const handleClick = (url: string) => {
    router.push(url)
  }

  return (
    <aside
      className={`bg-slate-900 text-white w-16 min-h-screen fixed top-0 left-0 transition-transform duration-300 transform -translate-x-full lg:translate-x-0 lg:w-64 z-10`}
    >
      <ul className="mt-10 space-y-4 hidden lg:block">
        {pages.map((item) => (
          <li className="p-2 block" key={item.id}>
            <MainButton onClick={() => handleClick(item.url)}  additionalClassName="text-lg w-3/4 flex">
              {item.pageName}
            </MainButton>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default LeftSidebar;
