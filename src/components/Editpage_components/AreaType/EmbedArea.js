import React, { useState } from "react";
import styles from "../../../styles/Editpage/EmbedArea.module.css";
import { FaYoutube, FaLink, FaRegFolder } from "react-icons/fa";

const EmbedArea = () => {
  const [link, setLink] = useState("");
  const [embedLink, setEmbedLink] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (e) => {
    setLink(e.target.value);
  };

  const handleEmbed = () => {
    setEmbedLink(link);
  };

  const getEmbedUrl = (url) => {
    const youtubeMatch = url.match(
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    );
    if (youtubeMatch && youtubeMatch[2].length === 11) {
      return `https://www.youtube.com/embed/${youtubeMatch[2]}`;
    }
    return url;
  };

  return (
    <div className={styles.ContentBox}>
      {selectedOption === null ? (
        // 선택 옵션을 보여주는 버튼들
        <div className={styles.options}>
          <button
            className={styles.optionButton}
            onClick={() => setSelectedOption("youtube")}
          >
            <FaYoutube className={styles.icon} />
          </button>
          <button
            className={styles.optionButton}
            onClick={() => setSelectedOption("hyperlink")}
          >
            <FaLink className={styles.icon} />
          </button>
          <button
            className={styles.optionButton}
            onClick={() => setSelectedOption("comingsoon")}
          >
            <FaRegFolder className={styles.icon} />
          </button>
        </div>
      ) : !embedLink ? (
        // 링크를 입력하고 임베드 버튼을 보여줌
        <>
          {selectedOption !== "comingsoon" ? (
            <>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  value={link}
                  onChange={handleChange}
                  className={styles.LinkInput}
                  placeholder="링크를 입력하세요..."
                />
                <button onClick={handleEmbed} className={styles.insertButton}>
                  Insert
                </button>
              </div>
            </>
          ) : (
            <p>추후 업데이트 예정입니다.ㅋㅋ</p>
          )}
        </>
      ) : (
        // 임베드된 내용을 보여줌
        <>
          {selectedOption === "youtube" && (
            <div className={styles.embedContainer}>
              <iframe
                className={styles.embedIframe}
                src={getEmbedUrl(embedLink)}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded Content"
              ></iframe>
            </div>
          )}

          {selectedOption === "hyperlink" && (
            <div className={styles.embedContainer}>
              <a href={embedLink} target="_blank" rel="noopener noreferrer">
                {embedLink}
              </a>
            </div>
          )}

          {selectedOption === "comingsoon" && (
            <div className={styles.embedContainer}>
              <p>추후 업데이트 예정입니다.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default EmbedArea;
