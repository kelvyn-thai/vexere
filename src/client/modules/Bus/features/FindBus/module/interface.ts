export interface InjectProps{
    title: string,
    bus: any,
    changeFromLocation: (payload:any) => ({type: string, action: any}),
    changeToLocation: (payload:any) => ({type: string, action: any}),
    changeDateLocation: (payload:any) => ({type: string, action: any}),
    onFindBus: (e: any) => void,
}

export interface IPropsHOC{
    data: any,
    cities: any,
    bus: any,
    match: any,
    history: any,
    title: string,
    fetchListCities: () => ({type: string, action: any}),
    changeFromLocation: (payload:any) => ({type: string, action: any}),
    changeToLocation: (payload:any) => ({type: string, action: any}),
    changeDateLocation: (payload:any) => ({type: string, action: any}),
    findBus: (payload: any) => ({type: string, action: any})
}