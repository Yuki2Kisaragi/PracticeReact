import React from "react"

type ContainerProps = {
    title:string,
    children:React.ReactNode
}

const Container = (props: ContainerProps): JSX.Element => {

    const { title, children } = props

    return (
        <div style={{ backgroundColor: 'red' }}>
            <span>{title}</span>
            <span>{children}</span>
        </div>
    )
}

const Parent = (): JSX.Element => {
    return ( 
        <Container title="Hello">
            <p>This area is arounded backgroundColor</p>
        </Container>
    )
}

export default Parent
