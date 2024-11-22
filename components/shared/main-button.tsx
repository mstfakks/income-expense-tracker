import { ReactNode } from "react";

interface MainButtonProps {
    children: ReactNode;
    additionalClassName?: string
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
}


const MainButton = ({
    children,
    additionalClassName,
    onClick,
    type,
    disabled
}: MainButtonProps) => {
    
    return(
        <button
            className={`
                border-2
                border-gray-900
                px-6
                py-1
                rounded-lg
                hover:bg-slate-800
                hover:text-white
                transition-colors
                ${additionalClassName}
            `}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
}

export default MainButton;