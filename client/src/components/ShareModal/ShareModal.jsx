import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import PostShare from '../../pages/home/PostSide/PostShare/PostShare';




function ShareModal({modalOpened, setModalOpened}) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        size="80vw" // set the size here
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <PostShare/>
      </Modal>
    </>
  );
}

export default ShareModal;
