// 画像データ取得時に使用するAPIキー
const API_KEY = "DZZnLtT8YNE6xIzQRwkG89NkAdLR8LqJ";

// 文字列による検索の場合：search_by_textを末尾に付与
// 画像IDによる検索の場合：search_by_imageを末尾に付与
const END_POINT = "https://api.a3rt.recruit.co.jp/image_search/v2/";

const defaultURL = `${END_POINT}search_by_text?apikey=${API_KEY}&query=猫`;
// ========== TODO: 画像データ取得処理 ==========
// ajax等を用いてリクエストを送信し、成功時はhandleChangeImageState()を呼び出す
const sendAction = (handleChangeImageState, param, query) => {
  // テキストが空の場合は処理しない
  if (query == "") {
    return;
  }

  // ここに処理を記述
  const URL = `${END_POINT}${param}?apikey=${API_KEY}&query=${query}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const imgList = data.result.img;
      handleChangeImageState(imgList);
    });
};

window.sendAction = sendAction;

const dataFetch = fetch(defaultURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.result.img);
    const imageList = data.result.img;
    return imageList;
  });

console.log(dataFetch);
