export function TaskCard() {
    const cardStyle = {
        background: '#000',
        color: '#fff',
        padding: '20px',
        fontSize: '16px',
    }
    const titleStyle = {
        color: '#fff',
        fontSize: '32px',
    }
    return(<>
        <div style={cardStyle}>
            <h1 style={titleStyle}>Mi primer Tarea</h1>
            <p>Tarea realizada..</p>
        </div>
    </>);
}