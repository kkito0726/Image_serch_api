// sendAction()実行時に引数として渡し、エンドポイントの末尾に付与する文字列
const END_POINT_SUFFIX_TEXT = "search_by_text";
const END_POINT_SUFFIX_IMAGE = "search_by_image";
// メインのAppコンポーネント
const App = () => {
  const [searchText, setSearchText] = React.useState(""); // フォームへ入力された文字列のstate
  const [imageContainer, setImageContainer] = React.useState([]); // 画面に描画する画像情報配列のstate
  const [isSearch, setIsSearch] = React.useState(false);
  const [queryList, setQueryList] = React.useState([]);

  // imageContainerを更新する処理（sendAction()の結果を格納）
  const handleChangeImageState = (imageList) => {
    const newImageContainer = [...imageContainer, imageList];
    setImageContainer(newImageContainer);
    // console.log(imageContainer)
    // ここでコンソールすると同期通信なのでimageContainerstateにまだデータが格納されない
  };

  // ========== TODO: フォームの入力欄とimageContainer変数を初期化する処理 ==========
  // imageContainer変数はsetImageContainer()を使用する
  const handleClear = () => {
    setQueryList((queryList) => [...queryList, searchText]);
    const form = document.getElementById("search-text");
    form.value = "";

    setSearchText("");
    setImageContainer([]);
  };

  // ========== TODO: searchTextを更新する処理（フォームへ入力された文字列を格納） ==========
  // setSearchText()を使用する
  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length > 50) {
      alert("入力は最大50文字でお願いします!");
      return;
    }
    setSearchText(inputValue);
  };

  // フォームへ入力された文字列によるsend.jsのsendAction()実行処理
  const handleSearch = () => {
    if (searchText === "") {
      alert("検索ワードが入力されていません");
      setIsSearch(false);
      return;
    }
    setIsSearch(true);
    console.log(queryList);
    sendAction(handleChangeImageState, END_POINT_SUFFIX_TEXT, searchText);
  };

  // ========== EXTRA_TODO: 画像クリック時の画像IDによるsendAction()実行処理 ==========
  // APIリファレンスの「Search by Image API」を確認し、必要な処理を記述
  // ImageComponentをクリックした時に発火する関数を定義し、その中でsendAction()を実行する ※引数に注意
  const clickImageSearch = (imageid) => {
    sendAction(handleChangeImageState, END_POINT_SUFFIX_IMAGE, imageid);
  };

  // ========== TODO: 画面へレンダリングする要素を定義 ==========
  // Formコンポーネントに適切なpropsを渡す
  return (
    <React.Fragment>
      <Form
        handleChange={handleChange}
        handleSearch={handleSearch}
        handleClear={handleClear}
        existsImage={imageContainer.length !== 0}
      />
      {isSearch ? (
        <h2>{`検索ワード: "${queryList[0]}" に関する画像を20件表示します`}</h2>
      ) : null}
      {imageContainer.map((imageList, index) => (
        <ImageContainer
          imageList={imageList}
          clickImageSearch={clickImageSearch}
          key={index}
        />
      ))}
    </React.Fragment>
  );
};

window.App = App;
