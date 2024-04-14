 import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return (
      <div className="footer-flexbox-container footer">
        <SocialIcon network="github" url="https://github.com/AndriiMedvediev987" target='_blank'  style={{ height: 36, width: 36 }}/>
        <SocialIcon url="https://www.linkedin.com/in/andrew-medvedev-02a90a186" target='_blank' style={{ height: 36, width: 36 }}/>
      </div>
    );
  }
  