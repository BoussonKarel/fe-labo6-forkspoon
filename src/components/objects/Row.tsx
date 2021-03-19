import '../../style/06-components/row.scss';

const Row = (props: any) => {
    return (
        <div className={`o-row ${props.className}`}>
            { props.children }
        </div>
    )
}

export default Row;