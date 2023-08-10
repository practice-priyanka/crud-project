import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import '../css/Delete.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { deleteEmployee } from '../services/FetchEmployee';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Delete = ({ showModal, hideModal, id, message }) => {
  const confirmModal = (id) => {
    (async () => {
      await deleteEmployee(id);
    })()
    hideModal(false);
  }
  return (
    <>
      <Modal
        open={showModal}
        onClose={hideModal}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete Confirmation
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {message}
          </Typography>
          <Button variant="contained" color='error' className='my-2' onClick={() => confirmModal(id)}>Delete</Button>
          <Button variant="outlined" className='mx-2' onClick={hideModal}>Cancel</Button>
        </Box>
      </Modal>
    </>
  )
};

export default Delete;