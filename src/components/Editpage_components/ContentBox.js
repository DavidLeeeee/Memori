import React, { useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import styles from "../../styles/Editpage/ContentBox.module.css";
import TextArea from "./AreaType/TextArea";
import ImageArea from "./AreaType/ImageArea";
import EmbedArea from "./AreaType/EmbedArea";
import {
  AiOutlineHolder,
  AiOutlineMore,
  AiOutlineDelete,
} from "react-icons/ai";
import { BsBorderOuter } from "react-icons/bs";
import { RiColorFilterLine } from "react-icons/ri";

const ItemType = "CONTENT_BOX";

export const ContentBox = ({ id, type, index, moveContentBox, removeBox }) => {
  const [contentModal, setContentModal] = useState(0);
  const ref = useRef(null);
  const handleMouseEnter = () => {
    setContentModal(1);
  };
  const handleMouseLeave = () => {
    setContentModal(0);
  };
  const [, drop] = useDrop({
    accept: ItemType,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveContentBox(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { type: ItemType, id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={`${styles.ContentBox} ${isDragging ? styles.dragging : ""}`}
    >
      <AiOutlineHolder className={styles.icon} />
      <div className={styles.contentArea}>
        {type === "embed" && <EmbedArea id={id} />}
        {type === "text" && <TextArea id={id} />}
        {type === "image" && <ImageArea id={id} />}
      </div>
      <div
        className={styles.iconContainer}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <AiOutlineMore className={styles.icon} />
        <div
          className={`${styles.boxSettingModal} ${
            contentModal === 1 ? styles.show : styles.hide
          }`}
        >
          <ModalBox removeBox={() => removeBox(id)} />
        </div>
      </div>
    </div>
  );
};

const ModalBox = ({ removeBox }) => {
  return (
    <div className={styles.modalArea}>
      <AiOutlineDelete onClick={removeBox} className={styles.icon2} />
      <BsBorderOuter className={styles.icon2} />
      <RiColorFilterLine className={styles.icon2} />
    </div>
  );
};

export default ContentBox;
