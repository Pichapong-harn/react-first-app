import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USER = [{ id: "u1", name: "penguin kanong", image: "", places: 3 }];
  return <UsersList items={USER} />;
};

export default Users;
