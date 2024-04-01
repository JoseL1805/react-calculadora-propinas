import { menuItems } from './data/db'
import { MenuItem } from './components'
import { useOrder } from './hooks/useOrder'


function App() {
    const {addItem} = useOrder();

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

                <div>
                    <h2>valores raros</h2>
                </div>

            </main>

        </>
    )
}

export default App
