import '../../style/05-objects/row.scss';

const Row = (props: any) => {
    return (
        <div className={`o-row ${props.className ? props.className : ''}`}>
            { props.children }
        </div>
    )
}

export default Row;