import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalConfirm = ({ id, show, handleClose, onComfirm, title, content }) => {
        if (!title) {
                title = "Confirm Delete"
        }
        if (!content) {
                content = `Are you sure you want to delete this item?`
        }
        const handleConfirm = () => {
                // Xử lý xóa dữ liệu với id
                onComfirm(id)
                handleClose()
        };
        return (
                <Modal show={show} onHide={handleClose} centered>
                        <Modal.Header closeButton>
                                <Modal.Title>{title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                                {content}
                        </Modal.Body>
                        <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                        Cancel
                                </Button>
                                <Button variant="danger" onClick={handleConfirm}>
                                        Delete
                                </Button>
                        </Modal.Footer>
                </Modal>
        );
};

export default ModalConfirm;
