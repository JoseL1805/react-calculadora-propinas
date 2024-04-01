import { formatCurrency } from '../helpers';
import { OrderItem, MenuItem as MenuItemType} from '../types/index';

type OrderContentProps = {
    order: OrderItem[],
    removeItem: (id : MenuItemType['id']) => void
}

export const OrdersContent = ({order, removeItem} : OrderContentProps) => {

    return (
        <div className='mt-1'>
            <h2 className="font-black text-4xl">Consumo</h2>

            <div className='space-y-5 mt-5'>
                {
                    order.length === 0 
                    ?   <p className='text-center'>La orden esta vacía</p>
                    :  (
                        order.map( item => {
                            return ( 
                            <div key={item.id} className='flex justify-between border-b border-gray-200 py-5 last-of-type:border-b items-center '>
                                <div>
                                    <p className='text-lg'>{item.name} - {formatCurrency(item.price)}</p>
                                    <p className='font-black text-left'> Cantidad: {item.quantity} - {formatCurrency(item.price)}</p>
                                </div>

                                <button onClick={ ()=> removeItem(item.id)} className='bg-red-600 h-8 w-8 rounded-full text-white font-black'>
                                    X
                                </button>

                            </div>)
                        })
                    )
                }
            </div>


        </div>
    )
}
