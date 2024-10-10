'use client'
import React, {useEffect, useState} from 'react';
import {cn} from "@/lib/utils";
import {Categories} from "@/components/shared/categories";
import {SortPopup} from "@/components/shared/sort-popup";
import {Container} from "@/components/shared/container";
import {useWindowScroll} from "react-use";
import {Category} from "@prisma/client";

type Props = {
    className?: string
    category: Category[]
}

export const TopBar: React.FC<Props> = ({className, category}) => {
    const [showLogo, setShowLogo] = useState(false);
    const {y: scrollY} = useWindowScroll();


    useEffect(() => {
        setShowLogo(scrollY > 200);
    }, [scrollY]);

    const handleLogoClick = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <>
            <div className="absolute top-0 h-1"></div>

            <div
                className={cn('sticky top-0 bg-white/70 backdrop-blur-2xl py-4 shadow-lg shadow-black/5 z-10', className)}>
                <Container className={'flex items-center justify-between'}>
                    <div
                        className={cn(
                            'transition-all cursor-pointer absolute left-[100px]',
                            showLogo ? 'duration-500 ease-out translate-x-0 opacity-100'
                                : 'duration-300 ease-in -translate-x-10 opacity-0'
                        )}
                        onClick={handleLogoClick}
                    >
                        <img src="/logo.png" alt="Logo" className="w-12 h-12"/>
                    </div>
                    <Categories items={category}/>

                    <SortPopup/>
                </Container>
            </div>
        </>
    );
};
