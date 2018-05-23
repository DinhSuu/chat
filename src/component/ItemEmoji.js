import React from 'react';

export default class ItemEmoji extends React.Component {
    render() {
        return (
            <div>
                <h4>
                    <img src={this.props.image} onClick={this.props.onClickItem.bind(this)} />
                </h4>
            </div>
        );
    }
}