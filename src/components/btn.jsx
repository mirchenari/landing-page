export default function Btn({onClick, children}) {
    return(
        <button onClick={onClick} className="bg-secondry text-white hover:bg-primary py-2.5 px-8 rounded-full cursor-pointer">
            {children}
        </button>
    )
}