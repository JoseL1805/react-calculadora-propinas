import { menuItems } from './data/db'
import { MenuItem, OrdersContent } from './components'
import { useOrder } from './hooks/useOrder'
import { OrderTotal } from './components/OrderTotal';


function App() {
    const { addItem , order, removeItem} = useOrder();

    return (
        <>
            <header className="bg-purple-900 py-5">
                <h1 className="text-center text-4xl text-white font-black">Calculadora de propinas y consumos</h1>
            </header>



            <main className='max-w-5xl mx-auto py-10 grid sm:grid-cols-2'>

                <div>
                    <h2 className='text-4xl font-black text-center'>Menu</h2>

                    <div className='space-y-5 mt-6'>
                        {
                            menuItems.map( item => {
                                return <MenuItem 
                                        key={item.id} 
                                        item={item}
                                        addItem={addItem}
                                        />
                            })
                        }
                    </div>

                </div>

                <div className='border border-dashed border-slate-300 px-5 text-center rounded-lg space-y-5'>
                    <OrdersContent 
                        order={order} 
                        removeItem={removeItem}
                        />

                    { order.length > 0 && 
                    <OrderTotal/>}

                </div>

            </main>

        </>
    )
}

export default App
