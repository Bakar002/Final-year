// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, get, query, orderByKey, limitToLast,set } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyR4HTsScLVPeDxJzna3GcgXPb-lMvF9Y",
  authDomain: "esp32-50aca.firebaseapp.com",
  databaseURL: "https://esp32-50aca-default-rtdb.firebaseio.com",
  projectId: "esp32-50aca",
  storageBucket: "esp32-50aca.appspot.com",
  messagingSenderId: "593333152624",
  appId: "1:593333152624:web:bbac58fbf68a1cfb17bdb5"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
// Fetch live data (latest data point)
export const fetchLiveData = (callback) => {
  const dataRef = query(ref(database, 'obd_data3/'), orderByKey(), limitToLast(1));
  onValue(dataRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const latestKey = Object.keys(data)[0];
      const latestData = data[latestKey];
      callback(latestData); // Directly pass the latest data without the ID
    } else {
      callback(null); // Handle the case where no data is found
    }
  });
};

  

export const fetchHistoricalData = async () => {
  const dataRef = ref(database, 'obd_data3/');
  const snapshot = await get(dataRef);
  return snapshot.val();
};
export const fetchHistoricalCoolantTemps = async () => {
  try {
    const dataRef = ref(database, 'obd_data3/');
    const snapshot = await get(dataRef);

    // Check if snapshot exists
    if (!snapshot.exists()) {
      console.error('No data available at the specified reference.');
      return [];
    }

    const data = snapshot.val();
    const coolantTemps = [];

    // Iterate through the data to extract coolant temperatures
    for (let key in data) {
      if (data.hasOwnProperty(key) && data[key].coolantTemp !== undefined) {
        coolantTemps.push(data[key].coolantTemp);
      }
    }

    // Check if data was collected
    if (coolantTemps.length === 0) {
      console.warn('No coolant temperatures found in the data.');
    }

    return coolantTemps;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
export const fetchHistoricalEngineLoad = async () => {
  try {
    const dataRef = ref(database, 'obd_data3/');
    const snapshot = await get(dataRef);

    // Check if snapshot exists
    if (!snapshot.exists()) {
      console.error('No data available at the specified reference.');
      return [];
    }

    const data = snapshot.val();
    const engineLoads = [];

    // Iterate through the data to extract engine load
    for (let key in data) {
      if (data.hasOwnProperty(key) && data[key].engineLoad !== undefined) {
        engineLoads.push(data[key].engineLoad);
      }
    }

    // Check if data was collected
    if (engineLoads.length === 0) {
      console.warn('No engine loads found in the data.');
    }

    return engineLoads;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
export const fetchHistoricalMph = async () => {
  try {
    const dataRef = ref(database, 'obd_data3/');
    const snapshot = await get(dataRef);

    // Check if snapshot exists
    if (!snapshot.exists()) {
      console.error('No data available at the specified reference.');
      return [];
    }

    const data = snapshot.val();
    const mphData = [];

    // Iterate through the data to extract mph
    for (let key in data) {
      if (data.hasOwnProperty(key) && data[key].mph !== undefined) {
        mphData.push(data[key].mph);
      }
    }

    // Check if data was collected
    if (mphData.length === 0) {
      console.warn('No mph data found in the data.');
    }

    return mphData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
export const fetchHistoricalOilTemp = async () => {
  try {
    const dataRef = ref(database, 'obd_data3/');
    const snapshot = await get(dataRef);

    // Check if snapshot exists
    if (!snapshot.exists()) {
      console.error('No data available at the specified reference.');
      return [];
    }

    const data = snapshot.val();
    const oilTemps = [];

    // Iterate through the data to extract oil temperature
    for (let key in data) {
      if (data.hasOwnProperty(key) && data[key].oilTemp !== undefined) {
        oilTemps.push(data[key].oilTemp);
      }
    }

    // Check if data was collected
    if (oilTemps.length === 0) {
      console.warn('No oil temperatures found in the data.');
    }

    return oilTemps;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
export const fetchHistoricalRpm = async () => {
  try {
    const dataRef = ref(database, 'obd_data3/');
    const snapshot = await get(dataRef);

    // Check if snapshot exists
    if (!snapshot.exists()) {
      console.error('No data available at the specified reference.');
      return [];
    }

    const data = snapshot.val();
    const rpmData = [];

    // Iterate through the data to extract RPM
    for (let key in data) {
      if (data.hasOwnProperty(key) && data[key].rpm !== undefined) {
        rpmData.push(data[key].rpm);
      }
    }

    // Check if data was collected
    if (rpmData.length === 0) {
      console.warn('No RPM data found in the data.');
    }

    return rpmData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

  



let dataInterval = null;  // Store interval for feeding data
let isPaused = false;  // Flag to check if simulation is paused

// Function to simulate dynamic car data
const generateDynamicData = (type, lastData) => {
  let data = { ...lastData };

  const getRandomChange = (min, max) => {
    return Math.random() * (max - min) + min; // Generate a random change between min and max
  };

  switch (type) {
    case 'normal':
      data.coolantTemp += getRandomChange(-0.5, 0.5);
      data.engineLoad += getRandomChange(-1, 1);
      data.mph += getRandomChange(-3, 3);
      data.oilTemp += getRandomChange(-0.5, 0.5);
      data.rpm += getRandomChange(-100, 100);
      break;
    case 'aggressive':
      data.coolantTemp += getRandomChange(-1, 1);
      data.engineLoad += getRandomChange(-5, 5);
      data.mph += getRandomChange(-10, 10);
      data.oilTemp += getRandomChange(-2, 2);
      data.rpm += getRandomChange(-500, 500);
      break;
    case 'average':
      data.coolantTemp += getRandomChange(-0.7, 0.7);
      data.engineLoad += getRandomChange(-2, 2);
      data.mph += getRandomChange(-5, 5);
      data.oilTemp += getRandomChange(-1, 1);
      data.rpm += getRandomChange(-250, 250);
      break;
    default:
      break;
  }

  // Clamp values within safe ranges
  data.coolantTemp = Math.min(Math.max(data.coolantTemp, 70), 120);
  data.engineLoad = Math.min(Math.max(data.engineLoad, 10), 100);
  data.mph = Math.min(Math.max(data.mph, 0), 150);
  data.oilTemp = Math.min(Math.max(data.oilTemp, 50), 130);
  data.rpm = Math.min(Math.max(data.rpm, 500), 8000);

  return data;
};

// Function to simulate engine starting
const startEngine = (callback) => {
  let initialData = {
    coolantTemp: 0,
    engineLoad: 0,
    mph: 0,
    oilTemp: 0,
    rpm: 0,
  };

  const increaseValuesGradually = () => {
    const interval = setInterval(() => {
      if (initialData.rpm < 2000) initialData.rpm += 200;
      if (initialData.mph < 20) initialData.mph += 2;
      if (initialData.coolantTemp < 70) initialData.coolantTemp += 5;
      if (initialData.oilTemp < 70) initialData.oilTemp += 5;
      if (initialData.engineLoad < 30) initialData.engineLoad += 3;

      console.log('Starting engine...', initialData);

      if (
        initialData.rpm >= 2000 &&
        initialData.mph >= 20 &&
        initialData.coolantTemp >= 70 &&
        initialData.oilTemp >= 70 &&
        initialData.engineLoad >= 30
      ) {
        clearInterval(interval);  // Stop when baseline is reached
        callback();  // Call callback to start driving mode
      }
    }, 500);
  };

  increaseValuesGradually();
};

// Function to stop engine and reset values
export const stopEngine = () => {
  clearInterval(dataInterval);  // Clear the interval
  dataInterval = null;

  const resetData = {
    coolantTemp: 0,
    engineLoad: 0,
    mph: 0,
    oilTemp: 0,
    rpm: 0,
  };

  const database = getDatabase();
  const timestamp = Date.now();
  const dataRef = ref(database, `/obd_data3/${timestamp}`);

  // Set the reset data in Firebase
  set(dataRef, resetData)
    .then(() => console.log('Engine stopped, data reset to zero'))
    .catch((error) => console.error('Error stopping engine:', error));
};

// Function to feed data to Firebase every 2 seconds
const feedDataToFirebase = (type, lastData) => {
  const database = getDatabase();
  const timestamp = Date.now();
  const dataRef = ref(database, `/obd_data3/${timestamp}`);

  const dynamicData = generateDynamicData(type, lastData);

  // Set dynamic data in Firebase
  set(dataRef, dynamicData)
    .then(() => console.log(`${type.charAt(0).toUpperCase() + type.slice(1)} data fed successfully`))
    .catch((error) => console.error('Error feeding data:', error));

  return dynamicData;
};

// Function to start feeding dynamic data based on driving mode
const startFeedingDynamicData = (type) => {
  let lastData = {
    coolantTemp: 70,
    engineLoad: 30,
    mph: 20,
    oilTemp: 70,
    rpm: 2000,
  };

  // Start feeding data every 2 seconds
  dataInterval = setInterval(() => {
    if (!isPaused) {
      lastData = feedDataToFirebase(type, lastData);
    }
  }, 500);
};

// Function to pause or resume data feeding
export const togglePause = () => {
  isPaused = !isPaused;
  console.log(isPaused ? 'Simulation paused' : 'Simulation resumed');
};

// Function to start the full engine cycle and driving mode
export const initiateDriving = (type) => {
  startEngine(() => {
    console.log("Engine started, transitioning to driving mode...");
    startFeedingDynamicData(type);
  });
};