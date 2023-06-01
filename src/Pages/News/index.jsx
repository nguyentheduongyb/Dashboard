import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./News.module.scss";
import { useEffect, useState } from "react";
import tmdb from "~/API/tmdb";
import ModalCreate from '~/Components/Page/Modal/ModalCreate';
import ModalConfirm from '~/Components/Page/Modal/ModalConfirm';

import { request } from "~/API/request";
const cx = classNames.bind(styles);

function Genre() {
    const [selectedId, setSelectedId] = useState(null)
    const [objDetail, setObjDetail] = useState({})
    const [showModalDelete, setShowModalDelete] = useState(false)
    const [showModalConfirm, setShowModalConfirm] = useState(false)
    const [loadAgain, setLoadAgain] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const openModal = (item) => {
        setObjDetail(item)
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
    const handleSave = async (inputValue) => {
        try {
            const response = await tmdb.post('/api/movie/genre/store', { name: inputValue });
            console.log('Submit response:', response.data);
            // Thực hiện xử lý dữ liệu submit trả về (nếu có)
        } catch (error) {
            console.error('Submit error:', error);
            // Xử lý lỗi (nếu có)
        }
        setLoadAgain(!loadAgain);
    };

    const closeModalConfirm = () => {
        setShowModalConfirm(false)
    }

    const openConfirm = (id) => {
        setShowModalConfirm(true)
        setSelectedId(id);
    };

    const handleConfirm = async (id) => {
        try {
            const response = await tmdb.delete(`/api/movie/genre/${id}`);
            console.log('Submit response:', response.data);
            // Thực hiện xử lý dữ liệu submit trả về (nếu có)
        } catch (error) {
            console.error('Submit error:', error);
            // Xử lý lỗi (nếu có)
        }
        setLoadAgain(!loadAgain);
    };
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const { data } = await tmdb.get('/api/movie/genre');
            setGenres(data);

        };
        fetchMovies();
    }, [loadAgain]);

    return (
        <div className="row mt-4">
            <div className="col-12">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <div>
                            <h5 className="mb-0">Category Movie</h5>
                            <p className="text-sm mb-0">
                                A lightweight, extendable, dependency-free javascript HTML table plugin.
                            </p>
                        </div>
                        <button onClick={() => { openModal({}) }} className="btn
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
                                            <th className="text-center text-uppercase
                                                                                text-secondary text-xxs
                                                                                font-weight-bolder opacity-7" style={{ width: '2%' }}><a href="#">Action</a>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {genres.length > 0 ?
                                            genres.map((item, index) => {
                                                return (
                                                    <tr key={index + 1}>
                                                        <td className="text-sm font-weight-normal">
                                                            {index + 1}
                                                        </td>
                                                        <td className="text-sm font-weight-normal">
                                                            {item.name}
                                                        </td>
                                                        <td className="text-center text-sm
                                                                                font-weight-normal">
                                                            <button id="btnDelete" onClick={() => openConfirm(item._id)} className="btn"><i className="fa
                                                                                                fa-trash" /></button>
                                                            <button onClick={() => { openModal(item) }} action="Edit" className="btn"><i className="fa
                                                                                                fa-pen" /></button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                            : <tr><td>No data</td></tr>}
                                        <ModalConfirm show={showModalConfirm}
                                            handleClose={closeModalConfirm}
                                            onComfirm={handleConfirm} id={selectedId} />
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
            <ModalCreate
                size="lg"
                obj={objDetail}
                title="Custom Modal"
                value="Some value"
                show={showModal}
                handleClose={closeModal}
                onSave={handleSave}
            />
        </div>
    );
}

export default Genre;
