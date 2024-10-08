'use client'
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { Categories } from "@/components/shared/categories";
import { SortPopup } from "@/components/shared/sort-popup";
import { Container } from "@/components/shared/container";
import { useIntersection, useWindowScroll } from "react-use";

type Props = {
    className?: string
}

export const TopBar: React.FC<Props> = ({ className }) => {
    const [showLogo, setShowLogo] = useState(false);
    const { y: scrollY } = useWindowScroll();



    useEffect(() => {
        // Появление логотипа, если пользователь прокрутил более 200 пикселей
        setShowLogo(scrollY > 200);
    }, [scrollY]);

    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div className="absolute top-0 h-1"></div>

            <div className={cn('sticky top-0 bg-white/70 backdrop-blur-2xl py-5 shadow-lg shadow-black/5 z-10', className)}>
                <Container className={'flex items-center justify-between'}>
                    <div
                        className={cn(
                            'transition-all duration-500 ease-in-out cursor-pointer',
                            showLogo ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                        )}
                        onClick={handleLogoClick}
                    >
                        <img src="/logo.png" alt="Logo" className="w-12 h-12" />
                    </div>
                    <Categories />
                    <SortPopup />
                </Container>
            </div>
        </>
    );
};
