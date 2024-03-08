function returnFirstTwoDrivers(drivers) {
    const [firstDriver, secondDriver] = drivers;
    return [firstDriver, secondDriver];
  }
  
  function returnLastTwoDrivers(drivers) {
    const [secondLastDriver, lastDriver] = drivers.slice(-2);
    return [secondLastDriver, lastDriver];
  }
  
  const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
  ];
  
  function createFareMultiplier(multiplier) {
    return function (value) {
      return value * multiplier;
    };
  }
  
  const fareDoubler = createFareMultiplier(2);
  
  const fareTripler = createFareMultiplier(3);
  
  function selectDifferentDrivers(drivers, selectingFunction) {
    return selectingFunction(drivers);
  }