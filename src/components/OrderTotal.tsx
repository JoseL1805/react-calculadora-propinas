import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from '../helpers/index';

type OrderTotalProps = {
    order : OrderItem[],
    tip: number,
    placeOrder: ()=> void
}

export const OrderTotal = ({order, tip, placeOrder} :OrderTotalProps) => {

    const subTotal = useMemo( ()=> order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    const tipAmount = useMemo( () => subTotal * tip, [tip, order]);
    const total = subTotal + tipAmount

    return (
        <>
            <div className="space-y-3 text-left">

                <h2 className="font-black text-2xl">Totales y propinas: </h2>

                <p>Subtotal a pagar: 
                    <span className="font-bold">
                       {formatCurrency(subTotal)}
                    </span>
                </p>

                <p>Propina: 
                    <span className="font-bold">
                       { formatCurrency(tipAmount)} 
                    </span>
                </p>


                <p>Total a pagar: 
                    <span className="font-bold">
                    {formatCurrency(total)}
                    </span>
                </p>

            </div>

            <button  className="w-full bg-black p-3 uppercase text-white font-bold mt-10" 
                disabled={ total === 0} onClick={placeOrder}>Guardar</button>
        </>
    )
}
