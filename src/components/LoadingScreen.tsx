import React, { useEffect, useState } from "react";
import { Circles } from "react-loading-icons";

const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust the delay time as needed

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return isLoading ? (
    <div className="fixed h-screen w-screen bg-darkest z-50 flex items-center justify-center">
      <Circles fill="#CE4BFF" />
    </div>
  ) : null;
};

export default LoadingScreen;
