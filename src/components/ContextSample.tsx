import React from "react"

// generated context
const TitleContext = React.createContext('')

const Title = () => {
    return (
        <TitleContext.Consumer>
        {/* ConsumerでContextの値を参照する */}
            {(title) => {
                return <h1>{title}</h1>
            }}
        </TitleContext.Consumer>
    )
}

const Header = () => {
    return(
        <div>
            {/* 何もデータを渡していない*/}
            <Title />
        </div>
    )
}

const Page = () => {
    const title = "React Book"

    return (
        <TitleContext.Provider value={title}>
            {/* ProviderでContextの値を送る */}
            <Header />
        </TitleContext.Provider>
    )
}

export default Page
