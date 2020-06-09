import {useCallback, useState} from "react";

const useToggler = (defaultValue = false) => {
    const [active, setIsActive] = useState(defaultValue);

    const toggle = useCallback(() => setIsActive(active => !active), [setIsActive]);

    return [active, toggle];
};

export default useToggler;