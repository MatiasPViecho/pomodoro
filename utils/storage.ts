export interface IActionStatus {
  success: boolean,
  msg: string,
}
export interface ITimer{
  id: string;
  startTime: string,
  duration: number,
  completed: boolean;
  category: string;
}
export interface IUser {
  name: string;
  categories: Array<string>;
  runningTimer: ITimer | null,
  previousTimer: Array<ITimer>,
}
export const defaultUser: IUser = {
  name: "",
  categories: ["general"],
  runningTimer: null,
  previousTimer: [],
}
const UUID = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
const generateUUID = (): string => {
  const newUUID = UUID;
  return newUUID.replace(/[xy]/g, function (x) {
    const r = (Math.random() * 16) | 0,
      v = x === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  })
}
export const getUserData = async (): Promise<IUser> => {
  const userDataString: string | null = typeof localStorage != 'undefined' ? (localStorage.getItem('user')) : null;
  const userDataParsed = userDataString ? JSON.parse(userDataString) : null;
  if(!userDataParsed && typeof localStorage != 'undefined') {
    const newUser = defaultUser;
    localStorage.setItem('user', JSON.stringify(newUser));
    return newUser
  }
  return userDataParsed;
}
export const updateUserName = async (newName: String): Promise<IActionStatus> => {
  const userData = await getUserData();
  return new Promise((resolve, reject) => {
    if(newName.length > 40) {
      reject({msg: "Name exceeds maximum length", success: false});
    };
    if(newName === userData.name){
      reject({msg: "Name has to be different!", success: false});
    }
    resolve(updateUserData({name: newName}, "Name changed correctly!"));
  })
}
const updateUserData = async (data: Object, sucessMessage: string): Promise<IActionStatus> => {
  try {
    const currentData: IUser = await getUserData();
    localStorage.setItem('user', JSON.stringify(Object.assign(currentData, data)));
    return {msg: sucessMessage, success: true};
  } catch (_e) {
    return {msg: "An error ocurred trying to write data", success: false};
  }
}
export const addCategoryStorage = async (category: string): Promise<IActionStatus> => {
  const userData: IUser = await getUserData();
  if(!userData.categories.includes(category)) {
    userData.categories.push(category);
    return updateUserData(userData, `Category ${category} added correctly!`);
  } else {
    return { success: false, msg: "Category already exists" };
  }
}
export const startTimer = async (duration: number, category: string): Promise<ITimer | null> => {
  const userData: IUser = await getUserData();
  const timerId: string = generateUUID();
  userData.runningTimer = {
    id: timerId,
    startTime: new Date().toISOString(),
    duration,
    category,
    completed: false
  }
  updateUserData(userData, "Timer initialized correctly");
  return userData.runningTimer;
}

export const StopTimer = async (): Promise<void> => {
  const userData: IUser = await getUserData();
  if(userData.runningTimer) {
    const { id, startTime, duration, category, completed } = userData.runningTimer;
    const timerData = {
      id,
      startTime,
      duration,
      category,
      completed
    };
    userData.previousTimer.push(timerData);
    userData.runningTimer = null;
    updateUserData(userData, "Timer stopped correctly");
  }
}
export const getCurrentTime = async (): Promise<ITimer | null> => {
  const userData: IUser = await getUserData();
  const { runningTimer } = userData
  return runningTimer;
}
export const setCurrentTimeCompletion = async (is_completed: boolean): Promise<void> => {
  const userData: IUser = await getUserData();
  if(userData.runningTimer){
    userData.runningTimer.completed = is_completed;
  }
}

export const getCurrentCategories = async (): Promise<Array<string>> => {
  const categories = (await getUserData()).categories
  return categories;
}