// dummy

export const loginApi = async (email, password) => {
  // Dummy admin & user
  if (email === "suga@mail.com" && password === "suganteng") {
    return { email, username: "sugay", role: "admin" };
  } else if (email === "user@mail.com" && password === "userganteng") {
    return { email, username: "afdahl keren", role: "user", status: "active" };
  } else {
    throw new Error("Invalid credentials");
  }
};

export const fetchAllUsers = async () => {
  return [
    {
      email: "suga@mail.com",
      username: "sugay",
      role: "admin",
      status: "inactive",
    },
    {
      email: "afdhalganteng@mail.com",
      username: "budi",
      role: "user",
      status: "active",
    },
    {
      email: "rajaganteng@mail.com",
      username: "rajaganteng",
      role: "admin",
      status: "inactive",
    },
    {
      email: "rezaganteng@mail.com",
      username: "budi",
      role: "user",
      status: "active",
    },
    {
      email: "azkaganteng@mail.com",
      username: "azka",
      role: "admin",
      status: "inactive",
    },
    {
      email: "user@mail.com",
      username: "budi",
      role: "user",
      status: "active",
    },
    {
      email: "user@mail.com",
      username: "budi",
      role: "user",
      status: "active",
    },
    {
      email: "user@mail.com",
      username: "budi",
      role: "user",
      status: "active",
    },
    {
      email: "user@mail.com",
      username: "budi",
      role: "user",
      status: "active",
    },
    {
      email: "user@mail.com",
      username: "budi",
      role: "user",
      status: "active",
    },
    {
      email: "user@mail.com",
      username: "budi",
      role: "user",
      status: "active",
    },
    {
      email: "user@mail.com",
      username: "budi",
      role: "user",
      status: "active",
    },
  ];
};
