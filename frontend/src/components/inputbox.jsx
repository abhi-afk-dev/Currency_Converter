import { useId } from "react"

function InputBox(
    { label,
        amount,
        onAmountChange,
        onCurrencyChange,
        currencyOptions = [],
        selectCurrency = "usd",
        amountDisable = false,
        currencyDisable = false }
) {
    const amountInputId = useId()
    return (
        <div className="w-[30rem] z=0 flex flex-col p-10 gap-2 bg-black/30 backdrop-blur-md border border-black/30 shadow-lg rounded-2xl">
            <div className="flex flex-wrap w-full px-6 py-3 justify-between bg-gray-200 rounded-lg">
                <div className="flex flex-col gap-2">
                    <label htmlFor={amountInputId}>{label}</label>
                    <input
                        type="text"
                        id={amountInputId}
                        className="outline-none"
                        placeholder={amount}
                        disabled={amountDisable}
                        value={amount}
                        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p>Currency Type</p>
                    <select
                        value={selectCurrency}
                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                        disabled={currencyDisable}
                    >
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>{currency}</option>
                        ))}
                    </select>

                </div>
            </div>
        </div>
    )
}

export default InputBox