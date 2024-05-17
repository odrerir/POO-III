import CorreiosAdapter from "./adapter/CorreiosAdapter";
import Correios from "./correios/Correios";
import ICorreios from "./correios/interfaces/ICorreios";
import ITransportadora from "./transportadora/interfaces/ITransportadora";
import Transportadora from "./transportadora/Transportadora";

const correios: ITransportadora = new CorreiosAdapter(new Correios());
correios.sendCorreios();
correios.receiveCorreios();