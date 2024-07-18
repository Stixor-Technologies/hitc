import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useMenuStore } from "../store/menu-store";

const useSectionInView = (sectionId?: string) => {
  const setActiveSection = useMenuStore((state) => state.setActiveSection);
  const { ref, inView } = useInView({
    threshold: 0.5,
    skip: !sectionId,
  });

  useEffect(() => {
    if (inView && sectionId) {
      console.log(inView, "sectionId", sectionId);
      setActiveSection(sectionId);
    } else {
      setActiveSection("");
    }
  }, [inView, sectionId]);

  return { ref };
};

export default useSectionInView;
