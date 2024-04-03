import { Dispatch, SetStateAction } from "react"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
]

type TipPercentageFomrProps = {
    setTip : Dispatch<SetStateAction<number>>
}

export const TipPercentageForm = ({ setTip } :TipPercentageFomrProps ) => {
    return (
        <div>
            <h3 className="font-black text-2xl text-left">Propina</h3>
            <form>
                { tipOptions.map( tip => {
                    return ( 
                        <div key={tip.id} className="flex gap-2">
                            <label htmlFor={tip.id}>{tip.label}</label>
                            <input 
                                type="radio" 
                                name="tip" 
                                value={tip.value} 
                                id={tip.id} 
                                onChange={ (e) => setTip( + e.target.value)}
                                />
                        </div> 
                    )
                })}

            </form>
        </div>
    )
}
