import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	FlatList,
	StyleSheet,
	Dimensions,
	SectionList,
	TouchableOpacity,
	ActivityIndicator,
	TouchableNativeFeedback,
	ScrollView,
	PixelRatio,
} from 'react-native';

export default class Products extends Component {

	constructor(props) {
		super(props)
		this.state = {
			leftCategoryData: ['正在流行', '女装', '男装', '美妆', '运动', '包包', '鞋子', '配饰', '裙子', '内衣', '袜子', '裙子', '内衣', '袜子'],
			selectCategoryIndex: 0,
			rightData: [
				[
					[
						{ 'name': '毛呢外套', "img": "http://p0.meituan.net/codeman/c217fffcbf9b434844434a0acbdb434827837.jpg" },
						{ 'name': '毛衣', "img": "http://p0.meituan.net/codeman/c217fffcbf9b434844434a0acbdb434827837.jpg" },
						{ 'name': '裙子', "img": "http://p0.meituan.net/codeman/c217fffcbf9b434844434a0acbdb434827837.jpg" }
					],
					[
						{ 'name': '卫衣', "img": "http://p0.meituan.net/codeman/c217fffcbf9b434844434a0acbdb434827837.jpg" },
						{ 'name': '风衣', "img": "http://p0.meituan.net/codeman/c217fffcbf9b434844434a0acbdb434827837.jpg" },
						{ 'name': '裤子', "img": "http://p0.meituan.net/codeman/c217fffcbf9b434844434a0acbdb434827837.jpg" }
					],
					[
						{ 'name': '羽绒服', "img": "http://p0.meituan.net/codeman/c217fffcbf9b434844434a0acbdb434827837.jpg" },
						{ 'name': '帽子', "img": "http://p0.meituan.net/codeman/c217fffcbf9b434844434a0acbdb434827837.jpg" },
						{ 'name': '鞋子', "img": "http://p0.meituan.net/codeman/c217fffcbf9b434844434a0acbdb434827837.jpg" }
					]

				],
				
				[
					[
						{ 'name': '毛呢外套2', "img": "http://p0.meituan.net/codeman/c217fffcbf9b434844434a0acbdb434827837.jpg" },
						{ 'name': '毛衣2', "img": "http://p0.meituan.net/codeman/c217fffcbf9b434844434a0acbdb434827837.jpg" },
						{ 'name': '裙子2', "img": "http://p0.meituan.net/codeman/c217fffcbf9b434844434a0acbdb434827837.jpg" }
					],
					[
						{ 'name': '卫衣2', "img": "http://p0.meituan.net/codeman/c217fffcbf9b434844434a0acbdb434827837.jpg" },
						{ 'name': '风衣2', "img": "http://p0.meituan.net/codeman/c217fffcbf9b434844434a0acbdb434827837.jpg" },
						{ 'name': '裤子2', "img": "http://p0.meituan.net/codeman/c217fffcbf9b434844434a0acbdb434827837.jpg" }
					],
					[
						{ 'name': '羽绒服2', "img": "http://p0.meituan.net/codeman/c217fffcbf9b434844434a0acbdb434827837.jpg" },
						{ 'name': '帽子2', "img": "http://p0.meituan.net/codeman/c217fffcbf9b434844434a0acbdb434827837.jpg" },
						{ 'name': '鞋子2', "img": "http://p0.meituan.net/codeman/c217fffcbf9b434844434a0acbdb434827837.jpg" }
					]
				],
				
				
				[
					[
						{ 'name': '毛呢外套3', "img": "http://p0.meituan.net/codeman/c217fffcbf9b434844434a0acbdb434827837.jpg" },
						{ 'name': '毛衣3', "img": "http://p0.meituan.net/codeman/c217fffcbf9b434844434a0acbdb434827837.jpg" },
						{ 'name': '裙子3', "img": "http://p0.meituan.net/codeman/c217fffcbf9b434844434a0acbdb434827837.jpg" }
					],
					[
						{ 'name': '卫衣3', "img": "http://p0.meituan.net/codeman/c217fffcbf9b434844434a0acbdb434827837.jpg" },
						{ 'name': '风衣3', "img": "http://p0.meituan.net/codeman/c217fffcbf9b434844434a0acbdb434827837.jpg" },
						{ 'name': '裤子3', "img": "http://p0.meituan.net/codeman/c217fffcbf9b434844434a0acbdb434827837.jpg" }
					],
					[
						{ 'name': '羽绒服3', "img": "http://p0.meituan.net/codeman/c217fffcbf9b434844434a0acbdb434827837.jpg" },
						{ 'name': '帽子3', "img": "http://p0.meituan.net/codeman/c217fffcbf9b434844434a0acbdb434827837.jpg" },
						{ 'name': '鞋子3', "img": "http://p0.meituan.net/codeman/c217fffcbf9b434844434a0acbdb434827837.jpg" }
					]
				]
			]
			
		};
	}


	categoryClick(index) {
		this.setState({
			selectCategoryIndex: index
		});
	}

	leftRenderRow() {
		var leftDom = [];
		for (var i = 0; i < this.state.leftCategoryData.length; i++) {
			leftDom.push(
				<TouchableOpacity activeOpacity={1} onPress={this.categoryClick.bind(this, i)} key={i}>
					<View key={i} style={{
						height: 50,
						backgroundColor: this.state.selectCategoryIndex == i ? 'white' : '#F0F0F0',
						justifyContent: 'center',
						alignItems: 'center',
						borderBottomWidth: this.state.selectCategoryIndex == i ? 0 : 1 / PixelRatio.get(),
						borderBottomColor: 'rgb(200,200,200)',
						width:80
					}}>
						<Text>{this.state.leftCategoryData[i]}
						</Text>
					</View>
				</TouchableOpacity>
			)
		};
		return (
			leftDom
		);
	}

	//一行三条数据
	rightRenderRowItem(index) {
		var rowItemDom = []
		for (var i = 0; i < this.state.rightData[this.state.selectCategoryIndex][index].length; i++) {
			rowItemDom.push(
				<View key={i} style={{
					alignItems: 'center'
				}}>
					<Image source={{ uri: this.state.rightData[this.state.selectCategoryIndex][index][i].img }} style={{
						height: 100,
						width: 80
					}} resizeMode={'cover'}>
					</Image>
					<Text style={{
						marginTop: 0
					}}>
						{this.state.rightData[this.state.selectCategoryIndex][index][i].name}
					</Text>
				</View>
			)
		}
		return (
			rowItemDom
		);
	}

	rightRenderRow() {
		var rightDom = [];
		for (var i = 0; i < this.state.rightData[this.state.selectCategoryIndex].length; i++) {
			rightDom.push(
				<View key={i} style={{
					flexDirection: 'row',
					justifyContent: 'space-around',
					marginTop: 20
				}}>
					{this.rightRenderRowItem(i)}
				</View>
			)
		}
		return (
			rightDom
		);
	}

	render() {
		return (
			
        
		
			<View style={styles.container}>	
				<View style={styles.leftStyle}>
					<ScrollView showsVerticalScrollIndicator={false}>
						{this.leftRenderRow()}
					</ScrollView>
				</View>
				<View style={styles.rightStyle}>
					<ScrollView showsVerticalScrollIndicator={false}>
						{this.rightRenderRow()}
					</ScrollView>
				</View>
			</View>
		
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		flexDirection: 'row',
	},
	leftStyle: {
		flex: 2
	},
	rightStyle: {
		flex: 6
	},
	
});