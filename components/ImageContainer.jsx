// 画像表示コンテナコンポーネント
const ImageContainer = (props) => {
  const { imageList } = props;

  // ========== TODO: createImageElement()を実行してImageComponentの配列をimageElementListへ格納する処理（※一旦空の配列を代入しているので正しい値を代入して下さい） ==========
  // imageListは20枚毎の画像リストのため、繰り返し処理でImageComponentを生成する
  const imageElementList = [];

  return <div style={containerStyle}>{imageElementList}</div>;
};

// ========== TODO: 画像情報からImageComponentを定義して返却する処理 ==========
// pタグ内部のImageComponentに適切なpropsを渡す
const createImageElement = (image, index) => {
  return (
    <p style={boxStyle} key={index}>
      <ImageComponent />
    </p>
  );
};

// 画像コンテナのスタイル
const containerStyle = {
  width: '1400px',
  height: '280px',
  margin: '0 auto',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
};

// 画像を囲うpタグのスタイル
const boxStyle = {
  width: '10%',
  height: '50%',
  margin: 0,
  padding: '1px',
};

window.ImageContainer = ImageContainer;
