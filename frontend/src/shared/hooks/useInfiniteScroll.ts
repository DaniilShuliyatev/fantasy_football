import { useCallback, useRef } from "react";

interface UseInfiniteScrollProps {
  callback: () => void;
}

export const useInfiniteScroll = ({ callback }: UseInfiniteScrollProps) => {
  const unsubscribe = useRef(() => {});

  return useCallback(
    (el: HTMLDivElement | null) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
          }
        });
      });

      if (el) {
        observer.observe(el);
        unsubscribe.current = () => observer.disconnect();
      } else {
        unsubscribe.current();
      }
    },
    [callback],
  );
};
