import React, { useState } from "react";
import "./ProfileDetailed.css";

/**
 *
 */
const ProfileDetailed = () => {
  const [readOnly, setReadOnly] = useState(true);
  return (
    <div className='profiledcontainer'>
      <div className='profiledetailed'>
        <div className='detailedleft'>
          <div>
            <label htmlFor='fullname'>Full Name:</label>
            <input
              name='fullname'
              type='text'
              defaultValue='TEST'
              readOnly={readOnly}
            />
          </div>
          <div>
            <label htmlFor='school'>School:</label>
            <input
              name='school'
              type='text'
              defaultValue='TEST'
              readOnly={readOnly}
            />
          </div>
          <div>
            <label htmlFor='country'>Location:</label>
            <input
              name='country'
              type='text'
              defaultValue='TEST'
              readOnly={readOnly}
            />
          </div>
          <div>
            <label htmlFor='pl1'>Programming Language #1:</label>
            <input
              name='pl1'
              type='text'
              defaultValue='TEST'
              readOnly={readOnly}
            />
          </div>
          <div>
            <label htmlFor='pl2'>Programming Language #2:</label>
            <input
              name='pl2'
              type='text'
              defaultValue='TEST'
              readOnly={readOnly}
            />
          </div>
          <div>
            <label htmlFor='pl3'>Programming Language #3:</label>
            <input
              name='pl3'
              type='text'
              defaultValue='TEST'
              readOnly={readOnly}
            />
          </div>
          <div>
            <label htmlFor='pl4'>Programming Language #4:</label>
            <input
              name='pl4'
              type='text'
              defaultValue='TEST'
              readOnly={readOnly}
            />
          </div>
          <div>
            <label htmlFor='pl5'>Programming Language #5:</label>
            <input
              name='pl5'
              type='text'
              defaultValue='TEST'
              readOnly={readOnly}
            />
          </div>
        </div>
        <div className='detailedright'>
          <h4>asdadds</h4>
          <h4>asdadsas</h4>
          <h4>asdasdas</h4>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailed;
