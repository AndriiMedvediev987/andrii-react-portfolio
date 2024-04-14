import MyResume from '../assets/files/resume.pdf';

export const DownloadLink = () => {
    return (
        <div>
            <>Download my <a href={MyResume} style={{ cursor: 'pointer', color: '#2a05f7aa' }} download="resume.pdf">resume</a></>
        </div>
    );
};