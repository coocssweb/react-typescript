import * as React from 'react';
const Profile = ({history}) => {
    return (
        <div className="page page-appear page-profile transition-item">
            <button onClick={() => {history.goBack()}}>back</button>
            <div>
                Profile Page
            </div>
        </div>
    );
}

export default Profile;