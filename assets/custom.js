const API =
  'https://proxy-server-cache.herokuapp.com/https://api.fitmentatlas.com/v1.1/services/Vehicles';

var request = {
  method: 'GET',
  withCredentials: true,
  headers: {
    'FG-ApiKey': 'oTDDEpfWGThix4HUtXZTev6sPp8zsWnH',
    'Content-Type': 'application/json',
  },
};

function loadYears() {
  fetch(API + '/years', request)
    .then((response) => {
      return response.json();
    })
    .then((jsondata) => {
      generateYearOptions(jsondata.result);
    });
}

if (window.location.pathname === '/') {
  loadYears();
}

function loadMakes(year) {
  fetch(API + '/makes?yearid=' + year, request)
    .then((response) => {
      return response.json();
    })
    .then((jsondata) => {
      generateMakeOptions(jsondata.result);
    });
}

function loadModels(make) {
  const year = document.querySelector('#vehicle-year').value;

  fetch(API + '/models?yearid=' + year + '&makeid=' + make, request)
    .then((response) => {
      return response.json();
    })
    .then((jsondata) => {
      generateModelOptions(jsondata.result);
    });
}

function loadSubmodels(model) {
  const make = document.querySelector('#vehicle-make').value;
  const year = document.querySelector('#vehicle-year').value;

  fetch(
    API +
      '/smartsubmodels?yearid=' +
      year +
      '&makeid=' +
      make +
      '&modelid=' +
      model +
      '&ProductType=wheel',
    request
  )
    .then((response) => {
      return response.json();
    })
    .then((jsondata) => {
      generateSubModelOptions(jsondata.result);
    });
}

function loadSizes(submodel) {
  const model = document.querySelector('#vehicle-model').value;
  const make = document.querySelector('#vehicle-make').value;
  const year = document.querySelector('#vehicle-year').value;

  fetch(
    API +
      '/smartsizes?yearid=' +
      year +
      '&makeid=' +
      make +
      '&modelid=' +
      model +
      '&SubmodelId=' +
      submodel +
      '&ProductType=tirewheel',
    request
  )
    .then((response) => {
      return response.json();
    })
    .then((jsondata) => {
      generateSizeOptions(jsondata.result);
    });
}

function optionsGenerator(optionsArray, parentNode, title) {
  var option;

  option = document.createElement('option');
  option.setAttribute('class', 'option');
  option.setAttribute('value', 0);
  option.appendChild(document.createTextNode(title));
  parentNode.appendChild(option);

  optionsArray.forEach((item) => {
    option = document.createElement('option');
    option.setAttribute('class', 'option');
    option.setAttribute('value', item.key);
    option.appendChild(document.createTextNode(item.value));
    parentNode.appendChild(option);
  });
}

function generateYearOptions(years) {
  const selectYearParent = document.querySelector('#vehicle-year');
  selectYearParent.options.length = 0;
  optionsGenerator(years, selectYearParent, 'Year');
}

function generateMakeOptions(makes) {
  const selectMakeParent = document.querySelector('#vehicle-make');
  selectMakeParent.options.length = 0;
  optionsGenerator(makes, selectMakeParent, 'Make');
}

function generateModelOptions(models) {
  const selectModelParent = document.querySelector('#vehicle-model');
  selectModelParent.options.length = 0;
  optionsGenerator(models, selectModelParent, 'Model');
}

function generateSubModelOptions(submodels) {
  const selectSubModelParent = document.querySelector('#vehicle-submodel');
  selectSubModelParent.options.length = 0;

  const treatedSubmodels = submodels.map((submodel) => {
    return {
      key: submodel.vcdB_SubmodelID,
      value: submodel.smartDescription,
    };
  });

  optionsGenerator(treatedSubmodels, selectSubModelParent, 'SubModel');
}

function generateSizeOptions(sizes) {
  const selectSizeParent = document.querySelector('#vehicle-size');
  selectSizeParent.options.length = 0;

  const treatedSizeOptions = sizes.map((size) => {
    return {
      value: size.tireSize + '/' + size.loadIndex + '/' + size.speedRating,
      key: size.fmk,
    };
  });

  optionsGenerator(treatedSizeOptions, selectSizeParent, 'Size');
}

function buildFinalQuery(value) {
  let car;
  const year = document.querySelector('#vehicle-year').value;

  fetch(API + '/' + value, request)
    .then((response) => {
      return response.json();
    })
    .then((jsondata) => {
      car = jsondata.result;
      const tagParam = `tag:rimSize${car.vehicleModel.rimSize} tag:boltPattern${car.vehicleChassis.boltPattern}`;
      const carInfo = car.makeName + ' ' + car.modelName + ' ' + year;

      document.querySelector('#search-for-products').value = tagParam;
      document.querySelector('#hubbore').value = car.vehicleChassis.hubbore;
      document.querySelector('#maxWheelLoad').value =
        car.vehicleChassis.maxWheelLoad;
      document.querySelector('#offsetMinFront').value =
        car.vehicleModel.offsetMinFront;
      document.querySelector('#offsetMaxFront').value =
        car.vehicleModel.offsetMaxFront;
      document.querySelector('#carEspecification').value = carInfo;
    });
}

if (window.location.pathname === '/') {
  document.addEventListener('DOMContentLoaded', function () {
    document
      .querySelectorAll('section[data-section-type="image-with-text"]')[1]
      .classList.add('lift-kits');
  });
}
