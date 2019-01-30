import React, {Component} from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ModalWindows from '../modal/';

import './post-list-item.css';

export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            inputValue: this.props.label,
            modal: false        
        };
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

    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }

    render() {
        const {onToggleImportant, onToggleLike, important, like} = this.props;
        const {isEdit, inputValue} = this.state;
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
                    onClick={onToggleLike}>
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
                        onClick={onToggleImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-trash btn-sm"
                        onClick={this.toggle}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <ModalWindows 
                    onDelete={this.props.onDelete}
                    toggle={this.toggle}
                    modal={this.state.modal}/>                   
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
