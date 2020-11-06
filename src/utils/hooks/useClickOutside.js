import {useEffect} from "react";

export const useClickOutside = (ref, callback) => {
    const handleClick = e => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                document.addEventListener("mouseup", handleClick);
            }
        });

        return () => {
            document.removeEventListener("mousedown", (e) => {
                if (ref.current && !ref.current.contains(e.target)) {
                    document.removeEventListener("mouseup", handleClick);
                }
            })
        };
    })
};


