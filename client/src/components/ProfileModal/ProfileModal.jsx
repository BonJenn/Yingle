import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import './ProfileModal.css';

function ProfileModal({modalOpened, setModalOpened}) {
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
        <form className='infoForm'>
            <h3>Your info</h3>

            <div>

                <input type="text" className="infoInput" name="FirstName" placeholder="First Name" />
                <input type="text" className="infoInput" name="LastName" placeholder="Last Name" />

            </div>

            <div>
                <input type="text" className="infoInput" name="worksAt" placeholder="Works at" />
            </div>

            <div>
                <input type="text" className="infoInput" name="salary" placeholder="Annual salary" />
            </div>

            <div>
                <input type="text" className="infoInput" name="livesIn" placeholder="Lives in" />

                <input type="text" className="infoInput" name="Country" placeholder="Country" />
            </div>

            <div>
                <input type="text" className="infoInput" name="relationshipStatus" placeholder="Relationship status" />

            </div>

            <div>
                Profile Image 
                <input type="file" name='profileImage'/>
                Cover Image
                <input type="file" name='coverImage'/>
            </div>

            <button className="button infoButton">Update</button>


        </form>
      </Modal>

      {/* <Button onClick={() => setModalOpened(true)}>Open modal</Button> */}
    </>
  );
}

export default ProfileModal;
