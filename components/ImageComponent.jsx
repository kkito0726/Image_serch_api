// 画像コンポーネント
const ImageComponent = (props) => {
  // ========== EXTRA_TODO: ImageContainerから渡される「ImageComponentをクリックした時に発火する関数」を画像のクリックイベントに割り当て ==========
  const { url, name, imageid, clickImageSearch } = props;

  return (
    <img
      className="img"
      src={url}
      alt={name}
      title={name}
      imageId={imageid}
      width="100%"
      height="100%"
      onError={(event) => (event.target.src = "")}
      onClick={() => {
        clickImageSearch(imageid);
      }}
    />
  );
};

window.ImageComponent = ImageComponent;
