export default universities;
declare const universities: {
    id: number;
    name: string;
    departments: {
        id: number;
        name: string;
        specializations: {
            id: number;
            name: string;
            students: {
                id: number;
                name: string;
                email: string;
                age: number;
            }[];
        }[];
    }[];
}[];
