export type GlobalProps = {
    name: string;
    messageCount: number;
    isLoggedIn: boolean;
    first: string;
    last: string;

}

export type PersonX = {
    last: string;
    first: string;
    // name: {                  being commented cuz its inside the Name type
    //     first: string
    //     last: string
    // }
}

export type Name = {
    name: PersonX
}