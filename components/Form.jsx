// 検索フォームコンポーネント
const Form = (props) => {
  const { handleChange, handleSearch, handleClear, existsImage } = props;

  // ========== TODO: 画面へ描画する文字列とメソッドを定義 ==========
  // existsImageを用いて、画像が表示されている場合はdisplayText = 'クリア'・action = onClearを割り当てる
  const displayText = '検索';
  const action = onSearch;

  // ========== TODO: onChange / onClick時の処理を記述する ==========
  return (
    <div style={boxStyle}>
      <form style={formStyle}>
        <input
          id="search-text"
          type="text"
          placeholder="最大50文字"
          style={inputStyle}
        />
        <a style={buttonStyle}>{displayText}</a>
      </form>
    </div>
  );
};

// 各スタイルの定義
const boxStyle = {
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
};
const formStyle = {
  width: '500px',
  height: '100%',
  margin: '10px auto',
  display: 'inline-flex',
  justifyContent: 'center',
};
const inputStyle = {
  height: '45px',
  paddingLeft: '5px',
  borderRadius: '3px',
  fontSize: '16px',
};
const buttonStyle = {
  width: '100px',
  marginLeft: '10px',
  textAlign: 'center',
  color: '#fff',
  background: '#5876a3',
  padding: '10px 5%',
  display: 'inline-block',
  borderRadius: '5px',
  textDecoration: 'none',
};

window.Form = Form;
