import { Heart, HomeIcon, Library, MessageCircleMore, Quote, Settings, User } from "lucide-react";

export const NAV_ITEMS = [
    {
        label: 'Главная',
        href: "/",
        icon: <HomeIcon />
    },
    {
        label: 'Мои рецензии',
        href: "/reviews",
        icon: <MessageCircleMore />
    },
    {
        label: 'Библиотека',
        href: '/library',
        icon: <Library />
    },
    {
        label: 'Избранное',
        href: '/favorites',
        icon: <Heart />
    },
    {
        label: 'Цитаты',
        href: '/quotes',
        icon: <Quote />
    },
    {
        label: 'Профиль',
        href: '/profile',
        icon: <User />
    },
    
    {
        label: 'Настройки',
        href: '/settings',
        icon: <Settings />
    },

    
]