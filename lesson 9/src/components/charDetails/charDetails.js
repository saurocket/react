import React, {Component} from 'react';
import './charDetails.css';
import gotService from '../../services/getService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage';
export default class CharDetails extends Component {

    gotService = new gotService();

    state = {
        char: null,
        error: false,
        loading: true
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    updateChar() {
        const {charId} = this.props;
        if (!charId) {
            return;
        }
        this.setState({
            loading: true
        })
        this.gotService.getCharacter(charId)
            .then((char) => {
                this.setState({
                    char,
                    loading: false
                })
            })
        // this.foo.bar = 0;
    }    

    render() {

        if (this.state.error) {
            return <ErrorMessage />
        }

        if(!this.state.char) {
            return <div className='select-error'>Please select a character</div>
        }        

        const {name, gender, born, died, culture} = this.state.char;
        
        if (this.state.loading) {
            return <Spinner/>  
        }        

        return (            
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}