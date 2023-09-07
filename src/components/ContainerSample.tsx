const Container = (props: {title: string, children: React.ReactElement }) => {

    const { title, children } = props

    return (
        <div style={{ backgroundColor: 'red' }}>
            <span>{title}</span>
            <span>{children}</span>
        </div>
    )
}

const Parent = () => {
    return ( 
        <Container title="Hello">
            <p>This area is arounded backgroundColor</p>
        </Container>
    )
}

export default Parent
