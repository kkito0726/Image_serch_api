// 画像データ取得時に使用するAPIキー
const API_KEY = "DZZnLtT8YNE6xIzQRwkG89NkAdLR8LqJ";

// 文字列による検索の場合：search_by_textを末尾に付与
// 画像IDによる検索の場合：search_by_imageを末尾に付与
const END_POINT = "https://api.a3rt.recruit.co.jp/image_search/v2/";

// ========== TODO: 画像データ取得処理 ==========
// ajax等を用いてリクエストを送信し、成功時はhandleChangeImageState()を呼び出す
const sendAction = (handleChangeImageState, param, query) => {
  // テキストが空の場合は処理しない
  if (query == "") {
    return;
  }

  // ここに処理を記述
  const URL = `${END_POINT}${param}?apikey=${API_KEY}&query=${query}`;

  console.log(URL);
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const imageList = data.result.img;
      handleChangeImageState(imageList);
    });
  // handleChangeImageState();
};

window.sendAction = sendAction;
// const dataFetch = fetch(URL)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data.result.img);
//     const imageList = data.result.img;
//     return imageList;
//   });

// console.log(dataFetch);
