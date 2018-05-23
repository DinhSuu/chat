import React from 'react';
import EmojiItem from './ItemEmoji';
import arrayEmoji from './ArrayEmoji';

export default class EmojiList extends React.Component {
    onClickItemEmoji(text){
        console.log(text);
    }
    render() {
        const Emojilist = arrayEmoji.map((emoji, index) => {
            return <EmojiItem key={index} text={emoji.text}
                image={emoji.image} onClickItem={this.props.onClick.bind(this, emoji.text)} >
            </EmojiItem>
        });

        return (
            <div className="chat_emojji">
                <div className="text" >
                    {Emojilist}
                </div>
            </div>
        );
    }
}