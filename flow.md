
## 制作の流れ

1. srcディレクトリ内のファイルを全て削除、index.jsとApp.jsxの2つだけにする。
1. index.jsはレンダリング、App.jsxはコンポーネントになる。
1. App.jsxとindex.js、index.htmlを修正するだけ。


サーバーサイドもDBも無いので、更新ボタンを押すと消える。


参照元

https://qiita.com/itachi/items/4184b2afc35b55b45568
https://dev-k.hatenablog.com/entry/react-hook-Loop-processing-dev-k-hatena-blog


警告の 『 Warning: ReactDOM.render is no longer supported in React 18.  』の対策

https://stackoverflow.com/questions/71668256/deprecation-notice-reactdom-render-is-no-longer-supported-in-react-18

に倣ってindex.jsを↓に書き換える

```
import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

警告 『Warning: Each child in a list should have a unique "key" prop.』の対処

https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js

に倣ってreturn の内部で　mapメソッドを使用する。key属性を指定する必要が有る。
