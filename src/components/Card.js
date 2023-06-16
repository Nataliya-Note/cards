export default function Card(props) {
    const { width = '18rem', children, title, text, btnName } = props;
  
    return (
      <div className="card" style={{ width: width }}>
        {children}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="#0" className="card-btn">{btnName}</a>
        </div>
      </div>
    );
  }