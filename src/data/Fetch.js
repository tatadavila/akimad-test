import axios from "axios";

const authenticate = async () => {
  try {
    const response = await axios.get(
      `https://github.com/login/oauth/authorize`,
    );
    console.log({ response });
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (username) => {
  try {
    const { data, status } = await axios.get(
      `https://api.github.com/users/${username}`,
    );
    const userInfo = { data, status };
    return await userInfo;
  } catch (error) {
    console.log({ error });
  }
};

export { authenticate, getUser };
