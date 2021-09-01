# 2021/8時点安定版
FROM node:14.17.5

WORKDIR /

# 各種パッケージインストール
RUN npm init -y \
    && npm install -g pm2 \
    && npm install mysql --save\
    && npm install express --save

# スクリプトファイルコピー
COPY index.js /

# 起動時に自動実行するシェルスクリプト
ADD  start.sh  /
RUN  chmod +x /start.sh
CMD ["/start.sh"]
