// dummy
export const loginApi = async (email, password) => {
  // Dummy admin & user
  if (email === "suga@mail.com" && password === "suganteng") {
    return { email, role: "admin" };
  } else if (email === "user@mail.com" && password === "userganteng") {
    return { email, role: "user" };
  } else {
    throw new Error("Invalid credentials");
  }
};
