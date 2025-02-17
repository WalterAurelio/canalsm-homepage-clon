import { useInView } from "react-intersection-observer";

function Decor({ isAnimated, reversed }: { isAnimated?: boolean, reversed?: boolean }) {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className={`h-4 w-full decor-borders ${ isAnimated && inView ? 'animate-decor' : '' } ${ reversed ? 'reversed' : '' }`}>
    </div>
  );
}

export default Decor;