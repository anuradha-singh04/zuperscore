'use client';
import { contactInfo, footerSections } from '@/constant/commonData';
import Link from 'next/link';

const Footer = () => {

    return (
        <div className='bg-color'>
            {/* right section */}
            <div className='flex flex-wrap justify-between gap-10 p-5 px-6 max-w-[1280px] mx-auto'>
                <div className='pt-6 gap-10'>
                    <h1 className='footer-heading'>
                        Zuperscore
                    </h1>
                    <div className='footer-link mt-2'>
                        {/* call */}
                        <a href={`tel:${contactInfo.phone}`} className='flex gap-2'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                                />
                            </svg>

                            {/* mail */}
                            {contactInfo.phone}</a>
                        <a href={`mailto:${contactInfo.email}`} className='flex gap-2 mt-1'>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6 mt-1">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            {contactInfo.email}
                        </a>

                        {/* location */}
                        <a
                            href={contactInfo.locationUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex gap-2 '
                        >
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6  mt-1">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>

                            <div className='flex flex-col'>
                                {contactInfo.address.map((line, i) => (
                                    <span key={i}>{line}</span>
                                ))}
                            </div>
                        </a>

                        {/* social media*/}
                        {/* instragram */}
                        <div className='flex gap-4 mt-4'>
                            <a href={contactInfo.socialLinks.instagram} target='_blank'>
                                <svg className="w-8 h-8"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5Zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5Zm8.88 2.13a.88.88 0 1 0 0 1.75.88.88 0 0 0 0-1.75ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z" />
                                </svg>
                            </a>

                            {/* whatsapp*/}
                            <a href={contactInfo.socialLinks.whatsapp} target='_blank'>
                                <svg className="w-8 h-8"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.41 1.27 4.85L2 22l5.32-1.37A9.963 9.963 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm0 18.2c-1.54 0-3.02-.4-4.33-1.16l-.31-.18-3.15.81.84-3.07-.2-.32a8.202 8.202 0 1 1 7.15 3.92Zm4.5-6.34c-.25-.13-1.46-.72-1.68-.8-.22-.08-.38-.12-.53.13-.15.25-.61.8-.75.96-.14.15-.27.17-.5.04-.22-.13-.93-.34-1.76-1.1-.65-.58-1.1-1.29-1.22-1.5-.13-.22-.01-.34.1-.46.11-.11.25-.27.37-.41.12-.14.16-.25.25-.42.08-.17.04-.32-.02-.46-.07-.13-.53-1.26-.73-1.72-.2-.47-.4-.41-.53-.42-.13 0-.28-.01-.43-.01-.15 0-.4.06-.61.28-.22.22-.86.84-.86 2.06s.88 2.39 1 2.55c.12.17 1.73 2.64 4.2 3.6.59.25 1.05.4 1.41.51.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.66-1.19.2-.59.2-1.1.14-1.2-.06-.1-.23-.16-.48-.28Z" />
                                </svg>
                            </a>

                            {/* linkdin*/}
                            <a href={contactInfo.socialLinks.linkedin} target='_blank'>
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.5h5V24H0V8.5zm7.5 0h4.6v2.1h.06c.64-1.2 2.2-2.47 4.54-2.47 4.85 0 5.75 3.2 5.75 7.36V24h-5v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V24h-5V8.5z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* footer section */}
                {footerSections.map((section, idx) => (
                    <div key={idx} className='text-white font-[Poppins] mt-7'>
                        <h1 className='footer-link-heading'>{section.title}</h1>
                        <ul className='flex flex-col gap-2 text-[20px] font-normal leading-[140%] tracking-[0.36px] mt-2'>
                            {section.links.map((link, i) => (
                                <Link href={link.href} key={i}>
                                    <li className='footer-list-item'>{link.label}</li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* bottom section */}
            <div className='flex flex-wrap justify-between gap-x-10 px-6 pb-5 md:px-12 max-w-[1280px] mx-auto'>
                <p className='footer-bottom-text mt-6 -mx-3'>Copyright © 2025 SATnpaper</p>
                <div className='flex flex-wrap justify-between mt-6 gap-x-20 px-6 pb-10'>
                    <p className='footer-bottom-text'>
                        Terms of Service
                    </p>
                    <p className='footer-bottom-text'>
                        Privacy Policy
                    </p>
                    <p className='footer-bottom-text'>
                        Refund Policy
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
