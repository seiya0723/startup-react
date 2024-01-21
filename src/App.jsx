import { useState } from "react";

export const App = () => {

    const [ topics, setTopics ]    = useState([]);

    //投稿処理
    const SendButton = () => {

        //テキストエリアの内容を抜き取り、追加する。
        const textarea  = document.getElementById("textarea");
        setTopics([ ...topics, textarea.value ]);

        //テキストエリアを初期化
        textarea.value  = "";
    }

    return (
        <>

        <textarea id="textarea" className="form-control"></textarea>
        <input onClick={ SendButton } type="button" value="送信" />

        {/* ここでレンダリングをする。 */}
        {/* リストをレンダリングする時、keyが必要 */}

        {   
            topics.map( (topic,i) => {
                return ( <div className="border" key={i}>{ topic }</div> );
            })
        }
        </>
    );
}

