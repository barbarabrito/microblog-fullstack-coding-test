import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '550px'
    },
};

export const Modal = () => {
    let subtitle;

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = (id) => {
        setIsOpen(true);
        handleReq(id);
    }

    const afterOpenModal = () => {
        subtitle.style.color = '#34414c';
        subtitle.style.textAlign = 'center';
    }

    const closeModal = () => {
        setIsOpen(false);
    }


    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <button onClick={closeModal} id={styles.btn_close_modal}><RiCloseFill /></button>
            <br />
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}> Edit Post</h2>
            <br />
            {veiculos.length == 0 ? <div className={styles.no_vehicle}><p><strong>Este usuário não possui veículos cadastrados</strong></p></div> : (
                veiculos.map(veiculo => (

                    <div className={styles.container_show_vehicles} key={veiculo._id}>
                        <p>Marca: {veiculo.marca}</p>
                        <p>Modelo: {veiculo.modelo}</p>
                        <p>Ano: {veiculo.ano}</p>
                        <p>Placa: {veiculo.placaVeiculo}</p>
                        <button title="Editar veículo" onClick={(e) => { navigateToEditVehiclePage(veiculo._id) }} id={styles.btn_edit_vehicle}>
                            <MdEdit />
                        </button>
                        &nbsp;
                        <button title="Deletar veículo" onClick={(e) => { deleteVehicle(veiculo._id) }} className={styles.btn_delete}>
                            <MdDelete />
                        </button>
                    </div>
                ))
            )}
        </Modal>
    )
}

Modal.setAppElement('#root');