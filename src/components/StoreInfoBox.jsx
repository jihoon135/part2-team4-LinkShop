import { useState } from "react";
import styles from "./StoreInfoBox.module.css";

export const StoreInfoBox = () => {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [showOptions, setShowOptions] = useState(false);

    const handleOnclick = () => {
        setIsLiked((prev) => !prev);
        setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
    };

    const toggleOptions = () => {
        setShowOptions((prev) => !prev);
    };

    return (
        <div className={styles.storeInfoBox}>
            <div className={styles.contentWrapper}>
                {/* 찜 버튼 */}
                <button onClick={handleOnclick} className={styles.likeButton}>
                    <img src={isLiked ? "status=fill.png" : "status=empty.png"} alt="찜 버튼" width="30" />
                    <span className={styles.likeCount}>{likeCount}</span>
                </button>

                {/* 프로필 이미지 */}
                <img src="raccoonprofile.png" alt="프로필 사진" className={styles.profileImage} />

                <h1 className={styles.storeName}>너구리 직구상점</h1>
                <h2 className={styles.username}>@pumpkinraccoon</h2>

                {/* 버튼 컨테이너 */}
                <div className={styles.buttonContainer}>
                    {/* 공유 버튼 */}
                    <button className={styles.shareButton}>
                        <img src="share.png" alt="공유 버튼" width="30" />
                    </button>

                    {/* 햄버거 버튼 */}
                    <button onClick={toggleOptions} className={styles.menuButton}>
                        <img src="meatball.png" alt="메뉴 버튼" width="30" />
                    </button>

                    {/* 옵션 메뉴 */}
                    {showOptions && (
                        <div className={styles.optionsMenu}>
                            <button className={styles.optionButton}>수정하기</button>
                            <button className={styles.optionButton}>생성하기</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
