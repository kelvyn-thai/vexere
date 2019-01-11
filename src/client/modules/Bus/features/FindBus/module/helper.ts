import {isEmpty} from 'lodash';

export const isFormSearchValid = (trip : any) => {
    const { data } = trip;
    if(isEmpty(data['from'])){
        return false;
    }
    if(isEmpty(data['to'])){
        return false;
    }
    if(isEmpty(data['date'])){
        return false;
    }
    return true;
}
