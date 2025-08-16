# COMMON JAPAN ユーザーアンケート機能 要件定義書 (改訂版)

## 概要
COMMON JAPANのウェイティングリストに登録した高関心度のユーザーに対して、`/registered`ページ内でページ遷移なしでアンケートを実施する機能を実装する。

## 技術スタック（既存踏襲）
- **Framework**: Next.js 15.4.5 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **UI Library**: React 19.1.0
- **Deployment**: Node.js 20+

## 機能要件

### 1. アンケート実装方式
- **実装場所**: `/registered`ページ内（ページ遷移なし）
- **表示形式**: 既存の登録完了メッセージの下部に追加表示
- **言語**: 英語
- **インタラクション**: ステップ形式のフォーム（1問ずつ表示）

### 2. 表示フロー
```
ウェイティングリスト登録完了画面
↓
[任意参加の案内とアンケート開始ボタン]
↓
アンケート開始（同ページ内でコンテンツ切り替え）
↓
質問1 → 質問2 → ... → 質問N → 完了メッセージ
```

### 3. 進行状況の可視化（必須要件）

#### 3.1 プログレスバー
- 現在の進行状況を視覚的に表示
- `Question 3 of 8` などの数値表示も併記
- 色：既存デザインに合わせてgreen-600使用

#### 3.2 残り設問数表示
- 「3 questions remaining」形式で表示
- 各質問ページの上部に配置

#### 3.3 戻る・進むナビゲーション
- 「Previous」「Next」ボタンで質問間の移動
- 最初の質問では「Previous」を非表示
- 最後の質問では「Submit Survey」ボタンに変更

### 4. アンケート内容

#### 4.1 質問構成（8問構成）
1. **基本情報**: Current location/country of residence (dropdown)
2. **経験年数**: Years of experience in primary industries (0, 1-2, 3-5, 5+ years)
3. **希望地域**: Preferred work location in Japan (checkboxes - multiple selection)
4. **関心分野**: What interests you most about working in Japan's primary industries? (checkboxes - multiple selection)
5. **希望業界**: Preferred industry sector (radio buttons)
6. **雇用形態**: Preferred employment type (radio buttons)
7. **希望機能**: What features would you like to see in COMMON JAPAN? (textarea)
8. **スキル・資格**: Any specific skills or certifications you'd like to highlight? (textarea)

#### 4.2 各質問の詳細

**質問1: Location**
```
Where are you currently located?
- Japan
- United States
- Canada
- Australia
- United Kingdom
- Other Asia
- Other Europe
- Other (text input)
```

**質問2: Experience**
```
How many years of experience do you have in primary industries?
○ No experience
○ 1-2 years
○ 3-5 years
○ 5+ years
```

**質問3: Location Preference**
```
Which regions in Japan interest you for work? (Select all that apply)
☐ Hokkaido
☐ Tohoku
☐ Kanto
☐ Chubu
☐ Kansai
☐ Chugoku
☐ Shikoku
☐ Kyushu
☐ No preference
```

**質問4: Interests**
```
What interests you most about working in Japan's primary industries? (Select all that apply)
☐ Learning traditional Japanese techniques
☐ Stable employment opportunities
☐ Cultural exchange
☐ Contributing to food security
☐ Seasonal work flexibility
☐ Rural lifestyle experience
☐ Other: _______________
```

**質問5: Industry Sector**
```
Which industry sector interests you most?
○ Agriculture
○ Forestry
○ Fishery
○ Open to all sectors
```

**質問6: Employment Type**
```
What type of employment are you looking for?
○ Full-time permanent
○ Seasonal work
○ Training program
○ Part-time/Flexible
```

**質問7: Features (Free text)**
```
What features would you like to see in COMMON JAPAN to help you find opportunities?
(textarea - max 200 characters)
```

**質問8: Skills (Free text)**
```
Any specific skills or certifications you'd like to highlight?
(textarea - max 200 characters)
```

### 5. UI/UX設計

#### 5.1 レイアウト構成
```
/registered ページ内
┌─────────────────────────────────────┐
│ 既存の登録完了メッセージ               │
├─────────────────────────────────────┤
│ [Optional Survey Section]            │
│ ┌─ Survey Intro ─────────────────┐   │
│ │ "Help us improve..." message    │   │
│ │ [Start Survey] button           │   │
│ └─────────────────────────────────┘   │
│                                     │
│ ┌─ Survey Form (when active) ────┐   │
│ │ Progress: ████░░░░ 3 of 8       │   │
│ │ 3 questions remaining           │   │
│ │                                 │   │
│ │ Question content here           │   │
│ │                                 │   │
│ │ [Previous] [Next/Submit]        │   │
│ └─────────────────────────────────┘   │
│                                     │
│ 既存の「Back to Home」ボタン           │
└─────────────────────────────────────┘
```

#### 5.2 デザイン仕様
- **カラーパレット**: 既存に合わせてgreen-600, blue-600, gray系
- **フォント**: 既存のfont-family踏襲
- **アニメーション**: smooth transition (0.3s ease)
- **レスポンシブ**: モバイルファースト設計

#### 5.3 アンケート導入文言
```
"Help us build a better platform for you"

Your feedback could directly influence the development of COMMON JAPAN 
and help us better serve your needs. This optional survey takes about 
3-4 minutes to complete.

[Start Survey] [Skip for now]
```

### 6. 技術実装要件

#### 6.1 コンポーネント構成（単一ページ内）
```
/src
  /app
    /registered
      page.tsx          # メインページ（アンケート機能組み込み）
  /components
    /survey
      SurveyModal.tsx        # アンケート全体のコンテナ
      QuestionStep.tsx       # 個別質問コンポーネント
      ProgressIndicator.tsx  # プログレスバー + 残り設問数
      SurveyNavigation.tsx   # 戻る・進むボタン
      SurveyIntro.tsx       # アンケート開始前の説明
      SurveyComplete.tsx    # 完了メッセージ
```

#### 6.2 状態管理
```typescript
interface SurveyState {
  isVisible: boolean;           // アンケート表示状態
  currentStep: number;          // 現在の質問番号 (0-7)
  answers: Record<string, any>; // 回答データ
  isCompleted: boolean;         // 完了状態
}
```

#### 6.3 進行状況管理
```typescript
interface ProgressState {
  currentQuestion: number;      // 現在の質問番号
  totalQuestions: number;       // 総質問数
  completedQuestions: number;   // 回答済み質問数
  progressPercentage: number;   // 進行率 (0-100)
}
```

### 7. 非機能要件

#### 7.1 パフォーマンス
- 質問間遷移: 0.3秒以内のスムーズアニメーション
- 状態保存: ローカルストレージで一時保存
- レスポンス性: 入力即座に状態反映

#### 7.2 ユーザビリティ
- **進行状況の明確化**: 現在位置と残り時間の常時表示
- **柔軟なナビゲーション**: 前の質問に戻って修正可能
- **自動保存**: ページリロード時の回答復元
- **スキップ機能**: 「後で回答」「スキップ」オプション

#### 7.3 アクセシビリティ
- WAI-ARIA準拠
- キーボードナビゲーション対応（Tab, Enter, Escape）
- スクリーンリーダー対応

### 8. 実装優先度

#### Phase 1 (必須 - 基本実装)
- [ ] `/registered`ページ内でのアンケート表示切り替え
- [ ] ステップ形式質問フォーム（8問）
- [ ] プログレスバー + 残り設問数表示
- [ ] 戻る・進むナビゲーション
- [ ] 英語UI実装

#### Phase 2 (必須 - UX向上)
- [ ] 質問間のスムーズアニメーション
- [ ] 回答データの一時保存
- [ ] 入力検証とエラーハンドリング
- [ ] 完了時のフィードバック

#### Phase 3 (オプション)
- [ ] 回答データの分析機能
- [ ] 管理画面での結果確認

### 9. 成功指標
- **参加率**: ウェイティングリスト登録者の25%以上
- **完了率**: アンケート開始者の85%以上
- **ページ滞在時間**: 登録完了ページで平均3分以上

### 10. 技術的考慮事項
- **状態管理**: React Hooks (useState, useReducer) 
- **データ永続化**: localStorage for 回答の一時保存
- **アニメーション**: CSS transitions + TailwindCSS
- **レスポンシブ**: 既存のブレークポイント踏襲
- **型安全性**: TypeScript strict mode対応