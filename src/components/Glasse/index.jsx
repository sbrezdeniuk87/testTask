import './Glasse.css';

export const Glasse = (props) => {
    const { name, glass_variants } = props;
    return (
        <div className="collection-item">
            <div className="collection-item-name">
                <span className="glass-name">{ name }</span>
            </div>
            <div className="colection-img">
                <img src={`${glass_variants[0].media[0].url}`} />
            </div>
        </div>
    );
}