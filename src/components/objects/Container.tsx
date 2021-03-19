import '../../style/06-components/container.scss';

const Container = (props: any) => {
    return (
        <div className="o-container">
            { props.children }
        </div>
    )
}

export default Container;