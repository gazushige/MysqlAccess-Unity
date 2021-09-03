# Docker上のMySql(MariaDB)サーバーにUnityからアクセスする
## 使い方
### ※注意
- Unity2020.3以上必要（2019ではエラーでした）。修正で対応できるでしょうが、そのままでは動きません。
- Dockerが既にインストール済みで基礎知識がある前提で書いています。
### サーバー側の設定
```
└─MySQLDocker
        docker-compose.yml
        Dockerfile
        index.js
        start.sh
```
ディレクトリを作り、これら４つのファイルを同じディレクトリにコピーする。そしてyamlファイル内のユーザー名、パスワードなどを適宜書き換えて保存し
```
docker-compose up -d
```
初回起動時にwarningが大量に出ますが問題なく起動するはずです。
localhost、クラウドサーバー両方で動作確認済。
### Unity側の設定
添付のパッケージファイルをUnityプロジェクト内にインストールしてMySqlAccess.csスクリプトを適当なオブジェクトにアタッチして使う。