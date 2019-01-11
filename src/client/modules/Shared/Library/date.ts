export const convertTimeStampToString = (timeStamp : number) => {
    const date = new Date(timeStamp);
    const hours = convertTimeStampToHours(timeStamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${hours} ${day}-${month}-${year}`; 
}

export const convertTimeStampToHours = (timeStamp: number) => {
    const hours = beautifulHour(timeStamp);
    const minutes = beatifulMinutes(timeStamp);
    return `${hours} : ${minutes}`;
}

export const convertTimeStampToDate = (timeStamp: number) => {
    const date = new Date(timeStamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}-${month}-${year}`; 
}



export const beautifulHour = (timeStamp: number) => {
    const date = new Date(timeStamp);
    const hour = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
    return hour;
}


export const beatifulMinutes = (timeStamp: number) => {
    const date = new Date(timeStamp);
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`; 
    return minutes;
}