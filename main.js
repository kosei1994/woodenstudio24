/* 初期状態の設定 */
.title,
.highlight,
.image-container {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

/* 表示時のアニメーション */
.title.show,
.highlight.show,
.image-container.show {
    opacity: 1;
    transform: translateY(0);
}

/* クリック時のアニメーション */
.float-up {
    animation: float-up 0.6s ease-out forwards;
}

@keyframes float-up {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(0);
    }
}
