import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ModalCreate = ({ size, value, show, handleClose, onSave, obj }) => {
        let title = 'Create'
        console.log(obj);
        if (obj) {
                title = 'Update'
        }

        const [inputValue, setInputValue] = useState(value);
        const handleSave = () => {
                onSave(inputValue);
                handleClose();
        };
        return (
                <Modal size={size} show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                                <Modal.Title>{title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                                <Form.Group controlId="formBasicInput">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                                type="text"
                                                value={inputValue}
                                                onChange={(e) => setInputValue(e.target.value)}
                                        />
                                </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                        Close
                                </Button>
                                <Button variant="primary" onClick={handleSave}>
                                        Save Changes
                                </Button>
                        </Modal.Footer>
                </Modal>
        );
};

export default ModalCreate;
