import { useEffect, useState } from "react";
import tmdb from "~/API/tmdb";
import { Modal, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

import ModalConfirm from '~/Components/Page/Modal/ModalConfirm';

function Categories() {
    const [loadAgain, setLoadAgain] = useState(false);
    const [show, setShow] = useState(false);
    const [titleModal, setTitleModal] = useState('Create');
    const [name, setName] = useState('')
    const [isUpdate, setIsUpdate] = useState(false)
    const [selectedID, setSelectedID] = useState('')
    const [showModalConfirm, setShowModalConfirm] = useState(false)

    const handleShow = (item) => {
        var obj = item.obj
        if (obj) {
            setIsUpdate(true)
            setTitleModal("Update")
            setName(obj.name)
            setSelectedID(obj._id)
        }
        else {
            setName('')
            setSelectedID('')
        }
        setShow(true)
    };
    const handleClose = () => {
        setShow(false)
        setTitleModal("Create")
        setLoadAgain(!loadAgain)

    };

    const handleSubmit = async (item) => {
        try {
            if (!item.id) {
                const response = await tmdb.post(`/api/category`, {
                    name
                });
                alert("Add Success")
                handleClose()

            }
            else {
                const response = await tmdb.put(`/api/category/${item.id}`, {
                    name
                });
                alert("Update Success")
                handleClose()

            }
            // Thực hiện xử lý dữ liệu submit trả về (nếu có)
        } catch (error) {
            alert("Failure")
            // Xử lý lỗi (nếu có)
        }
    };


    const closeModalConfirm = () => {
        setShowModalConfirm(false)
    }

    const openConfirm = (id) => {
        setShowModalConfirm(true)
        setSelectedID(id);
    };

    const handleConfirm = async (id) => {
        try {
            const response = await tmdb.delete(`/api/category/${id}`);
            console.log('Submit response:', response.data);
            // Thực hiện xử lý dữ liệu submit trả về (nếu có)
        } catch (error) {
            console.error('Submit error:', error);
            // Xử lý lỗi (nếu có)
        }
        setLoadAgain(!loadAgain);
    };




    const [categories, setCategories] = useState([]);

    useEffect(() => {
        tmdb.get('/api/category')
            .then((res) => {
                setCategories(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [loadAgain]);

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between">
                            <div>
                                <h1 className="mb-0">Category</h1>
                                <p className="text-sm mb-0">
                                    A lightweight, extendable, dependency-free javascript HTML table plugin.
                                </p>
                            </div>
                            <button onClick={handleShow} className="btn
                                        bg-gradient-success my-sm-auto mt-2 mb-0 d-flex align-items-center" type="button" name="button"><i className="fa fa-plus
                                                me-2" /><span>Add</span></button>
                        </div>
                        <div className="table-responsive">
                            <div className="dataTable-wrapper dataTable-loading no-footer sortable fixed-height
                                        fixed-columns">
                                <div className="dataTable-container">
                                    <table className="table table-flush dataTable-table" id="datatable-basic">
                                        <thead className="thead-light">
                                            <tr>
                                                <th className="text-uppercase text-secondary
                                                                                text-xxs font-weight-bolder opacity-7" data-sortable style={{ width: '19.8797%' }}><a href="#" className="dataTable-sorter">Order</a>
                                                </th>
                                                <th className="text-uppercase text-secondary
                                                                                text-xxs font-weight-bolder opacity-7" data-sortable style={{ width: '27.4808%' }}><a href="#" className="dataTable-sorter">Name</a>
                                                </th>
                                                <th className="text-uppercase text-secondary
                                                                                text-xxs font-weight-bolder opacity-7" data-sortable style={{ width: '27.4808%' }}><a href="#" className="dataTable-sorter">Created</a>
                                                </th>
                                                <th className="text-center text-uppercase
                                                                                text-secondary text-xxs
                                                                                font-weight-bolder opacity-7" style={{ width: '2%' }}><a href="#">Action</a>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {categories && categories.length > 0 ?
                                                categories.map((item, index) => {
                                                    return (
                                                        <tr key={index + 1}>
                                                            <td className="text-sm font-weight-normal">
                                                                {index + 1}
                                                            </td>
                                                            <td className="text-sm font-weight-normal">
                                                                {item.name}
                                                            </td>
                                                            <td className="text-sm font-weight-normal">
                                                                {(new Date(item.createdAt)).toLocaleDateString('en-GB')}
                                                            </td>
                                                            <td className="text-center text-sm
                                                                                font-weight-normal">
                                                                <button id="btnDelete" onClick={() => openConfirm(item._id)} className="btn"><FontAwesomeIcon icon={faTrash} /></button>
                                                                <button action="Edit" onClick={() => { handleShow({ obj: item }) }} className="btn"><FontAwesomeIcon icon={faPen} /></button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                                : <tr><td>No data</td></tr>}

                                        </tbody>
                                    </table>
                                </div>
                                <div className="dataTable-bottom">
                                    <div className="dataTable-info">Showing 1 to 10 of 57 entries</div>
                                    <nav className="dataTable-pagination">
                                        <ul className="dataTable-pagination-list">
                                            <li className="pager"><a href="#" data-page={1}>‹</a>
                                            </li>
                                            <li className="active"><a href="#" data-page={1}>1</a>
                                            </li>
                                            <li className="pager"><a href="#" data-page={2}>›</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{titleModal}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => { handleSubmit({ id: selectedID }) }}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                <ModalConfirm show={showModalConfirm}
                    handleClose={closeModalConfirm}
                    onComfirm={handleConfirm} id={selectedID} />
            </div>
        </div>

    );
}

export default Categories;
