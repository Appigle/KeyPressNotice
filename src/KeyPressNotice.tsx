import { useCallback, useEffect, useRef, useState } from 'react';
import useDebouncedCallback from './useDebounceCallback';

const KeyPressNotice = (props: {
  top?: string;
  left?: string;
  containerStyle?: React.CSSProperties;
  containerCls?: string;
  kbdStyles?: React.CSSProperties;
  kbdCls?: string;
  showTime?: number;
  enable?: boolean;
  customKeyEmojiMap?: { [key: string]: string };
}) => {
  const {
    top = '75%',
    left = '0',
    containerCls = '',
    containerStyle,
    kbdCls,
    kbdStyles = {},
    showTime = 500,
    customKeyEmojiMap,
    enable = true,
  } = props;

  // https://lingojam.com/TextToEmojiLetters
  const [KEY_EMOJI] = useState<{ [key: string]: string }>({
    KeyA: '🅰',
    KeyB: '🅱',
    KeyC: '🅲',
    KeyD: '🅳',
    KeyE: '🅴',
    KeyF: '🅵',
    KeyG: '🅶',
    KeyH: '🅷',
    KeyI: '🅸',
    KeyJ: '🅹',
    KeyK: '🅺',
    KeyL: '🅻',
    KeyM: '🅼',
    KeyN: '🅽',
    KeyO: '🅾',
    KeyP: '🅿',
    KeyQ: '🆀',
    KeyR: '🆁',
    KeyS: '🆂',
    KeyT: '🆃',
    KeyU: '🆄',
    KeyV: '🆅',
    KeyW: '🆆',
    KeyX: '🆇',
    KeyY: '🆈',
    KeyZ: '🆉',
    Digit0: '0️⃣',
    Digit1: '1️⃣',
    Digit2: '2️⃣',
    Digit3: '3️⃣',
    Digit4: '4️⃣',
    Digit5: '5️⃣',
    Digit6: '6️⃣',
    Digit7: '7️⃣',
    Digit8: '8️⃣',
    Digit9: '9️⃣',
    Enter: '↵',
    Space: '␣',
    Backspace: '⌫',
    Tab: '⇥',
    ShiftLeft: '⇧',
    ControlLeft: '⌃',
    AltLeft: '⌥',
    MetaLeft: '⌘',
    ArrowUp: '↑',
    ArrowDown: '↓',
    ArrowLeft: '←',
    ArrowRight: '→',
    CapsLock: '⇪',
    PageUp: '⇞',
    PageDown: '⇟',
    Home: '🏠',
    End: '🔚',
    Insert: 'Ins',
    Delete: 'Del',
    F1: 'F1',
    F2: 'F2',
    F3: 'F3',
    F4: 'F4',
    F5: 'F5',
    F6: 'F6',
    F7: 'F7',
    F8: 'F8',
    F9: 'F9',
    F10: 'F10',
    F11: 'F11',
    F12: 'F12',
    NumLock: 'Num Lock',
    Numpad0: '0️⃣',
    Numpad1: '1️⃣',
    Numpad2: '2️⃣',
    Numpad3: '3️⃣',
    Numpad4: '4️⃣',
    Numpad5: '5️⃣',
    Numpad6: '6️⃣',
    Numpad7: '7️⃣',
    Numpad8: '8️⃣',
    Numpad9: '9️⃣',
    NumpadAdd: '+',
    NumpadSubtract: '-',
    NumpadMultiply: '×',
    NumpadDivide: '÷',
    NumpadDecimal: '.',
    ...customKeyEmojiMap,
  });
  const [keys, setKeys] = useState<KeyboardEvent[]>([]);
  const [isPwdInputFocused, setIsPwdInputFocused] = useState(false);

  const [isDown, setIsDown] = useState(false);
  const timerRef = useRef(0);
  const clear = useCallback(() => {
    if (isDown || keys.length === 0) return;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    timerRef.current && clearInterval(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setKeys([]);
    }, showTime - 500);
  }, [isDown, showTime, keys]);

  const dcClear = useDebouncedCallback(clear, 500);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!enable) return;
      setIsDown(true);
      setKeys((prevKeys) => [...prevKeys, e]);
    };

    const handleKeyUp = () => {
      setIsDown(false);
    };

    if (enable) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleKeyUp);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [enable]);

  useEffect(() => {
    dcClear();
  }, [dcClear, keys]);

  useEffect(() => {
    const handleFocus = () => {
      setIsPwdInputFocused(true);
    };

    const handleBlur = () => {
      setIsPwdInputFocused(false);
    };
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          if (mutation.addedNodes.length > 0) {
            mutation.addedNodes.forEach((node) => {
              if (!(node as HTMLElement).querySelectorAll) return;
              (node as HTMLElement)
                .querySelectorAll('input[type="password"]')
                .forEach((input) => {
                  input.addEventListener('focus', handleFocus);
                  input.addEventListener('blur', handleBlur);
                });
            });
          }
          if (mutation.removedNodes.length > 0) {
            mutation.removedNodes.forEach((node) => {
              if (!(node as HTMLElement).querySelectorAll) return;
              (node as HTMLElement)
                .querySelectorAll('input[type="password"]')
                .forEach((input) => {
                  input.removeEventListener('focus', handleFocus);
                  input.removeEventListener('blur', handleBlur);
                });
            });
          }
        }
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    const inputs: HTMLInputElement[] = [];
    document.querySelectorAll('input[type="password"]').forEach((input) => {
      inputs.push(input as HTMLInputElement);
    });

    inputs.forEach((input) => {
      input.addEventListener('focus', handleFocus);
      input.addEventListener('blur', handleBlur);
    });

    return () => {
      inputs?.forEach((input) => {
        input.removeEventListener('focus', handleFocus);
        input.removeEventListener('blur', handleBlur);
      });
    };
  }, []);

  return (
    <>
      {enable && !isPwdInputFocused && keys.length > 0 && (
        <div
          className={containerCls}
          style={{
            position: 'absolute',
            zIndex: 20,
            display: 'flex',
            height: '4rem', // Adjust for h-16 conversion
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem', // Adjust for gap-4 conversion
            backgroundColor: 'transparent',
            top,
            left,
            ...containerStyle,
          }}
        >
          {keys.map((key, index) => (
            <div
              key={`${index}-${key}`}
              className={kbdCls} // Assuming kbdCls contains additional styles
              style={{
                inset: 0,
                display: 'flex',
                height: '4rem', // Adjust for h-16 conversion
                width: 'auto',
                minWidth: '4rem', // Adjust for min-w-16 conversion
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '.5rem', // Adjust for rounded-lg conversion
                backgroundColor: '#202020', // Adjust for bg-gray-900 conversion
                padding: '.5rem', // Adjust for p-2 conversion
                fontSize: '1.5rem', // Adjust for text-2xl conversion
                fontWeight: 'bold',
                color: '#fff',
                opacity: 0.75,
                ...kbdStyles,
              }}
            >
              {KEY_EMOJI[key.code] ? (
                <span className="emoji-key" style={{ fontSize: '2.5rem' }}>
                  {KEY_EMOJI[key.code]}
                </span>
              ) : (
                key.key
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default KeyPressNotice;
