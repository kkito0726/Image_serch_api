// 画像コンポーネント
const ImageComponent = (props) => {
  // ========== EXTRA_TODO: ImageContainerから渡される「ImageComponentをクリックした時に発火する関数」を画像のクリックイベントに割り当て ==========
  const { url, name, imageId } = props;

  return (
    <img
      className="img"
      src={url}
      alt={name}
      title={name}
      image_id={imageId}
      width="100%"
      height="100%"
    />
  );
};

window.ImageComponent = ImageComponent;
