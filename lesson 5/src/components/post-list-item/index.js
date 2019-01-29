import React, {Component} from 'react';


import './post-list-item.css';

export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false,
            isEdit: false,
            inputValue: this.props.label
        };
    }

    onImportant = () => {
        this.setState(({
            important: !this.state.important
        }))
    }

    onLike = () => {
        this.setState({
            like: !this.state.like
        })
    }

    onSwitch = () => {
        this.setState({
            isEdit: !this.state.isEdit,
        });
    }

    onChange = (e) => {
        this.setState({
            inputValue: e.target.value,
        })
    }

    onCancel = () => {
        this.setState({
            inputValue: this.props.label,
            isEdit: false,
        })
    }

    render() {
        const {onDelete} = this.props;
        const {important, like, isEdit, inputValue} = this.state;
        let classNames = 'app-list-item d-flex justify-content-between';
        if (important) {
            classNames += ' important';
        }
        if (like) {
            classNames += ' like';
        }
        return (
            <div className={classNames}>
                {!isEdit ? 
                    <span 
                    className="app-list-item-label"
                    onClick={this.onLike}>
                        {inputValue}
                    </span>
                : 
                    <input
                    className="app-list-item-label"
                    onChange={this.onChange}
                    type="text"
                    value={inputValue}
                    autoFocus/>
                }
                <DateComponent/>
                
                <div className="d-flex justify-content-center align-items-center">
                    <button
                    type="button"
                    className="btn btn-sm"
                    onClick={this.onSwitch}>
                    {!isEdit ?
                        <i className="fa fa-edit"/>
                    :
                        <i className="fa fa-save"/>
                    }</button>
                    {isEdit ?
                        <button
                        type="button"
                        className="btn btn-sm"
                        onClick={this.onCancel}><i className="fa fa-ban"/></button>
                    :
                        null
                    }
                    <button 
                        type="button" 
                        className="btn btn-star btn-sm"
                        onClick={this.onImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-trash btn-sm"
                        onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}

const DateComponent = () => {
    
    let today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();   

    return (
        <div className='date d-flex justify-content-center align-items-center'>
            {date}
        </div>
    );    
}
