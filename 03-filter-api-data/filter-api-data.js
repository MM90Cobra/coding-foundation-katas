function filterApiData(apiData, mandatoryKeys) {
  return apiData.filter((item) =>
    mandatoryKeys.every((key) => item.hasOwnProperty(key))
  );
}
