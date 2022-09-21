import { notifications } from "./../stores/notifications";
import { functions } from "./firebase";

export default {
  email: {
    sendEmail: (data) => callFunction("email-sendEmail", data),
  },
};

export function callFunction(name, data = {}) {
  return functions
    .httpsCallable(name)(data)
    .then((result) => {
      result.data;
    })
    .catch((e) => {
      notifications.error(e.message);
      console.error(e);
    });
}
