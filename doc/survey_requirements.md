# COMMON JAPAN ユーザーアンケート機能 要件定義書

## 概要
COMMON JAPANのウェイティングリストに登録した高関心度のユーザーに対して、`/registered`ページ内で全質問を一括表示するアンケート機能を実装する。

## 技術スタック（既存踏襲）
- **Framework**: Next.js 15.4.5 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **UI Library**: React 19.1.0
- **Deployment**: Node.js 20+

## 機能要件

### 1. アンケート実装方式
- **実装場所**: `/registered`ページ内（ページ遷移なし）
- **表示形式**: 全質問を最初からページ下部に表示
- **言語**: 英語

### 2. 表示フロー・レイアウト
```
/registered ページ
┌─────────────────────────────────────┐
│ 既存の登録完了メッセージ               │ ← 上部
|                                     |
│ [Help us improve...] 説明文          │
│ [Start Survey] ボタン ← スクロール先頭 │ ← 新たに追加
├─────────────────────────────────────┤
│ ┌─ Survey Form (常時表示) ──────┐   │
│ │ Progress: ████████ 100%        │   │
│ │                                │   │
│ │ 質問1: Current location         │   │ ← 下部
│ │ 質問2: Experience years        │   │   (アンケート部)
│ │ 質問3: Preferred regions       │   │
│ │ ...                            │   │
│ │ 質問8: Skills/Certifications   │   │
│ │                                │   │
│ │ [Submit Survey] ボタン          │   │
│ └────────────────────────────────┘   │
│                                     │
│ 既存の「Back to Home」ボタン           │
└─────────────────────────────────────┘
```

### 3. スクロール演出仕様
- **トリガー**: "Start Survey"ボタンクリック
- **動作**: アンケートフォームの先頭（Progress bar部分）にスムーズスクロール
- **アニメーション**: `behavior: 'smooth'`
- **スクロール後**: フォーカスを最初の入力フィールドに移動

### 4. 進行状況の可視化

#### 4.1 プログレスバー
- アンケートフォーム最上部に固定表示
- 入力完了に応じてリアルタイムで更新
- 色：green-600使用
- 表示例：`Progress: ████████ 8 of 8 questions completed`

#### 4.2 入力完了状況
- 各質問の入力状況を視覚的にマーク（✓アイコンなど）
- 全項目完了時に"Submit Survey"ボタンのアクティブ化

### 5. アンケート内容（一括表示）

#### 5.1 質問構成（8問、縦並び表示）

**1. Current Location**
```
Where are you currently located?
[Dropdown]
- Japan
- United States  
- Canada
- Australia
- United Kingdom
- Other Asia
- Other Europe
- Other (with text input)
```

**2. Experience**
```
How many years of experience do you have in primary industries?
[Radio buttons - vertical layout]
○ No experience
○ 1-2 years
○ 3-5 years  
○ 5+ years
```

**3. Location Preference**
```
Which regions in Japan interest you for work? (Select all that apply)
[Checkboxes - 2 column layout]
☐ Hokkaido    ☐ Kansai
☐ Tohoku      ☐ Chugoku  
☐ Kanto       ☐ Shikoku
☐ Chubu       ☐ Kyushu
☐ No preference
```

**4. Interests**
```
What interests you most about working in Japan's primary industries? (Select all that apply)
[Checkboxes - vertical layout]
☐ Learning traditional Japanese techniques
☐ Stable employment opportunities
☐ Cultural exchange
☐ Contributing to food security
☐ Seasonal work flexibility
☐ Rural lifestyle experience
☐ Other: [text input]
```

**5. Industry Sector**
```
Which industry sector interests you most?
[Radio buttons - horizontal layout]
○ Agriculture  ○ Forestry  ○ Fishery  ○ Open to all sectors
```

**6. Employment Type**
```
What type of employment are you looking for?
[Radio buttons - 2x2 grid]
○ Full-time permanent    ○ Training program
○ Seasonal work         ○ Part-time/Flexible
```

**7. Platform Features**
```
What features would you like to see in COMMON JAPAN to help you find opportunities?
[Textarea - 3 rows, max 200 characters]
Character count: 0/200
```

**8. Skills & Certifications**
```
Any specific skills or certifications you'd like to highlight?
[Textarea - 3 rows, max 200 characters]  
Character count: 0/200
```

### 6. UI/UX設計詳細

#### 6.1 アンケート導入セクション
```
Help us build a better platform for you

Your feedback could directly influence the development of COMMON JAPAN 
and help us better serve your needs. This survey takes about 2-3 minutes 
to complete and all questions are optional.

[Start Survey] ← クリックでスクロール
```

#### 6.2 フォームデザイン仕様
- **間隔**: 質問間は`mb-8`（32px）
- **入力フィールド**: TailwindCSS標準スタイル
- **必須項目**: なし（全項目任意）
- **バリデーション**: リアルタイム文字数カウント
- **レスポンシブ**: モバイルで1列、デスクトップで適切なグリッド

#### 6.3 プログレスバー詳細
```typescript
interface ProgressState {
  totalQuestions: 8;
  answeredQuestions: number;  // 入力済み質問数
  progressPercentage: number; // (answeredQuestions / totalQuestions) * 100
}
```

### 7. 技術実装要件

#### 7.1 コンポーネント構成
```
/src
  /app
    /registered
      page.tsx          # メインページ（アンケート機能組み込み）
  /components
    /survey
      SurveySection.tsx     # アンケート全体のセクション
      SurveyIntro.tsx       # 導入部分（Start Surveyボタン含む）
      SurveyForm.tsx        # フォーム本体
      ProgressBar.tsx       # プログレスバー
      QuestionGroup.tsx     # 個別質問コンポーネント
```

#### 7.2 状態管理
```typescript
interface SurveyFormData {
  location: string;
  experience: string;
  regions: string[];
  interests: string[];
  interestsOther: string;
  sector: string;
  employmentType: string;
  features: string;
  skills: string;
}

interface SurveyState {
  formData: SurveyFormData;
  answeredCount: number;
  isSubmitted: boolean;
  isSubmitting: boolean;
}
```

### 8. 非機能要件

#### 8.1 パフォーマンス
- **スクロール**: smooth scrollアニメーション
- **入力応答**: リアルタイムプログレス更新

#### 8.2 ユーザビリティ
- **自由度**: 任意の順序で回答可能
- **進行感**: プログレスバーでの達成感

#### 8.3 アクセシビリティ
- 適切なlabel要素とaria-label
- キーボードナビゲーション対応
- カラーコントラスト確保

### 9. 実装優先度

#### Phase 1 (必須 - 基本実装)
- [ ] `/registered`ページにアンケートセクション追加
- [ ] 8問の一括表示フォーム実装
- [ ] Start Surveyボタンのスクロール機能
- [ ] プログレスバーのリアルタイム更新
- [ ] 英語UI実装

#### Phase 2 (UX向上)
- [ ] 入力データの自動保存
- [ ] 文字数カウント機能
- [ ] Submit時のローディング状態
- [ ] 送信完了フィードバック

#### Phase 3 (オプション)
- [ ] 回答データの分析
- [ ] 管理画面での確認機能

### 10. 成功指標
- **完了率**: アンケート開始者の90%以上
- **参加率**: ウェイティングリスト登録者の30%以上  
- **平均回答時間**: 2-3分以内
