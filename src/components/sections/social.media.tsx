import { FaFacebook, FaGithub } from "react-icons/fa6";


interface IProps {
  youtube: string;
  tiktok: string;
  udemy: string;
  facebook: string;
}
const SocialMedia = (props: IProps) => {
  const {  udemy, facebook } = props;

  return (
    <div className="my-4 d-flex items-center gap-3">
      {/* <a href={youtube} target='_blank' className="highlight" title="Youtube Hỏi Dân IT">
                <SiYoutubeshorts size={30} />
            </a>
            <a href={tiktok} target='_blank' className="highlight" title="Tiktok Hỏi Dân IT">
                <FaTiktok size={30} />
            </a> */}
      {/* <a href={udemy} target='_blank' className="highlight" title="Udemy Hỏi Dân IT">
                <SiUdemy size={30} />
            </a> */}
      <a
        href={facebook}
        target="_blank"
        className="highlight"
        title="Facebook Phan Anh Mỹ"
      >
        <FaFacebook size={30} />
      </a>
      <a
        href={udemy}
        target="_blank"
        className="highlight"
        title="Github Phan Anh Mỹ"
      >
        <FaGithub size={30} />
      </a>
    </div>
  );
};

export default SocialMedia;
