import React, { Component } from 'react';
import  ModalInfo from './modalInfo';
import './modal.css';

class Modal extends Component {
    state = {
        show: false,
        showHideDetails: false,
    };
    
    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
    };

    render() {
        let { event, open } = this.props.event;
        if (open) {
            return null;
        }

        return (
            <section className="modal-container" id="modal">
                <div className="modal-content">
                    <ModalInfo event={event} />
                    <button onClick={this.onClose}>Close Modal</button>
                </div>
            </section>
        );
    }
}

export default Modal;