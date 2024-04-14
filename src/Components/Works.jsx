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
                    <div>
                        {work.link ? (
                            <a href={work.link} target="_blank" rel="noopener noreferrer">
                                {img(work)}
                            </a>
                        ) : (
                            img(work)
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Work;
