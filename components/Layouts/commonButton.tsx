'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface CommonButtonProps {
    text: string;
    href?: string;
    onClick?: () => void;
    className?: string;
}

const CommonButton: React.FC<CommonButtonProps> = ({
    text,
    href,
    onClick,
    className = '',
}) => {
    const router = useRouter();

    const handleClick = () => {
        if (href) {
            router.push(href);
        } else if (onClick) {
            onClick();
        }
    };

    return (
        <button
            onClick={handleClick}
            className={className}
        >
            {text}
        </button>
    );
};

export default CommonButton;
