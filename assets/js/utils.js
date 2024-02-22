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

const openTab = (tabId) => {
  let tabContents = document.querySelectorAll(".pokemon-tab-content");
  for (const element of tabContents) {
    element.classList.remove("show");
  }

  let selectedTab = document.querySelector(`#${tabId}`);
  selectedTab.classList.add("show");
  console.log(selectedTab);
};
