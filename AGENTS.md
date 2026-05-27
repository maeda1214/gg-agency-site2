# AGENTS.md

## Repository Purpose
GG Agency のバイリンガルWebサイトです。Instagram流入を、ブランド案件、イベント出演、海外パートナー問い合わせ、タレント相談へつなげる営業寄りのLPとして構築します。

## Development Commands
- `npm install`: 依存関係をインストール
- `npm run dev`: 開発サーバー起動
- `npm run lint`: ESLint
- `npm run typecheck`: TypeScript型チェック
- `npm run build`: 本番ビルド

## Coding Rules
- Next.js App Router、TypeScript、Tailwind CSS を使う。
- Server Components を基本にし、Client Components はフォーム、FAQ、フィルターなど必要箇所に限定する。
- `any` は極力使わず、`types/` の型を優先する。
- CMS、DB、認証は入れない。
- 不要な依存関係を増やさない。

## UI Policy
- モバイルファーストで実装する。
- 白ベース、濃い文字、控えめなニュートラルアクセントを使う。
- ラグジュアリー、エディトリアル、和の余白、国際感、信頼感を保つ。
- 成人向け、刺激的、扇情的な表現は避ける。
- フォーカスリング、label、alt、キーボード操作を保つ。

## i18n Policy
- i18nライブラリは使わず、`/ja` と `/en` のルートセグメントで分ける。
- 1ページ1言語。
- 共通データは `content/` と `data/` から読み込む。
- hreflang は Metadata API の `alternates.languages` で設定する。

## Completion Criteria
- `/`, `/ja`, `/en` と指定ページが存在する。
- タレント一覧、詳細、企業問い合わせフォーム、モデル応募フォーム、SEO、sitemap、robots が動く。
- `npm run lint`、`npm run typecheck`、`npm run build` が通る。
- README と AGENTS.md が更新されている。

## Do Not
- 応募導線をトップLPの主目的に戻さない。
- コンポーネント内に長い本文を直書きしない。
- CMS、DB、認証、重いUIライブラリを初期段階で追加しない。
- 実績数値、会社情報、法務文言を確定情報のように扱わない。

## Editing Text and Images
- 主要コピー: `content/ja.ts`, `content/en.ts`
- 企業問い合わせフォーム: `components/forms/contact-form.tsx`, `app/api/contact/route.ts`
- モデル応募フォーム: `components/forms/apply-form.tsx`, `app/api/apply/route.ts`
- タレント情報と画像パス: `data/talents.ts`
- サービス情報: `data/services.ts`
- FAQ: `data/faqs.ts`
- Instagram風ギャラリー: `data/social.ts`
- 実績数値とロゴ文言: `data/stats.ts`
- 仮画像: `public/placeholders/`
