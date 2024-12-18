import { Mago } from "./Mago";
import { Luchador } from "./Luchador";
import { Arquero } from "./Arquero";

const mago1 = new Mago ("Arquímedes", 3, 200);
const luchador1 =  new Luchador ("Ralph el Demoledor", 1, 150);
const arquero1 =  new Arquero ("Robin Hood", 2, 170);

mago1.atacar();
arquero1.defender();
luchador1.atacar();
mago1.defender();
