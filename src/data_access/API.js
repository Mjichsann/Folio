import axios from "axios";

const apiEndpoint = `${process.env.REACT_APP_BASE_URL}`;

const getDataPost = async (url, body, callback, errorCallback) => {
  try {
    const response = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    callback(response.data);
  } catch (error) {
    errorCallback(error);
  }
};

export const getToken = (payload, callback, errorCallback) => {
  const url = `${apiEndpoint}/dolphin/apiv1/graph/auth`;
  const body = JSON.stringify(payload);
  getDataPost(url, body, callback, errorCallback);
};

export const postDataUsingAuth = async (
  url,
  header,
  callback,
  errorCallback
) => {
  try {
    const response = await axios.post(
      url,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + header,
        },
      }
    );
    callback(response.data);
  } catch (error) {
    errorCallback(error);
  }
};
export const getDataUsingAuth = async (
  url,
  header,
  callback,
  errorCallback
) => {
  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + header,
      },
    });
    callback(response.data);
  } catch (error) {
    errorCallback(error);
  }
};

export const getDataPengajuan = (payload, callback, errorCallback) => {
  const url = `${apiEndpoint}/dolphin/apiv1/graph/workflow/2a400b6d082d8a46388c2fee940f38cb/WF/node-1647586704533/dataQueryPengajuan`;
  const body = JSON.stringify(payload);
  getDataPost(url, body, callback, errorCallback);
};
