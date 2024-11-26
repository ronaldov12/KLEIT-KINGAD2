export default function CartWidget({ cartCount }) {  
    return (
        <a
            className="nav-link"
            style={{
                display: 'flex',
                alignItems: 'center',
                padding: 0,
                margin: 0
            }}
        >
            <span style={{ fontSize: '20px' }}>
                <i className="bi bi-bag-fill"></i>
            </span>
            <span className="badge bg-secondary">{cartCount}</span>
        </a>
    );
}