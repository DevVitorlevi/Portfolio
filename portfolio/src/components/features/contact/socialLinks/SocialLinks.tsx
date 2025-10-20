import { SocialWrapper } from "./SocialLinksStyle";
import WhatsAppIcon from "../../../../assets/images/whatsapp.png";

const SocialLinks = () => {
  const medias = [
    { icon: "https://skillicons.dev/icons?i=github", url: "https://github.com/DevVitorlevi", alt: "GitHub" },
    { icon: "https://skillicons.dev/icons?i=linkedin", url: "https://linkedin.com/in/vitor-levi", alt: "LinkedIn" },
    { icon: WhatsAppIcon, url: "https://wa.link/crdsah", alt: "WhatsApp" }
  ];

  return (
    <SocialWrapper>
      {medias.map((media, index) => (
        <a
          key={index}
          href={media.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={media.icon} alt={media.alt} />
        </a>
      ))}
    </SocialWrapper>
  );
};

export default SocialLinks;
