
import { AppRegistry } from 'react-native';
import Pages from './src/RootNavigation';
console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.','source.uri should not be an empty string','Invalid props.style key'];
console.disableYellowBox = true // 关闭全部黄色警告
//启动
AppRegistry.registerComponent('lyzTest1', () => Pages);
