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
        let { event } = this.props;

        return (
            <section className="modal-container" id="modal">
                <div className="modal-content">
                    <ModalInfo event={event} />
                    <button className="modal-close-btn" onClick={this.onClose}>X</button>
                </div>
            </section>
        );
    }
}

export default Modal;