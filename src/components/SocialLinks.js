import React from "react";
import socialLinks from "../constants/social_links";

const SocialLinks = () => {
    return (  
        <div className="social-links">
            {socialLinks.map(link => <a href={link.url} key={link.id}>{link.icon}</a>)}
        </div>
    );
}
 
export default SocialLinks;