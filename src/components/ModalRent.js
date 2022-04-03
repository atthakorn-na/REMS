import Modal, {
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalTitle,
    ModalTransition,
  } from '@atlaskit/modal-dialog';

const ModalRent = ({isOpen, closeModal, handleChange, handleSubmit}) => {
    return (
        <ModalTransition>
          {isOpen && (
            <Modal onClose={closeModal}>
              <ModalHeader>
                <ModalTitle>Rental Detail</ModalTitle>
              </ModalHeader>
              <ModalBody>
                <input type="text"
                  required="required"
                  placeholder="Customer Email"
                  name="customerEmail"
                  onChange={handleChange} 
                />
                <input type="text"
                  required="required"
                  placeholder="Rent Date"
                  name="date"
                  onChange={handleChange}
                />
              </ModalBody>
              <ModalFooter>
                <button appearance="subtle" onClick={closeModal} autoFocus>Cancel</button>
                <button appearance="primary" onClick={handleSubmit}>Rent</button>
              </ModalFooter>
            </Modal>
          )}
        </ModalTransition>
    )
}

export default ModalRent;