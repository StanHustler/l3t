import React from "react";
import { JSX } from "react/jsx-runtime";

export class L3tIcon {
    static heart = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
        return (
            <svg viewBox="0 0 24 24" {...props}>
                <path d="M12.001 4.529a5.998 5.998 0 0 1 8.242.228 6 6 0 0 1 .236 8.236l-8.48 8.492-8.478-8.492a6 6 0 0 1 8.48-8.464Zm6.826 1.641a3.998 3.998 0 0 0-5.49-.153l-1.335 1.198-1.336-1.197a4 4 0 0 0-5.686 5.605L12 18.654l7.02-7.03a4 4 0 0 0-.193-5.454Z" />
            </svg>
        );
    };

    static heart_fill = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
        return (
            <svg viewBox="0 0 24 24" {...props}>
                <path d="M12.001 4.529a5.998 5.998 0 0 1 8.242.228 6 6 0 0 1 .236 8.236l-8.48 8.492-8.478-8.492a6 6 0 0 1 8.48-8.464Z" />
            </svg>
        );
    }

    static bookmark = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
        return (
            <svg viewBox="0 0 24 24" {...props}>
                <path d="M3 18.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A3.5 3.5 0 0 1 3 18.5ZM19 20v-3H6.5a1.5 1.5 0 0 0 0 3H19ZM10 4H6a1 1 0 0 0-1 1v10.337A3.486 3.486 0 0 1 6.5 15H19V4h-2v8l-3.5-2-3.5 2V4Z" />
            </svg>
        );
    }

    static bookmark_fill = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
        return (
            <svg viewBox="0 0 24 24" {...props}>
                <path d="M20 22H6.5A3.5 3.5 0 0 1 3 18.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Zm-1-2v-3H6.5a1.5 1.5 0 0 0 0 3H19ZM10 4v8l3.5-2 3.5 2V4h-7Z" />
            </svg>
        );
    }

    static check_double = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
        return (
            <svg viewBox="0 0 24 24" {...props}>
                <path d="m11.602 13.76 1.412 1.412 8.466-8.466 1.414 1.415-9.88 9.88-6.364-6.365 1.414-1.414 2.125 2.125 1.413 1.412Zm.002-2.828 4.952-4.953 1.41 1.41-4.952 4.953-1.41-1.41Zm-2.827 5.655L7.364 18 1 11.636l1.414-1.414 1.413 1.413-.001.001 4.951 4.951Z" />
            </svg>
        );
    }

    static list_check_2 = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
        return (
            <svg viewBox="0 0 24 24" {...props}>
                <path d="M11 4h10v2H11V4Zm0 4h6v2h-6V8Zm0 6h10v2H11v-2Zm0 4h6v2h-6v-2ZM3 4h6v6H3V4Zm2 2v2h2V6H5Zm-2 8h6v6H3v-6Zm2 2v2h2v-2H5Z" />
            </svg>
        );
    }

    static reply = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
        return (
            <svg viewBox="0 0 24 24" {...props}>
                <path d="M11 20 1 12l10-8v5c5.523 0 10 4.477 10 10 0 .273-.01.543-.032.81A8.999 8.999 0 0 0 13 15h-2v5Z" />
            </svg>
        );
    }
}