// 画像表示コンテナコンポーネント
const ImageContainer = (props) => {
  const { imageList, clickImageSearch } = props;

  // ========== TODO: createImageElement()を実行してImageComponentの配列をimageElementListへ格納する処理（※一旦空の配列を代入しているので正しい値を代入して下さい） ==========
  // imageListは20枚毎の画像リストのため、繰り返し処理でImageComponentを生成する
  console.log(imageList);
  const imageElementList = [];
  imageList.map((image, index) => {
    imageElementList.push(createImageElement(image, index, clickImageSearch));
  });

  return <div style={containerStyle}>{imageElementList}</div>;
};

// 画像のクリック時に発火
// const imageClick = (image) => {
//   console.log("画像がクリックされました");
// };

// ========== TODO: 画像情報からImageComponentを定義して返却する処理 ==========
// pタグ内部のImageComponentに適切なpropsを渡す
const createImageElement = (image, index, clickImageSearch) => {
  return (
    <p style={boxStyle} key={index}>
      <ImageComponent
        url={image.url}
        // image.file_name?
        name={image.name}
        imageid={image.id}
        clickImageSearch={clickImageSearch}
      />
    </p>
  );
};

// 画像コンテナのスタイル
const containerStyle = {
  width: "1400px",
  height: "280px",
  margin: "0 auto",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "flex-start",
  alignContent: "flex-start",
  justifyContnt: "center",
};

// 画像を囲うpタグのスタイル
const boxStyle = {
  width: "10%",
  height: "50%",
  // margin: 0,
  padding: "1px",
};

window.ImageContainer = ImageContainer;
