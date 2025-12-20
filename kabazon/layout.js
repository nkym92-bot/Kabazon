// 共通ヘッダーのHTML定義
const headerHTML = `
<header>
    <div class="logo" onclick="location.href='home.html'">Kaba<span>zon</span></div>
    
    <div class="header-nav">
        <div style="font-size: 12px; line-height: 1.2;">
            <div>こんにちは、ゲストさん</div>
            <strong>アカウント＆リスト</strong>
        </div>
        <div class="cart-icon" onclick="location.href='cart.html'">
            🛒 <span style="font-size:12px;">カート (<span id="header-cart-count">0</span>)</span>
        </div>
    </div>

    <div class="search-bar">
        <input type="text" class="search-input" value="しかたないよ" placeholder="検索">
        <button class="search-btn">🔍</button>
    </div>
</header>
`;

// 共通フッターのHTML定義
const footerHTML = `
<footer>
    <p onclick="window.scrollTo(0,0)" style="cursor:pointer; text-decoration: underline;">トップへ戻る（戻っても現実は変わりません）</p>
    <div style="margin-top:20px;">
        © 1996-2025, Kabazon.com, Inc. or its affiliates
    </div>
</footer>
`;

// ページ読み込み時に実行する処理
function renderCommonParts() {
    // プレースホルダーにHTMLを流し込む
    const headerPlaceholder = document.getElementById('common-header');
    const footerPlaceholder = document.getElementById('common-footer');

    if (headerPlaceholder) headerPlaceholder.innerHTML = headerHTML;
    if (footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;

    // カートの数を更新
    updateHeaderCartCount();
}

// カートの点数を更新する関数（全ページ共通）
function updateHeaderCartCount() {
    const cart = JSON.parse(localStorage.getItem('kabazonCart')) || [];
    const el = document.getElementById('header-cart-count');
    if(el) el.innerText = cart.length;
}

// 読み込み完了時に描画実行
document.addEventListener('DOMContentLoaded', renderCommonParts);