import React, {Component} from 'react';
import './itemDetails.css';
import gotService from '../../services/getService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage';

const Field = ({item, field, label}) => {
    
    if(Array.isArray(item[field]) && !item[field][0]) {
        item[field] = item[field][0];
    }              
    
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field] || 'nodate:}'}</span>
        </li>
    )
}

export {
    Field
}
export default class ItemDetails extends Component {

    gotService = new gotService();

    state = {
        item: null,
        error: false,
        loading: true
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    updateItem() {
        const {itemId, getDataId} = this.props;
        if (!itemId) {
            return;
        }
        this.setState({
            loading: true
        })
        getDataId(itemId)
        .then((item) => {
            this.setState({
                item,
                loading: false
            })
        })
        // this.foo.bar = 0;
    }    

    render() {
        const {plaseSelect} = this.props;

        if (this.state.error) {
            return <ErrorMessage />
        }

        if(!this.state.item) {
            return <div className='select-error'>{plaseSelect}</div>
        }        

        const {item} = this.state;
        const {name} = item;
        
        if (this.state.loading) {
            return <Spinner/>  
        }        

        return (            
            <div className="char-details rounded">
                <h4>{name || 'nodate:}'}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </div>
        );
    }
}