# Image Copier

A React Native Windows application that copies an image from the project's `assets` directory to the Windows `%temp%` folder.

## Setup

```bash
npm install
```

## Usage

1. Place your image file as `assets/sample.png`
2. Run the app:

```bash
npx react-native run-windows
```

3. Press the "Copy Image to %temp%" button

The image will be copied to your Windows temporary directory (typically `C:\Users\<username>\AppData\Local\Temp\`).

## Dependencies

- [react-native-windows](https://github.com/microsoft/react-native-windows) - Windows platform support
- [react-native-fs](https://github.com/itinance/react-native-fs) - File system access

## License

MIT
