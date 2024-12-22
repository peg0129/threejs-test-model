import { atom } from "nanostores";

// モデルロードのグローバル変数
export const $loadingModel = atom(false);

// ローディングアニメーションのグローバル変数
export const $loadingAnimation = atom(false);

// ローディングプログレスバーのグローバル変数
export const $loadingProgress = atom('0%');