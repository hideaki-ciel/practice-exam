import React from 'react'
import Timer from './timer'

class Main extends React.Component {
    render() {
        return(
            <div>
                <div className="contents_questions">
                    問題を表示<br/>
                    選択肢を表示
                </div>
                <div className="contents_answers">
                    過去の回答を表示
                    回答用のボタンを表示
                    <Timer />経過時間を表示
                </div>
            </div>
        )
    };
}
export default Main;