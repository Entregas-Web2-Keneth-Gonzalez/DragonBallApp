import Characters from "./Characters";

interface Planets {

    id: number;
    name: string;
    isDestroyed: boolean;
    description: string;
    image: string;
    characters?: Characters[];

}

export default Planets;
