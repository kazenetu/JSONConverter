# JSONConverter
TypeScript用簡易JSONConverter

## TypeScript用簡易JSONConverterの場所
```
src / JSONConverter.ts
```

# 実行方法
* VisualStudio(2017以上)  
  1. ```web.sln``` を開く。
  1. 「IIS Express」または「JSONConverter」で実行する。
  1. ブラウザが自動的に立ち上がり、実行例が表示される。

* dotnet CLI
  1. 下記のコマンドを実行する。
     ```sh
     cd web
     dotnet run
     ```
  1. ブラウザを開く。
  1. ```http://localhost:5000```にアクセスすると、実行例が表示される。


## フォルダ構造
```
Root  
├─src             --TypeScript置き場
│  └─example      --TypeScriptの利用例
└─web             --ASP.NET Coreプロジェクト
   └─wwwroot      --静的ファイル
```
* src：TypeScript置き場  
  * JSONConverter.ts  
      TypeScript用簡易JSONConverter本体

* src / example：TypeScriptの利用例
  * Greeter.ts  
    シリアライズ/デシリアライズされる対象のクラス例 。 
  * main.ts  
    クラス例(Greeter.ts)と簡易JSONConverter(JSONConverter)を使って  
    シリアライズ/デシリアライズを実施例。  
    htmlから呼ばれる。

* web：ASP.NET Coreプロジェクト  
  TypeScriptのビルドとwebサーバーの実行を行う。

* web / wwwroot：静的ファイル
   * index.html  
     シリアライズ/デシリアライズの実施例(example/main.js)を実行する。
   * TypeScriptのビルド結果
     * JSONConverter.js
     * example / Greeter.js
     * example / main.js
