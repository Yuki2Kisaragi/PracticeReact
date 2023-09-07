const Text = (props: {content: string}) => {
    // 親から子の方向でしか渡せない
    const { content } = props
    return <p className="text">{content}</p>
}

const Message = () => {
    const content1 = 'This is parent Message'
    const content2 = 'Message uses Text component'

    return (
        <div>
            <Text content={content1} />
            <Text content={content2} />
        </div>
    )
}

export default Message
