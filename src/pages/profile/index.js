import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ClearIcon from "@mui/icons-material/Clear";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [profilePic, setProfilePic] = useState("https://via.placeholder.com/200");
  const [tempProfilePic, setTempProfilePic] = useState(profilePic); // Temporary state
  const [isEditing, setIsEditing] = useState(false);
  const [showFileInput, setShowFileInput] = useState(false);
  const navigate = useNavigate();
  const [showbtn, setShowBtn] = useState(true);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (currentUser && users.length > 0) {
      const matchedUser = users.find(user => user.username === currentUser.username);

      if (matchedUser) {
        setFirstName(matchedUser.firstname || "");
        setLastName(matchedUser.lastname || "");
        setUsername(matchedUser.username || "");
        setContact(matchedUser.contact || "");
        setProfilePic(matchedUser.profilePic || "https://via.placeholder.com/200");
        setTempProfilePic(matchedUser.profilePic || "https://via.placeholder.com/200"); // Keep temp profile pic in sync
      }
    }
  }, []);

  const handleSave = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const updatedUsers = users.map(user =>
      user.username === currentUser.username
        ? { ...user, firstname: firstName, lastname: lastName, contact: contact, profilePic: tempProfilePic }
        : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify({ ...currentUser, firstname: firstName, lastname: lastName, contact: contact, profilePic: tempProfilePic }));

    setProfilePic(tempProfilePic); // Save the selected image
    setIsEditing(false);
    setShowFileInput(false);
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setTempProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setTempProfilePic(profilePic); // Revert changes
    setShowFileInput(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex justify-center items-center">
      <ArrowBackOutlinedIcon
        onClick={() => navigate(-1)}
        className="absolute top-8 left-7 text-gray-500 z-50 cursor-pointer hover:text-gray-700 hover:bg-gray-100"
        sx={{ borderRadius: "50%", height: "31px", width: "31px" }}
      />
      <div className="w-full max-w-4xl border-[3px] p-10 rounded-lg flex flex-col md:flex-row items-center gap-10 py-16">
        {/* Profile Image and Editing Section */}
        <div className="flex flex-col items-center w-full md:w-1/2">
          <img
            src={isEditing ? tempProfilePic : profilePic}
            alt="Profile"
            className="w-48 h-48 rounded-full border-4 border-gray-300 shadow-md"
          />
          {isEditing && (
            <>
              {showbtn && <button
                className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                onClick={() => {setShowFileInput(!showFileInput); setShowBtn(false)}}
              >
                Change Photo
              </button>}
              {showFileInput && (
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePicChange}
                  className="mt-3"
                />
              )}
            </>
          )}
        </div>

        {/* Profile Details */}
        <div className="w-full md:w-1/2">
          {isEditing ? (
            <div className="space-y-4">
              <div className="text-right">
                <ClearIcon
                  className="text-gray-500 hover:text-gray-700 cursor-pointer"
                  sx={{ width: "21px", height: "21px" }}
                  onClick={handleCancelEdit}
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1 tracking-wider">First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full border p-2 rounded tracking-wide"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1 tracking-wider">Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full border p-2 rounded tracking-wide"
                />
              </div>
            </div>
          ) : (
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-5 tracking-wide">
                {firstName} {lastName}
              </h3>
            </div>
          )}
          <p className="text-gray-700 text-[17px] mt-5 mb-1 tracking-wider">Username: {username}</p>
          <p className="text-gray-700 text-[17px] tracking-wider">Contact: {contact}</p>
          <button
            onClick={isEditing ? handleSave : () => {setIsEditing(true); setShowBtn(true)}}
            className="mt-7 px-7 py-2 bg-gray-700 text-white rounded hover:bg-black w-fit"
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
