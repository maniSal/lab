import React, { useEffect } from "react";
import User from "./User";
import {useSelector} from 'react-redux'
import Loading from "./Loading";

const ListUsers = () => {
  const users = useSelector((state) => state.userReducer.user);
  const isLoad = useSelector((state) => state.userReducer.isLoad);

  // Fall back to an empty object when users is null/undefined
  const safeUsers = users || {};

  return (
    <div>
      {isLoad && <Loading />}
      {Object.values(safeUsers).filter((user)=>user.isAdmin!==true).map((user) => (
        <User key={user._id} user={user} />
      ))}
    </div>
  );
};


export default ListUsers;