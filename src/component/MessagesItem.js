import React from 'react';
import arrayEmoji from './ArrayEmoji';



export default class messageItem extends React.Component {

    render() {

        var chat = this.props.message;
        var chatTextArray = [];
        for (var i = 0; i < arrayEmoji.length; i++) {
            var index = chat.indexOf(arrayEmoji[i].text)
            if (index >= 0) {
                var str1 = chat.slice(0, index);
                var str2 = chat.slice(index + arrayEmoji[i].text.length, chat.length);
                var img = (<img src={arrayEmoji[i].image} />);
                chatTextArray.push(str1);
                chatTextArray.push(img);
                chatTextArray.push(str2);
            }
        }
        if(chatTextArray.length === 0 ){
            chatTextArray.push(chat);
        }
       
        return (
            <li className={this.props.user ? "message right appeared" : "message left appeared"}>
                <div className="avatar"></div>
                <div className="text_wrapper">
                    <div className="text">
                        {chatTextArray.map((item, index) => item)}
                    </div>
                </div>
            </li>
        )
    }
}