import React from "react";
import { ArrowRight } from "lucide-react";

const DefaultButton = ({
    text,
    onClick,
    type = "button",
    icon = true,
    className = "",
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`group inline-flex items-center justify-center rounded-2xl border border-white/20 bg-transparent px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black ${className}`}
        >
            {text}

            {icon && (
                <ArrowRight
                    size={18}
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
            )}
        </button>
    );
};

export default DefaultButton;