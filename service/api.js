import axios from "axios";

axios.defaults.baseURL = "https://franchise.alcoopt.com.ua";

export const callback = async (formData) => {
  try {
    const data = await axios.post("/callback.php", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
