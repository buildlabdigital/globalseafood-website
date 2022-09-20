import { writable, derived } from "svelte/store";

const NOTIFICATION_TIMEOUT = 3000;

const createStore = () => {
  const _notifications = writable([]);

  const push = (message, type = "success") => {
    _notifications.update((state) => {
      if (state && state.length && state.find((n) => n.message === message))
        return [...state];
      return [...state, { id: id(), type, message }];
    });
  };

  let timers = [];

  const notifications = derived(_notifications, ($_notifications, set) => {
    set($_notifications);
    if ($_notifications.length > 0) {
      const timeout = setTimeout(() => {
        _notifications.update((state) => {
          state.shift();
          return state;
        });
      }, NOTIFICATION_TIMEOUT);
      return () => {
        clearTimeout(timeout);
      };
    }
  });

  const { subscribe } = notifications;

  return {
    subscribe,
    push,
    success: (msg) => push(msg, "success"),
    info: (msg) => push(msg, "info"),
    warning: (msg) => push(msg, "warning"),
    error: (msg) => push(msg, "error"),
  };
};

function id() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

export const notifications = createStore();

export const userNotifications = writable([]);
