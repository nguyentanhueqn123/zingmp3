const PLAYER_STORAGE_KEY = "ZING_PLAYER";

const config = JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {};

const setConfig = (key, value) => {
  config[key] = value;
  localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(config));
};

export { PLAYER_STORAGE_KEY, config, setConfig };
