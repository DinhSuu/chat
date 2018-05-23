import React from 'react';


export default class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    enterKey(e) {
        if (e.keyCode === 13 && !e.shiftKey) {
            this.props.sendMessage(this.refs.message);
            this.setState({ textChat: '' });
        }
    }
    sendMessage(event) {
        event.preventDefault();
        const text = this.userInput.textContent;
        if (text && text.length > 0) {
            this.props.onSubmit({
                author: 'me',
                type: 'text',
                data: { text }
            });
            this.userInput.innerHTML = '';
        }
    }

    updateTextChat(text) {
        this.setState({
            textChat: this.state.textChat + text,
        });
    }
    handleClickOpen() {
        this.props.onClickOpenAdd();
    }
    handleCLickClose() {
        this.props.onClickCloseAdd();
    }

    handleTextChange(event) {
        this.setState({ textChat: event.target.value })

    }

    render() {

        return (
            <div className="bottom_wrapper clearfix">
                <div className="message_input_wrapper">
                    <input ref="message" className="message_input"
                        placeholder="Type your message here..."
                        onKeyUp={(e) => this.enterKey(e)}
                        onChange={this.handleTextChange.bind(this)}
                        value={this.state && this.state.textChat ? this.state.textChat : ''}
                    />
                </div>
                <div className="send_emoji"  >
                    <img src={require('./../images/iconSmile.png')}
                        onClick={this.handleClickOpen.bind(this)}
                    />
                </div>

                <div className="send_message"
                    onClick={() => {
                        this.props.sendMessage(this.refs.message);
                        this.setState({ textChat: '' });
                    }}
                >
                    <div className="icon"></div>
                    <div className="text" onClick={this.handleCLickClose.bind(this)} >Send</div>
                </div>

            </div >
        )
    }
}