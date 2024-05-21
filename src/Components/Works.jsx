function img(work) {
    return (
        work.src ? (
            <img src={`./${work.src}`} alt={work.name} />
        ) : (
            <img src={`${work.image}`} alt={work.name} />
        )
    );
}

function Work(props) {
    return (
        <div className="works-container">
            {props.works.map((work) => (
                <div key={work.name} className="work">
                    <h3>{work.name}</h3>
                    <h5>{work.description}</h5>
                    <div>
                        {work.link ? (
                            <a href={work.link} target="_blank" rel="noopener noreferrer">
                                {img(work)}
                            </a>
                        ) : (
                            img(work)
                        )}
                    </div>
                    <div style={{ color: 'darkgray' }}>Used skills or technologies: <div style={{ display: 'inline-block', color: 'black' }}>{work.skills}</div></div>
                    {work.deploy ? <div>
                        <div style={{ color: 'darkgray' }}>Deploy here: <a href={work.deploy} target="_blank" rel="noopener noreferrer">{work.name}</a></div>
                    </div> : <div/>}
                </div>
            ))}
        </div>
    );
}

export default Work;
