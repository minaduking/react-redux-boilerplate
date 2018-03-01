create-react-appにreduxを入れたものになります。

reduxを使ってsrc/apis/post.jsでデータを取得するようにしています。

もしAPIを自分の環境で試したい場合は、Restful APIを使ってください。
GET posts      一覧取得
GET post/:id   個別取得

```
post

id: integer
title: varchar
description text
```

このプロジェクトでのAPIのURLはsrc/constants/app.jsにAPI_URLを設定すると動くようになります。

