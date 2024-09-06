import Planets from "./Planets";
import Transformations from "./Transformations";

interface Characters {

    id: number;
    name: string;
    ki: string;
    maxKi: string;
    race: string;
    gender: string;
    description: string;
    image: string;
    affiliation: string;
    originPlanet?: Planets;
    transformations?: Transformations[];

}

export default Characters;