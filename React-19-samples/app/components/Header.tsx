export function Header() {
    console.log("Header is Server or Client?")
    return (
        <header className="flex w-full items-center justify-between">
            <span className="text-lg font-bold">
                My App
            </span>
        </header>
    )
}