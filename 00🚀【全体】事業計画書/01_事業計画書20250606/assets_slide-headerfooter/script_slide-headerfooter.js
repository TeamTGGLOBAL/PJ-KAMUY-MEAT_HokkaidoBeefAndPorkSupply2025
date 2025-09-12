// slide-headerfooter.js
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');

    function insertHeadersFooters() {
        removeHeadersFooters();
        const totalPages = slides.length;

        slides.forEach((slide, index) => {
            const pageNum = index + 1;

            // --- ヘッダー要素を作成 ---
            const header = document.createElement('div');
            header.classList.add('print-header');
            header.innerHTML = `
                    <div class="header-right">
                    <img src="assets_slide-headerfooter/logo-small.png" alt="Logo" class="print-logo">
                    </div>
                    `;
            slide.prepend(header);

            // --- フッター要素を作成 ---
            // 2ページ目以降 (index > 0) の場合にのみフッターを挿入 
            if (index > 0) {
                const footer = document.createElement('div');
                footer.classList.add('print-footer');
                // ページ番号の表示を調整: totalPages は全スライド数、pageNum は現在のスライド番号
                footer.innerHTML = `
                    <div class="footer-center">
                        <span class="footer-text">TG GLOBAL CO.LTD.</span>
                    </div>
                    <div class="footer-right">
                        <span class="print-page-number-footer"> ${pageNum} / ${totalPages}</span>
                    </div>
                `;
                slide.appendChild(footer);
            }
        });
    }

    // 印刷後にヘッダーとフッターを削除する
    function removeHeadersFooters() {
        const headers = document.querySelectorAll('.print-header');
        const footers = document.querySelectorAll('.print-footer');
        headers.forEach(el => el.remove());
        footers.forEach(el => el.remove());
    }

    window.addEventListener('beforeprint', insertHeadersFooters);
    window.addEventListener('afterprint', removeHeadersFooters);
});