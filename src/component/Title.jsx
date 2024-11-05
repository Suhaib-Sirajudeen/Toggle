import { useEffect } from "react";

export const Title = ({}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Mounted");
    }, 1000);

    return () => {
      console.log("Unmounted!");
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h1>Title is now toggling...</h1>
    </>
  );
};
