import React, {Component} from 'react';
// import idGenerator from 'react-id-generator';

import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import PostStatusFilter from '../post-status-filter/';
import PostList from '../post-list/';
import PostAddForm from '../post-add-form/';

import './app.css';

import newId from './keyid';

export default class App extends Component {
    constructor(props) {
        super(props);
        const data = [
            {label: 'Going to lealrn React', important: true, like: false, id: newId()},
            {label: 'That is so good', important: false, like: false, id: newId()},
            {label: 'I need a break...', important: false, like: false, id: newId()},
            `string`,
            5,
            null,
            true,
            [],
        ]
        const filterIt = data.filter(item => typeof item === "object" && !(item instanceof Array) && item);
        this.state = {
            data: filterIt
        };
    }
        
    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newArr
            } 
        });
    }

    addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            id: newId()
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleImportant = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return {
                data: newArr
            }
        })
    }

    onToggleLike = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return {
                data: newArr
            }
        })
    }

    render() {
        const {data} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        return (
            <div className="app">
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList
                    posts={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLike={this.onToggleLike}/>
                <PostAddForm
                    onAdd={this.addItem}/>    
            </div>        
        )
    }
}

