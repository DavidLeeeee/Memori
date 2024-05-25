import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import styles from "../../styles/Editpage/ContentBox.module.css";
import TextArea from "./AreaType/TextArea";
import ImageArea from "./AreaType/ImageArea";
import EmbedArea from "./AreaType/EmbedArea";
import useHoverModal from "../Functions/useHoverModal";
import {
  AiOutlineHolder,
  AiOutlineMore,
  AiOutlineDelete,
} from "react-icons/ai";
import { BsBorderOuter } from "react-icons/bs";
import { RiColorFilterLine } from "react-icons/ri";

const ItemType = "CONTENT_BOX";

export const ContentBox = ({ id, type, index, moveContentBox, removeBox }) => {
  const { isModalOpen, handleMouseEnter, handleMouseLeave } = useHoverModal(); // 마우스 호버 모달 훅 사용

  const ref = useRef(null); // 드롭 영역 참조
  // useDrop 훅 설정
  const [, drop] = useDrop({
    accept: ItemType, // 드롭 가능한 아이템 타입
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
  // useDrag 훅 설정
  const [{ isDragging }, drag, preview] = useDrag({
    type: ItemType, // 드래그 가능한 아이템 타입
    item: { type: ItemType, id, index }, // 드래그 아이템 정보
    collect: (monitor) => ({
      isDragging: monitor.isDragging(), // 드래그 상태 수집
    }),
  });
  drag(drop(ref)); // 드래그와 드롭 기능을 ref에 연결

  return (
    <div
      ref={ref}
      className={`${styles.ContentBox} ${isDragging ? styles.dragging : ""}`} // 드래그 중일 때 스타일 추가
    >
      <AiOutlineHolder className={styles.icon} />
      <div className={styles.contentArea}>
        {type === "embed" && <EmbedArea id={id} />}
        {type === "text" && (
          <div ref={preview} style={{ display: "flex", width: "100%" }}>
            <TextArea id={id} />
          </div>
        )}
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
            isModalOpen ? styles.show : styles.hide
          }`}
        >
          <ModalBox removeBox={() => removeBox(id)} />
        </div>
      </div>
    </div>
  );
};

// ModalBox 컴포넌트: 모달 내의 기능 정의
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
