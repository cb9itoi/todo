import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

    render() {
        return (
            <div className="item-add-form">
                <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.props.onItemAdded('Новая задача')}>
                    Add Item
                </button>
            </div>
        )
    }
}