function changeTitle(title: string) {
    const prevTitle = document.title
    document.title = title
    return () => {
        document.title = prevTitle
    }
}

export default changeTitle