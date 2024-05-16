import "./Products.css";
import React from 'react';
import Modal from 'react-modal';

const SizeModal = ({ isOpen, onRequestClose }) => {
    const handleOpenModal = () => {
        document.body.style.overflow = "hidden"; // Disable scrolling when modal opens
    };
    const handleCloseModal = () => {
        document.body.style.overflow = "auto"; // Re-enable scrolling when modal closes
    };

    return (
        <Modal
            className="sizemodal"
            overlayClassName="sizemodaloverlay"
            isOpen={isOpen}
            onOpen={handleOpenModal}
            onClose={handleCloseModal}
            onRequestClose={onRequestClose}
            contentLabel="Size Guide"
        >
            <h2>Size Chart</h2>
            <p>Understanding shoe sizes is crucial for finding the perfect fit. Our size chart provides a comprehensive guide for both
                men's and women's kicks, including conversions for US, UK, and EU sizes. Remember, each foot is unique,
                so be sure to measure your foot length accurately and refer to our size chart before making your selection.</p>
            <div className="shoe-size-table">
                <table>
                    <thead>
                        <tr>
                            <th>US - Men's</th>
                            <th>US - Women's</th>
                            <th>UK</th>
                            <th>EU</th>
                            <th>Foot Length (in)</th>
                            <th>Foot Length (cm)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>8</td>
                            <td>9.5</td>
                            <td>7</td>
                            <td>41</td>
                            <td>10</td>
                            <td>25.4</td>
                        </tr>
                        <tr>
                            <td>8.5</td>
                            <td>10</td>
                            <td>7.5</td>
                            <td>41.5</td>
                            <td>10 1/6</td>
                            <td>25.9</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>10.5</td>
                            <td>8</td>
                            <td>42</td>
                            <td>10 1/3</td>
                            <td>26.2</td>
                        </tr>
                        <tr>
                            <td>9.5</td>
                            <td>11</td>
                            <td>8.5</td>
                            <td>42.5</td>
                            <td>10 1/2</td>
                            <td>26.7</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>11.5</td>
                            <td>9</td>
                            <td>43</td>
                            <td>10 2/3</td>
                            <td>27.1</td>
                        </tr>
                        <tr>
                            <td>10.5</td>
                            <td>12</td>
                            <td>9.5</td>
                            <td>44</td>
                            <td>10 4/5</td>
                            <td>27.6</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>12.5</td>
                            <td>10</td>
                            <td>44.5</td>
                            <td>11</td>
                            <td>27.9</td>
                        </tr>
                        <tr>
                            <td>11.5</td>
                            <td>13</td>
                            <td>10.5</td>
                            <td>45</td>
                            <td>11 1/6</td>
                            <td>28.3</td>
                        </tr>
                    </tbody>
                </table>
                <div className='modal-close-button-container'>
                    <button onClick={onRequestClose} className="modal-close-button">Close</button>
                </div>
            </div>
        </Modal>
    );
};

export default SizeModal;
