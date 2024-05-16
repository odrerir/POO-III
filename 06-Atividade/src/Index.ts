
import PayonnerAdapter from "./adapter/PayonnerAdapter";
import IPayonnerPayment from "./Payonner/interfaces/IPayonnerPayment";
import Payonner from "./Payonner/Payonner";
import IPayPalPayment from "./paypal/interfaces/IPaypalPayment";
import Paypal from "./paypal/Paypal";

//const payment : IPayPalPayment = new Paypal();
const payment: IPayPalPayment = new PayonnerAdapter(new Payonner());
payment.sendPayment();
payment.ReceivePayment();

//const payment: IPayonnerPayment = new Payonner();
//payment.sendPayment();
//payment.receivePayment();
