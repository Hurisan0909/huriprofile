function myFunction() {
  // 変数を宣言
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // リストアイテムをループして検索クエリに一致しないものを非表示にする
  var foundMatch = false; // 初期値は false
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
          foundMatch = true; // 一致するアイテムが見つかった場合、foundMatch を true に設定
      } else {
          li[i].style.display = "none";
      }
  }

  // 一致するアイテムがない場合、メッセージを表示
  var noResultsMessage = document.getElementById("noResultsMessage");
  if (!foundMatch) {
      if (!noResultsMessage) {
          noResultsMessage = document.createElement("p");
          noResultsMessage.id = "noResultsMessage";
          noResultsMessage.textContent = "なにもヒットしませんでした...誤字・脱字はありませんか？";
          ul.appendChild(noResultsMessage);
      }
  } else {
      // 一致するアイテムがある場合、メッセージを削除
      if (noResultsMessage) {
          ul.removeChild(noResultsMessage);
      }
  }
}
/*
setTimeout(function() {
    window.location.href = 'test.html';
}, 3000);
*/ 