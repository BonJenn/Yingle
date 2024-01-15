import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './ProfileModal.css';

function ProfileModal({modalOpened, setModalOpened, data}) {
  const theme = useMantineTheme();
  const {password, ...other} = data || {};
  const [formData, setFormData] = useState(other)
  const [profileImage, setProfileImage] = useState(null)
  const [coverImage, setCoverImage] = useState(null)
  const dispatch = useDispatch()
  const param = useParams()
  const {user} = useSelector((state)=>state.authReducer.authData)
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

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

                <input type="text" className="infoInput" name="firstName" placeholder="First Name" onChange={handleChange}  value = {formData.firstname}/>
                <input type="text" className="infoInput" name="lastName" placeholder="Last Name" onChange={handleChange} value = {formData.lastname}/>

            </div>

            <div>
                <input type="text" className="infoInput" name="worksAt" placeholder="Works at" onChange={handleChange}  value = {formData.worksAt} />
            </div>

            <div>
                <input type="text" className="infoInput" name="salary" placeholder="Annual salary" onChange={handleChange}  value = {formData.salary} />
            </div>

            <div>
                <input type="text" className="infoInput" name="livesin" placeholder="Lives in" onChange={handleChange}  value = {formData.livesin} />

                <input type="text" className="infoInput" name="country" placeholder="Country" onChange={handleChange}  value = {formData.country} />
            </div>

            <div>
                <input type="text" className="infoInput" name="relationship" placeholder="Relationship status" onChange={handleChange}  value = {formData.relationship}/>

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
