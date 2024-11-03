declare const KeyPressNotice: (props: {
    top?: string;
    left?: string;
    containerStyle?: React.CSSProperties;
    containerCls?: string;
    kbdStyles?: React.CSSProperties;
    kbdCls?: string;
    showTime?: number;
    enable?: boolean;
    customKeyEmojiMap?: {
        [key: string]: string;
    };
}) => import("react/jsx-runtime").JSX.Element;
export default KeyPressNotice;
