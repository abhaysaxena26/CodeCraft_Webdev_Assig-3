import "../css/stats.css"

const Stats = ({ stats }) => {
    return (
        <div className="stats-container">
            {Object.entries(stats).map(([stat, value]) => (
                <li key={stat}>
                    <strong>{stat.charAt(0).toUpperCase() + stat.slice(1)}:</strong> {value}
                </li>
            ))}
        </div>
    )
}

export default Stats