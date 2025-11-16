import { TSocialLink } from '@/types/types';
import React from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaExternalLinkAlt,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { BsTwitterX } from 'react-icons/bs';
import Link from 'next/link';
const SocialLinks: React.FC<TSocialLink> = ({ layout, className }) => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      username: 'huzaifa-zafar-repo',
      url: 'https://github.com/huzaifa-zafar-repo',
    },
    {
      icon: <FaLinkedin />,
      username: 'huzaifa-zafar-146322389',
      url: 'https://www.linkedin.com/in/huzaifa-zafar-146322389/',
    },
    {
      icon: <FaInstagram />,
      username: 'huzaifa_zafar_46',
      url: 'https://www.instagram.com/huzaifa_zafar_46',
    },
    {
      icon: <BsTwitterX />,
      username: 'huzziidev',
      url: 'https://x.com/huzziidev?t=7PBlFCbK4pIkVDcRbVS4iA&s=09',
    },
    {
      icon: <MdOutlineEmail />,
      username: 'huzaifazafar.pk',
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=huzaifazafar.pk@gmail.com'
,
    },
  ];

  return (
    <div
      className={`flex flex-${layout} items-center justify-center  cursor-pointer ${className}`}
      data-aos="flip-down"
    >
      {socialLinks.map((link, index) => (
        <Link
          key={index}
          href={link.url}
          className=" relative flex items-center p-2 rounded-full transition-all duration-300"
          target="_blank"
        >
          <span className="text-2xl border-2 border-primary-foreground text-primary-foreground dark:text-primary dark:border-primary rounded-full p-2 transition-all duration-300  border-spacing-7 hover:border-dashed hover:scale-125">
            {link.icon}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
