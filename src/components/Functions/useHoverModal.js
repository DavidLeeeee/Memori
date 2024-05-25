import { useState } from "react";

const useHoverModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsModalOpen(true);
  };

  const handleMouseLeave = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export default useHoverModal;
