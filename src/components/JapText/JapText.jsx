import "./JapText.scss";

const JapText = ({ text, fontSize, top_to_bottom }) => {
  const randomJapaneseText = () => {
    const japaneseText = ["あいえ"];
    return japaneseText[Math.floor(Math.random() * japaneseText.length)];
  };

  return (
    <div className="japtext-container" style={{ fontSize: fontSize }}>
        <div
          className={`japtext ${
            top_to_bottom ? "top-to-bottom" : "left-to-right"
          }`}
          style={{ fontSize: fontSize }}
        >
          {randomJapaneseText()}
        </div>
        {text}
    </div>
  );
};

export default JapText;
