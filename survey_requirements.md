# COMMON JAPAN ユーザーアンケート機能 要件定義書

## 概要
COMMON JAPANのウェイティングリストに登録した高関心度のユーザーに対して、サービスに関するアンケートを実施する機能を実装する。

## 技術スタック（既存踏襲）
- **Framework**: Next.js 15.4.5 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **UI Library**: React 19.1.0
- **Deployment**: Node.js 20+

## 機能要件

### 1. アンケートページの実装
- **ページ路由**: `/register`ページでのみ表示
- **表示条件**: ウェイティングリスト登録完了後のオプション機能として表示
- **言語**: 英語

### 2. アンケート表示フロー
```
ウェイティングリスト登録 → 登録完了画面 → [任意]アンケート参加ボタン → アンケートページ
```

### 3. アンケート内容
以下の質問項目を英語で実装：

#### 3.1 基本情報
- Current location/country of residence
- Years of experience in primary industries (agriculture, forestry, fishery)
- Preferred work location in Japan (prefecture/region)

#### 3.2 関心度・動機
- What interests you most about working in Japan's primary industries?
  - [ ] Learning traditional Japanese techniques
  - [ ] Stable employment opportunities
  - [ ] Cultural exchange
  - [ ] Contributing to food security
  - [ ] Other: _______________

#### 3.3 希望条件
- Preferred industry sector:
  - [ ] Agriculture
  - [ ] Forestry
  - [ ] Fishery
  - [ ] Open to all sectors

- Preferred employment type:
  - [ ] Full-time permanent
  - [ ] Seasonal work
  - [ ] Training program
  - [ ] Flexible

#### 3.4 期待・要望
- What features would you like to see in COMMON JAPAN? (Free text)
- Any specific skills or certifications you'd like to highlight? (Free text)

### 4. UI/UX要件

#### 4.1 デザイン
- 既存の`/registered`ページのデザインパターンを踏襲
- TailwindCSSクラスを使用（既存パレット：green-600, blue-600, gray系）
- レスポンシブデザイン（モバイルファースト）

#### 4.2 フォーム仕様
- プログレスバー表示（ページ数/全ページ数）
- 入力検証機能
- 保存・一時停止機能（オプション）
- 完了時の確認画面

#### 4.3 参加促進要素
- **メッセージ例**: "Your feedback could directly influence the development of our platform and help us better serve your needs."
- **日本語意味**: あなたの意見がサービスに反映される可能性があります
- 参加時間の目安表示（例：「約5分で完了」）
- 任意参加であることの明記

### 5. 技術実装要件

#### 5.1 コンポーネント構成
```
/src
  /app
    /registered
      /survey
        page.tsx          # アンケートメインページ
        /complete
          page.tsx        # アンケート完了ページ
  /components
    /survey
      SurveyForm.tsx      # アンケートフォームコンポーネント
      QuestionCard.tsx    # 質問カードコンポーネント
      ProgressBar.tsx     # プログレスバーコンポーネント
```

#### 5.2 状態管理
- React Hooks (useState, useReducer) を使用
- フォームデータのローカル状態管理
- セッションストレージでの一時保存（オプション）

#### 5.3 データ送信
- フォーム送信時の検証
- 送信完了時のフィードバック
- エラーハンドリング

### 6. 非機能要件

#### 6.1 パフォーマンス
- 初期ページロード時間: 3秒以内
- フォーム送信レスポンス: 2秒以内

#### 6.2 アクセシビリティ
- WAI-ARIA準拠
- キーボードナビゲーション対応
- スクリーンリーダー対応

#### 6.3 セキュリティ
- 入力データのサニタイゼーション
- CSRF保護
- データ送信時のHTTPS必須

### 7. 実装優先度

#### Phase 1 (必須)
- [ ] 基本アンケートフォームの実装
- [ ] `/registered`ページからのアンケート参加導線
- [ ] 英語UI実装
- [ ] レスポンシブデザイン

#### Phase 2 (推奨)
- [ ] プログレスバー実装
- [ ] 一時保存機能
- [ ] アンケート完了ページ

#### Phase 3 (オプション)
- [ ] アンケート結果の管理画面
- [ ] 回答データの分析機能

### 8. 参考URL・リソース
- 既存コンポーネント: `src/components/WaitingListEmailForm.tsx`
- 既存ページ: `src/app/registered/page.tsx`
- デザインシステム: TailwindCSS設定 (`src/app/globals.css`)

### 9. 成功指標
- アンケート参加率: ウェイティングリスト登録者の30%以上
- 完了率: アンケート開始者の80%以上
- ユーザビリティ: 平均完了時間5分以内

### 10. 注意事項
- ユーザーの任意参加を重視し、強制感を与えないUI設計
- 個人情報の取り扱いに注意（最小限のデータ収集）
- 既存のコードスタイル・命名規則の踏襲
- git操作は環境側で自動処理される