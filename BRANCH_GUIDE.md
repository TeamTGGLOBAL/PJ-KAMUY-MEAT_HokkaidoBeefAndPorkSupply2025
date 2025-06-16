# ブランチ運用ガイド
作成日：2025/06/03　
作成者：Kenny

## 1. ブランチの種類と用途

### メインブランチ
- `main`: 本番環境用のブランチ。安定した状態を保つ必要があります。
- `develop`: 開発用のブランチ。次のリリースに向けた開発作業のベースとなります。
※複数のdevelopブランチが存在することはありません。

### 作業用ブランチ
- `feature/*`: 新機能開発用のブランチ
  - 例: `feature/add-login-function`
  - 例: `feature/update-ui-design`
- `hotfix/*`: 本番環境の緊急バグ修正用のブランチ
  - 例: `hotfix/fix-login-error`
- `bugfix/*`: 開発環境のバグ修正用のブランチ
  - 例: `bugfix/fix-typo-in-header`

## 2. ブランチの命名規則

### 基本ルール
- すべて小文字を使用
- 単語間はハイフン（-）で区切る
- 日本語は使用しない
- 簡潔で分かりやすい名前を付ける

### 命名例
- 機能追加: `feature/add-user-authentication`
- バグ修正: `bugfix/fix-navigation-error`
- 緊急修正: `hotfix/security-patch`

## 3. ブランチの作成・マージのワークフロー

### ブランチの作成
1. 最新の`develop`ブランチに切り替え
   ```bash
   git checkout develop
   git pull origin develop
   ```
2. 新しいブランチを作成
   ```bash
   git checkout -b feature/your-feature-name
   ```

### 開発作業
1. 定期的にコミット
   ```bash
   git add .
   git commit -m "コミットメッセージ"
   ```
2. 必要に応じて`develop`ブランチの変更を取り込む
   ```bash
   git checkout develop
   git pull origin develop
   git checkout feature/your-feature-name
   git merge develop
   ```

### マージ
1. 開発が完了したら`develop`ブランチにマージ
   ```bash
   <!-- git checkout develop
   git merge feature/your-feature-name
   git push origin develop -->
   ```
   ※基本的にマージはGitHub上で行いましょう

2. 不要になったブランチは削除
   ```bash
   git branch -d feature/your-feature-name
   ```
   ※基本的にブランチの削除はGitHub上で行いましょう

## 4. コミットメッセージの書き方

### 基本ルール
- 1行目: 変更内容の要約（50文字以内）
- 2行目: 空行
- 3行目以降: 変更の詳細（必要な場合）

### 例
```
feat: ユーザー認証機能の追加

- ログインフォームの実装
- パスワードハッシュ化の実装
- セッション管理の実装
```

## 5. 注意事項

### プッシュのタイミング
- 機能が完成したらプッシュ
- 大きな変更は分割してプッシュ
- 機密情報を含むコミットは避ける

### マージのタイミング
- 機能が完成し、テストが通ったらマージ
- コンフリクトが発生した場合は、慎重に解決
- マージ前に必ず`develop`ブランチの最新状態を取り込む

### その他
- 長期にわたるブランチは避ける
- 定期的に`develop`ブランチの変更を取り込む
- ブランチの目的を明確にする 


## 現在のブランチ

### ローカルブランチ
- develop（現在のブランチ）
- experiment/kenny-update-folder-list
- feature/kenny-createcontents-bycursor（developにマージ済み 20250617）
- feature/update_folder_list
- main

### リモートブランチ
- origin/HEAD → origin/main
- origin/develop
- origin/main

現在はdevelopブランチで作業されています。
