# React-key-press-notice

A simple React component to display the currently pressed key on the screen in real-time.

![Key Press Gif](https://www.unpkg.com/react-key-press-notice@0.0.4/dist/KeyPressNotice.gif)

## Installation

```Bash
npm install react-key-press-notice
Use code with caution.
```

## Usage

```JavaScript
import KeyPressNotice from 'react-key-press-notice';

function App() {
  return <KeyPressNotice />;
}

export default App;
```

## Props

| Prop Name         | Type                      | Default | Optional | Description                                                                                                     |
| ----------------- | ------------------------- | ------- | -------- | --------------------------------------------------------------------------------------------------------------- |
| top               | string                    | 70%     | Yes      | Top position of the key display                                                                                 |
| left              | string                    | 0       | Yes      | Left position of the key display                                                                                |
| containerStyle    | React.CSSProperties       | {}      | Yes      | Custom styles for the container element                                                                         |
| containerCls      | string                    | ""      | Yes      | Custom class names for the container element                                                                    |
| kbdStyles         | React.CSSProperties       | {}      | Yes      | Custom styles for the key display element                                                                       |
| kbdCls            | string                    | ""      | Yes      | Custom class names for the key display element                                                                  |
| showTime          | number                    | 500     | Yes      | Duration (in milliseconds) to display the key                                                                   |
| enable            | boolean                   | TRUE    | Yes      | Whether to enable the key display                                                                               |
| customKeyEmojiMap | { [key: string]: string } | {}      | Yes      | Custom mapping of keys to emoji characters. This prop allows you to customize the emoji displayed for each key. |

## Example

```JavaScript
<KeyPressNotice
  customKeyEmojiMap={{
    'Enter': '⏎',
    'Backspace': '⌫',
    'Tab': '⇥',
    'Space': '␣',
    'ArrowUp': '↑',
    'ArrowDown': '↓',
    'ArrowLeft': '←',
    'ArrowRight': '→',
  }}
/>
```

## Feature

To prevent sensitive information from being displayed, you can use the enable prop to conditionally enable or disable the component based on specific use cases. For example, you might want to disable the component when a password input field is focused.

## License:

MIT

## Thanks

**YuanLiu**
