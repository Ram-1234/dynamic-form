import React from "react";
import FetchData from "../hook/hook";
import UserCard from "./card";
import Loader from "../loader/loader";
import { USERS_API } from "../../api/services";

const Users = () => {
  const users = FetchData(USERS_API);

  return (
    <div className="user_container">
      {!users?.length > 0 && <Loader />}
      {users &&
        users.map((item, index) => {
          return <UserCard key={item.id} {...item} />;
        })}
    </div>
  );
};

export default Users;
