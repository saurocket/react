import React from 'react';
import styled from 'styled-components';

import './post-add-form.css';

const BottomPanel = styled.div`
    display: flex;
    margin-top: 20px;
`

const PostAddForm = ({onAdd}) => {
    return (
        <BottomPanel>
            <input
                text="text"
                placeholder="О чем вы думаете сейчас"
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary"
                onClick={() => onAdd('Hello')}>
                Добавить
                </button>
        </BottomPanel>
    )
}

export default PostAddForm;