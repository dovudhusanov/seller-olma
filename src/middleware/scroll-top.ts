import {useEffect} from "react";

const ScrollTop = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);
};

export default ScrollTop