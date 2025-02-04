import { useEffect, useRef, RefObject, useState } from 'react';

type UseIntersectionObserverResult<T extends HTMLElement> = {
    ref: RefObject<T>;
    isVisible: boolean;
};

const useIntersectionObserver = <T extends HTMLElement>(
    options?: IntersectionObserverInit
): UseIntersectionObserverResult<T> => {
    const ref = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                // Stop observing once the element is in view
                observer.unobserve(entry.target);
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [options]);

    return { ref, isVisible };
};

export default useIntersectionObserver;