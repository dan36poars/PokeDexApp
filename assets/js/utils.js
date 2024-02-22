/**
 * @brief get literal object {key=value} pokemon from url
 * @returns object
 */
const getQueryStringParams = () => {
  const queryString = window.location.search.substring(1);
  const params = {};
  const pair = queryString.split("=");
  let key = decodeURIComponent(pair[0]);
  let value = decodeURIComponent(pair[1]);
  params[key] = value;
  return params;
};

/**
 * @brief show tab when clicked
 * @param {Object} event
 * @param {string} tabId
 */
const openTab = (event, tabId) => {
  const eventName = event.currentTarget;
  let tabContents = document.querySelectorAll(".pokemon-tab-content");
  let tabHeader = document.querySelectorAll(".pokemon-tab");

  for (const element of tabHeader) {
    element.classList.remove("active");
  }

  for (const element of tabContents) {
    element.classList.remove("show");
  }

  const selectedTab = document.querySelector(`#${tabId}`);
  selectedTab.classList.add("show");
  eventName.classList.add("active");
};
