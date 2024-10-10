// js/main.js
// ハンバーガーメニューの開閉
const hamburger = document.querySelector('.header__hamburger');
const navList = document.querySelector('.nav__list');

hamburger.addEventListener('click', () => {
  console.log('Hamburger clicked'); // クリック時にコンソールにメッセージを出力
  navList.classList.toggle('active');
});

// ウィンドウサイズ変更時にハンバーガーメニューを閉じる処理
window.addEventListener('resize', () => {
  if (window.innerWidth > 767) {
    navList.classList.remove('active'); // PCサイズ以上ではメニューを閉じる
  }
});