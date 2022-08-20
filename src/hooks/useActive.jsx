import { useEffect, useRef, useState } from "react";

export const useActive = (data) => {
  if (!data) return;

  const [active, setActive] = useState(data);

  const switchContent = useRef(null);

  useEffect(() => {
    if (!switchContent.current) return;
    [...switchContent.current.children].forEach((element) => {
      if (
        element.getAttribute("name").toLowerCase() === active.name.toLowerCase()
      ) {
        [...switchContent.current.children].forEach((element2) => {
          element2.classList.remove("active");
        });
        element.classList.add("active");
      }
    });
  }, [active.name]);

  return { active, setActive, switchContent };
};
